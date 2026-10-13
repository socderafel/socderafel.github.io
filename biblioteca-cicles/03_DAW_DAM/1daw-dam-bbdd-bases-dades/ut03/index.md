---
layout: default
title: "UD3: Disseny Lògic: Pas al Model Relacional i Teoria de la Normalització — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD4"
next_url: "../ut04/index.html"
next_label: "UD4: Disseny FÃ­sic i DDL âž¡ï¸"
---

# UD3: Disseny Lògic: Pas al Model Relacional i Teoria de la Normalització

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-pas" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-her" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-dep" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-fn" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db4)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DISSENY LÒGIC: PAS A TAULES I TEORIA DE LA NORMALITZACIÓ</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Transformació d'estructures E/R i EER, dependències funcionals i formes normals (1FN, 2FN, 3FN i BCNF)</text>

  <!-- Bloc 1: Regles de Transformació -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-pas)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Pas a Taules</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Regles Relacionals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Entitat forta -&gt; Taula amb PK</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Relació 1:N -&gt; Propagació FK</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Relació M:N -&gt; Taula intermèdia</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Relació 1:1 -&gt; Fusió o FK única</text>
  </g>

  <!-- Bloc 2: Transformació EER -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-her)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🧬</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Casos Especials</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Febles &amp; Jerarquies</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Entitat feble -&gt; PK composta</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Herència: 1 taula x classe</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Herència: Taula única + tipus</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Herència: Només subclasses</text>
  </g>

  <!-- Bloc 3: Dependències Funcionals -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dep)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Dependències</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Semàntica Formal</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Dependència funcional X -&gt; Y</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Dependència plena vs parcial</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Dependència transitiva</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Axiomes d'Armstrong</text>
  </g>

  <!-- Bloc 4: Formes Normals -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fn)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🏆</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Normalització</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">1FN, 2FN, 3FN &amp; BCNF</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1FN: Atributs atòmics</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2FN: Sense dependència parcial</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 3FN: Sense transitivitat</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• BCNF: Determinants = Clau</text>
  </g>
</svg>
</div>

Regles estàndard de transformació del model conceptual Entitat-Relació al model lògic relacional, gestió d'entitats febles i jerarquies d'herència, teoria formal de dependències funcionals, objectius de la normalització i procediment pas a pas per assolir la 1FN, 2FN, 3FN i la Forma Normal de Boyce-Codd (BCNF).

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **4.1** | **Regles de transformació d'entitats i relacions binàries** | [**Llegir apartat →**](./ut0401.html) |
| **4.2** | **Transformació d'entitats febles, atributs complexos i jerarquies** | [**Llegir apartat →**](./ut0402.html) |
| **4.3** | **Teoria de les dependències funcionals i axiomes d'Armstrong** | [**Llegir apartat →**](#43-teoria-de-les-dependències-funcionals-i-axiomes-darmstrong) |
| **4.4** | **Les Formes Normals: de la 1FN a la BCNF** | [**Llegir apartat →**](#44-les-formes-normals-de-la-1fn-a-la-bcnf) |
| **4.5** | **Descomposició sense pèrdua d'informació i preservació de dependències** | [**Llegir apartat →**](#45-descomposició-sense-pèrdua-dinformació-i-preservació-de-dependències) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 4.1 Regles de transformació d'entitats i relacions binàries

El **pas a taules** és el procés algorítmic que tradueix les construccions gràfiques del diagrama conceptual E/R a l'esquema lògic relacional format exclusivament per taules, columnes, claus primàries (PK) i claus foranes (FK).

### 1. Transformació d'Entitats Fortes
- Cada entitat forta $E$ es converteix directament en una **taula relacional**.
- Els atributs simples de l'entitat esdevenen les columnes de la taula.
- L'atribut identificador principal de l'entitat esdevé la **Clau Primària (PK)** de la taula.

---

### 2. Transformació de Relacions Binàries segons la Cardinalitat

#### Cas A: Relació Un a Molts ($1:N$)
- **Regla de propagació de clau:** La Clau Primària de la taula del costat $1$ es propaga cap a la taula del costat $N$ en forma de **Clau Forana (FK)**.
- Els atributs propis de la relació (si en té) també es transfereixen a la taula del costat $N$.
- *Exemple:* `Departament` $(1,n)$ --- *té* --- $(1,1)$ `Empleat`.
  - $\text{Departament}(\underline{id\_dept}, nom\_dept)$
  - $\text{Empleat}(\underline{id\_emp}, nom, sou, \underline{id\_dept}^{\text{FK}})$
  - Si la participació del costat $N$ és obligatòria (mínim 1), la columna `id_dept` a `Empleat` serà `NOT NULL`.

#### Cas B: Relació Molts a Molts ($M:N$)
- **Regla de la taula intermèdia:** Es crea obligatòriament una **nova taula relacional d'enllaç**.
- La Clau Primària d'aquesta nova taula és una **clau composta** formada per les claus primàries d'ambdues entitats participants:
  $$PK = \{FK_1, FK_2\}$$
- Els atributs propis de la relació s'incorporen com a columnes d'aquesta taula intermèdia.
- *Exemple:* `Estudiant` $(1,n)$ --- *es matricula* --- $(0,n)$ `Assignatura` amb atribut propi `data_matricula`.
  - $\text{Estudiant}(\underline{nia}, nom, email)$
  - $\text{Assignatura}(\underline{codi\_asig}, nom\_asig, credits)$
  - $\text{Matricules}(\underline{nia}^{\text{FK}}, \underline{codi\_asig}^{\text{FK}}, data\_matricula)$

#### Cas C: Relació Un a Un ($1:1$)
Depèn de la participació mínima de cadascuna de les entitats:
1. **Doble participació obligatòria ($(1,1)$ a $(1,1)$):**
   - Es recomana **fusionar ambdues entitats en una única taula**, ja que cada registre d'una sempre té el seu equivalent a l'altra.
2. **Una participació obligatòria i una opcional ($(1,1)$ a $(0,1)$):**
   - Es propaga la clau primària de l'entitat amb participació opcional $(0,1)$ cap a la taula amb participació obligatòria $(1,1)$ en forma de FK amb restricció `UNIQUE NOT NULL`.
3. **Doble participació opcional ($(0,1)$ a $(0,1)$):**
   - Es pot propagar la clau en qualsevol dels dos sentits (amb restricció `UNIQUE`), o crear una taula intermèdia independent per evitar columnes amb abundants valors nuls.

---

## 4.2 Transformació d'entitats febles, atributs complexos i jerarquies

### 1. Entitats Febles per Identificació
- L'entitat feble es transforma en una taula pròpia.
- La seua **Clau Primària serà necessàriament composta**: estarà formada per la Clau Primària de l'entitat forta propietària (que entra com a FK) més el **discriminador parcial** de l'entitat feble.
- *Exemple:* `Factura` $\rightarrow$ `LiniaFactura` (amb discriminador `num_linia`):
  - $\text{Factures}(\underline{num\_factura}, data, nif\_client)$
  - $\text{LiniesFactura}(\underline{num\_factura}^{\text{FK}}, \underline{num\_linia}, concepte, preu, quantitat)$

---

### 2. Atributs Compostos i Multivalorats
- **Atributs Compostos:** No es crea cap camp compost. Es despleguen directament els seus subatributs atòmics com a columnes independents de la taula (ex. `carrer`, `numero`, `codi_postal`, `ciutat`).
- **Atributs Multivalorats:** Com que el model relacional exigeix valors atòmics (1FN), **es crea una taula independent** amb la clau primària de l'entitat (com a FK) i el valor de l'atribut. La PK d'aquesta nova taula serà composta per ambdós camps.
  - *Exemple:* Un empleat amb múltiples telèfons:
    - $\text{TelefonsEmpleats}(\underline{id\_emp}^{\text{FK}}, \underline{numero\_telefon})$

---

### 3. Transformació de Jerarquies d'Herència (Model EER)
Davant d'una superclasse `Persona` amb subclasses `Alumne` i `Professor`, existeixen tres estratègies de traducció física:

| Estratègia | Estructura de Taules Resultant | Avantatges | Inconvenients | Quan s'aplica |
| :--- | :--- | :--- | :--- | :--- |
| **Opció A: Taula per classe (3 taules)** | `Persones`, `Alumnes` (amb PK/FK `id_persona`), `Professors` (amb PK/FK `id_persona`) | Disseny 100% normalitzat, sense valors nuls innecessaris. | Consultes globals requereixen operacions `JOIN`. | Jerarquies solapades o amb molts atributs específics. |
| **Opció B: Taula única (1 taula)** | `Persones(..., tipus_persona, nota_mitjana, sou)` | Màxima velocitat d'accés (sense JOINs). | Molts camps amb valors `NULL` per a atributs que no pertoquen. | Jerarquies amb pocs atributs específics i molt accés concurrent. |
| **Opció C: Només subclasses (2 taules)** | `Alumnes(...)` i `Professors(...)` duplicant els camps comuns. | No requereix taula pare ni JOINs per a cada subtipus. | Consultar tota la població requereix `UNION`; duplica definició. | **Només si la jerarquia és Total i Disjunta (`d`).** |

---

## 4.3 Teoria de les dependències funcionals i axiomes d'Armstrong

La **Teoria de la Normalització** té com a objectiu mesurar la qualitat d'un esquema relacional i corregir-ne els defectes mitjançant la descomposició progressiva en relacions més petites sense pèrdua d'informació.

### Què és una Dependència Funcional (DF)?
En una relació $R$, es diu que un conjunt d'atributs $Y$ **depèn funcionalment** d'un conjunt d'atributs $X$ (notat com $X \to Y$) si i només si cada valor de $X$ té associat un únic valor de $Y$.
- És a dir: si dues tuples coincideixen en els valors de $X$, obligatòriament han de coincidir en els valors de $Y$:
  $$\forall t_1, t_2 \in R, \quad t_1[X] = t_2[X] \implies t_1[Y] = t_2[Y]$$
- Al costat esquerre ($X$) se l'anomena **determinant**.

---

### Tipus de dependències funcionals
1. **Dependència Funcional Plena:**
   - $Y$ depèn plenament de $X$ si depèn de $X$ i no depèn de cap subconjunt propi de $X$.
   - Exemple: a `LiniaComanda(id_comanda, codi_prod, quantitat)`, la `quantitat` depèn de `{id_comanda, codi_prod}` conjuntament.
2. **Dependència Funcional Parcial:**
   - $Y$ depèn d'una part de la clau primària composta.
   - Exemple: si a la mateixa taula guardem el `nom_producte`, aquest atribut depèn només de `codi_prod`, ignorant `id_comanda`.
3. **Dependència Funcional Transitiva:**
   - Si $X \to Y$ i $Y \to Z$ (on $Y$ no determina $X$), llavors $Z$ depèn transitivament de $X$ a través de $Y$.
   - Exemple: `id_emp -> codi_dept` i `codi_dept -> nom_dept`. Llavors `id_emp -> nom_dept` és transitiva.

---

### Els Axiomes d'Armstrong
Regles d'inferència matemàtica que permeten deduir totes les dependències funcionals vàlides d'un esquema a partir d'un conjunt inicial:
1. **Reflexivitat:** Si $Y \subseteq X$, llavors $X \to Y$ (dependència trivial).
2. **Augmentació:** Si $X \to Y$, llavors $XZ \to YZ$ per a qualsevol conjunt $Z$.
3. **Transitivitat:** Si $X \to Y$ i $Y \to Z$, llavors $X \to Z$.
- Regles derivades útils:
  - **Unió:** Si $X \to Y$ i $X \to Z$, llavors $X \to YZ$.
  - **Descomposició:** Si $X \to YZ$, llavors $X \to Y$ i $X \to Z$.

---

## 4.4 Les Formes Normals: de la 1FN a la BCNF

Un esquema relacional mal dissenyat pateix de tres tipus greus d'anomalies:
- **Anomalia d'Inserció:** No es pot registrar una dada sense registrar obligatòriament una altra dada no relacionada.
- **Anomalia de Modificació:** Actualitzar una dada requereix modificar múltiples files; si una falla, el sistema queda inconsistent.
- **Anomalia d'Esborrat:** Esborrar una dada provoca la pèrdua involuntària d'una altra dada valuosa.

Per solucionar-ho, apliquem les **Formes Normals (FN)**:

```
+-----------------------------------------------------------+
|              BCNF (Boyce-Codd Normal Form)                |
|       Tot determinant d'una DF és una Superclau           |
+-----------------------------------------------------------+
                             ^
+-----------------------------------------------------------+
|               3FN (Tercera Forma Normal)                  |
|     Està en 2FN i NO hi ha dependències transitives       |
+-----------------------------------------------------------+
                             ^
+-----------------------------------------------------------+
|               2FN (Segona Forma Normal)                   |
|     Està en 1FN i NO hi ha dependències parcials          |
+-----------------------------------------------------------+
                             ^
+-----------------------------------------------------------+
|               1FN (Primera Forma Normal)                  |
|     Atributs atòmics, sense llistes ni grups repetitius   |
+-----------------------------------------------------------+
```

### 1. Primera Forma Normal (1FN)
Una relació està en **1FN** si:
- Tots els seus atributs contenen **valors atòmics** (indivisibles).
- No existeixen grups repetitius ni llistes de valors dins d'una mateixa cel·la.
- La relació disposa d'una clau primària ben definida.

### 2. Segona Forma Normal (2FN)
Una relació està en **2FN** si:
- Està en 1FN.
- **Tots els atributs no primaris depenen de manera funcional PLENA de la clau primària**.
- És a dir: cap atribut no primari pot dependre d'una part de la clau primària (s'eliminen les dependències parcials).
- *Nota:* Si la clau primària està formada per un sol atribut simple, la taula que ja està en 1FN **està automàticament en 2FN**.

### 3. Tercera Forma Normal (3FN)
Una relació està en **3FN** si:
- Està en 2FN.
- **Cap atribut no primari depèn transitivament de la clau primària**.
- És a dir: no poden existir dependències entre atributs que no formen part de la clau primària ($X \to Y \to Z$).
- *Resolució:* S'extreuen els atributs que depenen del camp intermedi a una nova taula independent on aquest camp intermedi serà la seua Clau Primària.

### 4. Forma Normal de Boyce-Codd (BCNF / FNBC)
Proposada el 1974 per Raymond F. Boyce i Edgar F. Codd com una versió més estricta de la 3FN per a relacions amb múltiples claus candidates superposades:
- Una relació està en **BCNF** si per a tota dependència funcional no trivial $X \to Y$, **el determinant $X$ és obligatòriament una Superclau**.

---

## 4.5 Descomposició sense pèrdua d'informació i preservació de dependències

Quan una taula es descompon en taules més petites per assolir una forma normal superior, la descomposició ha de complir dues propietats teòriques fonamentals:

1. **Descomposició sense pèrdua d'informació (*Lossless-Join Decomposition*):**
   - Garanteix que si es recombina les noves taules mitjançant una operació de combinació natural ($\bowtie$), el resultat és exactament idèntic a la taula original, sense que apareguen "tuples espúries" (files inventades falses).
   - *Condició suficient:* L'atribut comú entre les dues noves taules ha de ser clau primària en almenys una d'elles:
     $$(R_1 \cap R_2) \to R_1 \quad \text{o bé} \quad (R_1 \cap R_2) \to R_2$$
2. **Preservació de Dependències:**
   - Totes les dependències funcionals originals s'han de poder comprovar directament consultant les noves taules individuals, sense requerir un `JOIN` previ entre elles.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Pas a taules d'un esquema conceptual de formació
Es defineix el següent model E/R per a un centre de formació tecnològica:
- `Professor` $(\underline{id\_prof}, nom, especialitat)$
- `Curs` $(\underline{codi\_curs}, titol, hores)$
- `Aula` $(\underline{num\_aula}, capacitat, pis)$
- Relació $1:N$: `Professor` $(1,1)$ --- *imparteix* --- $(0,n)$ `Curs`
- Relació $M:N$: `Curs` $(1,n)$ --- *s'assigna_a* --- $(0,n)$ `Aula`, amb l'atribut propi `horari` (cadena que indica dia i hora).
- L'entitat `Professor` té un atribut multivalorat: `titulacions`.

1. Aplica les regles del model relacional per obtenir l'esquema lògic complet de taules.
2. Identifica per a cada taula resultant: nom de la taula, columnes, Clau Primària ($\underline{\text{PK}}$) i Claus Foranes ($\text{FK}$) indicant a quina taula apunten.
3. Especifica quina restricció (`NOT NULL`, `UNIQUE`) correspon a cadascuna de les columnes foranes.

#### Exercici 2: Normalització pas a pas des de 0FN fins a 3FN
Es disposa d'un full de càlcul desnormalitzat utilitzat en una clínica veterinària:
$$\text{AtencionsClinica}(\underline{id\_mascota}, nom\_mascota, especie, id\_propietari, nom\_propietari, tel\_propietari, codi\_visita, data\_visita, diagnostic, preu\_visita)$$
Dependències funcionals detectades:
- $\{id\_mascota, codi\_visita\} \to data\_visita, diagnostic, preu\_visita$
- $id\_mascota \to nom\_mascota, especie, id\_propietari$
- $id\_propietari \to nom\_propietari, tel\_propietari$

1. **Primera Forma Normal (1FN):**
   - Identifica la clau primària composta de la taula desnormalitzada.
2. **Segona Forma Normal (2FN):**
   - Identifica quines dependències funcionals són **parcials** (depenen només de $id\_mascota$).
   - Descompon la taula en dues taules per eliminar les dependències parcials i assolir la 2FN.
3. **Tercera Forma Normal (3FN):**
   - Identifica quina dependència funcional és **transitiva** (a través de $id\_propietari$).
   - Descompon l'esquema fins que totes les taules estiguen en 3FN documentant les noves PKs i FKs.

#### Exercici 3: Avaluació de la Forma Normal de Boyce-Codd (BCNF)
Es considera la relació de reserves de pistes de pàdel:
$$\text{ReservesPista}(\underline{num\_pista, data\_hora}, dni\_soci, modalitat)$$
Amb les dependències funcionals:
- $\{num\_pista, data\_hora\} \to dni\_soci, modalitat$
- $dni\_soci, data\_hora \to num\_pista$ *(un soci només pot reservar una pista a la mateixa hora)*

1. Troba totes les claus candidates de la relació.
2. Està la relació en 3FN? Justifica la resposta.
3. Està la relació en BCNF? Raona la resposta analitzant si tots els determinants són superclaus.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Implementació SQL DDL del pas d'una relació M:N
- **Objectiu:** Escriure l'esquema DDL executable d'una relació molts a molts garantint integritat referencial i clau primària composta.
- **Procediment de taller:**
  1. Obre el client SQL i crea les taules mestres `Clients` i `Productes`:
     ```sql
     CREATE TABLE Clients (
         id_client SERIAL PRIMARY KEY,
         nom VARCHAR(100) NOT NULL,
         email VARCHAR(120) UNIQUE NOT NULL
     );

     CREATE TABLE Productes (
         codi_prod VARCHAR(10) PRIMARY KEY,
         descripcio VARCHAR(200) NOT NULL,
         preu_unitari NUMERIC(8,2) CHECK (preu_unitari > 0)
     );
     ```
  2. Crea la taula d'enllaç resultant de la relació M:N:
     ```sql
     CREATE TABLE ComandesProductes (
         id_client INT NOT NULL,
         codi_prod VARCHAR(10) NOT NULL,
         quantitat INT NOT NULL CHECK (quantitat > 0),
         data_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         CONSTRAINT pk_comandes_prod PRIMARY KEY (id_client, codi_prod, data_compra),
         CONSTRAINT fk_comanda_client FOREIGN KEY (id_client) REFERENCES Clients(id_client) ON DELETE CASCADE,
         CONSTRAINT fk_comanda_prod FOREIGN KEY (codi_prod) REFERENCES Productes(codi_prod) ON DELETE RESTRICT
     );
     ```
  3. Insereix registres i verifica que no es permet una quantitat negativa ni la referència a un client inexistent.

#### Repte 2: Implementació i anàlisi de rendiment de jerarquies d'herència
- **Objectiu:** Comparar la solució de "Taula per classe" vs "Taula única" en SQL.
- **Procediment de taller:**
  1. **Modelatge Taula per Classe:**
     ```sql
     CREATE TABLE Usuaris (
         id_user INT PRIMARY KEY,
         email VARCHAR(100) NOT NULL
     );
     CREATE TABLE ClientsVip (
         id_user INT PRIMARY KEY,
         descompte NUMERIC(4,2),
         FOREIGN KEY (id_user) REFERENCES Usuaris(id_user) ON DELETE CASCADE
     );
     ```
  2. Escriu la consulta `SELECT` amb `INNER JOIN` necessària per obtenir l'email i descompte dels clients VIP.
  3. Compara conceptualment aquesta consulta amb una taula única que tinga el camp `email`, `descompte` i `tipus_user`, analitzant el cost computacional de fer o no fer la combinació.

#### Repte 3: Demostració empírica d'anomalies en taules no normalitzades
- **Objectiu:** Reproduir una anomalia de modificació i una anomalia d'esborrat en una taula en 1FN.
- **Procediment de taller:**
  1. Crea una taula no normalitzada `CursosDesnormalitzats`:
     ```sql
     CREATE TABLE CursosDesnormalitzats (
         codi_curs VARCHAR(10),
         titol_curs VARCHAR(100),
         id_prof INT,
         nom_prof VARCHAR(100),
         PRIMARY KEY (codi_curs, id_prof)
     );
     INSERT INTO CursosDesnormalitzats VALUES ('BD-01', 'Bases de Dades', 10, 'Carles Puig');
     INSERT INTO CursosDesnormalitzats VALUES ('PRG-01', 'Programació Java', 10, 'Carles Puig');
     ```
  2. **Anomalia de modificació:** El professor Carles es canvia el cognom a 'Puigdomènech'. Si només actualitzes la primera fila (`UPDATE ... WHERE codi_curs = 'BD-01'`), comprova l'estat d'inconsistència generat.
  3. **Anomalia d'esborrat:** Si el curs 'BD-01' es cancel·la i s'esborra la fila d'un professor que només impartia eixe curs, comprova que les seues dades personals es perden per complet de la base de dades.
  4. Redacta l'esquema en 3FN que resol definitivament ambdues fallades.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He transformat entitats fortes en taules amb clau primària.
- [ ] He aplicat la propagació de clau forana en relacions $1:N$.
- [ ] He creat taules intermèdies amb clau primària composta per a relacions $M:N$.
- [ ] He modelat entitats febles incorporant la clau de l'entitat forta a la clau primària composta.
- [ ] He comparat les tres opcions de transformació de jerarquies d'herència EER.
- [ ] He definit formalment el concepte de dependència funcional ($X \to Y$).
- [ ] He normalitzat una taula pas a pas verificant els requisits de la 1FN, 2FN, 3FN i BCNF.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Pas del Model E/R a Taules** | Transforma esquemes conceptuals complexos (1:1, 1:N, M:N, febles, reflexives) sense cap pèrdua d'integritat semàntica. | Aplica les regles generals de transformació identificant PKs i FKs correctament en relacions 1:N i M:N. | Realitza el pas a taules bàsic però oblida crear la taula d'enllaç en relacions M:N. | Incapaç de traduir un diagrama E/R a taules relacionals; confon claus foranes amb primàries. |
| **Transformació de Jerarquies d'Herència** | Avalua i selecciona l'opció òptima d'herència (taula per classe, taula única o només subclasses) justificant el balanç normalització vs rendiment. | Implementa la transformació d'herència mitjançant taula per classe amb claus foranes a la superclasse. | Aplica una de les estratègies d'herència amb suport de plantilles però sense comprendre'n els límits. | Duplica estructures sense relació o ignora els camps comuns de la superclasse. |
| **Teoria de Dependències Funcionals** | Identifica dependències funcionals plenes, parcials i transitives i aplica els axiomes d'Armstrong per trobar claus candidates. | Detecta dependències funcionals entre atributs i distingeix determinants d'atributs dependents. | Reconeix dependències directes evidents però no comprèn la transitivitat. | Incapaç d'identificar quins atributs determinen unívocament altres atributs. |
| **Procés de Normalització (1FN, 2FN, 3FN)** | Descompon esquemes desnormalitzats fins a 3FN/BCNF justificant l'eliminació d'anomalies de modificació, inserció i esborrat. | Normalitza taules identificant dependències parcials (2FN) i transitives (3FN) amb èxit. | Assenyala els requisits de cada forma normal però comet errors en separar les noves taules. | Manté taules desnormalitzades amb grups repetitius i camps calculats sense entendre el concepte. |
| **Descomposició sense pèrdua i Preservació** | Demostra formalment si una descomposició garanteix Lossless Join ($R_1 \cap R_2 \to R_1$) i preserva les dependències funcionals. | Comprova que la unió natural de les taules descompostes no genera tuples falses o espúries. | Sap que no es poden perdre dades en descompondre però no sap com verificar-ho formalment. | Genera descomposicions incoherents que trenquen les relacions i perden informació de negoci. |

