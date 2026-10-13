---
layout: default
title: "UD6: Consultes Avançades a Bases de Dades (SQL DQL) — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD7"
next_url: "../ut07/index.html"
next_label: "UD7: ProgramaciÃ³ PL/SQL âž¡ï¸"
---

# UD6: Consultes Avançades a Bases de Dades (SQL DQL)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-sel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-joi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-grp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sub" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db7)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">CONSULTES AVANÇADES EN SQL (DQL - DATA QUERY LANGUAGE)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Filtratge WHERE, combinacions JOIN (Inner/Outer/Self), agregacions GROUP BY/HAVING i subconsultes</text>

  <!-- Bloc 1: Projecció & Filtre -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sel)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔍</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">SELECT &amp; Filtre</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Ordre Lògic SQL</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• SELECT, DISTINCT &amp; Àlies</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• WHERE: Operadors AND/OR/NOT</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Patrons LIKE, IN &amp; BETWEEN</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• ORDER BY, LIMIT &amp; OFFSET</text>
  </g>

  <!-- Bloc 2: Combinacions JOIN -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-joi)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔗</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Combinacions JOIN</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Consultes Multitaula</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• INNER JOIN: Coincidències</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• LEFT / RIGHT OUTER JOIN</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• FULL OUTER &amp; CROSS JOIN</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• SELF JOIN &amp; clàusula USING</text>
  </g>

  <!-- Bloc 3: Agrupament i Resum -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-grp)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">GROUP BY &amp; Resum</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Funcions Agregades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• COUNT, SUM, AVG, MIN, MAX</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Agrupament GROUP BY</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Filtratge de grups HAVING</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Diferència WHERE vs HAVING</text>
  </g>

  <!-- Bloc 4: Subconsultes & Conjunts -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sub)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">💡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Subconsultes</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Consultes Avançades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Subconsultes escalars &amp; llista</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Operadors IN, ANY, ALL</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Subconsultes correlacionades</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Conjunts: UNION, INTERSECT</text>
  </g>
</svg>
</div>

El Llenguatge de Consulta de Dades (SQL DQL: SELECT), ordre d'execució lògica de consultes, combinacions multitaula (INNER, LEFT, RIGHT, FULL, SELF JOIN), funcions d'agregació estadística, agrupaments amb GROUP BY i filtratge de grups mitjançant HAVING, subconsultes escalars, correlacionades i operacions de conjunts.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **7.1** | **Estructura i ordre lògic d'execució d'una consulta SQL** | [**Llegir apartat →**](./ut0701.html) |
| **7.2** | **Combinacions multitaula: tipus de JOIN i autocombinació** | [**Llegir apartat →**](./ut0702.html) |
| **7.3** | **Funcions d'agregació, GROUP BY i la clàusula HAVING** | [**Llegir apartat →**](#73-funcions-dagregació-group-by-i-la-clàusula-having) |
| **7.4** | **Subconsultes: escalars, de llista i correlacionades (EXISTS)** | [**Llegir apartat →**](#74-subconsultes-escalars-de-llista-i-correlacionades-exists) |
| **7.5** | **Operacions de conjunts: UNION, INTERSECT i EXCEPT** | [**Llegir apartat →**](#75-operacions-de-conjunts-union-intersect-i-except) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 7.1 Estructura i ordre lògic d'execució d'una consulta SQL

La sentència `SELECT` és el cor del llenguatge SQL per extreure informació de la base de dades. Tot i que s'escriu començant per la paraula `SELECT`, el motor SGBD **no l'executa en l'ordre en què està escrita**, sinó seguint un **ordre lògic d'execució estricte**:

```
ORDRE D'ESCRIPTURA EN SQL:              ORDRE REAL D'EXECUCIÓ AL MOTOR:
1. SELECT [DISTINCT] columnes            1. FROM (i clàusules JOIN)  -> Selecciona origen de dades
2. FROM taula                             2. WHERE                    -> Filtra files individuals
3. [JOIN altra_taula ON condició]         3. GROUP BY                 -> Agrupa tuples per clau
4. WHERE condicions_fila                  4. HAVING                   -> Filtra grups agregats
5. GROUP BY columnes_agrupament           5. SELECT                   -> Projecta columnes i àlies
6. HAVING condicions_grup                 6. DISTINCT                 -> Elimina files duplicades
7. ORDER BY columnes_ordenacio            7. ORDER BY                 -> Ordena el resultat final
8. LIMIT n OFFSET m                       8. LIMIT / OFFSET           -> Paginació final
```

> [!NOTE]
> Com que `WHERE` s'executa abans que `SELECT`, **mai es pot utilitzar un àlies creat al `SELECT` dins de la clau `WHERE`**! En canvi, sí que es pot utilitzar a `ORDER BY`, ja que aquest s'executa després de la projecció.

---

### Predicats i operadors de filtratge (`WHERE`)
- **Comparació simple:** `=`, `<>`, `!=`, `<`, `<=`, `>`, `>=`.
- **Cerca per rangs:** `BETWEEN valor1 AND valor2` (inclusiu en ambdós extrems).
- **Pertinença a llista:** `IN ('València', 'Castelló', 'Alacant')` o `NOT IN (...)`.
- **Patrons de cadenes:**
  - `LIKE 'A%'`: Comença per 'A'.
  - `LIKE '%ing'`: Acaba en 'ing'.
  - `LIKE '_a%'`: Té una lletra 'a' com a segon caràcter (`_` representa un únic caràcter arbitrari).
  - `ILIKE`: Versió insensible a majúscules/minúscules (*case-insensitive*) pròpia de PostgreSQL.
- **Valors nuls:** `IS NULL` o `IS NOT NULL` (recordeu que `camp = NULL` mai funciona!).

---

## 7.2 Combinacions multitaula: tipus de JOIN i autocombinació

Quan les dades estan normalitzades en múltiples taules relacionades per claus primàries i foranes, s'utilitzen les operacions **`JOIN`** per recompondre la informació.

```
       INNER JOIN                   LEFT OUTER JOIN              FULL OUTER JOIN
    (Només coincidència)          (Tots els de l'Esquerra)     (Tots els d'ambdós)
         +---+---+                    +---+---+                    +---+---+
         | A | B |                    | A | B |                    | A | B |
         |   | X |                    | X | X |                    | X | X |
         +---+---+                    +---+---+                    +---+---+
```

### 1. `INNER JOIN` (Combinació Interna)
Retorna únicament les files que tenen coincidència exacta en ambdues taules segons la condició del predicat `ON`:

```sql
SELECT c.nom, cmd.id_comanda, cmd.data_comanda
FROM Clients c
INNER JOIN Comandes cmd ON c.id_client = cmd.id_client;
```
- Si un client no ha realitzat cap comanda, no apareixerà al resultat.

---

### 2. `LEFT OUTER JOIN` (Combinació Externa per l'Esquerra)
Retorna **totes les files de la taula de l'esquerra** (`FROM`). Si una fila no té cap registre coincident a la taula de la dreta (`JOIN`), les columnes de la taula dreta es mostren com a **`NULL`**:

```sql
SELECT c.nom, cmd.id_comanda
FROM Clients c
LEFT JOIN Comandes cmd ON c.id_client = cmd.id_client;
```
- **Tècnica clau d'auditoria:** Per trobar quins clients no han comprat mai res:
  ```sql
  SELECT c.nom FROM Clients c
  LEFT JOIN Comandes cmd ON c.id_client = cmd.id_client
  WHERE cmd.id_comanda IS NULL;
  ```

---

### 3. `FULL OUTER JOIN` (Combinació Externa Completa)
Conserva totes les files d'ambdues taules. Si hi ha coincidència s'ajunten en una fila; si no hi ha coincidència, els camps de l'altre costat s'omplen amb valors `NULL`.

---

### 4. `SELF JOIN` (Autocombinació)
Consisteix a combinar una taula amb ella mateixa utilitzant dos àlies diferents. És l'estratègia imprescindible per resoldre relacions reflexives:

```sql
-- Llistar el nom de cada empleat juntament amb el nom del seu cap directe
SELECT e.nom AS Empleat, cap.nom AS Cap_Directe
FROM Empleats e
LEFT JOIN Empleats cap ON e.id_cap = cap.id_emp;
```

---

## 7.3 Funcions d'agregació, GROUP BY i la clàusula HAVING

Les funcions d'agregació calculen un únic valor resum a partir d'un conjunt de tuples:
- `COUNT(*)`: Compta el nombre total de files (inclosos valors nuls).
- `COUNT(columna)`: Compta quantes files tenen un valor no nul en eixa columna.
- `SUM(columna)`: Suma aritmètica de valors numèrics.
- `AVG(columna)`: Mitjana aritmètica dels valors no nuls.
- `MIN(columna)` i `MAX(columna)`: Valors mínim i màxim (admeten nombres, dates i textos).

---

### La clàusula `GROUP BY` i la regla d'or
Permet dividir les tuples de la taula en grups que comparteixen el mateix valor en les columnes indicades i calcular les funcions d'agregació per a cadascun dels grups:

> [!IMPORTANT]
> **Regla d'Or del GROUP BY:** Tota columna que aparega a la clàusula `SELECT` que **no estiga dins d'una funció d'agregació** (`COUNT`, `SUM`, etc.) ha d'aparèixer obligatòriament a la llista del `GROUP BY`!

---

### Diferència fonamental: `WHERE` vs `HAVING`
- **`WHERE`:** Filtra files individuals **abans** de formar els grups i abans d'executar les funcions agregades. Mai pot contenir funcions com `COUNT` o `AVG`.
- **`HAVING`:** Filtra grups ja agregats **després** que s'ha executat el `GROUP BY`.

```sql
SELECT d.nom_dept, COUNT(e.id_emp) AS total_empleats, AVG(e.salari) AS sou_mitja
FROM Departaments d
JOIN Empleats e ON d.id_dept = e.id_dept
WHERE e.actiu = TRUE               -- Filtre de files individuals (WHERE)
GROUP BY d.nom_dept
HAVING COUNT(e.id_emp) >= 5        -- Filtre de grups (HAVING)
ORDER BY sou_mitja DESC;
```

---

## 7.4 Subconsultes: escalars, de llista i correlacionades (EXISTS)

Una **subconsulta** (*Subquery* o consulta imbricada) és una sentència `SELECT` incrustada dins d'una altra sentència SQL principal.

### 1. Subconsulta Escalar
Retorna un únic valor (1 fila i 1 columna). Es pot utilitzar en qualsevol lloc on s'admeta una expressió constant:

```sql
-- Empleats amb un salari superior a la mitjana de tota l'empresa
SELECT nom, salari
FROM Empleats
WHERE salari > (SELECT AVG(salari) FROM Empleats);
```

---

### 2. Subconsultes de Llista (`IN`, `ALL`, `ANY`)
Retornen una columna amb múltiples valors:

```sql
-- Productes que pertanyen a categories de tecnologia
SELECT nom, preu FROM Productes
WHERE id_cat IN (SELECT id_cat FROM Categories WHERE sector = 'Tecnologia');
```

---

### 3. Subconsultes Correlacionades i Operador `EXISTS`
Una subconsulta està **correlacionada** quan fa referència a columnes de la taula de la consulta externa. S'executa una vegada per a cada fila avaluada per la consulta pare:

```sql
-- Clients que han realitzat almenys una comanda el darrer mes
SELECT c.nom, c.email
FROM Clients c
WHERE EXISTS (
    SELECT 1 FROM Comandes cmd 
    WHERE cmd.id_client = c.id_client 
      AND cmd.data_comanda >= CURRENT_DATE - INTERVAL '30 days'
);
```
- **Rendiment:** L'operador `EXISTS` és extremadament eficient perquè s'atura tan prompte com troba la primera fila coincident (`short-circuit evaluation`), sense necessitat de carregar totes les dades en memòria.

---

## 7.5 Operacions de conjunts: UNION, INTERSECT i EXCEPT

Permeten combinar els conjunts de resultats de dues o més consultes `SELECT` independents segons la teoria matemàtica de conjunts:

- **`UNION`:** Unió de dos conjunts eliminant files duplicades.
- **`UNION ALL`:** Unió de dos conjunts conservant totes les files duplicades (molt més ràpid en no requerir operació d'ordenació).
- **`INTERSECT`:** Retorna únicament les files que apareixen a **tots dos** conjunts de resultats.
- **`EXCEPT` (o `MINUS` en Oracle):** Retorna les files del primer conjunt que **no estan presents** al segon conjunt.

```sql
-- Llista única de ciutats on tenim o bé clients o bé proveïdors físics
SELECT ciutat FROM Clients
UNION
SELECT ciutat FROM Proveïdors
ORDER BY ciutat;
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi de l'ordre d'execució lògic de sentències SQL complexes
Considera la següent sentència SQL executada sobre una taula `Vendes(id, venedor, zona, import)`:

```sql
SELECT zona, AVG(import) AS mitjana_venda
FROM Vendes
WHERE import > 50
GROUP BY zona
HAVING COUNT(*) > 100
ORDER BY mitjana_venda DESC
LIMIT 5;
```

1. Enumera en quin ordre cronològic exacte el motor SGBD executarà cadascuna de les clàusules de la consulta (del pas 1 al pas 8).
2. Explica per què si es canvia `HAVING COUNT(*) > 100` per `WHERE COUNT(*) > 100`, el compilador de PostgreSQL llança un error de sintaxi immediat.
3. Raona per què a la clàusula `ORDER BY` sí que és vàlid utilitzar l'àlies `mitjana_venda`, mentre que a la clàusula `WHERE` provocaria un error de columna inexistent.

#### Exercici 2: Càlcul de cardinalitats en operacions JOIN
Es disposa d'una taula `A` amb 500 registres i una taula `B` amb 1.200 registres.
Se sap que:
- 350 registres de `A` tenen coincidència amb registres de `B`.
- 150 registres de `A` no tenen cap coincidència a `B`.
- 400 registres de `B` no tenen cap coincidència a `A`.
- Cada registre coincident de `A` té de mitjana 2 files associades a `B` ($350 \times 2 = 700$ parelles coincidents en total).

Calcula el nombre exacte de files que retornarà cadascuna de les següents consultes:
1. `SELECT * FROM A INNER JOIN B ON A.id = B.id_a;`
2. `SELECT * FROM A LEFT JOIN B ON A.id = B.id_a;`
3. `SELECT * FROM A RIGHT JOIN B ON A.id = B.id_a;`
4. `SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id_a;`

#### Exercici 3: Avaluació comparativa de rendiment: IN vs EXISTS
Un desenvolupador ha d'obtenir els clients que tenen factures impagades. La taula `Factures` té $2.000.000$ de files.
- **Opció A:** `SELECT * FROM Clients WHERE id_client IN (SELECT id_client FROM Factures WHERE estat = 'Impagada');`
- **Opció B:** `SELECT * FROM Clients c WHERE EXISTS (SELECT 1 FROM Factures f WHERE f.id_client = c.id_client AND f.estat = 'Impagada');`

1. Què ocorre amb l'Opció A si la subconsulta retorna accidentalment algun valor `NULL` combinat amb `NOT IN`?
2. Explica com optimitza el motor l'Opció B mitjançant l'avaluació en curtcircuit (*Short-Circuit Evaluation*) i l'ús d'un índex B-Tree sobre `Factures(id_client)`.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Consultes multitaula i detecció d'elements orfes amb LEFT JOIN
- **Objectiu:** Extreure informació comercial combinant 3 taules i detectar clients sense activitat.
- **Procediment de taller:**
  1. Pobla un esquema amb `Clients`, `Comandes` i `LiniesComanda`.
  2. Escriu la consulta que mostre per a cada comanda: el nom del client, el codi de comanda, la descripció del producte i el subtotal (`quantitat * preu_unitari`):
     ```sql
     SELECT c.nom, cmd.id_comanda, p.descripcio, (lc.quantitat * lc.preu_unitari) AS subtotal
     FROM Clients c
     INNER JOIN Comandes cmd ON c.id_client = cmd.id_client
     INNER JOIN LiniesComanda lc ON cmd.id_comanda = lc.id_comanda
     INNER JOIN Productes p ON lc.codi_prod = p.codi_prod;
     ```
  3. Escriu la consulta mitjançant `LEFT JOIN` que detecte quins productes del catàleg **no s'han venut mai** (és a dir, no apareixen a cap línia de comanda).

#### Repte 2: Informes estadístics amb GROUP BY i HAVING
- **Objectiu:** Generar un resum de facturació per categoria amb filtres agregats.
- **Procediment de taller:**
  1. Executa una consulta que agrupe els productes per categoria i mostre:
     - Nom de la categoria.
     - Nombre total de productes diferents.
     - Preu mitjà del producte (arredonit a 2 decimals).
     - Valor total de l'estoc al magatzem (`SUM(preu * estoc)`).
  2. Afegeix un filtre `HAVING` perquè només es mostren les categories que tenen **més de 3 productes** i un estoc total valorat en **més de 1.000 €**.
  3. Ordena el resultat de major a menor valoració d'estoc.

#### Repte 3: Autocombinació (SELF JOIN) i Subconsultes Correlacionades
- **Objectiu:** Resoldre problemes semàntics de jerarquies laborals i comparatives respecte a la mitjana departamental.
- **Procediment de taller:**
  1. En una taula `Empleats(id, nom, sou, id_dept, id_cap)`, escriu una autocombinació per mostrar el nom de l'empleat i el nom del seu superior directe. Assegura't amb un `LEFT JOIN` que el director general (que té `id_cap IS NULL`) també apareix al llistat.
  2. Escriu una subconsulta correlacionada per mostrar aquells empleats que guanyen **més diners que el sou mitjà del seu propi departament**:
     ```sql
     SELECT e.nom, e.salari, e.id_dept
     FROM Empleats e
     WHERE e.salari > (
         SELECT AVG(e2.salari)
         FROM Empleats e2
         WHERE e2.id_dept = e.id_dept
     );
     ```

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He comprès l'ordre lògic d'execució d'una sentència SQL (`FROM` $\to$ `WHERE` $\to$ `GROUP BY` $\to$ `HAVING` $\to$ `SELECT` $\to$ `ORDER BY`).
- [ ] He utilitzat operadors de cerca de patrons `LIKE` i `ILIKE` amb comodins `%` i `_`.
- [ ] He combinat dades de múltiples taules utilitzant `INNER JOIN` i `LEFT JOIN`.
- [ ] He resolt relacions reflexives mitjançant l'autocombinació `SELF JOIN`.
- [ ] He aplicat funcions d'agregació (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) respectant la regla d'or de `GROUP BY`.
- [ ] He diferenciat la funció de filtratge de files de `WHERE` enfront del filtratge de grups de `HAVING`.
- [ ] He construït subconsultes escalars, de llista i correlacionades amb `EXISTS`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Consultes Bàsiques i Ordre Lògic** | Domina l'ordre lògic d'execució del motor SQL, utilitza àlies correctes, filtres de patrons i gestiona valors nuls sense errades. | Construeix consultes SELECT amb filtres WHERE i ordenació correctes sense dificultats. | Redacta consultes senzilles però intenta utilitzar àlies de columnes dins de la clàusula WHERE. | Confon la sintaxi bàsica de SELECT o escriu clàusules en ordre incoherent. |
| **Combinacions de Taules (JOINs)** | Selecciona amb precisió entre INNER, LEFT, FULL i SELF JOIN segons la necessitat de negoci, detectant orfes eficaçment. | Combina múltiples taules amb INNER i LEFT JOIN identificant les claus d'enllaç correctes. | Realitza INNER JOINs bàsics però té dubtes sobre quan utilitzar un LEFT JOIN per no perdre dades. | Genera productes cartesians no desitjats o utilitza condicions d'enllaç errònies. |
| **Agregació i Grups (GROUP BY / HAVING)** | Aplica resums estadístics multivariable complint la regla d'or del GROUP BY i distingint rigorosament filtres de fila (WHERE) i grup (HAVING). | Agrupa dades i calcula agregats estadístics (COUNT, AVG, SUM) amb clàusula HAVING funcional. | Utilitza funcions agregades però comet errors en oblidar columnes al GROUP BY. | Confon HAVING amb WHERE o intenta utilitzar funcions agregades dins del WHERE. |
| **Subconsultes i Correlacions (EXISTS)** | Construeix subconsultes escalars, de llista i correlacionades d'alt rendiment amb EXISTS justificant el pla d'execució. | Utilitza subconsultes amb operadors IN i subconsultes escalars senzilles amb èxit. | Resol consultes amb subconsultes bàsiques però té dificultats per entendre com funciona la correlació. | Incapaç d'imbricar una consulta dins d'una altra o produeix consultes que retornen errors de cardinalitat. |
| **Operacions de Conjunts (UNION/EXCEPT)** | Combina resultats heterogenis amb operadors de conjunts justificant la compatibilitat de tipus i l'ús de UNION vs UNION ALL. | Aplica UNION per unir llistats de taules independents eliminant duplicats. | Utilitza UNION bàsic però oblida que ambdós SELECT han de tindre el mateix nombre de columnes. | Confon les operacions de conjunts amb combinacions JOIN de taules relacionades. |

