---
layout: default
title: "Entorns de Desenvolupament — UD18 Guia de Repàs Integral d'Entorns de Desenvolupament (RA1 a RA6)"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD18"
---

# UD18 — Guia de Repàs Integral d'Entorns de Desenvolupament (RA1 a RA6)

<div align="center">
<svg viewBox="0 0 860 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad18" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="cardGrad18" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
    <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="shadow18" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="860" height="260" rx="16" fill="url(#bgGrad18)"/>

  <!-- Títol Superior -->
  <text x="430" y="38" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Matriu Global de Competències: Resultats d'Aprenentatge RA1 a RA6</text>
  <text x="430" y="58" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, -apple-system, sans-serif">Síntesi Curricular · IDEs & Depuració · Modelat UML · QA & Caixa Blanca · Git & Refactorització</text>

  <!-- Targeta 1: RA1-RA2 Cicle de Vida & IDEs -->
  <g transform="translate(25, 75)" filter="url(#shadow18)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad18)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#38bdf8" font-size="14">💻</text>
    <text x="48" y="31" fill="#38bdf8" font-size="14" font-weight="700" font-family="system-ui, sans-serif">RA1 · RA2 IDEs</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Models de cicle de vida</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Cascada, iteratiu, àgil</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Depuració interactiva</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Breakpoints, call stack, watch</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#0369a1" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="600">Entorn & Cicle de Vida</text>
  </g>

  <!-- Targeta 2: RA3-RA4 Modelat UML -->
  <g transform="translate(230, 75)" filter="url(#shadow18)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad18)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#4f46e5" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#818cf8" font-size="14">📐</text>
    <text x="48" y="31" fill="#818cf8" font-size="14" font-weight="700" font-family="system-ui, sans-serif">RA3 · RA4 UML</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Diagrames estructurals: classes</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Herència, composició, agregació</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Diagrames de comportament</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Casos d'ús, seqüència, activitats</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#4338ca" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#818cf8" font-size="10" font-weight="600">Disseny & Arquitectura</text>
  </g>

  <!-- Targeta 3: RA5 Proves de Programari -->
  <g transform="translate(435, 75)" filter="url(#shadow18)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad18)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#34d399" font-size="14">🧪</text>
    <text x="48" y="31" fill="#34d399" font-size="14" font-weight="700" font-family="system-ui, sans-serif">RA5 Proves QA</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Caixa Negra: classes equivalència</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Caixa Blanca: grafs de flux</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Complexitat ciclomàtica (V(G))</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Unit testing amb JUnit 5</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#047857" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#34d399" font-size="10" font-weight="600">Qualitat & Cobertura</text>
  </g>

  <!-- Targeta 4: RA6 Refactoring & Git -->
  <g transform="translate(640, 75)" filter="url(#shadow18)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad18)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#f59e0b" font-size="14">🛠️</text>
    <text x="48" y="31" fill="#f59e0b" font-size="14" font-weight="700" font-family="system-ui, sans-serif">RA6 Eines & Git</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Control de versions amb Git</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Branques, merges i resolució</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Refactoring (Code Smells)</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Eines CASE i Javadoc</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#b45309" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="600">Mantenibilitat & Col·laboració</text>
  </g>
</svg>
</div>

---

## 📌 18.1 Matriu Curricular dels Resultats d'Aprenentatge (RA1 a RA6)

El mòdul professional d'**Entorns de Desenvolupament** dota l'alumnat de les competències tècniques necessàries per avaluar, construir, verificar i mantenir aplicacions de programari amb estàndards de qualitat industrial.

```
+---------------------------------------------------------------------------------------------------------+
|                                    MAPA DE COMPETÈNCIES DEL MÒDUL                                       |
+-----+-------------------------------------------------------+-------------------------------------------+
| RA  | DENOMINACIÓ OFICIAL DEL RESULTAT D'APRENENTATGE       | BLOCS TEMÀTICS CLAU                       |
+-----+-------------------------------------------------------+-------------------------------------------+
| RA1 | Desenvolupament de programari i models de cicle       | Cicles de vida, metodologies, paradigmes  |
| RA2 | Instal·lació, configuració i ús d'IDEs i depuració    | IDEs, plugins, gestors de build, debugger |
| RA3 | Disseny orientat a objectes: Diagrames estructurals   | Diagrames de classes, paquets, relacions  |
| RA4 | Modelat de comportament del programari amb UML        | Casos d'ús, seqüència, activitats, estats |
| RA5 | Disseny i realització de proves de programari         | Caixa blanca/negra, McCabe, JUnit 5       |
| RA6 | Optimització, refactorització, control de versions    | Code smells, Git/GitHub, CASE, Javadoc    |
+-----+-------------------------------------------------------+-------------------------------------------+
```

---

## 📌 18.2 Eix 1: Cicle de Vida, IDEs i Depuració (RA1 i RA2)

### Fases del Cicle de Vida del Programari (SDLC)
Tots els models de desenvolupament comparteixen activitats fonamentals:
1. **Anàlisi de requisits:** Captura de necessitats funcionals i no funcionals.
2. **Disseny d'arquitectura:** Disseny lògic, tecnològic i estructural.
3. **Codificació / Implementació:** Traducció dels dissenys a codi font.
4. **Verificació i Proves:** Validació del compliment de requisits i absència de defectes.
5. **Desplegament i Manteniment:** Posada en producció, correcció i evolució.

### Models de Procés
- **Cascada (*Waterfall*):** Seqüencial i rígid. Cada fase s'inicia en finalitzar la precedent. Elevat risc si els requeriments canvien tard.
- **Model en Espiral:** Centrat en l'avaluació contínua de riscos abans de cada iteració.
- **Desenvolupament Àgil (Scrum/Kanban):** Iteracions curtes, increments lliurables freqüents i col·laboració directa amb el client.

### Depuració Tècnica (*Debugging*) en IDEs
Els entorns integrats moderns (Eclipse, IntelliJ IDEA, VS Code) incorporen eines avançades de depuració en temps d'execució:
- **Punt de ruptura (*Breakpoint*):** Atura l'execució en una línia concreta. Pot ser condicional (només atura si una expressió booleana és certa).
- **Control d'execució:**
  - *Step Over* (F8 / F6): Executa la línia actual sense entrar a l'interior dels mètodes invocats.
  - *Step Into* (F7 / F5): Entra a l'interior del mètode invocat per seguir-ne el flux intern.
  - *Step Out* (Shift+F8 / F7): Executa la resta del mètode actual i torna al punt d'invocació.
- **Pila de crides (*Call Stack*):** Mostra la seqüència de mètodes actius que han conduït al punt d'aturada.
- **Observadors (*Watchers / Evaluate Expression*):** Permet inspeccionar i avaluar l'estat de variables i estructures d'objectes en memòria.

---

## 📌 18.3 Eix 2: Modelat Estructural i Dinàmic amb UML (RA3 i RA4)

El llenguatge **UML (Unified Modeling Language)** és l'estàndard *de facto* per a la representació gràfica d'arquitectures orientades a objectes.

### Diagrama de Classes (UML Estructural)
Representa l'estructura estàtica del sistema mitjançant classes, atributs, mètodes i relacions:

```
+-----------------------------------+
|               Usuari              |
+-----------------------------------+
| - id: int                         |
| - nom: String                     |
| - correu: String                  |
+-----------------------------------+
| + registrar(): boolean            |
| + iniciarSessio(pw: String): void |
+-----------------------------------+
                  ^
                  | (Herència / Generalització)
+-----------------------------------+
|               Alumne              |
+-----------------------------------+
| - expedient: String               |
+-----------------------------------+
| + consultarNotes(): List<Nota>    |
+-----------------------------------+
```

#### Tipus de Relacions entre Classes
1. **Associació:** Connexió estructural senzilla entre classes independents ($A \rightarrow B$).
2. **Agregació ($\diamond$):** Relació "tot-part" feble. La part pot existir de manera independent de l'objecte contenidor (ex: Departament i Professor).
3. **Composició ($\blacklozenge$):** Relació "tot-part" forta. La destrucció del tot implica la destrucció immediata de les parts (ex: Comanda i LíniaComanda).
4. **Generalització / Herència ($\vartriangle$):** Relació "és un" entre superclasse i subclasse.
5. **Dependència ($\dashrightarrow$):** Una classe utilitza temporalment una altra (ex: com a paràmetre d'un mètode).

### Diagrames Dinàmics (Comportament)
- **Casos d'Ús:** Descriuen la interacció entre actors externs i les funcionalitats ofertes pel sistema (relacions `<<include>>` per a dependències obligatòries i `<<extend>>` per a camins opcionals o excepcionals).
- **Diagrama de Seqüència:** Representa l'intercanvi de missatges cronològic entre objectes al llarg d'una línia de vida (*lifeline*).
- **Diagrama d'Activitats:** Modela el flux de control algorítmic, decisions, bifurcacions (*fork*) i unions (*join*).

---

## 📌 18.4 Eix 3: Estratègies de Prova i Cobertura de Codi (RA5)

### Proves de Caixa Negra (Black Box)
Se centren en verificar els requeriments funcionals sense conèixer el codi intern:
- **Particions d'equivalència:** Divisió del domini d'entrada en classes vàlides i invàlides. Cada classe representa un conjunt de valors que es processen de manera idèntica.
- **Anàlisi de valors límit (BVA):** Selecció de casos de prova en les fronteres exactes entre particions ($x_{\min}, x_{\min}+1, x_{\max}-1, x_{\max}$).

### Proves de Caixa Blanca (White Box) i Mètrica de McCabe
Analitzen l'estructura interna del codi mitjançant el graf de flux de control:
- **Complexitat Ciclomàtica de McCabe $V(G)$:** Determina el nombre de camins bàsics linealment independents necessaris per garantir que cada instrucció s'executa almenys una vegada:
  $$V(G) = E - N + 2P$$
  *on $E$ és el nombre d'arestes, $N$ el nombre de nodes i $P$ el nombre de components connexos (habitualment $P = 1$).*
  *De manera equivalent:* $V(G) = D + 1$ *(on $D$ és el nombre de nodes de decisió simples: `if`, `while`, `for`, `case`).*

### Proves Unitàries amb JUnit 5
```java
@Test
@DisplayName("Verifica el càlcul del descompte per a clients VIP")
void hauriaDeCalcularDescompteVIP() {
    Factura f = new Factura(100.0, TipusClient.VIP);
    double resultat = f.calcularTotal();
    assertEquals(80.0, resultat, 0.001, "El client VIP ha de tenir un 20% de descompte");
}
```

---

## 📌 18.5 Eix 4: Refactorització, Git i Eines CASE (RA6)

### Tècniques de Refactorització i Code Smells
Refactoritzar és alterar l'estructura interna del programari per millorar-ne la claredat i mantenibilitat sense modificar el seu comportament observable extern:
- **Mètode Llarg (*Long Method*):** Resolució mitjançant *Extract Method*.
- **Codi Duplicat (*Duplicated Code*):** Extracció a un mètode comú o superclasse (*Pull Up Method*).
- **Obsessió Primitiva (*Primitive Obsession*):** Encapsular tipus simples en classes de domini riques (*Value Objects*).
- **Classe Massa Gran (*Large Class / God Object*):** Aplicació del principi de responsabilitat única (SRP) mitjançant *Extract Class*.

### Control de Versions amb Git
```bash
# 1. Crear i canviar a una branca de funcionalitat
git checkout -b feature/validacio-auth

# 2. Registrar canvis de forma atòmica
git add src/main/java/AuthService.java
git commit -m "feat(auth): afegir validacio de format de contrasenya"

# 3. Sincronitzar amb el remot
git push -u origin feature/validacio-auth

# 4. Fusionar a la branca principal (després de PR)
git checkout main
git pull origin main
git merge --no-ff feature/validacio-auth
```

### Documentació amb Javadoc i Eines CASE
- **Javadoc:** Eina estàndard de documentació de classes, mètodes i paràmetres (`@param`, `@return`, `@throws`, `@deprecated`).
- **Enginyeria Directa:** Generació automàtica d'esquelets de codi a partir de models UML.
- **Enginyeria Inversa:** Anàlisi de codi font Java existent per reconstruir automàticament diagrames UML de classes.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Tècnica i Càlculs de Síntesi

#### Exercici 18.1: Avaluació del Cost de Correcció de Defectes segons la Fase
Segons l'estudi clàssic de Barry Boehm en Enginyeria del Programari, el cost de corregir un error creix de manera exponencial segons la fase del cicle de vida en què es detecta:

$$C(f) = C_0 \times 10^{k(f)}$$

On $C_0 = 100\text{ €}$ és el cost base en la fase de requeriments, i $k$ pren els següents valors:
- Fase d'Anàlisi i Requeriments: $k = 0 \rightarrow C = 100\text{ €}$
- Fase de Disseny i Modelat: $k = 0.5$
- Fase de Codificació: $k = 1.0$
- Fase de Proves del Sistema (QA): $k = 1.5$
- Fase de Producció / Manteniment: $k = 2.0$

1. Calculeu el cost econòmic exacte de reparar un defecte d'arquitectura quan es detecta en cadascuna de les 5 fases.
2. Si un equip aplica proves unitàries primerenques i revisió de disseny que detecten 12 defectes crítics abans d'arribar a producció, quin estalvi econòmic directe s'ha generat respecte a detectar-los en fase de manteniment?

#### Exercici 18.2: Càlcul de Complexitat Ciclomàtica i Disseny de Camins de Prova
Analitzeu el següent mètode Java d'accés i seguretat:

```java
public boolean validarAccés(Usuari usuari, boolean esHorariLaboral) {
    if (usuari == null || !usuari.isActiu()) {
        return false;
    }
    if (usuari.hasRol("ADMIN")) {
        return true;
    }
    if (esHorariLaboral && usuari.hasPermís("ACCES_SISTEMA")) {
        return true;
    }
    return false;
}
```

1. Descomponeu les condicions compostes i dibuixeu el graf de flux de control corresponent.
2. Calculeu la Complexitat Ciclomàtica de McCabe $V(G)$ utilitzant tant la fórmula d'arestes i nodes ($E - N + 2$) com la de regions/decisions ($D + 1$).
3. Enumereu el conjunt complet de camins linealment independents que garanteixen el 100% de cobertura de branques.

#### Exercici 18.3: Mesura de Mantenibilitat i Deute Tècnic
En una auditoria de codi d'un sistema Java, s'obtenen les següents mètriques d'un mòdul de gestió:
- Línies de codi (LOC): $1.200$
- Complexitat ciclomàtica mitjana: $V(G) = 14$
- Cobertura de proves unitàries: $42\%$
- Duplicació de codi: $18.5\%$

1. Avalueu el nivell de risc de mantenibilitat del mòdul segons els llindars estàndard de la indústria (baix, moderat, alt).
2. Proposeu 3 accions de refactorització concretes per reduir la complexitat ciclomàtica i la duplicació sense trencar l'API pública.

---

### 💻 Bloc B: Reptes Pràctics en Entorn de Desenvolupament

#### Repte 18.1: Auditoria Integral amb SonarLint en l'IDE
1. Instal·leu l'extensió **SonarLint** al vostre IDE (IntelliJ IDEA, Eclipse o VS Code).
2. Analitzeu un projecte Java de pràctiques que continga les classes `Client`, `Comanda` i `Factura`.
3. Identifiqueu i corregiu:
   - 2 advertències de tipus *Code Smell* (ex: noms de variables inadequats, bucles ineficients o blocs `catch` buits).
   - 1 possible vulnerabilitat o error potencial de tipus *Bug* (ex: desbordament numèric o possible `NullPointerException`).
4. Documenteu en un informe breu l'estat abans i després de la correcció.

#### Repte 18.2: Enginyeria Inversa i Generació de Model de Classes
1. Utilitzant una eina CASE o plugin d'IDE (ex: PlantUML, ObjectAid o l'eina integrada d'IntelliJ):
2. Importeu un paquet de codi Java format per 4 classes relacionades (`Persona`, `Professor`, `Assignatura`, `Departament`).
3. Genereu automàticament el diagrama de classes UML corresponent mitjançant enginyeria inversa.
4. Verifiqueu que les relacions d'herència, associació i multiplicitats reflecteixen fidelment el codi font original. Modifiqueu el model afegint una interfície `Avaluador` i sincronitzeu-lo amb el codi mitjançant enginyeria directa.

#### Repte 18.3: Resolució de Conflictes en Git i Flux de Treball amb Branques
1. Creeu un repositori Git local i afegiu un arxiu `Calculadora.java` a la branca `main`.
2. Creeu dues branques simultànies: `branca-A` i `branca-B`.
3. A la `branca-A`, modifiqueu la signatura i implementació del mètode `dividir(int a, int b)` afegint control d'excepcions `ArithmeticException`. Feu commit.
4. A la `branca-B`, modifiqueu el mateix mètode per retornar un `double` amb control de divisió per zero retornant `Double.NaN`. Feu commit.
5. Torneu a `main`, fusioneu la `branca-A` sense problemes.
6. Intenteu fusionar la `branca-B` i observeu el conflicte de fusió (`CONFLICT (content)`). Resoleu el conflicte manualment preservant la millor solució tècnica, completeu el merge commit i verifiqueu l'historial amb `git log --graph --oneline`.

---

### 🔍 Bloc C: Autoavaluació i Rúbrica Tècnica

#### Llista de Verificació d'Assoliment
- [ ] Puc identificar i descriure les característiques i riscos de cadascun dels models de cicle de vida del programari.
- [ ] Domine les tècniques de depuració interactiva amb punts de ruptura, seguiment pas a pas i inspecció de variables.
- [ ] Sé dissenyar diagrames de classes UML utilitzant correctament herència, agregació, composició i multiplicitats.
- [ ] Sóc capaç d'elaborar diagrames de casos d'ús i de seqüència per modelar el comportament del sistema.
- [ ] Sé dissenyar bateries de prova de caixa negra (valors límit) i calcular la complexitat ciclomàtica de McCabe per a caixa blanca.
- [ ] Puc implementar proves unitàries amb JUnit 5 emprant asseveracions i proves parametritzades.
- [ ] Domine el control de versions amb Git, la gestió de branques, la resolució de conflictes i les tècniques bàsiques de refactorització.

#### Rúbrica d'Avaluació de la Unitat
| Criteri d'Avaluació | 🟢 Excel·lent (9-10) | 🟡 Notable (7-8) | 🟠 Aprovat (5-6) | 🔴 No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Cicle de Vida i Depuració** | Domina la teoria dels cicles de vida i utilitza el depurador de l'IDE amb mestria per localitzar errors complexos de memòria i lògica. | Comprèn els models de cicle de vida i utilitza punts de ruptura i pas a pas amb fluïdesa. | Coneix les fases del programari i utilitza el depurador de forma elemental. | No distingeix els cicles de vida ni sap utilitzar el depurador per resoldre errors. |
| **Modelat Estructural i Dinàmic** | Modela arquitectures complexes amb UML sense errors sintàctics en classes, relacions ni diagrames dinàmics. | Modela classes i seqüència amb bona precisió tècnica i pocs errors menors. | Elabora diagrames bàsics de classes i casos d'ús amb algunes confusions de sintaxi. | Incapaç d'interpretar o dissenyar diagrames UML estàndard. |
| **Tècniques de Proves QA** | Calcula la complexitat ciclomàtica de McCabe amb precisió i dissenya suites exhaustives de proves de caixa blanca i negra amb JUnit 5. | Calcula $V(G)$ correctament i dissenya proves unitàries que assoleixen bona cobertura. | Dissenya proves funcionals bàsiques però té dificultats en el càlcul de camins de McCabe. | Desconeix com calcular camins de prova o com utilitzar asseveracions de JUnit. |
| **Refactoring i Control de Versions** | Aplica refactoritzacions netes guiades per proves i gestiona fluxos avançats de Git resolent conflictes amb solvència. | Aplica tècniques de refactoring habituals i gestiona branques de Git amb fluïdesa. | Reconeix code smells bàsics i utilitza comandes bàsiques de Git (`add`, `commit`, `push`). | Modifica codi sense criteris de qualitat i comet errors crítics en la gestió de Git. |
