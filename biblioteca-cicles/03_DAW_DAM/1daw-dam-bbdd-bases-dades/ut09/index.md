---
layout: default
title: "UD9: Bases de Dades No Relacionals (NoSQL) i Tendències — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD9"
next_url: "../index.html"
next_label: "📚 Índex Mòdul"
---

# UD9: Bases de Dades No Relacionals (NoSQL) i Tendències

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-db9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-nos" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cap" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mng" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-new" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-db9)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">BASES DE DADES NO RELACIONALS (NoSQL) I TENDÈNCIES MODERNES</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Paradigmes NoSQL, Teorema CAP &amp; Model BASE, MongoDB CRUD, Redis i persistència políglota</text>

  <!-- Bloc 1: Paradigmes NoSQL -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-nos)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Famílies NoSQL</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Models de Dades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Documentals: MongoDB, BSON</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Clau-Valor: Redis en RAM</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Columnars: Cassandra</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Grafs: Neo4j &amp; Cypher</text>
  </g>

  <!-- Bloc 2: Teorema CAP & BASE -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cap)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Teorema CAP</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Sistemes Distribuïts</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Consistència (C) en xarxa</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Disponibilitat (A) alta</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Partició (P) inevitable</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Model BASE vs Model ACID</text>
  </g>

  <!-- Bloc 3: MongoDB & BSON -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mng)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🍃</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Entorn MongoDB</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">BBDD Documental</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Col·leccions i Documents</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• CRUD: find, insert, update</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Subdocuments &amp; Arrays</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Aggregation Framework</text>
  </g>

  <!-- Bloc 4: Tendències & NewSQL -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-new)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🚀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Noves Tendències</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Políglota &amp; Escala</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Persistència Políglota</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• NewSQL: CockroachDB</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• BBDD Vectorials per a IA</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• pgvector &amp; Embeddings</text>
  </g>
</svg>
</div>

Evolució de les bases de dades no relacionals (NoSQL: Not Only SQL), escalabilitat horitzontal (*scale-out*), Teorema CAP de sistemes distribuïts, model BASE i consistència eventual, tipologia NoSQL (documentals, clau-valor, columnars i grafs), ús pràctic de MongoDB i Redis, i tendències modernes com la persistència políglota i bases de dades vectorials per a IA.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **9.1** | **Motius de l'aparició de NoSQL i escalabilitat horitzontal** | [**Llegir apartat →**](./ut0901.html) |
| **9.2** | **El Teorema CAP i el model BASE enfront d'ACID** | [**Llegir apartat →**](./ut0902.html) |
| **9.3** | **Famílies de SGBD NoSQL: documentals, clau-valor, columnars i grafs** | [**Llegir apartat →**](#93-famílies-de-sgbd-nosql-documentals-clau-valor-columnars-i-grafs) |
| **9.4** | **Bases de dades documentals: arquitectura i operacions a MongoDB** | [**Llegir apartat →**](#94-bases-de-dades-documentals-arquitectura-i-operacions-a-mongodb) |
| **9.5** | **Tendències de futur: persistència políglota, NewSQL i bases de dades vectorials** | [**Llegir apartat →**](#95-tendències-de-futur-persistència-políglota-newsql-i-bases-de-dades-vectorials) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 9.1 Motius de l'aparició de NoSQL i escalabilitat horitzontal

Durant dècades, els SGBD relacionals van ser l'única opció per a qualsevol sistema d'informació. Tanmateix, amb l'explosió de la web 2.0, les xarxes socials i el comerç electrònic global a principis dels anys 2000, gegants com Google, Amazon i Facebook es van enfrontar a problemes que l'arquitectura relacional clàssica no podia resoldre fàcilment: les **3 V del Big Data**:
1. **Volum:** Petabytes de dades que no caben en un sol disc ni en un sol servidor físic.
2. **Velocitat:** Centenars de milers de peticions d'escriptura per segon procedents de milions d'usuaris concurrents.
3. **Varietat:** Dades semiestructurades, heterogènies o amb esquemes en evolució constant (documents JSON, logs, missatges, feeds).

---

### Escalabilitat Vertical (*Scale-Up*) vs Escalabilitat Horitzontal (*Scale-Out*)
- **Escalabilitat Vertical (*Scale-Up* - RDBMS clàssic):**
  - Consisteix a comprar un servidor més gran: més CPU, més RAM, discos NVMe més ràpids.
  - *Límit:* Té un sostre físic insuperable i un cost econòmic exponencialment astronòmic.
- **Escalabilitat Horitzontal (*Scale-Out* - NoSQL):**
  - Consisteix a afegir desenes o centenars de servidors estàndard barats (*nodes commodity*) connectats en xarxa formant un clúster.
  - Les dades es reparteixen entre els servidors mitjançant tècniques de particionament horitzontal (**Sharding**).

---

### Esquema rígid (*Schema-on-Write*) vs Esquema dinàmic (*Schema-on-Read*)
- **RDBMS Relacional:** Exigeix definir l'estructura de taules amb `CREATE TABLE` abans d'inserir la primera dada (*Schema-on-Write*). Canviar l'esquema d'una taula amb 100 milions de files requereix bloquejos que aturen el servei.
- **NoSQL:** Permet desar documents amb estructures i camps diferents dins de la mateixa col·lecció (*Schema-on-Read*), facilitant el desenvolupament àgil i el desplegament continu.

---

## 9.2 El Teorema CAP i el model BASE enfront d'ACID

Proposat pel científic Eric Brewer el 2000 i demostrat matemàticament el 2002 per Seth Gilbert i Nancy Lynch, el **Teorema CAP** afirma que en qualsevol sistema informàtic distribuït que comparteix dades per xarxa, **només es poden garantir simultàniament dues de les tres propietats següents**:

```
                             [C] Consistència
                                  /\
                                 /  \
                       RDBMS    /    \   MongoDB (CP)
                      (CA local)/      \
                               /________\
         [A] Disponibilitat  (AP: Cassandra)  [P] Tolerància a la Partició
```

1. **Consistència (C - *Consistency*):** Tota lectura rep l'escriptura més recent o bé un error. Tots els nodes mostren la mateixa dada al mateix instant.
2. **Disponibilitat (A - *Availability*):** Cada petició no fallida rep una resposta vàlida, sense garantia que continga l'última versió.
3. **Tolerància a la Partició (P - *Partition Tolerance*):** El sistema continua funcionant fins i tot si es perden missatges o falla la connexió de xarxa entre servidors del clúster.

> [!IMPORTANT]
> A les xarxes reals, les fallades de comunicació són inevitables. Per tant, **en sistemes distribuïts la propietat P és obligatòria**. Això obliga els dissenyadors a triar entre:
> - **Sistemes CP (Consistència + Tolerància):** Sacrifiquen disponibilitat (si hi ha partició, bloquegen el node desactualitzat abans de donar dades errònies). Ex. MongoDB, HBase.
> - **Sistemes AP (Disponibilitat + Tolerància):** Sacrifiquen consistència immediata (responen sempre amb les dades locals disponibles, encara que estiguen desactualitzades). Ex. Apache Cassandra, DynamoDB, CouchDB.

---

### El Model BASE (L'alternativa NoSQL a ACID)
Mentre que els RDBMS s'aferren a l'estricte model **ACID**, molts sistemes NoSQL adopten el model **BASE**:
- **B**asically **A**vailable (Bàsicament disponible: el sistema respon sempre, encara que siga parcialment).
- **S**oft State (Estat flexible: les dades poden canviar amb el temps sense intervenció de noves entrades).
- **E**ventual Consistency (Consistència eventual: si no es fan noves escriptures, tots els nodes del clúster acabaran sincronitzant-se i convergint en el mateix estat).

---

## 9.3 Famílies de SGBD NoSQL: documentals, clau-valor, columnars i grafs

| Model NoSQL | Unitat d'Emmagatzematge | Estructura de Dades | SGBD Destacats | Cas d'Ús Recomanat |
| :--- | :--- | :--- | :--- | :--- |
| **Documental** | Document | JSON / BSON amb claus i valors niats | **MongoDB**, CouchDB | Catàlegs d'e-commerce, CMS, perfils d'usuari, dades d'APIs REST. |
| **Clau-Valor** | Par Clau $\to$ Valor | Cadena o hash indexat en memòria RAM | **Redis**, Memcached, DynamoDB | Memòria cau d'alta velocitat (*cache*), sessions d'usuari web, carrets de compra temporals. |
| **Columnar (Wide-Column)** | Família de columnes | Files amb milers de columnes dinàmiques | **Apache Cassandra**, ScyllaDB | Sèries temporals, registre massiu de sensors IoT, telemetria d'infraestructures. |
| **Grafs** | Nodes i Arestes | Xarxes de nodes connectats amb propietats | **Neo4j**, Amazon Neptune | Xarxes socials (amics, seguidors), motors de recomanació, detecció de frau financer. |

---

## 9.4 Bases de dades documentals: arquitectura i operacions a MongoDB

**MongoDB** és el SGBD NoSQL més popular del món. Emmagatzema la informació en format **BSON** (*Binary JSON*), una representació binària de documents JSON que afegeix tipus de dades avançats (com dates natives i enters de 64 bits).

### Equivalència de conceptes: RDBMS vs MongoDB
| Model Relacional SQL | Model Documental MongoDB |
| :--- | :--- |
| **Base de Dades** | **Base de Dades** |
| **Taula** | **Col·lecció (*Collection*)** |
| **Fila / Tupla** | **Document BSON** |
| **Columna / Camp** | **Camp (*Field*)** |
| **Clau Primària (PK)** | **Camp identificador `_id` (`ObjectId`)** |
| **JOIN entre taules** | **Documents embeguts (*Embedded*) o `$lookup`** |

---

### Operacions CRUD a MongoDB Shell (`mongosh`):

```javascript
// 1. Inserir un document amb camps niats i arrays
db.productes.insertOne({
    codi: "PRD-201",
    nom: "Auriculars Inalàmbrics",
    preu: 59.90,
    etiquetes: ["audio", "bluetooth", "gaming"],
    especificacions: {
        bateria_hores: 30,
        cancel_soroll: true
    }
});

// 2. Consulta amb operadors de comparació ($gt, $in)
db.productes.find({
    preu: { $gte: 50 },
    "especificacions.cancel_soroll": true
});

// 3. Modificació atòmica amb operadors ($set, $inc)
db.productes.updateOne(
    { codi: "PRD-201" },
    { $set: { preu: 54.90 }, $inc: { estoc: 10 } }
);

// 4. Eliminació de documents
db.productes.deleteOne({ codi: "PRD-201" });
```

---

### Pipeline d'Agregació (*Aggregation Framework*)
L'equivalent a `GROUP BY` i `HAVING` en MongoDB és el **Pipeline d'Agregació**, on els documents travessen una seqüència d'etapes de processament:

```javascript
db.comandes.aggregate([
    // Etapa 1: Filtrar comandes pagades ($match equivalent a WHERE)
    { $match: { estat: "Pagada" } },
    
    // Etapa 2: Agrupar per client i sumar imports ($group equivalent a GROUP BY)
    { $group: {
        _id: "$id_client",
        despesa_total: { $sum: "$import" },
        num_comandes: { $sum: 1 }
    }},
    
    // Etapa 3: Filtrar clients amb despesa > 500 € ($match equivalent a HAVING)
    { $match: { despesa_total: { $gt: 500 } } },
    
    // Etapa 4: Ordenar de major a menor despesa ($sort equivalent a ORDER BY)
    { $sort: { despesa_total: -1 } }
]);
```

---

## 9.5 Tendències de futur: persistència políglota, NewSQL i bases de dades vectorials

En l'actualitat, la discussió *"SQL vs NoSQL"* ha quedat superada: els sistemes empresarials moderns combinen ambdós paradigmes.

1. **Persistència Políglota (*Polyglot Persistence*):**
   - Una mateixa aplicació web utilitza diferents tecnologies de bases de dades segons les necessitats de cada subsistema:
     - **PostgreSQL (RDBMS):** Per a facturació, transaccions monetàries i comptes d'usuari (ACID estricte).
     - **MongoDB (Documental):** Per al catàleg de productes amb atributs variables per categoria.
     - **Redis (Clau-Valor):** Per a la gestió de sessions d'usuari en memòria i carrets de compra volàtils.
     - **Neo4j (Grafs):** Per al motor de recomanació de productes relacionats.
2. **Motors NewSQL (CockroachDB, Google Cloud Spanner):**
   - Sistemes moderns que ofereixen **escalabilitat horitzontal massiva NoSQL** distribuïda per continents mantenint la **garantia ACID estricta i el llenguatge SQL estàndard**.
3. **Bases de Dades Vectorials (Milvus, Pinecone, extensió `pgvector` de PostgreSQL):**
   - La revolució de la Intel·ligència Artificial i els models LLM.
   - Emmagatzemen vectors d'incrustació numèrics multidimensionals (*embeddings*) que representen text, àudio o imatges, i executen cerques de semblança per proximitat (com la distància de cosinus).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Classificació de SGBDs segons el Teorema CAP
Completa la següent taula classificant els sistemes segons el parell de característiques del Teorema CAP que prioritzen davant d'una fallada de xarxa i justifica la decisió de disseny:

| Sistema Gestor | Tipus CAP (CP o AP) | Què prioritza davant una partició de xarxa? | Cas d'ús empresarial idoni |
| :--- | :---: | :--- | :--- |
| **MongoDB** | **CP** | Rebutja escriptures si no hi ha majoria de rèpliques; garanteix dades exactes | Gestió de catàlegs i registres financers NoSQL |
| **Apache Cassandra** | **AP** | Accepta sempre escriptures en qualsevol node local; garanteix disponibilitat 24/7 | Monitorització d'IoT i xarxes socials |
| **Redis (Sentinel)** | **CP** | Prioritza consistència promovent una nova rèplica mestre | Memòria cau d'alta fidelitat i sessions |
| **CouchDB** | **AP** | Replicació eventual bidireccional sense bloquejos | Aplicacions mòbils amb treball fora de línia |

#### Exercici 2: Modelatge documental: documents embeguts vs referències
Es dissenya la base de dades d'una plataforma de cursos en línia a MongoDB. Es dubta entre dues estratègies per relacionar els `Cursos` i les seues `Lliçons`:
- **Opció A (Embeguda / *Embedded*):** Un document per curs que conté un array de subdocuments amb les 15 lliçons dins.
- **Opció B (Referenciada / *Normalized*):** Una col·lecció de `Cursos` i una col·lecció independent de `Lliçons` amb el camp `id_curs`.

1. Quins avantatges de rendiment té l'Opció A a l'hora de mostrar tota la informació d'un curs a la web en una sola petició?
2. Quin límit físic de mida de document imposa el format BSON a MongoDB (pista: $16\text{ MB}$)? Podria ser aquest límit un problema si un curs tinguera $50.000$ comentaris d'alumnes embeguts a dins?
3. Quina regla de disseny s'extreu per triar entre embotir (*Embedding*) o referenciar (*Referencing*)?

#### Exercici 3: Comparativa de latències: memòria RAM vs disc SSD
Un servei web d'autenticació ha de validar un testimoni (*token*) de sessió a cada petició HTTP.
- Consulta en memòria RAM (Redis): latència mitjana $t_{\text{RAM}} = 0{,}15\text{ ms}$ ($150\text{ }\mu\text{s}$).
- Consulta a taula de base de dades a disc SSD (RDBMS): latència mitjana $t_{\text{disc}} = 4\text{ ms}$.

1. Si la plataforma rep $10.000$ peticions concurrents per segon, quant de temps de CPU/I/O total consumirà validar les sessions a través de Redis enfront de consultar directament la base de dades relacional a disc?
2. Justifica per què la persistència políglota utilitza Redis com a capa de memòria cau frontal (*Cache*) per davant del SGBD relacional.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Desplegament de MongoDB i operacions CRUD bàsiques
- **Objectiu:** Desplegar un servidor MongoDB mitjançant contenidor Docker i executar consultes d'inserció i filtratge a la shell `mongosh`.
- **Procediment de taller:**
  1. Executa el contenidor oficial de MongoDB:
     ```bash
     docker run --name mongo-taller -p 27017:27017 -d mongo:7
     ```
  2. Connecta't a la consola interactiva:
     ```bash
     docker exec -it mongo-taller mongosh
     ```
  3. Crea la base de dades del taller i insereix tres documents de clients:
     ```javascript
     use taller_daw;
     db.clients.insertMany([
         { nif: "11111111A", nom: "Sofia Pla", ciutat: "València", compres: 12 },
         { nif: "22222222B", nom: "Lluís Martí", ciutat: "Castelló", compres: 3 },
         { nif: "33333333C", nom: "Mireia Soler", ciutat: "València", compres: 25 }
     ]);
     ```
  4. Executa una cerca que trobe els clients de València amb més de 10 compres:
     ```javascript
     db.clients.find({ ciutat: "València", compres: { $gt: 10 } });
     ```

#### Repte 2: Pipeline d'Agregació en MongoDB
- **Objectiu:** Processar mètriques de vendes calculant la mitjana de compres per ciutat.
- **Procediment de taller:**
  1. A la mateixa col·lecció de clients, executa el següent pipeline d'agregació:
     ```javascript
     db.clients.aggregate([
         { $group: {
             _id: "$ciutat",
             total_clients: { $sum: 1 },
             mitjana_compres: { $avg: "$compres" }
         }},
         { $sort: { total_clients: -1 } }
     ]);
     ```
  2. Documenta el resultat obtingut i compara la sintaxi JSON d'etapes enfront del `GROUP BY` i `ORDER BY` tradicional d'SQL.

#### Repte 3: Memòria cau en memòria RAM amb Redis
- **Objectiu:** Experimentar amb claus temporals amb temps de vida (TTL) a Redis.
- **Procediment de taller:**
  1. Desplega un contenidor de Redis:
     ```bash
     docker run --name redis-taller -p 6379:6379 -d redis:alpine
     ```
  2. Obre la consola `redis-cli`:
     ```bash
     docker exec -it redis-taller redis-cli
     ```
  3. Desa una sessió d'usuari amb expiració automàtica de 30 segons:
     ```bash
     SETEX session_token_usr99 30 "user_id:99;role:editor"
     ```
  4. Consulta el valor amb `GET session_token_usr99` i comprova el temps restant amb `TTL session_token_usr99`.
  5. Espera que transcórreguen els 30 segons i torna a executar el `GET`: comprova que Redis retorna `(nil)` en haver destruït la clau automàticament de la memòria RAM.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat les causes de l'aparició de NoSQL davant les limitacions d'escalabilitat vertical dels RDBMS.
- [ ] He diferenciat l'escalabilitat vertical (*Scale-Up*) de l'escalabilitat horitzontal (*Scale-Out*).
- [ ] He descrit el Teorema CAP (Consistència, Disponibilitat, Tolerància a la Partició) i la seua aplicació pràctica.
- [ ] He comparat les garanties del model ACID amb la consistència eventual del model BASE.
- [ ] He classificat els SGBD NoSQL en les 4 famílies: documentals, clau-valor, columnars i grafs.
- [ ] He executat operacions CRUD bàsiques i pipelines d'agregació a MongoDB en format BSON.
- [ ] He definit el concepte de persistència políglota i la integració de bases de dades vectorials per a IA.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Fonaments NoSQL i Escalabilitat** | Justifica amb rigor el canvi de paradigma, diferenciant l'escalabilitat horitzontal per sharding de l'escalabilitat vertical de maquinari. | Comprèn les limitacions de volum i concurrència dels RDBMS i per què NoSQL utilitza esquemes flexibles. | Identifica NoSQL com a bases de dades sense taules però té dubtes sobre com s'escalen en clúster. | Creu que NoSQL substitueix completament a SQL per a qualsevol projecte informàtic. |
| **Teorema CAP i Model BASE** | Analitza el Teorema CAP, classifica sistemes CP vs AP davant particions de xarxa i compara ACID amb la consistència eventual BASE. | Explica les tres sigles de CAP i per què no es poden complir totes tres alhora en sistemes distribuïts. | Sap que el Teorema CAP parla de consistència i disponibilitat però confon els termes. | Desconeix el Teorema CAP o creu que un sistema distribuït pot ser 100% consistent i disponible sempre. |
| **Famílies NoSQL i Selecció de Model** | Compara detalladament els quatre paradigmes NoSQL (documentals, clau-valor, columnars, grafs) seleccionant el motor òptim segons el problema. | Identifica MongoDB per a documents, Redis per a memòria cau i Neo4j per a grafs amb exemples d'ús. | Coneix MongoDB i Redis però confon les bases de dades columnars amb les relacionals. | Incapaç de distingir una base de dades documental d'un magatzem clau-valor. |
| **Operacions CRUD i Agregació a MongoDB** | Construeix consultes complexes amb operadors de comparació, arrays niats i pipelines d'agregació ($match, $group) impecables. | Executa insercions, consultes find() i actualitzacions a MongoDB amb sintaxi JSON correcta. | Realitza cerques senzilles a MongoDB seguint la guia però comet errors en filtrar per camps niats. | Errors constants de sintaxi BSON a la consola mongosh o no sap com consultar una col·lecció. |
| **Persistència Políglota i Tendències (IA)** | Dissenya arquitectures que integren harmònicament RDBMS, Redis i bases de dades vectorials (pgvector/embeddings) per a aplicacions modernes. | Explica com combinar un SGBD relacional per a facturació amb Redis per a sessions i MongoDB per a catàleg. | Comprèn que es poden utilitzar dues bases de dades a la vegada però no sap com repartir les dades. | Rebutja la coexistència de tecnologies i intenta resoldre tot el programari amb un sol motor inadequat. |
