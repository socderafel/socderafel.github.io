---
layout: default
title: "UD13: Proves Unitàries Automatitzades amb el Framework JUnit 5 — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD13"
---

# UD13: Proves Unitàries Automatitzades amb el Framework JUnit 5

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-arch13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-assert13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-life13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-param13" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed13)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">PROVES UNITÀRIES AUTOMATITZADES AMB JUNIT 5</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura modular Jupiter, asseveracions, cicle de vida (@BeforeEach/@AfterEach) i proves parametritzades</text>

  <!-- Bloc 1: Arquitectura JUnit 5 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arch13)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏛️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arquitectura</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Model Modular</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• JUnit Platform (Llançador)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• JUnit Jupiter (API ES6/Java 8+)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• JUnit Vintage (Compatibilitat)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Patró AAA (Arrange-Act-Assert)</text>
  </g>

  <!-- Bloc 2: Asseveracions -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-assert13)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⚖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Asseveracions</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Comprovació de Resultats</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• assertEquals &amp; assertNotEquals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• assertTrue &amp; assertFalse</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• assertNull &amp; assertNotNull</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• assertAll &amp; assertSame</text>
  </g>

  <!-- Bloc 3: Cicle de Vida -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-life13)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cicle de Vida</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Anotacions Clau</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• @Test &amp; @DisplayName</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• @BeforeEach &amp; @AfterEach</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• @BeforeAll &amp; @AfterAll</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• @Disabled (ignorar tests)</text>
  </g>

  <!-- Bloc 4: Proves Avançades -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-param13)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Avançat &amp; Parametritzat</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Excepcions &amp; Dades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• assertThrows (Excepcions)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• @ParameterizedTest</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• @ValueSource &amp; @CsvSource</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• assertTimeout (Rendiment)</text>
  </g>
</svg>
</div>

Les **proves unitàries automatitzades** constitueixen la xarxa de seguretat més important del desenvolupador de programari. Permeten verificar el funcionament d'una classe o mètode de manera independent, ràpida i repetible. **JUnit 5** és el framework de proves estàndard per al llenguatge Java. En aquesta unitat s'explora la seua arquitectura modular, la sintaxi d'asseveracions, la gestió del cicle de vida d'execució, la comprovació d'excepcions i les potents **proves parametritzades**.

---

## 13.1 Anatomia d'un Test Unitàri: El Patró AAA

Un test unitari ha de ser **clar, aïllat i determinista** (sempre ha de retornar el mateix resultat si el codi no ha canviat). Tota prova s'estructura en tres fases clares (*Arrange, Act, Assert*):

```java
@Test
@DisplayName("El càlcul del descompte del 10% s'aplica correctament")
void testCalcularDescompte() {
    // 1. Arrange (Preparar el context i dades de prova)
    CalculadoraDescomptes calc = new CalculadoraDescomptes();
    double importOriginal = 100.0;

    // 2. Act (Executar l'acció o mètode que volem provar)
    double resultat = calc.aplicarDescompte(importOriginal, 0.10);

    // 3. Assert (Comprovar que el resultat obtingut coincideix amb l'esperat)
    assertEquals(90.0, resultat, 0.001, "El preu final hauria de ser de 90.0 €");
}
```

---

## 13.2 L'Arquitectura Modular de JUnit 5

A diferència de JUnit 4 (que era un únic paquet monolític), JUnit 5 es divideix en tres subprojectes:
$$\text{JUnit 5} = \text{JUnit Platform} + \text{JUnit Jupiter} + \text{JUnit Vintage}$$

1. **JUnit Platform:** La base d'execució que llança els tests sobre la JVM. Serveix de pont perquè IDEs (IntelliJ, Eclipse, VS Code) i eines de construcció (Maven, Gradle) descobreixin i executin les proves.
2. **JUnit Jupiter:** El nou model de programació que conté totes les anotacions i asseveracions modernes (`org.junit.jupiter.api.*`), amb suport natiu per a expressions lambda de Java 8+.
3. **JUnit Vintage:** Proporciona un motor de compatibilitat per a poder executar tests antics escrits en JUnit 3 o JUnit 4 sense necessitat de reescriure'ls.

---

## 13.3 Anotacions del Cicle de Vida d'una Classe de Test

JUnit crea una instància nova de la classe de test per a **cada mètode `@Test`**, garantint que les proves s'executen de forma completament aïllada sense compartir estat en memòria.

| Anotació | Moment d'Execució | Ús Principal |
| :--- | :--- | :--- |
| `@BeforeAll` | **Un sol cop**, abans de tots els tests de la classe. Mètode obligatòriament `static`. | Inicialitzacions costoses (ex. alçar una base de dades en memòria H2). |
| `@BeforeEach` | **Abans de cadascun** dels mètodes `@Test`. | Inicialitzar instàncies d'objectes perquè cada test tinga un estat net. |
| `@Test` | Marca un mètode executable com a cas de prova. | La lògica concreta del test. |
| `@AfterEach` | **Després de cadascun** dels mètodes `@Test`. | Alliberar recursos, tancar fitxers temporals o buidar col·leccions. |
| `@AfterAll` | **Un sol cop**, al final de tots els tests. Mètode `static`. | Tancar servidors o connexions de xarxa globals. |
| `@DisplayName` | Defineix un nom llegible que apareixerà a l'IDE. | Explicar l'objectiu del test en llenguatge natural. |
| `@Disabled` | Desactiva temporalment un test. | Evitar que s'execute un test en construcció sense esborrar-lo. |

---

## 13.4 Catàleg d'Asseveracions (*Assertions*) en JUnit 5

Tots els mètodes d'asseveració se situen a la classe estàtica `org.junit.jupiter.api.Assertions`:

```java
// Comparació d'igualtat per valor (.equals())
assertEquals(esperat, real);
assertNotEquals(esperat, real);

// Avaluació de booleans
assertTrue(llista.isEmpty());
assertFalse(compte.esBloquejat());

// Comprovació de referències nul·les
assertNull(objecte);
assertNotNull(objecte);

// Comparació d'identitat de memòria (==)
assertSame(obj1, obj2);       // Apunten exactament a la mateixa instància en memòria
assertNotSame(obj1, obj2);

// Asseveracions agrupades (s'executen totes encara que alguna falle)
assertAll("Comprovació de dades d'usuari",
    () -> assertEquals("Marc", usuari.getNom()),
    () -> assertEquals("Soler", usuari.getCognom()),
    () -> assertTrue(usuari.getEdat() >= 18)
);
```

---

## 13.5 Comprovació d'Excepcions i Proves Parametritzades

### 1. Validació d'Excepcions amb `assertThrows()`
En Java és fonamental verificar que un mètode rebutja paràmetres invàlids llançant l'excepció prevista:

```java
@Test
void testDivisioPerZeroLlançaExcepcio() {
    Calculadora calc = new Calculadora();

    // Comprova que en executar la lambda es llança una ArithmeticException:
    ArithmeticException ex = assertThrows(ArithmeticException.class, () -> {
        calc.dividir(10, 0);
    });

    // Comprovar opcionalment el missatge intern de l'excepció:
    assertEquals("/ by zero", ex.getMessage());
}
```

### 2. Proves Parametritzades (`@ParameterizedTest`)
Permeten provar múltiples jocs de dades d'entrada i eixida sense duplicar mètodes de test:

```java
@ParameterizedTest(name = "El número {0} és primer: {1}")
@CsvSource({
    "2, true",
    "3, true",
    "4, false",
    "17, true",
    "25, false",
    "29, true"
})
void testVerificarNumerosPrimers(int numero, boolean esperat) {
    CalculadoraMatematica calc = new CalculadoraMatematica();
    assertEquals(esperat, calc.esPrimer(numero));
}
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Traça d'execució del Cicle de Vida de JUnit 5
Considera la següent classe de test:
```java
public class CicleTest {
    @BeforeAll static void initGlobal() { System.out.println("1"); }
    @BeforeEach void init() { System.out.println("2"); }
    @Test void testA() { System.out.println("3"); }
    @Test void testB() { System.out.println("4"); }
    @AfterEach void tearDown() { System.out.println("5"); }
    @AfterAll static void finalGlobal() { System.out.println("6"); }
}
```
1. Quina és la seqüència exacta de números impresos per pantalla si s'executen tots els tests de la classe en l'ordre `testA` i després `testB`?
2. Quantes instàncies físiques de la classe `CicleTest` crea internament JUnit 5 durant tota l'execució?
3. Què passaria si s'elimina la paraula clau `static` de `@BeforeAll` en JUnit 5 per defecte?

#### Exercici 2: Distinció crítica: `assertEquals` vs `assertSame`
Analitza el comportament de les següents asseveracions en Java:

```java
String s1 = new String("DAW");
String s2 = new String("DAW");
String s3 = s1;

assertEquals(s1, s2);  // Asseveració 1: Passa o Falla?
assertSame(s1, s2);    // Asseveració 2: Passa o Falla?
assertSame(s1, s3);    // Asseveració 3: Passa o Falla?
```

1. Indica el resultat de cadascuna de les 3 asseveracions i explica per què `assertEquals` passa mentre `assertSame` falla entre `s1` i `s2`.
2. Quan és imprescindible utilitzar `assertSame` en lloc d'`assertEquals` en proves de patrons de disseny (com per exemple en el patró Singleton)?

#### Exercici 3: Càlcul d'eficiència de proves parametritzades
Es vol provar un validador d'adreces de correu electrònic amb $20\text{ adreces vàlides}$ i $20\text{ adreces invàlides}$ ($40\text{ casos de prova}$ en total).
- Mètode Tradicional: Es redacta un mètode `@Test` diferent per a cada cas. Cada mètode ocupa una mitjana de $8\text{ línies de codi}$.
- Mètode Parametritzat: Es redacta un sol mètode `@ParameterizedTest` amb una font `@CsvSource` on cada cas ocupa $1\text{ línia}$.
1. Quantes línies de codi font de test es requereixen en el Mètode Tradicional?
2. Quantes línies s'utilitzen en el Mètode Parametritzat?
3. Quin és el percentatge de reducció de codi i millora de mantenibilitat?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'una Suite de Proves Completa per a un Compte Bancari
- **Objectiu:** Testejar la classe `CompteEstalvi` verificant ingressos, retirades i protecció d'excepcions.
- **Procediment de taller:**
  1. Crea la classe `CompteEstalvi` amb atribut `saldo` i mètodes `ingressar(double)` i `retirar(double)`.
  2. Implementa la classe de test `CompteEstalviTest` amb un `@BeforeEach` que instancie un compte net amb $100.0\text{ €}$ abans de cada prova.
  3. Escriu els tests:
     - `testIngressarCorrecte()`: Comprova que ingressar $50.0\text{ €}$ deixa el saldo a $150.0\text{ €}$.
     - `testRetirarCorrecte()`: Comprova que retirar $40.0\text{ €}$ deixa el saldo a $60.0\text{ €}$.
     - `testRetirarSaldoInsuficient()`: Comprova amb `assertThrows` que intentar retirar $200.0\text{ €}$ llança una `IllegalStateException` amb el missatge `"Saldo insuficient"`.
     - `testIngressarQuantitatNegativa()`: Comprova que ingressar un valor negatiu llança una `IllegalArgumentException`.

#### Repte 2: Prova Parametritzada amb `@CsvSource` per a un Palíndrom
- **Objectiu:** Validar un mètode `esPalindrom(String text)` que determina si una paraula es llegeix igual d'esquerra a dreta que de dreta a esquerra ignorant majúscules i espais.
- **Procediment de taller:**
  1. Dissenya el mètode de negoci a la classe `CadenaUtils`.
  2. Escriu la prova parametritzada amb almenys 8 casos:
     ```java
     @ParameterizedTest
     @CsvSource({
         "'radar', true",
         "'rotor', true",
         "'java', false",
         "'anilina', true",
         "'hola', false",
         "'A santa atnasa', true",
         "'', true"
     })
     void testPalindroms(String text, boolean esperat) {
         assertEquals(esperat, CadenaUtils.esPalindrom(text));
     }
     ```

#### Repte 3: Execució de Proves des de la Consola amb Maven Surefire
- **Objectiu:** Executar la suite de proves unitàries sense dependre de la interfície de l'IDE.
- **Comandes a executar:**
  ```bash
  # Executar exclusivament les proves unitàries
  mvn test

  # Inspeccionar l'informe d'execució generat
  cat target/surefire-reports/*.txt
  ```

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He estructurat cada prova seguint el patró AAA (Arrange, Act, Assert).
- [ ] He utilitzat la classe `Assertions` de JUnit 5 amb mètodes d'asseveració precisos.
- [ ] He distingit l'àmbit d'execució de `@BeforeEach` enfront de `@BeforeAll`.
- [ ] He utilitzat `assertThrows()` per verificar el llançament d'excepcions esperades.
- [ ] He utilitzat `assertSame()` per a avaluar identitat de memòria en lloc d'equivalència.
- [ ] He implementat proves parametritzades amb `@ParameterizedTest` i `@CsvSource`.
- [ ] He executat les proves tant des de l'IDE com des de la consola amb Maven.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura i Cicle de Vida** | Domina el cicle de vida de JUnit 5 (@BeforeEach, @BeforeAll) aïllant l'estat dels tests amb rigor professional. | Utilitza correctament les anotacions de cicle de vida per preparar i netejar dades de prova. | Utilitza @BeforeEach però oblida que @BeforeAll requereix mètodes estàtics. | Desconeix el cicle de vida i inicialitza tots els objectes dins del propi mètode de test. |
| **Ús d'Asseveracions (Assertions)** | Aplica el catàleg complet d'asseveracions (assertEquals, assertTrue, assertSame, assertAll) amb missatges expressius. | Utilitza assertEquals i assertTrue correctament per comprovar els resultats esperats. | Utilitza asseveracions però inverteix els paràmetres (posa el real en lloc de l'esperat). | Utilitza sentències `if` amb impressions per consola en lloc d'asseveracions de JUnit. |
| **Verificació d'Excepcions** | Valida el llançament d'excepcions amb `assertThrows()` comprovant el tipus i el missatge de l'error mitjançant lambdes. | Comprova que es llança l'excepció correcta utilitzant assertThrows satisfactòriament. | Intenta provar excepcions amb blocs `try/catch` antics de forma feixuga. | No sap provar el comportament excepcional d'un programa. |
| **Proves Parametritzades** | Implementa proves parametritzades avançades amb `@CsvSource` eliminant codi redundant i millorant la cobertura. | Utilitza `@ParameterizedTest` per provar múltiples jocs de dades d'entrada. | Reconeix les proves parametritzades però té dificultats de sintaxi amb les anotacions de dades. | Duplica el mateix mètode de test desenes de vegades amb diferents valors a mà. |
