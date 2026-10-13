---
layout: default
title: "UD7 — BDA. Model RELACIONAL (Segona part) · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD7 — BDA. Model RELACIONAL (Segona part)"
prev_url: "../ut06/ut0603.html"
prev_label: "⬅️ 6.3 Model Entitat-Relació (Guia de Referència)"
next_url: "../ut08/ut0801.html"
next_label: "8.1 Disseny de Taules i Tipus de Dades ➡️"
---

# 📘 UD7 — BDA. Model RELACIONAL (Segona part) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua, analitzant la transformació de diagrames conceptuals E-R en esquemes relacionals de taules, regles d'integritat i propagació de claus.

## 🔄 Transformació del Model Entitat-Relació al Model Relacional

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Regles de Pas del Model E-R al Model Relacional</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Mecanismes formals de transformació d'entitats, propagació de claus foranes i generació de taules intermèdies</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU7EntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU71nGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU711Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU7mnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#a855f7" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Entitats i Atributs -->
    <rect x="20" y="20" width="190" height="255" rx="8" fill="url(#aofU7EntGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">📦 ENTITATS ➔ TAULES</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Transformació Directa</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Regla General:</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- Cada Entitat es converteix en</text>
    <text x="42" y="105" fill="#38bdf8" font-size="8" font-weight="bold">  una TAULA de la BD.</text>
    <text x="32" y="122" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Atributs ➔ Columnes:</tspan></text>
    <text x="42" y="135" fill="#cbd5e1" font-size="8">- Atributs simples = Columnes</text>
    <text x="42" y="147" fill="#cbd5e1" font-size="8">- Atribut identificador =</text>
    <text x="42" y="159" fill="#fbbf24" font-size="8" font-weight="bold">  CLAU PRIMÀRIA (PK, subratllada)</text>
    <rect x="35" y="175" width="160" height="55" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="193" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">CLIENTS (</text>
    <text x="115" y="207" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">  <u>id_client</u>, nom, telefon )</text>
    <text x="115" y="221" fill="#94a3b8" font-size="7.5" text-anchor="middle">PK única per registre</text>
    <text x="115" y="258" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Integritat d'Entitat</text>

    <!-- Bloc 2: Relacions 1:N -->
    <rect x="230" y="20" width="190" height="255" rx="8" fill="url(#aofU71nGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="325" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">➡️ RELACIONS 1:N</text>
    <text x="325" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Propagació de Clau</text>
    <line x1="240" y1="63" x2="410" y2="63" stroke="#334155"/>
    <text x="242" y="80" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Regla d'Or:</tspan></text>
    <text x="252" y="93" fill="#cbd5e1" font-size="8">- NO es crea taula nova.</text>
    <text x="252" y="105" fill="#cbd5e1" font-size="8">- La PK del costat <tspan fill="#34d399" font-weight="bold">1</tspan> es propaga</text>
    <text x="252" y="117" fill="#cbd5e1" font-size="8">  a la taula del costat <tspan fill="#34d399" font-weight="bold">N</tspan>.</text>
    <text x="242" y="134" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Clau Forana (FK):</tspan></text>
    <text x="252" y="147" fill="#cbd5e1" font-size="8">- La columna afegida és FK.</text>
    <text x="252" y="159" fill="#cbd5e1" font-size="8">- Referencia la PK d'origen.</text>
    <rect x="245" y="175" width="160" height="55" rx="4" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="325" y="193" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">EQUIPS ( <u>num_serie</u>, model,</text>
    <text x="325" y="207" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">  id_client_fk )</text>
    <text x="325" y="221" fill="#94a3b8" font-size="7.5" text-anchor="middle">FK assenyala al CLIENT</text>
    <text x="325" y="258" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Integritat Referencial</text>

    <!-- Bloc 3: Relacions 1:1 -->
    <rect x="440" y="20" width="190" height="255" rx="8" fill="url(#aofU711Grad)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="535" y="42" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">↔️ RELACIONS 1:1</text>
    <text x="535" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tria de Sentit</text>
    <line x1="450" y1="63" x2="620" y2="63" stroke="#334155"/>
    <text x="452" y="80" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Criteri de Selecció:</tspan></text>
    <text x="462" y="93" fill="#cbd5e1" font-size="8">- Es propaga qualsevol PK.</text>
    <text x="462" y="105" fill="#cbd5e1" font-size="8">- S'escull la taula amb</text>
    <text x="462" y="117" fill="#fbbf24" font-size="8" font-weight="bold">  participació TOTAL (1,1)</text>
    <text x="462" y="129" fill="#cbd5e1" font-size="8">  per evitar camps nuls (NULL).</text>
    <text x="452" y="146" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">Fusió si ambdues són (1,1):</tspan></text>
    <text x="462" y="159" fill="#cbd5e1" font-size="8">- Es poden unir en una sola taula.</text>
    <rect x="455" y="175" width="160" height="55" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="535" y="193" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">DEPARTAMENT ( <u>codi</u>,</text>
    <text x="535" y="207" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">  nom, dni_director_fk )</text>
    <text x="535" y="221" fill="#94a3b8" font-size="7.5" text-anchor="middle">director és NOT NULL</text>
    <text x="535" y="258" fill="#fbbf24" font-size="8.5" text-anchor="middle" font-weight="bold">Minimització de Nuls</text>

    <!-- Bloc 4: Relacions M:N -->
    <rect x="650" y="20" width="190" height="255" rx="8" fill="url(#aofU7mnGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="745" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">🔀 RELACIONS M:N</text>
    <text x="745" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Taula Intermèdia</text>
    <line x1="660" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="662" y="80" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Regla d'Obligat Compliment:</tspan></text>
    <text x="672" y="93" fill="#cbd5e1" font-size="8">- Sempre genera una <tspan fill="#c084fc" font-weight="bold">NOVA TAULA</tspan>.</text>
    <text x="672" y="105" fill="#cbd5e1" font-size="8">- PK Composta: fusió de les</text>
    <text x="672" y="117" fill="#cbd5e1" font-size="8">  dues PKs de les entitats.</text>
    <text x="662" y="134" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Atributs de Relació:</tspan></text>
    <text x="672" y="147" fill="#cbd5e1" font-size="8">- S'afegeixen a la nova taula.</text>
    <rect x="665" y="175" width="160" height="55" rx="4" fill="#0f172a" stroke="#c084fc" stroke-width="1"/>
    <text x="745" y="193" fill="#f8fafc" font-size="8" font-weight="bold" text-anchor="middle">ORDRE_PECES ( <u>id_ordre</u>,</text>
    <text x="745" y="207" fill="#c084fc" font-size="8" font-weight="bold" text-anchor="middle">  <u>codi_peca</u>, quantitat )</text>
    <text x="745" y="221" fill="#94a3b8" font-size="7.5" text-anchor="middle">Clau Primària Composta</text>
    <text x="745" y="258" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Descomposició Relacional</text>
  </svg>
</div>

### 📋 Matriu de Transformació de Cardinalitats al Model Relacional

| Tipus de Relació E-R | Cardinalitat | Acció al Model Relacional | Estructura Resultant | Exemple Microinformàtic |
| :--- | :--- | :--- | :--- | :--- |
| **Entitat Forta** | N/A | Es converteix directament en taula | `TAULA (<u>pk</u>, atribut1, ...)` | `CLIENTS (<u>id_client</u>, nom, telefon)` |
| **Relació 1:N** | Un a Molts | Es propaga la PK del costat 1 com a FK al costat N | Taula costat N afegeix columna FK | `EQUIPS (<u>num_serie</u>, model, id_client_fk)` |
| **Relació 1:1 (Total / Parcial)** | Un a Un | Es propaga la PK de l'entitat amb participació parcial a la total | La taula que sempre participa rep la FK | `DEPARTAMENT (<u>cod_dep</u>, nom, dni_director_fk)` |
| **Relació 1:1 (Total / Total)** | Un a Un | Es poden fusionar en una única taula o propagar en qualsevol sentit | Una sola taula o dues amb FK única | `USUARI (<u>id_usuari</u>, login, contrasenya, perfil)` |
| **Relació M:N** | Molts a Molts | Es crea obligatòriament una **nova taula intermèdia** | `TAULA_REL (<u>fk1</u>, <u>fk2</u>, atributs_rel)` | `ORDRE_PECES (<u>id_ordre</u>, <u>cod_peca</u>, quantitat)` |
| **Entitat Dèbil** | Dèbil identificació | Es crea taula amb PK composta (FK entitat forta + clau parcial) | `DEBIL (<u>fk_forta</u>, <u>clau_parcial</u>, ...)` | `LINIES_ORDRE (<u>id_ordre</u>, <u>num_linia</u>, descripcio)` |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 Transformació del Model Entitat-Relació al Model Relacional**](./ut0701.md)

---

# 7.1 Desenvolupament Teòric: El Model Relacional de Codd

El **Model Relacional**, proposat per Edgar F. Codd en 1970 a IBM, és la base teòrica de la pràctica totalitat dels sistemes gestors de bases de dades corporatius moderns (MariaDB, MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite i LibreOffice Base).

### 1. Per què cal transformar el model conceptual E-R?
1. **Diferència de nivell d'abstracció:** El model Entitat-Relació és un model **conceptual** dissenyat per a ser entès pels analistes i els usuaris de l'organització. No obstant això, cap SGBD comercial emmagatzema directament rombes i el·lipses de Chen.
2. **Implementabilitat física:** El model Relacional representa la informació exclusivament mitjançant **taules bidimensionals** (anomenades formalment *relacions*), compostes per columnes (*atributs*) i files (*tuples* o registres).

---

### 2. Regles Fonamentals de Transformació

#### A. Transformació d'Entitats
- Tota entitat es transforma en una taula amb el mateix nom.
- Els atributs simples es transformen en columnes.
- L'atribut identificador principal de l'entitat es converteix en la **Clau Primària (PK)** de la taula, que en notació textual es representa subratllada:
$$\text{ALUMNE}(\underline{\text{NIA}}, \text{Nom}, \text{Cognoms}, \text{Data\_Naixement})$$

#### B. Transformació d'Atributs Compostos i Multivaluats
- **Atributs Compostos:** Es descomponen en els seus atributs simples constituents. Per exemple, un atribut compost `Adreça` format per `Carrer`, `Codi_Postal` i `Població` es desplega directament com tres columnes independents a la taula.
- **Atributs Multivaluats:** Com que una cel·la d'una taula relacional només pot contindre valors atòmics (Primera Forma Normal o 1FN), un atribut multivaluat (com `Telèfons`) s'ha d'extreure a una **taula independent** amb la clau forana que l'associa a l'entitat principal:
$$\text{TELEFONS\_CLIENT}(\underline{\text{id\_client\_fk}}, \underline{\text{num\_telefon}})$$

#### C. Transformació de Relacions 1:N (Un a Molts)
- La clau primària de l'entitat situada a la banda de l'**1** es transmet com a camp addicional a la taula de la banda de l'**N**. Aquest camp rep el nom de **Clau Forana o Estrangera (*Foreign Key* / FK)**.
- Si la relació conté atributs propis, aquests viatgen també a la taula de la banda de l'N.

#### D. Transformació de Relacions 1:1 (Un a Un)
- Si una banda té participació total $(1,1)$ i l'altra parcial $(0,1)$, es propaga la clau de la banda parcial a la banda total com a FK, declarant-la com a `UNIQUE` i `NOT NULL`. Així s'evita malgastar espai amb valors buits (*NULL*).
- Si ambdues bandes tenen participació total $(1,1)$, es recomana fusionar totes dues entitats en una única taula relacional.

#### E. Transformació de Relacions M:N (Molts a Molts)
- Una relació de molts a molts **no es pot resoldre mai afegint una clau forana a cap de les dues taules originals**, ja que això generaria una llista de valors en una sola cel·la o redundància infinita.
- Per tant, es genera **sempre una nova taula** (taula d'associació o pont), que contindrà:
  1. La clau primària de la primera entitat (com a FK).
  2. La clau primària de la segona entitat (com a FK).
  3. Tots els atributs propis que pertanyien a la relació (com data, quantitat, preu o qualificació).
- La Clau Primària d'aquesta nova taula serà la **combinació composta** de totes dues claus estrangeres:
$$\text{MATRICULES}(\underline{\text{NIA\_fk}}, \underline{\text{Codi\_Assig\_fk}}, \text{Curs\_Academic}, \text{Nota\_Final})$$

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Transformació Formal d'un Esquema E-R de Taller a Model Relacional
A partir del diagrama conceptual dissenyat a la unitat anterior per al Servei d'Assistència Tècnica (SAT) microinformàtic:
- Entitats: `CLIENT`, `EQUIP`, `ORDRE_REPARACIO`, `TECNIC`, `PECA_RECANVI`.
- Relacions:
  - `CLIENT` (1) posseeix `EQUIP` (N).
  - `EQUIP` (1) és objecte d'`ORDRE_REPARACIO` (N).
  - `TECNIC` (1) atén `ORDRE_REPARACIO` (N).
  - `ORDRE_REPARACIO` (M) utilitza `PECA_RECANVI` (N), amb atributs `quantitat` i `preu_venda`.

1. **Escriptura del Model Relacional en Notació Estàndard:** Escriviu l'esquema relacional complet indicant el nom de cada taula en majúscules, els seus atributs entre parèntesis, subratllant les Claus Primàries ($\underline{\text{PK}}$) i identificant clarament les Claus Foranes ($\text{FK}$) i la taula a la qual apunten.
2. **Comprovació de Claus Compostes:** Justifiqueu quina és la clau primària de la taula intermèdia sorgida de la relació $M:N$. Què passaria si un tècnic utilitza la mateixa peça dues vegades en dies diferents dins de la mateixa ordre? Com canviaria la clau primària si s'afegeix un camp `data_instalacio` o un comptador seqüencial?
3. **Mida Estimada de Files:** Si la taula `CLIENTS` té una fila de 180 bytes i la taula `EQUIPS` en té una de 95 bytes, calculeu quants bytes ocupa una relació $1:N$ on un client té 4 equips associats, comparant-ho amb la hipòtesi errònia de duplicar les dades del client a cada equip.

#### Activitat 2: Regles d'Integritat Referencial i Polítiques d'Esborrat en Cascada
Quan es defineix una relació entre dues taules mitjançant una Clau Forana, el SGBD ha de protegir la coherència de les dades mitjançant restriccions d'integritat referencial.
1. **Regla d'Integritat d'Entitat vs Integritat Referencial:** Definiu la diferència entre ambdues regles segons els postulats de Codd. Pot una clau primària tindre un valor `NULL`? I una clau forana?
2. **Polítiques d'Acció davant d'Esborrat (`ON DELETE`):** Expliqueu què succeeix en el sistema si un usuari intenta esborrar un registre de la taula `CLIENTS` que té 3 equips registrats a la taula `EQUIPS` sota cadascuna de les 3 opcions següents:
   - `ON DELETE RESTRICT` (o `NO ACTION`)
   - `ON DELETE CASCADE`
   - `ON DELETE SET NULL`
3. **Decisió Tècnica per a un Taller Informàtic:** Quina política d'esborrat és l'adequada per a la relació `CLIENT` ➔ `EQUIP`? I per a la relació `ORDRE_REPARACIO` ➔ `ORDRE_PECES`? Justifiqueu la resposta des del punt de vista de la seguretat de la informació comptable i la legislació de protecció de dades (RGPD).

#### Activitat 3: Normalització i Descomposició en Primera Forma Normal (1FN)
Una botiga d'informàtica té una taula anomenada `PROVEIDORS` amb les següents columnes:
`PROVEIDORS(id_prov, nom_empresa, persona_contacte, telefons, adreca_completa)`
- A la columna `telefons`, el personal escriu valors com: `"961234567 / 600112233 / 963987654"`.
- A la columna `adreca_completa`, escriuen: `"Carrer Major 14, 2n B, 46001 València"`.

1. **Detecció d'Infraccions:** Expliqueu per què aquesta taula incompleix la Primera Forma Normal (1FN).
2. **Reestructuració Relacional:** Reescribeu l'esquema relacional correcte, atomitzant l'adreça composta i creant una taula específica per als telèfons del proveïdor.

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Implementació DDL de l'Esquema Relacional en MariaDB / SQLite
1. Obriu un terminal de comandes o client de base de dades (DBeaver, phpMyAdmin, HeidiSQL o SQLite CLI).
2. Executeu el següent script DDL per implementar les taules transformades amb claus foranes explícites:
   ```sql
   -- 1. Taula Mare: CLIENTS
   CREATE TABLE CLIENTS (
       id_client INT AUTO_INCREMENT PRIMARY KEY,
       dni VARCHAR(12) NOT NULL UNIQUE,
       nom VARCHAR(60) NOT NULL,
       telefon VARCHAR(15) NOT NULL
   ) ENGINE=InnoDB;

   -- 2. Taula Filla: EQUIPS (Relació 1:N amb CLIENTS)
   CREATE TABLE EQUIPS (
       num_serie VARCHAR(30) PRIMARY KEY,
       marca VARCHAR(30) NOT NULL,
       model VARCHAR(40) NOT NULL,
       id_client_fk INT NOT NULL,
       CONSTRAINT fk_equips_client FOREIGN KEY (id_client_fk) 
           REFERENCES CLIENTS(id_client)
           ON DELETE RESTRICT
           ON UPDATE CASCADE
   ) ENGINE=InnoDB;

   -- 3. Taula Mare: PECES
   CREATE TABLE PECES (
       codi_peca VARCHAR(20) PRIMARY KEY,
       descripcio VARCHAR(80) NOT NULL,
       preu_cost DECIMAL(7,2) NOT NULL
   ) ENGINE=InnoDB;

   -- 4. Taula Mare: ORDRES DE REPARACIÓ
   CREATE TABLE ORDRES_REPARACIO (
       id_ordre INT AUTO_INCREMENT PRIMARY KEY,
       num_serie_fk VARCHAR(30) NOT NULL,
       data_entrada DATE NOT NULL,
       estat VARCHAR(20) DEFAULT 'Pendent',
       CONSTRAINT fk_ordres_equip FOREIGN KEY (num_serie_fk)
           REFERENCES EQUIPS(num_serie)
   ) ENGINE=InnoDB;

   -- 5. Taula Intermèdia M:N: ORDRES_PECES
   CREATE TABLE ORDRES_PECES (
       id_ordre_fk INT NOT NULL,
       codi_peca_fk VARCHAR(20) NOT NULL,
       quantitat INT NOT NULL DEFAULT 1,
       preu_venda DECIMAL(7,2) NOT NULL,
       PRIMARY KEY (id_ordre_fk, codi_peca_fk),
       CONSTRAINT fk_op_ordre FOREIGN KEY (id_ordre_fk) REFERENCES ORDRES_REPARACIO(id_ordre) ON DELETE CASCADE,
       CONSTRAINT fk_op_peca FOREIGN KEY (codi_peca_fk) REFERENCES PECES(codi_peca) ON DELETE RESTRICT
   ) ENGINE=InnoDB;
   ```
3. Comproveu l'estructura generada verificant que el motor de persistència suporta claus estrangeres (`SHOW CREATE TABLE EQUIPS;`).

#### Repte 2: Provocació i Verificació de Conflictes d'Integritat Referencial
1. Inseriu un client de prova:
   ```sql
   INSERT INTO CLIENTS (dni, nom, telefon) VALUES ('12345678A', 'Joan Carles Mas', '600123456');
   ```
2. Inseriu un equip assignat al client creat (ID = 1):
   ```sql
   INSERT INTO EQUIPS (num_serie, marca, model, id_client_fk) 
   VALUES ('SN-LEN-8891', 'Lenovo', 'ThinkCentre M720', 1);
   ```
3. **Intent de violació de Clau Forana (Falta de referència):** Intenteu inserir un equip vinculat a un client inexistent (ID = 999):
   ```sql
   INSERT INTO EQUIPS (num_serie, marca, model, id_client_fk) 
   VALUES ('SN-DEL-1002', 'Dell', 'OptiPlex 3080', 999);
   ```
   Anoteu el codi d'error exacte retornat pel motor SGBD (`Cannot add or update a child row: a foreign key constraint fails`).
4. **Intent de violació d'Esborrat (Restricció RESTRICT):** Intenteu esborrar el client amb ID 1:
   ```sql
   DELETE FROM CLIENTS WHERE id_client = 1;
   ```
   Verifiqueu que el motor impedeix l'operació per protegir l'equip associat.

#### Repte 3: Resolució d'una Relació Reflexiva 1:N en Model Relacional
1. Afegiu a la base de dades una estructura jeràrquica d'empleats tècnics on cada tècnic pot tenir un supervisor:
   ```sql
   CREATE TABLE TECNICS (
       id_tecnic INT AUTO_INCREMENT PRIMARY KEY,
       nom VARCHAR(50) NOT NULL,
       especialitat VARCHAR(30),
       id_supervisor_fk INT NULL,
       CONSTRAINT fk_tecnic_supervisor FOREIGN KEY (id_supervisor_fk)
           REFERENCES TECNICS(id_tecnic)
           ON DELETE SET NULL
   ) ENGINE=InnoDB;
   ```
2. Inseriu el cap de taller (sense supervisor, camp a `NULL`) i dos tècnics júniors supervisats pel cap:
   ```sql
   INSERT INTO TECNICS (nom, especialitat, id_supervisor_fk) VALUES ('Marta Gómez', 'Sistemes i Servidors', NULL);
   INSERT INTO TECNICS (nom, especialitat, id_supervisor_fk) VALUES ('Pau Ribes', 'Microinformàtica', 1);
   INSERT INTO TECNICS (nom, especialitat, id_supervisor_fk) VALUES ('Lucia Ortiz', 'Xarxes i Cablatge', 1);
   ```
3. Executeu una consulta amb *Self Join* per comprovar com es recupera el nom del tècnic juntament amb el nom del seu cap:
   ```sql
   SELECT T.nom AS Tecnic, S.nom AS Supervisor
   FROM TECNICS T
   LEFT JOIN TECNICS S ON T.id_supervisor_fk = S.id_tecnic;
   ```

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Domini de les Regles de Transformació Relacional** | Aplica amb perfecció totes les regles (1:1, 1:N, M:N, atributs multivaluats i entitats dèbils) generant taules i claus impecables. | Aplica correctament la majoria de regles, amb xicotets dubtes en la tria de propagació de relacions 1:1 o atributs de relació. | Entén la conversió d'entitats i la propagació 1:N, però té dificultats per a resoldre relacions M:N o identificar claus compostes. | No sap com es passa d'un diagrama E-R a taules ni comprèn què és una clau forana. |
| **Integritat Referencial i Gestió de Nuls / Cascada** | Argumenta amb solidesa tècnica la selecció d'accions `CASCADE`, `RESTRICT` i `SET NULL` i justifica el compliment de la 1FN. | Identifica correctament el propòsit de la integritat referencial i sap aplicar la clàusula `RESTRICT` de forma habitual. | Coneix el concepte de clau estrangera però no sap anticipar les conseqüències d'un esborrat en cascada. | No distingeix entre clau primària i clau forana ni comprèn les restriccions d'integritat. |
| **Implementació SQL DDL i Validació en Laboratori** | Escriu i executa sentències SQL DDL lliures d'errors, creant taules, restriccions de clau i verificant errors d'integritat al terminal. | Implementa les taules i claus foranes en SQL amb èxit mitjançant assistent gràfic o codi amb xicotetes ajudes de sintaxi. | Aconsegueix crear les taules però oblida declarar algunes claus foranes o comet errades en els tipus de dades associats. | No és capaç d'escriure ni executar el codi SQL de creació de taules relacionals. |
