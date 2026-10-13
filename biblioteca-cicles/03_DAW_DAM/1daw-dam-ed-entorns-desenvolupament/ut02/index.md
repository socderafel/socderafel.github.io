---
layout: default
title: "UD2: Entorns Integrats de Desenvolupament (IDE) i Depuració — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD2"
prev_url: "../ut01/index.html"
prev_label: "⬅️ UD1: Desenvolupament de Programari"
next_url: "../ut03/index.html"
next_label: "UD3: Diagrames de Classes UML ➡️"
---

# UD2: Entorns Integrats de Desenvolupament (IDE) i Depuració

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-arch2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-proj2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-debug2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-stack2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed2)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ENTORNS INTEGRATS DE DESENVOLUPAMENT (IDE) I DEPURACIÓ</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura d'un IDE, gestió de projectes, depuració interactiva amb punts de ruptura i anàlisi de la pila de crides</text>

  <!-- Bloc 1: Arquitectura IDE -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arch2)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🛠️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arquitectura IDE</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Components Clau</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Editor de codi intel·ligent</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Autocompletat &amp; Linter</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Compilador &amp; Build tools</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Ecosistema de connectors</text>
  </g>

  <!-- Bloc 2: IDEs & Projectes -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-proj2)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📁</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">IDEs Principals</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Espais de Treball</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• IntelliJ IDEA (JetBrains)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Eclipse &amp; NetBeans</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Visual Studio Code (LSP)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Estructura src, bin, target</text>
  </g>

  <!-- Bloc 3: Depuració Interactiva -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-debug2)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🐞</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Depurador Gràfic</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Breakpoints &amp; Pas a Pas</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Punts de ruptura de línia</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Breakpoints condicionals</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Step Over, Into, Out</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Suspensió de fils d'execució</text>
  </g>

  <!-- Bloc 4: Memòria & Pila -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-stack2)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Pila &amp; Variables</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Inspecció en Memòria</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Pila de crides (Call Stack)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Variables d'àmbit local</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Vigilància (Watches)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Avaluació d'expressions</text>
  </g>
</svg>
</div>

Un **Entorn Integrat de Desenvolupament (*Integrated Development Environment - IDE*)** és la ferramenta central de treball del programador professional. Agrupa en una única aplicació totes les eines necessàries per a escriure, compilar, empaquetar, executar i depurar programari. En aquesta unitat s'explora l'arquitectura d'un IDE, la gestió de projectes, la configuració d'espais de treball i la utilització del **depurador interactiu (*Debugger*)**, la ferramenta clau per a trobar errors lògics (*bugs*) sense recórrer a impressió de missatges rudimentaris.

---

## 2.1 Què és un IDE i quins components el formen?

Antigament, el desenvolupament de programari exigia utilitzar eines inconnexes: un editor de text per escriure codi, un compilador executat des de la consola de comandaments, un enllaçador i fitxers de registre (*logs*) per detectar fallades. Un IDE integra totes aquestes utilitats en un entorn gràfic coherent.

### Components fonamentals d'un IDE:
1. **Editor de codi font avançat:** Ofereix ressaltat de sintaxi en color (*Syntax Highlighting*), comprovació d'errors en temps real (*Linting*), autocompletat intel·ligent de codi (*IntelliSense*) i formatació automàtica.
2. **Gestor de projectes i construcció (*Build Tools*):** Organitza els fitxers de codi, les imatges, els recursos i les biblioteques externes (*JARs/dependencies*). Se sol recolzar en motors estàndard com **Maven** o **Gradle**.
3. **Compilador / Intèrpret integrat:** Executa la construcció del programari amb un sol clic o combinació de tecles (`Ctrl+F9`, `Shift+F10`), mostrant els errors d'anàlisi directament subratllats sobre la línia culpable.
4. **Depurador gràfic (*Debugger*):** Permet aturar l'execució del programa en qualsevol punt exacte per inspeccionar l'estat intern de la memòria RAM, el valor de les variables i la jerarquia de funcions actives.
5. **Eines de refactorització i navegació:** Permeten reanomenar classes o mètodes en tot el projecte de manera atòmica, saltar a la definició d'una funció (`Ctrl+Click`) o cercar referències.
6. **Integració amb control de versions:** Connecta directament amb sistemes Git per a fer commits, branques i resoldre conflictes visualment.

---

## 2.2 Principals IDEs en l'ecosistema actual

| IDE / Editor | Desenvolupador | Llenguatges Principals | Característiques Destacades |
| :--- | :--- | :--- | :--- |
| **IntelliJ IDEA** | JetBrains | Java, Kotlin, Groovy, Scala | L'estàndard corporatiu per excel·lència. Anàlisi estàtica avançada, ergonomia de codi i refactoritzacions d'alt nivell. |
| **Eclipse** | Fundació Eclipse | Java, C++, PHP | Molt estès en grans empreses públiques i privades. Arquitectura totalment modular basada en connectors (*plugins*). |
| **Visual Studio Code** | Microsoft | Poliglota (JS, TS, Python, Java, C#) | Editor molt ràpid i lleuger basat en Electron i en el protocol estàndard *Language Server Protocol (LSP)*. |
| **Apache NetBeans** | Fundació Apache | Java, PHP, HTML5 | IDE històric de referència per a aplicacions d'escriptori Swing i Java EE. |

---

## 2.3 Estructura d'un projecte i gestió d'espais de treball

Un projecte Java típic gestionat per un IDE segueix una organització estàndard en el sistema de fitxers:

```
ElMeuProjecte/
├── .idea/                 <-- Metadades internes i configuració pròpia de l'IDE
├── src/                   <-- Codi font humà (.java)
│   └── com/empresa/app/
│       ├── Main.java
│       └── model/
│           └── Usuari.java
├── lib/                   <-- Biblioteques externes descarregades (.jar)
├── bin/ o target/         <-- Sortida compilada: fitxers bytecode (.class)
└── pom.xml                <-- Configuració del gestor de dependències Maven
```

---

## 2.4 Fonaments de la depuració interactiva (*Interactive Debugging*)

Quan un programa té un error sintàctic, el compilador l'atura i indica la línia exacta. Però quan té un **error lògic o d'execució (*bug*)**, el programa compila perfectament però produeix resultats incorrectes o llança excepcions inesperades (`NullPointerException`, `IndexOutOfBoundsException`).

> [!WARNING]
> La pràctica de posar múltiples `System.out.println("He arribat ací");` per esbrinar què fa el codi és altament contraproduent: embruta el codi, pot modificar el comportament en fils d'execució (*heisenbugs*) i obliga a recompilar contínuament. Un programador professional utilitza el **Depurador (*Debugger*)**.

### Tipus de Punts de Ruptura (*Breakpoints*):
- **Punt de ruptura de línia (*Line Breakpoint*):** S'activa fent clic a la barra lateral esquerra al costat del número de línia (apareix un cercle roig). Atura el fil d'execució just **abans** que la línia seleccionada s'execute.
- **Punt de ruptura condicional (*Conditional Breakpoint*):** Permet definir una expressió lògica en Java. L'IDE només pausarà l'execució quan la condició s'avalue com a `true` (Ex. `comptador == 5000` o `nom.equals("admin")`).
- **Punt de ruptura d'excepció (*Exception Breakpoint*):** Configura l'IDE per a aturar el programa a l'instant exacte en què es llance una excepció específica, mostrant la línia exacta de l'error abans que l'aplicació caigui.

---

## 2.5 Control de l'execució pas a pas

Quan el depurador atura el programa en un punt de ruptura, el desenvolupador pren el control manual de la CPU utilitzant quatre comandaments fonamentals:

1. **Step Over (Avançar un pas - F8 / F10):** Executa la línia de codi actual i s'atura a la línia següent. Si la línia conté una crida a una funció, la funció sencera s'executa a velocitat normal sense entrar dins del seu codi.
2. **Step Into (Entrar dins - F7 / F11):** Si la línia actual crida a un mètode, salta a la primera instrucció de l'interior d'aquest mètode per analitzar com funciona pas a pas.
3. **Step Out (Eixir fora - Shift+F8 / Shift+F11):** Executa a velocitat normal totes les instruccions que queden del mètode actual i s'atura immediatament a la línia que el va cridar (retorn).
4. **Resume / Continue (Continuar - F9 / F5):** Allibera l'execució normal del programa fins que la CPU ensopegui amb un altre punt de ruptura o el programa finalitzi.

---

## 2.6 La Pila de Crides (*Call Stack*) i la inspecció de memòria

En la finestra inferior del depurador es mostren dos panells crítics:

### 1. La Pila de Crides (*Frames / Call Stack*)
Mostra l'historial jeràrquic de funcions actives en ordre invers:
- A dalt de tot: La funció que s'està executant en aquest mateix instant.
- A sota: La funció que ha cridat a la funció actual.
- Al final de tot: El mètode `main()`.
En fer clic sobre qualsevol marc de la pila, l'IDE retrocedeix visualment al context de memòria d'aquella funció.

### 2. Variables Locals i Vigilàncies (*Watches*)
- **Panell de variables:** Mostra en temps real els objectes i tipus primitius vius en l'àmbit actual, permetent desplegar els atributs interns de qualsevol instància.
- **Expressions de vigilància (*Watches*):** Permet escriure qualsevol expressió o càlcul (Ex. `llista.size() > 0`) per avaluar-lo dinàmicament sense alterar el codi.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi de la Pila de Crides (*Call Stack*) en crides recursives
Analitza el següent algorisme de càlcul de nombres de Fibonacci en Java:

```java
public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
    public static void main(String[] args) {
        int resultat = fib(4);
        System.out.println(resultat);
    }
}
```

1. Dibuixa l'arbre de crides per a la invocació `fib(4)` indicant quants cops s'executa el mètode `fib`.
2. Quina és la profunditat màxima que assoleix la **Pila de Crides (*Call Stack*)** en el moment de màxim consum de memòria stack?
3. Si un marc de pila (*stack frame*) de 64 bits consumeix $64\text{ bytes}$, calcula la memòria stack consumida en la profunditat màxima. Què passaria si per error s'elimina la sentència `if (n <= 1) return n;`? Quin tipus d'error de la JVM es produirà?

#### Exercici 2: Càlcul d'eficiència: Depuració amb Breakpoints vs Impressió per consola
Un programa de simulació de trànsit processa $N = 500.000$ vehicles dins d'un bucle. El vehicle amb identificador `id = 384192` provoca una fallada amb càlculs incoherents.
- **Mètode A (Impressió per consola `System.out.println`):**
  - Cada impressió de línia al terminal triga una mitjana de $0,05\text{ ms}$ a causa de les operacions d'E/S de la consola.
  - El fitxer de log generat ocuparia $120\text{ bytes}$ per línia.
- **Mètode B (Punt de ruptura condicional `id == 384192`):**
  - L'avaluació en memòria de la condició costa $0,00002\text{ ms}$ per iteració.

1. Calcula el temps total en segons que trigarà a executar-se el bucle sota el Mètode A i la mida del fitxer de registre generat en Megabytes ($\text{MB}$).
2. Calcula el temps en segons que trigarà el Mètode B fins a pausar-se exactament en el vehicle conflictiu.
3. Quant de temps humà de cerca manual en un fitxer de text de 500.000 línies s'estalvia el programador emprant el punt de ruptura condicional?

#### Exercici 3: Petjada de memòria d'IDEs i consum del sistema operatiu
Un institut disposa d'un parc d'ordinadors de laboratori amb $8\text{ GB}$ de memòria RAM.
El sistema operatiu i els serveis base consumeixen $3.2\text{ GB}$.
Es comparen dos entorns de treball:
- **Opció 1:** IntelliJ IDEA Ultimate amb 12 connectors actius que té un consum base de procés Java de $2.1\text{ GB}$.
- **Opció 2:** Visual Studio Code amb l'extensió bàsica Language Support for Java que té un consum combinat d'Electron i Java Language Server de $750\text{ MB}$.

1. Calcula la memòria RAM lliure que queda disponible per executar la base de dades MariaDB i el navegador web en cadascuna de les dues opcions.
2. Si una màquina virtual d'aprenentatge Docker requereix $3.5\text{ GB}$ addicionals, quina de les dues opcions provocarà un col·lapse per memòria virtual (*Swapping*) en el sistema?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació i configuració d'un projecte estàndard en l'IDE
- **Objectiu:** Crear un projecte Java amb estructura neta i configurar els paràmetres de compilació.
- **Procediment de taller:**
  1. Obre el teu IDE de referència (IntelliJ IDEA o Eclipse o VS Code amb paquet Java).
  2. Crea un nou projecte buit anomenat `LaboratoriDepuracio`.
  3. Configura el SDK del projecte perquè apunte a una versió estàndard de JDK (OpenJDK 17 o superior).
  4. Crea un paquet `org.cicles.ed` i dins una classe `GestorEstudiants` amb un mètode `main`.
  5. Comprova que l'IDE compila i col·loca el fitxer `.class` en el directori de sortida configurat (`out/` o `bin/`).

#### Repte 2: Depuració interactiva d'una fallada `IndexOutOfBoundsException`
- **Objectiu:** Localitzar i solucionar un error clàssic d'accés a arrays utilitzant el depurador.
- **Codi amb errada:**
  ```java
  public class ArrayDebug {
      public static void main(String[] args) {
          int[] temperatures = { 18, 22, 25, 20, 19, 23 };
          int suma = 0;
          for (int i = 0; i <= temperatures.length; i++) { // <-- Error típic <=
              suma += temperatures[i];
          }
          System.out.println("Mitjana: " + (suma / temperatures.length));
      }
  }
  ```
- **Procediment de taller:**
  1. Afegeix un punt de ruptura a la línia del bucle `for`.
  2. Executa el programa en **Mode Depuració (*Debug*)**.
  3. Avança pas a pas amb **Step Over (F8)** i observa al panell de variables el valor d'`i` en cada cicle.
  4. Identifica quin és el valor d'`i` quan s'arriba a l'última iteració que fa fallar el programa i corregeix l'operador lògic.

#### Repte 3: Depuració amb Punts de Ruptura Condicionals i Watches
- **Objectiu:** Detindre l'execució d'una simulació només quan una dada compleix un criteri crític.
- **Procediment de taller:**
  1. Crea una classe `SimulacioComptes` amb un bucle que simule $1.000$ transaccions bancàries amb valors aleatoris.
  2. Afegeix un punt de ruptura dins del bucle, fes clic dret sobre el punt de ruptura i configura una condició:
     `saldo < 0`
  3. Executa el depurador: comprova com s'executa a velocitat màxima sense aturar-se en transaccions vàlides i només es congela en la primera transacció que deixa el compte en números vermells.
  4. Afegeix una expressió de vigilància (*Watch*) per avaluar `Math.abs(saldo) * 1.21` i comprova el resultat calculat en temps real.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He instal·lat i configurat un IDE complet vinculant el JDK de Java correctament.
- [ ] He reconegut l'estructura d'un projecte (directoris font, llibreries i binaris compilats).
- [ ] He executat un programa en mode depuració (*Debug Mode*).
- [ ] He col·locat punts de ruptura estàndard i condicionals.
- [ ] He utilitzat amb soltesa les accions de pas a pas (*Step Over*, *Step Into*, *Step Out*).
- [ ] He inspeccionat el valor de variables locals i he afegit expressions de vigilància (*Watches*).
- [ ] He analitzat la Pila de Crides (*Call Stack*) per reconstruir el camí d'execució d'una excepció.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Configuració i Ús de l'IDE** | Domina la configuració d'espais de treball, gestors de dependències, tecles ràpides i eines d'anàlisi estàtica de l'IDE. | Configura i utilitza un IDE solventment per crear, compilar i gestionar projectes Java. | Crea projectes senzills a l'IDE però té dificultats per afegir dependències externes o canviar el JDK. | Incapaç de crear o compilar un projecte a l'IDE sense errors de configuració bàsica. |
| **Punts de Ruptura i Condicionals** | Utilitza hàbilment punts de ruptura condicionals i d'excepció per aïllar fallades complexes en grans volums de dades. | Col·loca punts de ruptura en línies correctes i comprèn la utilitat dels condicionals. | Utilitza punts de ruptura simples de línia però desconeix com afegir condicions d'aturada. | Continua depurant mitjançant impressions manuals per consola (`println`) sense emprar el depurador. |
| **Navegació Pas a Pas (Stepping)** | Domina la diferència entre Step Over, Step Into i Step Out, navegant àgilment per la lògica interna del codi. | Executa instruccions pas a pas i sap quan entrar o no dins d'un mètode auxiliar. | Utilitza Step Over però entra per accident en biblioteques del sistema i es perd en el flux. | Fa clic repetidament sense saber a quina instrucció s'ha aturat el programa. |
| **Inspecció de Memòria i Pila** | Analitza els marcs de la Pila de Crides (Call Stack), avalua expressions en memòria i audita referències d'objectes. | Inspecciona el panell de variables locals i empra la finestra de vigilància (Watches). | Reconeix les variables de l'àmbit actual però no comprèn la informació que ofereix la pila de crides. | Desconeix el panell de variables i no sap comprovar el valor d'una dada en temps d'execució. |
