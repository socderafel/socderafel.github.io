---
layout: default
title: "UD5: Disseny i Realització de Proves de Programari: Caixa Negra, Caixa Blanca (McCabe) i JUnit 5 — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD5"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4: Modelat de Comportament UML"
next_url: "../ut06/index.html"
next_label: "UD6: Refactorització, Git i Eines CASE ➡️"
---

# UD5: Disseny i Realització de Proves de Programari: Caixa Negra, Caixa Blanca (McCabe) i JUnit 5

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-qa5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-levels5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-black5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-limit5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed5)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DISSENY I EXECUCIÓ DE PROVES DE PROGRAMARI (QA &amp; TESTING)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Verificació &amp; Validació · Caixa Negra (Valors Límit) · Caixa Blanca (McCabe) · Unit Testing amb JUnit 5</text>

  <!-- Bloc 1: Fonaments QA -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-qa5)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🎯</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fonaments QA</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Verificació &amp; Validació</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Error, Defecte i Fallada</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Verificació vs Validació</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Nivells: Unitat, Integració, Sistema</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Proves de regressió</text>
  </g>

  <!-- Bloc 2: Caixa Negra -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-levels5)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Caixa Negra</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Proves Funcionals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Classes d'equivalència</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Particions vàlides i invàlides</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Valors límit (BVA)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Taules de decisió</text>
  </g>

  <!-- Bloc 3: Caixa Blanca (McCabe) -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-black5)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔬</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Caixa Blanca</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Graf de Flux (CFG)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Anàlisi estructural intern</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Complexitat ciclomàtica V(G)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Camins bàsics independents</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Cobertura de branques</text>
  </g>

  <!-- Bloc 4: JUnit 5 Automatitzat -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-limit5)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🧪</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">JUnit 5 &amp; QA</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Automatització</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Asseveracions (assertEquals)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Excepcions (assertThrows)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Tests amb @CsvSource</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Mètrica JaCoCo (&gt;80%)</text>
  </g>
</svg>
</div>

---

## 5.1 Fonaments de Qualitat del Programari (QA): Verificació i Validació

El control de qualitat (*Quality Assurance*, QA) i les proves de programari no tenen com a objectiu demostrar que un programa funciona bé, sinó **trobar defectes abans que el programari arribe a producció**. Com va enunciar Edsger Dijkstra: *"Les proves de programari poden demostrar la presència d'errors, però mai la seua absència"*.

### Terminologia Estàndard (IEEE / ISTQB)
- **Error (*Error / Mistake*):** Acció humana equivocada comesa pel desenvolupador (ex: una mala interpretació d'un requisit o un error tipogràfic en una condició).
- **Defecte (*Defect / Bug / Fault*):** Manifestació física de l'error en el codi font o disseny (ex: escriure `if (a > b)` en lloc de `if (a >= b)`).
- **Fallada (*Failure*):** Discrepància observable en temps d'execució entre el comportament real del sistema i el comportament esperat especificat en els requisits.

```
[ Error Humà ] ➔ produeix ➔ [ Defecte en el Codi (Bug) ] ➔ s'executa ➔ [ Fallada del Sistema ]
```

### Verificació vs Validació
- **Verificació:** *"Estem construint el producte correctament?"* Comprova que el programari compleix les especificacions formals de disseny i estàndards d'enginyeria.
- **Validació:** *"Estem construint el producte correcte?"* Assegura que el programari satisfà les necessitats reals i expectatives del client o usuari final.

### Nivells de Prova
1. **Proves Unitàries (*Unit Testing*):** Verifiquen la unitat mínima de codi aïllable (una classe o un mètode individual).
2. **Proves d'Integració (*Integration Testing*):** Comproven la interacció i comunicació entre diferents mòduls o serveis (ex: comunicació entre lògica de negoci i base de dades).
3. **Proves de Sistema (*System Testing*):** Avaluen el sistema complet de principi a fi segons els requisits funcionals i no funcionals (rendiment, seguretat).
4. **Proves d'Acceptació (*Acceptance Testing*):** Executades pel client final per validar el lliurament del producte.

---

## 5.2 Tècniques de Caixa Negra (Black-Box Testing)

Les **proves de caixa negra** analitzen la funcionalitat del programa exclusivament a partir de les seues entrades i eixides, sense examinar l'estructura interna del codi font.

```
Entrades (Inputs) ➔ [ CAIXA NEGRA (Codi Ocult) ] ➔ Eixides Reals vs Eixides Esperades
```

### 1. Particions o Classes d'Equivalència
Consisteix a dividir el domini de dades d'entrada en conjunts disjunts de valors que s'espera que siguen processats de manera idèntica pel sistema:
- **Classes Vàlides:** Valors que el sistema ha d'admetre i processar normalment.
- **Classes Invàlides:** Valors anòmals que el sistema ha de rebutjar generant un missatge d'error o llançant una excepció controlada.

### 2. Anàlisi de Valors Límit (Boundary Value Analysis - BVA)
L'experiència en enginyeria demostra que la majoria d'errors es concentren en les fronteres de les condicions (confusions típiques entre `<` i `<=`). Per a un rang numèric $[A, B]$, es seleccionen casos de prova en:
$$\{A-1, A, A+1\} \quad \text{i} \quad \{B-1, B, B+1\}$$

---

## 5.3 Tècniques de Caixa Blanca (White-Box Testing) i Mètrica de McCabe

Les **proves de caixa blanca** (estructurals) analitzen la lògica interna del codi font utilitzant el **Graf de Flux de Control (CFG - *Control Flow Graph*)**.

### Complexitat Ciclomàtica de McCabe $V(G)$
Proposada per Thomas McCabe en 1976, la **Complexitat Ciclomàtica** determina el nombre de camins linealment independents a través del codi font:

$$V(G) = E - N + 2P$$
*On $E$ és el nombre d'arestes (*edges*), $N$ és el nombre de nodes (*nodes*) i $P$ és el nombre de components connexos (habitualment $P = 1$).*

De manera equivalent per a un mètode amb decisions simples:
$$V(G) = D + 1$$
*On $D$ és el nombre de predicats de decisió simple (`if`, `while`, `for`, `case`, operadors lògics `&&`, `||`).*

```
Grau de Complexitat:
  • 1 - 10 : Mètode simple, baix risc, fàcilment testable.
  • 11 - 20: Mètode moderadament complex, risc moderat.
  • 21 - 50: Mètode molt complex, alt risc (candidat a refactorització).
  • > 50   : Codi inassolible i incontrolable (perill crític).
```

---

## 5.4 Proves Unitàries Automatitzades amb el Framework JUnit 5

**JUnit 5 (Jupiter)** és el framework estàndard de proves unitàries per a l'ecosistema Java.

```java
package es.ies.calculs;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Bateria de Proves de la Classe CalculadoraDescomptes")
class CalculadoraDescomptesTest {

    private CalculadoraDescomptes calc;

    @BeforeEach
    void setUp() {
        calc = new CalculadoraDescomptes();
    }

    @Test
    @DisplayName("Càlcul estàndard sense descomptes")
    void testSenseDescompte() {
        double resultat = calc.calcular(100.0, 30, false);
        assertEquals(100.0, resultat, 0.001, "El preu d'adult no soci ha de ser íntegre");
    }

    @Test
    @DisplayName("Llançament d'excepció quan el preu és negatiu")
    void testPreuNegatiuLlançaExcepcio() {
        assertThrows(IllegalArgumentException.class, () -> {
            calc.calcular(-50.0, 25, false);
        }, "Un preu negatiu ha de llançar IllegalArgumentException");
    }

    @ParameterizedTest(name = "Preu {0}, Edat {1}, Soci {2} -> Esperat {3}")
    @CsvSource({
        "100.0, 15, false, 80.0",   // Jove: 20%
        "100.0, 70, false, 80.0",   // Sènior: 20%
        "100.0, 25, true,  85.0",   // Soci: 15%
        "100.0, 16, true,  65.0"    // Jove + Soci: 35%
    })
    @DisplayName("Proves parametritzades de descomptes combinats")
    void testDescomptesParametritzats(double preu, int edat, boolean soci, double esperat) {
        assertEquals(esperat, calc.calcular(preu, edat, soci), 0.001);
    }
}
```

---

## 5.5 Cobertura de Codi (*Code Coverage*) amb JaCoCo

La cobertura mesura el percentatge de codi font executat durant la bateria de proves:
- **Line / Statement Coverage:** Percentatge de línies de codi executades almenys una vegada.
- **Branch / Decision Coverage:** Percentatge de branques booleanes (`true` i `false`) recorregudes.
- **Llindar recomanat en la indústria:** Mínim **80% de cobertura de branques**.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Tècnica i Càlculs de QA

#### Exercici 5.1: Disseny de Classes d'Equivalència i Valors Límit
Un camp d'edat d'un formulari de préstec bancari admet valors enters compresos entre $18$ i $65$ anys (inclosos). Si l'edat és inferior a $18$ o superior a $65$, el sistema ha de rebutjar la sol·licitud:
1. Identifiqueu la classe d'equivalència vàlida i les dues classes d'equivalència invàlides.
2. Apliqueu l'Anàlisi de Valors Límit (BVA) i determineu el conjunt exacte de 6 valors numèrics que han de provar-se en les fronteres.
3. Elaboreu una taula de casos de prova amb identificador, valor d'entrada, classe representada i resultat esperat (Acceptat / Error).

#### Exercici 5.2: Càlcul de Complexitat Ciclomàtica de McCabe
Considereu el següent mètode Java:
```java
public String avaluarNota(double nota, boolean teFaltes) {
    if (nota < 0 || nota > 10) {          // Decisió 1 i 2
        throw new IllegalArgumentException();
    }
    if (teFaltes) {                       // Decisió 3
        return "SUSPÈS_FALTES";
    }
    if (nota >= 5.0) {                    // Decisió 4
        return "APROVAT";
    }
    return "SUSPÈS";
}
```
1. Descomponeu les condicions compostes i dibuixeu el graf de flux de control (CFG) indicant el nombre de nodes ($N$) i arestes ($E$).
2. Calculeu la complexitat ciclomàtica $V(G)$ aplicant les fórmules $E - N + 2$ i $D + 1$.
3. Indiqueu la llista completa de camins bàsics independents necessaris per cobrir el 100% de les branques.

#### Exercici 5.3: Càlcul de Cobertura de Branques
Un mètode compta amb un graf de control de 8 branques possibles. Una suite de proves parcial només executa 5 branques:
1. Calculeu el percentatge de cobertura de branques:
   $$\text{Cobertura} = \frac{\text{Branques Provades}}{\text{Total Branques}} \times 100$$
2. Expliqueu per què una cobertura del 100% de línies no garanteix el 100% de cobertura de branques en presència de condicions sense bloc `else`.

---

### 💻 Bloc B: Reptes Pràctics en Entorn de Desenvolupament

#### Repte 5.1: Disseny i Documentació d'un Pla de Proves IEEE 829
1. Redacteu un document formal de pla de proves per al mòdul d'autenticació d'una aplicació web.
2. Definiu els identificadors de prova (`TC-01`, `TC-02`, etc.), precondicions, dades d'entrada, passos d'execució i resultats esperats.
3. Cobriu casos de credencials correctes, contrasenya incorrecta, usuari bloquejat i injecció SQL bàsica (`' OR '1'='1`).

#### Repte 5.2: Implementació de Tests amb JUnit 5 i AssertThrows
1. Creeu una classe `ValidadorNIF` que comprove el format i la lletra de control d'un DNI/NIE espanyol.
2. Implementeu la classe de test `ValidadorNIFTest` emprant JUnit 5.
3. Utilitzeu `@ParameterizedTest` i `@ValueSource` per verificar 5 DNIs vàlids coneguts.
4. Utilitzeu `assertThrows(DniInvalidException.class, ...)` per verificar que passar un DNI amb longitud incorrecta o caràcters no alfanumèrics llança l'excepció personalitzada.

#### Repte 5.3: Auditoria de Cobertura de Codi amb JaCoCo
1. Configureu el plugin `jacoco-maven-plugin` al fitxer `pom.xml` del vostre projecte.
2. Executeu la suite de proves mitjançant la comanda:
```bash
mvn clean test jacoco:report
```
3. Obriu l'informe generat a `target/site/jacoco/index.html`.
4. Comproveu quines branques s'han quedat en color roig/groc i afegiu nous casos de test fins a assolir un **100% en Line Coverage i Branch Coverage**.

---

### 🔍 Bloc C: Autoavaluació i Rúbrica Tècnica

#### Llista de Verificació d'Assoliment
- [ ] Puc distingir amb rigor tècnic entre error, defecte (bug) i fallada.
- [ ] Comprèn la diferència entre verificació i validació en el cicle de vida del programari.
- [ ] Sé dissenyar bateries de prova de caixa negra emprant classes d'equivalència i valors límit (BVA).
- [ ] Puc dibuixar el graf de flux de control (CFG) d'un algorisme i calcular la complexitat ciclomàtica de McCabe $V(G)$.
- [ ] Sé identificar els camins linealment independents per assolir cobertura total de branques.
- [ ] Sóc capaç d'escriure proves unitàries automatitzades amb JUnit 5 emprant `assertEquals`, `assertThrows` i `@ParameterizedTest`.
- [ ] Sé interpretar un informe de cobertura de codi de JaCoCo i afegir proves per eliminar zones de codi no cobertes.

#### Rúbrica d'Avaluació de la Unitat
| Criteri d'Avaluació | 🟢 Excel·lent (9-10) | 🟡 Notable (7-8) | 🟠 Aprovat (5-6) | 🔴 No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Fonaments QA i Caixa Negra** | Dissenya particions i anàlisi de valors límit impecables cobrint totes les condicions de frontera i taules de decisió. | Aplica particions d'equivalència i valors límit amb pocs errors menors. | Reconeix les classes vàlides i invàlides però omet punts de frontera clau. | Desconeix com dissenyar proves de caixa negra o les confon amb proves estructurals. |
| **Caixa Blanca i McCabe** | Dibuixa el graf de flux sense errors, calcula $V(G)$ exactament i deriva tots els camins independents. | Dibuixa el graf de flux i calcula $V(G)$ correctament amb errors mínims en condicions compostes. | Calcula la complexitat amb dificultat i omet alguns camins bàsics. | Incapaç de dibuixar el graf de control o calcular la mètrica de McCabe. |
| **JUnit 5 Automatitzat** | Implementa suites completes amb tests parametritzats, asseveracions múltiples i control d'excepcions. | Escriu proves unitàries correctes amb bona estructura i asseveracions adients. | Escriu proves simples però sense parametrització ni control de casos d'error. | No sap utilitzar asseveracions de JUnit ni estructurar mètodes de test. |
| **Cobertura de Codi (JaCoCo)** | Audita la cobertura amb JaCoCo i assoleix el 100% de branques resolent camins inassolibles. | Assoleix més del 80% de cobertura de branques interpretant l'informe correctament. | Obté entre el 60% i el 80% de cobertura sense analitzar les branques no cobertes. | Desconeix les eines de cobertura o obté resultats inferiors al 60%. |
