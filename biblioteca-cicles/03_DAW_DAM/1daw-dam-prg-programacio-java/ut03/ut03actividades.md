---
title: "Activitats pràctiques UT3"
unit: "3"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT03"
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

# Activitats pràctiques UT3

> **📌 Empaquetar activitats**
> 

> Empaqueta les activitats, dins de la carpeta **`ut03/bloqueX`**

## Bloc 3.0 - Arrays

### Activitat 1

Crea un programa que demane a l'usuari el número de persones participantes en la comida de Navitat. A continuació, el programa pedirá el nom de cada una d'aquestes persones. 

Finalment, trau per pantalla tots els noms, usant l'estructura `foreach`.

### Activitat 2

Crea un programa que creu un array de 15 números generats aleatoriament (entre el 1 i el 100).

A continuació, trau per pantalla la *suma*, el *màxim*, el *mínim*, la *mitjana* dels números emmagatzemats i quants números *parells* hi ha.

Per a generar els números aleatorios pots usar `Math` o `Random`

### Activitat 3

Àmplia el programa anterior perquè mostre també:

- 

La posició (índex) en la que es han encontrado el *màximo* i el *mínim*.

- 

La suma del primer i últim element de l'array.

- 

El missatge *"existeix 50"* en cas que l'array incloga, almenys una vegada, el número 50.

### Activitat 4

Crea un programa que creu un array de 15 números generats aleatoriament (entre el 1 i el 50).

A continuació, el programa pedirá un número a l'usuari i comprobará si està o no en l'array. El procés es repetirá fins a que l'usuari consiga adivinar un dels números de l'array.

### Activitat 5

Crea un programa que creu un array de 15 números enters.

Després comprova si està ordenat de forma ascendent.

L'array estarà ordenat de forma ascendent si **sempre** es compleix que l'element amb índex `i` és menor que l'element amb índex `i+1`.

### Activitat 6

Crea un programa que demane a l'usuari números enters per a crear un array de 10 valors **no repetits**.

Per a això, cada vegada que l'usuari introduzca un valor, es haurà de comprovar si estiga ja existeix en l'array. En cas que existisca, no s'emmagatzemarà. 

**El procés ha de repetir-se fins a que es consigan emmagatzemar 10 elements en l'array**

### Activitat 7

Crea un programa amb els següents mètodes: 

- 

`public static int[] invertir (int[] v)`: retornarà l'array en ordre invers.

- 

`public static int[] rotarDerecha (int[] v)`: rotará tots els elements de l'array una posició a la *dreta*. 

- 

`public static int[] rotarIzquierda (int[] v)`: com l'anterior, però aquesta vegada a la *esquerra*. 

Pruebalos tots ells des del mètode `main`.

### Activitat 8

Crea un mètode que, donats dos arrays de Strings, comprove si tots els seus elements són iguals: `public static boolean sonIguales (String[] v1, String[] v2)`.

Recorda que pots comparar dos cadenes de text amb la funció `cadena1.equals(cadena2)`.

### Activitat 9

Crea un programa que genere un array de 100 posicions amb números aleatorios entre el 1 i el 300. A continuació, es pedirá un dígito (del 0 al 9) a l'usuari. 

El programa crearà un nou array que emmagatzemarà aquells números del primer array que acaben en el dígito introduït pel usuari i el mostrarà per pantalla. 

Per exemple, si el dígito introduït és un 5, el nou array tindrà números acabats en 5, com 155, 205, 195, 65, 5, 15, etc.

> **📌 Ajuda**
> 

> Per a obtindre l'últim dígito d'un número enter usa l'expressió: `int ultimo = numero % 10;`.

<details markdown="1">

<summary>💡 Solució</summary>

```java
import java.util.Scanner;

public class Act09 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numeros[] = new int[100];
        int digito, contador=0;

        //rellenar array
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = (int) (Math.random()*300)+1;
        }

        //Pedir digito
        System.out.println("Introduce un digito del 0 al 9");
        digito = sc.nextInt();

        //*
        //  Contar la cantidad de números de array
        // que acaban en el digito, para saber la
        // longitud del nuevo array.*/ 
        for (int num : numeros) {
            if(num % 10 == digito){
                contador++;
            }
        }

        //Crear nuevo array
        int solucion[] = new int[contador];
        int j=0;
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] % 10 == digito) {
                solucion[j] = numeros[i];
                j++;
            }
        }

        //Mostrar el nuevo array
        System.out.println("Números que terminan en " + digito + ": ");
        for (int sol : solucion) {
            System.out.print(sol + " ");
        }

    }
}
```

</details>

### Activitat 10

Crea un programa que demane a l'usuari el número d'alumnes en un aula. A continuació, crearà dos arrays, un de `String` en el que emmagatzemarà els nom dels alumnes, un altre de `double` en el que emmagatzemarà les notes. 

El programa pedirá a l'usuari el nom i nota mitjana de cada un dels alumnes i els anirà emmagatzemant en l'array corresponent. 

Una vegada emmagatzemats totes les dades, els sacará per pantalla: 

```java
Pepe: 5.86
Lucia: 9.32
Vicente: 7.89
Maria: 5.43
Ana: 4.5
Carlos: 8.25
```

### Activitat 11

Crea el mètode `public static int[] seleccion (int[] v, int n)` que retornarà un nou array amb els elements de `v` que siguen *parells* i majors que `n`.

Comprova el seu funcionament des del mètode `main` generant un array `test` de 100 posicions amb números aleatorios entre el 1 i el 200.

<details markdown="1">

<summary>💡 Solució</summary>

```java
import java.util.Scanner;

public class Act11 {
    public static int[] seleccion(int[] v, int n){
        //Calcular número elementos nuevo array
        int contador = 0;
        for (int i : v) {
            if ((i%2==0) && (i>n)) {
                contador++;
            }
        }

        //Crear y rellenar nuevo array
        int solucion[] = new int[contador];
        int j=0;
        for (int i = 0; i < v.length; i++) {
            if ((v[i] % 2 == 0) && (v[i] > n)) {
                solucion[j] = v[i];
                j++;
            }
        }

        return solucion;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int test[] = new int[100];
        for (int i = 0; i < test.length; i++) {
            test[i] = (int) (Math.random()*200)+1;
        }

        System.out.println("Introduce un numer del 1 al 200: ");
        int n = sc.nextInt();
        int solucion[] = seleccion(test, n);

        System.out.println("Array solución: ");
        for (int sol : solucion) {
            System.out.print(sol + " ");
        }
    }
}
```

</details>

### Activitat 12

Realitzar un programa que defina un array de 10 enters, a continuació l'inicialice amb valors aleatorios (del 1 al 10) i posteriorment mostre en pantalla cada element de l'array juntament amb el seu quadrat i el seu cubo.

**Per a mostrar els elements s'ha d'utilitzar l'estructura `foreach`.**

### Activitat 13

Crea un programa que demane a l'usuari el número del seu DNI i calcule la lletra.

> **📌 Ajuda**
> 

> En Espanya, la lletra del DNI es calcula a partir del número del DNI utilitzant una seqüència fixa de lletres.

> La seqüència de lletres és la següent:

> 

```java
char[] letras = {'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'};
```

Cada lletra ocupa una posició concreta dins d'un array de carácteres.

> El càlcul es realitza de la següent forma:

> 1. Es divideix el número del DNI entre 23.

> 1. S'obté el resta de la divisió (`%`).

> 1. Eixe resta indica la posició de l'array on es troba la lletra corresponent.

### Activitat 14

Crea una classe anomenada `Alumno` que continga els atributs `nombre`, `edad`, `notaMedia`. Inclou a més, el constructor que reba els tres atributs, els getters i setters i el mètode `mostrarDatos()` que mostre tota la informació de l'alumne. 

En el mètode main: 

1. Crea un array de tipus Alumne amb capacitat per a 15 alumnes. 

1. Demana a l'usuari les dades de cada un dels alumnes i inicializa l'objecte Alumne de cada posició de l'array. 

1. Recorre l'array d'alumnes (amb `foreach`) i mostra la informació de cada un dels objectes emmagatzemats. 

<details markdown="1">

<summary>💡 Solució</summary>

```java
import java.util.*;

public class Alumno {

    private String nombre;
    private int edad;
    private double notaMedia;

    // Constructor
    public Alumno(String nombre, int edad, double notaMedia) {
        this.nombre = nombre;
        this.edad = edad;
        this.notaMedia = notaMedia;
    }

    // Getters
    public String getNombre() {
        return this.nombre;
    }

    public int getEdad() {
        return this.edad;
    }

    public double getNotaMedia() {
        return this.notaMedia;
    }

    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNotaMedia(double notaMedia) {
        this.notaMedia = notaMedia;
    }

    // Método para mostrar la información del alumno
    public void mostrarInfo() {
        System.out.println(
            "Nombre: " + this.nombre +
            ", Edad: " + this.edad +
            ", Nota media: " + this.notaMedia
        );
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String nombre;
        int edad;
        double nota;

        //Crear el array de objetos
        Alumno[] alumnos = new Alumno[15];

        //Inicializar los objetos
        for(int i = 0; i < 15; i++){
            System.out.println("Introduce el nombre del alumno: ");
            nombre = sc.next();
            System.out.println("Introduce la edad del alumno: ");
            edad = sc.nextInt();
            System.out.println("Introduce la nota del alumno: ");
            nota = sc.nextDouble();

            alumnos[i] = new Alumno(nombre, edad, nota);
        }

        //Mostrar todos los alumnos con foreach
        System.out.println("\nListado de alumnos (foreach):");
        for (Alumno a : alumnos) {  !
            a.mostrarInfo();
        }
    }
}
```

</details>

### Activitat 15

Modifica l'activitat anterior perquè en el `main` mostre: 

1. La informació de tots els alumnes. 

1. El nom i l'edat d'aquells alumnes **majors d'edat**.

1. El nom i la nota dels alumnes **aprovats**.

1. La nota mitjana dels alumnes emmagatzemats.

1. L'alumne amb la nota més alta.

1. L'alumne amb la nota més baixa.

### Activitat 16

Crea una classe anomenada `Producto` que continga els atributs `nombre`, `precio`, `stock`. Inclou a més, el constructor que reba els tres atributs, els getters i setters i el mètode `mostrarDatos()` que mostre tota la informació del producte. 

En el mètode main: 

1. Crea un array de tipus Producte amb capacitat per a 10 productes. 

1. Demana a l'usuari les dades de cada un dels productes i almacenalo en l'array.

1. Recorre l'array (amb `foreach`) i mostra la informació de cada un dels objectes emmagatzemats.

### Activitat 17

Reutilitza la classe `Producto` de l'activitat anterior.

En el mètode main: 

1. Crea un array de tipus Producte amb capacitat per a 3 productes. 

1. Demana a l'usuari les dades de cada un dels productes i almacenalo en l'array.

1. 

Crea un nou array de productes `copiaProductos` i assigna els elements del primer array:
    

```java
Producto[] copiaProductos = productos;
```

1. 

Canvia el `nombre` i el `stock` d'un producte de l'array `copiaProductos`. 

1. 

Mostra tots els productes de l'array `productos` usant un `foreach` i respon:

  - Què passa amb el `nombre` i el `stock` que has cambiado en el segon array? Han cambiado tambien en l'array original?

  - Cerca informació del per què ocorre açò. 

### Activitat 18

Repeteix l'activitat anterior, però aquesta vegada fes la còpia de l'array del següent mode: 
    

```java
Producto[] copiaProductos = new Producto[3];
    for(int i = 0; i < productos.length; i++){
        copiaProductos[i] = new Producto(productos[i].getNombre(), productos[i].getPrecio(), productos[i].getStock());
    }
```

Repeteix els punts 4 i 5 de l'activitat anterior i torna a respondre a les preguntes planteades.

### Activitat 19 `Estaturas`

Escriure un programa que lea de teclat l'estatura de 10 persones i les almacene en un *array*. Al finalitzar la introducció de dades, es mostraran a l'usuari les dades introduïts amb el següent format:

```java
Persona 1: 1.85 m.
Persona 2: 1.53 m.
...
Persona 10: 1.23 m.
```

### Activitat 20 `Invertir`

Dissenyar un mètode `public static int[] invertirArray(int[] v)`, que donat un array `v` retorne un altre amb els elements en ordre invers. És a dir, l'últim en primera posició, el penúltimo en segona, etc.

Des del mètode `main` crearem i inicializarem un array, llamarem a `invertirArray` i mostrarem l'array invertido.

Pot ser útil un mètode que imprima per pantalla un Array `public static void imprimirArray(int[] v)`, i així poder imprimir el Array `inv`.

### Activitat 21 `DosArrays`

Desenvolupa els següents mètodes en els que intervenen dos ar*r*ays i pruébalos des del mètode `main`

- `public static double[] sumaArraysIguales (double a[], double b[])` que donats dos arrays de `double` `a` i `b`, del mateix mida retorne un array amb la suma dels elements de `a` i `b`, és a dir, retornarà el *array* `{a[0]+b[0], a[1]+b[1], ....}`

- `public static double[] sumaArrays(double a[], double b[])`. Repeteix l'exercici anterior però tenint en compte que `a` i `b` podrien tindre longituds distintes. En tal cas el número d'elements del *array* resultant coincidirá amb la longitud del *array* de major mida.

### Activitat 22 `Rotaciones`

Rotar una posició a la dreta els elements d'un ar*r*ay consisteix en mover cada element del *array* una posició a la dreta. L'últim element passa a la posició 0 de l'array. Per exemple si rotamos a la dreta l'array `{1,2,3,4}` obtendríamos `{4,1,2,3}`.

- 

Dissenyar un mètode `public static void rotarDerecha(int v[])`, que donat un *array* d'enters rote els seus elements un posició a la dreta.

- 

En el mètode `main` crearem i inicializarem un *array* i rotarem els seus elements tantes vegades com elements tinga el *array* (mostrant cada vegada el seu contingut), de forma que al final el *array* quedarà en la seua estat original. Per exemple, si inicialment el *array* conté `{7,3,4,2}`, el programa mostrarà

```java
Rotación 1: 2 7 3 4
Rotación 2: 4 2 7 3
Rotación 3: 3 4 2 7
Rotación 4: 7 3 4 2
```

- Dissenya també un mètode per a rotar a l'esquerra i pruébalo de la mateixa forma.

### Activitat 23 `SumaPostImpar`

Escriure un mètode que, donat un *array* d'enters, retorne la suma dels elements que apareixen després del primer valor impar. Usar `main` per a provar el mètode.

### Activitat 24

Escriure un programa que demane a l'usuari el número d'alumnes en un aula. A continuació, el programa pedirá la nota de cada un d'eixos alumnes, que s'emmagatzemarà en un array `double notas[]`. 

Una vegada introduïdes totes les notes, el programa calculará i sacará per pantalla: el número total de notes introduïdes, la nota mitjana de la classe, la nota més alta i la nota més baixa. 

### Activitat 25 `MismosValores`

Es desitja comprovar si dos arrays de `double` contenen els mateixos valors, encara que siga en ordre distint. Per a això es ha escrit el següent mètode, que apareix incompleto:

```java
public static boolean mismosValores(double v1[], double v2[]) {
    boolean encontrado = false;
    int i = 0;
    while (i < v1.length && !encontrado) {
        boolean encontrado2 = false;
        int j = 0;
        while (j < v2.length && !encontrado2) {
            if (v1[?] == v2[?]) {
                encontrado2 = true;
                i++;
            } else {
                ?
            }
        }
        if (encontrado2 == ?) {
            encontrado = true;
        }
    }
    return !encontrado;
}
```

Completa el programa en els llocs on apareix el símbol **`?`** .

Si el prefieres, implementa el teu mateix el programa des de 0. 

### Activitat 26 `Dados`

El lanzament d'un donat és un experimento aleatorio en el que cada número té les mateixes probabilitats d'eixir. Segons açò, cuantas més vegades lancemos el donat, més es igualarán les vegades que apareix cada un dels 6 números. Farem un programa per a comprobar-lo.

- 

Generarem un número aleatorio entre *1* i 6 un número determinat de vegades (per exemple 10.000). Per a això pots usar la classe `Random`.

- 

Després de cada lanzament incrementarem un comptador corresponent a la xifra que ha salido. Per a això crearem un *array* `veces` de 7 components, en el que el `veces[1]` servirà per a comptar les vegades que ix un 1, `veces[2]` per a comptar les vegades que ix un 2, etc. *`veces[0]` no s'usarà*.

- 

Cada 1.000 lanzaments mostrarem per pantalla les estadístiques que indiquen que percentatge de vegades ha aparecido cada número en els lanzaments fets fins a eixe moment. Per exemple:

```java
Número de lanzamientos: 1000
  1: 16,40%
  2: 18,10%
  3: 15,40%
  4: 16,60%
  5: 18,00%
  6: 15,50%

  Número de lanzamientos: 2000
  1: 16,75%
  2: 17,85%
  3: 15,10%
  4: 15,90%
  5: 17,55%
  6: 16,85%

  ...
```

- Per al número de lanzaments tope (10.000 en l'exemple) i per a la freqüència amb que es mostren les estadístiques (1.000 en l'exemple) utilitzarem dos **constants** enteras, de nom `LANZAMIENTOS` i `FRECUENCIA`, d'aquesta forma podrem variar de forma cómoda el mode en que probamos el programa.

### Activitat 27 `Notas`

Es disposa d'una matriu que conté les notes d'una sèrie d'alumnes en una sèrie d'assignatures. Cada fila correspon a un alumne, mentre que cada columna correspon a una assignatura. Desenvolupar mètodes per a:

1. Imprimir les notes alumne per alumne.

1. Imprimir les notes assignatura per assignatura.

1. Imprimir la mitjana de cada alumne.

1. Imprimir la mitjana de cada assignatura.

1. Indicar qual és l'assignatura més fàcil, és a dir la de major nota mitjana.

1. Hi ha algun alumne que suspenda totes les assignatures?

1. Hi ha alguna assignatura en la que suspendan tots els alumnes?

Generar la matriu (almenys 5x5) en el mètode main, rellenar-la, i comprovar els mètodes anteriors.

### Activitat 28 `TemperaturaMes`

Es disposa d'una estructura de dades bidimensional irregular (array d'arrays) que emmagatzema les temperaturas diarias registrades al llarg de diversos mesos. Cada fila correspon a un mes, cada columna representa un dia del mes *(No tots els mesos tenen la mateixa quantitat de dies, cada fila tenrdrá una longitud distinta)*.

Desenvolupar els mètodes per a:

1. Imprimir les temperaturas mes per mes. 

1. Calcular i imprimir la temperatura mitjana de cada mes.

1. Indicar quin és el mes més cálido. 

1. Comprovar si existeix un mes en el que totes les temperaturas estiguen per davall d'un valor donat pel usuari. 

Generar l'array bidimensional en el mètode `main`, amb almenys 5 mesos, cada un amb un número de dies distint, rellenar-lo, i comprovar els mètodes anteriors.

## Bloc 3.1 - La llibreria Arrays

### Activitat 29

Crea un programa que creu un Array 15 números enters aleatorios. Muestralos per pantalla usant `Arrays.toString(array)`.

### Activitat 30

Crea un programa que creu un Array 15 números enters aleatorios. Ordenalos usant `Arrays.sort(array)`.

Repeteix l'operació amb un array de `double` i amb un array de `String`.

Trau els diferents resultats per pantalla.

### Activitat 31

Crea un programa que creu un Array 5 números enters aleatorios entre el 1 i el 10. Ordenalos usant `Arrays.sort(array)`.

A continuació, demana a l'usuari un número per pantalla (del 1 al 10), i indica si es troba o no en l'array usant la funció `Arrays.binarySearch(array, numero)`.

La funció `Arrays.binarySearch()`només funciona amb arrays **prèviament ordenats**.

### Activitat 32

Crea un programa que creu dos arrays d'enters. Després comprova si aquests són exactament iguals usant la funció `Arrays.equals(array1, array2)`.

### Activitat 33

Crea un programa que creu un array d'enters de 7 posicions. A continuació, rellenalo tot amb el mateix valor (per exemple, el 5), usant la funció `Arrays.fill(array, valor)`. Trau el resultat per pantalla.

### Activitat 34

Crea un programa que creu un Array 15 números enters aleatorios. Després crea una còpia exacta a aquest usant la funció `Arrays.copyOf(array)`.

Mostra tots dos arrays per pantalla.

### Activitat 35

Modifica el programa anterior perquè copie només els 10 primers números de l'array original. Usa la funció `Arrays.copyOfRange(array, inicio, fin)`.

Mostra tots dos arrays per pantalla.

## Bloc 3.2 - La llibreria ArrayList

### Activitat 36

Crea un programa que creu un `ArrayList<Integer>` i afegisca 15 números enters aleatorios.

Mostra el contingut complet del ArrayList per pantalla.

### Activitat 37

Crea un programa que creu un `ArrayList<Integer>` amb 15 números enters aleatorios. Ordénalo usant `Collections.sort(lista)`.

Repeteix l'operació amb:
- Un `ArrayList<Double>`
- Un `ArrayList<String>`

Mostra els resultats per pantalla.

### Activitat 38

Crea un programa que genere un `ArrayList<Integer>` amb 5 números aleatorios entre 1 i 10.

Ordénalo usant `Collections.sort(lista)`.

A continuació, demana a l'usuari un número entre 1 i 10 i indica si es troba o no en la llista usant `lista.contains(numero)`

### Activitat 39

Crea dos ArrayList.

Després comprova si són exactament iguals usant el mètode `lista1.equals(lista2)`.

Mostra el resultat per pantalla.

### Activitat 40

Crea un programa que genere un ArrayList amb 7 valors aleatorios entre 1 i 100.

Emplena un altre ArrayList amb els mateixos valors, però en ordre invers.

Per a això, pots usar el mètode:Collections.reverse(llista);

Mostra tots dos ArrayList per pantalla.

### Activitat 41

Crea un `ArrayList<Integer>` amb 15 números enters aleatorios.

Després crea una còpia exacta utilitzant el constructor:

```java
ArrayList<Integer> copia = new ArrayList<>(original);
```

Mostra totes dues llistes per pantalla.

### Activitat 42

Modifica el programa anterior per a copiar únicament els 10 primers elements.

### Activitat 43

Crea un `ArrayList<Integer>` amb 10 números aleatorios.

Calcula i mostra:
- La suma total.
- La mitjana dels elements.
- El número més gran.
- El número més xicotet.

### Activitat 44

Crea dos `ArrayList<String>` amb diversos noms.

Afegeix tots els elements de la segona llista a la primera usant `lista1.addAll(lista2)`

Mostra el resultat.

### Activitat 45

Crea un menú que permeta gestionar una llista de tasques usant un `ArrayList<String>`.

Opcions:
- Afegir tasca.
- Mostrar tasques.
- Eliminar tasca.
- Cercar tasca.
- Eixir.

El programa haurà d'executar-se fins a que l'usuari elija eixir.

## Bloc 3.3 - Cadenes de text

### Activitat 46 `Palindromo`

Implementa, tant de forma recursiva com de forma iterativa, una funció que ens diga si una cadena de caràcters és simétrica (un palíndromo). Per exemple, "*DABALEARROZALAZORRAELABAD*" és un palíndromo.

Altres exemples:

​       "*La ruta ens aporto un altre pas natural*"

​       "*Res, jo sóc Adan*"

​       "*A mama Roma li aviva l'amor a papa i a papa Roma li aviva l'amor a mama*"

​       "*Ana, la tacaña catalana*"

​       "*Jo faig yoga hui*"

Et atreves a implementar una solució que permeta l'entrada amb espais? I permetent espais i signes de puntuació?".

### Activitat 47 `ReversoCadena`

Implementa, tant de forma recursiva com de forma iterativa, una funció que li dé la vuelta a una cadena de caràcters.

Obviament, si la cadena és un palíndromo, la cadena i la seua inversa coincidirán.

## Bloc 3.4 - Mapes

### Activitat 48

Paquet: **`A1_votaciones`**

Crea un programa que simule una encuesta sobre el llenguatge de programació favorito.

1. Usa un `HashMap<String, Integer>` on:

  - La clau siga el nom del llenguatge.

  - El valor siga la quantitat de votos.

1. Afegeix, almenys, 5 llenguatges de programació (amb valor 0 al principi).

1. Demana a l'usuari a través del `Scanner` que vaja introducent votos (fins a 15).
    

```java
Indica el indice del lenguaje a votar:
1. Java
2. Python
3. PHP
4. C++
5. JS
```

1. Cada vegada que es repita un llenguatge, incrementa el seu comptador.

1. Al final:

  - Mostra tots els llenguatges amb el seu número de votos.

  - Indica quin va ser el llenguatge més votado.

### Activitat 49

Paquet: **`A2_libreria`**

Desenvolupa un sistema senzill per a gestionar l'inventari d'una llibreria.

1. Usa un `HashMap<String, Integer>` on:

  - La clau siga el nom del llibre.

  - El valor siga la quantitat disponible en stock.

1. Realitzar mètodes per a:

  - Agregar nous llibres.

  - Vendre un llibre (disminuir stock).

  - Mostrar l'inventari complet.

  - Mostrar només els llibres amb menys de 5 unitats.

Si es intenta vendre un llibre inexistente o sense stock, mostrar un missatge d'error.

<details markdown="1">

<summary>💡 Ajuda</summary>

Crea un menú d'usuari per a les distintes accions a realitzar (dins del mètode main):

```java
do {
    System.out.println("\n MENÚ: ");
    System.out.println("1. Agregar libro");
    System.out.println("2. Vender libro");
    System.out.println("3. Mostrar inventario completo");
    System.out.println("4. Mostrar libros con menos de 5 unidades");
    System.out.println("5. Salir");
    System.out.print("Selecciona una opción: ");

    opcion = scanner.nextInt();
    scanner.nextLine(); // Limpiar buffer

    switch (opcion) {
        case 1:
            //Realizar acciones necesarias para agregar libro
            break;
        case 2:
            //Realizar acciones necesarias para vender libro
            break;
        case 3:
            //Realizar acciones necesarias para mostrar inventario
            break;
        case 4:
            //Realizar acciones necesarias para mostrar libros con menos de 5 unidades en stock
            break;
        case 5:
            System.out.println("Saliendo del sistema...");
            break;
        default:
            System.out.println("Opción inválida. Intenta de nuevo.");
    }
} while (opcion != 5);
```

</details>

### Activitat 50

Paquet: **`A3_agendaTelefonica`**

Crea una agenda telefònica usant `HashMap<String, String>`, on la clau siga el nom de la persona i el valor li número telefònic.

Agrega mètodes per a:

1. Agregar un contacte.

1. Cercar un contacte pel seu nom. 

1. Eliminar un contacte. 

1. Mostrar tots els contactos emmagatzemats. 

En el mètode main, crea un menú perquè l'usuari puga realitzar les distintes accions.

### Activitat 51

Paquet: **`A4_notasEstudiantes`**

Es desitja crear un sistema que almacene les qualificacions de diversos estudiants. 

Per a això, s'usarà un `HashMap<String, ArrayList<Double>>`, on la clau siga el nom de l'estudiant i el valor la seua llista de notes.

Agrega mètodes per a:

1. Agregar nous estudiants.

1. Agregar notes a estudiants ja emmagatzemats.

1. Calcular la nota mitjana d'un estudiant.

1. Mostrar tots els estudiants emmagatzemats amb les seues notes.

En el mètode main, crea un menú perquè l'usuari puga realitzar les distintes accions.

### Activitat 52

Paquet: **`A5_traductor`**

Crea un mini traductor Espanyol → Anglès usant un `HashMap<String, String>`, en que la clau siga la paraula en espanyol i el valor en anglès.

A més, crea un altre `HashMap<String, Integer>` que continga les mateixes paraules en espanyol i la compta de les vegades que es ha consultado cada paraula.

Afegeix, almenys, 15 paraules al sistema. 

Agrega mètodes per a:

1. Agregar noves paraules i les seues traduccions.

1. Introduir una paraula en espanyol i que el sistema mostre la seua traducció si existeix.

1. Mostrar quantes vegades es ha mostrat una paraula en concret.

1. Mostrar quantes vegades es han mostrat cada una de les paraules.

1. Mostrar totes les traduccions emmagatzemades.

En el mètode main, crea un menú perquè l'usuari puga realitzar les distintes accions.

### Activitat 53

Paquet: **`A6_pedidos`**

Una botiga online vol registrar els productes que compra cada client. Usa `HashMap<String, ArrayList<String>>`, on la clau siga el dni del client i el valor els codis dels productes comprats.

Agrega mètodes per a:

1. Permetre registrar compres.

  - Si l'usuari ja existeix, es afegeix el producte comprat a la seua llista. 

  - Si l'usuari no existeix, es crea automàticament i es li afegeix el producte comprat.

1. Mostrar tots els clients amb els seus productes.

1. Eliminar un client i tota la seua llista de productes comprats. 

EXTRA: Evitar duplicats si el client compra diverses vegades el mateix producte.

En el mètode main, crea un menú perquè l'usuari puga realitzar les distintes accions.

### Activitat 54

Paquet: **`A9_puntuacionesJuego`**

Una sala de videojuegos vol portar un registre dels jugadors i els seus puntatges. Per a això, crea un `TreeMap<String, Integer>` on la clau siga el nom del jugador i el valor siga el seu puntatge total.

Agrega mètodes per a:

1. Permetre registrar nous jugadors i el seu puntatge.

1. Permetre canviar el puntatge d'un jugador.

1. Mostrar la llista de jugadors ordenada automàticament per nom.

1. Mostrar el puntatge d'un jugador específic pel seu nom.

1. Mostrar els jugadors amb puntatges majors a un valor donat.

En el mètode main, crea un menú perquè l'usuari puga realitzar les distintes accions.

### Activitat 54.2

Modifica l'activitat anterior per a afegir una funció que mostre els jugadors en ordre invers alfabéticament.

### Activitat 55

Paquet: **`A11_agendaEventos`**

Una persona vol organitzar la seua agenda d'esdeveniments del mes. Per a això, crea un `TreeMap<String, String>` on la clau siga la data (en format *DD/MM*, és a dir *02/11*) i el valor siga el nom de l'esdeveniment.

Agrega mètodes per a:

1. Permetre registrar nous esdeveniments.

1. Permetre eliminar un esdeveniment, buscandolo per data.

1. Mostrar la llista d'esdeveniments ordenada ascendentement.

1. Mostrar la llista d'esdeveniments ordenada descendentement.

1. Cercar un esdeveniment en una data determinada.

En el mètode main, crea un menú perquè l'usuari puga realitzar les distintes accions.

### Activitat 56

Paquet: **`A14_divisas`**

En la classe **`Divisas`**, crear una estructura *Map* anomenada **`divisas`**, que almacene parells de *moneda* i *valor* al canvi en euros. Per exemple Dólar: 0,81€.

**a**) Afegir els següents parells moneda/valor al *Map* divisas:

| moneda | valor en € |
| --- | --- |
| Dólar Americano | 0.81 |
| Franco Suizo | 0.85 |
| Libra Esterlina | 1.14 |
| Corona Danesa | 0.13 |
| Pes Mexicano | 0.04 |
| Dólar Singapur | 0.62 |
| Real Brasil | 0.24 |

**b**) Mostrar el valor de la *Libra Esterlina*.

**c**) Mostrar totes les divisas amb les que es opera i el seu valor.

**d**) Indicar el número de divisas del *Map*.

**e**) Eliminar la divisa Real Brasil i mostrar les dades del *Map*.

**f**) Mostrar si existeix la divisa *Pes Mexicano*.

**g**) Mostrar si existeix la divisa Euro.

**h**) Mostrar si existeix el valor al canvi 0.85 €.

**i**) Mostrar si existeix el valor al canvi 0.33 €.

**j**) Indicar si el *Map* divisas està buit.

**k**) Esborra tots els components del *Map* divisas.

**l**) Tornar a indicar si el *Map* divisas està buit.

## Bloc 3.2 - Arrays i Control de Límits

> **📌 Activitat: Localizador de Sedes Corporativas (`LocalizadorSedes.java`)**
> 

> Una empresa internacional disposa de diverses sedes repartides per distintes ciutats. Desenvolupa una aplicació per a consultar-les:

  
> 1. Emmagatzema en un array de cadenes almenys 5 ciutats: `String[] sedes = {"València", "Madrid", "Berlín", "Tokio", "Nueva York"};`.
  
> 1. Mostra a l'usuari totes les sedes disponibles numerades i solicita un índex per teclat.
  
> 1. Mostra la ciutat corresponent a l'índex seleccionat.
  
> 1. Gestiona l'excepció `ArrayIndexOutOfBoundsException` si l'usuari introdueix una posició que no existeix en l'array, mostrant un missatge clar amb el rang vàlid permitido (de `0` a `sedes.length - 1`).
  
> 1. Independentment de si la consulta té èxit o produeix error, un bloc `finally` ha de mostrar sempre: `"📋 Auditoría: Consulta de sedes finalizada."`

## Bloc 3.5 - Estructures Dinàmiques de Dades (Col·leccions)

> **📌 Activitat: Gestor de Llista de la Compra (`GestorListaCompra.java`) — List i Set**
> 

> Dissenya un programa per consola per a gestionar la llista de la compra del supermercado:

  
> 1. Permet a l'usuari afegir productes per teclat. Si el producte ja figurava en la llista, mostra una advertencia de duplicitat i consulta si desitja añadir-lo igualment o descartar-lo.
  
> 1. Proporciona una opció per a **eliminar un producte** pel seu nom utilitzant `Iterator.remove()` o `removeIf()` (asegurant no llançar `ConcurrentModificationException`).
  
> 1. Mostra el llistat complet numerado amb format limpio.
  
> 1. Incorpora l'opció especial: *"Extraer inventari d'articles únics"*, que vuelque la llista en un `TreeSet` per a mostrar-los automàticament ordenats alfabéticament sense cap repetido.

> **📦 Lliurament:** Puja el fitxer `GestorListaCompra.java` a la tasca corresponent en **Aules**.

> **📌 Activitat: Diccionari de Sinónimos (`DiccionarioSinonimos.java`) — Map amb List**
> 

> Crea un diccionari interactivo de sinónimos on a cada terme (clau) li corresponda un conjunt o llista de sinónimos (`Map<String, List<String>>`):

  
> 1. Inicializa el mapa amb almenys 4 paraules i les seues llistes de sinónimos associades.
  
> 1. Ofereix una opció de consulta: l'usuari introdueix una paraula i el sistema mostra tots els seus sinónimos disponibles.
  
> 1. Si la paraula buscada no existeix en el diccionari, solicita a l'usuari 2 sinónimos i añádela dinámicament al mapa.
  
> 1. Imprime el diccionari complet ordenat alfabéticament per paraula clau, amb format tabulado (`printf`).

> **📦 Lliurament:** Puja el fitxer `DiccionarioSinonimos.java` a la tasca corresponent en **Aules**.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Activitats pràctiques UT3** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Si declarem un array 'int[] notes = new int[5];' en Java, quins són els índexs vàlids del primer i de l'últim element?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El primer element és notes[0] i l'últim és notes[4].</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) El primer element és notes[1] i l'últim és notes[5].</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Els índexs comencen en -1.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina col·lecció del Java Collections Framework (JCF) permet emmagatzemar parelles clau-valor (Key-Value) amb cerca ràpida per clau única?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) ArrayList&lt;E&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) HashSet&lt;E&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) HashMap&lt;K, V&gt;</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Tot mètode recursiu ha de tindre com a mínim un cas base que detinga les crides recursives per a evitar un error StackOverflowError.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="length" data-hint="Longitud en anglès (6 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina propietat (sense parèntesis) s'utilitza en Java per a obtindre la grandària d'un array primitiu (p. ex. notes.___)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Activitats pràctiques UT3**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD03" data-activity="ut03actividades">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

