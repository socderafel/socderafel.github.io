---
layout: default
title: "UD3: Disseny Orientat a Objectes i Diagrames de Classes UML — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD3"
---

# UD3: Disseny Orientat a Objectes i Diagrames de Classes UML

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-class3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-assoc3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-comp3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-inh3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed3)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DISSENY ORIENTAT A OBJECTES I DIAGRAMES DE CLASSES UML</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Notació estàndard UML 2.5, visibilitat d'atributs i mètodes, multiplicitats i relacions estructurals</text>

  <!-- Bloc 1: Notació de Classe -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-class3)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Notació de Classe</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Compartiments &amp; Rols</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Nom, Atributs, Mètodes</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Públic (+), Privat (-)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Protegit (#), Paquet (~)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Tipat &amp; Retorn de funcions</text>
  </g>

  <!-- Bloc 2: Associacions & Multiplicitat -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-assoc3)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔗</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Associacions</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Enllaços &amp; Rang</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Línies d'associació</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Multiplicitats: 1, 0..1, *</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Rols d'extrem d'enllaç</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Navegabilitat unidireccional</text>
  </g>

  <!-- Bloc 3: Agregació & Composició -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-comp3)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">💎</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Relació Part-Tot</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Agregació vs Composició</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Agregació feble (◇ rombe buit)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Cicle de vida independent</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Composició forta (◆ rombe ple)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Destrucció coincident</text>
  </g>

  <!-- Bloc 4: Herència & Interfícies -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-inh3)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🧬</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Herència &amp; Contractes</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Generalització</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Generalització (◁ triangle buit)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Classes abstractes en cursiva</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Realització d'interfícies (···▷)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Dependència funcional (&lt;--)</text>
  </g>
</svg>
</div>

El **Llenguatge Unificat de Modelat (*Unified Modeling Language - UML*)** és l'estàndard internacional de facto (acceptat per l'OMG i ISO) per a especificar, visualitzar, construir i documentar els artefactes d'un sistema de programari orientat a objectes. Dins dels diagrames estructurals, el **Diagrama de Classes** és el pilar fonamental: descriu les classes del sistema, els seus atributs i operacions, i les relacions estàtiques que les connecten.

---

## 3.1 Estructura i representació d'una classe en UML 2.5

Una classe es representa gràficament com un rectangle dividit en tres compartiments horitzontals:

```
┌──────────────────────────────────────────────┐
│                  NomClasse                   │  <-- 1. Nom de la classe (o en cursiva si és abstracta)
├──────────────────────────────────────────────┤
│ - atributPrivat : TipusDada                  │  <-- 2. Atributs amb tipat i visibilitat
│ # atributProtegit : TipusDada = valorDefecte │
├──────────────────────────────────────────────┤
│ + metodePublic(param : Tipus) : TipusRetorn  │  <-- 3. Mètodes / Operacions
│ + metodeSenseRetorn() : void                 │
└──────────────────────────────────────────────┘
```

### Modificadors de visibilitat (Encapsulament)
- **`+` Públic (*Public*):** L'element és visible per qualsevol classe de l'aplicació.
- **`-` Privat (*Private*):** L'element només és accessible des de dins de la mateixa classe. Garanteix l'encapsulament de dades.
- **`#` Protegit (*Protected*):** L'element és accessible des de la pròpia classe i des de totes les seues subclasses derivades.
- **`~` Paquet (*Package / Default*):** Visible només per les classes que comparteixen el mateix paquet de codi.

---

## 3.2 Relacions entre classes en UML

La potència d'UML rau en la seua capacitat de modelar amb precisió com col·laboren i es vinculen les diferents entitats del model.

### 1. Dependència (*Dependency* `····>`)
Una classe utilitza una altra de forma transitòria i puntual (per exemple, rebent-la com a paràmetre en un mètode o com a variable local temporal). Si la classe de destí canvia, la classe origen podria necessitar ajustos:
```
[ ImpressoraFactures ] ····> [ Factura ]
```

### 2. Associació (*Association* `────` o `───>`)
Representa una relació estructural estable i duradora en el temps. S'indica amb una línia contínua, opcionalment amb nom de rol i fletxa de navegabilitat.
- **Multiplicitats habituals:**
  - `1`: Exactament un (obligatori).
  - `0..1`: Zero o un (opcional).
  - `*` o `0..*`: Zero, un o molts (col·lecció).
  - `1..*`: Almenys un (col·lecció obligatòria).

### 3. Agregació (*Aggregation* `◇────` - Rombe buit)
Representa una relació "part-tot" feble (*"has-a"*). La part pertany al tot, però **pot continuar existint de forma independent** si el tot es destrueix:
```
[ Departament ] ◇────── 1..* [ Professor ]
```
> Si el Departament d'Informàtica es tanca, els professors continuen existint i poden reubicar-se en un altre departament.

### 4. Composició (*Composition* `◆────` - Rombe ple)
Representa una relació "part-tot" forta i d'estricta dependència existencial. La part no té sentit sense el tot; **si el contenidor pare es destrueix, totes les seues parts subordinades es destrueixen automàticament**:
```
[ Factura ] ◆────── 1..* [ LiniaFactura ]
```
> Si s'elimina una Factura del sistema, les seues línies de detall associades desapareixen completament de la base de dades.

### 5. Generalització / Herència (*Generalization* `◁────` - Triangle buit)
Representa la relació "és-un" (*"is-a"*). La subclasse hereta automàticament tots els atributs i operacions de la superclasse, i pot afegir nous camps o sobreescriure comportaments (*Polimorfisme*):
```
    [ Vehicle ] (Abstract)
         △
         │
    ┌────┴────┐
    │         │
[ Cotxe ] [ Moto ]
```

### 6. Realització d'Interfície (*Realization* `◁····` - Fletxa discontínua amb triangle)
Indica que una classe implementa tots els mètodes abstractes definits en una interfície de programació:
```
[ ServidorAuth ] ····▷ [ Autenticable ]
```

---

## 3.3 Correspondència directa entre UML i Codi Java

| Concepte UML | Representació en Codi Font Java |
| :--- | :--- |
| **Atribut privat (`- nom : String`)** | `private String nom;` |
| **Mètode públic (`+ getNom() : String`)** | `public String getNom() { return this.nom; }` |
| **Herència (`Cotxe` hereta de `Vehicle`)** | `public class Cotxe extends Vehicle { ... }` |
| **Realització (`Usuari` implementa `Auditable`)** | `public class Usuari implements Auditable { ... }` |
| **Associació / Agregació (`1` a `*`)** | `private List<Professor> professors = new ArrayList<>();` |
| **Composició (`Comanda` conté `Linia`)** | Instanciació controlada dins del constructor de `Comanda`. |

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi de multiplicitats i instanciació d'objectes en memòria
Considera el següent model de classes d'un centre d'estudis:
- Una instància de `CicleFormatiu` conté en agregació (`◇`) entre $1$ i $4$ instàncies de `Curs`.
- Cada `Curs` conté en composició (`◆`) entre $4$ i $8$ instàncies de `Modul`.
- Cada `Modul` té associat exactament $1$ `Professor` titular. Un `Professor` pot impartir entre $1$ i $3$ mòduls diferents.
- Cada `Curs` té matriculats entre $15$ i $30$ `Estudiants`.

1. Si un centre ofereix exactament $3$ cicles formatius de grau superior:
   - Quin és el nombre mínim i màxim absolut d'objectes `Modul` que poden estar instanciats simultàniament a la memòria RAM del servidor?
   - Quin és el nombre mínim de professors necessaris per a cobrir la docència en l'escenari de màxim nombre de mòduls?
2. Si un usuari elimina un `Curs`, quins objectes de la memòria seran destruïts pel recol·lector de fem (*Garbage Collector*) per tractar-se de relacions de composició, i quins sobreviuran per tractar-se d'associacions o agregacions?

#### Exercici 2: Detecció d'incoherències de disseny i violacions de principis OO
Analitza el següent fragment de modelat UML descrit textualment:
- Classe `CompteBancari` té els atributs `+ titular : String`, `+ saldo : double` i `+ pinSecret : int`.
- La classe `CaixerAutomatic` hereta de `CompteBancari` mitjançant generalització (`◁────`).
- Entre `CompteBancari` i `Banc` hi ha una composició `CompteBancari ◆──── Banc` amb multiplicitat `1` a `*` (un compte conté molts bancs).

1. Identifica els **3 errors greus de disseny orientat a objectes** que conté aquest model.
2. Explica per què la visibilitat pública dels atributs viola el principi d'encapsulament.
3. Redissenya la relació entre `CaixerAutomatic`, `CompteBancari` i `Banc` utilitzant les relacions correctes (herència vs associació vs composició).

#### Exercici 3: Càlcul de sobrecàrrega de referències d'objectes en memòria
En un sistema Java de 64 bits amb punters comprimits (*Compressed OOPs*):
- Cada referència d'objecte ocupa $4\text{ bytes}$.
- Un objecte `ArrayList` té una capçalera de $24\text{ bytes}$ més el vector intern de referències.
- Un model té una associació de `1` a `*` entre `Client` i `Comanda`.

1. Si un sistema té $20.000$ clients i cadascun té una mitjana de $8$ comandes:
   - Calcula la quantitat de memòria RAM consumida exclusivament per les estructures de referència (`List<Comanda>`) que connecten els clients amb les comandes.
2. Si la relació es modela com a **bidireccional** (la `Comanda` també té una referència directa al seu `Client`), quanta memòria addicional de referències caldrà afegir en bytes i megabytes?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Disseny d'un model de comerç electrònic en UML
- **Objectiu:** Crear el diagrama de classes d'una botiga en línia aplicant relacions d'herència, composició i associació.
- **Entitats a modelar:**
  1. `Usuari` (abstracta): amb `id`, `nom`, `email`.
  2. `Client` (hereta d'`Usuari`): afig `adreca` i `targetaCredit`.
  3. `Administrador` (hereta d'`Usuari`): afig `nivellAcces`.
  4. `Comanda`: amb `codi`, `data` i `estat`.
  5. `LiniaComanda`: amb `quantitat` i `preuUnitari`.
  6. `Producte`: amb `codi`, `nom`, `preuBase` i `estoc`.
- **Relacions requerides:**
  - `Client` té una associació $1 \rightarrow *$ amb `Comanda`.
  - `Comanda` té una **composició** $1 \rightarrow 1..*$ amb `LiniaComanda`.
  - Cada `LiniaComanda` s'associa a exactament $1$ `Producte`.

#### Repte 2: Generació de codi Java a partir del diagrama UML
- **Objectiu:** Implementar en Java pur el disseny obtingut al Repte 1 respectant estrictament els tipus i encapsulament.
- **Instruccions:**
  1. Escriu la classe abstracta `Usuari.java` amb atributs protegits (`protected`) i mètodes d'accés (*getters* i *setters*).
  2. Implementa la classe `Comanda.java` gestionant la col·lecció interna de línies:
     ```java
     private final List<LiniaComanda> linies = new ArrayList<>();

     public void afegirLinia(Producte producte, int quantitat) {
         LiniaComanda novaLinia = new LiniaComanda(this, producte, quantitat);
         this.linies.add(novaLinia);
     }
     ```
  3. Implementa el mètode `calcularTotal(): double` recorrent la llista de línies.

#### Repte 3: Diagrama de Classes en format Mermaid
- **Objectiu:** Representar el diagrama directament mitjançant codi textual enriquit Mermaid.
- **Exemple de codi:**
  ```mermaid
  classDiagram
      class Usuari {
          <<abstract>>
          #int id
          #String nom
          #String email
          +login() boolean
      }
      class Client {
          -String targetaCredit
          +realitzarComanda() Comanda
      }
      class Comanda {
          -String codi
          -Date data
          +calcularTotal() double
      }
      class LiniaComanda {
          -int quantitat
          -double preuUnitari
      }
      class Producte {
          -String codi
          -double preu
          -int estoc
      }
      Usuari <|-- Client
      Client "1" --> "*" Comanda : realitza
      Comanda "1" *-- "1..*" LiniaComanda : conte
      LiniaComanda "*" --> "1" Producte : referencia
  ```

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He representat classes amb el rectangle estàndard de tres compartiments.
- [ ] He utilitzat els símbols de visibilitat correctes (`+`, `-`, `#`, `~`).
- [ ] He indicat multiplicitats precises en tots els extrems d'associació (`1`, `0..1`, `*`).
- [ ] He distingit l'agregació feble (rombe buit) de la composició forta (rombe ple).
- [ ] He utilitzat el triangle buit per a les relacions d'herència i generalització.
- [ ] He traduït el model UML a codi font Java respectant les propietats de navegabilitat.
- [ ] He comprovat que el model compleix amb el principi d'encapsulament.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Notació de Classes i Encapsulament** | Modela classes complexes amb tipat exacte, operacions completes i una aplicació estricta de l'encapsulament. | Defineix classes correctes amb noms, atributs i visibilitats coherentment estructurades. | Dibuixa classes senzilles però omet tipus de retorn o confon atributs privats amb públics. | No utilitza la divisió en tres compartiments o exposa tots els atributs com a públics. |
| **Associacions i Multiplicitats** | Defineix relacions d'associació precises amb rols, sentit de navegabilitat i multiplicitats rigoroses. | Utilitza multiplicitats estàndard (1, *, 0..1) adequades a les regles de negoci descrites. | Afegeix multiplicitats però confon els extrems origen i destí de la relació. | Omet les multiplicitats o connecta classes sense cap criteri estructural. |
| **Agregació vs Composició** | Distingeix amb precisió la dependència existencial de la composició enfront de la independència de l'agregació. | Aplica rombes plens per a relacions part-tot fortes i rombes buits per a febles correctament. | Utilitza agregació i composició indistintament sense atendre a la destrucció d'objectes. | Desconeix el significat dels rombes i utilitza només línies simples d'associació. |
| **Herència i Traducció a Codi** | Modela jerarquies d'herència elegants i genera codi Java equivalent sense cap pèrdua semàntica. | Empra el triangle buit d'herència i tradueix el model a classes Java funcionals. | Utilitza fletxes incorrectes per a l'herència o té dubtes al codificar col·leccions d'associació. | Confon la fletxa d'herència amb una dependència o genera codi que no reflecteix el diagrama. |
