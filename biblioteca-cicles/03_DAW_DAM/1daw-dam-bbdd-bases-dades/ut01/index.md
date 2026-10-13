---
layout: default
title: "UD1: Introducció als Sistemes Gestors de Bases de Dades (SGBD) i Arquitectura de Dades — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD1"
next_url: "ut0101.html"
next_label: "1.1 ➡️"
---

# UD1: Introducció als Sistemes Gestors de Bases de Dades (SGBD) i Arquitectura de Dades

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

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db1)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SISTEMES GESTORS DE BASES DE DADES (SGBD) I ARQUITECTURA ANSI/SPARC</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Superació dels sistemes de fitxers, abstracció de 3 nivells, independència de dades i components del motor SGBD</text>

  <!-- Bloc 1: Fitxers vs SGBD -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fit)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📁</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fitxers vs SGBD</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Limitacions Tradicionals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Redundància i inconsistència</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Aïllament i format rígid</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Inexistència de concurrència</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Vulnerabilitat en seguretat</text>
  </g>

  <!-- Bloc 2: Arquitectura ANSI/SPARC -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arc)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🏛️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model ANSI/SPARC</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">3 Nivells d'Abstracció</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Nivell Extern: vistes usuari</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Nivell Conceptual: esquema</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Nivell Intern: blocs i disc</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Independència física/lògica</text>
  </g>

  <!-- Bloc 3: Components del SGBD -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cmp)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Motor SGBD</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Nucli &amp; Execució</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Processador de consultes</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Gestor d'emmagatzematge</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Gestor de transaccions ACID</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Diccionari de dades / Catàleg</text>
  </g>

  <!-- Bloc 4: Classificació SGBD -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cls)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tipus de SGBD</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Paradigmes &amp; Usos</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• RDBMS: PostgreSQL, MySQL</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• NoSQL: Documents &amp; Clau-Valor</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Arquitectures Client-Servidor</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• DBA &amp; Desenvolupament web</text>
  </g>
</svg>
</div>

Fonaments dels sistemes d'informació, superació dels sistemes de fitxers tradicionals, arquitectura ANSI/SPARC de 3 nivells d'abstracció, independència lògica i física de dades, estructura interna del motor d'un SGBD i classificació dels sistemes gestors moderns.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **1.1** | **Evolució de l'emmagatzematge: dels fitxers plans als SGBD** | [**Llegir apartat →**](./ut0101.html) |
| **1.2** | **L'arquitectura ANSI/SPARC i la independència de dades** | [**Llegir apartat →**](./ut0102.html) |
| **1.3** | **Components interns i funcionament del motor d'un SGBD** | [**Llegir apartat →**](#13-components-interns-i-funcionament-del-motor-dun-sgbd) |
| **1.4** | **Usuaris, rols i responsabilitats en la gestió de dades** | [**Llegir apartat →**](#14-usuaris-rols-i-responsabilitats-en-la-gestió-de-dades) |
| **1.5** | **Classificació dels SGBD segons el paradigma de dades** | [**Llegir apartat →**](#15-classificació-dels-sgbd-segons-el-paradigma-de-dades) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 1.1 Evolució de l'emmagatzematge: dels fitxers plans als SGBD

En les primeres dècades de la informàtica comercial (anys 1960 i 1970), les aplicacions gestionaven les seues dades mitjançant **sistemes de fitxers convencionals** (*File-Processing Systems*). Cada departament d'una empresa (Comptabilitat, Recursos Humans, Magatzem) desenvolupava els seus propis programes (habitualment en COBOL o FORTRAN) i emmagatzemava les dades en fitxers plans o estructurats independents al disc dur o a cintes magnètiques.

### Inconvenients greus dels sistemes de fitxers tradicionals
1. **Redundància i inconsistència de dades:**
   - La mateixa informació (per exemple, l'adreça postal i el telèfon d'un client) es guardava duplicada en els fitxers de vendes, de facturació i d'enviaments.
   - Si el client canviava de domicili i només s'actualitzava el fitxer de vendes, el sistema entrava en un estat d'**inconsistència**, produint dades contradictòries.
2. **Dificultat per accedir a les dades:**
   - Obtenir una nova estadística o informe no previst originalment requeria contractar programadors per escriure un nou programa sencer en llenguatge compilat.
3. **Aïllament de dades (*Data Isolation*):**
   - Com que les dades estaven disperses en múltiples fitxers amb formats i codificacions diferents, enllaçar informació de dos departaments era una tasca extremadament complexa.
4. **Problemes d'integritat:**
   - Les regles de negoci (com ara *"el saldo d'un compte no pot ser negatiu"* o *"l'edat ha de ser major que zero"*) s'havien de programar manualment dins de cada aplicació. Si s'afegia un programa nou i l'equip oblidava posar la comprovació, la base de fitxers es corrompia.
5. **Manca d'atomicitat davant fallades:**
   - Si el sistema elèctric fallava a meitat d'una transferència bancària (després de restar els diners del compte d'origen però abans d'ingressar-los al compte de destinació), els diners desapareixien. No existia el concepte de reversió automàtica (*Rollback*).
6. **Anomalies d'accés concurrent:**
   - Si dos usuaris intentaven actualitzar el mateix fitxer simultàniament, la gravació del segon sobreescrivia i esborrava les modificacions del primer (*Lost Update*).
7. **Problemes de seguretat:**
   - Els permisos d'accés del sistema operatiu s'aplicaven a tot el fitxer, impedint donar accés a un usuari a certes columnes (com el nom) sense deixar-li veure columnes sensibles (com el sou).

---

### Què és una Base de Dades i un SGBD?
- **Base de Dades (BD / *Database*):** Una col·lecció estructurada, integrada i compartida de dades interrelacionades que modelen un aspecte del món real (l'empresa, una xarxa social, un comerç electrònic).
- **Sistema Gestor de Bases de Dades (SGBD / *DBMS*):** Conjunt de programari complex que permet als usuaris i desenvolupadors definir, crear, consultar, actualitzar i administrar la base de dades garantint seguretat, integritat i concurrència.

---

### Matriu comparativa: Sistemes de Fitxers vs SGBD
| Criteri | Sistemes de Fitxers Tradicionals | Sistemes Gestors de Bases de Dades (SGBD) |
| :--- | :--- | :--- |
| **Control de redundància** | Nul (duplicitat freqüent de dades) | Centralitzat (redundància controlada o mínima) |
| **Consistència** | Risc constant d'incoherència | Garantida mitjançant restriccions d'integritat |
| **Independència de dades** | Nul·la (canvis en el fitxer trenquen el codi) | Total (abstracció en 3 nivells ANSI/SPARC) |
| **Accés concurrent** | Bloqueig de fitxer sencer o pèrdua de dades | Control de concurrència fi a nivell de fila (*locking/MVCC*) |
| **Integritat i regles** | Disperses en el codi font dels programes | Centralitzades i forçades pel motor de dades |
| **Recuperació davant fallades** | Manual mitjançant còpies periòdiques | Automàtica mitjançant fitxers de registre (*WAL / Redo Log*) |
| **Seguretat** | Limitada als permisos d'arxiu del SO | Granular (a nivell de taula, columna, fila o procediment) |

---

## 1.2 L'arquitectura ANSI/SPARC i la independència de dades

Per resoldre definitivament la dependència estreta entre les aplicacions i l'estructura física d'emmagatzematge, el comitè **ANSI/X3/SPARC** (*American National Standards Institute, Standards Planning and Requirements Committee*) va definir el 1975 una arquitectura universal estandarditzada en **tres nivells d'abstracció**.

```
+-----------------------------------------------------------+
|             NIVELL EXTERN (Vistes d'Usuari)               |
|   Vista Desenvolupador Web  |  Vista Analista Financer    |
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
|   Fitxers de dades, blocs, índexs B-Tree, particions      |
+-----------------------------------------------------------+
```

### Els tres nivells d'abstracció
1. **Nivell Extern (*External Level* / Vistes):**
   - És el nivell més proper als usuaris finals i programadors d'aplicacions.
   - Defineix múltiples **vistes parcials** de la base de dades adaptades a les necessitats de cada perfil. Per exemple, l'aplicació del caixer d'una botiga només veu el codi del producte i el seu preu, mentre que el departament de comptabilitat veu el marge de benefici i les dades fiscals.
2. **Nivell Conceptual (*Conceptual Level* / Esquema Lògic):**
   - Descriu l'estructura completa de tota la base de dades per a tota la comunitat d'usuaris, ocultant els detalls físics d'emmagatzematge.
   - Especifica quines entitats existeixen, quins atributs contenen, les relacions entre elles i les restriccions d'integritat (claus primàries, claus foranes, regles de validació).
3. **Nivell Intern o Físic (*Internal Level* / Esquema Físic):**
   - Descriu com s'emmagatzemen realment les dades en el maquinari físic (discs durs o SSD).
   - Inclou estructures de dades d'accés (índexs B-Tree, taules hash), mida dels blocs de disc, formats de compressió, tècniques de xifratge físic i ubicació de fitxers al sistema operatiu.

---

### El principi clau: Independència de Dades
La independència de dades és la capacitat de modificar l'esquema d'un nivell determinat sense haver de reescriure els programes ni els esquemes dels nivells superiors:
- **Independència Física de Dades:**
  - Capacitat de modificar l'esquema intern (afegir nous índexs per accelerar cerques, canviar de disc HDD a SSD NVMe, reconfigurar la mida de bloc) **sense haver d'alterar l'esquema conceptual ni modificar cap aplicació web**.
- **Independència Lògica de Dades:**
  - Capacitat de modificar l'esquema conceptual (afegir una nova columna a una taula, crear una taula addicional) **sense haver de canviar les vistes externes existents ni trencar els programes que no utilitzen aquests nous atributs**.

---

## 1.3 Components interns i funcionament del motor d'un SGBD

Un SGBD modern (com PostgreSQL, MySQL, Oracle o SQL Server) és un sistema de programari dividit en dos subsistemes principals: el **Processador de Consultes** i el **Gestor d'Emmagatzematge**.

### 1. Processador de Consultes (*Query Processor*)
S'encarrega d'interpretar i executar les ordres SQL enviades per les aplicacions:
- **Compilador / Analitzador sintàctic (*Parser*):** Comprova la sintaxi de la sentència SQL (`SELECT`, `INSERT`), verifica que les taules i columnes citades existeixen al diccionari de dades i comprova que l'usuari té privilegis d'accés.
- **Optimitzador de consultes (*Query Optimizer*):** El component més sofisticat del motor. Avalua múltiples plans d'execució alternatius per resoldre la consulta (ús d'índexs vs escaneig seqüencial de taula, ordre de combinació de taules *JOIN*) i selecciona el pla amb menor cost estimat d'I/O de disc i CPU.
- **Motor d'execució (*Execution Engine*):** Executa el pla generat per l'optimitzador interactuant amb el gestor d'emmagatzematge.

---

### 2. Gestor d'Emmagatzematge (*Storage Manager*)
Proporciona la interfície entre les dades de baix nivell al disc i les consultes de l'aplicació:
- **Gestor de memòria intermèdia (*Buffer Pool Manager*):** Manté en memòria RAM les pàgines de dades utilitzades freqüentment per reduir els accessos a disc.
- **Gestor de fitxers (*File Manager*):** Assigna espai a disc i gestiona les estructures de blocs.
- **Gestor d'autorització i integritat:** Comprova que no es violen regles de negoci ni restriccions de clau.
- **Gestor de transaccions i concurrència:** Assegura que múltiples transaccions concurrents no corrompen les dades mitjançant bloquejos (*Locks*) o control de concurrència multiversió (MVCC).
- **Gestor de recuperació (*Recovery Manager* / Log):** Registra cada operació en un fitxer d'escriptura prèvia (*Write-Ahead Logging* / WAL) per poder reconstruir l'estat consistent de la base de dades si hi ha una fallada elèctrica sobtada.

---

### 3. El Diccionari de Dades / Catàleg del Sistema
És la "base de dades que descriu la base de dades" (**metadades**). Conté:
- Noms de totes les taules, vistes, columnes i tipus de dades.
- Restriccions d'integritat (claus primàries, claus foranes, regles `CHECK`).
- Comptes d'usuari, rols i matriu de privilegis concedits.
- Estadístiques sobre el volum de dades i distribució de valors (utilitzades per l'optimitzador).

---

## 1.4 Usuaris, rols i responsabilitats en la gestió de dades

En l'ecosistema de dades professional intervenen diferents perfils amb responsabilitats diferenciades:

1. **Administrador de la Base de Dades (DBA - *Database Administrator*):**
   - Responsable del funcionament global, seguretat i rendiment del SGBD.
   - Defineix l'esquema físic, gestiona l'espai de disc, assigna permisos i privilegis a usuaris, planifica la política de còpies de seguretat (*Backup & Disaster Recovery*) i monitora el consum de recursos.
2. **Dissenyador de la Base de Dades (*Data Architect*):**
   - Responsable del disseny conceptual i lògic (identificació d'entitats, relacions, normalització fins a 3FN/BCNF).
3. **Desenvolupadors d'Aplicacions (Programadors DAW/DAM):**
   - Construeixen les aplicacions web, mòbils o d'escriptori que interactuen amb la base de dades mitjançant llenguatges de manipulació de dades (SQL) o llibreries ORM (Hibernate, Prisma, Entity Framework).
4. **Usuaris Finals (*End Users*):**
   - Interactuen amb el sistema mitjançant la interfície gràfica de les aplicacions sense necessitat de conèixer SQL ni l'estructura interna de les taules.

---

## 1.5 Classificació dels SGBD segons el paradigma de dades

Segons com organitzen i representen la informació, els SGBD es classifiquen en:

| Model de Dades | Arquitectura i Fonament | Exemples Destacats | Casos d'Ús Recomanats |
| :--- | :--- | :--- | :--- |
| **Relacional (RDBMS)** | Basat en taules, tuples i àlgebra relacional. Llenguatge estàndard SQL. Compliment estricte de propietats ACID. | PostgreSQL, MySQL, MariaDB, Oracle Database, SQL Server | Sistemes de gestió empresarial (ERP, CRM), plataformes financeres, comerç electrònic. |
| **Documental (NoSQL)** | Guarda documents semi-estructurats en format JSON/BSON. Esquema flexible (*schema-less*). | MongoDB, CouchDB | Aplicacions web amb dades jeràrquiques variables, continguts digitals, catàlegs de productes. |
| **Clau-Valor (NoSQL)** | Emparella claus úniques amb valors binaris o cadenes. Velocitat d'accés ultra-ràpida en memòria RAM. | Redis, Memcached, DynamoDB | Memòria cau d'alta velocitat (*cache*), gestió de sessions d'usuari web, marcadors en temps real. |
| **Columnar (NoSQL)** | Emmagatzema dades per columnes en lloc de files. Altíssima taxa de compressió per anàlisi massiva. | Apache Cassandra, ScyllaDB, ClickHouse | Big Data, telemetria d'IoT, registre d'esdeveniments massius en sèries temporals. |
| **Grafs (NoSQL)** | Nodes, arestes i propietats. Optimitzat per a consultes de relacions complexes multicamí. | Neo4j, Amazon Neptune | Xarxes socials, motors de recomanació, sistemes de detecció de frau bancari. |

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Modelatge de sobrecàrrega per redundància en sistemes de fitxers convencionals
Una empresa comercial compta amb $N = 40.000$ clients registrats. En el sistema tradicional basat en fitxers plans, la informació de client s'emmagatzema duplicada en 3 fitxers independents de departament:
- Fitxer de Vendes (`vendes.dat`): conté el registre de client ($250\text{ bytes}$).
- Fitxer de Facturació (`facturacio.dat`): conté el registre de client ($310\text{ bytes}$).
- Fitxer d'Enviaments (`enviaments.dat`): conté el registre de client ($220\text{ bytes}$).

En passar a un SGBD relacional, es crea una única taula centralitzada `Clients` amb un registre mestre complet de $380\text{ bytes}$, mentre que les taules transaccionals només guarden la clau forana identificadora de client (`id_client`, enter de $4\text{ bytes}$):
1. Calcula l'espai total de disc ocupat per les dades de clients en el sistema de fitxers tradicional:
   $$V_{\text{fitxers}} = 40.000 \times (250 + 310 + 220) = \dots \text{ bytes} = \dots \text{ MB}$$
2. Calcula l'espai ocupat en el SGBD relacional considerant la taula centralitzada més les referències de 4 bytes en cadascun dels tres processos:
   $$V_{\text{SGBD}} = 40.000 \times (380 + 3 \times 4) = \dots \text{ bytes} = \dots \text{ MB}$$
3. Determina el volum net de dades redundants estalviat en megabytes i calcula la taxa percentual d'eficiència d'emmagatzematge:
   $$\text{Estalvi} = V_{\text{fitxers}} - V_{\text{SGBD}} \quad , \quad \% \text{ Reducció} = \left(\frac{\text{Estalvi}}{V_{\text{fitxers}}}\right) \times 100\%$$

#### Exercici 2: Anàlisi d'anomalies de concurrència: pèrdua d'actualització (*Lost Update*)
En una plataforma bancària sense control de concurrència de SGBD, un compte compta amb un saldo inicial de $S_0 = 1.500\text{ €}$. Dues operacions s'executen pràcticament al mateix mil·lisegon:
- Transacció $T_1$: Ingrés de $300\text{ €}$.
- Transacció $T_2$: Retirada de $500\text{ €}$.

Cronograma temporal d'execució:
- Instant $t_1$: $T_1$ llegeix el saldo ($S = 1.500\text{ €}$).
- Instant $t_2$: $T_2$ llegeix el saldo ($S = 1.500\text{ €}$).
- Instant $t_3$: $T_1$ calcula $1.500 + 300 = 1.800\text{ €}$ i escriu el nou saldo al disc.
- Instant $t_4$: $T_2$ calcula $1.500 - 500 = 1.000\text{ €}$ i escriu el seu resultat al disc sobreescrivint l'anterior.

1. Quin és el saldo final que queda gravat al disc? Quin deuria haver sigut el saldo realment correcte?
2. Quants diners s'han "perdut" misteriosament a causa de l'absència de control transaccional del sistema de fitxers?
3. Explica com resol aquest problema un SGBD mitjançant el mecanisme de bloquejos exclusius (*Pessimistic Locking*) o mitjançant el control de concurrència multiversió (MVCC).

#### Exercici 3: Avaluació d'independència de dades (Física vs Lògica)
Determina per a cadascun dels següents escenaris tècnics si s'està posant a prova la **Independència Física de Dades** o la **Independència Lògica de Dades**, i raona si les consultes web de l'aplicació s'haurien de reescriure o continuaran funcionant de forma transparent:
1. El DBA crea un nou índex B-Tree sobre la columna `dni` de la taula `usuaris` per accelerar les consultes de login de $180\text{ ms}$ a $2\text{ ms}$.
2. El DBA afegeix una columna nova `data_ultim_acces TIMESTAMP` a la taula `usuaris`.
3. El DBA mou les dades físiques d'un disc mecànic HDD a un volum RAID 10 d'SSD NVMe redistribuint la mida de pàgina a $16\text{ KB}$.
4. Es crea una vista `usuaris_actius` que només projecta els camps `id`, `nom` i `correu` filtrant els usuaris donats de baixa.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Desplegament i verificació d'un servei SGBD Client-Servidor
- **Objectiu:** Desplegar un servidor de bases de dades relacional de grau empresarial (PostgreSQL o MariaDB) i verificar la seua connectivitat de xarxa per consola.
- **Procediment de taller:**
  1. Si s'utilitza contenidor Docker, executa el desplegament d'un servei PostgreSQL:
     ```bash
     docker run --name pg-taller -e POSTGRES_PASSWORD=daw2026 -p 5432:5432 -d postgres:16
     ```
  2. Verifica que el port estàndard TCP 5432 es troba en estat d'escolta activa utilitzant PowerShell o terminal Linux:
     ```powershell
     Test-NetConnection -ComputerName localhost -Port 5432
     ```
  3. Connecta't al client de línia d'ordres `psql` (o `mysql` en MariaDB) i consulta la versió oficial del motor:
     ```sql
     SELECT version();
     ```
  4. Documenta la versió del nucli del SGBD, el sistema operatiu amfitrió i la codificació per defecte (UTF-8).

#### Repte 2: Auditoria del Diccionari de Dades mitjançant `information_schema`
- **Objectiu:** Consultar les metadades internes del sistema per auditar taules i esquemes definits al SGBD.
- **Procediment de taller:**
  1. Obre el client SQL i executa una consulta contra el catàleg estàndard ANSI per llistar les taules del sistema:
     ```sql
     SELECT table_schema, table_name, table_type 
     FROM information_schema.tables 
     WHERE table_schema = 'information_schema'
     LIMIT 10;
     ```
  2. Consulta la definició de les columnes de la taula `information_schema.columns`:
     ```sql
     SELECT column_name, data_type, is_nullable
     FROM information_schema.columns
     WHERE table_name = 'tables';
     ```
  3. Raona per què qualsevol aplicació de desenvolupament (com DBeaver, pgAdmin o un IDE) utilitza aquest catàleg per generar l'arbre visual de bases de dades i taules.

#### Repte 3: Comparativa empírica: Cerca seqüencial en fitxer CSV vs Cerca indexada en SGBD
- **Objectiu:** Mesurar la diferència de temps d'accés entre un escaneig lineal en un fitxer de text pla i una consulta indexada en un SGBD amb $100.000$ registres.
- **Procediment de taller:**
  1. Genera o importa un fitxer CSV de prova amb $100.000$ línies de comandes de venda.
  2. Executa una cerca per text pla utilitzant la utilitat del sistema operatiu mesurant el temps d'execució:
     ```powershell
     Measure-Command { Get-Content comandes.csv | Select-String "CMD-98765" }
     ```
  3. Importa el fitxer a una taula relacional amb clau primària indexada i executa la mateixa cerca amb el planificador del SGBD:
     ```sql
     EXPLAIN ANALYZE SELECT * FROM comandes WHERE codi = 'CMD-98765';
     ```
  4. Compara el temps d'execució en mil·lisegons d'ambdós sistemes i redacta una breu conclusió tècnica sobre el cost computacional de la cerca $O(N)$ enfront de $O(\log N)$.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat les limitacions dels sistemes de fitxers tradicionals: redundància, inconsistència, aïllament i anomalies de concurrència.
- [ ] He diferenciat clarament el concepte de Base de Dades del concepte de Sistema Gestor de Bases de Dades (SGBD).
- [ ] He dibuixat i explicat l'arquitectura ANSI/SPARC en tres nivells (extern, conceptual i intern).
- [ ] He distingit la independència física de dades de la independència lògica de dades amb exemples d'aplicació web.
- [ ] He identificat els mòduls clau del motor: processador de consultes, optimitzador, buffer pool, WAL i catàleg.
- [ ] He descrit les responsabilitats del DBA enfront dels perfils de desenvolupador de programari.
- [ ] He classificat els SGBD segons el paradigma de dades (Relacionals, Documentals, Clau-Valor, Columnars i Grafs).

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Sistemes de Fitxers vs SGBD** | Analitza matemàticament la redundància i justifica detalladament com el motor SGBD resol inconsistències, transaccions ACID i concurrència. | Identifica els inconvenients principals dels fitxers i els beneficis de centralitzar les dades en un SGBD. | Descriu la redundància com a problema bàsic però té dificultats per explicar el concepte d'atomicitat o concurrència. | Incapaç de diferenciar un fitxer de text d'una base de dades estructurada. |
| **Arquitectura ANSI/SPARC i Abstracció** | Domina els tres nivells d'abstracció i demostra com la independència física i lògica aïlla el codi d'aplicació dels canvis interns. | Distingeix el nivell extern, conceptual i intern i comprèn la utilitat de separar vistes de dades. | Reconeix els tres nivells però confon la independència lògica amb la física. | Desconeix l'estàndard ANSI/SPARC o no comprèn la necessitat de capes d'abstracció. |
| **Components Interns del Motor SGBD** | Explica la interacció entre el compilador SQL, l'optimitzador de consultes basat en costos, el buffer pool de RAM i el registre WAL. | Identifica el processador de consultes, el diccionari de dades i el gestor d'emmagatzematge físic. | Sap que el SGBD disposa d'un motor intern però no comprèn la funció de l'optimitzador ni del catàleg. | Concep el SGBD com una "capsa negra" sense entendre com es processa una instrucció. |
| **Rols i Administració de Dades** | Delimita amb precisió les tasques del DBA, de l'arquitecte de dades i dels programadors, i audita usuaris al catàleg del sistema. | Reconeix les funcions administratives d'un DBA i la seua relació amb l'equip de desenvolupament. | Identifica la figura del DBA però confon les seues responsabilitats amb les del desenvolupador. | Desconeix el rol del DBA en una organització informàtica. |
| **Paradigmes de Dades i NoSQL** | Classifica i compara sòlidament els models relacionals enfront de models NoSQL (documents, clau-valor, columnars, grafs) segons l'escenari d'ús. | Distingeix un SGBD relacional d'una base de dades NoSQL i en cita exemples reals (PostgreSQL vs MongoDB/Redis). | Reconeix que existeixen bases de dades NoSQL però té dubtes sobre quan utilitzar-les. | Creu que totes les bases de dades del mercat funcionen exactament amb el model relacional SQL. |
