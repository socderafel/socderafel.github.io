---
layout: default
title: "UD2: Disseny Conceptual. El Model Entitat-Relació (E/R) i E/R Estès — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD2"
prev_url: "../ut01/index.html"
prev_label: "⬅️ UD1: SGBD i Model Relacional"
next_url: "../ut03/index.html"
next_label: "UD3: Disseny Lògic i Normalització ➡️"
---

# UD2: Disseny Conceptual. El Model Entitat-Relació (E/R) i E/R Estès

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-ent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-car" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-eer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-met" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db3)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DISSENY CONCEPTUAL: MODEL ENTITAT-RELACIÓ (E/R) I EXTÈS (EER)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Entitats fortes i febles, atributs compostos/multivalorats, cardinalitats (min, max) i jerarquies d'herència</text>

  <!-- Bloc 1: Entitats i Atributs -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ent)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Entitats &amp; Camps</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Blocs Fonamentals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Entitat forta (autònoma)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Entitat feble (dependent)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Atributs simples/compostos</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Multivalorats &amp; Derivats</text>
  </g>

  <!-- Bloc 2: Relacions i Cardinalitat -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-car)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔗</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Relacions &amp; Rols</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Semàntica d'Enllaç</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Tipus: 1:1, 1:N i M:N</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Cardinalitat (min, max)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Relacions reflexives (unàries)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Relacions ternàries (n-àries)</text>
  </g>

  <!-- Bloc 3: Model E/R Estès -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-eer)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🧬</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model EER Estès</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Jerarquies d'Herència</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Superclasse &amp; Subclasses</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Disjunció: Exclusiva vs Solap</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Completesa: Total vs Parcial</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Herència d'atributs i claus</text>
  </g>

  <!-- Bloc 4: Metodologia de Disseny -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-met)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Metodologia CASE</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Requisits a Diagrama</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Anàlisi del discurs del client</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Detecció d'entitats i verbs</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Paranys: Fan &amp; Chasm Trap</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Validació del model semàntic</text>
  </g>
</svg>
</div>

Fases del cicle de vida del disseny de bases de dades, el model conceptual Entitat-Relació (Peter Chen), tipus d'entitats i atributs, cardinalitats estructurals $(min, max)$, relacions reflexives i d'ordre superior, model Entitat-Relació Estès (EER) amb jerarquies d'especialització i resolució de paranys de connexió.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **3.1** | **Fases metodològiques del disseny de bases de dades** | [**Llegir apartat →**](./ut0301.html) |
| **3.2** | **El Model Entitat-Relació: entitats i tipologia d'atributs** | [**Llegir apartat →**](./ut0302.html) |
| **3.3** | **Relacions, rols i cardinalitats estructurals** | [**Llegir apartat →**](#33-relacions-rols-i-cardinalitats-estructurals) |
| **3.4** | **El Model Entitat-Relació Estès (EER): jerarquies d'herència** | [**Llegir apartat →**](#34-el-model-entitat-relació-estès-eer-jerarquies-dherència) |
| **3.5** | **Paranys semàntics de connexió: Fan Trap i Chasm Trap** | [**Llegir apartat →**](#35-paranys-semàntics-de-connexió-fan-trap-i-chasm-trap) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 2.1 Fases metodològiques del disseny de bases de dades

El disseny professional d'una base de dades no comença mai obrint una consola SQL per escriure sentències `CREATE TABLE`. Per garantir que el sistema siga robust, escalable i sense redundàncies, es segueix un procés estructurat en **tres fases successives d'abstracció**:

```
+-----------------------------------------------------------+
|               1. DISSENY CONCEPTUAL                       |
|   Objectiu: Comprendre el negoci sense pensar en el SGBD  |
|   Eina: Model Entitat-Relació (E/R / EER)                 |
+-----------------------------------------------------------+
                             |
                             v  Regles de Transformació Relacional
+-----------------------------------------------------------+
|               2. DISSENY LÒGIC                            |
|   Objectiu: Adaptar l'esquema al model del SGBD triat     |
|   Eines: Esquema Relacional (Taules, PK, FK) + 3FN/BCNF   |
+-----------------------------------------------------------+
                             |
                             v  Optimització d'Emmagatzematge
+-----------------------------------------------------------+
|               3. DISSENY FÍSIC                            |
|   Objectiu: Rendiment físic en maquinari concret          |
|   Eines: SQL DDL, Índexs B-Tree, Particionament, Discs    |
+-----------------------------------------------------------+
```

1. **Disseny Conceptual:**
   - Analitza els requeriments del món real (entrevistes amb clients, formularis en paper, processos d'empresa) i els plasma en un diagrama gràfic independent de la tecnologia.
2. **Disseny Lògic:**
   - Transforma el diagrama conceptual en estructures admeses pel paradigma del SGBD escollit (en el cas relacional: taules, claus primàries i claus foranes) i aplica la **Teoria de la Normalització** per depurar redundàncies.
3. **Disseny Físic:**
   - Especifica com s'implementarà l'esquema lògic en el maquinari i SGBD específic (PostgreSQL, MySQL, Oracle): tipus de dades concrets, índexs d'accés, estratègies de particionament i volumetria de memòria cau.

---

## 2.2 El Model Entitat-Relació: entitats i tipologia d'atributs

El **Model Entitat-Relació (E/R)** va ser formulat per **Peter Chen** el 1976 i s'ha convertit en l'estàndard gràfic universal per al disseny conceptual de bases de dades.

### 1. Entitats
Una **entitat** és qualsevol objecte o concepte del món real que és distingible de tots els altres i sobre el qual l'organització vol recollir informació:
- **Entitats Físiques / Concretes:** Tenen existència material (ex. `Client`, `Vehicle`, `Producte`).
- **Entitats Abstractes / Conceptuals:** Existeixen com a esdeveniments o conceptes legals/administratius (ex. `Comanda`, `Contracte`, `Vol`, `Matrícula`).
- **Entitat Forta (*Regular Entity*):** Té existència pròpia independent a la base de dades i conté un atribut identificador únic propi (ex. `Client` amb el seu `nif`).
- **Entitat Feble (*Weak Entity*):** La seua existència depèn obligatòriament d'una altra entitat (anomenada *entitat propietària*).
  - *Dependència d'existència:* Si s'esborra l'entitat forta, l'entitat feble deixa de tindre sentit (ex. `LíniaFactura` respecte a `Factura`).
  - *Dependència d'identificació:* No té prou atributs per formar una clau pròpia; necessita la clau de l'entitat forta més un **discriminador parcial** (ex. `número_línia` dins de cada factura).

---

### 2. Atributs
Propietats o característiques que descriuen una entitat:
- **Atribut Simple / Atòmic:** No es pot subdividir en parts més petites amb significat propi (ex. `edat`, `preu`).
- **Atribut Compost:** Es pot descompondre en components més petits (ex. `adreça` es descompon en `carrer`, `número`, `codi_postal` i `ciutat`).
- **Atribut Monovalorat:** Només pot prendre un únic valor per a cada instància d'entitat (ex. `data_naixement`).
- **Atribut Multivalorat:** Pot prendre diversos valors simultàniament per a la mateixa instància (ex. `telèfons` o `idiomes_parlats`). En notació E/R es representa amb una doble línia.
- **Atribut Derivat / Calculat:** El seu valor no s'emmagatzema directament, sinó que es pot deduir a partir d'altres dades existents (ex. `edat` derivada de la `data_naixement` i la data actual).
- **Atribut Identificador / Clau:** Atribut els valors del qual són únics per a cada instància (ex. `codi_producte`).

---

## 2.3 Relacions, rols i cardinalitats estructurals

Una **relació** és una associació semàntica o correspondència lògica entre dues o més entitats:
- **Grau de la relació:** El nombre d'entitats que participen en la relació:
  - *Unària / Reflexiva (grau 1):* Una entitat es relaciona amb ella mateixa (ex. `Empleat` *supervisa a* altres `Empleats`). Requereix especificar **rols** (*cap* i *subordinat*).
  - *Binària (grau 2):* Dues entitats participants (el cas més habitual: `Client` *realitza* `Comanda`).
  - *Ternària (grau 3):* Tres entitats connectades simultàniament (ex. `Metge` recepta `Medicament` a `Pacient`).

---

### Connectivitat i Cardinalitat Estructural $(min, max)$
La semàntica d'una relació binària es defineix mitjançant el parell de valors **$(min, max)$** amb què cada entitat participa en la relació:
- **Cardinalitat mínima ($min$):** Nombre mínim d'instàncies d'una entitat que han de participar en la relació ($0$ indica participació opcional; $1$ indica participació obligatòria).
- **Cardinalitat màxima ($max$):** Nombre màxim d'instàncies que poden participar ($1$ o $N$).

### Tipus de relacions binàries segons la connectivitat màxima:
1. **Un a Un ($1:1$):**
   - Cada instància d'A es relaciona com a màxim amb una instància de B, i viceversa.
   - Exemple: `Ciutadà` $(0,1)$ --- *posseeix* --- $(1,1)$ `Passaport`.
2. **Un a Molts ($1:N$):**
   - Cada instància d'A es pot relacionar amb múltiples instàncies de B, però cada instància de B només es relaciona amb una d'A.
   - Exemple: `Departament` $(1,n)$ --- *té* --- $(1,1)$ `Empleat`.
3. **Molts a Molts ($M:N$):**
   - Una instància d'A es pot relacionar amb múltiples instàncies de B, i cada instància de B es pot relacionar amb múltiples d'A.
   - Exemple: `Estudiant` $(1,n)$ --- *es matricula en* --- $(0,n)$ `Assignatura`.

---

## 2.4 El Model Entitat-Relació Estès (EER): jerarquies d'herència

Quan el modelatge del món real requereix representar conceptes orientats a objectes (generalització i especialització), s'utilitza el **Model Entitat-Relació Estès (EER)**.

### Conceptes de Superclasse i Subclasse
- **Superclasse:** Entitat genèrica que conté atributs comuns a tots els subtipus (ex. `Persona`).
- **Subclasse:** Entitat específica que hereta tots els atributs i relacions de la superclasse, i afegeix atributs específics propis (ex. `Alumne`, `Professor`).

---

### Restriccions d'especialització
Tota jerarquia d'herència es caracteritza per dues dimensions independents:

#### 1. Restricció de Disjunció (Solapament):
- **Disjunta / Exclusiva (`d` - *Disjoint*):** Una instància de la superclasse només pot pertànyer a **un sol subtipus** simultàniament.
  - Exemple: Un `Vehicle` és `Turisme` o és `Camió`, però mai pot ser tots dos alhora.
- **Solapada (`o` - *Overlapping*):** Una instància pot pertànyer a **múltiples subtipus** alhora.
  - Exemple: En una universitat, una `Persona` pot ser simultàniament `Estudiant` i `Investigador`.

#### 2. Restricció de Completesa (Participació):
- **Total (Doble línia):** Tota instància de la superclasse ha de pertànyer **obligatòriament a almenys un subtipus**.
  - Exemple: Tot `CompteBancari` ha de ser o bé `CompteCorrent` o bé `DipòsitEstalvi`.
- **Parcial (Línia simple):** Poden existir instàncies de la superclasse que no pertanyen a cap de les subclasses definides.
  - Exemple: Un `Empleat` pot no ser ni `Enginyer` ni `Comercial` (podria ser administratiu).

---

## 2.5 Paranys semàntics de connexió: Fan Trap i Chasm Trap

Un dels errors més greus en el disseny conceptual és crear estructures de relacions que semblen correctes visualment però que provoquen ambigüitats en navegar entre dades:

### 1. Parany de Ventilador (*Fan Trap*)
- Es produeix quan un model representa una relació entre entitats, però la ruta entre elles és ambigua a causa de l'orientació de dues relacions $1:N$ que divergeixen d'una entitat central.
- Estructura: $B \leftarrow (1:N) \leftarrow A \rightarrow (1:N) \rightarrow C$.
- Problema: És impossible determinar quin registre de $B$ està associat amb un registre concret de $C$ sense informació addicional.
- Solució: Reestructurar la jerarquia perquè la relació flueixi linealment ($A \rightarrow B \rightarrow C$).

### 2. Parany de Buit / Fenedura (*Chasm Trap*)
- Es produeix quan el camí entre dues entitats passa per una relació amb **participació opcional (cardinalitat mínima 0)**.
- Problema: Si les instàncies intermediàries no existeixen, es trenca el camí lògic i no es pot consultar la connexió entre les entitats dels extrems.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi de cardinalitats i participacions $(min, max)$ en un centre mèdic
Analitza la descripció textual del funcionament d'un centre sanitari i dedueix el parell $(min, max)$ per a cadascuna de les entitats participants:
1. *"Un pacient pot tindre registrat cap o diversos ingressos hospitalaris al llarg de la seua vida. Tot ingrés hospitalari correspon exactament a un únic pacient registrat."*
   - Determina: $\text{Pacient} \rightarrow (min, max)$ i $\text{Ingrés} \rightarrow (min, max)$.
2. *"A cada habitació de la planta es poden assignar entre 1 i 2 llits. Cada llit està ubicat obligatòriament en una única habitació concreta."*
   - Determina: $\text{Habitació} \rightarrow (min, max)$ i $\text{Llit} \rightarrow (min, max)$.
3. *"Un metge pot atendre molts pacients, i un pacient pot ser tractat per diversos metges especialistes al llarg del seu tractament. Un metge recent contractat podria no tindre cap pacient assignat encara."*
   - Determina el tipus de connectivitat ($1:1$, $1:N$ o $M:N$) i les cardinalitats estructurals completes.

#### Exercici 2: Matriu de combinatòria de jerarquies EER
Completa la següent matriu classificant els 4 tipus teòrics de jerarquies d'especialització en el model EER i proposa un exemple real de modelatge per a cadascuna:

| Dimensió de Completesa | Dimensió de Disjunció | Notació EER | Comportament Semàntic | Cas d'Ús Recomanat |
| :--- | :--- | :---: | :--- | :--- |
| **Total** | **Disjunta (Exclusiva)** | Total / `d` | Tota instància pertany obligatòriament a exactament 1 subtipus | |
| **Total** | **Solapada** | Total / `o` | Tota instància pertany obligatòriament a 1 o diversos subtipus | |
| **Parcial** | **Disjunta (Exclusiva)** | Parcial / `d` | Una instància pot no pertànyer a cap subtipus o com a màxim a 1 | |
| **Parcial** | **Solapada** | Parcial / `o` | Una instància pot no pertànyer a cap subtipus o a diversos alhora | |

#### Exercici 3: Diagnòstic i correcció d'un parany Fan Trap
Es presenta el següent esquema conceptual per a una divisió d'empreses:
- Entitat `Departament` $(1,n)$ --- *té* --- $(1,1)$ `Divisió`
- Entitat `Departament` $(1,n)$ --- *ocupa* --- $(1,1)$ `Empleat`

1. Explica per què si es vol consultar *"En quina divisió treballa l'empleat Marc?"*, aquest disseny produeix un **Fan Trap**.
2. Dibuixa la reorganització semàntica correcta de les tres entitats per garantir que la relació siga no ambigua.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Modelatge conceptual d'un comerç electrònic amb Mermaid
- **Objectiu:** Elaborar el diagrama Entitat-Relació complet d'una botiga online utilitzant sintaxi estàndard Mermaid.
- **Requisits del sistema:**
  - `Client` (nif [PK], nom, email, adreça [carrer, cp, ciutat]).
  - `Comanda` (id_comanda [PK], data, estat).
  - `Producte` (id_prod [PK], descripció, preu_unitari, estoc).
  - Un client pot realitzar múltiples comandes, però cada comanda pertany a un sol client.
  - Una comanda pot incloure múltiples productes i un producte pot aparèixer en múltiples comandes (amb la quantitat d'unitats demanades en la relació).
- **Procediment de taller:**
  1. Redacta el diagrama de classes/ER en Mermaid:
     ```mermaid
     erDiagram
         CLIENT ||--o{ COMANDA : "realitza"
         COMANDA ||--|{ LINIA_COMANDA : "conté"
         PRODUCTE ||--o{ LINIA_COMANDA : "apareix_en"
         CLIENT {
             string nif PK
             string nom
             string email
         }
         COMANDA {
             int id_comanda PK
             date data
             string estat
         }
         LINIA_COMANDA {
             int quantitat
             float preu_aplicat
         }
         PRODUCTE {
             int id_prod PK
             string nom
             float preu
         }
     ```
  2. Valida la coherència del model comprovant que la quantitat és un atribut de la relació $M:N$ i no pertany a l'entitat `Producte`.

#### Repte 2: Disseny d'un model amb entitat feble per identificació
- **Objectiu:** Modelar una factura legal i les seues línies de detall associades.
- **Procediment de taller:**
  1. Identifica l'entitat forta `Factura` amb atributs `num_factura` (PK), `data_emissio` i `nif_client`.
  2. Identifica l'entitat feble `LiniaFactura` amb els atributs `num_ordre` (discriminador parcial), `concepte`, `quantitat` i `preu_unitari`.
  3. Dibuixa el diagrama marcant la doble caixa a l'entitat feble i el rombe de doble línia a la relació identificadora `es_composta_de`.
  4. Justifica per què dues línies de factures diferents poden tindre el mateix `num_ordre = 1` sense entrar en conflicte de clau primària.

#### Repte 3: Modelatge d'una jerarquia d'herència per a una flota de vehicles
- **Objectiu:** Modelar un sistema de lloguer de transports utilitzant el model EER.
- **Procediment de taller:**
  1. Defineix la superclasse `Vehicle` amb els atributs comuns: `matricula` (PK), `marca`, `model`, `preu_dia`.
  2. Defineix les subclasses:
     - `Turisme`: nombre_places, volum_maleter.
     - `Furgoneta`: capacitat_carrega_kg, pma.
     - `Motocicleta`: cilindrada_cc, tipus_carnet.
  3. Classifica la jerarquia: és Total o Parcial? És Disjunta (`d`) o Solapada (`o`)? Justifica la resposta tenint en compte que un vehicle no pot ser simultàniament turisme i moto.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He distingit les tres fases del disseny: conceptual, lògic i físic.
- [ ] He diferenciat una entitat forta d'una entitat feble (per existència i per identificació).
- [ ] He classificat els atributs en simples, compostos, monovalorats, multivalorats i derivats.
- [ ] He determinat les cardinalitats $(min, max)$ d'una relació a partir d'un text de requisits.
- [ ] He dissenyat relacions reflexives indicant clarament els rols de cada extrem.
- [ ] He definit jerarquies d'herència EER classificant les restriccions de disjunció (`d`/`o`) i completesa (total/parcial).
- [ ] He detectat i resolt paranys semàntics de tipus *Fan Trap* i *Chasm Trap*.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Modelatge E/R i Entitats** | Dissenya esquemes E/R impecables identificant entitats fortes, febles amb discriminadors parcials i atributs multivalorats/compostos. | Identifica entitats i atributs clau del problema i utilitza correctament la notació de claus. | Modela entitats bàsiques però té dificultats per distingir atributs compostos o entitats febles. | Confon atributs amb entitats o és incapaç d'extreure entitats a partir d'un text de requisits. |
| **Relacions i Cardinalitats (min, max)** | Especifica amb precisió matemàtica les cardinalitats $(min, max)$ i identifica relacions unàries reflexives amb rols clars. | Determina correctament la connectivitat $1:1$, $1:N$ i $M:N$ de les relacions binàries. | Assigna cardinalitats bàsiques però comet errors en distingir la cardinalitat mínima de la màxima. | Inverteix el sentit de les cardinalitats o no comprèn la diferència entre $1:N$ i $M:N$. |
| **Jerarquies d'Herència (Model EER)** | Modela jerarquies superclasse/subclasse justificant amb rigor la completesa (Total/Parcial) i la disjunció (`d`/`o`). | Utilitza herència per evitar atributs nuls i comprèn el concepte de superclasse i subclasse. | Modela una herència senzilla però confon una jerarquia disjunta amb una solapada. | Desconeix el model EER i duplica atributs comuns en taules inconnexes. |
| **Detecció de Paranys Semàntics** | Detecta i corregeix eficaçment paranys Fan Trap i Chasm Trap reestructurant el flux de relacions. | Reconeix estructures ambigües en el modelat conceptual i proposa rutes alternatives. | Identifica que hi ha una pèrdua d'informació però necessita ajuda per resoldre el Fan Trap. | No percep les ambigüitats semàntiques i dóna per vàlid un model amb pèrdua de traçabilitat. |
| **Eines CASE i Sintaxi de Diagrama** | Representa diagrames complets amb eines CASE o sintaxi formal Mermaid amb estètica professional i sense redundàncies. | Utilitza programari de diagramació per generar esquemes E/R llegibles i ben estructurats. | Dibuixa diagrames manuals acceptables però amb omissions de notació formal. | Diagrames caòtics, il·legibles o sense respectar cap estàndard de representació. |

