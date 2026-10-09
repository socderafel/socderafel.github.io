---
layout: default
title: "UD2 — Configuració d'un SGBD · Temari Complet"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut0105.html"
prev_label: "⬅️ 1.5 Arquitectura BBDD's en Oracle"
next_url: "../ut02/ut0201.html"
next_label: "2.1 Configuració d'un SGBD ➡️"
---

# 📘 UD2 — Configuració d'un SGBD (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Configuració d'un SGBD**](./ut0201.md)
- [**2.2 Tablespaces i datafiles**](./ut0202.md)
- [**2.3 Us d'SQL*Plus**](./ut0203.md)
- [**2.4 Solucions errors de connexió amb SQLDeveloper**](./ut0204.md)

---

# 2.1 Configuració d'un SGBD

### UNITAT 02 Configuració d’un SGBD

Configuració de sistemes gestors de bases de dades

Descriure les condicions d'inici i parada del sistema gestor. -Seleccionar el motor de base de dades. -Assegurar els comptes d'administració. -Configurar les eines i programari client del sistema gestor. -Configurar la connectivitat en xarxa del sistema gestor. -Definir les característiques per defecte de les bases de dades.

Definir els paràmetres relatius a les connexions (temps d'espera, nombre màxim de connexions, entre altres). -Documentar el procés de configuració

Però..... ¿Què configurar en un SGBD? Entorn Connexions Servidor Emmagatzematge Comptes del sistema

Entorn -Nom i adreça IP del servidor -Variables d’entorn (SO) -PATH

Connexions -En el servidor- Port Protocol Manera d'autenticació dels usuaris -En el client- Nom o adreça IP del servidor Port del servidor Protocol Credencials

Configuració de l’accés remot De vegades, quan s’instal·la un SGBD, sols es pot connectar des de l’equip principal, i cal configurar l’accés des d’equips en la mateixa xarxa o des d’Internet. En cada SGBD haurà un lloc/ fitxer on indicar-ho Comprovar el tallafocs en l’equip client i el servidor Connexions

Servidor Ruta dels fitxers de control Ruta dels fitxers de dades Ruta dels fitxers de LOG Control de connexions de clients

Emmagatzematge S’utilitzen elements lògics que faciliten la gestió dels fitxers tablespaces o filegroup Tipus: -De sistema -Temporal -De registre o UNDO -D’usuari (dades)

Comptes del sistema Compte de root, o system, Es crea automàticament quan s’instal·la el SGBD, i té tots els permisos Alguns sistemes permeten la connexió de l’usuari principal sense contrasenya des del sistema principal on està instal·lat el SGBD

Arrancar i parar l’SGBD Utilització de serveis Els SGBD permeten arrancar en estats intermedis per poder realitzar operacions de manteniment, copies, restauracions, etc...

El diccionari de Dades Repositori d’informació on s’emmagatzemen les metadades del SGBD És una BD propietat d’un usuari amb el rol de DBA És una de les ferramentes més importants del DBA Es crea i es manté automàticament pel SGBD La informació del diccionari de dades no deu modificar-se directament en cap cas

El diccionari de Dades El diccionari de dades proporciona

- L'estructura lògica i física de la BD.
- Les definicions de tots els objectes de la BD: taules, vistes, índexs, triggers,

procediments, funcions, etcètera.

- L'espai assignat i utilitzat pels objectes.
- Els valors per defecte de les columnes de les taules.
- Informació sobre les restriccions d'integritat.
- Els privilegis i rols atorgats als usuaris.
- Auditoria d'informació, com els accessos als objectes

El diccionari de Dades Exemple: Quan creem una taula com la següent en la base de dades

```sql
CREATE TABLE ventas.clientes(
```

idcliente number primary key, nombre varchar(100) not null, apellidos varchar(200) not null,

```sql
telefono char(9) unique  );
```

Internament, el sistema gestor crearà un nou registre en cadascuna de les taules del diccionari de dades on s'emmagatzema la informació referent a tots els objectes que estem creant: Esquema . Taula Si no s’indica l’esquema, la taula es crearà en l’esquema (usuari) des del que s’executa

El diccionari de Dades tabla TABLAS tabla COLUMNAS tabla RESTRICCIONES tabla ÍNDICES

El quadern de Bitàcola

És un LOG on es registren

- totes les modificacions de dades
- totes les transaccions (inici, operacions, fi)
- totes les còpies de seguretat i restauracions

S’utilitza per : -Gestió de transaccions davant un rollback -Recuperació del sistema davant de caigudes -Replicació del SGBD

Documentació (tècnica) Versió i actualitzacions Informació de les BD, E-R, esquemes, objectes, etc.. Usuaris i permisos Programes que generen documentació Mogwai Erwin SQL Workbech

Documentació (institucional) Procediments de còpia i restauració Procediment de registre de dades personals (LOPDGDD) Definició de simulacres Procediments de alta de usuaris i permisos Guia d’estil per a la creació de BD (en una organització)

Configuració d’ ORACLE .........................................................................................

Configuració de l’entorn ORACLE_HOME LD_LIBRARY_PATH ORACLE_SID PATH En Linux

```sql
# echo $ORACLE_SID
# set ORACLE_SID=orclcdb_diferent
# export ORACLE_SID
```

En Windows Des de fora de l’SGBD Des del SO

Com vore la Configuració de l’entorn En Linux

```sql
# env    o     printenv
# echo $ORACLE_SID
# echo $ORACLE_HOME
```

En Windows > set > echo %PATH% L’estructura canvia en windows !!

Configuració de les connexions ORACLE_HOME/network/admin En Windows: Registre de W en la clau TNS_ADMIN fitxers: tnsnames.ora sqlnet.ora listener.ora SERVIDOR

- ON CONNECTAR listener.ora

```sql
# lsnrctl start  | stop | status
```

COM CONNECTAR sqlnet.ora CLIENT tnsnames.ora

```sql
# tnsping orcl;
```

Usarem l’assistent netca per crear i esborrar listeners

Primera connexió

```sql
$ sqlplus / as sysdba
```

SQL> show con_name SQL> select name from v$database; SQL> show user SQL> show pdbs SQL> show sga

Navegar per les PDBs

```sql
$ sqlplus / as sysdba
```

SQL> show con_name SQL> select name from v$database; SQL> show user SQL> show pdbs

```sql
SQL> alter session set CONTAINER=PDB1;
```

SQL> show pdbs

```sql
SQL> alter session set CONTAINER=PDB2;
```

SQL> show pdbs

```sql
SQL> alter session set CONTAINER=cdb$root;
```

SQL> show pdbs Ara estem en la CDB Ara estem en la PDB1 Ara estem en la CDB Ara estem en la PDB2

Configuració de la instància d’ORACLE fitxers SPFILE .../spfileSID.ora ORACLE_HOME/database No es pot editar manualment !!! (és binari) Si es fa, el fitxer resultarà corrupte Es modifica mitjançant comandos PL/SQL ALTER SYSTEM | SESSION SET parametre=valor

```sql
SCOPE = { SPFILE | MEMORY | BOTH }
```

SQL> show parameters SQL> show parameters sga Vista: v$system_parameter SQL> show spparameters Vista: v$spparameter Vista: v$parameter SQL> describe v$parameter Paràmetres del sistema gestor

Configuració de la instància d’ORACLE fitxers SPFILE S’introdueix a partir de la versió 9i d’oracle Substitueix a init.ora ( que era fitxer de text) No es pot editar manualment !!! (és binari) Si es fa, el fitxer resultarà corrupte Es modifica mitjançant comandos PL/SQL ALTER SYSTEM | SESSION SET parametre=valor

```sql
SCOPE = { SPFILE | MEMORY | BOTH }
```

Configuració de la instància d’ORACLE fitxers SPFILE :: Exemple

Configuració de la instància d’ORACLE

Configuració de la instància d’ORACLE Oracle19c - Descripcions dels paràmetres d'inicializació

Configurar les eines i programari client del sistema gestor SQL*Plus SQL Developer

Programari client del sistema gestor SQL*Plus està dins del paquet Oracle Instant Client SQL*Plus és un client / frontend del SGBD d’oracle En un entorn de producció, els clients es trobaran en sistemes/màquines diferents al servidor. Així tindrem un sistema servidor i molts sistemes client connectant al SGBD SQL*Plus ve instal·lat en el servidor automàticament, però en els clients s’ha d’instal·lar manualment

Comptes d’administració SYS: Totes les taules del sistema, dd, vistes, parar i arrancar bbdd SYSTEM: =SYS excepte backup, recuperació, actualització del sgbd PDBADMIN: usuari administrador de cada PDB (no te permisos inicialment, sols connectar) sys i system estan activats quan es crea una bbdd, els altres no (es poden activar després) Connectar a una BBDD (o PDB ) que no siga la de per defecte C:\Users\usuari1> sqlplus sys@localhost/pdb1 as sysdba SQL> conn sys/pass@localhost/orcl as sysdba Usuari lloc BBDD (cdb o pdb) privilegi SYS

Comptes d’administració SYS: Totes les taules del sistema, dd, vistes, parar i arrancar bbdd SYSTEM: =SYS excepte backup, recuperació, actualització del sgbd Connectar a una BBDD (o PDB ) que no siga la de per defecte C:\Users\usuari1> sqlplus system@localhost/pdb1 as sysdba SQL> conn system/pass@localhost/orcl as sysdba Usuari lloc BBDD (cdb o pdb) privilegi SYSTEM

Comandos bàsics en SQL*Plus SQL> edit SQL> define_editor=notepad SQL> help SQL> list SQL> run (r o /) SQL> save fitxer.ext SQL> get fitxer.ext SQL> a text SQL> c /02/03 SQL> clear buffer SQL> del SQL> ....... tutorial SQL*Plus SQL*Plus sols guarda la última ordre, que pot tindre diverses línies..

Esta es pot editar, llistar, executar, etc...

●Des de SERVEIS del SO ●Sentències SQL des de PL/SQL En Windows Serveis: OracleJobScheduler<INST> OracleService<INST> OracleVssWriter<INST> ..... En Linux Scripts en /etc/init.d (de forma manual) -Variables -PATH -Iniciar instància i listener Sols sys pot arrancar i parar la bbdd Arrancada i parada de l’SGBD

ESTATS DEL SERVIDOR (des de consola SQL Plus)

### 1. Shutdown

### 2. Nomount

### 3. Mount

### 4. Open

ESTATS DEL SERVIDOR (des de SO)

- Shutdown
- Open

SQL> SHUTDOWN {NORMAL | TRANSACTIONAL | IMMEDIATE| ABORT }; Sols sys pot arrancar i parar la bbdd Arrancada i parada de l’SGBD

Canviar ESTATS DEL SERVIDOR (des de SO) Permisos !! Asix és administrador Mindundi NO és administrador ...... però no poden Arrancada i parada de l’SGBD

SQL> SHUTDOWN NORMAL; espera que els usuaris actuals es desconnecten de la base de dades abans de tancar-la SQL> SHUTDOWN TRANSACTIONAL; espera que es completen totes les transaccions no compromeses abans de tancar la instància de la base de dades SQL> SHUTDOWN IMMEDIATE; és la forma més comuna i pràctica de tancar la base de dades Oracle. Totes les sessions connectades es desconnecten immediatament, totes les transaccions no compromeses es tornen enrere i la base de dades es tanca completament.

SQL> SHUTDOWN ABORT; no es recomana i només s'utilitza en algunes ocasions. Té un efecte similar quan desconnecteu l'alimentació del servidor. La base de dades quedarà en un estat inconsistent !! Per tant, no hauríeu d'utilitzar mai l'ordre SHUTDOWN ABORT abans de fer una còpia de seguretat de la base de dades. Si proveu de fer-ho, és possible que no pugueu recuperar la còpia de seguretat.

Arrancada i parada de l’SGBD

SQL> STARTUP; (valor por defecte, arranca, munta i obri una BBDD) SQL> SHUTDOWN {NORMAL | TRANSACTIONAL | IMMEDIATE| ABORT }; SQL> STARTUP NOMOUNT; (INICIAR BBDD EN EL PRIMER ESTAT) SQL> STARTUP MOUNT; (SI NO ESTÀ INICIADA) SQL> ALTER DATABASE MOUNT; SQL> STARTUP OPEN; (SI NO ESTÀ INICIADA) SQL> ALTER DATABASE OPEN; SQL> SELECT INSTANCE_NAME, STATUS, DATABASE_STATUS FROM V$INSTANCE; Sols en estat OPEN poden connectar els usuaris de treball Arrancada i parada de l’SGBD Com visualitzar l’estat

Arrancada i parada de l’SGBD

Sessió restringida. És un mode especial de treball per a fer tasques de manteniment de les BBDD. Usuaris amb permís RESTRICTED ( administradors) SQL> startup restricted; SQL> alter system enable restricted session; SQL> alter system disable restricted session; Arrancada i parada de l’SGBD

Des de la CDB es poden vore les PDBs existents des del Diccionari de Dades: SQL> show pdbs SQL> select * from v$pdbs; SQL> select pdb from v$services; Quan es crea una CDB (container data base) i una PDB associada, per defecte la CDB arranca oberta (OPEN), pero la PDB arranca inicialment parada (MOUNTED), així que s’haurà d’obrir manualment Des de la CDB podem obrir una PDB amb SQL> alter pluggable database PDB33 open; I si volem que quan torne a arrancar el SGBD, la PDB arranque oberta, s’ha de guardar l’estat amb

SQL> alter pluggable database PDB33 save state; O tancar-la amb SQL> alter pluggable database PDB33 close immediate; Arrancada i parada de les PDBs

Des de dins d’una PDB SQL> show pdbs (sols es veu una) Parar SQL> shutdown immediate; Arrancar SQL> startup; O obrir-la amb SQL> alter pluggable database open; SQL> alter pluggable database save state; O tancar-la amb SQL> alter pluggable database close immediate; O obrir-la sols lectura SQL> alter pluggable database open read only; Arrancada i parada de les PDBs

Arrancada automàtica En Windows, per defecte, arranquen totes les bbdd automàticament quan arranca el sistema operatiu -Es pot canviar en el registre - regedit En Linux, per defecte, NO arranca cap bbdd automàticament -Es pot canviar en el fitxer oratab en /etc/oratab I habilitant un servei en /etc/init.d/dbora (editar fitxer/servei dbora)

Configuració del emmagatzematge tablespaces i datafiles *Un tablespace és un magatzem lògic dels fitxers de la base de dades. *Crear tablespaces addicionals ajuda a organitzar les aplicacions que es creen sobre la base d'esquemes *Utilitzar tablespaces és fonamental per a la seguretat *Cada tablespace posseeix un o diversos fitxers (datafiles) on emmagatzema tota la informació.

*Cada datafile pot estar en un disc físic diferent -Prevé no col·lapsar els tablespace del sistema. -Ajuda en les còpies de seguretat

- .....

describe dba_tablespaces describe dba_data_files

```sql
select tablespace_name, status from
```

dba_tablespaces;

```sql
select file_name, tablespace_name from
```

dba_data_files; describe dba_free_space Configuració del emmagatzematge tablespaces i datafiles dba_tablespaces dba_data_files dba_free_space

tablespaces i datafiles

```sql
CREATE TABLESPACE nom
```

DATAFILE ‘ruta i/o nom del fitxer’ SIZE xxM AUTOEXTEND ON NEXT xxM MAXSIZE xxG ;

```sql
ALTER TABLESPACE nom ADD DATAFILE .....
ALTER TABLESPACE nom DROP DATAFILE .....
```

alter datafile ‘ruta i nom del fitxer’ resize 150M; Qualsevol usuari pot crear tablespaces si te permís

tablespaces i datafiles

Tipus tablespaces Existeixen en instal·lar

- SYSTEM
- SYSAUX
- UNDO
- TEMP
- USERS

Es poden afegir permanent TABLESPACE (oracle ho recomana) temporary TABLESPACE Es poden canviar d’estat READ ONLY/READ WRITE TABLESPACE OFFLINE/ONLINE TABLESPACE Quan un usuari crea objectes, per defecte, es creen en este tablespace USERS és el tablespace per defecte Però es pot canviar

Borrar un tablespace Cura en esborrar un tablespace

```sql
DROP TABLESPACE tbs_datos1;  «--No borra les dades / datafiles
DROP TABLESPACE tbs_datos1 INCLUDING CONTENTS AND DATAFILES;
```

«-- Una vegada esborrat, l'usuari/s continua tenint-lo com tablespace per defecte. ALTER USER usuari DEFAULT TABLESPACE users; ALTER DATABASE nombbdd DEFAULT TABLESPACE users;

Moure un datafile d’un tablespace SQL> ALTER TABLESPACE DATOS OFFLINE;

```sql
$ mv  datos02.dfb  datos03.dbf
```

SQL> ALTER TABLESPACE RENAME DATAFILE ‘/u01/app/oradata/datos02.dfb’ TO ‘/u01/app/oradata/datos03.dbf’; SQL> ALTER TABLESPACE DATOS ONLINE;

Utilitzar un tablespace

```sql
create table tabla1 (
```

codi number(6), Nom varchar2(40) ) TABLESPACE mitablespace; create index indice1 on tabla1(nom DESC) TABLESPACE mitablespace; SQL>ALTER TABLE ventas.clientes MOVE TABLESPACE DATOS1; En el moment de crear Una vegada creada la taula

Permisos en tablespaces Si no som SYS o SYSTEM necessitarem permisos per manipular tablespaces. S’ha de tindre el privilegi del sistema CREATE TABLESPACE per a crear un tablespace. I per a crear el tablespace SYSAUX, ha de tindre el privilegi del sistema SYSDBA. A més, s’ha de tindre els següents privilegis

```sql
ALTER TABLESPACE, DROP TABLESPACE, MANAGE TABLESPACE, ALTER DATABASE
```

Els permisos es veuen més endavant... en la unitat 3

Localització dels tablespaces Un tablespace se situa en una BD, o si estem en un entorn multitenant, se situa dins d’una PDB ( o de la CDB ) El tablespace USERS del CDB és diferent al tablespace USERS del pdb1 Els datafiles, si no s’especifica la ruta, se situaran tots junts, per això no es pot repetir un nom de datafile.

```sql
CREATE TABLESPACE TABSPC1 DATAFILE ‘fitxer001.dbf’ SIZE 10M;
```

en quina ruta es crea el ‘fitxer001.dbf’ ??

El diccionari de dades en ORACLE A través de Vistes: DBA_ totes, sols dba USER_ propietari ALL_ propietari i autoritzat V$.... TABS .... DUAL DICTIONARY Conté: -Objectes -Usuaris, esquemes, rols, permisos -Procediments (agrupats amb paquets) Vistes dinàmiques

El diccionari de dades en ORACLE S’emmagatzema en l’esquema de l’usuari SYS SYS està present en CDB$ROOT i en totes les PDB En SYS de CDB$ROOT : informació comú a la instància En SYS de cada PDB: informació de la bbdd del PDB

El diccionari de dades en ORACLE Algunes consultes al DD NOTA: Les dades del DD estan en MAJÚSCULES

```sql
SELECT table_name FROM  user_tables;
```

SELECT column_name, data_type, data_default, data_precision, data_scale, nullable FROM user_tab_columns

```sql
WHERE table_name = 'EMPLOYEES';
```

user_tables user_tab_columns

El diccionari de dades en ORACLE Algunes consultes al DD SQL> select table_name from user_tables order by table_name; SQL> select table_name from tabs; *equivalent

```sql
SQL> select table_name from all_tables where owner ='JUAN' order by table_name;
select table_name from all_tables; *totes les que te permís, siga propietari o no
select column_name from all_tab_columns where table_name = 'NOMTAULA'
select username from all_users;
select name from v$database;   *nom del cdb -> SID
```

user_tables = tabs all_tables all_tab_columns all_users v$database

El diccionari de dades en ORACLE SQL> describe user_tables SQL> desc dictionary SQL> desc all_views SQL> describe dba_objects SQL> describe dba_users V$instance V$system_parameter V$session V$parameter V$tablespace user_tables user_tab_columns user_constraints user_indexes user_views user_catalog El comando describe o desc mostra la estructura de la vista

El diccionari de dades en ORACLE TABLESPACES DBA_TABLESPACES V$TABLESPACE DATABASE_PROPERTIES v$database DATAFILES DBA_DATA_FILES V$DATAFILE

- Com explorar-les en el DD

vista dba_tablespaces dba_data_files describe dba_tablespaces

```sql
select tablespace_name from dba_tablespaces;
```

SQL> select * from v$logfile SQL> select * from v$log (forçar rotació dels fitxers Redo Log) SQL> alter system switch logfile; El quadern de Bitàcola Arxiu : Online Redo Log Procés : LGWR Arxiu : Offline Redo Log (ARCHIVELOG) Procés : ARCH En un entorn de producció, estos fitxers deurien estar en un disc físic diferent al que conté els datafiles.

V$logfile V$log

Quadern de Bitàcola Redo log Files. (fitxers de recuperació de dades) Els Fitxers de redo log registren canvis a la base de dades com a resultat de transaccions o accions internes del servidor Oracle. Treballen de manera cíclica. Si un arxiu redo log en línia s'ompli LGWR passarà al següent grup de log en el qual es produeix una operació de punt de control (check point), la informació és emmagatzemada en l'arxiu de control (control file).

```sql
SELECT * FROM V$LOGFILE;
SELECT * FROM V$LOG;
```

Quadern de Bitàcola Els REDO LOG, s’utilitzen per actualitzar la BBDD després de detectar una fallada i restaurar l’última còpia de seguretat, deixar la BBDD en el moment abans de la fallada.

### 1. Detecció de fallada

### 2. Restauració d’última còpia

### 3. S’aplicaran totes les modificacions del

redo log des de la data/hora de còpia restaurada fins al moment de fallada.

Quadern de Bitàcola El mode ARCHIVELOG d’Oracle és un mecanisme de protecció davant fallades de disc implementat per Oracle. ARCHIVELOG guarda fora de línia els arxuis redo log que no estan actius. D’esta manera, quan es fa la transició de l’últim al primer, abans el primer s’ha guardat fora de línia El mecanisme ARCHIVELOG no ve activat per defecte !!!

Quadern de Bitàcola Com activar-lo: En la BBDD en la que es vol activar, com a sys SQL> archive log list SQL> alter system set

```sql
log_archive_dest_1='LOCATION=/archivelog/soyundba/arch' SCOPE=SPFILE;
```

SQL> alter system set log_archive_format='soyundba_%r_%t_%s.arc'

```sql
scope=spfile;
SQL> alter system set LOG_ARCHIVE_START=TRUE SCOPE=spfile;
```

SQL> shutdown immeditate; startup mount; SQL> alter database archivelog; SQL> alter database open; SQL> archive log list SQL> select name, log_mode from v$database; SQL> ALTER SYSTEM SWITCH LOGFILE; El mecanisme ARCHIVELOG no ve activat per defecte !!!

Fitxers LOG Alert LOG LOG de processos de background LOG d’usuaris Es gestionen a través de ●EM (Enterprise Manager) deprecated ! ●Vistes del DD (v$diag_info) LOGs de serveis $ORACLE_HOME/startup.log $ORACLE_HOME/listener.log deprecated En windows $ORACLE_BASE$\diag\rdbms\nombbdd\nombbdd\trace C:\oracle\diag\rdbms\nombbdd\nombbdd\trace En Linux /u02/app/oracle/diag

“ ” Activitat Instal·la Oracle Developer en OL8 escriptori Executa Oracle Developer Crea una connexió a la BBDD Crea una connexió al PDB creat Crea una taula d’exemple en el PDB

Configuració de PostgreSQL .........................................................................................

Els fitxers de configuració es troben en ??¿¿ Fitxer: pg_hba.conf Host all all 0.0.0.0/0 md5 -> permetre connexió a tots Fitxer: postgresql.conf listen_addresses = '*' En cada distribució poden estar en un lloc diferent: buscar su find / -name pg_hba.conf

Aplicar canvis

```sql
# macOS con Homebrew
$ brew services restart postgresql
# Debian o Ubuntu
$ sudo service postgresql restart
# Fedora o CentOS
$ sudo service postgresql restart
# Archlinux
$ sudo systemctl restart postgresql
```

Crear BBDD

```sql
$ sudo -u postgres createuser -P -d testdb-user
```

Enter password for new role: Enter it again: o

```sql
$ createdb testdb -U testdb-user -h localhost
```

Password

```sql
$ psql testdb -U testdb-user -h localhost
```

Password for user testdb-user: testdb=>

El diccionari de dades en PostgreSQL Algunes consultes al DD Usuaris: \du \du+ Taules: \dt (describe table)

```sql
SELECT table_name FROM information_schema.tables
WHERE table_schema='public' AND table_type='BASE TABLE';
```

O

```sql
SELECT * FROM pg_catalog.pg_tables;
```

Columnes: \d nom_taula

```sql
select column_name, data_type, is_nullable from information_schema.columns where
table_name = 'nom_taula';
```

Arrancada i parada en PostgreSQL [postgres]$ pg_ctl -D data -l fitxerlog start | stop | restart | reload [postgres]$ sudo service nombre_del_servicio reload I amb la variable $PGDATA [postgres]$ pg_ctl -D $PGDATA restart

Fitxers LOG en PostgreSQL L’arxiu de log s’ubica segons el valor de la propietat log_directory i log_filename. S’activa el log amb la propietat logging_collector si logging_collector = ‘on’ Fitxer: postgresql.conf (secció REPORTING AND LOGGING Procés logger

Configuració del emmagatzematge en PostgreSQL Bases de dades: \l+

```sql
select pg_size_pretty(pg_database_size('nombd'));
```

Taules: \d+

```sql
select pg_size_pretty(pg_relation_size(‘nomtaula’));
```

Configurar les eines i programari client del sistema gestor PSQL pgadmin4

Programari client del sistema gestor PSQL

```sql
sudo apt-get update
sudo apt-get install postgresql-client
$ psql -h postgresql13.guebs.net -U nom_usuari -d nom_base_de_dades
```

“ ” Activitat Utilitza psql/PostgreSQL per a crear una BBDD «exemple» Crea un usuari nou ASIXDBA Assigna privilegis al nou usuari Configura PostgreSQL perquè deixe accedir des de la xarxa local on està Fes proves de connexió

---

# 2.2 Tablespaces i datafiles

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD TABLESPACES i DATAFILES en ORACLE Un tablespace és un magatzem lògic dels objectes de la base de dades tablespace es un concepte, conté datafiles ( u o més) datafiles Fitxers físics, formen part dels tablespaces, pertanyen a un tablespace ( només un ) i a una instància Quan es creen, ocupen tot l'espai assignat ( si no hi ha suficient espai, no es creen) Quan es creen, estan buits, però ocupen espai.

Poden estar emmagatzemats en discos Crear tablespaces Primer, Des de SO : mkdir /u01/app/oracle/oradata/curso , preparar carpeta (també es pot utilitzar una carpeta ja existent) Segon: Des de SQL Developer o sqlplus SQL> create tablespace curso datafile ‘C:\oracle\product\19300\oradata\ORCL\PDB1\c01.dbf’ size 50M; Consulta al DD

```sql
select file_name, blocks, tablespace_name  from  dba_data_files;
```

OPCIÓ ............AUTOEXTEND ON NEXT 100M MAXSIZE 10G; Tablespaces temporals. SQL> create temporary tablespace curso_temp tempfile ‘/u01/app/oracle/oradata/curso/curso_temp_01.dbf’ size 50M : Consultar tablespaces SQL> select username, temporary_tablespace from dba_users; SQL> select tablespace_name, contents from dba_tablespaces; Assignar tablespaces SQL> alter user ‘prueba’ default tablespace ‘users’ temporary tablespace ‘cusro_temp’; Quotes sobre tablespaces, si no tenen quota, no podrà emmagatzemar res en el tablespace.

SQL> alter user ‘prueba’ quota 100M on ‘curso’; SQL> alter user ‘prueba’ quota unlimited on ‘curso2’; Crear objectes en altres tablespaces ( que no siguen el tablespace per defecte)

```sql
SQL> create table t_cursos ( ......) tablespace curso2;
```

Redimensionar tablespace SQL> alter tablespace curso add datafile ‘/u01/app/oracle/oradata/curso/curso_02.dbf’ size 100M; SQL> alter database datafile ‘/u01/app/oracle/oradata/curso/curso_01.dbf’ resize 200M;

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD

---

# 2.3 Us d'SQL*Plus

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Ús d’sql*plus connexió sqlplus / as sysdba o sqlplus usuari/contrasenya sentències PL/SQL acabades amb ; una sentència pot ocupar varies línies SQL> SELECT 2 EMPNO, ENAME, JOB, SAL 3 FROM EMP 4 WHERE SAL < 1500; You can end a SQL command in one of three ways

•with a semicolon (;) (guarda en buffer i executa) •with a slash (/) on a line by itself (guarda en buffer i executa) •with a blank line (guarda en buffer però no executa) Però, Que és el buffer?. “SQL*Plus emmagatzema en un buffer l'última sentència SQL introduïda. El buffer manté només una sentència cada vegada, i si s'introdueix una nova sentència se sobreescriu sobre l'anterior” vore última sentència SQL> L repetir la sentència SQL> run o SQL> / ====> sols es pot editar la última sentència !!

modificar part de la sentència SQL>C/fuente/destino (change) repetir/executar la sentència modificada SQL> run o SQL> / com modificar (editar) amb editor extern SQL> edit com canviar l’editor SQL> define_editor=vi SQL> define_editor=nano us de . en sentència interactiva ( procedures ) SQL> DECLARE

```sql
2      x   NUMBER := 100;
```

3 BEGIN 4 FOR i IN 1..10 LOOP 5 IF MOD (i, 2) = 0 THEN --i is even

```sql
6            INSERT INTO temp VALUES (i, x, 'i is even');
```

7 ELSE

```sql
8            INSERT INTO temp VALUES (i, x, 'i is odd');
```

9 END IF;

```sql
10          x := x + 100;
```

11 END LOOP; 12 END; 13 . SQL> / Guardar buffer en un fitxer : SAV[E] file_name[.ext] Omplir buffer des d’un fitxher: GET file_name[.ext] blocs anònims → (es veu millor en sql developer)

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Sentència PL/SQL ≠ Comando sql*plus Comando describe SQL> DESCRIBE DEPT SQL> DESCRIBE afunc Comando show SQL> show user SQL> show con_name Comando help SQL> help show Comando SET Autocommit SET AUTOCOMMIT ON Turns autocommit on.

SET AUTOCOMMIT OFF Turns autocommit off (the default). SET AUTOCOMMIT n Commits changes after n SQL DML commands. SET AUTOCOMMIT IMMEDIATE Turns autocommit on. Formatear columnas ( SQL*Plus commands no requieren ; ) SQL> set lines 80 -- linesize SQL> set pages 100 -- pagesize SQL> set feedback on SQL> set timing on SQL> set pause on SQL> set trimspool on ...

column tbs format a25 word_wrapped column porc_usado format 990.00 column libre format 999,990.00 Limpiar formato de una columna column tbs clear Encabezados y pies SQL> ttitle skip 2 center 'Fecha del sistema' SQL> btitle skip 1 left 'Esa fue la fecha' o quitar ttitle off btitle off otros comandos set tab on | off set space n (0 a 10) SQL> set colsep '|' SQL> set underline '=' SQL*Plus commands have a different syntax from SQL commands or PL/SQL blocks.

SQL> COLUMN SAL FORMAT $99,999 HEADING SALARY Partir comandos SQL*Plus amb el guió - SQL> COLUMN SAL FORMAT $99,999 - > HEADING SALARY

---

# 2.4 Solucions errors de connexió amb SQLDeveloper

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Possibles Fallades (i solucions) quan es crea una connexió en sqlDeveloper fallo de la prueba error de e/s. the network adapter could not establish the connection possibles causes ...

No estan tots els serveis arrancats Paràmetres de connexió correctes. Si posem usuari SYS : ROL → SYSDBA obligatori Contrasenya: La que posarem en instal·lar la BBDD Si posem altre usuari que no siga SYS o SYSTEM (jose, enrique, dani, etc...) L’usuari ha de tindre privilegi de CONNECT Els usuaris no poden tindre la password buida o nula.

En el nom de host, no posar localhost, posar la IP, i ha de tindre connectivitat (El server ha d’estar en la mateixa xarxa). O Poder fer ping.

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Utilitzar SID o Nombre de Servicio Si es bbdd tradicional , utilitzar : SID Si es PDB d’una una bbdd multitenant , utilitzar :Nombre del Servicio La bbdd o la pdb no està arrancada. Entrar en sqlplus i comprovar.

Firewall (en servidor) . Desactivar o posar regla de entrada del port 1521 El listener no està configurat. Configurar listener (netca) i provar lsnrctl stop lsnrctl start lsnrctl status Revisar els fitxers: listener, sqlnet i tnsnames i dins, si hi ha nom de host, canviar-lo per la IP del equip. Posar en tots els llocs la IP .

Sempre que fem canvis, parar i iniciar serveis d’Oracle

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD En SQL Developer: No connecta, una vegada desconnectat En SQL Developer no es pot fer, com si es podia fer en SQL*Plus En SQL Developer s’ha de connectar des del panel esquerre. I es poden tindre moltes connexions en pestanyes diferents.

També es pot connectar polsant (ALT-F10) o sobre la icona

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Més informació en https://aflorestorres.com//20/the-network-adapter-could-not-establish-the-connection- el-adaptador-de-red-no-pudo-establecer-la-conexion/ http://www.rebellionrider.com/sql-developer-error-the-network-adapter-could-not-establish-the- connection/ https://soyundba.com//23/estado-fallofallo-de-la-prueba-error-de-e-s-the-network- adapter-could-not-establish-the-connection/ https://kb.tableau.com/articles/issue/error-io-error-the-network-adapter-could-not-establish-the- connection-occurs-when-connecting-to-oracle-using-net-service-name-tnsnames-ora?lang=es-es https://support.quest.com/es-es/kb/4286571/io-error-the-network-adapter-could-not-establish- the-connection https://forums.oracle.com/ords/apexds/post/the-network-adapter-could-not-establish-the- connexion-9129 https://www.dba-oracle.com/t_network_adapter_could_not_establish_connection.htm https://www.dba-oracle.com/t_troubleshooting_sql_net_connectivity_errors.htm https://www.dba-oracle.com/art_builder_tns.htm

---
