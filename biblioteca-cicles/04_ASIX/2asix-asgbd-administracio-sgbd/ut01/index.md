---
layout: default
title: "UD1 — Instal·lació d'un SGBD · Temari Complet"
course_root: ".."
badge: "2n ASIX · Grau Superior · UD1 — Instal·lació d'un SGBD"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Preparació de l'entorn ➡️"
---

# 📘 UD1 — Instal·lació d'un SGBD (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Preparació de l'entorn**](./ut0101.md)
- [**1.2 Instal·lació d'un SGBD**](./ut0102.md)
- [**1.3 Videos d'instal·lació**](./ut0103.md)
- [**1.4 Primers passos. Ordres bàsiques**](./ut0104.md)
- [**1.5 Arquitectura BBDD's en Oracle**](./ut0105.md)

---

# 1.1 Preparació de l'entorn

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

# 1.2 Instal·lació d'un SGBD

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

# 1.3 Videos d'instal·lació

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

# 1.4 Primers passos. Ordres bàsiques

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

# 1.5 Arquitectura BBDD's en Oracle

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
