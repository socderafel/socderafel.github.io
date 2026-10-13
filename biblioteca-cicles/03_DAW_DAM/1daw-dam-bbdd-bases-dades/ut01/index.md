---
layout: default
title: "UD1: Sistemes d'Emmagatzematge, SGBD i Fonaments del Model Relacional — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD1"
next_url: "../ut02/index.html"
next_label: "UD2: Disseny Conceptual (Model E/R) ➡️"
---

# UD1: Sistemes d'Emmagatzematge, SGBD i Fonaments del Model Relacional

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-fit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-arc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cmp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cls" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db1)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ARQUITECTURA DE SGBD I FONAMENTS DEL MODEL RELACIONAL (CODD)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Superació de fitxers · Abstracció ANSI/SPARC · Tuples i dominis · Claus primàries i integritat referencial</text>

  <!-- Bloc 1: Fitxers vs SGBD -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fit)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📁</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fitxers vs SGBD</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Limitacions Tradicionals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Redundància i inconsistència</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Format rígid i aïllament</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Manca de concurrència</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Integritat no garantida</text>
  </g>

  <!-- Bloc 2: Arquitectura ANSI/SPARC -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arc)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🏛️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">ANSI/SPARC</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">3 Nivells d'Abstracció</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Nivell Extern (Vistes)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Nivell Conceptual (Lògic)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Nivell Intern (Físic disc)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Independència de dades</text>
  </g>

  <!-- Bloc 3: Model Relacional -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cmp)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model Relacional</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Teoria de Conjunts</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Relació = Taula</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Tupla = Fila / Registre</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Atribut = Columna (Domini)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Valors atòmics (1FN)</text>
  </g>

  <!-- Bloc 4: Claus i Integritat -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cls)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔑</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Claus i Regles</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Garanties de Coherència</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Superclau i Clau Primària</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Integritat d'Entitat (NOT NULL)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Clau Forana (Foreign Key)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Integritat Referencial</text>
  </g>
</svg>
</div>

---

## 1.1 Limitacions dels Sistemes de Fitxers i Naixement dels SGBD

Abans de l'aparició dels **Sistemes Gestors de Bases de Dades (SGBD)** a finals de la dècada de 1960, les organitzacions emmagatzemaven la informació mitjançant **sistemes de fitxers tradicionals** gestionats pel propi sistema operatiu. Cada departament o aplicació desenvolupava els seus propis fitxers seqüencials o binaris (per exemple, en COBOL, FORTRAN o C), la qual cosa presentava greus deficiències:

1. **Redundància i inconsistència de dades:**
   - La mateixa informació (com ara el domicili o telèfon d'un client) es trobava duplicada en el fitxer de facturació, en el d'enviaments i en el d'atenció al client. Si es modificava en un lloc i s'oblidava en els altres, el sistema entrava en un estat d'inconsistència greu.
2. **Dificultat d'accés i manca d'independència:**
   - Obtenir un informe no previst originalment requeria programar un nou programa sencer que coneguera la disposició exacta de bytes en disc. Qualsevol canvi en l'estructura del fitxer obligava a reescriure tots els programes dependents (*dependència de dades*).
3. **Manca de concurrència i atomicitat:**
   - Si dos processos intentaven escriure alhora en el mateix fitxer, un sobreescrivia l'altre (*Lost Update*). A més, si el corrent fallava durant una transacció, no hi havia cap mecanisme automàtic de recuperació (*Rollback*).
4. **Deficiències de seguretat i integritat:**
   - Els permisos del sistema operatiu s'aplicaven a tot el fitxer, sense poder distingir columnes confidencials (com ara salaris o contrasenyes). Les restriccions de negoci s'havien de reprogramar en cada aplicació client.

### Definició d'un SGBD (*DBMS*)
Un **Sistema Gestor de Bases de Dades** és un paquet de programari complex que intervé entre les aplicacions usuàries i els fitxers físics en disc, proporcionant un accés unificat, eficient, segur i concurrent a la informació.

```
+-----------------------------------------------------------------------------------+
|                        SISTEMES DE FITXERS vs SGBD                                |
+-------------------------------+---------------------------------------------------+
| SISTEMA DE FITXERS            | SISTEMA GESTOR DE BASES DE DADES (SGBD)           |
+-------------------------------+---------------------------------------------------+
| Redundància incontrolada      | Redundància mínima i controlada centralitzadament |
| Inconsistència freqüent       | Consistència garantida per regles d'integritat    |
| Dependència física i lògica   | Independència de dades (3 nivells ANSI/SPARC)     |
| Bloqueig rígid de fitxers     | Concurrència fina per files (locks / MVCC)        |
| Recuperació manual complexa   | Recuperació automàtica mitjançant WAL / Logs      |
| Seguretat a nivell d'arxiu    | Seguretat granular per taules, columnes i usuaris |
+-------------------------------+---------------------------------------------------+
```

---

## 1.2 L'Arquitectura ANSI/SPARC i la Independència de Dades

Per desvincular els programes de l'emmagatzematge físic, el comitè **ANSI/X3/SPARC (1975)** va definir una arquitectura estàndard en tres nivells d'abstracció:

```
+-----------------------------------------------------------+
|             NIVELL EXTERN (Vistes d'Usuari)               |
|   Vista Vendes (Web)        |   Vista Comptabilitat       |
+-----------------------------------------------------------+
                             ^
                             |  Independència Lògica de Dades
                             v
+-----------------------------------------------------------+
|           NIVELL CONCEPTUAL (Esquema Lògic Global)        |
|    Entitats, Taules, Relacions, Atributs i Restriccions   |
+-----------------------------------------------------------+
                             ^
                             |  Independència Física de Dades
                             v
+-----------------------------------------------------------+
|          NIVELL INTERN O FÍSIC (Emmagatzematge)           |
|    Fitxers binaris, blocs de disc, índexs B-Tree, pàgines |
+-----------------------------------------------------------+
```

1. **Nivell Extern (Vistes):** Descriu la part de la base de dades visible per a cada grup d'usuaris específic, ocultant la resta del sistema.
2. **Nivell Conceptual (Esquema Lògic Global):** Representa l'estructura global de dades de l'empresa sense tenir en compte el maquinari ni els discs. Defineix taules, tipus de dades i relacions.
3. **Nivell Intern / Físic:** Descriu l'emmagatzematge real en dispositius físics: blocs, fitxers binaris, índexs i compressió.

### Els Dos Tipus d'Independència
- **Independència Física de Dades:** Capacitat de modificar l'esquema intern (canviar de disc SSD, afegir un índex B-Tree o canviar el sistema de fitxers) sense haver de modificar l'esquema conceptual ni les aplicacions.
- **Independència Lògica de Dades:** Capacitat de modificar l'esquema conceptual (afegir una nova taula o columna) sense haver de modificar les vistes externes existents ni els programes que no la utilitzen.

---

## 1.3 Components Interns del Motor d'un SGBD

El programari d'un SGBD modern (com ara PostgreSQL o MariaDB) s'estructura en subsistemes altament coordinats:

```
[ Peticions SQL d'Usuaris / Aplicacions ]
                   |
                   v
+-------------------------------------------------------------------+
| 1. Analitzador Sintàctic i Semàntic (Parser & Lexer)              |
+-------------------------------------------------------------------+
                   | Arbre de sintaxi abstracta (AST)
                   v
+-------------------------------------------------------------------+
| 2. Optimitzador de Consultes (Query Optimizer)                     |
|    - Genera plans d'execució i tria el de menor cost estimat     |
+-------------------------------------------------------------------+
                   | Pla d'execució òptim
                   v
+-------------------------------------------------------------------+
| 3. Motor d'Execució (Execution Engine)                            |
+-------------------------------------------------------------------+
                   |
        +----------+----------+
        v                     v
+------------------+  +---------------------------------------------+
| Gestor de Memòria|  | Gestor de Transaccions i Concurrència       |
| (Buffer Pool)    |  | - Garanteix ACID (Atomicitat, Consistència, |
| - Pàgines en RAM |  |   Aïllament, Durabilitat)                   |
+------------------+  | - Fitxers de Log (WAL / Write-Ahead Log)    |
        |             +---------------------------------------------+
        v
[ Emmagatzematge Físic en Disc (Data Files) ]
```

---

## 1.4 Fonaments Matemàtics del Model Relacional de Codd

El **Model Relacional** va ser creat el juny de 1970 pel matemàtic **Edgar Frank Codd** a IBM. Codd va proposar tractar les dades amb el rigor de la **teoria de conjunts** i la **lògica de predicats de primer ordre**.

### Nomenclatura Formal vs Terminologia Pràctica
| Concepte Formal (Codd) | Concepte Pràctic (SQL / Taules) | Concepte Físic (Fitxers) |
| :--- | :--- | :--- |
| **Relació (*Relation*)** | **Taula (*Table*)** | Fitxer de dades |
| **Tupla (*Tuple*)** | **Fila (*Row*) / Registre** | Registre en disc |
| **Atribut (*Attribute*)** | **Columna (*Column*) / Camp** | Camp físic |
| **Domini (*Domain*)** | **Tipus de dades i restriccions** | Format binari |
| **Grau d'una relació** | **Nombre de columnes** | Ample de registre |
| **Cardinalitat** | **Nombre de files** | Recompte de registres |

### Propietats Matemàtiques d'una Relació
Una relació es defineix formalment com un subconjunt del producte cartesià dels dominis dels seus atributs:
$$R \subseteq D(A_1) \times D(A_2) \times \dots \times D(A_n)$$

1. **No existeixen tuples duplicades:** Com que una relació és un conjunt matemàtic, cada fila ha de ser distingible unívocament mitjançant una clau primària.
2. **L'ordre de les files és irrellevant:** L'accés a les dades no depèn de la seua posició física en disc.
3. **L'ordre de les columnes és irrellevant:** Cada columna s'identifica pel seu nom d'atribut.
4. **Atomicitat dels valors (Primera Forma Normal - 1FN):** Cada valor de cada cel·la és atòmic i indivisible; no es permeten estructures complexes ni arrays en el model relacional clàssic.

---

## 1.5 Teoria de Claus: Superclaus, Candidates i Primàries

1. **Superclau (*Superkey*):** Qualsevol subconjunt d'atributs que identifica de manera única cada tupla dins d'una relació.
2. **Clau Candidata (*Candidate Key*):** Una superclau mínima; és a dir, cap subconjunt propi d'ella és superclau. No conté atributs superflus.
3. **Clau Primària (*Primary Key* - PK):** La clau candidata escollida pel dissenyador per identificar les tuples de la relació. Els seus valors són obligatoris (`NOT NULL`) i únics (`UNIQUE`).
4. **Clau Forana / Externa (*Foreign Key* - FK):** Un atribut (o conjunt d'atributs) en una relació que fa referència a la clau primària d'una altra relació (o de la mateixa relació), establint vincles entre entitats.

---

## 1.6 Les Regles d'Integritat del Model Relacional

Per assegurar que la informació emmagatzemada és fidedigna, el model imposa tres restriccions fonamentals:

1. **Integritat d'Entitat:**
   - Cap atribut que forme part de la clau primària d'una relació pot contenir un valor nul (`NULL`). Si fos nul, la tupla no podria identificar-se unívocament.
2. **Integritat Referencial:**
   - Si una relació té una clau forana $FK$ que apunta a la clau primària $PK$ d'una relació de referència, el valor de $FK$ ha de coincidir amb un valor existent de $PK$, o bé ser nul (`NULL`) si la relació ho permet.
   - En cas d'esborrat o actualització de la clau referenciada, cal aplicar regles d'acció: `CASCADE`, `RESTRICT` / `NO ACTION` o `SET NULL`.
3. **Integritat de Domini:**
   - Cada valor assignat a un atribut ha de pertànyer estrictament al conjunt de valors vàlids del seu domini (tipus de dada, rang numèric o restriccions de format).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Tècnica i Càlculs del Model Relacional

#### Exercici 1.1: Càlcul de Mida de Tupla i Ocupació en Pàgines de Disc
Una taula `Clients` té el següent esquema físic a PostgreSQL (pàgina estàndard de disc $B = 8.192\text{ bytes}$ amb capçalera fixa de $24\text{ bytes}$ per pàgina):
- `id` (INTEGER): $4\text{ bytes}$
- `nif` (CHAR(9)): $9\text{ bytes}$
- `nom` (VARCHAR(30)): mitjana de $18\text{ bytes}$
- `sou` (NUMERIC(8,2)): $8\text{ bytes}$
- `data_alta` (DATE): $4\text{ bytes}$
- Capçalera de tupla de PostgreSQL (*Tuple Header*): $23\text{ bytes}$

1. Calculeu la mida total en bytes d'una tupla mitjana ($L$):
   $$L = \text{Header} + \sum \text{Mida}(A_i)$$
2. Calculeu el **factor de bloqueig** ($B_f$), és a dir, quantes tuples caben com a màxim en una única pàgina de disc:
   $$B_f = \left\lfloor \frac{B - 24}{L} \right\rfloor$$
3. Si la taula creix fins a assolir $50.000$ clients, quantes pàgines de disc ($N_p$) i quants megabytes ($MB$) ocuparà la taula exclusivament per a les seues dades?

#### Exercici 1.2: Cardinalitat del Producte Cartesià i Espai de Tuples
Siguin dos dominis atòmics definits per a un sistema de qualificacions:
- $D_1 = \{\text{DAM}, \text{DAW}, \text{ASIX}\}$ (Cicles, $|D_1| = 3$)
- $D_2 = \{1, 2\}$ (Cursos, $|D_2| = 2$)
- $D_3 = \{\text{Ordinària}, \text{Extraordinària}\}$ (Convocatòries, $|D_3| = 2$)

1. Calculeu la cardinalitat màxima de l'espai de tuples possibles del producte cartesià:
   $$|D_1 \times D_2 \times D_3| = |D_1| \times |D_2| \times |D_3|$$
2. Si una relació $R$ instància només les combinacions de primer curs, escriviu per extensió el conjunt de tuples que formen la relació.

#### Exercici 1.3: Identificació Formal de Superclaus i Claus Candidates
Donat l'esquema de relació:
$$\text{Matricula}(\text{dni}, \text{codi\_assignatura}, \text{any\_academic}, \text{num\_expedient}, \text{nota})$$
Amb les següents dependències del món real:
- Un alumne té un únic `dni` i un únic `num_expedient` biunívocs ($\text{dni} \leftrightarrow \text{num\_expedient}$).
- Un alumne només pot matricular-se una vegada d'una assignatura en un mateix any acadèmic.

1. Identifiqueu totes les **claus candidates** de la relació.
2. Indiqueu quina escolliríeu com a **clau primària (PK)** i justifiqueu-ho segons criteris d'estabilitat i eficiència.
3. Escriviu dos exemples de **superclaus** que no siguen claus candidates.

---

### 💻 Bloc B: Reptes Pràctics en Entorn de Desenvolupament

#### Repte 1.1: Desplegament d'un SGBD PostgreSQL amb Docker
1. Instal·leu i engegueu un contenidor Docker amb el motor PostgreSQL 16:
```bash
docker run --name pg-laboratori -e POSTGRES_PASSWORD=dawdam2026 -e POSTGRES_DB=gestio_academica -p 5432:5432 -d postgres:16-alpine
```
2. Connecteu-vos mitjançant el client interactiu `psql`:
```bash
docker exec -it pg-laboratori psql -U postgres -d gestio_academica
```
3. Consulteu les metadades internes del motor per verificar la mida de pàgina de disc i la versió:
```sql
SHOW block_size;
SELECT version();
```

#### Repte 1.2: Implementació d'Integritat d'Entitat i Domini
Creeu una taula de departaments amb restriccions d'integritat completes:
```sql
CREATE TABLE departaments (
    codi_dept VARCHAR(4) PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE,
    pressupost NUMERIC(10,2) CHECK (pressupost >= 0),
    data_creacio DATE DEFAULT CURRENT_DATE
);
```
1. Inseriu dos departaments vàlids.
2. Comproveu que el SGBD bloca les insercions anòmales (duplicat de PK, PK nul·la o pressupost negatiu) mostrant el codi d'error SQLSTATE corresponent.

#### Repte 1.3: Implementació d'Integritat Referencial amb Clau Forana
1. Creeu la taula `professors` vinculada a `departaments` amb acció en cascada:
```sql
CREATE TABLE professors (
    dni CHAR(9) PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    codi_dept VARCHAR(4) NOT NULL,
    FOREIGN KEY (codi_dept) REFERENCES departaments(codi_dept)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);
```
2. Inseriu registres vinculats.
3. Intenteu esborrar un departament que té professors assignats i verifiqueu el bloqueig per `RESTRICT`. Després modifiqueu el codi del departament i comproveu com s'actualitza automàticament a la taula de professors gràcies a `ON UPDATE CASCADE`.

---

### 🔍 Bloc C: Autoavaluació i Rúbrica Tècnica

#### Llista de Verificació d'Assoliment
- [ ] Puc enumerar i explicar les limitacions principals dels sistemes de fitxers tradicionals davant els SGBD.
- [ ] Comprèn l'arquitectura ANSI/SPARC de 3 nivells i la diferència entre independència física i lògica de dades.
- [ ] Sé descriure el funcionament intern del motor d'un SGBD: parser, optimitzador, buffer pool i fitxer WAL.
- [ ] Domine la correspondència entre els conceptes formals de Codd (relació, tupla, atribut) i els pràctics (taula, fila, columna).
- [ ] Distingeixo amb claredat entre superclau, clau candidata, clau primària i clau forana.
- [ ] Entenc el funcionament de les restriccions d'integritat d'entitat i referencial (`CASCADE`, `RESTRICT`, `SET NULL`).
- [ ] Sóc capaç de desplegar un SGBD amb Docker i executar sentències DDL que apliquen restriccions d'integritat reals.

#### Rúbrica d'Avaluació de la Unitat
| Criteri d'Avaluació | 🟢 Excel·lent (9-10) | 🟡 Notable (7-8) | 🟠 Aprovat (5-6) | 🔴 No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitectura de SGBD (RA1)** | Domina la teoria d'ANSI/SPARC, la independència de dades i els components del motor d'un SGBD amb precisió tècnica. | Comprèn els 3 nivells d'abstracció i la diferència entre fitxers i SGBD amb claredat. | Reconeix els avantatges dels SGBD però confon la independència lògica i física. | Desconeix la funció d'un SGBD i els seus components interns. |
| **Model Relacional de Codd (RA1)** | Defineix relacions, dominis i tuples amb rigor matemàtic i respecta la primera forma normal (1FN). | Utilitza correctament la terminologia relacional i entén les propietats de les taules. | Confon atributs i dominis o creu que l'ordre de les files és rellevant. | No comprèn el funcionament del model relacional de taules. |
| **Teoria de Claus i Integritat (RA1)** | Identifica totes les claus candidates i aplica regles d'integritat referencial amb accions en cascada òptimes. | Identifica claus primàries i foranes correctament amb restriccions bàsiques. | Dissenya claus però comet errors en claus compostes o en restriccions d'integritat. | No sap definir claus primàries ni foranes en una base de dades. |
| **Pràctica en Servidor (RA1)** | Desplega i administra el SGBD en Docker, verifica metadades i crea esquemes amb integritat absoluta. | Desplega el motor i crea taules amb claus primàries i foranes que validen correctament. | Utilitza el motor amb instruccions guiades però presenta dificultats davant errors de restricció. | Incapaç de connectar-se al SGBD o crear una taula amb claus. |
