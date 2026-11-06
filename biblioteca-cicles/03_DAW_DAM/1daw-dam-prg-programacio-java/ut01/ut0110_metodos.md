---
title: "1.11 Creació i ús de mètodes"
unit: "1"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT01"
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

# 1.11 Creació i ús de mètodes

## 1. Què és una classe en Java?

Fins a ara hem escrit xicotets programes en Java on tot el codi es colocava dins d'un bloc amb la paraula reservada `class`:

```java
public class MiPrimerPrograma {
    public static void main(String[] args) {
        System.out.println("Hola!");
    }
}
```

En Java, **tot el codi ha de residir obligatòriament dins d'una classe**. 

Per a entender-lo de forma senzilla en aquesta primera unitat:

- Una **classe** és el "contenidor" principal del nostre programa. Actua com una caixa organitzada que agrupa tant dades (variables) com accions o funcions (mètodes).

- El fitxer en disc ha de llamar-se exactament igual que la classe pública i acabar en `.java` (per exemple, `MiPrimerPrograma.java`).

- Més avant, en la **UT 4**, profundizarem en la Programació Orientada a Objectes (POO) i veurem que les classes també serveixen de molde o plantilla per a fabricar "objectes". Però de moment, ens basta amb veure la classe com la unitat organizativa on guardamos el nostre programa i les seues funcions.

## 2. El punt d'entrada: Què és el mètode `main`?

Quan li pedimos a la màquina virtual de Java (JVM) que execute un programa, per on comença a llegir les instruccions?

Java no executa el fitxer d'adalt abaix sense més; cerca una "porta d'entrada" especial i obligatòria: el mètode **`main`**.

```java
public static void main(String[] args) {
    // Aquí empieza a ejecutarse nuestro programa
}
```

- **`public`**: És un modificador d'accés. Indica que aquest mètode pot ser anomenat des de fora de la classe (en aquest cas, per la pròpia màquina virtual de Java).

- **`static`**: Significa que el mètode pertany a la classe i pot executar-se directament sense necessitat de crear un objecte previo en memòria.

- **`void`**: Indica el tipus de dada retornat. `void` significa "buit" o "res"; és a dir, aquest mètode realitza tasques però no retorna cap resultat a qui el llamó.

- **`main`**: És l'identificador o nom reservat per convenio que Java reconeix com inici de l'aplicació.

- **`String[] args`**: És un array de cadenes de text que permet rebre paràmetres des de la consola o terminal a l'iniciar el programa (per ara no ens preocuparem per ell).

## 3. Per què crear altres mètodes dins de la classe?

A mesura que els nostres programes crecen, escriure tot el codi de forma contínua dins de `main` es converteix en una mala pràctica: el codi es torna difícil de llegir, llarg i quasi impossible de mantindre o depurar.

Un **mètode** és un bloc d'instruccions amb un nom associat que realitza una tasca concreta i que pot ser executat tantes vegades com siga necessari des de qualsevol punt del programa.

Les principals avantatges de dividir el codi en mètodes són:

1. **Modularitat ("Divideix i vencerás")**: Descomponemos un problema gran i complex en subtareas xicotetes, comprensibles i independents.

1. **Reutilització (Principi DRY - *Don't Repeat Yourself*)**: Escrivim la lògica una sola vegada i la llamamos cuantas vegades faça falta en compte de duplicar línies de codi.

1. **Claredat i legibilitat**: Un mètode `main` bé dissenyat es llegix quasi com un índex d'un llibre, delegant els detalls en mètodes auxiliares amb noms autoexplicativos.

## 4. Què significa `static` en un mètode?

En la declaració dels mètodes que crearem en aquesta unitat verás sempre la paraula clau **`static`**:

```java
public static void saludar() { ... }
public static int sumar(int a, int b) { ... }
```

### 4.1. Mètode de classe vs. Mètode d'objecte

En Java existeixen dos tipus de mètodes:

1. **Mètodes d'objecte (o d'instància)**: Requereixen crear prèviament un objecte en la memòria amb l'operador `new` per a poder ser utilitzats (els estudiarem a fons en la **UT 4**).

1. **Mètodes de classe (`static`)**: Pertanyen a la pròpia classe i **no necessiten crear cap objecte** per a poder ser ejecutats.

### 4.2. La regla d'oro en la UT 1

El mètode `main` és estàtic (`static`). En Java existeix una regla estricta:

> [!IMPORTANT]
> ### Regla del context estàtic
> Un mètode `static` només pot anomenar directament a **altres mètodes que també siguen `static`** dins de la mateixa classe.

Si intentas anomenar a un mètode normal (no estàtic) des de `main` sense haver creat un objecte, el compilador mostrarà el clàssic error:

```java
non-static method noSePuedeLlamar() cannot be referenced from a static context
```

Per aquesta raó, durant la UT 1 i la UT 2, **tots els mètodes auxiliares que declarem en la nostra classe llevarán la paraula reservada `static`**.

> **📌 Mètodes estátics que ja coneixes**
> 

> Ja has utilitzat mètodes estátics de la biblioteca estàndard de Java sense darte compta:

> - `Math.sqrt(25)` o `Math.pow(2, 3)`: Invocats directament usant el nom de la classe `Math`.

> - `Integer.parseInt("123")`: Invocado directament sobre la classe `Integer`.

## 5. Anatomía i sintaxi d'un mètode

Un mètode en Java es compon de dos parts fonamentals: la **capçalera** (o firma) i el **cos**.

```java
[modificadores]  <tipoDevuelto>  <nombreMétodo> ( [<parámetros>] ) {
    // Cuerpo del método: instrucciones ejecutables
    [return <valor>;]
}
```

```java
// Ejemplo de método completo:
public static int calcularDoble(int numero) {
    int resultado = numero * 2;
    return resultado;
}
```

Desglosemos cada element:

### 5.1. Modificadors

Indiquen la visibilitat i característiques del mètode.
* En els nostres mètodes de la UT 1 usarem habitualment `public static` o simplement `static`.

### 5.2. Tipus de dada retornat (*return type*)

Indica què tipus d'informació va a retornar el mètode una vegada termine la seua ejecució:
* Si retorna un dada, es especifica el seu tipus: primitius (`int`, `double`, `boolean`, `char`...) o de referència (`String`).
* Si el mètode realitza una acció però **no retorna cap valor**, s'utilitza obligatòriament la paraula clau **`void`**.

### 5.3. Nom del mètode

Segueix la convenció **camelCase**:
* Ha de començar amb una **lletra minúscula**.
* Per convenio, es recomana que siga un **verb** que describa l'acció que realitza: `calcularTotal`, `mostrarMenu`, `esPar`, `obtenerMayor`.

### 5.4. Llista de paràmetres

Són les dades que el mètode necessita rebre de l'exterior per a treballar.
* Van entre parèntesis `( )` separats per comes.
* Cada paràmetre ha d'indicar obligatòriament el seu **tipus** i el seu **nom**: `(int base, int altura)`.
* Si el mètode no necessita rebre informació, els parèntesis es deixen buits: `( )`.

### 5.5. Cos del mètode

És el bloc tancat entre claus `{ }`. Conté les sentències Java, declaracions de variables locals i estructures de control necessàries per a complir la seua tasca.

### 5.6. La sentència `return`

Permet retornar el resultat final al punt del programa on es llamó al mètode:
* Si el mètode defineix un tipus de retorn distint de `void`, és **obligatori** que termine amb un `return` seguit d'un valor o expressió del tipus prometido.
* En cuanto s'executa una sentència `return`, el mètode **finalitza d'immediat**, devolvent el control al codi llamante.
* Si el mètode és `void`, no fa falta posar `return` (encara que es pot usar `return;` en solitario per a eixir abans del mètode si es compleix alguna condició).

> **📌 Diferència crucial: imprimir (`println`) no és retornar (`return`)**
> 

> Un dels errors més freqüents a l'iniciar-se en la programació és confundir mostrar per pantalla amb retornar un valor:

> - `System.out.println(...)`: Mostra text en la consola perquè l'usuari humà el lea, però el programa no pot "guardar" eixa eixida per a fer altres càlculs.

> - `return valor`: Passa el dada internament a qui invocó el mètode perquè puga guardar-lo en una variable, comparar-lo o usar-lo en una altra operació matemática.

## 6. Paràmetres i pas d'informació

És important distingir entre dos conceptes:

1. **Paràmetre formal**: És la variable que es declara en la capçalera del mètode al definir-lo. Funciona com una variable local dins del mètode.

1. **Argument (o paràmetre real)**: És el valor concret que es li envia al mètode en el moment exacte de llamar-lo (*invocació*).

```java
// 'numero' es el PARÁMETRO FORMAL
public static int elevarAlCuadrado(int numero) {
    return numero * numero;
}

public static void main(String[] args) {
    int x = 5;
    // 'x' (o el valor 5) es el ARGUMENTO real
    int resultado = elevarAlCuadrado(x);
}
```

> **📌 Pas de paràmetres per valor**
> 

> En Java, els tipus primitius es passen **sempre per valor**. Açò significa que el mètode rep una **còpia** del dada. Si el mètode modifica el valor del seu paràmetre local, la variable original en `main` **no es veu afectada**.

## 7. Els quatre tipus de mètodes segons paràmetres i retorn

Depenent de si necessiten dades d'entrada i de si retornen un resultat, podem classificar els mètodes en quatre categories:

### Cas 1: Sense paràmetres i sense retorn (`void`)

Són mètodes que realitzen una acció fixa, com mostrar informació o un menú:

```java
public static void mostrarSeparador() {
    System.out.println("----------------------------------------");
}
```

**Anomenada des de `main`:**

```java
mostrarSeparador();
```

### Cas 2: Amb paràmetres i sense retorn (`void`)

Reben dades de l'exterior però no retornen res; solen processar eixes dades per a mostrar-los en pantalla:

```java
public static void saludarUsuario(String nombre, int edad) {
    System.out.println("Hola " + nombre + ", tienes " + edad + " años.");
}
```

**Anomenada des de `main`:**

```java
saludarUsuario("Carlos", 20);
```

### Cas 3: Sense paràmetres i amb retorn

No necessiten dades d'entrada, però calculan o generen un valor que retornen al programa principal:

```java
public static double obtenerNumeroPi() {
    return 3.14159265;
}
```

**Anomenada des de `main`:**

```java
double pi = obtenerNumeroPi();
System.out.println("El valor de PI es: " + pi);
```

### Cas 4: Amb paràmetres i amb retorn

Són els mètodes més habituals i potents: reben dades, els procesan i retornen el resultat final:

```java
public static int calcularMayor(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

public static boolean esPar(int numero) {
    return numero % 2 == 0;
}
```

**Anomenada des de `main`:**

```java
int mayor = calcularMayor(15, 27);
System.out.println("El mayor es: " + mayor); // Imprime 27

if (esPar(mayor)) {
    System.out.println("Además es par.");
}
```

## 8. Com i on es colocan els mètodes dins del codi?

Un programa Java bàsic amb mètodes segueix aquesta estructura:

```java
public class NombreClase {

    // 1. Método principal (main)
    public static void main(String[] args) {
        // Invocación a otros métodos
    }

    // 2. Otros métodos estáticos auxiliares (al mismo nivel)
    public static void metodoA() {
        ...
    }

    public static int metodoB(int x) {
        ...
    }
}
```

[!CAUTION] Mai anides mètodes!
En Java **no es pot declarar un mètode dins d'un altre mètode**. Els mètodes es declaran uns darrere d'altres, dins del cos de la classe `{ ... }`, però mai dins del cos de `main` ni de cap un altre mètode.

## 9. Exemple integrador complet

Vegem un programa complet on aplicamos tot l'aprendido: una xicoteta aplicació que calcula estadístiques de dos números:

```java
public class CalculadoraEstadistica {

    // Método principal: orquesta la ejecución
    public static void main(String[] args) {
        int num1 = 12;
        int num2 = 8;

        imprimirCabecera();

        // Llamamos a los métodos y recogemos sus resultados
        int suma = sumar(num1, num2);
        double media = calcularMedia(num1, num2);
        int mayor = obtenerMaximo(num1, num2);

        // Mostramos los resultados
        System.out.println("Números evaluados: " + num1 + " y " + num2);
        System.out.println("Suma: " + suma);
        System.out.println("Media: " + media);
        System.out.println("El mayor de los dos es: " + mayor);

        if (esPositivo(num1)) {
            System.out.println(num1 + " es positivo.");
        }
    }

    // 1. Sin parámetros y sin retorno
    public static void imprimirCabecera() {
        System.out.println("========================================");
        System.out.println("   ESTADÍSTICAS BÁSICAS DE NÚMEROS      ");
        System.out.println("========================================");
    }

    // 2. Con parámetros y con retorno (int)
    public static int sumar(int a, int b) {
        return a + b;
    }

    // 3. Con parámetros y con retorno (double)
    public static double calcularMedia(int a, int b) {
        return (a + b) / 2.0; // Usamos 2.0 para evitar la división entera
    }

    // 4. Con parámetros y lógica condicional
    public static int obtenerMaximo(int a, int b) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }

    // 5. Con parámetros y retorno booleano
    public static boolean esPositivo(int n) {
        return n > 0;
    }
}
```

## 10. Resum d'errors freqüents i com evitar-los

| Error habitual | Causa | Solució |
| --- | --- | --- |
| **Olvidar la paraula `static`** | Anomenar a un mètode no estàtic des de `main`. | Afegir el modificador `static` en la capçalera del mètode. |
| **Definir un mètode dins de `main`** | Intentar crear funcions locals dins de les claus de `main`. | Mover la definició del mètode fora de `main`, com membre de la classe. |
| **Falta de sentència `return`** | Declarar que el mètode retorna un tipus (`int`, `String`...) però no incloure `return`. | Asegurar-se de que tots els caminos del codi retornen un valor del tipus adequat. |
| **Codi inalcanzable (*Unreachable code*)** | Col·locar sentències després d'una instrucció `return`. | Tot codi després de `return` mai s'executarà. Colocar-lo abans. |
| **Confundir ordre o tipus d'arguments** | Anomenar a `metodo(String, int)` passant `metodo(int, String)`. | Respetar rigurosament el número, tipus i ordre dels paràmetres definits. |



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **1.11 Creació i ús de mètodes** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quin component de l'ecosistema Java s'encarrega d'interpretar i executar el codi intermedari (Bytecode .class) fent que el programa siga independent de la plataforma?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) La Màquina Virtual de Java (JVM - Java Virtual Machine).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) L'editor de text Notepad.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) El sistema gestor de bases de dades SQLite.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Segons les convencions de codi net (Clean Code) en Java, com s'han d'anomenar les classes i les constants?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Les classes en minúscules amb guions i les constants en camelCase.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Tots els identificadors han de començar per un número.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Les classes en PascalCase (p. ex. CompteBancari) i les constants en UPPER_SNAKE_CASE (p. ex. IVA_GENERAL).</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En Java, la classe String és immutable i per a comparar el contingut de dues cadenes de text s'ha d'utilitzar el mètode .equals() en lloc de l'operador ==.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="javac" data-hint="Java Compiler (5 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina ordre del JDK s'utilitza en la terminal per a compilar un fitxer font HolaMundo.java i generar HolaMundo.class?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**1.11 Creació i ús de mètodes**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD01" data-activity="ut0110_metodos">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

