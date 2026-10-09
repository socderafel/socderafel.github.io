---
layout: default
title: "UT6 — Optimització de l'SGBD — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT6 Completa"
prev_url: "../ut05/ut05actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT5"
next_url: "../ut06/ut0601.html"
next_label: "6.1 Optimització de l'SGBD ➡️"
---

# 📘 UT6 — Optimització de l'SGBD (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**6.1 Optimització de l'SGBD**](#ut0601) (o [obrir en pàgina individual ➡️](./ut0601.md) )
> - [**✍️ Activitats pràctiques UT6**](#ut06actividades) (o [obrir en pàgina individual ➡️](./ut06actividades.md) )

---

## 6.1 Optimització de l'SGBD

### UNITAT 05 Optimització del SGBD

Optimització del SGBD

Identificar les eines de monitoratge disponibles per al sistema gestor. Descriure els avantatges i inconvenients de la creació d'índexs. Crear índexs en taules i vistes. Optimitzar l'estructura de la base de dades. Optimitzar els recursos del sistema gestor. Obtindre informació sobre el rendiment de les consultes per a la seua optimització.

Programar alertes de rendiment. Realitzar modificacions en la configuració del sistema operatiu per a millorar el rendiment del gestor.

Monitorització Rendiment Errors, logs DD Optimització Entorn SG BD ( índex, consultes )

Monitorització .........................................................................................

S'ha de tractar que les tasques de monitoratge i diagnòstic del sistema siguen el menys intrusives possible perquè no penalitzen el rendiment del sistema gestor, i relegar les tasques que requerisquen un consum de recursos mitjà o elevat per a realitzar-les en moments de baixa càrrega.

Eines principals de monitoratge

- Monitor de rendiment
- El log d’execució
- El diccionari de dades

Monitor de rendiment

- Seguiment de mètriques
- Detecció de bloquejos
- Detecció de processos acaparadors
- Consum de recursos
- Definició d’alertes o llindars

Transaccions / ut Temps de resposta Escalabilitat Concurrència

Registre d’erros -> fitxers LOGs

- Inicis i parades del sistema
- Operacions rellevants
- Errors o warnings
- Registre de consultes que tarden molt en acabar

Nivell de detall dels logs

- Debug
- Warning
- Error

Diccionari de dades DD Es pot comprovar

- Consultes que se estan executant, i consum de recursos
- Qui les executa
- Bloquejos actius i a que sentències afecten
- etc..

Les tasques de monitorització i diagnòstic deuen ser el menys intrusives possible !! Les ferramentes gràfiques consumeixen més recursos que les consultes al DD Les ferramentes gràfiques requereixen més permisos que les consultes al DD

Monitorització en ORACLE .........................................................................................

Monitor de rendiment

- EM Enterprise Manager (deprecated)

✔Monitor de rendiment ✔Gestió d’incidències ✔Definició d’accions correctives ✔Definició de notificacions ✔Consulta d’informes predefinits

- Diccionari de Dades

Vistes dinàmiques => v$..... p.exemple v$sqlarea

- SQL Developer ( o altres com TOAD for Oracle, de pagament)

✔Monitor de rendiment ✔Historial de SQLs ✔Informes predefinits

Monitor de rendiment

- SQL Developer ( o altres com TOAD for Oracle, de pagament)

Historial de SQLs Informes predefinits Obrir finestra de DBA amb ( Ver- DBA )

Monitor de rendiment

- SQL Developer ( o altres com TOAD for Oracle, de pagament)

Historial de SQLs Informes predefinits Obrir finestra de DBA amb ( Ver- DBA ) ASH: Active Session History AWR: Automatic Workload Repository

Monitor de rendiment

- SQL Developer ( o altres com TOAD for Oracle, de pagament)

Historial de SQLs Informes predefinits Obrir finestra de sessions ( Herramientas – Controlar sesiones )

Monitor de rendiment

- SQL Developer

Monitoritzar Top SQL Obrir finestra de informes ( Ver – Informes )

Monitor de rendiment

- SQL Developer

Monitoritzar Tasques de llarga duració Obrir finestra de informes ( Ver – Informes - Sesiones)

Registre d’erros Des de la versió 11 d’Oracle -> ARD Automatic Diagnostic Repository

- ORACLE_BASE/diag
- Diferents subdirectoris
- vista V$DIAG_INFO

alert.log cdump incident trace others

Optimització .........................................................................................

Optimització de l’Entorn a nivell de SO a nivell de Xarxa del SG (Sistema Gestor) -Grandària de blocs de dades -Grandària i ubicació de fitxers de dades -Deshabilitar processos ocults (auto-grow, auto-shrink) i executar-los fora d’horari de producció -Grandària del emmagatzemament temporal

Optimització de la BD ( índex, consultes ) -Disseny de taules i tipus de dades (Ajustar al necessari) -Camps calculats (intentar mantindre els menys possibles) -Desnormalització (reduir JOIN a costa de augmentar redundància) -Particionament -Desfragmentació -Balanceig d’índex -Crear, modificar o eliminar índex

Optimització Particionament

- S’evita processar tota una taula (sols es processa la partició)
- Permet guardar en una sola taula més dades que en un disc
- Les dades poden ser accedides en paral·lel
- Facilita operacions com p.e. el purgat de dades

Optimització Creació d’índex Sobre que columnes crear ( i sobre que columnes NO crear) Que tipus d’índex crear Per organització Agrupats / No agrupats Per estructura Índex B-tree Índex bitmap Índex hash

Optimització Creació d’índex Sobre que columnes crear Claus primaries i alienes ( normalment ja ho fa el SGBD) Columnes que habitualment apareixen en SELECT i en WHERE Columnes amb bona selectivitat ( si poques files tenen el mateix valor) Sobre que columnes NO crear Taules amb poques dades Columnes amb molts valors NULL Columnes amb valors que es modifiquen molt sovint Índex sobre moltes columnes Molts índex per taula

Optimització Optimització de consultes

- Consulta estadístiques de taules en el DD
- Reescriptura de consultes

#### 1- Substituir els OR per UNION

### 2. IN vs EXISTS

### 3. IN vs BETWEEN

### 4. Comparacions. Evitar IS NULL, i <>

### 5. Usar taules derivades, subconsultes i joins

### 6. Evitar el GROUP BY

### 7. Cursors i funcions

Actualitzar estadístiques periòdicament Objectius

- Evitar recórrer tota la

taula si es possible.

- Simplificar i reduir la

grandària de les taules abans de fer JOINs

Optimització Ferramentes d’optimització Basant-se en

### 1. Monitor de rendiment

### 2. Registre d’errors

### 3. Diccionari de dades

### 4. Pla d’execució

Optimització en ORACLE .........................................................................................

Optimització del sistema gestor Optimització dels objectes de la bbdd Fragmentació / Desfragmentació Indexació Estadístiques Particionament Optimització de consultes

Optimització del sistema gestor

- Grandària dels blocs de dades -> paràmetre ‘db_block_size’ del spfile , 8k, 16k en datawarehouse

### 2. Grandària i ubicació dels fitxers de dades -> tablespaces

### 3. Deshabilitar processos ‘ocults’ -> autoextensible dels datafiles

### 4. Grandària de l’emmagatzemament temporal -> afegir datafile al tablespace TEMP

Paràmetre comú a la instància (CDB)

Optimització Blocs – Extensions – Segments – fitxers – Tablespaces

Optimització dels objectes de la bbdd

### 1. Fragmentació de les taules

```sql
alter table nom_taula move [compress];
```

### 2. Índex

```sql
create index nom_ind on nom_taula (camp1, camp2,..);
```

alter index nom_ind rebuild;

### 3. Actualització d’estadístiques

```sql
execute dbms_stats.gather_table_stats(‘esquema’.’taula’);
execute dbms_stats.gather_schema_stats(‘esquema’);
```

### 4. Particionament

```sql
create table ....(  ) partition by range(nomcamp) (....);
```

Optimització dels objectes de la bbdd - índex

### 1. Quan es crea una taula amb una clau primaria o unique, ORACLE crea un índex

automàticament

### 2. Tipus Índex

```sql
create [bitmap | unique] index nom_ind on nom_taula (camp1, camp2,..);
```

alter index nom_ind rebuild;

- Com explorar-los En DD user_indexes

select index_name , index_type ,table_name , tablespace_name , secondary

```sql
from all_indexes where table_name = 'TAULA_A_CONSULTAR';
```

Optimització dels objectes de la bbdd - Particionament Per exemple imaginem una taula de factures, on tenim el detall de la nostra facturació al llarg de 6 anys, 2017, 2018… 2022, si volguérem fer

```sql
SELECT SUM(total_fac) FROM facturacio WHERE any = 2019;
```

En aquest exemple s'hauria de recórrer tota la taula (imaginem que parlem de 30 milions de registres en total, és molt no?), per aquest motiu un criteri possible per a particionar la taula seria per l'any de la data de la factura

Optimització dels objectes de la bbdd Particionament – exemple - ( by range )

```sql
create table nom_taula (idCOD NUMBER(6), idFECHA DATE)
```

partition by range( idFECHA ) ( partition p_1 values less than (TO_DATE('-01', 'YYYY-MM-DD')), partition p_2 values less than (TO_DATE('-01', 'YYYY-MM-DD')), partition p_3 values less than (TO_DATE('-01', 'YYYY-MM-DD')), partition p_4 values less than (TO_DATE('-01', 'YYYY-MM-DD')),

```sql
partition p_5 values less than (MAXVALUE) );
```

- Com explorar-les En DD user_tab_partitions

SELECT table_name, partition_name, high_value

```sql
FROM user_tab_partitions WHERE table_name = 'NOM_TAULA';
```

Optimització dels objectes de la bbdd Particionament – exemple - ( by range ) - especificant tablespace

```sql
create table nom_taula (idCOD NUMBER(6), idFECHA DATE)
```

partition by range( idFECHA ) ( partition p_1 values less than (TO_DATE('-01', 'YYYY-MM-DD')) tablespace tab1, partition p_2 values less than (TO_DATE('-01', 'YYYY-MM-DD')) tablespace tab2, partition p_3 values less than (TO_DATE('-01', 'YYYY-MM-DD')) tablespace tab3, partition p_4 values less than (TO_DATE('-01', 'YYYY-MM-DD')) tablespace tab4,

```sql
partition p_5 values less than (MAXVALUE) );
```

Optimització dels objectes de la bbdd Particionament – exemples

```sql
ALTER TABLE facturacion ADD PARTITION (PARTITION p4 VALUES LESS THAN (2010));
ALTER TABLE facturacion DROP PARTITION p2;
ALTER TABLE facturacion DROP PARTITION p2 UPDATE GLOBAL INDEX;
ALTER TABLE facturacion MERGE PARTITION p2 AND p3 INTO PARTITION pnueva;
ALTER TABLE facturacion SPLIT PARTITION p1 INTO
```

(PARTITION p11 VALUES LESS THAN (2006)

```sql
(PARTITION p12 VALUES LESS THAN (MAXVALUE));
ALTER TABLE facturacion TRUNCATE PARTITION p11;  (ESBORRA DADES !!)
```

Optimització dels objectes de la bbdd Particionament – exemple ( by list)

```sql
CREATE TABLE q1_sales_by_region
      (deptno number,
       deptname varchar2(20),
       quarterly_sales number(10, 2),
       state varchar2(2))
```

PARTITION BY LIST (state) (PARTITION q1_CV VALUES ('VA', 'AL', 'CS'), PARTITION q1_CA VALUES ('BA', 'TA', 'LL', 'GI'), PARTITION q1_MU VALUES ('MU'), PARTITION q1_EU VALUES ('BI', 'SS', 'VI'), PARTITION q1_GA VALUES ('SC', 'LU', 'VG'), PARTITION q1_IB VALUES ('MA', 'ME' , 'FO' ), PARTITION q1_nulos VALUES (NULL ),

```sql
PARTITION q1_desconegut VALUES (DEFAULT )  );
```

Optimització dels objectes de la bbdd Particionament – exemple - passar una taula no particionada a particionada

```sql
create table nom_taula (idCOD NUMBER(6), idFECHA DATE) ;
alter table nom_taula modify partition by range( idFECHA )
```

( partition p_1 values less than (TO_DATE('-01', 'YYYY-MM-DD')), partition p_2 values less than (TO_DATE('-01', 'YYYY-MM-DD')), partition p_3 values less than (TO_DATE('-01', 'YYYY-MM-DD')), partition p_4 values less than (TO_DATE('-01', 'YYYY-MM-DD')),

```sql
partition p_5 values less than (MAXVALUE) );
```

Optimització de consultes Oracle activa un optimitzador de consultes automàticament i reescriu les consultes si ho estima necessari. Realitza les següents operacions.

### 1. Avalua expressions i condicions

### 2. Transforma sentències complexes

### 3. Transforma vistes en consultes

- Avalua els JOIN i ordena el accés i la forma d’accés.

Ferramentes d’Optimització Pla d’execució Oracle guarda en el DD , les estadístiques de les taules En la Vista ==> user_tables Usant les estadístiques (DD) , el monitor de rendiment i el registre d’errors, proposa un pla d’execució, que determina com es pot resoldre una consulta de la forma més eficient Una vegada executades les consultes, els plans d’execució s’emmagatzemen en la cau de consultes Usa estadístiques de taules !!

Ferramentes d’Optimització Pla d’execució Cada vegada que executem una sentència una de les coses que fa Oracle és crear un pla d'execució de la sentència. (SELECT, UPDATE, INSERT o DELETE) Un pla d'execució defineix la forma en què Oracle cerca o grava les dades. Decideix, per exemple, si usarà o no els índexs en una sentència SELECT DELETE PLAN_TABLE;

```sql
EXPLAIN PLAN FOR SELECT * FROM T_PEDIDOS WHERE CODPEDIDO = 5;
select * from plan_table;
```

Usa estadístiques de taules !!

Ferramentes d’Optimització Pla d’execució

```sql
grant select_catalog_role to nom_usu;
grant select any dictionary to nom_usu;
```

El SQL*Plus permet consultar el pla d’execució de les consultes, executant la següent instrucció set autotrace traceonly explain El SQL Developer permet consultar el pla d’execució de forma gràfica, polsant F10 sobre la consulta abans de llançar-la  Un usuari necessita tindre permís per revisar els plans d’execució de les consultes Usa estadístiques de taules !!

Pla d’execució El SQL Developer permet consultar el pla d’execució de forma gràfica, polsant F10 sobre la consulta abans de llançar-la

Ferramentes d’Optimització SQL Tunning Advisor

- SQL Developer - SQL Tuning Advisor

En una SQL, abans d’executar, pulsa ctrl + F12 L’usuari necessita permís/privilegi d’ ADVISOR Run sql: alt+F11  Un usuari necessita tindre permís per executar el SQL tuning advisor

Ferramentes d’Optimització Monitor d’operacions Es consulta des de EM , secció SQL Monitor o des del paquet DBMS_SQL_MONITOR,

- procediment report_sql_monitor
- vista V$SQL_MONITOR

Ferramentes d’Optimització Operacions particulars d’Oracle Insercions massives : SQL Loader

```sql
Insert Append:    INSERT /*+ APPEND */ INTO NOM_taula VALUES (...);
```

Nologging alter table t1 nologging; Truncate table truncate table t1 ; Intercanvi de particions Vistes materialitzades. Guarden consulta i dades. Solen guardar càlculs massius Merge Combina la inserció i la modificació en una sola instrucció Hints S’ha d’anar amb compte amb estes operacions, donat que redueixen la seguretat i la possibilitat de recuperació davant d’operacions no desitjades !!

Els hints s'incorporen a una sentència DML en forma de comentari i han d'anar just darrere del comando principal. Per exemple, si es tractara d'una sentència SELECT el format seria el següent: SELECT /*+ COMANDO-HINT */ ...

---

## ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — (ASGBD) Particionament**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Particionar taula en Oracle Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQLDeveloper Amb usuari system en pdb1: Crear usuari usuari5 (donar-li contrasenya i permisos de crear taules) Assignar quota 100MB en el tablespace per defecte de l’usuari Amb usuari5 en pdb1
>
> Crear taula particionada p_1 Alumnes amb data d’alta < 01/06/2018 p_2 Alumnes amb data d’alta < 01/06/2019 p_3 Alumnes amb data d’alta < 01/06/2020 p_4 Alumnes amb data d’alta < 01/06/2021 p_5 Alumnes amb data d’alta < 01/06/2022 p_resta la resta d’alumnes Crear trigger que no deixe inserir un alumne que no tinga adreça ni telèfon ni e-mail. Ha de tindre almenys un contacte.
>
> Poblar la taula amb files de diferents valors en la data d’alta , i provoca una execució del trigger. Observa els missatges. Provoca un error de clau primaria i observa i compara els missatges.
>
> Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ---------------------------------------- Taula Alumnes
>
> ```sql
> CREATE TABLE alumnes(
> ```
>
> nie NUMBER(6) PRIMARY KEY, nom VARCHAR2(50) NOT NULL, d_alta DATE NOT NULL, adreça VARCHAR2(50) , telefon VARCHAR2(12), email VARCHAR2(35)
>
> ```sql
> );
> ```

> **✍️ 📋 Exercici / Qüestionari 6.2 — Qüestionari Repàs de classe (UD5)**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
