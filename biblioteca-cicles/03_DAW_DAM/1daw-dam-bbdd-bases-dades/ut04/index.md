---
layout: default
title: "UD4: Disseny Físic i Llenguatge de Definició i Control de Dades (SQL DDL i DCL) — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD4"
prev_url: "../ut03/index.html"
prev_label: "⬅️ UD3: Disseny Lògic"
next_url: "../ut05/index.html"
next_label: "UD5: Manipulació DML i TCL ➡️"
---

# UD4: Disseny Físic i Llenguatge de Definició i Control de Dades (SQL DDL i DCL)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-typ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ddl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-obj" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-dcl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db5)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DISSENY FÍSIC, DEFINICIÓ D'ESTRUCTURES (DDL) I SEGURETAT (DCL)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Tipus de dades SQL, restriccions d'integritat, alteració de taules, vistes, índexs B-Tree i control de privilegis</text>

  <!-- Bloc 1: Tipus de Dades -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-typ)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tipus de Dades</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Dominis SQL</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Numèrics: INT, NUMERIC</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Text: VARCHAR, TEXT</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Temps: DATE, TIMESTAMP</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• JSONB, UUID &amp; Booleans</text>
  </g>

  <!-- Bloc 2: Llenguatge DDL -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ddl)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🛠️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llenguatge DDL</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Creació &amp; Alteració</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• CREATE TABLE &amp; DROP</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Restriccions PK, FK, UNIQUE</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Regles CHECK &amp; NOT NULL</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• ALTER TABLE &amp; TRUNCATE</text>
  </g>

  <!-- Bloc 3: Vistes i Índexs -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-obj)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📑</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Vistes &amp; Índexs</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Estructures Físiques</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• CREATE VIEW estàndard</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Vistes Materialitzades</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Índexs B-Tree per a cerca</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Seqüències i IDENTITY</text>
  </g>

  <!-- Bloc 4: Seguretat DCL -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dcl)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Seguretat DCL</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Usuaris &amp; Privilegis</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Gestió d'usuaris i rols</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Permisos amb GRANT</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Revocació amb REVOKE</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Seguretat per fila (RLS)</text>
  </g>
</svg>
</div>

El disseny físic en sistemes gestors de bases de dades relacionals (RDBMS), tipus de dades SQL i optimització d'emmagatzematge, llenguatge de definició de dades (DDL), definició i alteració de taules amb restriccions d'integritat, vistes, índexs d'accés, i control d'accés i privilegis mitjançant DCL.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **5.1** | **El disseny físic i tipus de dades en l'estàndard SQL** | [**Llegir apartat →**](./ut0501.html) |
| **5.2** | **Llenguatge DDL: creació de taules i restriccions d'integritat** | [**Llegir apartat →**](./ut0502.html) |
| **5.3** | **Modificació d'estructures: ALTER TABLE, DROP i TRUNCATE** | [**Llegir apartat →**](#53-modificació-destructures-alter-table-drop-i-truncate) |
| **5.4** | **Objectes de base de dades: vistes, índexs i seqüències** | [**Llegir apartat →**](#54-objectes-de-base-de-dades-vistes-índexs-i-seqüències) |
| **5.5** | **Llenguatge DCL: gestió d'usuaris, rols i privilegis** | [**Llegir apartat →**](#55-llenguatge-dcl-gestió-dusuaris-rols-i-privilegis) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 4.1 El disseny físic i tipus de dades en l'estàndard SQL

El **disseny físic** adapta l'esquema lògic normalitzat a les característiques del maquinari i del motor SGBD concret (com PostgreSQL o MySQL/MariaDB). L'objectiu principal és aconseguir el màxim rendiment en temps de resposta i eficiència d'emmagatzematge.

### Tipus de dades principals en SQL
L'elecció correcta del tipus de dades de cada columna és essencial per evitar malbaratar memòria RAM i espai en disc:

1. **Tipus Numèrics:**
   - `SMALLINT`: Enter de 2 bytes (rang: $-32.768$ a $+32.767$).
   - `INTEGER` / `INT`: Enter de 4 bytes (rang: $\approx \pm 2{,}14 \times 10^9$).
   - `BIGINT`: Enter de 8 bytes (per a identificadors massius o comptadors de trànsit web).
   - `NUMERIC(p, s)` / `DECIMAL(p, s)`: Numèric exacte de coma fixa amb $p$ dígits de precisió total i $s$ dígits decimals. **Obligatori per a valors monetaris i comptabilitat** per evitar errors d'arrodoniment binari.
   - `REAL` / `DOUBLE PRECISION`: Coma flotant inexacta per a càlculs científics.
2. **Cadenes de Caràcters:**
   - `CHAR(n)`: Cadena de longitud fixa. Si s'emmagatzema un text més curt, s'omple amb espais en blanc a la dreta (ideal per a codis fixes com DNI de 9 caràcters o codis ISO).
   - `VARCHAR(n)`: Cadena de longitud variable amb límit màxim de $n$ caràcters. Ocupa només la mida real del text més 1 o 2 bytes de capçalera.
   - `TEXT`: Cadena de text de longitud arbitrària sense límit pràctic predefinit.
3. **Tipus Temporals:**
   - `DATE`: Data (any, mes, dia).
   - `TIME`: Hora del dia (hores, minuts, segons, microsegons).
   - `TIMESTAMP`: Data i hora combinades.
   - `TIMESTAMP WITH TIME ZONE` (`TIMESTAMPTZ`): Guarda l'instant exacte convertit a UTC. L'estàndard professional per a aplicacions web globals.
4. **Tipus Booleans i Semiestructurats:**
   - `BOOLEAN`: Valors `TRUE`, `FALSE` o `NULL`.
   - `JSON` / `JSONB`: Permet emmagatzemar documents JSON estructurats. En PostgreSQL, `JSONB` emmagatzema les dades en format binari descompost permetent indexació interna d'alta velocitat (*GIN*).
   - `UUID`: Identificador únic universal de 128 bits (ideal per a claus primàries distribuïdes en microserveis).

---

## 4.2 Llenguatge DDL: creació de taules i restriccions d'integritat

El **Llenguatge de Definició de Dades (DDL)** permet crear, modificar i esborrar les estructures que allotgen la informació.

### Creació de taules (`CREATE TABLE`)
Sintaxi general amb restriccions a nivell de columna i de taula:

```sql
CREATE TABLE Empleats (
    id_emp INT GENERATED ALWAYS AS IDENTITY,
    nif CHAR(9) NOT NULL,
    nom VARCHAR(60) NOT NULL,
    email VARCHAR(120) NOT NULL,
    data_contracte DATE DEFAULT CURRENT_DATE,
    salari NUMERIC(8,2) NOT NULL,
    id_dept INT,
    
    -- Restriccions d'integritat a nivell de taula
    CONSTRAINT pk_empleats PRIMARY KEY (id_emp),
    CONSTRAINT uq_empleats_nif UNIQUE (nif),
    CONSTRAINT uq_empleats_email UNIQUE (email),
    CONSTRAINT chk_salari_positiu CHECK (salari > 1000.00),
    CONSTRAINT fk_empleats_dept FOREIGN KEY (id_dept)
        REFERENCES Departaments(id_dept)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
```

### Tipologia de restriccions d'integritat en DDL:
- **`PRIMARY KEY`:** Garanteix que la columna (o combinació de columnes) identifica unívocament cada fila i no conté valors nuls (`UNIQUE NOT NULL`). Crea automàticament un índex B-Tree únic subjacent.
- **`FOREIGN KEY ... REFERENCES`:** Assegura la integritat referencial amb la taula mestre.
  - Opcions d'esborrat/actualització: `CASCADE`, `RESTRICT`, `NO ACTION`, `SET NULL`, `SET DEFAULT`.
- **`UNIQUE`:** Assegura que tots els valors d'una columna o grup de columnes són diferents entre si (permet múltiples valors `NULL` excepte en restriccions específiqament configurades).
- **`NOT NULL`:** Prohibeix explícitament que la columna continga valors nuls.
- **`CHECK (condició)`:** Avalua una expressió lògica que ha de complir-se per a cada fila inserida o actualitzada.
- **`DEFAULT expressió`:** Assigna un valor automàtic si la instrucció d'inserció omet la columna.

---

## 4.3 Modificació d'estructures: ALTER TABLE, DROP i TRUNCATE

Quan les necessitats del negoci evolucionen, és necessari alterar l'esquema existent sense perdre les dades ja emmagatzemades.

### Ordre `ALTER TABLE`
Permet afegir, modificar o eliminar elements d'una taula:

```sql
-- 1. Afegir una nova columna amb valor per defecte
ALTER TABLE Empleats ADD COLUMN telefon VARCHAR(15);

-- 2. Eliminar una columna existent
ALTER TABLE Empleats DROP COLUMN telefon;

-- 3. Canviar el tipus de dades d'una columna
ALTER TABLE Empleats ALTER COLUMN nom TYPE VARCHAR(100);

-- 4. Afegir una nova restricció CHECK a una taula poblada
ALTER TABLE Empleats ADD CONSTRAINT chk_email_arroba CHECK (email LIKE '%@%');

-- 5. Eliminar una restricció existent
ALTER TABLE Empleats DROP CONSTRAINT chk_email_arroba;
```

---

### Diferència fonamental: `DROP TABLE` vs `TRUNCATE TABLE` vs `DELETE`
| Comanda | Tipus de Llenguatge | Què fa exactament | Velocitat d'Execució | Allibera Espai de Disc? | Es pot fer ROLLBACK? |
| :--- | :---: | :--- | :---: | :---: | :---: |
| **`DELETE FROM taula`** | DML | Esborra les files una a una registrant cada eliminació al log de transaccions | Lenta en taules grans | No immediatament (requereix VACUUM) | Sí |
| **`TRUNCATE TABLE`** | DDL | Buida totes les files desassignant directament les pàgines de dades | Ultra-ràpida | Sí, a l'instant | Sí (en PostgreSQL) / No (MySQL) |
| **`DROP TABLE`** | DDL | Elimina completament les dades i l'estructura de la taula del catàleg | Immediata | Sí | Sí (en transacció DDL) |

---

## 4.4 Objectes de base de dades: vistes, índexs i seqüències

A més de les taules bàsiques, un disseny físic professional empra altres estructures d'accés:

### 1. Vistes (`CREATE VIEW`)
Una **vista** és una consulta SQL guardada al diccionari de dades que es comporta com una taula virtual:
- No emmagatzema dades pròpies (excepte les vistes materialitzades); s'executa dinàmicament cada vegada que és consultada.
- **Objectius:**
  - **Seguretat:** Ocultar columnes sensibles a certs usuaris (ex. mostrar nom i departament però amagar el salari).
  - **Simplicitat:** Simplificar consultes complexes amb múltiples `JOIN`s perquè els desenvolupadors només facen `SELECT * FROM nom_vista`.

```sql
CREATE VIEW v_empleats_departament AS
SELECT e.id_emp, e.nom, e.email, d.nom_dept
FROM Empleats e
JOIN Departaments d ON e.id_dept = d.id_dept;
```

### 2. Vistes Materialitzades (`CREATE MATERIALIZED VIEW`)
Emmagatzema físicament a disc el resultat d'una consulta complexa:
- Ideal per a taulers de control i informes d'anàlisi de dades (*Business Intelligence*).
- Requereix refrescar-se periòdicament: `REFRESH MATERIALIZED VIEW v_informe_vendes;`.

---

### 3. Índexs (`CREATE INDEX`)
Estructures de dades auxiliars (habitualment **arbres B+Tree**) que permeten trobar files que compleixen un criteri de cerca en temps logarítmic $O(\log N)$ sense recórrer tota la taula (*Sequential Scan* $O(N)$):

```sql
CREATE INDEX idx_empleats_email ON Empleats(email);
```
- **El cost dels índexs:** Cada índex ocupa espai addicional de memòria i alenteix les operacions d'escriptura (`INSERT`, `UPDATE`, `DELETE`), ja que cada canvi obliga a actualitzar l'arbre de l'índex.

---

## 4.5 Llenguatge DCL: gestió d'usuaris, rols i privilegis

El **Llenguatge de Control de Dades (DCL)** regula quins usuaris tenen autorització per executar operacions sobre els objectes de la base de dades.

### Concepte d'Usuari i Rol
- **Usuari:** Identitat amb credencials d'autenticació (nom i contrasenya) que es connecta al SGBD.
- **Rol:** Conjunt de privilegis agrupats. Els usuaris s'associen a rols per simplificar l'administració (RBAC - *Role-Based Access Control*).

```sql
-- 1. Creació d'un rol d'aplicació i un usuari
CREATE ROLE rol_desenvolupador;
CREATE USER usuari_web WITH PASSWORD 'clau_segura_2026';

-- 2. Concessió de privilegis amb GRANT
GRANT CONNECT ON DATABASE botiga TO rol_desenvolupador;
GRANT SELECT, INSERT, UPDATE ON TABLE Empleats TO rol_desenvolupador;

-- 3. Assignació del rol a l'usuari
GRANT rol_desenvolupador TO usuari_web;

-- 4. Revocació de privilegis amb REVOKE
REVOKE UPDATE ON TABLE Empleats FROM rol_desenvolupador;
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Estimació de consum físic d'emmagatzematge de dades
Una taula `Transaccions` conté $1.000.000$ de registres amb la següent definició de columnes:
- `id_transacció`: `BIGINT` ($8\text{ bytes}$).
- `data_hora`: `TIMESTAMP` ($8\text{ bytes}$).
- `import`: `NUMERIC(10,2)` ($8\text{ bytes}$).
- `codi_estat`: `CHAR(2)` ($2\text{ bytes}$).
- `descripcio`: `VARCHAR(50)` (longitud mitjana de caràcters reals: $24\text{ bytes} + 1\text{ byte}$ de longitud).
- Sobrecàrrega interna de capçalera de fila en PostgreSQL (*Tuple Header*): $24\text{ bytes}$.

1. Calcula la mida mitjana estimada d'una única fila en disc:
   $$\text{Mida Fila} = 8 + 8 + 8 + 2 + 25 + 24 = \dots \text{ bytes}$$
2. Calcula l'espai brut requerit per a la taula completa d'$1.000.000$ de files en megabytes:
   $$V_{\text{taula}} = \frac{1.000.000 \times \text{Mida Fila}}{1.024 \times 1.024} = \dots \text{ MB}$$
3. Si la taula té un índex B-Tree sobre `id_transacció` ($16\text{ bytes}$ per entrada d'índex) i un altre sobre `data_hora`, quants megabytes addicionals d'índexs cal preveure?

#### Exercici 2: Disseny d'una matriu de seguretat RBAC
Dissenya la política de permisos per a una empresa que gestiona les taules `Clients`, `Factures` i `SousEmpleats`:
- Perfil 1: `Rol_Comptable` (accés complet de lectura i escriptura a Factures i Clients; lectura de Sous).
- Perfil 2: `Rol_AtencioClient` (lectura de Clients i Factures; accés prohibit a Sous).
- Perfil 3: `Rol_Auditor` (només lectura `SELECT` sobre totes les taules).

1. Confecciona la matriu de permisos (Taula vs Rol amb permisos `SELECT`, `INSERT`, `UPDATE`, `DELETE`).
2. Escriu les sentències SQL `GRANT` exactes per configurar el perfil `Rol_AtencioClient`.

#### Exercici 3: Anàlisi de cost computacional d'índexs
1. Per què una consulta `SELECT * FROM Usuaris WHERE email = 'test@example.com'` passa de trigar $250\text{ ms}$ a menys d'$1\text{ ms}$ en afegir un índex B-Tree sobre `email`?
2. Si una taula rep $2.000$ insercions per segon procedents de dispositius IoT, per què no és recomanable crear índexs sobre cada una de les columnes de telemetria?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Script DDL complet d'un sistema acadèmic
- **Objectiu:** Crear una base de dades amb claus primàries, claus foranes amb regles d'acció i restriccions `CHECK` complexes.
- **Procediment de taller:**
  1. Obre el client SQL i crea les taules:
     ```sql
     CREATE TABLE Cursos (
         codi_curs VARCHAR(8) PRIMARY KEY,
         nom_curs VARCHAR(100) NOT NULL,
         hores INT CHECK (hores BETWEEN 10 AND 500)
     );

     CREATE TABLE Alumnes (
         nia INT PRIMARY KEY,
         nif CHAR(9) UNIQUE NOT NULL,
         nom VARCHAR(80) NOT NULL,
         data_naixement DATE NOT NULL,
         codi_curs VARCHAR(8) NOT NULL,
         CONSTRAINT fk_alumnes_curs FOREIGN KEY (codi_curs)
             REFERENCES Cursos(codi_curs)
             ON DELETE RESTRICT ON UPDATE CASCADE
     );
     ```
  2. Afegeix mitjançant `ALTER TABLE` una restricció per assegurar que cap alumne puga tindre una data de naixement posterior a la data actual:
     ```sql
     ALTER TABLE Alumnes ADD CONSTRAINT chk_data_valida CHECK (data_naixement < CURRENT_DATE);
     ```
  3. Insereix dades vàlides i verifica que les restriccions bloquegen intents d'inserir hores negatives o dates futures.

#### Repte 2: Creació de vistes segures i vistes materialitzades
- **Objectiu:** Crear una vista de seguretat per amagar dades sensibles i una vista materialitzada amb refresc de dades.
- **Procediment de taller:**
  1. Crea la vista `v_alumnes_resum` que només mostre `nia`, `nom` i el `nom_curs` (ocultant el NIF i la data de naixement).
  2. Crea una vista materialitzada que calcule el nombre d'alumnes matriculats per cada curs:
     ```sql
     CREATE MATERIALIZED VIEW v_estadistiques_cursos AS
     SELECT c.nom_curs, COUNT(a.nia) AS total_matriculats
     FROM Cursos c
     LEFT JOIN Alumnes a ON c.codi_curs = a.codi_curs
     GROUP BY c.nom_curs;
     ```
  3. Insereix un nou alumne i comprova que la vista materialitzada no canvia fins que s'executa l'ordre `REFRESH MATERIALIZED VIEW v_estadistiques_cursos;`.

#### Repte 3: Gestió d'usuaris i revocació de privilegis en consola
- **Objectiu:** Crear un usuari d'aplicació i comprovar el bloqueig de permisos no autoritzats.
- **Procediment de taller:**
  1. Crea un usuari `operari_consulta` protegit amb contrasenya:
     ```sql
     CREATE USER operari_consulta WITH PASSWORD 'consulta2026';
     GRANT SELECT ON TABLE Cursos TO operari_consulta;
     ```
  2. Obre una segona sessió de terminal connectant-te amb aquest usuari.
  3. Executa una consulta de lectura: `SELECT * FROM Cursos;` (comprova que funciona).
  4. Intenta eliminar un registre: `DELETE FROM Cursos;` i comprova el missatge d'error de denegació de privilegis: `permission denied for table Cursos`.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He seleccionat els tipus de dades adequats en SQL evitant malbaratar espai de disc.
- [ ] He utilitzat `NUMERIC` per a valors monetaris garantint precisió decimal exacta.
- [ ] He definit claus primàries simples i compostes mitjançant `PRIMARY KEY`.
- [ ] He configurat claus foranes amb regles d'esborrat `CASCADE`, `RESTRICT` i `SET NULL`.
- [ ] He afegit restriccions `UNIQUE`, `NOT NULL`, `DEFAULT` i `CHECK`.
- [ ] He modificat estructures de taules existents amb comandes `ALTER TABLE`.
- [ ] He creat vistes estàndard de seguretat i he assignat privilegis amb `GRANT` i `REVOKE`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Tipus de Dades i Dimensionament** | Selecciona els tipus de dades SQL òptims per a cada domini, utilitzant tipus exactes i calculant l'impacte en bytes en memòria i disc. | Tria tipus de dades correctes per a textos, nombres i dates sense errors greus de dimensionament. | Utilitza tipus de dades bàsics però abusa de tipus sobredimensionats (com VARCHAR(255) per a tot). | Confon tipus de dades incompatibles o utilitza coma flotant per a dades comptables. |
| **Sintaxi DDL i Restriccions d'Integritat** | Construeix scripts DDL complets amb restriccions CHECK avançades, valors per defecte i regles de clau forana en cascada impecables. | Crea taules amb claus primàries, foranes i restriccions NOT NULL i UNIQUE funcionals. | Crea taules senzilles però requereix assistència per definir les restriccions d'integritat. | Errors constants de sintaxi en `CREATE TABLE` o omet la definició de claus. |
| **Alteració d'Estructures (ALTER TABLE)** | Modifica esquemes en producció amb `ALTER TABLE` (afegir/eliminar columnes i restriccions) assegurant la integritat de les dades existents. | Utilitza `ALTER TABLE` per afegir nous camps i canviar tipus de dades amb èxit. | Executa canvis bàsics amb suport de manuals però té dificultats per afegir noves claus foranes. | Incapaç de modificar una taula existent; opta per esborrar-la (`DROP`) perdent totes les dades. |
| **Vistes i Índexs Físics** | Implementa vistes de seguretat, vistes materialitzades i avalua l'impacte d'índexs B-Tree en consultes vs escriptures. | Crea vistes senzilles per simplificar consultes i entén la funció dels índexs de cerca. | Sap crear una vista estàndard però desconeix com funciona un índex físic de disc. | No comprèn el concepte de vista virtual o confon una vista amb una taula física. |
| **Control de Seguretat DCL (GRANT/REVOKE)** | Dissenya esquemes de seguretat basats en rols (RBAC), atorga privilegis mínims necessaris i audita accessos no autoritzats. | Crea usuaris i rols i concedeix permisos de lectura o escriptura mitjançant `GRANT`. | Assigna permisos de forma directa a usuaris però sense utilitzar rols agrupats. | Deixa tots els usuaris amb privilegis de superusuari (root/postgres) sense cap control de seguretat. |

