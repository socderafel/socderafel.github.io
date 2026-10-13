---
layout: default
title: "Entorns de Desenvolupament — UD19 Banc d'Exercicis i Supòsits Pràctics de Convocatòria Ordinària"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD19"
---

# UD19 — Banc d'Exercicis i Supòsits Pràctics de Convocatòria Ordinària

<div align="center">
<svg viewBox="0 0 860 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad19" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="cardGrad19" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="shadow19" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="860" height="260" rx="16" fill="url(#bgGrad19)"/>

  <!-- Títol Superior -->
  <text x="430" y="38" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Banc de Supòsits Pràctics Globals: Convocatòria Ordinària</text>
  <text x="430" y="58" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, -apple-system, sans-serif">Avaluació Integradora · Modelat UML · Caixa Blanca & McCabe · Unit Testing JUnit 5 · Git</text>

  <!-- Targeta 1: Supòsit 1 UML -->
  <g transform="translate(25, 75)" filter="url(#shadow19)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad19)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#38bdf8" font-size="14">📐</text>
    <text x="48" y="31" fill="#38bdf8" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Supòsit 1 · UML</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Modelat de classes del domini</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Herència, composició, agregació</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Multiplicitats i visibilitat</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Diagrama de seqüència associat</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#0369a1" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="600">Disseny Estructural</text>
  </g>

  <!-- Targeta 2: Supòsit 2 Caixa Blanca -->
  <g transform="translate(230, 75)" filter="url(#shadow19)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad19)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#4f46e5" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#818cf8" font-size="14">🔍</text>
    <text x="48" y="31" fill="#818cf8" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Supòsit 2 · McCabe</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Graf de flux de control</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Nodes, arestes i decisions</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Càlcul V(G) = E - N + 2</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Identificació de camins bàsics</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#4338ca" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#818cf8" font-size="10" font-weight="600">Cobertura de Branques</text>
  </g>

  <!-- Targeta 3: Supòsit 3 JUnit 5 -->
  <g transform="translate(435, 75)" filter="url(#shadow19)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad19)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#34d399" font-size="14">🧪</text>
    <text x="48" y="31" fill="#34d399" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Supòsit 3 · JUnit</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Implementació de tests unitaris</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Assertions i assertThrows</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Parameterized tests (@CsvSource)</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Verificació automàtica de fallades</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#047857" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#34d399" font-size="10" font-weight="600">Automatització QA</text>
  </g>

  <!-- Targeta 4: Supòsit 4 Git & Refactor -->
  <g transform="translate(640, 75)" filter="url(#shadow19)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad19)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#f59e0b" font-size="14">🌿</text>
    <text x="48" y="31" fill="#f59e0b" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Supòsit 4 · Git</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Detecció de Code Smells</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Extract Method / Extract Class</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Estratègia de branques (feature)</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Merge i resolució de conflictes</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#b45309" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="600">Enginyeria & Neteja</text>
  </g>
</svg>
</div>

---

## 📌 19.1 Estructura i Criteris d'Avaluació de la Convocatòria Ordinària

L'avaluació en la convocatòria ordinària del mòdul d'**Entorns de Desenvolupament** avalua de manera integrada la capacitat de l'alumnat per aplicar mètodes formals de disseny, comprovació i gestió del cicle de vida del programari.

```
+----------------------------------------------------------------------------------------------------+
|                       CRITERIS D'AVALUACIÓ I PONDERACIÓ DE CONVOCATÒRIA ORDINÀRIA                  |
+----------------------------------------------------+------------+----------------------------------+
| BLOC D'AVALUACIÓ                                   | PONDERACIÓ | RESULTATS D'APRENENTATGE         |
+----------------------------------------------------+------------+----------------------------------+
| Bloc 1: Disseny i Modelat Estructural/Dinàmic (UML)|    25%     | RA3, RA4                         |
| Bloc 2: Verificació, Caixa Blanca i Mètrica McCabe |    25%     | RA5 (Criteris a, b, c, d)        |
| Bloc 3: Implementació de Proves amb JUnit 5        |    25%     | RA5 (Criteris e, f, g)           |
| Bloc 4: Refactorització de Codi i Control Git      |    25%     | RA1, RA2, RA6                    |
+----------------------------------------------------+------------+----------------------------------+
```

---

## 📌 19.2 Cas Pràctic 1: Modelat UML d'un Sistema d'Hospitalització

### Enunciat del Problema
Una clínica requereix modelar el seu mòdul d'ingressos hospitalaris:
- Un **Hospital** té un nom, CIF i adreça, i està compost per una o més **Plantes** (composició). Si l'hospital es dona de baixa, les seues plantes desapareixen del sistema.
- Cada **Planta** té un número i conté entre 10 i 50 **Habitacions**.
- Una **Habitació** té un codi i capacitat de llits (1 o 2). En una habitació poden estar ingressats entre 0 i 2 **Pacients**.
- Un **Pacient** té SIP, nom, data de naixement i un historial mèdic.
- Els **Metges** són empleats de l'hospital (herència de la classe abstracta **Empleat**). Un metge pot atendre múltiples pacients ($0..\text{N}$), i cada pacient té assignat obligatòriament exactament un metge responsable ($1$).
- El sistema ha de permetre que un metge done l'alta a un pacient, generant un **InformeAlta**.

```
+-----------------------------------------------------------------------------------------+
|                               DIAGRAMA DE CLASSES UML                                   |
+-----------------------------------------------------------------------------------------+
|  +--------------------+  1       1..*  +--------------------+  1        10..50          |
|  |      Hospital      |*<=============>|       Planta       |*<=============+           |
|  +--------------------+ (Composició)   +--------------------+ (Composició)  |           |
|  | - cif: String      |                | - numero: int      |               |           |
|  | - nom: String      |                +--------------------+               v           |
|  +--------------------+                                            +------------------+ |
|                                                                    |    Habitacio     | |
|                                                                    +------------------+ |
|                                                                    | - codi: String   | |
|                                                                    | - capacitat: int | |
|                                                                    +------------------+ |
|                                                                             | 1         |
|                                                                             | allotja   |
|                                                                             v 0..2      |
|  +--------------------+  1        0..*  +--------------------+     +------------------+ |
|  |       Metge        |---------------->|      Pacient       |<----+     Pacient      | |
|  +--------------------+  atén           +--------------------+     +------------------+ |
|  | - numCol: String   |                 | - sip: String      |                          |
|  | - especialitat: Str|                 | - nom: String      |                          |
|  +--------------------+                 +--------------------+                          |
|           ^                             | + sol·licitarAlta()|                          |
|           | (Herència)                  +--------------------+                          |
|  +--------------------+                                                                 |
|  | Empleat {abstract} |                                                                 |
|  +--------------------+                                                                 |
+-----------------------------------------------------------------------------------------+
```

### Diagrama de Seqüència: Processar Alta de Pacient
```text
Actor: Metge         :InterficieClinica      :ServeiPacient         :Habitacio
     |                       |                      |                   |
     |--- 1. donarAlta(sip)->|                      |                   |
     |                       |--- 2. tramitar(sip)->|                   |
     |                       |                      |--- 3. alliberar()->|
     |                       |                      |    Llit()         |
     |                       |                      |<-- 4. llitLliure -|
     |                       |                      |                   |
     |                       |<-- 5. altaGenerada --|                   |
     |<-- 6. mostrarResum ---|                      |                   |
```

---

## 📌 19.3 Cas Pràctic 2: Caixa Blanca i McCabe d'un Algorisme de Descompte

### Codi Font Sota Anàlisi
```java
public class MotorTarifes {
    public static double calcularPreuFinal(double preuBase, int edat, boolean esSoci, boolean teCodiPromo) {
        double descompte = 0.0; // Node 1

        if (preuBase <= 0) {    // Node 2 (Decisió 1)
            throw new IllegalArgumentException("Preu invàlid"); // Node 3
        }

        if (edat < 18 || edat >= 65) { // Node 4 (Decisió 2: edat<18, Decisió 3: edat>=65)
            descompte += 0.20;         // Node 5
        }

        if (esSoci) {                  // Node 6 (Decisió 4)
            descompte += 0.15;         // Node 7
        } else if (teCodiPromo) {      // Node 8 (Decisió 5)
            descompte += 0.05;         // Node 9
        }

        return preuBase * (1.0 - descompte); // Node 10
    }
}
```

### Anàlisi del Graf de Flux i Complexitat Ciclomàtica
- **Predicats / Decisions Simples ($D$):**
  1. `preuBase <= 0`
  2. `edat < 18`
  3. `edat >= 65`
  4. `esSoci`
  5. `teCodiPromo`
- **Càlcul de McCabe:**
  $$V(G) = D + 1 = 5 + 1 = 6$$
  *Calen com a mínim 6 casos de prova linealment independents per garantir una cobertura del 100% de les branques.*

### Conjunt de Camins Bàsics Independents
1. **Camí 1 (Excepció preu invàlid):** $1 \rightarrow 2 \rightarrow 3$ (Entrades: `preuBase = -5.0`)
2. **Camí 2 (Adult estàndard sense descompte):** $1 \rightarrow 2 \rightarrow 4 \rightarrow 6 \rightarrow 8 \rightarrow 10$ (Entrades: `preuBase=100, edat=30, esSoci=false, promo=false`)
3. **Camí 3 (Jove menor d'edat no soci):** $1 \rightarrow 2 \rightarrow 4 \rightarrow 5 \rightarrow 6 \rightarrow 8 \rightarrow 10$ (Entrades: `preuBase=100, edat=16, esSoci=false, promo=false`)
4. **Camí 4 (Sènior amb codi promocional):** $1 \rightarrow 2 \rightarrow 4 \rightarrow 5 \rightarrow 6 \rightarrow 8 \rightarrow 9 \rightarrow 10$ (Entrades: `preuBase=100, edat=70, esSoci=false, promo=true`)
5. **Camí 5 (Soci adult sense promo):** $1 \rightarrow 2 \rightarrow 4 \rightarrow 6 \rightarrow 7 \rightarrow 10$ (Entrades: `preuBase=100, edat=35, esSoci=true, promo=false`)
6. **Camí 6 (Sènior soci):** $1 \rightarrow 2 \rightarrow 4 \rightarrow 5 \rightarrow 6 \rightarrow 7 \rightarrow 10$ (Entrades: `preuBase=100, edat=68, esSoci=true, promo=true`)

---

## 📌 19.4 Cas Pràctic 3: Suite Completa de Proves amb JUnit 5

```java
package es.ies.proves;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Bateria de Proves de Convocatòria Ordinària: MotorTarifes")
class MotorTarifesTest {

    @Nested
    @DisplayName("Proves de Validació i Excepcions")
    class ValidacioExcepcions {

        @ParameterizedTest(name = "Preu invàlid {0} ha de llançar IllegalArgumentException")
        @ValueSource(doubles = {0.0, -0.01, -100.0})
        @DisplayName("Llançament d'excepció amb preus no positius")
        void hauriaDeLlançarExcepcioAmbPreuZeroONegatiu(double preu) {
            IllegalArgumentException ex = assertThrows(IllegalArgumentException.class, () -> {
                MotorTarifes.calcularPreuFinal(preu, 25, false, false);
            });
            assertEquals("Preu invàlid", ex.getMessage());
        }
    }

    @Nested
    @DisplayName("Proves de Cobertura de Descomptes")
    class CalculDescomptes {

        @Test
        @DisplayName("Usuari adult sense descomptes (preu íntegre)")
        void hauriaDeCobrarPreuCompletSenseDescomptes() {
            double preu = MotorTarifes.calcularPreuFinal(100.0, 25, false, false);
            assertEquals(100.0, preu, 0.001);
        }

        @ParameterizedTest(name = "Preu base={0}, Edat={1}, Soci={2}, Promo={3} -> Esperat={4}")
        @CsvSource({
            "100.0, 16, false, false, 80.0",   // Descompte menor: 20%
            "100.0, 70, false, false, 80.0",   // Descompte sènior: 20%
            "100.0, 30, true,  false, 85.0",   // Descompte soci: 15%
            "100.0, 30, false, true,  95.0",   // Descompte codi promo: 5%
            "100.0, 15, true,  false, 65.0",   // Menor + soci: 20% + 15% = 35% -> 65.0
            "100.0, 70, false, true,  75.0"    // Sènior + promo: 20% + 5% = 25% -> 75.0
        })
        @DisplayName("Verificació parametritzada de combinacions de tarifes")
        void hauriaDeCalcularDescomptesCombinats(double preuBase, int edat, boolean soci, boolean promo, double esperat) {
            double resultat = MotorTarifes.calcularPreuFinal(preuBase, edat, soci, promo);
            assertEquals(esperat, resultat, 0.001);
        }
    }
}
```

---

## 📌 19.5 Cas Pràctic 4: Refactorització i Flux de Branques Git

### Codi Inicial amb Defectes de Qualitat (*Code Smells*)
```java
// Codi original amb Long Method, Primitive Obsession i Magic Numbers
public class GestorEnviaments {
    public double processar(String tipus, double pes, double distancia, boolean urgent) {
        double cost = 0;
        if (tipus.equals("ESTANDARD")) {
            cost = pes * 1.5 + distancia * 0.1;
        } else if (tipus.equals("EXPRESS")) {
            cost = pes * 3.0 + distancia * 0.25;
        }
        if (urgent) {
            cost = cost + 15.0; // Magic Number
        }
        return cost;
    }
}
```

### Codi Refactoritzat amb Polimorfisme i Enums
```java
public enum TipusEnviament {
    ESTANDARD(1.5, 0.10),
    EXPRESS(3.0, 0.25);

    private final double tarifaPes;
    private final double tarifaDistancia;

    TipusEnviament(double tarifaPes, double tarifaDistancia) {
        this.tarifaPes = tarifaPes;
        this.tarifaDistancia = tarifaDistancia;
    }

    public double calcular(double pes, double distancia) {
        return (pes * this.tarifaPes) + (distancia * this.tarifaDistancia);
    }
}

public class GestorEnviamentsRefactoritzat {
    private static final double TAXA_URGENCIA = 15.0;

    public double processar(TipusEnviament tipus, double pes, double distancia, boolean urgent) {
        if (tipus == null || pes <= 0 || distancia <= 0) {
            throw new IllegalArgumentException("Dades d'enviament invàlides");
        }
        double costBase = tipus.calcular(pes, distancia);
        return urgent ? costBase + TAXA_URGENCIA : costBase;
    }
}
```

### Operacions de Git Corresponents
```bash
# 1. Crear branca de refactorització
git checkout -b refactor/gestor-enviaments

# 2. Afegir arxius modificats i nous enums
git add src/main/java/TipusEnviament.java src/main/java/GestorEnviamentsRefactoritzat.java

# 3. Commit atòmic seguint Conventional Commits
git commit -m "refactor(shipping): substituir tipus per enum i eliminar magic numbers"

# 4. Integració amb la branca principal
git checkout main
git merge --no-ff refactor/gestor-enviaments
git branch -d refactor/gestor-enviaments
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Tècnica i Càlculs de Simulacre

#### Exercici 19.1: Càlcul de Qualificació Global Ponderada de Convocatòria Ordinària
La qualificació final ordinària d'Entorns de Desenvolupament es computa a partir dels següents blocs ponderats:

$$\text{Qualificació} = (B_1 \times 0.25) + (B_2 \times 0.25) + (B_3 \times 0.25) + (B_4 \times 0.25)$$

Un estudiant obté les següents qualificacions parcials sobre 10:
- $B_1$ (Disseny i Modelat UML): $7.5$
- $B_2$ (Anàlisi de Caixa Blanca i McCabe): $8.0$
- $B_3$ (Unit Testing amb JUnit 5): $9.2$
- $B_4$ (Refactorització i Git): $6.0$

1. Calculeu la qualificació numèrica ponderada final de l'estudiant.
2. Si el llindar mínim d'aprovat en cadascun dels quatre blocs és de $4.0$ punts per poder fer mitjana, determineu si l'estudiant supera l'avaluació globalment i quina és la seua qualificació final arrodonida.

#### Exercici 19.2: Disseny de Casos de Prova per a Condició MCDC
Considereu la següent decisió lògica extreta d'un sistema de control d'un caixer automàtic:

$$\text{AprovarTransacció} = (A \land B) \lor C$$

On:
- $A$: Saldo disponible suficient ($\text{saldo} \ge \text{import}$).
- $B$: Targeta no bloquejada ($\text{activa} = \text{true}$).
- $C$: Targeta d'emergència autoritzada per l'entitat bancària.

1. Construïu la taula de veritat completa ($2^3 = 8$ combinacions possibles).
2. Seleccioneu el conjunt mínim de combinacions que satisfan el criteri de cobertura **MCDC (Modified Condition/Decision Coverage)**, demostrant per a cadascuna de les 3 variables que canviar el seu valor individual altera de manera independent el resultat global de la decisió.

#### Exercici 19.3: Mesura de Densitat de Defectes en QA
En auditar una aplicació de gestió educativa de $4.500$ línies de codi font efectives (4.5 KLOC), el departament de control de qualitat (QA) detecta les següents incidències durant la fase de proves del sistema:
- Errors crítics (*Blocker*): 3
- Errors greus (*Major*): 8
- Errors lleus (*Minor*): 14

1. Calculeu la densitat total de defectes ($DD$) en defectes per mil línies de codi:
   $$DD = \frac{\text{Nombre Total de Defectes}}{\text{KLOC}}$$
2. Si l'estàndard de qualitat del centre estableix que la densitat no pot superar els $3.5\text{ defectes/KLOC}$ per autoritzar el pas a producció, determineu si el programari és apte per al llançament ordinari.

---

### 💻 Bloc B: Reptes Pràctics en Entorn de Desenvolupament

#### Repte 19.1: Resolució de Supòsit Pràctic A d'Examen (UML & Java)
Desenvolupeu la solució tècnica completa per al sistema d'hospitalització analitzat a l'apartat 19.2:
1. Creeu el projecte Java al vostre IDE amb l'estructura de paquets `es.ies.hospital.model`.
2. Implementeu les classes `Hospital`, `Planta`, `Habitacio`, `Pacient` i la jerarquia `Empleat`/`Metge`.
3. Garantiu la integritat de la relació de composició (les habitacions i plantes s'instancien i destrueixen des de l'objecte contenidor).
4. Afegiu mètodes de consulta amb control d'excepcions per comprovar si una habitació té llits lliures abans d'ingressar un nou pacient.

#### Repte 19.2: Resolució de Supòsit Pràctic B d'Examen (McCabe & JUnit 5)
1. Implementeu la classe `MotorTarifes` al paquet `es.ies.tarifes`.
2. Creeu la classe de test `MotorTarifesTest` amb JUnit 5.
3. Configureu l'eina de cobertura de codi de l'IDE (**JaCoCo** o l'analitzador natiu).
4. Executeu la suite de proves i verifiqueu que s'assoleix el **100% de cobertura de línies (Line Coverage)** i el **100% de cobertura de branques (Branch Coverage)** dels 6 camins bàsics calculats mitjançant McCabe.

#### Repte 19.3: Auditoria i Refactoring amb Git en Temps Cronometrat
1. En un repositori net, inicialitzeu el codi font defectuós de `GestorEnviaments.java`.
2. Establiu un temporitzador de 20 minuts per:
   - Crear una suite de proves prèvia de seguretat (*characterization tests*) que cobrisca tots els càlculs actuals.
   - Refactoritzar el codi aplicant l'enum `TipusEnviament` i constants per a les taxes d'urgència.
   - Executar novament els tests per verificar que no hi ha cap regressió.
   - Realitzar els commits pertinents en una branca `feature/refactor-enviaments` i fusionar-los a `main`.

---

### 🔍 Bloc C: Autoavaluació i Rúbrica Tècnica

#### Llista de Verificació d'Assoliment
- [ ] Puc modelar sistemes orientats a objectes complexos distingint amb precisió associació, agregació i composició.
- [ ] Sóc capaç de construir diagrames de seqüència que representen fidelment la col·laboració entre objectes.
- [ ] Sé calcular la complexitat ciclomàtica de McCabe $V(G)$ desglossant condicions compostes.
- [ ] Puc identificar tots els camins linealment independents d'un algorisme per garantir cobertura total de branques.
- [ ] Implemente proves unitàries i parametritzades amb JUnit 5 emprant `assertThrows` per a excepcions.
- [ ] Sé identificar code smells com ara Long Method i Primitive Obsession i aplicar refactoritzacions segures.
- [ ] Domine el cicle complet de gestió de branques, resolució de conflictes i commit atòmic en Git.

#### Rúbrica d'Avaluació de la Unitat
| Criteri d'Avaluació | 🟢 Excel·lent (9-10) | 🟡 Notable (7-8) | 🟠 Aprovat (5-6) | 🔴 No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Modelat de Classes i Seqüència** | Dissenya models UML impecables amb semàntica exacta en composició, multiplicitats i seqüència temporal. | Modela el domini correctament amb errors mínims en multiplicitats o visibilitat. | Dissenya diagrames bàsics amb mancances en la distinció entre agregació i composició. | No sap representar relacions bàsiques orientades a objectes en UML. |
| **Anàlisi McCabe i Caixa Blanca** | Calcula $V(G)$ amb precisió absoluta i descriu els camins bàsics sense ometre cap bifurcació lògica. | Calcula $V(G)$ i la majoria de camins independents de forma correcta. | Calcula la complexitat amb errors menors en les condicions compostes. | Incapaç de dibuixar el graf de flux de control o calcular la mètrica de McCabe. |
| **Unit Testing amb JUnit 5** | Construeix bateries exhaustives de proves amb tests parametritzats, asseveracions múltiples i verificació de límits. | Implementa proves unitàries correctes amb bona cobertura i control d'excepcions. | Escriu proves unitàries simples però sense parametrització ni control de casos límit. | No sap utilitzar asseveracions de JUnit ni estructurar mètodes de test. |
| **Refactorització i Git** | Aplica patrons de refactoring impecables garantint no-regressió i utilitza Git amb netedat professional. | Refactoritza el codi amb solvència i gestiona branques de Git sense problemes. | Realitza refactoritzacions bàsiques però sense recolzament sòlid en proves prèvies. | Modifica codi introduint regressions o és incapaç d'emprar Git. |
