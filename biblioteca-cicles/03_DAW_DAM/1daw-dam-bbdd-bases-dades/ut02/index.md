---
layout: default
title: "UD2: Emmagatzematge de la Informació, Models de Dades i Introducció al Model Relacional — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD2"
next_url: "ut0201.html"
next_label: "2.1 ➡️"
---

# UD2: Emmagatzematge de la Informació, Models de Dades i Introducció al Model Relacional

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-mod" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-rel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-key" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-int" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db2)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">MODELS DE DADES I FONAMENTS DEL MODEL RELACIONAL DE CODD</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Models conceptuals vs lògics, relacions, tuples, dominis, superclaus i integritat d'entitat i referencial</text>

  <!-- Bloc 1: Models de Dades -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mod)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Models de Dades</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Nivells d'Abstracció</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Model Conceptual (E/R)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Model Lògic (Relacional)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Model Físic (Índexs/Disc)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Estructura, operacions, regles</text>
  </g>

  <!-- Bloc 2: El Model Relacional -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-rel)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model Relacional</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Teoria de Conjunts</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Relació = Taula matemàtica</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Tupla = Fila / Registre</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Atribut = Columna / Camp</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Grau (cols) &amp; Cardinalitat</text>
  </g>

  <!-- Bloc 3: Claus i Identificadors -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-key)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔑</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Teoria de Claus</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Identificació Única</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Superclau &amp; Claus candidates</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Clau primària (PK triada)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Claus alternatives / secundàries</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Clau forana (FK referència)</text>
  </g>

  <!-- Bloc 4: Regles d'Integritat -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-int)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Regles Integritat</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Consistència Codd</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Integritat de Domini (tipus)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Integritat d'Entitat (PK != NULL)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Integritat Referencial (FK)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Tractament de valors NULL</text>
  </g>
</svg>
</div>

Models de dades i nivells d'abstracció, teoria formal del model relacional d'Edgar F. Codd, conceptes de relació, atribut, domini i tupla, teoria de claus (superclaus, candidates, primàries i foranes), restriccions d'integritat i tractament de valors nuls en lògica trivaluada.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **2.1** | **Concepte i classificació dels models de dades** | [**Llegir apartat →**](./ut0201.html) |
| **2.2** | **Fonaments matemàtics del model relacional** | [**Llegir apartat →**](./ut0202.html) |
| **2.3** | **Teoria de claus: superclaus, candidates i claus primàries** | [**Llegir apartat →**](#23-teoria-de-claus-superclaus-candidates-i-claus-primàries) |
| **2.4** | **Regles d'integritat del model relacional** | [**Llegir apartat →**](#24-regles-dintegritat-del-model-relacional) |
| **2.5** | **El valor nul (NULL) i la lògica trivaluada (3VL)** | [**Llegir apartat →**](#25-el-valor-nul-null-i-la-lògica-trivaluada-3vl) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 2.1 Concepte i classificació dels models de dades

Un **model de dades** és una col·lecció d'eines conceptuals i matemàtiques que s'utilitzen per descriure les dades, les seues relacions mútues, la seua semàntica i les condicions de consistència que han de complir en tot moment.

Tot model de dades formal està compost per tres elements fonamentals:
1. **Part estructural:** Defineix com s'organitzen les dades (entitats, atributs, taules, arbres, grafs).
2. **Part manipulativa / operacions:** Conjunt d'operacions permeses per consultar, inserir, modificar i eliminar dades (àlgebra relacional, càlcul relacional, SQL, mètodes NoSQL).
3. **Part d'integritat:** Conjunt de regles que garanteixen que les dades reflecteixen un estat vàlid i coherent del món real.

---

### Classificació dels models segons el nivell d'abstracció
1. **Models Conceptuals (Alt nivell):**
   - Propers a la visió dels usuaris de negoci. Representen la realitat independentment de quin programari o SGBD s'utilitze posteriorment.
   - El model de referència internacional és el **Model Entitat-Relació (E/R)** de Peter Chen.
2. **Models Lògics (Nivell intermedi):**
   - Implementables directament en un SGBD comercial o de codi obert, però encara independents de l'estructura física de discs.
   - Principals paradigmes històrics i actuals:
     - **Model Relacional:** Basat en taules bidimensionals i teoria matemàtica de conjunts. L'estàndard dominant des dels anys 80.
     - **Model Jeràrquic:** Organització en arbre estricte pare-fill (ex. IBM IMS).
     - **Model en Xarxa (CODASYL):** Permet grafs arbitraris amb múltiples pares.
     - **Model NoSQL (Documental, Clau-Valor, Columnar, Graf):** Models moderns per a escalabilitat horitzontal i esquemes flexibles.
3. **Models Físics (Baix nivell):**
   - Descriuen com s'ordenen els registres als sectors del disc, formats de blocatge, agrupaments (*clusters*) i estructures d'índexs (arbres B+Tree, taules hash).

---

## 2.2 Fonaments matemàtics del model relacional

El **Model Relacional** va ser proposat el juny de 1970 pel matemàtic britànic **Edgar Frank Codd** en el seu article fundacional *"A Relational Model of Data for Large Shared Data Banks"*, publicat a la revista *Communications of the ACM*. Codd va demostrar que les dades es podien gestionar amb rigor matemàtic recolzant-se en la **teoria de conjunts** i la **lògica de predicats de primer ordre**.

### Nomenclatura matemàtica formal vs Terminologia SQL pràctica
| Concepte Formal (Codd) | Concepte Pràctic (SQL / Taules) | Concepte Físic (Fitxers) |
| :--- | :--- | :--- |
| **Relació (*Relation*)** | **Taula (*Table*)** | Fitxer de dades |
| **Tupla (*Tuple*)** | **Fila (*Row*) / Registre** | Registre físic (*Record*) |
| **Atribut (*Attribute*)** | **Columna (*Column*) / Camp** | Camp físic (*Field*) |
| **Domini (*Domain*)** | **Tipus de dades i restriccions** | Format de dades (VARCHAR, INT) |
| **Grau d'una relació** | **Nombre de columnes** | Ample del registre |
| **Cardinalitat d'una relació** | **Nombre de files** | Nombre de registres del fitxer |

---

### Definicions formals clau
1. **Domini ($D$):**
   - Conjunt de valors atòmics (indivisibles) vàlids que pot prendre un determinat atribut. Per exemple:
     $$D_{\text{Edat}} = \{x \in \mathbb{N} \mid 0 \le x \le 120\}$$
2. **Relació ($R$):**
   - Formalment, un esquema de relació $R(A_1, A_2, \dots, A_n)$ es defineix com un subconjunt del producte cartesià dels dominis dels seus atributs:
     $$R \subseteq D(A_1) \times D(A_2) \times \dots \times D(A_n)$$
   - Una relació és un **conjunt de tuples**, la qual cosa implica dues propietats matemàtiques essencials:
     - **No hi ha tuples duplicades:** En un conjunt matemàtic, dos elements no poden ser idèntics. Cada fila ha de ser distingible de les altres mitjançant una clau.
     - **L'ordre de les tuples és irrellevant:** Els conjunts no tenen ordre intrínsec; la fila 1 és igualment accessible que la fila 500.
     - **L'ordre dels atributs és irrellevant:** Cada columna s'identifica pel seu nom, no per la seua posició numèrica.
     - **Valors atòmics (1FN):** Cada cel·la de la taula només pot contenir un únic valor simple, mai llistes, arrays ni subtaules imbricades.

---

## 2.3 Teoria de claus: superclaus, candidates i claus primàries

Com que en una relació no poden existir dues tuples idèntiques, és necessari establir mecanismes matemàtics per identificar unívocament cada fila:

1. **Superclau (*Superkey*):**
   - Qualsevol conjunt d'un o més atributs que permet identificar de manera única cada tupla dins d'una relació.
   - Exemple a la taula `Alumnes(dni, nia, nom, cognoms, email)`:
     - `{dni}` és superclau.
     - `{nia}` és superclau.
     - `{dni, nom}` també és superclau (identifica unívocament, tot i que té atributs redundants).
2. **Clau Candidata (*Candidate Key*):**
   - És una **superclau mínima**: un conjunt d'atributs que identifica unívocament cada fila tal que, si s'elimina qualsevol atribut del conjunt, deixa de ser superclau.
   - Seguint l'exemple: `{dni}`, `{nia}` i `{email}` són claus candidates independents.
3. **Clau Primària (PK - *Primary Key*):**
   - És la clau candidata triada pel dissenyador de la base de dades com a identificador principal i oficial de la relació.
   - Criteris de selecció: ha de ser immutable (que mai canvie), curta (preferiblement numèrica per a índexs ràpids) i mai podrà acceptar valors nuls (`NOT NULL`).
4. **Clau Alternativa (*Alternate Key*):**
   - Qualsevol clau candidata que no ha sigut escollida com a clau primària. En SQL es protegeix amb la restricció `UNIQUE NOT NULL`.
5. **Clau Forana / Estrangera (FK - *Foreign Key*):**
   - Un o més atributs d'una relació $R_1$ que fan referència directa a la clau primària d'una altra relació $R_2$ (o de la mateixa relació en cas de relació reflexiva).
   - És el mecanisme fonamental per establir relacions lògiques entre taules sense duplicar informació.

---

## 2.4 Regles d'integritat del model relacional

El model relacional imposa un conjunt de restriccions que el SGBD ha de validar abans d'acceptar qualsevol operació de creació o modificació (`INSERT`, `UPDATE`, `DELETE`):

### 1. Integritat de Domini
- El valor de cada atribut ha de pertànyer obligatòriament al domini definit (tipus de dades enter, cadena, data) i complir les restriccions de rang (`CHECK`).

### 2. Integritat d'Entitat (*Entity Integrity*)
- **Cap atribut que forme part de la Clau Primària pot ser mai nul (`NULL`)**:
  $$\forall t \in R, \quad t[PK] \neq \text{NULL}$$
- Raonament: Si una clau primària fóra nul·la, no es podria identificar unívocament eixa fila ni referenciar-la des d'altres taules.

### 3. Integritat Referencial (*Referential Integrity*)
- Si una relació $R_1$ té una clau forana $FK$ que apunta a la clau primària $PK$ de la relació $R_2$:
  - Cada valor de $FK$ a $R_1$ ha de coincidir exactament amb un valor existent de $PK$ a $R_2$, o bé ha de ser completament `NULL` (si la regla de negoci permet que no hi haja associació).
- **Polítiques de manteniment davant esborrats i modificacions a la taula mestre ($R_2$):**
  - **`ON DELETE RESTRICT` / `NO ACTION` (per defecte):** Impedeix esborrar la fila pare si té files filles que la referencien.
  - **`ON DELETE CASCADE`:** Si s'esborra el pare, s'esborren automàticament totes les files filles relacionades en cascada.
  - **`ON DELETE SET NULL`:** Si s'esborra el pare, la clau forana de les files filles passa a tindre valor `NULL`.

---

## 2.5 El valor nul (NULL) i la lògica trivaluada (3VL)

En bases de dades relacionals, el valor **`NULL`** no és el número zero (`0`) ni una cadena de text buida (`""`). Representa l'**absència de valor**, que pot correspondre a dues situacions:
1. **Valor desconegut:** L'atribut té un valor en la realitat, però encara no es coneix (per exemple, el telèfon d'un client nou).
2. **Valor inaplicable:** L'atribut no té sentit per a eixa tupla (per exemple, la data de carnet de conduir per a una persona que no condueix).

### La lògica trivaluada (*Three-Valued Logic* - 3VL)
Com que `NULL` representa una incògnita, qualsevol comparació aritmètica o lògica amb `NULL` no avalua ni a `TRUE` ni a `FALSE`, sinó a **`UNKNOWN`** (desconegut):

| Operació | Expressió SQL | Resultat Booleà |
| :--- | :--- | :---: |
| Comparació d'igualtat | `salari = NULL` | **`UNKNOWN`** (Mai serà TRUE!) |
| Comprovació correcta | `salari IS NULL` | **`TRUE`** (si el camp és nul) |
| Negació correcta | `salari IS NOT NULL` | **`TRUE`** (si el camp té valor) |
| Operació lògica AND | `TRUE AND UNKNOWN` | **`UNKNOWN`** |
| Operació lògica AND | `FALSE AND UNKNOWN` | **`FALSE`** |
| Operació lògica OR | `TRUE OR UNKNOWN` | **`TRUE`** |
| Operació lògica OR | `FALSE OR UNKNOWN` | **`UNKNOWN`** |

> [!IMPORTANT]
> A les consultes SQL amb clàusula `WHERE`, **només es retornen les files la condició de les quals avalua a `TRUE`**. Les files que avaluen a `FALSE` o a `UNKNOWN` queden automàticament descartades!

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Càlcul de grau, cardinalitat i combinatòria de producte cartesià
Es disposa de dues relacions en una base de dades universitària:
- Relació $R_1$: `Estudiants(nia, nom, cognoms, data_naixement, codi_grau)`
  - Grau: $\text{Grau}(R_1) = 5$ atributs.
  - Cardinalitat: $|R_1| = 2.400$ tuples.
- Relació $R_2$: `Assignatures(codi_asig, nom_asig, credits)`
  - Grau: $\text{Grau}(R_2) = 3$ atributs.
  - Cardinalitat: $|R_2| = 180$ tuples.

1. Si un desenvolupador executa per error una consulta SQL que enllaça ambdues taules sense clàusula `WHERE` ni condició de combinació (generant un **Producte Cartesià** $R_1 \times R_2$):
   - Calcula el grau resultant de la relació generada:
     $$\text{Grau}(R_1 \times R_2) = \text{Grau}(R_1) + \text{Grau}(R_2) = \dots$$
   - Calcula el nombre total de tuples que intentarà generar el motor SGBD:
     $$|R_1 \times R_2| = |R_1| \cdot |R_2| = 2.400 \times 180 = \dots \text{ tuples}$$
2. Si cada registre resultant del producte cartesià té una amplada mitjana en memòria de $120\text{ bytes}$, calcula quant espai de memòria RAM o fitxers temporals de disc consumirà la consulta i explica per què un producte cartesià no controlat pot col·lapsar un servidor de producció.

#### Exercici 2: Identificació formal de superclaus i claus candidates
Es defineix l'esquema de relació per a la matriculació de vehicles:
$$\text{Vehicles}(matrícula, número\_bastidor, marca, model, nif\_propietari, telèfon\_propietari)$$
Se sap per la legislació de trànsit que:
- La matrícula és única per a cada vehicle nacional.
- El número de bastidor (VIN) és únic a escala mundial per a cada vehicle fabricat.
- El NIF identifica unívocament una persona, però una persona pot posseir diversos vehicles.

1. Llista 3 superclaus formades per un únic atribut.
2. Llista 3 superclaus que continguin atributs redundants (és a dir, que siguen superclaus però no mínimes).
3. Identifica formalment quines són totes les **claus candidates** de la relació.
4. Quina clau candidata recomanaries com a **Clau Primària (PK)** i per quines raons tècniques de disseny?

#### Exercici 3: Avaluació de condicions en lògica trivaluada (3VL)
Donada una taula `Empleats` amb les següents dades:

| id_emp | nom | departament | comissio |
| :---: | :--- | :--- | :---: |
| 1 | Marc | Vendes | 500 |
| 2 | Anna | Informàtica | NULL |
| 3 | Carles | Vendes | 0 |
| 4 | Elena | Vendes | NULL |

Determina quines tuples seran retornades en cadascuna de les següents consultes SQL avaluant la condició lógica per a cada fila (`TRUE`, `FALSE` o `UNKNOWN`):
1. `SELECT * FROM Empleats WHERE comissio > 0;`
2. `SELECT * FROM Empleats WHERE comissio = 0 OR comissio IS NULL;`
3. `SELECT * FROM Empleats WHERE NOT (comissio > 0);` *(Atenció a la negació d'un valor UNKNOWN!)*
4. Explica per què la fila d'Anna i la d'Elena no apareixen a la consulta 1 ni tampoc a la consulta 3.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'esquema relacional amb restriccions d'integritat
- **Objectiu:** Crear dues taules relacionades forçant integritat d'entitat i integritat referencial amb polítiques d'esborrat en cascada.
- **Procediment de taller:**
  1. Obre el client SQL (DBeaver, pgAdmin o terminal de consola) i crea la taula pare:
     ```sql
     CREATE TABLE Departaments (
         id_dept INT PRIMARY KEY,
         nom_dept VARCHAR(50) NOT NULL UNIQUE,
         pressupost NUMERIC(10, 2) CHECK (pressupost >= 0)
     );
     ```
  2. Crea la taula filla vinculada mitjançant clau forana:
     ```sql
     CREATE TABLE Empleats (
         id_emp INT PRIMARY KEY,
         nom VARCHAR(100) NOT NULL,
         id_dept INT,
         CONSTRAINT fk_empleat_dept 
             FOREIGN KEY (id_dept) REFERENCES Departaments(id_dept)
             ON DELETE CASCADE
     );
     ```
  3. Insereix dos departaments i tres empleats associats.
  4. Executa `DELETE FROM Departaments WHERE id_dept = 1;` i comprova com el motor elimina automàticament els empleats vinculats per la clau forana en cascada.

#### Repte 2: Comprovació pràctica de violació d'integritat
- **Objectiu:** Experimentar com el SGBD protegeix la base de dades bloquejant instruccions que violen les regles del model relacional.
- **Procediment de taller:**
  1. **Violació d'Integritat d'Entitat:** Intenta inserir una fila amb clau primària duplicada o nul·la:
     ```sql
     INSERT INTO Departaments (id_dept, nom_dept, pressupost) VALUES (NULL, 'Logística', 20000);
     INSERT INTO Departaments (id_dept, nom_dept, pressupost) VALUES (2, 'Departament Duplicat', 15000);
     ```
     - Documenta el codi d'error emès pel SGBD (`duplicate key value violates unique constraint` o similar).
  2. **Violació d'Integritat Referencial:** Intenta inserir un empleat assignat a un departament que no existeix:
     ```sql
     INSERT INTO Empleats (id_emp, nom, id_dept) VALUES (99, 'Vicent Test', 999);
     ```
     - Comprova el missatge d'error de violació de clau forana (`violates foreign key constraint`).

#### Repte 3: Inspecció de metadades de claus i restriccions
- **Objectiu:** Auditar mitjançant consultes a les taules de metadades quines claus foranes i primàries estan actives a la base de dades.
- **Procediment de taller:**
  1. En PostgreSQL, executa la comanda `\d Empleats` per veure les restriccions associades a la taula.
  2. Consulta la vista estàndard ANSI `information_schema.table_constraints`:
     ```sql
     SELECT constraint_name, table_name, constraint_type
     FROM information_schema.table_constraints
     WHERE table_name IN ('departaments', 'empleats');
     ```
  3. Identifica les files corresponents a `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE` i `CHECK`.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He definit els tres elements d'un model de dades: estructura, operacions i regles d'integritat.
- [ ] He traduït correctament els termes formals de Codd (relació, tupla, atribut, domini) a la nomenclatura SQL (taula, fila, columna, tipus).
- [ ] He calculat el grau i la cardinalitat d'una relació i el seu producte cartesià.
- [ ] He diferenciat clarament una superclau d'una clau candidata i he seleccionat una clau primària adequada.
- [ ] He justificat per què una clau primària no pot contenir valors nuls segons la regla d'integritat d'entitat.
- [ ] He explicat el funcionament de la integritat referencial i les polítiques `ON DELETE CASCADE` i `RESTRICT`.
- [ ] He resolt condicions lògiques que involucren valors `NULL` utilitzant la lògica trivaluada (3VL).

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Model Relacional i Formalisme de Codd** | Domina la teoria matemàtica de conjunts, el concepte de relació i calcula graus i cardinalitats amb precisió analítica. | Relaciona correctament els conceptes teòrics de relació, tupla i atribut amb taules, files i columnes d'SQL. | Reconeix els conceptes bàsics de taula i camp però té dificultats amb el formalisme teòric. | Confon el model relacional amb estructures de fitxers o fulls de càlcul no relacionals. |
| **Teoria de Claus (Superclaus i PK)** | Identifica totes les superclaus, determina les claus candidates mínimes i selecciona la clau primària més eficient. | Distingeix una clau candidata d'una superclau i identifica la clau primària d'una taula. | Reconeix que tota taula ha de tindre una clau primària però no sap identificar claus alternatives. | Incapaç d'identificar quins camps poden formar una clau primària o permet claus buides. |
| **Restriccions d'Integritat (Entitat i FK)** | Implementa i audita regles d'integritat d'entitat, de domini i referencials amb polítiques de cascada i restricció. | Configura claus foranes i comprèn el concepte d'integritat referencial per evitar orfes. | Sap que una clau forana connecta dues taules però té dubtes sobre l'efecte de l'esborrat en cascada. | Desconeix la utilitat de les claus foranes o permet registres orfes sense control. |
| **Tractament de Valors NULL i 3VL** | Analitza condicions complexes en lògica trivaluada (TRUE, FALSE, UNKNOWN) i utilitza adequadament `IS NULL` evitant errors d'avaluació. | Comprèn que `NULL` representa absència de valor i utilitza la sintaxi correcta `IS NULL` en lloc de `= NULL`. | Reconeix que un camp pot ser nul però s'equivoca en avaluar consultes lògiques amb valors nuls. | Creu que `NULL` és equivalent al número 0 o a una cadena buida en comparacions. |
| **Laboratori DDL i Comprovació d'Errors** | Escriu codi DDL impecable forçant claus i restriccions i interpreta amb precisió els codis d'error de violació d'integritat. | Crea taules amb claus primàries i foranes funcionals i verifica els missatges d'error d'inserció. | Crea taules senzilles però requereix assistència per definir les restriccions d'integritat referencial. | No aconsegueix crear taules amb claus o ignora els errors de violació d'integritat. |
