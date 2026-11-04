---
title: "1.9 Classes Embolcall (Wrappers), Character i String"
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

# 1.9 Classes Embolcall (Wrappers), Character i String

> **📌 📌 Informació Curricular i Resultats d'aprenentatge**
> 

> **Resultats d'aprenentatge:** `RA1` (Reconeix l'estructura d'un programa informàtic, identificant els tipus de dades del llenguatge) i `RA3` (Escriu i depura codi amb estructures de control).

> **Criteris d'avaluació:** CEb (Identificació de tipus de dades bàsics i objectes), CEd (Operadors i conversions), CEf (Llibreries de classes estàndard de Java) i CEg (Sintaxi i convencions *Clean Code*).

## 1. Introducció: De Tipus Primitius a Classes (*Wrappers*)

En Java existeixen **dos grans categories** de tipus de dades:

  
1. **Tipus primitius (`int`, `double`, `char`, `boolean`...):** Emmagatzemen directament el valor puro en la memòria ràpida (*pila* o *stack*). Són molt ligeros i rápits, però **no són objectes**: carecen d'atributs i mètodes. No és possible escriure `numero.algo()`.
  
1. **Tipus referenciats o Objectes (Classes):** Emmagatzemen una referència (puntero) a un objecte ubicado en la memòria dinàmica (*heap*). Disposen de **mètodes d'utilitat** incorporats per a operar, consultar i transformar la informació.

Per a salvar aquesta limitació, Java inclou en el seu paquet fonamental `java.lang` (disponible automàticament sense necessitat de `import`) una **Classe Embolcall** (*Wrapper class*) per a cada un dels 8 tipus primitius:

| Tipus Primitiu | Classe Embolcall (*Wrapper*) | Mida en memòria | Exemple de mètode estàtic útil |
| --- | --- | --- | --- |
| `byte` | **`Byte`** | 8 bits | `Byte.parseByte("10")` |
| `short` | **`Short`** | 16 bits | `Short.MAX_VALUE` |
| `int` | **`Integer`** | 32 bits | `Integer.parseInt("42")` |
| `long` | **`Long`** | 64 bits | `Long.parseLong("10000000000")` |
| `float` | **`Float`** | 32 bits | `Float.parseFloat("3.14F")` |
| `double` | **`Double`** | 64 bits | `Double.parseDouble("19.99")` |
| `char` | **`Character`** | 16 bits | `Character.isDigit('7')` |
| `boolean` | **`Boolean`** | 1 bit | `Boolean.parseBoolean("true")` |

> **📌 ⚡ Autoboxing i Unboxing automàtic**
> 

> Java converteix automàticament entre el primitiu i el seu classe embolcall sense necessitat d'instanciar manualment:

```java
Integer numObjeto = 10;        // Autoboxing: de int primitivo a objeto Integer
int numPrimitivo = numObjeto;  // Unboxing: de objeto Integer a int primitivo
```

> *Nota: Des de Java 9, l'ús de constructors explícitos com `new Integer(10)` està oficialment obsoleto i desaconsejado.*

## 2. La Classe `Character`: Inspecció i Validació de Caràcters

El tipus primitiu `char` emmagatzema un únic caràcter Unicode entre cometes simples (`'a'`, `'5'`, `'#'`). Al ser primitiu, no té mètodes propis.

Per a saber si un caràcter introduït pel usuari és una lletra, un número, un espai o un signe de puntuació, recurrimos als **mètodes estátics de la classe `Character`**.

### 2.1. Mètodes de comprovació booleana (`is...`)

Es invocan directament com `Character.metodo(variableChar)` i retornen `true` o `false`:

| Mètode | Retorna | Descripció | Exemple (`char c = '9';`) |
| --- | --- | --- | --- |
| **`Character.isDigit(c)`** | `boolean` | Comprova si és un dígito numèric (`'0'` al `'9'`). | `Character.isDigit('9')` → `true` |
| **`Character.isLetter(c)`** | `boolean` | Comprova si és una lletra alfabética (inclou tildes, `'ñ'` i Unicode). | `Character.isLetter('9')` → `false` |
| **`Character.isLetterOrDigit(c)`** | `boolean` | Comprova si és alfanuméric (lletra o dígito). | `Character.isLetterOrDigit('@')` → `false` |
| **`Character.isWhitespace(c)`** | `boolean` | Comprova si és espai en blanc, tabulador (`\t`) o salt de línia (`\n`). | `Character.isWhitespace(' ')` → `true` |
| **`Character.isUpperCase(c)`** | `boolean` | Comprova si la lletra està en mayúscula. | `Character.isUpperCase('A')` → `true` |
| **`Character.isLowerCase(c)`** | `boolean` | Comprova si la lletra està en minúscula. | `Character.isLowerCase('a')` → `true` |

### 2.2. Mètodes de transformació (`to...`)

| Mètode | Retorna | Descripció | Exemple |
| --- | --- | --- | --- |
| **`Character.toUpperCase(c)`** | `char` | Converteix el caràcter a mayúscula (si no és lletra, el manté igual). | `Character.toUpperCase('b')` → `'B'` |
| **`Character.toLowerCase(c)`** | `char` | Converteix el caràcter a minúscula. | `Character.toLowerCase('G')` → `'g'` |

### 2.3. Exemple pràctic: Classificar la pulsació de l'usuari

El següent programa demana un caràcter i mostra la seua classificació exacta combinant `Character` amb l'operador condicional:

```java
package ut1.caracteres;

import java.util.Scanner;

public class ClasificadorCaracter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce un solo carácter por teclado: ");
        char entrada = sc.next().charAt(0);

        if (Character.isDigit(entrada)) {
            System.out.println("-> Es un DÍGITO NUMÉRICO (0-9).");
        } else if (Character.isLetter(entrada)) {
            System.out.println("-> Es una LETRA ALFABÉTICA.");
            if (Character.isUpperCase(entrada)) {
                System.out.println("   Está en MAYÚSCULAS.");
            } else {
                System.out.println("   Está en MINÚSCULAS.");
            }
            // Uso de operador ternario para alternar mayúscula/minúscula
            char opuesto = Character.isUpperCase(entrada) ? Character.toLowerCase(entrada)
                                                          : Character.toUpperCase(entrada);
            System.out.println("   Su opuesto es: " + opuesto);
        } else if (Character.isWhitespace(entrada)) {
            System.out.println("-> Es un espacio en blanco o tabulador.");
        } else {
            System.out.println("-> Es un SÍMBOLO o SIGNO DE PUNTUACIÓN.");
        }

        sc.close();
    }
}
```

## 3. Classes Numèriques (`Integer`, `Double`): Conversió i Constants

En aplicacions reals (i formularis web), les dades leídos del teclat o d'una petició web arriben sempre en format de text (`String`). Les classes numèriques aportan les funcions esencials de conversió (*parsing*).

### 3.1. Conversió de text (`String`) a número primitiu (`parseInt`, `parseDouble`)

```java
// Conversión de String a números primitivos
String textoEdad = "19";
int edad = Integer.parseInt(textoEdad); // Devuelve int primitivo 19

String textoPrecio = "49.95";
double precio = Double.parseDouble(textoPrecio); // Devuelve double primitivo 49.95
```

> **📌 ⚠️ Error comú: `NumberFormatException`**
> 

> Si la cadena no conté un format numèric vàlid (per exemple `Integer.parseInt("hola")` o `Integer.parseInt("12.5")` a l'intentar meter decimals en un enter), Java llançarà una excepció `NumberFormatException` i detendrá el programa. Més avant en la UT2 aprendrem a capturar-lo amb `try-catch`.

### 3.2. Conversió de número a text (`String`)

```java
int codigo = 404;

// Opción 1: Método estático de la clase envoltorio
String textoCodigo1 = Integer.toString(codigo);

// Opción 2 (Recomendada y universal para cualquier tipo):
String textoCodigo2 = String.valueOf(codigo);
```

### 3.3. Constants límit del sistema

Les classes embolcall permeten consultar els límits numèrics de la màquina:

```java
System.out.println("Entero máximo: " + Integer.MAX_VALUE); //  2.147.483.647
System.out.println("Entero mínimo: " + Integer.MIN_VALUE); // -2.147.483.648

System.out.println("Decimal máximo: " + Double.MAX_VALUE); // 1.7976931348623157E308
```

## 4. La Classe `String`: Mètodes Esencials de Inspecció i Manipulació

La classe `String` representa seqüències alfanumériques inmutables. Compta amb mètodes natius per a examinar i manipular cadenes.

### 4.1. Mètodes fonamentals de consulta

| Mètode | Retorna | Descripció | Exemple (`String s = "DAW 1º";`) |
| --- | --- | --- | --- |
| **`s.length()`** | `int` | Número total de caràcters de la cadena. | `s.length()` → `6` |
| **`s.charAt(i)`** | `char` | Caràcter situat en l'índex `i` (base 0). | `s.charAt(0)` → `'D'` |
| **`s.isEmpty()`** | `boolean` | `true` si la longitud és 0 (`""`). | `"".isEmpty()` → `true` |
| **`s.isBlank()`** | `boolean` | `true` si està buida o conté només espais en blanc. | `" ".isBlank()` → `true` |

> **📌 🔗 El puente entre `String` i `Character`**
> 

> Gràcies a `s.charAt(i)`, podem extraer qualsevol caràcter d'una cadena de text per a examinar-lo inmediatament amb els mètodes de `Character`:

```java
String matricula = "4589LKT";
char primerCaracter = matricula.charAt(0); // '4'
boolean esNumero = Character.isDigit(primerCaracter); // true
```

### 4.2. Mètodes de comparació (Regla d'oro: MAI usar `==`!)

Els objectes en Java no es comparen amb l'operador `==` (perquè compararía les seues adreces de memòria en el *heap*, no el contingut dels seus caràcters). Sempre hem d'usar els mètodes de comparació:

| Mètode | Retorna | Descripció |
| --- | --- | --- |
| **`s1.equals(s2)`** | `boolean` | `true` si totes dues cadenes són exactament idéntiques respetant majúscules/minúscules. |
| **`s1.equalsIgnoreCase(s2)`** | `boolean` | `true` si coincideixen ignorant diferències entre majúscules i minúscules. |
| **`s1.compareTo(s2)`** | `int` | Comparació lexicográfica (alfabética). Retorna `0` si són iguals, `< 0` si `s1` va abans, `> 0` si va després. |

### 4.3. Cerca i Subcadenas

| Mètode | Retorna | Descripció | Exemple (`String s = "IES Catadau";`) |
| --- | --- | --- | --- |
| **`s.contains(texto)`** | `boolean` | Comprova si la subcadena està contenida en el text. | `s.contains("Cata")` → `true` |
| **`s.startsWith(prefijo)`** | `boolean` | Comprova si comença per aquest prefix. | `s.startsWith("IES")` → `true` |
| **`s.endsWith(sufijo)`** | `boolean` | Comprova si acaba per aquest sufix. | `s.endsWith(".java")` → `false` |
| **`s.indexOf(texto)`** | `int` | Posició de la primera coincidencia (o `-1` si no existeix). | `s.indexOf("Catadau")` → `4` |
| **`s.substring(inicio)`** | `String` | Extrae el text des de l'índex `inicio` fins al final. | `s.substring(4)` → `"Catadau"` |
| **`s.substring(inicio, fin)`** | `String` | Extrae des de `inicio` (inclòs) fins a `fin` (excluido). | `s.substring(0, 3)` → `"IES"` |

## 5. Casos Pràctics Complets

### Cas Pràctic 1: Validador de Format de DNI / NIF

Comprovar que una cadena introducida compleix amb el format estàndard espanyol (8 números seguits de 1 lletra mayúscula):

```java
package ut1.practicas;

import java.util.Scanner;

public class ValidadorDniSimple {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce tu DNI/NIF completo (ej. 12345678Z): ");
        String dni = sc.nextLine().trim().toUpperCase();

        // 1. Validar longitud exacta de 9 caracteres
        if (dni.length() != 9) {
            System.out.println("❌ Error: El DNI debe tener exactamente 9 caracteres.");
        } else {
            // 2. Extraer la parte numérica y la letra final
            String parteNumerica = dni.substring(0, 8);
            char letraFinal = dni.charAt(8);

            // 3. Validar con Character que el último sea una letra
            if (!Character.isLetter(letraFinal)) {
                System.out.println("❌ Error: El último carácter debe ser una letra.");
            } else {
                // 4. Convertir los primeros 8 caracteres a entero con Integer.parseInt
                int numeroDni = Integer.parseInt(parteNumerica);
                System.out.println("✅ Formato válido. Número: " + numeroDni + " | Letra: " + letraFinal);
            }
        }

        sc.close();
    }
}
```

### Cas Pràctic 2: Validador de Seguretat de Contrasenya

Verificar si una contrasenya compleix els requisits mínims de seguretat:

  
- Longitud mínima de 8 caràcters.
  
- Almenys un dígito numèric (`Character.isDigit`).
  
- Almenys una lletra mayúscula (`Character.isUpperCase`).
  
- Almenys una lletra minúscula (`Character.isLowerCase`).

```java
package ut1.practicas;

import java.util.Scanner;

public class ValidadorPassword {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Introduce tu nueva contraseña: ");
        String password = sc.nextLine();

        if (password.length() < 8) {
            System.out.println("❌ Contraseña demasiado corta (mínimo 8 caracteres).");
        } else {
            boolean tieneNumero = false;
            boolean tieneMayuscula = false;
            boolean tieneMinuscula = false;

            // Recorremos la cadena carácter a carácter con charAt(i)
            for (int i = 0; i < password.length(); i++) {
                char actual = password.charAt(i);

                if (Character.isDigit(actual)) {
                    tieneNumero = true;
                } else if (Character.isUpperCase(actual)) {
                    tieneMayuscula = true;
                } else if (Character.isLowerCase(actual)) {
                    tieneMinuscula = true;
                }
            }

            // Comprobación final
            if (tieneNumero && tieneMayuscula && tieneMinuscula) {
                System.out.println("✅ Contraseña FUERTE y válida.");
            } else {
                System.out.println("⚠️ Contraseña DÉBIL. Debe incluir al menos:");
                if (!tieneNumero)    System.out.println("   - Un número");
                if (!tieneMayuscula) System.out.println("   - Una letra mayúscula");
                if (!tieneMinuscula) System.out.println("   - Una letra minúscula");
            }
        }

        sc.close();
    }
}
```

## 6. Activitats Propostes per al Alumnat (Subida a Aules)

> **📌 ✍️ Activitat 1: `DetectorMatricula.java` (Lliurament en Aules)**
> 

> Escriu un programa en Java que solicite a l'usuari una matrícula de vehicle en format estàndard espanyol (4 números seguits de 3 lletres, per exemple `4821KLP`):

  
> 1. Limpia els espais en blanc laterals i converteix tota la cadena a majúscules amb mètodes de `String`.
  
> 1. Comprova que la longitud total siga exactament de 7 caràcters (`.length() == 7`).
  
> 1. Comprova que els 4 primers caràcters siguen dígitos numèrics utilitzant un bucle o comprobacions individuals amb `Character.isDigit`.
  
> 1. Comprova que els 3 últims caràcters siguen lletres alfabétiques amb `Character.isLetter`.
  
> 1. Si la matrícula és vàlida, extrae amb `.substring(0, 4)` la part numèrica, conviértela a número amb `Integer.parseInt` i mostra per pantalla el número i les lletres per separat.

```text
Introduce tu matrícula (ej. 4821KLP): 4821klp
✅ Matrícula VÁLIDA:
   - Serie numérica: 4821 (procesada como entero)
   - Serie alfabética: KLP
```

> **📥 Lliurament:** Puja el fitxer `DetectorMatricula.java` a la tasca habilitada en **Aules**.

> **📌 ✍️ Activitat 2: `ContadorVocalesConsonantes.java` (Lliurament en Aules)**
> 

> Dissenya un programa en Java que demane a l'usuari una frase per teclat i, recorriéndola caràcter a caràcter amb un bucle i `.charAt(i)`:

  
> 1. Cuente quantes vocals conté (tant majúscules com minúscules).
  
> 1. Cuente quantes consonantes conté.
  
> 1. Cuente quants dígitos numèrics inclou (utilitzant `Character.isDigit`).
  
> 1. Mostre un resum estadístic tabulado amb `System.out.printf`.

```text
Introduce una frase: Java 2026 en Catadau!
📊 Análisis de la frase:
   - Vocales:     8
   - Consonantes: 9
   - Dígitos:     4
   - Otros:       4
   - Total car.:  25
```

> **📥 Lliurament:** Puja el fitxer `ContadorVocalesConsonantes.java` a **Aules**.

## 7. Rúbrica de Avaluació per a Aules

| Criteri | Excelente (4 pts) | Bo (2.5 pts) | Mejorable (1 pt) | No superado (0 pts) |
| --- | --- | --- | --- | --- |
| **Ús de `Character` i `String`** | Aplica correctament `isDigit`, `isLetter`, `charAt` i `.length` per a validar cadenes. | Aplica els mètodes però amb redundancias lògiques o falta d'algun cas. | Mescla tipus primitius i comparacions erróneas (`==` en compte de `.equals`). | No utilitza els mètodes d'inspecció de classes. |
| **Maneig de Tipus i Conversió** | Utilitza `Integer.parseInt` de forma limpia després de validar el text. | Converteix valors però sense validació previa. | Intenta fer casting explícit directe `(int) "123"`. | Error de compilació en tipus. |
| **Convencions i *Clean Code*** | Noms significativos (`camelCase`), indentació impecable i comentaris clau. | Compleix la majoria de convencions però amb variables genériques (`x`, `aux`). | Codi desordenat, sense indentació estàndard de Java. | No compila o lliurament format no vàlid. |



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **1.9 Classes Embolcall (Wrappers), Character i String** superant aquests 4 reptes gamificats (+25 punts cadascun):

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

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**1.9 Classes Embolcall (Wrappers), Character i String**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD01" data-activity="ut01wrappers">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

