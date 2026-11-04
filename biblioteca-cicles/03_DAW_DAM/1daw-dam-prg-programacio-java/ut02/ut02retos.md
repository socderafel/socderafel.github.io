---
title: "Reptes de programació UT2"
unit: "2"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT02"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# Reptes de programació UT2

> **📌 Empaquetar reptes**
> 

> Empaqueta les activitats, dins de la carpeta **`ut02`**, en la carpeta **`retos`**.

> Les activitats programades en aquesta secció **Reptes** no són obligatòries.

### Repte 01

Modifica el programa perquè, en lloc de fer un descompte del *8%* si la compra és de *100 €* o més, aplique una penalizació de *2 €* si el preu és inferior a *30 €*.

```java
import java.util.Scanner;
//Un programa que calcula descuento.

public class Descuento {
  public static final float DESCOMPTE = 8;
  public static final float COMPRA_MIN = 100;

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.print("Cuál es el precio del producto, en euros? ");
    float preu = lector.nextFloat();
    lector.nextLine();
    if (preu >= COMPRA_MIN) {
      float descompteFet = preu * DESCOMPTE / 100;
      preu = preu - descompteFet;
      }
    System.out.println("El precio final para pagar es de " + preu + " euros.");
  }
}
```

### Repte 02

Modifica el programa `Adivina` perquè, en lloc d'un únic valor secreto, haja dos. Per a ganar, només cal acertar un dels dos. 

La condició lògica que us farà falta ja no es pot resoldre amb una expressió composta per una única comparació. Serà més complexa.

```java
import java.util.Scanner;

public class Adivina {

  public static final int VALOR_SECRET = 4;

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.println("Comencemos el juego.");
    System.out.print("Adivina el valor entero, entre 0 y 10: ");
    int valorUsuari = lector.nextInt();
    lector.nextLine();
    if (VALOR_SECRET == valorUsuari) {
      System.out.println("Exacto! Era " + VALOR_SECRET + ".");
    } else {
      System.out.println("Te has equivocado!");
    }
    System.out.println("Hemos terminado el juego.");
  }
}
```

### Repte 03

Modifica l'exemple anterior (`Adivina`) perquè  comprove que el valor que ha introduït l'usuari es troba dins del rang de valors correcte (entre *0* i *10*).

### Repte 04

Aplica el mateix tipus de control sobre les dades de l'entrada de l'exemple següent a l'exercici del repte 01.

```java
import java.util.Scanner;

public class AdivinaControlErrorsEntrada {

  public static final int VALOR_SECRET = 4;

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.println("Comencemos el juego.");
    System.out.print("Adivina el valor entero, entre 0 y 10: ");
    boolean tipusCorrecte = lector.hasNextInt();
    if (tipusCorrecte) {
       //Se ha escrito un entero correctamente. Ya se puede leer.
       int valorUsuari = lector.nextInt();
       lector.nextLine();
       if (VALOR_SECRET == valorUsuari) {
           System.out.println("Exacto! Era " + VALOR_SECRET + ".");
       } else {
           System.out.println("Te has equivocado!");
       }
       System.out.println("Hemos terminado el juego.");
    } else {
       //No se ha escrito un entero.
       System.out.println("El valor introducido no es un entero.");
    }
  }
}
```

### Repte 05

Modifica l'exemple perquè primer pregunte a l'usuari quants caràcters "*-*" vols escriure per pantalla, i llavors els escriga. 

Quan pruebes el programa, no introduzcas un número molt alt!

```java
//Un programa que escribe una línea con 100 caracteres ’ − ’.

public class Linea {

  public static void main(String[] args) {
    //Inicializamos un contador
    int i = 0;
    //Ja hemos hecho esto 100 veces
    while (i < 100) {
      System.out.print("−");
      //Lo hemos hecho una vez, sumamos 1 al contador
      i = i + 1;
    }
    //Forzamos un salto de línea
    System.out.println();
  }
}
```

### Repte 06

Un comptador tant pot començar a comptar des de *0* i anar subent, com des del final i anar disminuyendo com una compta arrere. 

Modifica aquest programa perquè la taula de multiplicar comence mostrant el valor per a *10* i vaja bajant fins al *1*.

```java
import java.util.Scanner;
public class TablaMultiplicar {

  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);
    System.out.print("Qué tabla de multiplicar quieres? ");
    int taula = lector.nextInt();
    lector.nextLine();
    int i = 1;
    while (i <= 10) {
       int resultat = taula * i;
       System.out.println(taula + " * " + i + " = " + resultat);
       i = i + 1;
    }
    System.out.println("Esta ha estado la tabla del " + taula);
  }
}
```

### Repte 07

L'ús de contadors i acumuladors no és excluyente, sinó que pot ser complementario. 

Pensa com es podrías modificar el programa per a calcular el resultat del mòdul i la divisió entera alhora. 

Recorda que la divisió entera simplement seria comptar quantes vegades es ha pogut restar el divisor.

```java
import java.util.Scanner;

public class Modulo {

  public static void main(String[] args) {
     Scanner lector = new Scanner(System.in);
     System.out.print("Cuál es el dividendo? ");
     int dividend = lector.nextInt();
     lector.nextLine();
     System.out.print("Cual es el divisor? ");
     int divisor = lector.nextInt();
     lector.nextLine();
     while (dividend >= divisor) {
        dividend = dividend - divisor;
         System.out.println("Bucle: por ahora el dividendo vale " + dividend + ".");
     }
     System.out.println("El resultado final es " + dividend + ".");
  }
}
```

### Repte 08

Realitza un programa que vaja pident números fins a que es introduzca un numero negatiu i ens diga cuantos números es han introduït, la mitjana dels impares i el major dels parells. 

El número negatiu només s'utilitza per a indicar el final de la introducció de dades però no s'inclou en el cómputo.

### Repte 09 `TablaMult`

Escriu un programa que permeta a l'usuari introduir un número `n` i imprima la taula de multiplicar (del *0* al *10*) de tots els números entre *1* i `n`. 

Exemple: Si l'usuari introdueix en número *5*, el programa imprimiría:

```java
Tabla del 1:
1 por 0, 0
1 por 1, 1
1 por 2, 2
...
1 por 10, 10

Tabla del 2:
2 por 0, 0
2 por 1, 2
....
2 por 10, 20

Tabla del 3:
...

Tabla del 5:
...
5 por 10, 50
```

### Repte 10 `Raiz`

Es desitja calcular l'arrel cuadrada real d'un número real qualsevol comanda inicialment a l'usuari. Com aquesta operació no està definida per als números negativos és necessari tractar, d'algun mode, aquest possible error sense que el programa detenga la seua ejecució.

### Repte 11 `IntermedioDeTres`

Escriure un programa que mostre l'intermedi de tres números introduïts per teclat.

### Repte 12 `Hora12`

Escriure un programa que lea l'hora d'un dia en notació de 24 hores i l'exprese en notació de 12 hores. Per exemple, si l'entrada és 13 hores 45 minuts, l'eixida serà 1:45 PM. L'hora i els minuts es leerán de teclat de forma separada, primer l'hora i després els minuts.

### Repte 13 `Fechas`

Escriure un programa que demane a l'usuari dos dates (dia, mes i any), que es suponen correctes, i li mostre la menor d'elles. La data es mostrarà en format dd/mm/any. Utilitza un mètode mostrarFecha, per a mostrar la data per pantalla. La data es mostrarà sempre amb dos dígitos per al dia, dos per al mes i quatre per a l'any.

### Repte 14 `DiasDelMes`

Escriure un programa que lea de teclat el número d'un mes (1 a 12) i visualice el número de dies que té el mes. Fer-ho utilitzant sentències `if else`. Per a fer el programa, implementa un mètode en la classe que reba un número de mes i retorne el número de dies que té el mes

### Repte 15 `NombreDelMes`

Escriure un programa que lea de teclat el número d'un mes (1 a 12) i visualice el nom del més (gener, febrer, etc). Fer-ho utilitzant sentències `if else`. Per a fer un programa, implementa un mètode en la classe que reba un número de mes i retorne el nom del mes

### Repte 16 `Salario`

Escriure un programa que lea de teclat les hores trabajades per un empleat en una setmana i calcule el seu salario neto semanal, sabent que:

- 

Les hores ordinarias es pagan a 6 €.

- 

Les hores extraordinarias es pagan a 10 €.

- 

Els impostos a deducir són:  

         _ Un 2 % si el salario bruto semanal és menor o igual a 350 €  

         _ Un 10 % si el salario bruto semanal és superior a 350 €

- 

La jornada semanal ordinaria són 40 hores. El resta d'hores trabajades es considerarán hores extra.

### Repte 17 `Signo`

Donats dos números enters, num1 i num2, realitzar un programa que escriga un dels dos missatges:

- "el producte dels dos números és positiu o nul" o bé

- "el producte dels dos números és negatiu".

Resolver-lo sense calcular el producte, sinó tenint en compte únicament el signe dels números a multiplicar.

### Repte 18 `Comercio`

Un comercio aplica un descompte del 8% per compres superiors a 40 euros. El descompte màxim serà de 12 euros. Escriure un programa que solicite a l'usuari l'importe de la compra i mostre un missatge similar al següent:

- Importe de la compra 100 €

- Percentatge de descompte aplicat: 8%

- Descompte aplicat: 8 €

- Quantitat a pagar: 92 €

### Repte 19 `Editorial`

Una companyia editorial disposa de 2 tipus de publicacions: llibres i revistas. El preu de cada comanda depèn del número d'elements solicitats al qual es li aplica un determinat descompte, que és diferent per a llibres i per a revistas. La següent taula mostra els descuentos a aplicar en funció del número d'unitats i del tipus de producte:

| Quantitat pedida | Llibres | Revistas |
| --- | --- | --- |
| Fins a 5 unitats | 0 % de descompte | 0 % de descompte |
| De 6 a 10 unitats | 10 % de descompte | 15 % de descompte |
| De 11 a 20 unitats | 15 % de descompte | 20 % de descompte |
| A partir de 20 unitats | 20 % de descompte | 25 % de descompte |

Escriu un mètode `calcularCoste` que, recibent el tipus de publicació (`String`), que pot ser "llibre" o "revista", el preu individual (`double`) i el número d'unitats solicitado (`int`), retorne el cost de la comanda (aplicant el descompte corresponent).
Escriu un programa en el que l'usuari indique quantitat i preu de revistas i quantitat i preu de llibres que inclou una comanda, i mostre el cost de la comanda

### Repte 20 `Taxi`

Es desitja calcular el cost del trayecto realitzat en taxi en funció dels kilómetros recorrits en les carreras metropolitanas de Valencia. Segons les tarifas vigentes per al 2012, el cost es calcula de la següent manera:

- Dies laborables en horari diurno (de 6:00 a 22:00h): 0.73 €/km.

- Dies laborables en horari nocturno: 0.84 €/km.

- Sábats i domingos: 0.93 €/km.

- A més, la tarifa mínima diurna és de 2.95€ i la mínima nocturna de 4€.

Escriure un programa que solicite a l'usuari:

- L'hora (hora i minuts) en que es va realitzar el trayecto.

- El dia de la setmana (es suposa que l'usuari introdueix un valor entre 1 per a dilluns i 7 per a diumenge)

- Els quilómetros recorrits.

I mostre el cost del trayecto.

### Repte 21 `Nombre`

Escriure un programa en el que l'usuari puga escriure el seu nom. El programa li dirá si la primera i la última lletra del nom coincideixen o no. Pruébalo amb "Ana", "ana", "Angel", "Amanda" i "David"

### Repte 22 `Validar`

Es desitja implementar un programa que determine si dos dades `x` e `y` d'entrada són vàlids. Un parell de dades és vàlid si és un dels que apareixen en la següent taula:

| x : | a | a | a | a | a | b | b | b | b | b |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| i : | 1 | 3 | 5 | 7 | 9 | 2 | 4 | 6 | 8 | 10 |

Es demana implementar un programa que lea de teclat el valor de `x` i el valor de `y`, i indique per pantalla "VALITS" o "NO VALITS". Es demana fer-ho de forma que no s'utilitze cap estructura condicional (if, switch,...), és a dir, es calculará una expressió booleana que determine si x e i són vàlids. Es procurará que l'expressió booleana proposta siga breve i concisa.

### Repte 23 `PotenciasDe2`

Donat un enter `n` introduït pel usuari*,* mostrar les `n` primeres potències de 2. És a dir, 20, 21, 22, 23, …, 2n. 

Soluciona l'exercici sense utilitzar `Math.pow`. 

Tingues en compte que, per exemple: *23 = 1 * 2 * 2 * 2*;  o que *24 = 1 * 2 * 2 * 2 * 2*.

### Repte 24 `Etapas`

El ser humà passa per una sèrie d'etapas en la seua vida que, amb caràcter general es asocian a les edades que apareixen en la taula següent.  

| Infancia | Fins als 10 anys |
| --- | --- |
| Pubertad | De 11 a 14 anys |
| Adolescencia | De 15 a 21 anys |
| Adultez | De 22 a 55 anys |
| Vejez | De 55 a 70 anys |
| Ancianitat | A partir dels 71 anys |

Escriu un programa en el que l'usuari introduzca les edades d'una sèrie de persones i calcule i mostre que percentatge de persones que es troben en cada etapa. En primer lloc el programa pedirá el número de persones que participen en la mostra i a continuació solicitará l'edat de cada una d'elles. 

El resultat serà similar al següent:

```java
Infancia: 5.3 %
Pubertad: 10.7 %
Adolescencia: 21.2 %
...
```

### Repte 25 `Primos`

Escriure un programa en el que l'usuari escriga un número enter i es li diga tots els números primos entre 1 i el número introduït.

### Repte 26 `esPrimoMejorada`

Fes una nova versió del programa de l'exercici anterior tenint en compte el següent:  

- L'únic número parell que és primo és el 2.

- Un número *n* no pot tindre divisors majors que n/2

### Repte 27 `Divisores`

Escriure un programa que mostre els tres primers divisors d'un número n introduït pel usuari. Per exemple, si l'usuari introdueix el número 45, el programa mostrarà els divisors 1, 3 i 5. Tingues en compte que la possibilitat de que el número n tinga menys de 3 divisors. Prova què passa si l'usuari demana, per exemple, els tres primers divisors de 7.  

### Repte 28 `SumaSerie`

Donat un número `n`, introduït pel usuari, calcula i mostra per pantalla la següent suma 1/1+1/2+1/3+ ··· + 1/`n` 

### Repte 29 `numeroCifras`

Escriure un programa en el que l'usuari introduzca un número enter qualsevol (positiu, negatiu o zero) i es li diga cuantas xifres té.   

Pistes: Cuantas xifres té el nº 25688? Quantes vegades podem dividir el nº 25688 per 10 fins a que es fa zero? Cura, el nº 0 té una xifra.

### Repte 30 `NotasExtremas`

Modificar l'exercici anterior perquè a més calcule la nota màxima i la nota mínima.

### Repte 31 `Edades`

Programa que demane a l'usuari l'edat de cinc persones. Si la suma de les edades és inferior a 200, el programa volverá a solicitar les 5 edades.

### Repte 32 `NotasPorAlumno`

Programa que demane a l'usuari les notes de `A` alumnes en `S` assignatures, alumne per alumne. `A` i `S` es definiran en el programa com `CONSTANTES`.

```java
Alumno 1
Introduce nota de asignatura 1: 8
Introduce nota de asignatura 2:
...
Alumno 2
Introduce nota de asignatura 1:
...
```

### Repte 33 `NotasPorAsignatura`

Programa que demane a l'usuari les notes de `A` alumnes en `S` assignatures, assignatura per assignatura. `A` i `S` es definiran en el programa com `CONSTANTES`. 

```java
Asignatura 1
Introduce nota del alumno 1: 
Introduce nota del alumno 2:
...
Asignatura 2
Introduce nota del alumno 1:
...
```

### Repte 34 `MediasPorAsignatura`

Repeteix l'exercici anterior fent que es mostre la mitjana de cada assignatura

```java
Asignatura 1
Introduce nota del alumno 1: 
Introduce nota del alumno 2:
...
Media asignatura 1: 8.5 puntos

Asignatura 2
Introduce nota del alumno 1:
...
Media asignatura 2: 6.5 puntos
...
```

### Repte 35 `PrimosHastaN`

Programa que solicite a l'usuari un numero `n` i mostre tots els números primos menors o iguals que `n`.

### Repte 36 `CombinarLetras2`

Escriure un programa que mostre totes les paraules de dos lletres que es poden formar amb els quatre primers caràcters de l'alfabeto en minúscules ('a', 'b', 'c', 'd'):

```java
aa
ab
ac
ad
ba
bb
bc
bd
...
da
db
dc
dd
```

### Repte 37 `CombinarLetras3`

Repeteix l'exercici anterior mostrant paraules de tres lletres

```java
aaa
aab
...
ddc
ddd
```

### Repte 38 `LetraALetra`

Escriu un programa en el que es solicite a l'usuari un text de forma repetida fins a que l'usuari introduzca la cadena buida. Amb cada text que introduzca l'usuari es li mostrarà caràcter a caràcter, cada caràcter en una línia

```java
Introduce texto: Hola
H
o
l
a
Introduce texto: Casa
C
a
s
a
Introduce texto: 
Fin del programa
```

### Repte 39 `DibujarFiguras1`

Escriu una classe que continga els mètodes que es indiquen a continuació. En el mètode main solicita a l'usuari les dimensions de les figuras necessàries en cada cas i anomena al mètode corresponent perquè es mostre per pantalla

1. (`void dibRecAsteriscos (int ancho, int alto)` dibuixa un rectangle utilitzant asteriscos, com el següent. En l'exemple ample és 7 i alt és 3

```java
* * * * * * *
* * * * * * *
* * * * * * *
```

1. (`void dibRecNumeros1 (int ancho, int alto)` dibuixa un rectangle utilitzant números, com el següent. En l'exemple ample és 7 i alt és 3

```java
1 2 3 4 5 6 7
1 2 3 4 5 6 7
1 2 3 4 5 6 7
```

1. (`void dibRecNumeros2 (int ancho, int alto)` dibuixa un rectangle utilitzant números, com el següent. En l'exemple ample és 7 i alt és 3

```java
7 6 5 4 3 2 1
7 6 5 4 3 2 1
7 6 5 4 3 2 1
```

1. (`void dibRecNumeros3 (int ancho, int alto)` dibuixa un rectangle utilitzant números, com el següent. En l'exemple ample és 7 i alt és 3

```java
01 02 03 04 05 06 07
08 09 19 11 12 13 14
15 16 17 18 19 20 21
```

1. (`void dibDiagonal (int ancho, int alto)` dibuixa un rectangle amb zeros i uns. Els 1 estan en les posicions en les que fila i columna coincideixen. En l'exemple ample és 7 i alt és 3

```java
1 0 0 0 0 0 0
0 1 0 0 0 0 0
0 0 1 0 0 0 0
```

1. (`void dibRecLetras (int ancho, int alto)` dibuixa un rectangle lletres sucesivas començant per la "a". En l'exemple ample és 7 i alt és 3

```java
a a a a a a a
b b b b b b b
c c c c c c c
```

1. (`void dibRecLetras2 (int ancho, int alto)` dibuixa un rectangle lletres sucesivas terminant per la "a". En l'exemple ample és 7 i alt és 3

```java
c c c c c c c
b b b b b b b
a a a a a a a
```

1. (`void dibRecLetras3 (int ancho, int alto)` dibuixa un rectangle lletres sucesivas començant per la "a". En l'exemple ample és 7 i alt és 3

```java
a b c d e f g
h i j k l m n
o p q r s t u
```

### Repte 40 `NombreDelMes2`

Escriure un programa que lea de teclat el número d'un mes (1 a 12) i visualice el nom del més (gener, febrer, etc). Resoldre utilitzant la sentències switch.

### Repte 41 `Calculadora2`

Escriure un programa per a simular una calculadora. Considera que els càlculs possibles són del tipus num1 operado num2, on num1 i num2 són dos números reals qualssevol i operador és una d'entre: +, -, * i /. El programa pedirá a l'usuari en primer lloc el valor num1, a continuació l'operador i finalment el valor num2. Resoldre utilitzant la sentències switch.

## En Paper ...

### Repte 42 `Pregunta32`

Què valor es asignará a consumo en la sentència `if` següent si velocitat és 120?

```java
if (velocidad > 80)
    consumo = 10;
else if (velocidad > 100)
    consumo = 12;
else if (velocidad > 120)
    consumo = 15;
```

### Repte 43 `Pregunta33`

Troba i corregeix els errors dels següents fragments de programa .

- fragment a

```java
if x > 25
  y = x
else
  y = z;
```

- fragment b

```java
if (x<0)
  System.out.println("El valor de x es" +x);
  System.out.println ("x es negativo");
else
  System.out.println ("El valor de x es"+x);
  System.out.println ("x es positivo");
```

- fragment c

```java
if (x = 0) System.out.println ("x igual a cero");
else System.out.println ("x distinto de cero");
```

### Repte 44 `Pregunta34`

Quin és l'eixida exacta per pantalla del següent fragment de programa

```java
int x = 20;
System.out.println("Comenzamos");
if (x>= 20)
    if (x>50) System.out.println("Muy grande");
    else {
        if (x%2 != 0) System.out.println("Impar");
    }
else if (x<=20) System.out.println("Pequeño");
System.out.println("Terminamos");
```

### Repte 45 `Pregunta35`

En una botiga, per liquidació, es apliquen distints descuentos en funció del total de les compres realitzades:

- Si total < 500 €, no se aplica descuento.

- Si 500 € <= total <= 2000 €, se aplica un descuento del 30 %.

- Si total > 2000e, llavors s'aplica un descompte del 50 %

Qual dels següents fragments de programa assigna a la variable desc el descompte correcte? Indica "Si" o "NO" al costat de cada fragment

- fragment a

```java
double desc = 0.0;
if (total <= 500)
  if (total >= 2000) desc = 30.0;
  else desc = 50.0;
total = total * desc / 100.0;
```

- fragment b

```java
double desc = 0.0;
if (total >= 500)
  if (total <= 2000) desc = 30.0;
  else desc = 50.0;
total = total * desc / 100.0;
```

- fragment c

```java
double desc = 0.0;
if (total <= 2000){
  if (total >= 500) desc = 30.0;
  } else desc = 50.0;
total = total * desc / 100.0;
```

- fragment d

```java
double desc = 0.0;
if (total > 500)
  if (total < 2000) desc = 30.0;
  else desc = 50.0;
total = total * desc /100.0;
```

### Repte 46 `Pregunta36`

Què eixida producirá el següent fragment de programa si la variable entera platos val 1? I si  val 3? I si val 0?

```java
switch (platos ) {
    case 1: System.out.println("\nPrimer plato");
    case 2: System.out.println ("\nSegundo plato");
    case 3: System.out.println ("\nBebida");
            System.out.println ("\nPostre");
            break;
    default: System.out.println("\nCafé");
}
```

### Repte 47 `Pregunta37`

Donats tres enters a, b i c, i un booleà p, el següent anàlisi per casos estableix el valor de p en funció dels valors de a, b i c:

```java
si a > b entonces p = cierto;
si a < b entonces p = falso;
si a = b entonces 
    si a > c entonces p = cierto;
    si a < c entonces p = falso;
    si a = c entonces p = falso;
```

Es demana la traducció d'aquest anàlisi per casos a Java mitjançant:

- Una única instrucció if sense anidaments.

- Una única instrucció, de la forma p = ... , sense sentències if ni utilitzar l'operador ternario.

- Una única instrucció, de la forma p = ..., que utilitze l'operador ternario.

## Excepcions

### Repte 48 `Edades`

Escriu un programa que solicite a l'usuari l'edat de cinc persones i calcule la mitjana. L'edat  d'una persona ha de ser un valor enter comprendido en el rang [0,110]. Realitza tres versions:

1. Si es introdueix malament l'edat d'una persona es torna a demanar l'edat d'eixa persona.

1. Si es introdueix malament l'edat d'una persona, el programa mostra un missatge d'error, no calcula la mitjana i acaba.

1. Si es introdueix malament l'edat d'una persona, el programa torna a solicitar l'edat de les cinc persones (comença el procés).

### Repte 49 `Dividir2`

Repeteix l'exercici anterior utilitzant mètodes i llamándolos des del mètode `main`:

Un mètode `dividir` que retorne el quocient de dos números que rep com paràmetre.

Executa els programes provocant errors (com en l'exercici anterior) i observa els missatges que es generen.

### Repte 50 `Posicion2`

Un mètode `letraNombre` que, donats un String `nombre` i un enter `pos`, retorne el caràcter del nom que ocupa la posició indicada.

Executa els programes provocant errors (com en l'exercici anterior) i observa els missatges que es generen.

### Repte 51 `Pregunta42`

Justifica per què es produeix error en el següent fragment de codi

```java
try {
    System.out.println("Introduce edad: ");
    int edad = tec.nextInt();
    if (edad >= 18) {
        System.out.println("Mayor edad");
    } else {
        System.out.println("Menor edad");
    }
    System.out.println("Introduce nif");
    String nif = tec.next();
    int numero = Integer.parseInt(nif.substring(0, nif.length() - 1));
    char letra = nif.charAt(nif.length() - 1);
    System.out.println("Numero: " + numero);
    System.out.println("Letra: " + letra);
} catch (Exception e){  
    System.out.println("Debías introducir un número");
} catch (NumberFormatException e) {
    System.out.println("El nif es incorrecto");
}
```

### Repte 52 `Pregunta43`

Indica què es mostrarà per pantalla quan s'execute aquesta classe i per què:

```java
public class Dos {
    private static int metodo()  {
        int valor=0;
        try {
            valor = valor+1;
            valor = valor + Integer.parseInt("W");
            valor = valor + 1;
            System.out.println("Valor al final del try: " + valor);
        } catch(NumberFormatException e) {
            valor = valor + Integer.parseInt("42");
            System.out.println("Valor al final del catch: " + valor) ;
        } finally {
            valor = valor + 1;
            System.out.println("Valor al final de finally: " + valor) ;
        }
        valor = valor + 1;
        System.out.println ("Valor antes del return: " + valor) ;
        return valor ;
    }

    public static void main (String[] args)  {
        try {
            System .out.println(metodo());
        } catch (Exception e) {
            System.err.println("Excepcion en metodo() ");
            e.printStackTrace();
        }
   }
}
```

### Repte 53 `Pregunta44`

Indica què es mostrarà per pantalla quan s'execute aquesta classe i per què:

```java
public class Tres {
    private static int metodo()  {
        int valor = 0;
        try {
             valor = valor +1;
             valor = valor + Integer.parseInt("W");
             valor = valor + 1;
             System.out.println("Valor al final del try : " + valor);
        } catch (NumberFormatException e) {
             valor = valor + Integer.parseInt("W");
             System.out.println("Valor al final del catch : " + valor);
        } finally {
             valor = valor + 1;
             System.out.println("Valor al final de finally: " + valor);
        }
        valor = valor + 1;
        System.out.println ("Valor antes del return: " + valor);
        return valor ;
    }

    public static void main (String[ ] args)
    {
        try {
            System.out.println(metodo ());
        } catch (Exception e) {
            System.err.println("Excepcion en metodo()") ;
            e.printStackTrace();
        }
   }
}
```

### Repte 54 `Pregunta45`

Indica què es mostrarà per pantalla quan s'execute aquesta classe i per què:

```java
import java.io.*;

public class Cuatro
{
    private static int metodo()  {
        int valor = 0;
        try {
            valor = valor+1;
            valor = valor + Integer.parseInt("W");
            valor = valor + 1;
            System.out.println("Valor al final del try : " + valor) ;
            throw new IOException();
        } catch (IOException e)  {
            valor = valor + Integer.parseInt("42");
            System.out.println("Valor al final del catch : " + valor);
        } finally {
            valor = valor + 1;
            System.out.println("Valor al final de finally: " + valor);
        }
        valor = valor + 1;
        System.out.println ("Valor antes del return: " + valor) ;
        return valor ;
   }

   public static void main(String[] args)  {
        try {
            System.out.println(metodo());
        } catch (Exception e) {
            System.err.println("Excepcion en metodo()");
            e.printStackTrace();
        }
   }
}
```

### Repte 55 `Pregunta46`

Indica què es mostrarà per pantalla quan s'execute aquesta classe:

1. Si s'executa amb java Cinc casa

1. Si s'executa amb java Cinc 0

1. Si s'executa amb java Cinc 7

```java
public class Cinco {
   public static void main(String args[])  {
      try  {
            int a = Integer.parseInt(args[0]);
            System.out.println("a = " + a);
            int b=42/a;
            String c = "hola";
            char d = c.charAt(50);
      }  catch (ArithmeticException e) {
         System.out.println("div por 0: " + e);
      }  catch (IndexOutOfBoundsException e) {
         System.out.println("Índice del String fuera de límites: " + e);
      }  finally {
          System.out.println("Ejecución de finally");
      }
   }
}
```

### Repte 56 `Pregunta47`

Indica quin serà l'eixida del següent programa i per què

```java
public class Seis {
   public static void procA()  {
       try {
           System.out.println("dentro del procA"); 2
           throw new RuntimeException("demo"); 3
       } finally {
           System.out.println("Finally del procA"); 4
       }
    }

   public static void procB() {
       try  {
           System.out.println("dentro del procB"); 6
           return; 7
       } finally {
           System.out.println("finally del procB"); 8
       }
    }

    public static void main(String args[])  {
        try  {
            procA(); 1
        } catch(Exception e) {
            procB(); 5
        }
     }
}
```

### Repte 57 `Pregunta71`

Indica quin serà l'eixida del següent programa i per què

```java
public class Siete {
   public static void metodo() {
       try  {
           throw new NullPointerException("demo"); 2
       } catch (NullPointerException e) {
           System.out.println("capturada en método"); 3
           throw e; 4
       }
    }

    public static void main (String args[])  {
        try   {
            metodo(); 1
        }  catch(NullPointerException e)  {
           System.out.println("capturada en main " + e); 5
        }
    }
}
```

### Repte 58

Programa que mostre per pantalla del número 200 al 300.

### Repte 59

Programa que mostre en pantalla la taula de multiplicar del 1 al 10 amb el format:

```java
...
Tabla del 2
**
2 x 1 = 2
2 x 2 = 4
...
2 x 10 = 20
...
Tabla del 3
**
...
```

### Repte 60

Llegir un número i mostrar el seu quadrat, repetir el procés fins a que es introduzca un número negatiu.

### Repte 61

Llegir números fins a que es introduzca un 0. Per a cada un indicar si és parell o impar.

### Repte 62

Demanar números fins a que es teclee un negatiu, i mostrar quants números es han introduït.

### Repte 63

Demanar números fins a que es teclee un 0, mostrar la suma de tots els números introduïts.

### Repte 64

Demanar números fins a que es introduzca un negatiu, i calcular la mitjana.

### Repte 65

Demanar un número `N`, i mostrar tots els números del 1 al `N`.

### Repte 66

Escriure tots els números del 100 al 0 de 7 en 7. 

### Repte 67

Demanar 15 números i escriure la suma total.

### Repte 68

Dissenyar un programa que mostre el producte dels 10 primers números impares.

### Repte 69

Demanar un número i calcular el seu factorial (el factorial es representa amb el simbolo  `!`).

​       Ací tens el factorial dels 5 primers números enters:

```java
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

### Repte 70

Demanar 10 números. Mostrar la mitjana dels números positivos, la mitjana dels números negativos i la quantitat de zeros.

### Repte 71

Demanar 10 sueldos. Mostrar la seua suma i cuantos hi ha majors de 1000€.

### Repte 72

Donades les edades i alturas de 5 alumnes, mostrar l'edat i l'estatura mitjana, la quantitat d'alumnes majors de 18 anys, i la quantitat d'alumnes que miden més de 1.75.

### Repte 73

Escriu un programa que ens diga l'horóscopo a partir del dia i el mes de naixement.

### Repte 74

Realitza un minicuestionario amb 4 preguntes tipus test sobre les assignatures que es imparten en el curs. Cada pregunta acertada sumará un punt. El programa mostrarà al final la qualificació obtenida.

### Repte 75

Escriu un programa que calcule el preu final d'un producte segons el seu base imponible (preu abans d'impostos), el tipus de IVA aplicat (general, reducido o superreducido) i el codi promocional. Els tipus de IVA general, reducido i superreducido són del 21%, 10% i 4% respectivament. Els codis promocionals poden ser nopro, mitad, meno5 o 5porc que signifiquen respectivament que no s'aplica promoció, el preu es redueix a la mitad, es descuentan 5 euros o es descuenta el 5%.

Exemple:

```java
Introduzca la base imponible: 25
Introduzca el tipo de IVA (general, reducido o superreducido): reducido
Introduzca el código promocional (nopro, mitad, meno5 o 5porc): mitad
Base imponible 25.00
Cód. promo. (mitad): -12.50
IVA (10%) 1.25
Precio con IVA 13.75
TOTAL 13.75
```



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Reptes de programació UT2** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina diferència fonamental hi ha entre un bucle 'while' i un bucle 'do-while' en Java?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El bucle 'while' avalua la condició abans d'entrar (pot executar-se 0 vegades), mentre que 'do-while' l'avalua al final (s'executa com a mínim 1 vegada).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) El bucle 'do-while' no necessita punt i coma final ni condició booleana.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) El bucle 'while' només funciona amb variables de tipus String.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin bloc d'estructura s'utilitza en Java per a capturar i gestionar possibles errors en temps d'execució (com InputMismatchException en llegir amb Scanner)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) switch - case</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) if - else</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) try - catch</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> La sentència 'break' dins d'un bucle finalitza immediatament l'execució del bucle, mentre que 'continue' salta a la següent iteració.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="finally" data-hint="Comença per 'final' i acaba en 'ly'.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina paraula clau de Java permet executar un bloc de codi al final d'un try-catch tant si s'ha produït una excepció com si no?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Reptes de programació UT2**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD02" data-activity="ut02retos">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

