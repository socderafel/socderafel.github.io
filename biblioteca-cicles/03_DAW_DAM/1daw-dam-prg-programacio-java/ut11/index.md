# UT 11: Accés a Bases de Dades Relacionals amb JDBC i el Patró DAO

<div class="interactive-progress-tracker" data-unit="ut11" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita l'alumnat en la integració de sistemes de gestió de bases de dades relacionals (SGBD com MySQL, PostgreSQL o SQLite) en aplicacions professionals Java mitjançant l'estàndard **Java Database Connectivity (JDBC)**, del paquet `java.sql`:
- **Arquitectura i Connectivitat JDBC:** El model de controladors (*Drivers*), la cadena de connexió JDBC URL, l'ús de `DriverManager` i la gestió eficient de la interfície de connexió `Connection`.
- **Execució de Sentències i Ciberseguretat:** Anàlisi de la vulnerabilitat crítica d'injecció SQL (*SQL Injection*) associada a l'ús inadequat de la interfície `Statement` amb concatenació de text, i el seu blindatge obligatori mitjançant consultes parametritzades precompilades amb `PreparedStatement`.
- **Processament de Resultats:** Navegació pel conjunt de registres retornats mitjançant `ResultSet`, mapatge entre tipus de dades SQL i tipus primitius o objectes Java, i alliberament segur de cursors amb `try-with-resources`.
- **Transaccionalitat i Propietats ACID:** Desactivació del mode d'autocommit (`setAutoCommit(false)`), confirmació atòmica amb `commit()` i desfer operacions inconsistents davant fallades amb `rollback()`.
- **Patró Arquitectònic DAO (*Data Access Object*):** Disseny professional d'aplicacions per capes, separació estricta entre la lògica de negoci i la persistència física mitjançant interfícies DAO, models DTO (*Data Transfer Object*) i fàbriques de connexions.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA8 (DAW / DAM):** Aplica mecanismes d'accés a dades persistents en bases de dades relacionals.
  - **CA 8.a:** S'han establert connexions a bases de dades mitjançant controladors JDBC i cadenes de connexió adequades.
  - **CA 8.b:** S'han executat sentències DML utilitzant PreparedStatement per a prevenir atacs d'injecció SQL.
  - **CA 8.c:** S'han processat els resultats de consultes mitjançant la interfície ResultSet mapant dades a objectes Java.
  - **CA 8.d:** S'han gestionat transaccions per a assegurar l'atomicitat i consistència de les operacions.
  - **CA 8.e:** S'ha estructurat el codi d'accés a dades aplicant el patró de disseny DAO.

---

## Estructura de la Unitat de Treball

1. [UT 11.01: Arquitectura JDBC: controladors (Drivers), URLs de connexió i DriverManager](./ut1101.md)
2. [UT 11.02: Sentències SQL segures: perills de Statement i protecció amb PreparedStatement](./ut1102.md)
3. [UT 11.03: Consulta i mapatge de dades: la interfície ResultSet i tancament de cursors](./ut1103.md)
4. [UT 11.04: Gestió de transaccions ACID: control d'autocommit, commit i rollback](./ut1104.md)
5. [UT 11.05: Arquitectura per capes i el patró de disseny DAO (Data Access Object)](./ut1105.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut11-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Arquitectura del Driver JDBC</h4>
  </div>
  <p class="challenge-question">Quina és la missió d'un controlador JDBC (com mysql-connector-j o postgresql.jar) en una aplicació Java?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Instal·lar el servidor MySQL automàticament a la màquina client.</button>
    <button class="btn-check" data-correct="true">B) Traduir les crides de l'API estàndard de Java (interfícies java.sql) al protocol de xarxa nadiu i dialecte específic que entén el motor de base de dades concret.</button>
    <button class="btn-check" data-correct="false">C) Crear interfícies gràfiques d'usuari per a consultes SQL.</button>
    <button class="btn-check" data-correct="false">D) Xifrar el codi font en bytecode.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut11-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Vulnerabilitat d'Injecció SQL</h4>
  </div>
  <p class="challenge-question">Per què és inacceptable utilitzar la concatenació directa de text per a construir consultes com `"SELECT * FROM usuaris WHERE login = '" + usuari + "'"`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè la sentència SELECT requereix usar majúscules obligatòriament.</button>
    <button class="btn-check" data-correct="true">B) Perquè permet que un usuari maliciós introduïsca caràcters de control com cometes simples i fragments de sintaxi SQL (com ' OR '1'='1), alterant l'estructura lògica de la consulta i accedint o destruint dades sense autorització.</button>
    <button class="btn-check" data-correct="false">C) Perquè la consulta només pot retornar una única columna.</button>
    <button class="btn-check" data-correct="false">D) Perquè Java prohibeix l'operador + en cadenes SQL.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut11-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Transaccions i Consistència de Dades</h4>
  </div>
  <p class="challenge-question">Com garantim en JDBC que una operació bancària que resta saldo d'un compte i el suma a un altre s'execute com un tot indivisible?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Executant dues consultes SELECT consecutives.</button>
    <button class="btn-check" data-correct="true">B) Desactivant el mode d'autocommit amb connexio.setAutoCommit(false), executant els dos UPDATEs i cridant a connexio.commit() només si ambdós han tingut èxit; en cas de qualsevol fallada, cridem a connexio.rollback() en el bloc catch.</button>
    <button class="btn-check" data-correct="false">C) Utilitzant dos fils d'execució independents.</button>
    <button class="btn-check" data-correct="false">D) Guardant les dades en un fitxer de text temporal.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut11-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Beneficis del Patró de Disseny DAO</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge de mantenibilitat i arquitectura aporta la implementació del patró DAO (*Data Access Object*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Redueix el consum elèctric dels servidors.</button>
    <button class="btn-check" data-correct="true">B) Aïlla completament les sentències SQL i el codi JDBC d'accés físic dins de classes dedicades, de manera que la lògica de negoci del programa treballa exclusivament amb objectes de domini Java purs sense dependre del motor de base de dades utilitzat.</button>
    <button class="btn-check" data-correct="false">C) Elimina la necessitat de tindre taules relacionals.</button>
    <button class="btn-check" data-correct="false">D) Converteix el codi Java a JavaScript automàticament.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Implementació d'un Mòdul DAO amb JDBC</h4>
  </div>
  <p>Dissenya i programa una arquitectura completa per a una entitat `Producte` (ID, codi, descripció, estoc, preu): crea la interfície `ProducteDAO` amb operacions CRUD bàsiques i la seua implementació concreta `ProducteDAOImpl` utilitzant JDBC, `PreparedStatement`, tancament segur de recursos amb `try-with-resources` i transaccions.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
