---
layout: default
title: "UD7: Programació de Bases de Dades (Procediments, Funcions, Triggers i Cursors) — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD7"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6: Consultes DQL"
next_url: "../ut08/index.html"
next_label: "UD8: Bases de Dades NoSQL ➡️"
---

# UD7: Programació de Bases de Dades (Procediments, Funcions, Triggers i Cursors)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-prc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ctl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cur" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-trg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db8)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">PROGRAMACIÓ PROCEDURAL AL SERVIDOR DE BASES DE DADES</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Procediments emmagatzemats, funcions definides per l'usuari, cursors, control d'errors i disparadors (Triggers)</text>

  <!-- Bloc 1: Rutines Emmagatzemades -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-prc)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Rutines Servidor</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Procediments &amp; Funcions</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• CREATE PROCEDURE (acció)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• CREATE FUNCTION (retorn)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Paràmetres IN, OUT, INOUT</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Menor trànsit de xarxa</text>
  </g>

  <!-- Bloc 2: Estructures de Control -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ctl)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Lògica Procedural</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Flux d'Execució</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Condicionals IF / THEN / ELSE</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Bifurcacions CASE / WHEN</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bucles WHILE, LOOP &amp; FOR</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Variables locals (DECLARE)</text>
  </g>

  <!-- Bloc 3: Cursors i Excepcions -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cur)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📑</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cursors &amp; Errors</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Processament Fila a Fila</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Cursors: DECLARE, OPEN</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• FETCH tupla a tupla</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Gestió d'errors i HANDLERS</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Excepcions i RAISE / SIGNAL</text>
  </g>

  <!-- Bloc 4: Disparadors (Triggers) -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-trg)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Disparadors</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Automatització DML</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• BEFORE / AFTER (Ins/Up/Del)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• FOR EACH ROW a nivell de fila</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Taules especials OLD i NEW</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Pistas d'auditoria automàtiques</text>
  </g>
</svg>
</div>

Fonaments de la programació del costat del servidor de bases de dades, sintaxi procedural en PL/pgSQL i MySQL, procediments emmagatzemats, funcions escalars i de taula, estructures de control de flux, cursors per al processament fila a fila, gestió d'excepcions i disseny de disparadors (Triggers) per a l'auditoria i compliment de regles de negoci.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **8.1** | **Fonaments de la lògica emmagatzemada i dialectes procedurals** | [**Llegir apartat →**](./ut0801.html) |
| **8.2** | **Funcions i procediments emmagatzemats: paràmetres IN, OUT i INOUT** | [**Llegir apartat →**](./ut0802.html) |
| **8.3** | **Estructures de control de flux: condicionals i bucles** | [**Llegir apartat →**](#83-estructures-de-control-de-flux-condicionals-i-bucles) |
| **8.4** | **Cursors i gestió d'excepcions** | [**Llegir apartat →**](#84-cursors-i-gestió-dexcepcions) |
| **8.5** | **Disparadors (Triggers): automatització d'esdeveniments i auditoria** | [**Llegir apartat →**](#85-disparadors-triggers-automatització-desdeveniments-i-auditoria) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 7.1 Fonaments de la lògica emmagatzemada i dialectes procedurals

Mentre que l'SQL estàndard és un llenguatge **declaratiu** (li diem al SGBD *què* volem obtenir, però no pas *com* calcular-ho pas a pas), certes regles de negoci requereixen lògica seqüencial, condicional i iterativa. Els motors relacionals incorporen extensions **procedurals** que s'executen directament dins del nucli del servidor.

### Avantatges d'executar codi al servidor de bases de dades:
1. **Reducció dràstica del trànsit de xarxa:** En lloc d'enviar 10.000 files a l'aplicació web (Node.js o Java) perquè faça un càlcul i torne a enviar les actualitzacions, el procediment s'executa localment en memòria del servidor de dades.
2. **Encapsulació i seguretat:** Es pot prohibir als usuaris web modificar directament les taules i concedir-los permís exclusiu per executar procediments verificats.
3. **Mantenibilitat compartida:** La mateixa regla de negoci és utilitzada per la web, l'app mòbil i l'eina d'escriptori de l'empresa sense duplicar codi.

---

### Principals dialectes procedurals del mercat:
- **PL/pgSQL:** Llenguatge procedural natiu de **PostgreSQL**.
- **MySQL / MariaDB Stored Programs:** Sintaxi procedural de MySQL.
- **PL/SQL:** El llenguatge pioner d'**Oracle Database**.
- **T-SQL (Transact-SQL):** Dialecte de **Microsoft SQL Server**.

---

## 7.2 Funcions i procediments emmagatzemats: paràmetres IN, OUT i INOUT

### Diferència clau entre Procediment i Funció
- **Procediment (`PROCEDURE`):**
  - Es crida amb la comanda `CALL nom_procediment(arguments);`.
  - Està pensat per executar accions que modifiquen la base de dades (insercions, actualitzacions, manteniment).
  - No retorna cap valor mitjançant la paraula `RETURN` (però pot retornar dades mitjançant paràmetres `OUT`).
- **Funció (`FUNCTION`):**
  - Es crida integrada dins d'una sentència SQL: `SELECT nom_funcio(arguments);`.
  - Ha de retornar **obligatòriament** un valor escalar (`RETURNS INTEGER`, `RETURNS NUMERIC`) o un conjunt de taula (`RETURNS TABLE(...)`).
  - Té restriccions estrictes sobre modificacions de dades en alguns SGBDs per evitar efectes secundaris no desitjats.

---

### Tipus de Paràmetres:
- **`IN` (per defecte):** Paràmetre de només lectura. El valor es passa des de la crida cap a la rutina.
- **`OUT`:** Paràmetre de sortida. La rutina li assigna un valor que serà retornat a qui ha fet la crida.
- **`INOUT`:** Paràmetre bidireccional. Entra amb un valor inicial i la rutina el pot modificar per retornar el resultat.

#### Exemple en PostgreSQL (PL/pgSQL):
```sql
CREATE OR REPLACE FUNCTION fn_calcular_descompte(p_import NUMERIC, p_percentatge NUMERIC)
RETURNS NUMERIC AS $$
BEGIN
    RETURN p_import * (1 - (p_percentatge / 100));
END;
$$ LANGUAGE plpgsql;

-- Invocació:
SELECT fn_calcular_descompte(150.00, 20); -- Retorna 120.00
```

---

## 7.3 Estructures de control de flux: condicionals i bucles

El codi procedural permet utilitzar la lògica habitual de programació estructurada:

### 1. Condicional `IF ... ELSIF ... ELSE`
```sql
IF p_saldo < 0 THEN
    v_estat := 'Morós';
ELSIF p_saldo = 0 THEN
    v_estat := 'Al corrent';
ELSE
    v_estat := 'Positiu';
END IF;
```

---

### 2. Estructures Iteratives (Bucles)
```sql
-- Bucle WHILE
WHILE v_comptador <= 10 LOOP
    v_total := v_total + v_comptador;
    v_comptador := v_comptador + 1;
END LOOP;

-- Bucle FOR amb rang
FOR i IN 1..10 LOOP
    INSERT INTO TaulaLog (num_iteracio) VALUES (i);
END LOOP;
```

---

## 7.4 Cursors i gestió d'excepcions

Normalment, les consultes SQL processen totes les dades alhora com un **conjunt**. Tanmateix, quan cal aplicar una lògica de negoci complexa que requereix analitzar o transformar cada fila de manera independent, s'utilitza un **cursor**.

### Cicle de vida d'un cursor:
1. **`DECLARE`:** Es defineix la consulta associada al cursor.
2. **`OPEN`:** El motor executa la consulta i posiciona un punter abans de la primera fila.
3. **`FETCH`:** Recupera la fila actual, assigna els seus valors a variables locals i avança el punter a la següent tupla.
4. **`CLOSE`:** Allibera els recursos de memòria associats a la consulta.

```sql
DO $$
DECLARE
    rec_client RECORD;
    cur_clients CURSOR FOR SELECT id_client, nom, email FROM Clients WHERE actiu = TRUE;
BEGIN
    OPEN cur_clients;
    LOOP
        FETCH cur_clients INTO rec_client;
        EXIT WHEN NOT FOUND;
        -- Processament individual de cada client
        RAISE NOTICE 'Processant client: % amb email %', rec_client.nom, rec_client.email;
    END LOOP;
    CLOSE cur_clients;
END $$;
```

---

### Gestió d'Excepcions
Permet interceptar errors de sistema o de restriccions (per exemple, intent de dividir per zero o clau duplicada) evitant que la transacció aborte de forma descontrolada:

```sql
BEGIN
    INSERT INTO Clients (id_client, nom) VALUES (1, 'Duplicat');
EXCEPTION
    WHEN unique_violation THEN
        RAISE WARNING 'Intent d''inserir una clau duplicada per al client 1!';
END;
```

---

## 7.5 Disparadors (Triggers): automatització d'esdeveniments i auditoria

Un **disparador (*Trigger*)** és un bloc de codi procedural que **s'executa automàticament com a reacció a un esdeveniment DML** (`INSERT`, `UPDATE` o `DELETE`) sobre una taula concreta.

### Components d'un Trigger:
1. **Moment d'execució:**
   - **`BEFORE`:** S'executa abans que la modificació s'aplique físicament a la taula. Ideal per validar regles, calcular camps automàticament o cancel·lar l'operació llançant una excepció.
   - **`AFTER`:** S'executa després que la modificació s'ha aplicat. Ideal per actualitzar taules d'auditoria o estadístiques en altres taules.
2. **Nivell d'execució:**
   - **`FOR EACH ROW`:** S'executa una vegada per a cada fila afectada.
   - **`FOR EACH STATEMENT`:** S'executa una única vegada per a tota la sentència SQL, independentment del nombre de files afectades.
3. **Variables especials `OLD` i `NEW`:**

| Operació DML | Variable `OLD` disponible? | Variable `NEW` disponible? |
| :---: | :---: | :---: |
| **`INSERT`** | No (`NULL`) | **Sí** (la fila que s'està inserint) |
| **`UPDATE`** | **Sí** (valors abans del canvi) | **Sí** (valors després del canvi) |
| **`DELETE`** | **Sí** (la fila que s'està esborrant) | No (`NULL`) |

---

### Exemple complet d'Auditoria amb Trigger en PostgreSQL:
```sql
-- 1. Taula de registre d'auditoria
CREATE TABLE HistoricAuditoria (
    id_log SERIAL PRIMARY KEY,
    nom_taula VARCHAR(50),
    operacio VARCHAR(10),
    usuari VARCHAR(50),
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dades_velles TEXT,
    dades_noves TEXT
);

-- 2. Funció associada al trigger
CREATE OR REPLACE FUNCTION trg_auditoria_productes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO HistoricAuditoria (nom_taula, operacio, usuari, dades_velles, dades_noves)
    VALUES ('Productes', TG_OP, CURRENT_USER, ROW(OLD.*)::TEXT, ROW(NEW.*)::TEXT);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Definició del trigger sobre la taula
CREATE TRIGGER tr_auditoria_prod
AFTER UPDATE OR DELETE ON Productes
FOR EACH ROW EXECUTE FUNCTION trg_auditoria_productes();
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Disseny d'un procediment de bonificació amb paràmetres INOUT
Es demana dissenyar la lògica d'un procediment procedural `pr_aplicar_bonificacio` que rep:
- `p_id_emp`: enter (`IN`).
- `p_percentatge`: numèric (`IN`).
- `p_nou_salari`: numèric (`OUT`).

1. Escriu el pseudocodi o codi procedural que:
   - Consulta el salari actual de l'empleat.
   - Si l'empleat té una antiguitat superior a 5 anys, suma un 2% addicional al percentatge de bonificació.
   - Actualitza el camp `salari` de la taula `Empleats`.
   - Retorna a `p_nou_salari` el valor final actualitzat.
2. Traça el comportament del procediment per a un empleat amb salari actual de $2.000\text{ €}$, antiguitat de 6 anys i percentatge inicial sol·licitat del $10\%$.

#### Exercici 2: Matriu de disponibilitat de dades en Triggers
Completa la següent taula indicant quins valors prenen `OLD.preu` i `NEW.preu` per a un article que tenia un preu de $100\text{ €}$:

| Esdeveniment Executat | `OLD.preu` | `NEW.preu` | Acció típica d'un Trigger BEFORE |
| :--- | :---: | :---: | :--- |
| `INSERT INTO Articles (preu) VALUES (150);` | | | Validar que el preu siga estrictament positiu |
| `UPDATE Articles SET preu = 120 WHERE id = 1;` | | | Comprovar que el nou preu no supere el 50% de l'antic |
| `DELETE FROM Articles WHERE id = 1;` | | | Impedir l'esborrat si l'article té comandes històriques |

#### Exercici 3: Anàlisi d'impacte en rendiment de Triggers vs Operacions Masives
Un procés d'importació bancària nocturna insereix $500.000$ registres d'apunts comptables:
1. Si s'activa un trigger `AFTER INSERT FOR EACH ROW` que fa un `INSERT` addicional a una taula d'auditoria, quantes escriptures a disc en total generarà l'operació?
2. Per què els DBAs acostumen a desactivar els triggers (`ALTER TABLE ... DISABLE TRIGGER ALL`) abans d'una càrrega massiva de dades i revaliden la coherència posteriorment?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'una funció amb comprovació condicional
- **Objectiu:** Crear una funció que classifique l'estat d'estoc d'un magatzem.
- **Procediment de taller:**
  1. Crea la funció `fn_estat_estoc(p_estoc INT, p_minim INT) RETURNS VARCHAR`:
     ```sql
     CREATE OR REPLACE FUNCTION fn_estat_estoc(p_estoc INT, p_minim INT)
     RETURNS VARCHAR(20) AS $$
     BEGIN
         IF p_estoc <= 0 THEN
             RETURN 'Esgotat';
         ELSIF p_estoc < p_minim THEN
             RETURN 'Crític';
         ELSE
             RETURN 'Normal';
         END IF;
     END;
     $$ LANGUAGE plpgsql;
     ```
  2. Executa una consulta `SELECT` que utilitze la funció sobre tots els registres de la taula `Productes`:
     ```sql
     SELECT codi_prod, nom, estoc, fn_estat_estoc(estoc, estoc_minim) AS estat
     FROM Productes;
     ```

#### Repte 2: Trigger de validació BEFORE (Lògica de negoci)
- **Objectiu:** Evitar que s'introdueixin sous inferiors al salari mínim o increments superiors al 100%.
- **Procediment de taller:**
  1. Crea la funció de validació:
     ```sql
     CREATE OR REPLACE FUNCTION trg_validar_salari()
     RETURNS TRIGGER AS $$
     BEGIN
         IF NEW.salari < 1134.00 THEN
             RAISE EXCEPTION 'El salari (%.2f €) no pot ser inferior al Salari Mínim Interprofessional!', NEW.salari;
         END IF;
         IF TG_OP = 'UPDATE' AND NEW.salari > OLD.salari * 2 THEN
             RAISE EXCEPTION 'No es permet duplicar el salari d''un empleat en una sola revisió!';
         END IF;
         RETURN NEW;
     END;
     $$ LANGUAGE plpgsql;
     ```
  2. Crea el trigger:
     ```sql
     CREATE TRIGGER tr_valida_salari_emp
     BEFORE INSERT OR UPDATE ON Empleats
     FOR EACH ROW EXECUTE FUNCTION trg_validar_salari();
     ```
  3. Intenta inserir un empleat amb salari de $800\text{ €}$ i comprova que el trigger bloqueja l'operació emetent el missatge d'error configurat.

#### Repte 3: Processament per cursor explícit
- **Objectiu:** Recórrer una taula de comandes per calcular i mostrar comissions individuals.
- **Procediment de taller:**
  1. Escriu un bloc procedural anònim en PL/pgSQL que òbriga un cursor sobre totes les comandes no liquidades, calcule una comissió del 3% per a cadascuna i mostre per consola (*RAISE NOTICE*) el codi de comanda i la comissió resultant.
  2. Comprova la sortida al panell de missatges de DBeaver o pgAdmin.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat els avantatges d'executar procediments al servidor de bases de dades en lloc de l'aplicació client.
- [ ] He diferenciat clarament un procediment (`CALL`) d'una funció (`SELECT ... RETURNS`).
- [ ] He utilitzat paràmetres `IN`, `OUT` i `INOUT` en rutines emmagatzemades.
- [ ] He utilitzat estructures de control de flux (`IF/THEN/ELSE`, bucles `WHILE` i `FOR`).
- [ ] He implementat cursors per processar registres fila a fila amb instruccions `FETCH`.
- [ ] He diferenciat els triggers `BEFORE` (validació/modificació) dels triggers `AFTER` (auditoria).
- [ ] He utilitzat correctament les variables pseudo-registre `OLD` i `NEW` segons l'operació DML.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Rutines Servidor (Procediments i Funcions)** | Construeix funcions escalars i procediments modulars amb paràmetres IN/OUT i gestió d'errors impecable. | Implementa funcions que retornen valors i procediments funcionals amb sintaxi correcta. | Crea funcions senzilles amb suport de plantilles però confon paràmetres IN amb OUT. | Incapaç de crear una funció o confon el llenguatge procedural amb consultes SQL pures. |
| **Lògica de Control i Variables** | Utilitza variables locals, condicionals imbricats i bucles iteratius resolent algorismes de negoci complexos. | Aplica estructures IF i bucles per controlar el flux del programa sense bloquejos infinits. | Utilitza condicionals bàsics però comet errors en la sintaxi de tancament (END IF/END LOOP). | Codi procedural desestructurat o crea bucles infinits que col·lapsen la connexió. |
| **Ús de Cursors i Excepcions** | Domina el cicle complet de cursors (DECLARE, OPEN, FETCH, CLOSE), gestiona excepcions amb handlers i evita fugides de recursos. | Recorre conjunts de dades amb cursors assignant valors a variables amb èxit. | Obre i tanca cursors bàsics però té dificultats per controlar la condició de finalització (NOT FOUND). | Desconeix el propòsit d'un cursor o deixa cursors oberts consumint recursos del servidor. |
| **Disparadors (Triggers) i Auditoria** | Dissenya triggers BEFORE per a validacions complexes i triggers AFTER per a sistemes complets d'auditoria amb variables OLD/NEW. | Configura triggers a nivell de fila per validar dades i registrar operacions senzilles. | Crea un trigger bàsic seguint la guia però confon l'ús de les variables OLD i NEW. | Provoca bucles infinits de triggers (un trigger que es dispara a ell mateix) o no entén quan s'activen. |
| **Optimització i Seguretat de Rutines** | Justifica la reducció de trànsit de xarxa, avalua l'impacte d'índexs en triggers i blinda la seguretat amb permisos d'execució. | Comprèn els beneficis d'eficiència i seguretat d'encapsular codi al SGBD. | Sap que el codi s'executa al servidor però no sap mesurar l'impacte en temps de resposta. | Creu que és millor fer tota la lògica al client web sense aprofitar les capacitats del SGBD. |

