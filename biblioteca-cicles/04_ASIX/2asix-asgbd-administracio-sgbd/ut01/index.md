---
layout: default
title: "UT1 — Instal·lació d'un SGBD — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT1 Completa"
prev_url: "../ut00/ut0004.html"
prev_label: "⬅️ 0.4 Beques OpenWebinars"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Preparació de l'entorn ➡️"
---

# 📘 UT1 — Instal·lació d'un SGBD (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**1.1 Preparació de l'entorn**](#ut0101) (o [obrir en pàgina individual ➡️](./ut0101.md) )
> - [**1.2 Instal·lació d'un SGBD**](#ut0102) (o [obrir en pàgina individual ➡️](./ut0102.md) )
> - [**1.3 Videos d'instal·lació**](#ut0103) (o [obrir en pàgina individual ➡️](./ut0103.md) )
> - [**1.4 Primers passos. Ordres bàsiques**](#ut0104) (o [obrir en pàgina individual ➡️](./ut0104.md) )
> - [**1.5 Arquitectura BBDD's en Oracle**](#ut0105) (o [obrir en pàgina individual ➡️](./ut0105.md) )
> - [**✍️ Activitats pràctiques UT1**](#ut01actividades) (o [obrir en pàgina individual ➡️](./ut01actividades.md) )

---

## 1.1 Preparació de l'entorn

### UNITAT 01 Preparació entorn

Preparació entorn de treball

Les màquines d’ ASGBD sols s’utilitzen en ASGBD Les màquines d’altres mòduls no s’utilitzen en ASGBD

Crear compte en ORACLE https://profile.oracle.com/myprofile/account/create-account.jspx Ens permetrà baixar software. Comunicar al professor el mail del compte creat en ORACLE

Primera instal·lació Amb SQL*PLUS Amb Sql Developer

Segona instal·lació

Segona instal·lació

Anotar de cada màquina virtual. ✔Nom ✔IP ✔Usuaris del SO i claus ✔Usuaris del SGBD i claus ✔Altres Configuracions

Tercera instal·lació

Quarta instal·lació

Cinquena instal·lació

Sisena instal·lació

---

## 1.2 Instal·lació d'un SGBD

### UNITAT 01 Instal·lació d’un SGBD

Instal·lació de sistemes gestors de bases de dades

Elements d’un sistema gestor de bases de dades -Característiques dels principals sistemes gestors de bases de dades -Seleccionar el sistema gestor de bases de dades -Programari necessari per dur a terme la instal·lació -Requisits de maquinari -Documentació del procés d'instal·lació -Fitxers de registre -Verificació del funcionament del sistema gestor de bases de dades

Però..... ¿Què és un SGBD? Un SGBD és un conjunt de programes que permeten l'emmagatzematge, la modificació i l'extracció de la informació d'una base de dades, a més de proporcionar eines per a explotar, administrar i gestionar les bases de dades. En anglés DBMS o RDBMS DataBase Management System

I ..... ¿Què és un DBA? La figura del DBA fa referència a la persona o a l'equip de persones responsables d'assegurar la disponibilitat de les dades d'una organització i l'accés als mateixos de manera òptima. Serà el responsable de tot el cicle de vida del sistema d’informació

Cicle de vida del SGBD Posar en marxa el SGBD -Triar el sistema mes idoni -Instal·lar i configurar el SGBD i les BD -Dissenyar l'arquitectura i desplegar els SGBD's Establir mecanismes de seguretat -Crear i mantindre usuaris i permisos -Establir auditories -Establir mesures de seguretat addicionals Explotar el SGBD -Arrancar i parar el SGBD -Fer còpies de seguretat -Monitorar i optimitzar el SGBD Administrar el SGBD -Col·laborar amb l'administrador de sistema -Establir estàndards d'ús, polítiques d'accés i bones pràctiques en el dissenys de BBDD -Dissenyar un pla de recuperació -Automatitzar tasques d'administració -Assegurar disponibilitat de les dades

Tasques del DBA ●Configurar HW on s’instal·larà el SGBD ●Configurar el SO ●Instal·lar i mantenir el SGBD ●Crear i configurar BBDD ●Control d’usuaris i permisos ●Gestió de la seguretat ●Monitoritzar i optimitzar el rendiment de les BBDD ●Realitzar tasques de copies de seguretat i recuperació

BBDD’s SGBD Aplicació / usuari

BBDD’s SGBD Aplicació / usuari

https://db-engines.com/en/ranking Quants SGBDs hi han en el ranking ??

https://db-engines.com/en/ranking Quants SGBDs hi han en el ranking ?? Dels 5 primers, quants son open source ?? Dels 7 primers, quins sistemes operatius suporten ?? El 8e i el 9e, quins sistemes operatius suporten ?? Els 2 primers, a quina empresa pertanyen ??

Classificació MONOUSUARI MULTIUSUARI Centralitzats Distribuïts Navegacionals Relacionals Orientats a objectes NoSQL

Classificació SQL NoSQL Programari Lliure Programari Privatiu MySQL MariaDB PostgreSQL SQLite Oracle Database SQL Server DB2 Informix EULA CLUF GPL BSD MIT Apache CC ACID CAP o Brewer Llicències

“ ” Activitat Investiga quins són els SGBD més utilitzats i localitza entre ells dos sistemes monousuari i dos sistemes multiusuari. Per a què s'utilitzen principalment els uns i els altres?

¿Com funciona? DESCONNEXIÓ OPERACIÓ ...... OPERACIÓ OPERACIÓ CONNEXIÓ CLIENT – SERVIDOR

Tipus de connexió MySQLi PDO Consola -In situ- -SSH- Entorn gràfic

Funcions d’un SGBD DDL (CREATE ALTER DROP TRUNCATE COMMENT RENAME) DML (INSERT DELETE UPDATE SELECT ) DQL (SELECT) DCL (GRANT, REVOKE) TCL (BEGIN TRANSACTION COMMIT, ROLLBACK) Integritat referencial Auditoria Temps de resposta idoni Independència física i lògica Monitorització del SGBD Connectivitat Còpia i recuperació

Nivells d’abstracció, derivats del model ANSI/X3/SPARC Nivell extern ► Programadors , desenvolupadors Nivell conceptual ► Analistes i dissenyadors Nivell lògic ► Analistes Nivell intern ► DBA Nivell físic ► administrador del sistema

Nivells d’abstracció, derivats del model ANSI/X3/SPARC

Opcions de funcionament d’un SGBD SGBD Mono-capa (e.g. Access) SGBD Dos capes (client BD) SGBD Tres capes (App, WebApp)

Interfícies d’acces a SGBD > API ODBC (microsoft) JDBC (sun microsystems) OLE DB (Object Linking and Embedding for Databases ) ADO (Vbasic microsoft) ADO.net (.net microsoft) GDA (GNU Data Access)

Elements / components d’un sistema gestor de bases de dades -Processador de consultes -Gestor de la base de dades -Gestor de fitxers -Interfícies externes -Preprocessador del llenguatge de manipulació de dades -Compilador del llenguatge de definició de dades -Gestor del diccionari

Tipus de BD Transaccionals (OLTP) Múltiples usuaris i gran quantitat de transaccions Transaccions simples El 90% de la informació emmagatzemada no se sol consultar (històric) Data warehouse (OLAP) Emmagatzemen grans volums d'informació La informació procedeix de diferents fonts Les dades són accedides per pocs usuaris que realitzen poques consultes però que són molt pesades

Factors d'elecció del SGBD -Tipus d’SGBD en funció: Usuaris, localització i estructura. -Arquitectura i connectivitat -Recursos i política d'empresa -Mena de BD que es vaja a crear -Requisits del sistema

Requisits del sistema Sistema Operatiu ( i versió) Disc Dur (espai) Memòria Processador (potencia i quants) Connectivitat Llibreries addicionals

Instal·lació d’un SGBD .........................................................................................

Abans de començar: Verificar els requisits d’instal·lació En cada SGBD hi hauran uns que podem trobar en la documentació de cada versió del producte concret ..... ORACLE, PostgreSQL, MySQL, etc.. Requisits HW Existència paquets i versions Comunicacions Espai lliure Usuaris Kernel Variables d’entorn

Components de la instal·lació Motor de l’SGBD Interfícies externes Eines d’administració

Registre de la instal·lació (log de la instal·lació) Tots els instal·ladors de sistemes gestors de bases de dades guarden registre de les operacions dutes a terme durant la instal·lació i són d'utilitat en cas que es produïsca algun problema, per a diagnosticar el motiu d'aquest.

L'estructura i localització del registre d'instal·lació dependrà del SGBD

Instal·lació d’ORACLE Requisits (teòrics) enWindows enLinux >1GB mem RAM Connectivitat a Internet Kernel compatible (en Linux) Swap = RAM (en Linux) >1GB en carpeta temporal 8GB per a SGBD +GB per a BBDD Gràfica 1024x768 amb 256 colors Components: ●DBCA (BD) ●Netc.A (listener) ●Netmgr (connexions) ●RMAN (Cop Seg) ●Aplicacions clients de gestió ●SQL*Plus ●SQL Developer ●SQLcl ●DBeaver ● EM. Enterprise Manager (deprecated) Assistent OUI Usuari administrador: oracle

Instal·lació d’ORACLE Requisits (realistes) >2GB mem RAM + 2 processadors Connectivitat a Internet Kernel compatible (en Linux) Swap = 2 x RAM (en Linux) >1GB en carpeta temporal en Windows 50GB mínim SO+SGBD+1BBDD Gràfica 1024x768 amb 256 colors Components: ●DBCA (BD) ●NetCA (listener) ●Netmgr (connexions) ●RMAN (Cop Seg) ●Aplicacions clients de gestió ●SQL*Plus ●SQL Developer ●SQLcl ●DBeaver Assistent OUI Usuari administrador: oracle Executar com administrador des de CMD

Instal·lació d’ORACLE Instància Conjunt de processos que tenen la seua pròpia àrea de memòria global i una DB associada a ells. És la combinació dels processos en ‘background’ i les estructures de memòria Cada vegada que s'inicia una instància s'assigna una àrea global del sistema (SGA) i s'inicien els processos en background Oracle Quan es connecta un usuari, se assigna una àrea global de programa (PGA) BBDD L'estructura complexa de fitxers emmagatzemats en disc

Instal·lació d’ORACLE Program global area (PGA) nonshared memory region System global area (SGA)

Instal·lació d’ORACLE Arquitectura tradicional de Oracle. (non-CDB) Arquitectura Multitenant Contenidor principal és la BBDD Multitenant està des de la versió 12c Un SGBD Oracle pot «soportar» diverses BBDD al mateix temps !!! A partir d’oracle21c sols es permeten les bbdd multitenant !!

Instal·lació d’ORACLE Arquitectura Multitenant de Oracle. Contenidor principal CDB que conté: CDB&ROOT PDB&SEED (Plantilla de PDB’s) PDB1 (Pluggable Data Base) PDB2 (Pluggable Data Base) PDB3 (Pluggable Data Base) ....... Les PDB’s son les BBDD de treball Es pot donar altres noms !!

Instal·lació d’ORACLE Instal·la SGBD Des de Windows Un programa executable s’encarrega de guiar tot el procés. Des de Linux Preparar el sistema ( scripts, variables, etc. Instal·lar Completar accions post-instal·lació Instal·lar un SGBD ( Oracle ) i instal·lar una BBDD son processos diferents , encara que el programa pot fer-ho tot al mateix temps.

Instal·lació d’ORACLE Des de Windows (creació d’una BBDD (CDB) ) Un programa executable s’encarrega de guiar tot el procés. Des d’un CMD amb permisos d’administrador C:\Windows\system32> dbca

Instal·lació d’ORACLE Des de Windows (creació d’una PDB (en una BBDD (CDB) existent) Un programa executable s’encarrega de guiar tot el procés. Des d’un CMD amb permisos d’administrador C:\Windows\system32> dbca

Instal·lació d’ORACLE Standard OFA L'estàndard OFA d’Oracle és una sèrie de recomanacions per a nomenar arxius i carpetes en instal·lar i implementar una base de dades Oracle. L'estàndard OFA està dissenyat per a organitzar grans quantitats de programari i dades en disc, simplificar les tasques d'administració, maximitzar el rendiment i ajudar a canviar entre bases de dades Oracle.

- Entorn Unix/Linux

/u01/app/oracle/product/19.3.0.0

- Entorn Windows

C:\oracle\product\ora19300\ Que és la OFA ?

Accés a ORACLE Des de cmd (en windows 10) C:\Users\oracle> sqlplus / as SYSDBA SQL> show user SQL> show con_name SQL> select name from v$database; // nom de la CDB SQL> show pdbs // mostra nom i estat de les PDB’s SQL> conn system //Connecta des de dins d’sql*plus SQL> show sga SQL> show user SQL> show pdbs // <- dona error SQL> disc; // Desconnecta SQL> exit C:\Users\oracle> I des de l’usuari que ha instal·lat oracle

Accés a ORACLE Des de cmd (en windows 10) C:\Users\oracle> sqlplus / as SYSDBA SQL> show pdbs I des de l’usuari que ha instal·lat oracle Plantilla de PDB’s

Accés a ORACLE Des de cmd (en windows 10) C:\Users\oracle> sqlplus /@localhost/NOMPDB as SYSDBA SQL> show user SQL> show con_name SQL> show pdbs SQL> conn system/1234@localhost/NOMPDB SQL> show sga SQL> show user; SQL> disc; // Desconnecta SQL> exit C:\Users\oracle>

Accés a ORACLE Des de cmd (en windows 10) C:\Users\oracle> sqlplus / as sysdba SQL> show con_name SQL> select name from v$database; SQL> show pdbs

```sql
SQL> alter session set container=NOMPDB ;
```

SQL> show con_name SQL> show pdbs SQL> startup SQL> exit C:\Users\oracle> SQL> alter session set container=cdb$root;// torna a CDB I des de l’usuari que ha instal·lat oracle

Accés a ORACLE Des de consola (en linux)

```sql
$ . oraenv
$ lsnrctl start
$ sqlplus / as SYSDBA
$ startup
```

SQL> show con_name SQL> select name from v$database; SQL> show pdbs;

```sql
SQL> alter session set container=NOM_PDB ;
```

SQL> show con_name SQL> show user SQL> conn system; // Connecta SQL> disc; // Desconnecta Si les variables d’entorn no estan establides en .bash_profile Sols es pot entrar en SYS sense password des de l’usuari que ha fet la instal·lació del SGBD

Accés a ORACLE Des d’SQL*Plus C:\Users\oracle> sqlplus / as SYSDBA SQL> show user SQL> show con_name SQL> select name from v$database; SQL> show pdbs SQL> help index SQL> help show SQL> disc SQL> disconnect SQL> exit C:\Users\oracle> Però, què és SQL*Plus ?? SQL*Plus és un programa de línia de comandos de Oracle que pot executar comandos SQL i PL/SQL de manera interactiva o mitjançant un script.

És un programa client per a connectar de manera senzilla amb el servei de base de dades de Oracle, de manera local o remota i poder donar-li ordres podem obrir diversos sql*plus en diferents finestres de CMD

Accés a ORACLE Des d’SQL Developer Però, què és SQL Developer ?? Oracle SQL Developer és una interfície gràfica d'usuari gratuïta que permet als usuaris i administradors de bases de dades fer les seues tasques amb menys clics i pulsacions de tecles. És un programa client GUI per a connectar de manera senzilla

Connexió a CDB

Connexió a PDB

Accés a ORACLE Des de DBeaver ●Oracle ●PostgreSQL ●MySQL ●MariaDB ●SQLite ●MongoDB ●Cassandra ●....... Des de TOAD ●Oracle DB ●MySQL ●IBM DB2 ●M SQL Server ●PostgreSQL ●SAP HANA ●MongoDB ●Cassandra ●Amazon Redshift ●Azure SQL DB ●........ SW privatiu

50- Creació d’una PDB manualment Des d’usuari SYS , des de la CDB ( NO des d’una PDB ) Crear una nova PDB amb comando sql < CREATE PLUGGABLE DATABASE >

```sql
SQL> CREATE PLUGGABLE DATABASE nom_pdb ADMIN USER pdbadmin1 IDENTIFIED BY 1234 roles=(dba);
```

Esborrar una PDB amb comando sql SQL> ALTER PLUGGABLE DATABASE pdb_manual CLOSE IMMEDIATE;; SQL> DROP PLUGGABLE DATABASE pdb_manual INCLUDING DATAFILES;

51- Esborrat d’una CDB manualment Des de cmd amb permís d’administrador C:\Windows\system32>dbca -silent -deleteDatabase -sourceDB nombbdd -sysDBAUserName sys -sysDBAPassword 1234

Instal·lació de PostgreSQL Requisits >512MB mem RAM Conectivitat a Internet Kernel compatible (en Linux) 1GB per a SGBD +GB per a BBDD Components: *psql *phpPgAdmin *pgAdmin4 ( web i escriptori) Usuari administrador: postgres

Instal·lació de PostgreSQL Des de Windows Un programa executable s’encarrega de guiar tot el procés. Les últimes versions inclouen un servidor web per accedir al SGBD Des de Linux Dependrà de la distribució, però sol ser amb repositoris

```sql
# sudo apt update
# sudo apt install postgresql postgresql-contrib
```

Instal·lació de PostgreSQL On està el log d’instalació de postgreSQL ??

Instal·lació de PostgreSQL Connectar des de consola (psql) -Obrir terminal -Ser usuari postgres su postgres -Executar psql (entra en la bbdd postgres amb usuari postgres) Es poden utilitzar opcions.... psql -h (ip_serv) -U (usu) -d (BBDD) O psql -U (usu) -d (BBDD) O psql (BBDD) (usu) Primers comandos: \? \h \conninfo \dt \z \q(eixir)

Instal·lació de PostgreSQL Crear usuari ( rol ) -Obrir terminal -Ser usuari postgres su postgres -Executar createuser nomusuari Crear BBDD -Obrir terminal -Ser usuari postgres su postgres -Executar createdb nomBBDD createdb nomBBDD -T plantilla createdb nomBBDD -O usuari

Instal·lació de PostgreSQL Crear usuari ( rol ) des de postgres -Obrir una bbdd -CREATE USER nomusuari WITH PASSWORD ‘passwddeusuari’; -GRANT ALL PRIVILEGES ON DATABASE nombd TO nomusuari; Crear BBDD des de postgres -Obrir una bbdd -CREATE DATABASE novabd; -CREATE DATABASE novabd WITH TEMPLATE plantilladb; -CREATE DATABASE novabd WITH OWNER usuari;

Instal·lació de PostgreSQL Connectar des de gui (pgAdmin)

---

## 1.3 Videos d'instal·lació

#### **Videos**

I[nstal·lació Oracle SGBD](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EcfsR3D4lLtPnQOjEgpKcrEBiHRbrclP1ifCcuO4XNSeig?e=8Zfcsb)

I[nstal·lació listener Oracle SGBD](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EWCBZZcwv3ZEqjkS26TDNfEBf5o4iCSKN12IObwEW-LQhA?e=wezbqm<br></p>)

[Crear Bd1](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/ESar-RWmcphKvS69dTTjvs0B0kJIBWFkh8WZrrg-JkwGdg?e=jr6PFc)

[Crear Bd2](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EU2cTmkPXq9CuJHt-mtFo88BpsUGj5BFGAFD9ktnr61GzQ?e=wbpf8Z)

[Oracle SID](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EUT9caxbd7NHkdfx6wGQjEEBMpaqtRJOy7RZEkXmYoKzYQ?e=dJZaAL)

[BBDD Multitenant](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EXKpVI3VKtNHgkMHFC904YsBJ9uuDg_gxiBGp1zg5GNqQw?e=wa47zf)

[Connexió bàsica](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EQmONqtwrjRKlgXvbC0G3LsBzKNICQh1p1Ai3oWVhyAoHQ?e=FL6C72)

[Funció SAVE STATE](https://gvaedu-my.sharepoint.com/:v:/g/personal/em_iborrasanjaime_edu_gva_es/EaJXKb5sNSREic3l2aeYODMBiRy_F8drIos7EfFFvFx8uw?e=NuHHLd)

---

## 1.4 Primers passos. Ordres bàsiques

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Ordres bàsiques (connexió, desconnexió, ....) En linux netca dbca lsnrctl status | start sqlplus / as sysdba

```sql
sql>  startup
```

show con_name show user show pdbs show release show sga

```sql
alter session set container=»nompdb»;
```

help index help show En windows sqlplus / as sysdba <-- connexió de sys SQL> show pdbs SQL> select name from v$database; SQL>show con_name SQL>show user SQL>show pdbs SQL>show release SQL>show sga sqlplus /@localhost/pdb1 as sysdba <-- connexió de sys a pdb1 directament SQL> alter database open; o SQL> startup SQL> alter pluggable database pdb1 open; SQL> alter pluggable database pdb1 save state;

```sql
SQL> alter session set container=pdb1;
```

La pdb1 deu estar oberta per poder connectar amb qualsevol usuari diferent a sys SQL> conn usu/12345@localhost:1521/pdb1 as sysdba; SQL> conn usu/12345@localhost:1521/pdb1 ; o c:\ ...> sqlplus usu/12345@localhost:1521/pdb1 as sysdba; c:\..> sqlplus usu/12345@localhost:1521/pdb1 ; Una vegada oberta , connectar amb system conn system conn system/1234@localhost/pdb1 conn system/1234@localhost/pdb1 as sysdba *** (system pot entrar amb i sense privilegis)

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Si passa açò És perquè : S’ha intentat accedir massa pronte La bbdd encara no esta alçada completament. Solució: Esperem un poc, i torner a intertar-ho (exit i tornar a connectar)

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Si passa açò És perquè : la bbdd està parada Solució: l’arranquem amb startup (tarda un poc....) -------------------------------- Si passa açò Perquè: No es pot entrar com a sys (/) sense rol de sysdba sqlplus system sqlplus system as sysdba deuen de funcionar els dos

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Si passa açò És perquè : No es te suficients privilegis. Solució: Eixir i entrar amb privilegis

---

## 1.5 Arquitectura BBDD's en Oracle

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD SGBD (Programari de BBDD + conjunt de CDBs i DBs) BBDD ‘tradicional’ o stand-alone = BBDD de treball autònoma, aïllada BBDD multitenant = CDB + (pdb, .......) CDB Contenidor Principal d’una BD Multitenant PDB Base de Dades de Connexió - Pluggable Data Base. Base de Dades de Treball.

PDB SEED llavor, plantilla o template d’altres PDBs Instància: BBDD en funcionament, amb dades i processos en memòria. Una instància és el conjunt de processos que s'executen en el servidor així com la memòria que comparteixen per accedir i manipular les dades. SGA (System Global Area) : Àrea de memòria compartida de la instància PGA (Program Global Area) : Àrea de memòria privada de cada procés.

Crear, esborrar, modificar BBDD en ORACLE comando dbca (executar des de un cmd ‘amb privilegis d’administrador’) SGBD PDB (exemple: orclpdb) Les PDB són les BD de treball, on es connectaran les APP de usuaris CDB (exemple : orcl ) Les CDB son les BD de dades de configuració global

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Quan es crea una BD multitenant nova, es crea una CDB i l'habitual és crear una primera PDB. El nom de la CDB s'indica en ‘1’ , i no pot repetir-se amb altres noms d'altres CDB ja creades anteriorment. Aquest nom correspondrà amb el SID. Pot ser diferent si optem per una configuració avançada.

El nom de la primera PDB s'indicarà en ‘2’. Podem crear una BD tradicioanl desactivant el check ‘3’ Si no canviem el nom de la BD Global o CDB ens donarà aquest error Quan es crea un PDB ‘a posteriori’, hem d’escollir en quina CDB. I a continuació, escollim la plantilla. Sol estar la plantilla per defecte.

I per últim, el nom de la PDB, el nom de l’usuari administrador i les claus d’accés

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Casos possibles BBDD Multitenant (CDB + PDB ) BBDD ‘tradicional’

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD CDB genèrica CDB d’exemple Crea un contendor de Base de Datos (amb o sense PDBs)

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Utilitzant la primera finestra de Configuració típica es pot crear: Una BBDD tradicional: Una CDB + PDB (empresa1 + pdb1 )

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Una CDB + diverses PDB (empresa1 + pdb1 +pdb2 + pdb3 ) Una CDB sense pdbs

---

## ✍️ Activitats pràctiques UT1

> **✍️ 📋 Exercici / Qüestionari 1.1 — Activitat: preparació mv W10prof**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Preparació MV Windows 10 professional. Utilitzar una MV per cada mòdul / pràctica (segons s’indique). No reutilitzar MV de altres mòduls !! / cursos !!
>
> Crear màquina virtual 4 GB RAM mínim (important) 150 GB disc dur 2-4 processadors (important) Habilitar acceleració 3D Xarxa. (Adaptador pont / NAT) per instal·lar, després la canviarem. instal·lar W10 prof version 22H2 NO actualitzar posar nom usuari (el teu nom) canviar nom equip ( mOracle-{el-teu-nom} ) (long < 15 !!) Per fer la pràctica , no cal activar Windows.
>
> Molt recomanable per pràctiques posteriors: Instal·lar Chrome , Imprescindible, Baixar i Instal·lar 7zip reiniciar NO actualitzar apagar canviar adaptador de xarxa de la maq. Virtual a xarxa interna ( no eixida a internet, per no deixar actualitzar windows) Així evitarem que ens pregunte per actualitzar el SO.
>
> Molt recomanable canviar el Controlador gràfic, per agilitzar el funcionament de la màquina. Temps estimat de la instal·lació: 15 min En este moment la MV ocupa 12GB (aprox) Es recomanable fer una OVA (apagar màquina primer) Temps estimat 6 min. Fem una snapshot / instantània Opcional ( instal·lar guest-additions , compartir portapapeles:Bidireccional , i reiniciar) Per últim, pausem les actualitzacions el més possible x 4

> **✍️ Activitat Pràctica 1.2 — (ASGBD) Instal·lar ORACLE en W10**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Instal·lar Oracle19c en Windows 10 professional. Utilitzar una MV per cada assignatura / pràctica. Partint d’una mv amb W10 profesional, actualitzat Crear un usuari anomenat oracle i donar-li permisos d’administrador.
>
> Utilitzar este usuari per a realitzar les pràctiques. Requisits • 4 o més GB memòria RAM, 2 o 4 cpu, 100 GB o mes de SSD • Visual C++ Redistributable para Visual Studio . Instal·lar Baixar l’ instal·lador ( fitxer zip 3GB aproxim ) de oracle.com Descomprimir ( en 7zip serà mes ràpid) Crear carpetes d'instal·lació amb OFA (i moure l’instal·lador dins ) Visionar els vídeos abans de començar Executar setup.exe (executar com administrador) Si no funciona, comprovar que no hi ha espais en el nom de la carpeta que conte l’instal·lador Instal·lar sols el software del SGBD (vore vídeo) Instal·lar el listener (vore vídeo) Reiniciar màquina Instal·lar la primera bd (vore vídeo) Anotar contrasenya (de sys i system) ! i ...¡¡ No esborrar ni moure la carpeta de l’instal·lador !!
>
> En acabar , comprovar que funciona amb el sql*Plus , des d’un CMD sqlplus / as sysdba show user show con_name sqlplus system show user show con_name Si no hem canviat res, la bbdd (CDB) serà orcl i la bbdd_de_connexió (PDB) serà orclpdb Comprovar que funciona amb el sql*Plus , des d’un CMD sqlplus / AS SYSDBA show pdbs Reiniciar maquina sqlplus / AS SYSDBA show pdbs Busca i explica els resultats, abans i després de reiniciar On esta el registre d’instal·lació ? Indica el lloc i adjunta una còpia del fitxer del registre al treball Baixar i Instal·lar SQL-Developer (versió Windows) Executar SQL-developer (com administrador) Crear una connexió i provar-la.
>
> Documentar el procés. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada. Entregar treball en PDF.

> **✍️ Activitat Pràctica 1.3 — (ASGBD) Instal·lar S.O. Oracle Linux 8 Desktop**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Preparació MV Oracle Linux 8 desktop preparat per ser Client/s d’SGBD Utilitzar una MV per cada assignatura / pràctica. Baixar la .iso de Oracle Linux (OL8Desktop) No baixar la NetInstall !! , costa molt de configurar. Baixar la FULL ISO Crear màquina virtual (OL8) 2 GB ram, 50 GB disco, 2 processador, desactivar diskette, i de moment, deixar la resta com està.
>
> Instal·lar Seleccionar idioma, seleccionar destí de la instal·lació, xarxa, data i hora, selecció de software
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD En xarxa, canviar nom En software, escollir desktop Crear contrasenya de root, i crear primer usuari amb el teu nom (fer-lo administrador) i ... Una volta acabe la instal·lació, reiniciar.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD en el primer reinici, ens demana acceptar la llicència i fer una configuració inicial entrem en el primer usuari abans creat.. Una vegada ha acabat la instal·lació, apagar i fer snapshot En este moment Ocupa 6,6 GB aprox.
>
> En este moment podem considerar canviar la configuració de xarxa de la MV, a Adaptador Pont o a Xarxa Nat. Per Actualitzar, Oracle Linux no utilitza apt, utilitza yum o dnf
>
> ```sql
> sudo yum check-update
> sudo yum update
> ```
>
> uname -mrs Instal·lar guest additions
>
> ```sql
> $ su
> # dnf -y install gcc make perl bzip2
> # dnf -y install kernel-headers kernel-devel
> # dnf -y update kernel*
> ```
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Inserir el CD de les guest additions run En este moment ja es pot redimensionar la pantalla i es queda per al següent arranc En acabar, apagar màquina. Si tot ha anat bé, borrar la snapshot i Exportar a .ova ---------------------------------------- Instal·lar instant_client + sqlplus (client) https://www.oracle.com/es/database/technologies/instant-client/linux-x86-64-downloads.html Baixar basic package (rpm ) Baixar sql plus package (rpm) Instal·lar amb sudo dnf localinstall basic.rpm sudo dnf localinstall sqlplus.rpm provar $ sqlplus ç ç Ara ens falta un servidor d’Oracle per poder connectar.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Instal·lar sqldeveloper Seguir tutorial: https://www.oracleknowhow.com/install-sql-developer-on-rpm-linux/
>
> ```sql
> $ java -version
> $ sudo dnf install java-11-openjdk java-11-openjdk-devel
> ```
>
> (baixar sqldeveloper-21.4.2-018.1706.noarch.rpm, ens demana compte d’oracle)
>
> ```sql
> $ sudo rpm -Uhv sqldeveloper-21.4.2-018.1706.noarch.rpm
> $ cd /opt/sqldeveloper
> ```
>
> ./sqldeveloper.sh Deprés d’iniciar per primera vegada, ja podem trobar el sqldeveloper Ara ens falta un servidor d’Oracle per poder connectar. Instal·lar PgAdmin4 ( per accedir a SGBD postgres ) (seguir tutorial) https://computingforgeeks.com/how-to-install-pgadmin-4-on-centos-linux/
