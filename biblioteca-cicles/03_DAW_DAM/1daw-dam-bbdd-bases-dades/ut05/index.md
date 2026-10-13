---
layout: default
title: "UD5: Manipulació de Dades i Transaccions (SQL DML i TCL) — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD5"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4: Disseny Físic"
next_url: "../ut06/index.html"
next_label: "UD6: Consultes SQL DQL ➡️"
---

# UD5: Manipulació de Dades i Transaccions (SQL DML i TCL)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-dml" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-aci" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-tcl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-iso" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db6)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">MANIPULACIÓ DE DADES (DML) I CONTROL TRANSACCIONAL ACID (TCL)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Operacions INSERT, UPDATE, DELETE, propietats ACID, gestió de COMMIT/ROLLBACK i nivells d'aïllament</text>

  <!-- Bloc 1: Operacions DML -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dml)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">✏️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Operacions DML</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Modificació de Dades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• INSERT INTO (individual/massiu)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• UPDATE amb clàusula WHERE</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• DELETE amb filtratge precís</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Clàusula RETURNING &amp; UPSERT</text>
  </g>

  <!-- Bloc 2: Propietats ACID -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-aci)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">💎</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model ACID</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Fiabilitat del Motor</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Atomicitat: Tot o res</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Consistència: Estat vàlid</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Aïllament: Sense interferència</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Durabilitat: Registre WAL</text>
  </g>

  <!-- Bloc 3: Control TCL -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-tcl)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llenguatge TCL</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Gestió Transaccional</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• BEGIN / START TRANSACTION</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• COMMIT: Confirmació al disc</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• ROLLBACK: Reversió total</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• SAVEPOINT: Punts de rescat</text>
  </g>

  <!-- Bloc 4: Concurrència & Aïllament -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-iso)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Concurrència</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Nivells d'Aïllament</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Read Committed (per defecte)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Repeatable Read &amp; Serializable</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Dirty / Phantom Reads</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Bloquejos &amp; Deadlocks</text>
  </g>
</svg>
</div>

Operacions del Llenguatge de Manipulació de Dades (SQL DML: INSERT, UPDATE, DELETE), clàusules avançades com RETURNING i ON CONFLICT, concepte de transacció, compliment estricte de propietats ACID, control de transaccions mitjançant TCL (COMMIT, ROLLBACK, SAVEPOINT) i anàlisi de concurrència i nivells d'aïllament.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **6.1** | **El Llenguatge de Manipulació de Dades (SQL DML)** | [**Llegir apartat →**](./ut0601.html) |
| **6.2** | **Conceptes de transacció i propietats ACID** | [**Llegir apartat →**](./ut0602.html) |
| **6.3** | **Control transaccional: COMMIT, ROLLBACK i SAVEPOINT** | [**Llegir apartat →**](#63-control-transaccional-commit-rollback-i-savepoint) |
| **6.4** | **Concurrència i fenòmens de lectura anòmala** | [**Llegir apartat →**](#64-concurrència-i-fenòmens-de-lectura-anòmala) |
| **6.5** | **Nivells d'aïllament ANSI SQL i gestió de bloquejos** | [**Llegir apartat →**](#65-nivells-daïllament-ansi-sql-i-gestió-de-bloquejos) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 5.1 El Llenguatge de Manipulació de Dades (SQL DML)

Mentre que el DDL defineix l'esquelet de la base de dades, el **Llenguatge de Manipulació de Dades (DML)** permet als desenvolupadors gestionar el contingut real de les taules: afegir noves files, modificar registres existents o esborrar dades.

### 1. Inserció de Dades (`INSERT INTO`)
Sintaxi per afegir noves tuples a una relació:

```sql
-- Inserció d'una fila especificant les columnes de destinació
INSERT INTO Productes (codi_prod, nom, preu, estoc)
VALUES ('PRD-101', 'Teclat Mecànic RGB', 79.99, 25);

-- Inserció massiva de múltiples tuples en una sola sentència atòmica
INSERT INTO Categories (id_cat, nom_cat) VALUES
    (1, 'Perifèrics'),
    (2, 'Monitors'),
    (3, 'Components');

-- Inserció a partir del resultat d'una consulta SELECT
INSERT INTO HistoricClients (id_client, nom, email)
SELECT id_client, nom, email 
FROM Clients 
WHERE data_baixa < '2025-01-01';
```

---

### 2. Modificació de Dades (`UPDATE`)
Permet canviar els valors d'una o més columnes en les files que compleixen una condició:

```sql
-- Incrementar el preu un 5% només per als productes de la categoria 1
UPDATE Productes
SET preu = preu * 1.05,
    data_actualitzacio = CURRENT_TIMESTAMP
WHERE id_cat = 1;
```

> [!CAUTION]
> Si s'executa un `UPDATE` sense la clàusula `WHERE`, **es modificaran absolutament totes les files de la taula**! En entorns de desenvolupament professional és recomanable provar primer el filtre amb una sentència `SELECT` equivalent abans de llançar l'actualització.

---

### 3. Eliminació de Dades (`DELETE`)
Esborra les files que verifiquen el predicat de filtratge:

```sql
DELETE FROM Productes
WHERE estoc = 0 AND actiu = FALSE;
```
- A diferència de `TRUNCATE TABLE`, l'ordre `DELETE` avalua restriccions d'integritat referencial fila a fila, dispara triggers associats i pot ser revertida completament mitjançant transaccions.

---

### 4. Extensions professionals DML: `RETURNING` i `UPSERT`
En el desenvolupament d'aplicacions web modernes (Node.js, Java Spring, Python FastAPI), recuperar la clau generada automàticament o gestionar duplicats és una necessitat diària:

```sql
-- 1. Clàusula RETURNING: retorna immediatament els valors generats pel SGBD
INSERT INTO Clients (nom, email) 
VALUES ('Marc Valls', 'marc@example.com')
RETURNING id_client, data_creacio;

-- 2. Clàusula ON CONFLICT / UPSERT (Insert or Update):
-- Si el correu ja existeix, actualitza el nom en lloc de donar un error
INSERT INTO Clients (nom, email) 
VALUES ('Marc Valls Nou', 'marc@example.com')
ON CONFLICT (email) 
DO UPDATE SET nom = EXCLUDED.nom;
```

---

## 5.2 Conceptes de transacció i propietats ACID

Una **transacció** és una seqüència lògica d'una o més operacions SQL executades com una **unitat indivisible de treball**. Un exemple clàssic és una transferència bancària entre dos comptes:
1. Restar 200 € del compte A (`UPDATE Comptes SET saldo = saldo - 200 WHERE id = 'A'`).
2. Sumar 200 € al compte B (`UPDATE Comptes SET saldo = saldo + 200 WHERE id = 'B'`).

Si el sistema s'apaga entre el pas 1 i el pas 2, els diners desapareixerien. Per evitar aquests desastres, tot SGBD relacional de grau professional garanteix les quatre **propietats ACID**:

### 1. Atomicitat (*Atomicity*)
- La transacció és una unitat indivisible: **o s'executen totes les seues operacions amb èxit o no s'aplica cap d'elles**.
- Si qualsevol instrucció del bloc falla o el servidor es reinicia, el motor reverteix automàticament totes les modificacions realitzades fins a eixe moment tornant a l'estat inicial.

### 2. Consistència (*Consistency*)
- La transacció condueix la base de dades des d'un estat vàlid i coherent a un altre estat igualment vàlid.
- Mai es permetrà trencar cap restricció d'integritat (`PRIMARY KEY`, `FOREIGN KEY`, `CHECK`, `NOT NULL`). Si una sentència viola una regla, tota la transacció queda avortada.

### 3. Aïllament (*Isolation*)
- Les modificacions realitzades per una transacció no són visibles per a cap altra transacció concurrent fins que la primera ha finalitzat i s'ha confirmat definitivament.
- Dues transaccions que s'executen en paral·lel no s'interfereixen mútuament.

### 4. Durabilitat (*Durability*)
- Un cop una transacció s'ha confirmat amb èxit (`COMMIT`), els seus canvis queden gravats de forma **permanent i indestructible** a l'emmagatzematge físic, sobrevivint fins i tot a una fallada sobtada de corrent elèctric.
- El SGBD ho aconsegueix mitjançant el mecanisme d'escriptura prèvia al registre de transaccions (**WAL - *Write-Ahead Logging***).

---

## 5.3 Control transaccional: COMMIT, ROLLBACK i SAVEPOINT

El **Llenguatge de Control de Transaccions (TCL)** permet als desenvolupadors delimitar manualment l'abast de les transaccions:

```sql
-- 1. Inici de la transacció
BEGIN TRANSACTION; -- O simplement 'BEGIN;'

-- 2. Primer canvi
UPDATE Comptes SET saldo = saldo - 200 WHERE id_compte = 101;

-- 3. Punt de control intermedi
SAVEPOINT abans_ingres;

-- 4. Segon canvi
UPDATE Comptes SET saldo = saldo + 200 WHERE id_compte = 999; -- Compte inexistent!

-- Si detectem una anomalia al pas 4, podem desfer només fins al punt de control:
ROLLBACK TO SAVEPOINT abans_ingres;

-- Finalització i confirmació definitiva dels canvis vàlids:
COMMIT;
```

- **`BEGIN` / `START TRANSACTION`:** Inicia el bloc transaccional i desactiva el mode d'autoconfirmació (*Autocommit*).
- **`COMMIT`:** Valida i aplica definitivament totes les operacions al disc. La transacció finalitza amb èxit.
- **`ROLLBACK`:** Cancela i descarta completament totes les operacions executades des del `BEGIN`, deixant les taules com si res haguera passat.
- **`SAVEPOINT nom_punt`:** Marca una fita intermèdia dins de la transacció.
- **`ROLLBACK TO SAVEPOINT nom_punt`:** Reverteix les sentències posteriors a eixa fita sense anul·lar les operacions prèvies.

---

## 5.4 Concurrència i fenòmens de lectura anòmala

Quan centenars d'usuaris o serveis web interactuen alhora amb la mateixa base de dades, poden produir-se tres anomalies de lectura clàssiques si l'aïllament no és adequat:

### 1. Lectura Bruta (*Dirty Read*)
- La transacció $T_1$ modifica una fila però encara no fa `COMMIT`.
- La transacció $T_2$ llegeix eixa mateixa fila i utilitza el valor no confirmat per prendre decisions.
- Posteriorment, $T_1$ falla i executa un `ROLLBACK`.
- *Conseqüència:* $T_2$ ha treballat amb dades que realment mai van existir a la base de dades!

### 2. Lectura No Repetible (*Non-Repeatable Read*)
- La transacció $T_1$ llegeix una fila (ex. el saldo d'un client: 1.000 €).
- La transacció concurrent $T_2$ modifica eixe mateix saldo a 500 € i fa `COMMIT`.
- $T_1$ torna a llegir la mateixa fila i descobreix que el valor ha canviat dins de la seua pròpia transacció.

### 3. Lectura Fantasma (*Phantom Read*)
- La transacció $T_1$ fa una cerca per rang (ex. `SELECT * FROM Clients WHERE edat > 65`, trobant 10 files).
- La transacció $T_2$ insereix un nou client de 70 anys i fa `COMMIT`.
- $T_1$ repeteix la mateixa consulta de rang i ara apareixen 11 files (la nova fila ha aparegut com un "fantasma").

---

## 5.5 Nivells d'aïllament ANSI SQL i gestió de bloquejos

L'estàndard ANSI SQL defineix **quatre nivells d'aïllament** que equilibren la seguretat de les dades enfront del rendiment de concurrència del sistema:

| Nivell d'Aïllament | Permet Lectura Bruta? | Permet Lectura No Repetible? | Permet Lectura Fantasma? | Rendiment Relatiu |
| :--- | :---: | :---: | :---: | :---: |
| **`READ UNCOMMITTED`** | **Sí** | **Sí** | **Sí** | Màxim (sense bloquejos) |
| **`READ COMMITTED`** | **No** | **Sí** | **Sí** | Alt (*Per defecte en PostgreSQL*) |
| **`REPEATABLE READ`** | **No** | **No** | **Sí** (en SQL pur; No en PG MVCC) | Mitjà |
| **`SERIALIZABLE`** | **No** | **No** | **No** | Mínim (bloquejos estrictes) |

Per establir el nivell d'aïllament desitjat en una sessió:
```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---

### Bloquejos (*Locks*) i Interbloquejos (*Deadlocks*)
Per garantir l'aïllament, el motor empra mecanismes de bloqueig:
- **Bloqueig Compartit (*Shared Lock*):** Permet a múltiples transaccions llegir la mateixa fila simultàniament, però impedeix que ningú la modifique.
- **Bloqueig Exclusiu (*Exclusive Lock*):** Adquirit per operacions `UPDATE` o `DELETE` (o mitjançant `SELECT ... FOR UPDATE`). Només una transacció pot accedir a la fila; qualsevol altra queda congelada en espera.
- **Interbloqueig (*Deadlock*):**
  - Es produeix quan dues transaccions s'esperen mútuament en cercle:
    - $T_1$ té bloquejada la fila A i sol·licita la fila B.
    - $T_2$ té bloquejada la fila B i sol·licita la fila A.
  - El motor SGBD disposa d'un **detector de cicles de deadlock** que detecta la situació, avorta una de les dues transaccions llançant un error i permet que l'altra continue.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Traçat formal d'una transacció bancària amb SAVEPOINT
Es disposa d'una taula `Comptes(id_compte, titular, saldo)`.
- Estat inicial:
  - Compte 1: $1.200\text{ €}$
  - Compte 2: $400\text{ €}$
  - Compte 3: $800\text{ €}$

Analitza el següent bloc transaccional executat per un sistema de transferències:
```sql
BEGIN;
UPDATE Comptes SET saldo = saldo - 300 WHERE id_compte = 1;
UPDATE Comptes SET saldo = saldo + 300 WHERE id_compte = 2;
SAVEPOINT transfer_1_completa;

UPDATE Comptes SET saldo = saldo - 500 WHERE id_compte = 2;
UPDATE Comptes SET saldo = saldo + 500 WHERE id_compte = 3;
SAVEPOINT transfer_2_completa;

UPDATE Comptes SET saldo = saldo - 1000 WHERE id_compte = 3; -- Saldo insuficient!
ROLLBACK TO SAVEPOINT transfer_1_completa;
COMMIT;
```

1. Fes una taula de traçat mostrant el saldo exacte dels tres comptes després de cada instrucció.
2. Quin és el saldo final de cadascun dels tres comptes després d'executar el `COMMIT`?
3. S'ha transferit alguna quantitat al Compte 3? Justifica la resposta basant-te en el funcionament del `ROLLBACK TO SAVEPOINT`.

#### Exercici 2: Anàlisi d'anomalies de concurrència en un sistema de venda d'entrades
Dues transaccions $T_A$ i $T_B$ s'executen simultàniament sobre una taula `Esdeveniments(id, entrades_lliures)` on `entrades_lliures = 1`:
- $T_A$ (Nivell `READ COMMITTED`): Consulta entrades lliures $\to$ llegeix 1.
- $T_B$ (Nivell `READ COMMITTED`): Consulta entrades lliures $\to$ llegeix 1.
- $T_A$: Executa `UPDATE Esdeveniments SET entrades_lliures = 0 WHERE id = 1;` i fa `COMMIT`.
- $T_B$: Executa el mateix `UPDATE` i confirma.

1. Quin problema de concurrència s'ha produït (venda duplicada de l'última entrada)?
2. Com resol aquest problema l'ús de la sentència `SELECT ... FOR UPDATE` (bloqueig pessimista de fila) des del moment en què es fa la lectura?

#### Exercici 3: Diagnòstic d'un cicle d'interbloqueig (*Deadlock*)
Dues aplicacions web $A_1$ i $A_2$ gestionen comandes i estocs:
- Instant $t_1$: $A_1$ inicia transacció i bloqueja el producte P1 (`UPDATE Productes SET estoc = estoc - 1 WHERE id = 'P1'`).
- Instant $t_2$: $A_2$ inicia transacció i bloqueja el producte P2 (`UPDATE Productes SET estoc = estoc - 2 WHERE id = 'P2'`).
- Instant $t_3$: $A_1$ intenta actualitzar P2 i queda bloquejada esperant que $A_2$ allibere el recurs.
- Instant $t_4$: $A_2$ intenta actualitzar P1.

1. Dibuixa el graf d'espera de recursos (*Wait-For Graph*) resultant.
2. Com reaccionarà el motor SGBD automàticament davant d'aquest cicle?
3. Quina regla de bones pràctiques en desenvolupament de programari permet evitar deadlocks per complet (pista: ordre consistent d'adquisició de recursos)?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Experimentació d'aïllament amb dues sessions SQL paral·leles
- **Objectiu:** Observar el funcionament del nivell `READ COMMITTED` i comprovar que les dades no consolidades són invisibles a altres connexions.
- **Procediment de taller:**
  1. Crea una taula de proves `Articles(id INT PRIMARY KEY, nom VARCHAR(50), preu NUMERIC(6,2));` i insereix `(1, 'Llibre SQL', 20.00)`.
  2. Obre **dos terminals de consola independents** connectats a la mateixa base de dades (**Sessió A** i **Sessió B**).
  3. A la **Sessió A**:
     ```sql
     BEGIN;
     UPDATE Articles SET preu = 35.00 WHERE id = 1;
     SELECT * FROM Articles WHERE id = 1; -- Mostra 35.00
     ```
  4. A la **Sessió B** (sense fer res a la sessió A):
     ```sql
     SELECT * FROM Articles WHERE id = 1; -- Mostra 20.00!
     ```
  5. Comprova que la sessió B continua veient el valor antic de 20.00 € (propietat d'Aïllament).
  6. A la **Sessió A**, executa `COMMIT;`.
  7. Torna a la **Sessió B** i repeteix el `SELECT`: comprova que ara el nou preu de 35.00 € ja és visible de forma instantània.

#### Repte 2: Comprovació de rollback davant de violació d'integritat
- **Objectiu:** Demostrar l'Atomicitat de les transaccions davant fallades de restricció.
- **Procediment de taller:**
  1. Afegeix una restricció `CHECK (preu > 0)` a la taula `Articles`.
  2. Executa el següent bloc transaccional amb un error forçat a la segona ordre:
     ```sql
     BEGIN;
     INSERT INTO Articles VALUES (2, 'Quadern', 5.00);
     INSERT INTO Articles VALUES (3, 'Bolígraf', -1.50); -- Falla la restricció CHECK!
     COMMIT;
     ```
  3. Comprova que el SGBD avorta la transacció (`ERROR: check constraint "chk_preu"`).
  4. Consulta la taula `SELECT * FROM Articles;`: verifica que l'article 2 ('Quadern') **no s'ha inserit**, complint l'atomicitat ("tot o res").

#### Repte 3: Bloqueig exclusiu de fila amb `SELECT ... FOR UPDATE`
- **Objectiu:** Protegir un registre contra modificacions concurrents durant un procés de reserva.
- **Procediment de taller:**
  1. A la **Sessió A**, bloqueja una fila per a lectura/escriptura:
     ```sql
     BEGIN;
     SELECT * FROM Articles WHERE id = 1 FOR UPDATE;
     ```
  2. A la **Sessió B**, intenta actualitzar eixa mateixa fila:
     ```sql
     UPDATE Articles SET preu = 40.00 WHERE id = 1;
     ```
  3. Observa com la Sessió B es queda congelada en espera activa (*Waiting for lock*).
  4. A la **Sessió A**, executa `COMMIT;`: observa com la Sessió B es desbloqueja a l'instant i finalitza la seua actualització.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He utilitzat comandes DML bàsiques (`INSERT`, `UPDATE`, `DELETE`) amb clàusules de filtratge segures.
- [ ] He aplicat la clàusula `RETURNING` per obtenir claus primàries generades en operacions `INSERT`.
- [ ] He gestionat conflictes de clau primària utilitzant `ON CONFLICT DO UPDATE` (UPSERT).
- [ ] He explicat les quatre propietats ACID (Atomicitat, Consistència, Aïllament i Durabilitat).
- [ ] He controlat transaccions mitjançant comandes `BEGIN`, `COMMIT` i `ROLLBACK`.
- [ ] He creat punts de rescat amb `SAVEPOINT` per executar reversions parcials.
- [ ] He diferenciat els fenòmens de lectura anòmala (Dirty Read, Non-Repeatable Read, Phantom Read) i els nivells d'aïllament SQL.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Operacions DML Avançades** | Domina sentències DML amb filtres complexos, clàusules RETURNING i operacions UPSERT (ON CONFLICT) sense riscos d'esborrat massiu. | Executa insercions, actualitzacions i eliminacions amb clàusula WHERE de manera segura. | Utilitza INSERT i UPDATE bàsics però requereix recordatoris per no ometre el WHERE en esborrats. | Executa sentències UPDATE o DELETE sense WHERE provocant la pèrdua o corrupció massiva de dades. |
| **Model Transaccional ACID** | Justifica detalladament com el motor SGBD garanteix cadascuna de les propietats ACID mitjançant fitxers WAL, bloquejos i aïllament. | Explica el concepte d'atomicitat ("tot o res") i durabilitat en cas de caiguda del servidor. | Recorda que una transacció agrupa operacions però té dubtes sobre com es garanteix l'aïllament. | Desconeix el significat de les sigles ACID o creu que cada ordre SQL és independent per defecte. |
| **Control Transaccional (TCL)** | Dissenya fluxos transaccionals complexos amb gestió d'errors, punts de control SAVEPOINT i reversions selectives impecables. | Utilitza `BEGIN`, `COMMIT` i `ROLLBACK` per controlar canvis i recuperar-se de fallades. | Aplica COMMIT i ROLLBACK bàsics però confon el funcionament dels punts de rescat SAVEPOINT. | No utilitza transaccions i deixa operacions a mitges davant fallades de sistema. |
| **Concurrència i Nivells d'Aïllament** | Analitza i preveu anomalies de concurrència (Dirty Read, Non-Repeatable Read, Phantom Read) i configura el nivell d'aïllament idoni per al negoci. | Distingeix el nivell Read Committed de Serializable i sap quan una transacció veu canvis aliens. | Reconeix que diversos usuaris poden accedir alhora però desconeix els fenòmens de lectura fantasma. | Creu que totes les connexions veuen les dades no confirmades d'altres usuaris sense cap aïllament. |
| **Gestió de Bloquejos i Deadlocks** | Implementa bloquejos pessimistes (`FOR UPDATE`), dissenya ordres consistents d'accés per evitar deadlocks i interpreta logs de concurrència. | Observa i gestiona bloquejos de files entre múltiples sessions de terminal concurrents. | Comprova que una ordre pot quedar en espera d'una altra però desconeix què és un interbloqueig (deadlock). | Provoca bloquejos infinits o no sap com desbloquejar una sessió aturada. |

