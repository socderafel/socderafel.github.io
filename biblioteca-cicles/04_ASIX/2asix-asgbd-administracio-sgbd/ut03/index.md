---
layout: default
title: "UD3 — Usuaris i permisos. Seguretat · Temari Complet"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut0204.html"
prev_label: "⬅️ 2.4 Solucions errors de connexió amb SQLDeveloper"
next_url: "../ut03/ut0301.html"
next_label: "3.1 Usuaris i permisos ➡️"
---

# 📘 UD3 — Usuaris i permisos. Seguretat (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 Usuaris i permisos**](./ut0301.md)
- [**3.2 Connectar a SGBD Oracle des d'altra màquina**](./ut0302.md)
- [**3.3 Usuaris NO admin en Windows**](./ut0303.md)
- [**3.4 Permisos d'Update i Delete + Select**](./ut0304.md)
- [**3.5 Seguretat en un SGBD**](./ut0305.md)

---

# 3.1 Usuaris i permisos

### UNITAT 03 Gestió d’usuaris i permisos. Seguretat

Gestió d’usuaris i permisos

Definir i eliminar comptes d'usuari. -Crear sinònims de taules i vistes. -Identificar els privilegis sobre les bases de dades i els seus elements. -Agrupar i desagrupar privilegis. -Assignar i eliminar privilegis a usuaris. -Assignar i eliminar grups de privilegis a usuaris.

Crear vistes personalitzades per a cada tipus d'usuari. -Garantir el compliment dels requisits de seguretat.

Usuaris Permisos Grups / Rols Quotes Perfils Vistes Esquemes / Sinònims

Seguretat Control d’accés Identificació Autenticació Permisos Autenticitat No repudi + Autorització Comptabilitat

Usuaris Identifica a un actor físic o digital que ha de realitzar accions en la BBDD. Un usuari necessita una contrasenya per garantir autentificació Accions amb usuaris ✔Alta d’usuaris ✔Modificació d’usuaris ✔Consulta d’usuaris ✔Baixa d’usuaris ✔Boquejar / desbloquejar usuaris ✔Forçar a usuari a canviar contrasenya També es gestiona

Comptabilitat i No repudi

Permisos / privilegis De sistema: Connectar Crear objectes Consultar Realitzar tasques d’Administració Sobre objectes: SELECT, INSERT, UPDATE, DELETE ALTER EXECUTE INDEX ✔Permisos de sistema ✔Permisos sobre objectes Defineixen que pot fer o que no pot fer un usuari S’utilitzen per garantir confidencialitat

Permisos / privilegis ✔Permisos de sistema ✔Permisos sobre objectes Accions amb privilegis ✔Donar privilegi a usuari ✔Llevar privilegi a usuari ✔Permetre propagar privilegi a usuari

Rols Un rol de treball defineix la funció en el negoci d'un usuari com, per exemple, Vicepresident de vendes, Analista de recursos humans o Responsable de compres També podem definir un rol com un conjunt de privilegis Un rol pot abastar diversos usuaris Un usuari por tindre diversos rols Un usuari por canviar de rol Els rols faciliten molt el treball del DBA e.g.

Rols Accions amb rols ✔Crear ROL ✔Esborrar ROL ✔Assignar privilegi a ROL / Llevar privilegi a ROL ✔Assignar ROL a usuari / Llevar ROL a usuari ✔Assignar ROL a altre ROL / Llevar ROL a altre ROL ✔Activar / desactivar ROL ✔Consultar ROL ✔Consultar assignacions de ROLs (privilegis i rols)

Rols Per facilitar l’administració, els SGBD solen disposar d’alguns rols predefinits -DBA -Manteniment -Gestor BD -Backup -etc En ORACLE estan els rols CONNECT , RESOURCE i DBA No confondre amb els privilegis SYSDBA i SYSOPER, que no son ROLS

Usuaris, Permisos, Rols, Perfils, Vistes Tots els usuaris, rols i permisos, quotes, vistes, etc. que creem seran objectes del SGBD pel que s'emmagatzemaren en el diccionari de dades i podran ser consultats amb posterioritat per a la correcta administració del SGBD, comprovació, operació, etc.

Quotes i Perfils Els perfils permeten especificar dos tipus de restriccions sobre usuaris -Limitacions d’ús de recursos (cpu, quotes de disc, connexions, etc.) -Característiques que deuen complir les contrasenyes per garantir la seguretat

Vistes Una vista és una consulta emmagatzemada a la qual se li assigna un nom a fi d'utilitzar-la tantes vegades com es desitge. Una vista no conté dades sinó la instrucció SELECT necessària per a crear la vista, això assegura que les dades siguen coherents en utilitzar les dades emmagatzemades en les taules.

Les vistes s'empren per a: -Realitzar consultes complexes més fàcilment, -Proporcionar taules amb dades resultants de formatar o realitzar càlculs sobre les dades originals -Proporcionar formes personalitzades i més comprensibles de les dades -Ocultar l'emmagatzematge intrínsec de la base de dades i aconseguir una major independència de les dades respecte a la resta d'elements de la base de dades.

Ser utilitzades com a cursors de dades en els llenguatges procedimentals (com PL/SQL) -Restringir l'accés a les dades originals

Vistes Tipus de vistes

- Vistes horitzontals .....
- Vistes verticals .....................................
- Vistes mixtes ....................................................................

CREATE [OR REPLACE] VIEW nom_vista AS SELECT ..... ; DROP VIEW nom_vista ;

Usuaris i permisos en ORACLE .........................................................................................

Usuaris Alta Usuaris

```sql
CREATE USER svf IDENTIFIED BY password ;   en oracle
     (els usuaris es creen sense privilegis.....)
```

Modificació Usuaris ALTER USER svf IDENTIFIED BY password ; en oracle Baixa Usuaris DROP USER svf ; en oracle Consulta Usuaris (DD)

```sql
select * from DBA_USERS;
```

Sols poden crear usuaris els administradors O un usuari amb permisos especials dba_users

Usuaris en ORACLE Oracle permet crear USUARIS propis amb credencials emmagatzemades en el SGBD o utilitzar USUARIS externs (LDAP, Kerberos o Radius). Diferència: Autenticació. Arquitectura Multitenant de Oracle. Contenidor principal CDB que conté: CDB&ROOT PDB1 (Pluggable Data Base) PDB2 (Pluggable Data Base) PDB3 (Pluggable Data Base) ....................

Usuaris en ORACLE Dins del CDB hi han dos tipus d’usuaris

- Usuaris locals ( als respectius PDBs)

SQL> CONNECT sys@loclahost/PDB1 as SYSDBA SQL> create user usuari1 identified by ‘1234’; SQL> CONNECT sys@loclahost/PDB2 as SYSDBA SQL> create user usuari1 identified by ‘1234’;

- Usuaris comuns (a totes les BD’s) built-in sys, system ...

sqlplus system@loclahost/ORCL Es poden crear usuaris comuns a totes les pdbs amb el prefix C##

```sql
SQL> create user C##<nom-usuari-comu> identified by ‘1234’ CONTAINER=ALL;
```

Com saber el prefixe de l’usuari comú (estant connectats al contenidor principal) SQL> show parameter common oracle recomana NO utilitzar-los en producció!!

Usuaris en ORACLE Usuaris predefinits SYS -> Pot fer-ho tot. No es recomana utilitzar-lo si no és necessari i no es recomana crear objectes en el seu esquema. SYSTEM -> Pot fer-ho tot menys Actualitzar BD i funcions de Backup i Restore. No es recomana utilitzar-lo si no és necessari i no es recomana crear objectes en el seu esquema.

SYSBACKUP -> Usuari amb permisos de Backup i Restore

Usuaris en ORACLE Connexió d’usuaris nous a la bbdd Abans de connectar s’ha de donar permís de connexió a l’usuari Des de sys en pdb1 -> SQL> grant create session to usuari1; Connectar Indicant la contrasenya C:\Users\usuari1> sqlplus usuari1/1234@localhost/pdb1 SQL> CONNECT usuari1/1234@loclahost/PDB1 ; Connectar No indicant la contrasenya, després la demana C:\Users\usuari1> sqlplus usuari1@localhost/pdb1 SQL> CONNECT usuari1@loclahost/PDB1 ; L’usuari ja pot connectar, però de moment, res més ...

usuari1 ha d’estar creat i existir

Usuaris en ORACLE Sintaxis de create user SQL> CREATE USER sidney IDENTIFIED BY contrasenya DEFAULT TABLESPACE example QUOTA 10M ON example TEMPORARY TABLESPACE temp QUOTA 5M ON system PROFILE app_user ; ALTER USER sidney IDENTIFIED BY second_2nd_pwd DEFAULT TABLESPACE example2 QUOTA UNLIMITED ON example2; DROP USER sidney [CASCADE]; * oracle no esborra usuaris connectats Si no s'especifica un tablespace, oracle li assignarà el tablespace USERS Un esquema "schema" d’Oracle conté tots els objectes creats per un usuari de base de dades específic. Quan es crea un usuari, es crea automàticament un esquema amb el seu nom Sense quota !!

Usuaris en ORACLE Crear un usuari operatiu Des de sys SQL> CREATE USER enric IDENTIFIED BY secret; SQL> GRANT CONNECT, RESOURCE TO enric; ===================================== SQL> ALTER USER enric QUOTA 20M ON users; o SQL> ALTER USER enric QUOTA UNLIMITED ON users; ==> L’usuari està preparat per connectar i crear objectes en el seu esquema Es el TABLESPACE per defecte RESOURCE

CREATE TYPE

```sql
CREATE TABLE
```

CREATE CLUSTER

```sql
CREATE TRIGGER
```

CREATE OPERATOR CREATE SEQUENCE CREATE INDEXTYPE

```sql
CREATE PROCEDURE
```

Usuaris en ORACLE Crear un usuari operatiu, recomanable utilitzar una tablespace diferent. Des de sys SQL> CREATE USER enric IDENTIFIED BY secret DEFAULT TABLESPACE tab_app QUOTA UNLIMITED ON tab_app PASSWORD EXPIRE ; SQL> GRANT CONNECT, RESOURCE TO enric; Utilitzar un (o més) TABLESPACE per cada aplicació Forçar a l’usuari a canviar la password en la primera connexió

Usuaris en ORACLE Altres possibilitats Des de l’usuari vicent ALTER USER vicent IDENTIFIED BY novapass REPLACE passvella; Des de l’usuari sys ALTER USER vicent PASSWORD EXPIRE ; ALTER USER vicent ACCOUNT LOCK; ALTER USER vicent ACCOUNT UNLOCK;

```sql
SELECT USERNAME, ACCOUNT_STATUS FROM DBA_USERS WHERE USERNAME = 'VICENT';
```

Un usuari no administrador sols pot canviar la seua contrasenya i sols d’esta manera Amb: password verify function dba_users

Usuaris en ORACLE DD en Usuaris describe dba_users

```sql
select * from dba_users;        *vore usuaris
select user from dual;
select username, password, default_tablespace, created from dba_users;
```

dba_users dual

Permisos / privilegis Concedir permisos / privilegis (de sistema)

```sql
GRANT privilegi TO user [WITH ADMIN OPTION];   en oracle
```

(sobre objectes)

```sql
GRANT privilegi ON prop.objecte TO user [WITH GRANT OPTION];
```

Revocar permisos

```sql
REVOKE privilegi FROM user;   en oracle
REVOKE privilegi ON prop.objecte FROM user;
```

[WITH ADMIN OPTION] i [WITH GRANT OPTION] vol dir que el permís que rep l'usuari, eixe usuari pot concedir-lo a un altre usuari El [WITH ADMIN OPTION] sols s’utilitza per a privilegis de sistema (no de objectes) ✔Permisos de sistema ✔Permisos sobre objectes

Permisos en ORACLE Permisos de sistema CREATE SESSION (connectar)

```sql
CREATE TABLE, CREATE ANY TABLE
```

= amb ALTER... DROP...

```sql
CREATE USER  DROP USER
```

SELECT ANY TABLE, UPDATE ANY TABLE, INSERT ANY TABLE .....

```sql
CREATE TABLESPACES
```

ALL PRIVILEGES..... més [usuario | rol | PUBLIC] [WITH ADMIN OPTION] ✔Permisos de sistema ✔Permisos sobre objectes Exemple

```sql
grant create table, create view
```

to joan, anna;

```sql
GRANT privilegio1 [,privilegio2[,
```

…]] TO [usuario | rol | PUBLIC] [WITH ADMIN OPTION];

```sql
REVOKE privilegio1 [,privilegio2 [,
```

…]] FROM usuario; PRIVILEGES en ORACLE

Permisos en ORACLE ✔Permisos de sistema ✔Permisos sobre objectes Exemple

```sql
create user joan identified by 1234 quota unlimited on users;
grant connect to joan;
grant create table to joan;
```

- Joan pot crear taules en el seu SCHEMA
- A més a més, joan podrà inserir, modificar, esborrar files de dades de les seues taules.
- A més a més, joan podrà modificar la estructura de les seues taules
- Joan també pot esborrar la taula (drop)

Però Joan no pot ..crear vistes,( ni modificar ni esborrar), Ni crear index, ni roles, ni usuaris, etc... PRIVILEGES en ORACLE Quan es crea un usuari, al mateix temps es crea un SCHEMA amb el seu nom

Permisos en ORACLE Permisos sobre objectes SELECT INSERT UPDATE DELETE EXECUTE INDEX ALL.................més [WITH GRANT OPTION] Igual que els usuaris, els permisos poden ser comuns i locals, segons ens connectem i ho indiquem amb CONTAINER=ALL, o CONTAINER=CURRENT (<-per defecte) ✔ Permisos de sistema ✔ Permisos sobre objectes Exemple SQL> GRANT SELECT,INSERT,UPDATE,DELETE ON venta TO mgarcia WITH GRANT OPTION;

```sql
GRANT {privilegio [(listaColumnas)] [,privilegio
```

[(listaColumnas)] [,…]] | ALL [PRIVILEGES]} ON [esquema.]objeto TO {usuario | rol | PUBLIC} [,{usuario | rol | PUBLIC} [,…]] [WITH GRANT OPTION]

Permisos en ORACLE ✔ Permisos de sistema ✔ Permisos sobre objectes Exemple (estem connectats com joan)

```sql
create table ejemplo ( id number primary key, nombre varchar2(40) );
```

La taula ejemplo pertany a joan I joan li pot donar permís a pere per vore, inserir, modificar o eborrar files.

```sql
grant select,insert,update,delete on ejemplo to pere;
```

O si estem connectats com System o SYS podria fer

```sql
grant select,insert,update,delete on joan.ejemplo to pere;
```

Permisos en ORACLE DD en Permisos

```sql
select * from dba_sys_privs where grantee = 'ANNA';  *vore privilegis d’un usuari
select * FROM USER_SYS_PRIVS;   *de sistema
SELECT * FROM USER_TAB_PRIVS;   *sobre objectes
select grantee, privilege from dba_sys_privs where GRANTEE='ANNA';
```

✔ Permisos de sistema ✔ Permisos sobre objectes permisos dba_sys_privs user_sys_privs user_tab_privs

Rols Crear rol CREATE ROLE nom_rol ; en oracle Esborrar rol DROP ROLE nom_rol ; Activar / Desactivar rols SET ROLE {nom_rol} | ALL [EXCEPT {rol}]} | NONE ; Consultar Rols definits (DD)

```sql
select role from dba_roles;
```

dba_roles

Rols Assignar privilegis a un rol

```sql
GRANT privilegis [ON obj] TO nom_rol  ;   en oracle
```

[WITH GRANT OPTION] Revocar privilegis a un rol

```sql
REVOKE privilegis FROM nom_rol;
```

Assignar un rol a un usuari o a altre rol

```sql
GRANT nom_rol TO { usuari | nom_rol };
REVOKE DROP ANY TABLE  FROM hr, oe;
```

Els usuaris hr i oe no poden borrar taules en esquemes que no siguen els seus.

Rols DD en Rols

```sql
Select * from dba_roles;        *vore rols
SELECT * FROM USER_ROLE_PRIVS;  *rols assignats a usuaris
select * from dba_role_privs where granted_role='DBA'
select * from dba_sys_privs where grantee = 'RESOURCE';  *vore privilegis d’un rol
select * from role_sys_privs where role = 'RESOURCE';    *vore privilegis d’un rol
```

Consultar els rols assignats a un rol

```sql
select role, granted_role from role_role_privs;
```

dba_roles dba_role_privs dba_sys_privs role_sys_privs role_role_privs

Rols en ORACLE Dins del CDB hi han dos tipus de rols

- Rols locals ( als respectius PDBs)

```sql
SQL> create rol <nomrol> [CONTAINER=CURRENT];
```

- Rols comuns (a totes les BD’s)

```sql
create rol C##<nomrol>  CONTAINER=ALL;
grant <priv> to C##<nomrol> CONTAINER=ALL;
revoke <priv> from C##<nomrol>;
grant <nomrol> to [usuario | nomrol2];
revoke <nomrol> from [usuario | nomrol2];
```

drop role <nomrol>; DD

```sql
select * from dba_roles ;
```

Use the DROP ROLE statement to remove a role from the database. When you drop a role, Oracle Database revokes it from all users and roles to whom it has been granted and removes it from the database. User sessions in which the role is already enabled are not affected

Rols en ORACLE VISTA Que conté DBA_ROLES Muestra todos los roles de la base de datos DBA_ROLES_PRIVS Roles asignados a los usuarios ROLE_ROLE_PRIVS Roles asignados a otros roles DBA_SYS_PRIVS Privilegios de sistema asignados a usuarios y roles ROLE_SYS_PRIVS Privilegios de sistema asignados a roles ROLE_TAB_PRIVS Privilegios de objeto concedidos a roles SESSION_ROLES Roles en activo para el usuario actual

Perfils en ORACLE Quan es crea un usuari, se li assigna un perfil per defecte -> DEFAULT

```sql
SQL> select * from dba_profiles where profile=’DEFAULT’;
```

CREATE PROFILE nom_perfil LIMIT { } ... ; ALTER USER usuari PROFILE nom_perfil; ALTER USER usuari PROFILE DEFAULT; ALTER PROFILE nom_perfil LIMIT {parametro [valor |UNLIMITED] } ; DROP PROFILE nom_perfil [CASCADE]; Specify CASCADE to deassign the profile from any users to whom it is assigned.

Oracle Database automatically assigns the DEFAULT profile to such users. You must specify this clause to drop a profile that is currently assigned to users

Perfils en ORACLE Exemple creació d’un nou perfil SQL> CREATE PROFILE administrador LIMIT SESSIONS_PER_USER 5 CONNECT_TIME 120 IDLE_TIME 30 FAILED_LOGIN_ATTEMPTS 4 PASSWORD_LIFE_TIME 165; SQL> ALTER PROFILE administrador LIMIT PASSWORD_LOCK_TIME 5; SQL> ALTER USER admin PROFILE administrador; *assignació de perfil a usuari Els paràmetres no definits en un perfil, agafaran el valor definit en el perfil DEFAULT

Perfils en ORACLE Paràmetres de limitacions de recursos Oracle no porta els límits dels recursos activats per defecte.

```sql
Hem de activar-los amb:  ALTER SYSTEM SET RESOURCE_LIMIT=TRUE;
```

SESSIONS PER USER (per defecte unlimited en el perfil DEFAULT) CONNECT_TIME (per defecte unlimited , en minuts en el perfil DEFAULT) IDLE_TIME (per defecte unlimited , en minuts en el perfil DEFAULT) CPU_PER_SESSION , en centèsimes de segon en el perfil DEFAULT) CPU_PER_CALL , en centèsimes de segon en el perfil DEFAULT) LOGICAL_READS_PER_SESSION , en blocs en el perfil DEFAULT) LOGICAL_READS_PER_CALL , en blocs en el perfil DEFAULT) PRIVATE_SGA COMPOSITE_LIMIT

```sql
SQL> select * from dba_profiles where resource_type=’KERNEL’;
```

dba_profiles

Perfils en ORACLE Paràmetres de limitacions de contrasenyes Sols tenen efecte sobre usuaris validats per el sistema gestor (els externs no estan afectats) FAILED_LOGIN_ATTEMPTS (per defecte 10 en el perfil DEFAULT) PASSWORD_LIFE_TIME (per defecte 180 dies en el perfil DEFAULT) PASSWORD_REUSE_TIME (per defecte unlimited en el perfil DEFAULT) PASSWORD_REUSE_MAX (per defecte unlimited en el perfil DEFAULT) PASSWORD_LOCK_TIME (per defecte 1 dia en el perfil DEFAULT) PASSWORD_GRACE_TIME (per defecte 7 dies en el perfil DEFAULT) PASSWORD_VERIFY_FUNCTION (per defecte NULL en el perfil DEFAULT) SQL> select distinct profile from dba_profiles; SQL> select * from dba_profiles order by profile;

```sql
SQL> select * from dba_profiles where resource_type=’PASSWORD’;
SQL> select * from dba_users where username=’USU1’;
```

dba_users dba_profiles

usuari rol Privilegi de sistema Privilegi sobre objecte perfil dba_users dba_roles user_role_privs dba_sys_privs dba_tab_privs role_role_privs role_tab_privs role_sys_privs dba_profiles dba_users resource_type=’PASSWORD’ resource_type=’KERNEL’ Un usuari sols pot tindre un perfil Un usuari pot tindre molts privilegis Un usuari pot tindre molts rols

Esquemes externs És mes potent assignar permisos sobre vistes (usuaris o rols sobre vistes) I limitar(canviar) més tard les vistes Quan necessitem crear una BBDD, el més habitual serà -Crear un usuari propietari -Crear un usuari per cada aplicació que haga d’accedir a les dades (convidats) No s'han de confondre usuaris de bases de dades amb usuaris d'aplicació Si una organització té 100 empleats, no és necessari crear 100 usuaris de base de dades, sinó un usuari que usarà l'aplicació per a connectar-se a la base de dades.

Esquemes externs Usarem vistes i sinònims. Avantatges

- Seguretat
- Facilitat d’us
- Homogeneïtat

```sql
CREATE VIEW vista_dept_201
```

AS (SELECT emp_id,name,department,hire_date) FROM empleats

```sql
WHERE department = 201;
```

CREATE [OR REPLACE] SYNONYM nom_sinonim FOR esquema.vista ; dba_views

Resum D. Dades Usuaris xxx_users Permisos xxx_sys_privs Permisos xxx_tab_privs Rols xxx_roles Rols a usu xxx_role_privs Perfils xxx_profiles Vistes xxx_views Rols de la sessió actual session_roles On xxx = dba all user role Vista auxiliar dual dictionary v$database i database_properties v$pdbs = show pdbs v$parameter v$instance v$session v$sga = show sga xxx_tablespaces o v$tablespace xxx_data_files o v$datafile xxx_free_space v$log v$logfile tabs = xxx_tables xxx_tab_columns

Usuaris i permisos en PostgreSQL .........................................................................................

Usuaris en PostgreSQL Els usuaris, grups i rols són el mateix en PostgreSQL, i l'única diferència és que els usuaris tenen permís per a iniciar sessió de manera predeterminada

```sql
CREATE USER myuser WITH PASSWORD 'secret_passwd';
```

== CREATE ROLE myuser WITH LOGIN PASSWORD 'secret_passwd'; Tots els nous usuaris i rols hereten els permisos del rol public

Usuaris en PostgreSQL El mètode recomanat per a configurar un control d'accés detallat en PostgreSQL és el següent

Usuaris en PostgreSQL Existeix una aplicació en la carpeta de binaris de postgres que es diu createuser. Amb aquest comando podràs crear de manera molt senzilla un nou ROL amb permisos d'accés en la teva base de dades Per a poder crear un usuari (ROL) és necessari tenir permisos de super usuari createuser --interactive nouusuari Connectar

psql -d facturas -U nouusuari

Rols en PostgreSQL (també s’anomenen grups) Vore rols amb Comando: \du \dg

```sql
SELECT rolname FROM pg_roles;
```

CREATE ROLE name; DROP ROLE name; «-- rol o grup CREATE ROLE name [ WITH ] LOGIN; «--usuari CREATE ROLE name SUPERUSER; CREATE ROLE name CREATEDB; CREATE ROLE name CREATEROLE; CREATE ROLE name REPLICATION LOGIN; CREATE ROLE name [ ENCRYPTED ] PASSWORD 'string'; ALTER ROLE name PASSWORD 'string' | PASSWORD NULL ; ALTER ROLE name VALID UNTIL 'May 4 12:00:00 2023 +1'; ALTER ROLE name VALID UNTIL 'infinity'; SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS CONNECTION LIMIT connlimit [ ENCRYPTED ] PASSWORD 'password' PASSWORD NULL VALID UNTIL 'timestamp'

PERFILS en PostgreSQL Postgres no utilitza este mecanisme SINÒNIMS en PostgreSQL Postgres no utilitza este mecanisme

---

# 3.2 Connectar a SGBD Oracle des d'altra màquina

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD IMPORTANT tnsnames.ora Abans de connectar a Oracle des d’una altra màquina que no siga la que te l’ SGBD, s’ha de fer una modificació per permetre estes connexions externes.

Inicialment, se configura el fitxer tnsnames.ora , que es pot trobar en $oracle_home/network, amb la configuració per escoltar en localhost. Si volem connectar des de fora s’ha de fer 2 coses. Primera: desactivar firewall, o afegir una regla d’entrada per al port 1521 Segona: modificar el fitxer tnsnames.ora de la següent manera.

Esbrinem la nostra ip ( la de la màquina de l’SGBD ), on esta oracle server instal·lat. Obrim el fitxer tnsnames.ora i busques els blocs de listeners, i dins de cada bloc, localitzem la paraula localhost Canviem la paraula localhost per la nostra IP, la IP del servidor d’Oracle.

Després guardem

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Les línies quedaran: exemple de localització del fitxer tnsnames.ora Connexió des de fora correcta

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Si en estes accions continua sense funcionar podem fer alguna cosa més. El fitxer listener.ora dins, en el apartat de LISTENER Afegim una linia amb la nosta IP

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD I després parem i arranquem els listeners. Obrim una terminal CMD amb permisos d’adminsitrador Parem ( lsnrctl stop) I Arranquem (lsnrstl start) Intentem entrar des de la màquina de l’SGBD (màquina servidor) Primer amb localhost Segon amb 127,0,0,1 Tercer amb la IP de la màquina 10.0.2.15 Si tot ha anat bé.

Després des de l’altra màquina ( màquina client) Intentem entrar des de la màquina client configurant una connexió amb IP 10.0.2.15

---

# 3.3 Usuaris NO admin en Windows

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Gestió d’usuaris ...... En Windows ..... Des d’un usuari no-sgbd-admin (no el que ha instal·lat oracle), ni des d’Sql Developer no es pot entrar en ‘ /as sysdba ‘ o ‘sqlplus / as sysdba’ , Però si en ‘sys as sysdba’ amb contrasenya ‘ /as sysdba ‘ sols es pot utilitzar per l’usuari windows que ha fet la instal·lació d’oracle.

Tampoc es pot utilitzar per un altre usuari de windows encara que siga administrador de widnows (compte administrador) D’entre els usuaris de Windows, hem de distingir entre el o els administradors de la màquina Windows i l’administrador de l’SGBD (oracle), li direm el «sgbd-admin» (L’sgbd-admin ha de ser administrador de windows per poder instal·lar Oracle) En la següent captura podem vore un cmd d’un usuari no-sgbd-admin, ni admin de windows.

Usuari : convidat De fet Des d’un cmd de l’usuari del S.O. instal·lador d’Oracle (sgbd-admin) , qualsevol usuari d’Oracle pot entrar com a sysdba

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD En els següents exemples, asix és l’usuari administrador de la màquina Windows ( qui ha instal·lat el Sistema Operatiu Windows) i l’usuari oracle és l’administrador ( qui ha instal·lat Oracle) del SGBD Oracle. (usuari sgbd-admin) sys des d’usuari sgbd-admin / entra com SYS Des d’un usuari (d’Oracle) normal (no sys ) ....

entra com SYS (també !!) ==> sempre que estem en la maquina d’oracle , dins de la sessió de l’usuari del S.O. sgbd-admin, usuari de Windows que ha fet la instal·lació d’ORACLE. Ara, si estem en la maquina d’oracle , dins d’una sessió d’un usuari del S.O. no-sgbd-admin, un usuari de Windows que NO ha fet la instal·lació d’ORACLE.

usuari sys des d’altra sessió Ja no deixa connectar com a / sense contrasenya Necessitem especificar l’usuari o contrasenya Si especifiquem que és sys i li diguem la contrasenya, si que deixa connectar

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD ==================================================================== En Oracle19c, l’usuari system no te privilegis de sysdba ni de sysoper, així que no pot connectar com a tal ( si no assignem estos privilegis abans) I SYSTEM, pot connectar com un usuari normal ( amb els seus privilegis ) Però no com a SYS (sysdba) ( si no ho configurem a posta , clar ) Podríem configurar un usuari per a que puga connectar com a sys amb el grant corresponent

---

# 3.4 Permisos d'Update i Delete + Select

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Permisos d’UPDATE i DELETE En ORACLE El permís que s'atorga sobre un objecte de ‘update’ d’Oracle, necessita anar aparellat al permís de ‘select’. També passa amb el permís ‘delete’  ORACLE no ho fa automàticament Expliquem

Si a un usuari se li atorga (grant) permís d’actualització sobre una taula que no es seua.

```sql
grant update on usuari1.taula1 to usuari2;
```

i este usuari (usuari2) fa

```sql
update usuari1.taula1 set columna1=valor;
```

la sentència funcionarà. => L’actualització, s’aplica a tota la taula Però, si intenta fer

```sql
update usuari1.taula1 set columna1=valor where columna2=valor2;
```

la sentència fallarà perquè? Oralce necessita saber les dades de columna2 per poder realitzar l’actualització, i per poder conéixer eixes dades necessita de permís de ‘select’ Oracle Database necessita llegir les dades de la fila per a saber com modificar la fila per a reflectir els canvis. Si no es tenen els permisos de SELECT, l'actualització no es pot dur a terme correctament. De la mateixa manera li passa a les sentències DROP Així, dons, UPDATE + SELECT i DELETE + SELECT ================================= Vegem-ho Des de l’usuari SYSTEM , atorguem a usuari2 el permís d’update....

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Des d’usuari2 ,executem l’update sense clàusula where (La taula llibre ja te dades) Sí que deixa fer l’update Però, si Executem l’update amb clàusula where No deixa realitzar l’operació, per falta de privilegis.

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Des de l’usuari SYSTEM, ara , li atorguem el privilegi de select i executem l’update des de l’usuari2, amb la clàusula where. Ara si que deixa realitzar l’update.

---

# 3.5 Seguretat en un SGBD

### UNITAT 03 Gestió d’usuaris i permisos. Seguretat

Gestió d’usuaris i permisos. Seguretat

Seguretat .........................................................................................

Confidencialitat Encriptació Auditoria Integritat Restriccions Transaccions Disponibilitat Copies de seguretat Recuperació Autenticitat No repudi + Autorització Comptabilitat Normativa vigent en matèria de dades personals LOPDGDD - RPGD (GDPR) +

Encriptació Perquè xifrar?

- Seguretat interna
- Exfiltració de dades
- Compliment llei ( RGPD, ....)
- Normativa

Perquè no xifrar?

- Rendiment
- Comoditat
- Operativitat

S’ha de buscar l’equilibri !!

Encriptació (en Oracle) Mitjançant funcions DBMS_CRYPTO.ENCRYPT() DBMS_CRYPTO.DECRYPT() DBMS_CRYPTO.Hash() DBMS_CRYPTO.MAC() Encriptació transparent TDE (Transparent Data Encryption) TDE Tablespace encryption TDE Column encryption -- Hash xifrat -- «manual» «automàtic»

Encriptació (en Oracle) Dades en disc, amb codificació utf o altra Dades en disc, amb TDE Taula d’exemple

Encriptació (en Oracle) paquet DBMS_CRYPTO DBMS_CRYPTO.ENCRYPT() DBMS_CRYPTO.ENCRYPT( src IN RAW, typ IN PLS_INTEGER, key IN RAW, iv IN RAW DEFAULT NULL) RETURN RAW; DBMS_CRYPTO.RANDOMBYTES ( number_bytes IN POSITIVE) RETURN RAW; Manipular funcions

```sql
Varchar2 to raw :  UTL_I18N.STRING_TO_RAW (string, 'AL32UTF8');
Raw to varchar2 :  UTL_I18N.RAW_TO_CHAR (data, 'AL32UTF8');
```

Guardar raw en string RAWTOHEX UTL_ENCODE.BASE64_ENCODE Què és un paquet d’Oracle ?? Quants hi ha ?? EXEMPLE

```sql
SQL> select dbms_crypto.randombytes(2) from dual;
```

Encriptació (en Oracle) DBMS_CRYPTO.DECRYPT() DBMS_CRYPTO.DECRYPT( src IN RAW, typ IN PLS_INTEGER, key IN RAW, iv IN RAW DEFAULT NULL) RETURN RAW; Açò ho vorem millor en la unitat 04 (part procediments) El tipus RAW en Oracle representa cadenes binaries d’amplada variable expressades en bytes. (max 2000 bytes) RAW(2000) S’utilitza en procediments, funcions i triggers

Encriptació (en Oracle) DBMS_CRYPTO.Hash() i DBMS_CRYPTO.MAC() DBMS_CRYPTO.Hash ( src IN RAW, typ IN PLS_INTEGER) RETURN RAW; DBMS_CRYPTO.MAC ( src IN RAW, typ IN PLS_INTEGER, key IN RAW) RETURN RAW; Com emmagatzemar contrasenyes en bases de dades correctament !! EXEMPLE

```sql
SQL> select dbms_crypto.hash(‘1AAF445C’,1) from dual;
```

Encriptació transparent TDE Necessitarem una TDE Keystore Architecture

- Un lloc on guardar les claus (wallet)
- Una clau mestra. TDE Master Encryption Key
- Unes claus per als tablespaces ( cas de tablespaces)

TDE Tablespace Encryption Key

- Unes claus per a les taules ( cas de columnes)

TDE Table Keys

Encriptació en postgreSQL CREATE EXTENSION pgcrypto; funcions de hash generals digest(data text, type text) returns bytea digest(data bytea, type text) returns bytea type -> md5, sha1, sha224, sha256, sha384 and sha512 hmac(data text, key text, type text) returns bytea hmac(data bytea, key bytea, type text) returns bytea key -> salt Els resultats d’estes funcions solen anar codificats donat que tornen dades binaries !!

encode(digest($1, 'sha1'), 'hex') -->(hex, escape, base64)

Encriptació en postgreSQL CREATE EXTENSION pgcrypto; funcions de hash específiques de passwords crypt(password text, salt text) returns text gen_salt(type text [, iter_count integer ]) returns text accepted types are: des, xdes, md5 and bf Exemple

```sql
INSERT INTO users (email, password)
```

VALUES ( 'johndoe@mail.com', crypt('johnspassword', gen_salt('bf'))

```sql
);
```

Com emmagatzemar contrasenyes en bases de dades correctament !!

Encriptació en postgreSQL CREATE EXTENSION pgcrypto; funcions de xifratge simètric pgp_sym_encrypt(data text, psw text [, options text ]) returns bytea pgp_sym_encrypt_bytea(data bytea, psw text [, options text ]) returns bytea pgp_sym_decrypt(msg bytea, psw text [, options text ]) returns text pgp_sym_decrypt_bytea(msg bytea, psw text [, options text ]) returns bytea pgp_sym_encrypt(data, psw, 'compress-algo=1, cipher-algo=aes256') cipher-algo Values: bf, aes128, aes192, aes256 (OpenSSL-only: 3des, cast5) Default: aes128 ampliació: https://www.postgresql.org/docs/current/pgcrypto.html Exemple

```sql
insert into usuario (usuario, clave)
```

values ('alex', encrypt('1234','password','3des')

```sql
);
```

Algorisme Clau Dada

Encriptació en postgreSQL CREATE EXTENSION pgcrypto; funcions de xifratge clau pública pgp_pub_encrypt(data text, key bytea [, options text ]) returns bytea pgp_pub_encrypt_bytea(data bytea, key bytea [, options text ]) returns bytea pgp_pub_decrypt(msg bytea, key bytea [, psw text [, options text ]]) returns text pgp_pub_decrypt_bytea(msg bytea, key bytea [, psw text [, options text ]]) returns bytea pgp_key_id(bytea) returns text armor(data bytea [ , keys text[], values text[] ]) returns text dearmor(data text) returns bytea

Auditoria (oracle) Vore estat d’auditoria

```sql
Select name,value from v$parameter where name like ‘audit_trail’;
```

Activar auditoria

```sql
ALTER SYSTEM SET audit_trail = ‘DB’ | ‘none’ SCOPE=SPFILE;
```

none: no se recopilen dades db: les dades van al DD, taula sys.aud$ os: les dades van al so xml: les dades van al fixer definit en ‘audit_file_dest’ AUDIT_TRAIL

Auditoria Comandos audit i noaudit Auditoria de grau fi dbms_fga Auditoria unificada audit policy <regla> Registre d’auditoria en el DD

Auditoria : Comandos audit i noaudit Comandos audit , noaudit AUDIT SESSION NOAUDIT SESSION AUDIT operació NOAUDIT operació AUDIT objecte NOAUDIT objecte AUDIT (Traditional Auditing)

Auditoria de grau fi. FGA Fine Grained Auditing DBMS_FGA.ADD_POLICY ( object_schema => 'rrhh', object_name => 'emp', policy_name => 'mypolicy1', audit_condition => 'id_dpto=50 and comisio>0', audit_column => 'dni,comisio,salari', handler_schema => NULL, handler_module => NULL, enable => TRUE, statement_types => 'INSERT, UPDATE, DELETE, SELECT', audit_trail => DBMS_FGA.XML + DBMS_FGA.EXTENDED,

```sql
audit_column_opts  =>   DBMS_FGA.ANY_COLUMNS);
```

DISABLE_POLICY ENABLE_POLICY DROP_POLICY

Auditoria unificada CREATE AUDIT POLICY dml_pol ACTIONS DELETE on hr.employees, INSERT on hr.employees, UPDATE on hr.employees, ALL on hr.departments; AUDIT POLICY dml_pol; NOAUDIT POLICY dml_pol; DROP AUDIT POLICY dml_pol;

Registre d’Auditoria en el dd Quan s’activa l’opció de ‘db’ , la informació es deixa al dd Informació DBA_AUDIT_SESSION DBA_AUDIT_OBJECT FGA_AUDIT_TRAIL Configuració DBA_STMT_AUDIT DBA_OBJ_AUDIT_OPTS DBA_AUDIT_POLICIES Auditoria unificada AUDIT_UNIFIED_POLICIES AUDIT_UNIFIED_ENABLED_POLICIES DBA_COMMON_AUDIT_TRAIL

Confidencialitat Encriptació Auditoria Integritat Restriccions Transaccions Disponibilitat Copies de seguretat Recuperació Autenticitat No repudi + Autorització Comptabilitat Normativa vigent en matèria de dades personals LOPDGDD - RPGD (GDPR) +

RI – Restriccions d’Integritat NOT NULL UNIQUE DEFAULT valor PRIMARY KEY FOREING KEY CHECK condició +DISPARADORS

```sql
ALTER TABLE nomtaula DISABLE CONSTRAINT nom_restr ;
ALTER TABLE nomtaula ENABLE CONSTRAINT nom_restr ;
```

Control de concurrència Una transacció és una interacció amb una estructura de dades complexa, composta per diversos processos que s'han d'aplicar un després de l'altre. La transacció ha de realitzar-se d'una sola vegada i sense que l'estructura a mig manipular puga ser tan sols consultada per la resta del sistema fins que s'hagen finalitzat tots els seus processos.

Les transaccions segueixen quatre propietats bàsiques, sota l'acrònim ACID (Atomicity, Consistency, Isolation, Durability): Atomicitat: asseguren que totes les operacions dins de la seqüència de treball es completen satisfactòriament. Si no és així, la transacció s'abandona en el punt de l'error i les operacions prèvies retrocedeixen al seu estat inicial.

Consistència: asseguren que la base de dades canvie estats en una transacció reeixida. Aïllament: permeten que les operacions siguen aïllades i transparents les unes de les altres. Durabilitat: asseguren que el resultat o efecte d'una transacció completada romanga en cas d'error del sistema.

Control de concurrència Els SGBD proveeixen un llenguatge per a aquest tractament de transaccions, el TCL. TCL – Llenguatge de Control de Transaccions Problemes que poden sorgir -Dirty read -Nonrepeatable read -Phantom read Solució: bloqueig -granularitat datafile taula fila concreta de taula Problema: interbloqueig

- Prevenir
- Detectar

Control de concurrència En ORACLE COMMIT; SET TRANSACTION NAME ‘nom_tr’; SAVEPOINT nom_punt; COMMIT; o ROLLBACK;

Confidencialitat Encriptació Auditoria Integritat Restriccions Transaccions Disponibilitat Copies de seguretat Recuperació Autenticitat No repudi + Autorització Comptabilitat Normativa vigent en matèria de dades personals LOPDGDD - RPGD (GDPR) +

Recuperació Eines bàsiques: ●Copies de seguretat ●Diari de transaccions o quadern de bitàcola És bona idea guardar aquestes eines en discos físics separats dels discos que alberguen les dades de treball.

Còpies de Seguretat Gestió de CS ✔Backup ✔Restore ✔Recovery (sistema, sgbd) Tasques del dba ✔Definir polítiques de CS ✔Definir procediment de recuperació ✔Planificar i gestionar simulacres de recuperació

Còpies de Seguretat Tipus de CS ✔Totals o parcials ✔Lògica o física ✔Completa o incremental ✔Online o Offline Mecanismes d’ORACLE ✔Exportació (exp / imp) (la còpia lògica es guarda en l’equip client) ✔Datapump (expdp / impdp) (la còpia lògica es guarda en l’equip servidor) ✔RMAN (la còpia física o incremental es guarda en l’equip servidor) Mecanismes de Postgresql ✔pg_dump / pg_restore ✔pg_dumpall ✔pg_basebackup

Còpies de Seguretat Mode : FULL=Y Mode : SCHEMAS= usuari1 [,...] Mode : TABLESPACES= tb1 [,...] Mode : QUERY [usuari.taula:] WHERE .... Mode : TABLE= taula1 [,...]

Còpies de Seguretat TABLESPACE: USERS Conté: Dades -> Taules TABLESPACE SYSTEM Conté: Usuaris Privilegis Rols Perfils DD .... Existeixen en instal·lar

- SYSTEM
- SYSAUX
- UNDO
- TEMP
- USERS
- Altres TS

creats pels usuaris (+dades)

Còpies de Seguretat Exportació (exp / imp) Oracle l’anomena ‘Original Export’ ✔Des de la línia de comandos/terminal ✔la còpia lògica es guarda en l’equip client ✔Modes: full, user (esquema), tablespace, table, query ✔Es pot usar un fitxer de paràmetres parfile= Exemples exp username/password@ipAddress:portNumber/serviceName file=/recovery_area/export/prueba_export.dmp full=yes buffer=1000000 exp scott/tiger file=orasitescott.dmp tables=(emp,dept) buffer=1000000 exp scott/tiger file=c:\orasitempleados.dmp tables=emp query=\"where deptno=10\" exp system/manager owner='production' file='/oracle10/production.dmp' log='/oracle10/production.log' buffer=1000000 Si volem fer un exp total (full=yes), l’usuari que l’execute necessita el rol EXP_FULL_DATABASE Per cridar amb sys exp \'username/password@instance AS SYSDBA\' parametres

Còpies de Seguretat DataPump (expdp / impdp) ✔Des de la linea de comandos/terminal (però la còpia s’executa en el servidor) ✔Des de dins de l’SGBD amb el paquet DBMS_DATAPUMP ✔Des de Enterprise Manager (EM) (deprecated) ✔La còpia lògica es guarda en l’equip servidor ✔Més ràpid, més rendiment, diversos fils en paral·lel ✔Modes: full=Y, eschemas=esquema_1[, esquema_N], tablespaces=, tables= ✔QUERY= ✔Es pot usar un fitxer de paràmetres parfile= Exemples SQL> create or repace directory dumpdir as ‘c:\oracle\dumpdir’ ; SQL> grant read,write on directory dumpdir to username ;

```sql
$ expdp username/password@serviceName directory=dumpdir dumpfile=export.dmp logfile=fichero.log
$ expdp username/password@serviceName directory=dumpdir dumpfile=export.dmp encryption_password=’’clave segura’’
$ expdp username/password@serviceName parfile=parametros.txt
```

Abans...... S’ha de crear el DIRECTORY en oracle

Còpies de Seguretat DataPump (expdp / impdp) ✔L’usuari que connecta ha de tindre permisos per fer còpies ✔Els fitxers destí no deuen existir ✔ ✔Parameters Available in Data Pump Export Command-Line Mode Exemples de parfile SHCHEMAS=usuari1 DUMPFILE=exp.dmp DIRECTORY=dirpump LOGFILE=exp.log TABLESPACES=users DUMPFILE=exp2.dmp DIRECTORY=dirdump LOGFILE=exp2.log TABLES=usuari1.festius,usuari1.llibres DUMPFILE=exp3.dmp DIRECTORY=dirdump LOGFILE=exp3.log QUERY=usuari1.festius:"where data>’1/6/23’" DUMPFILE=exp4.dmp DIRECTORY=dirdump LOGFILE=exp4.log

Còpies de Seguretat Crear DIRECTORY en oracle CREATE [OR REPLACE] DIRECTORY directory_name AS 'path_name'; e.g. En Linux CREATE OR REPLACE DIRECTORY g_vid_lib AS '/video/library/g_rated'; En Windows: CREATE OR REPLACE DIRECTORY dircopies AS 'D:\oracle\copseg'; You must have the CREATE ANY DIRECTORY system privilege to create directories.

When you create a directory, you are automatically granted the READ, WRITE, and EXECUTE object privileges on the directory, and you can grant these privileges to other users and roles. The DBA can also

```sql
grant these privileges to other users and roles.
```

Crear un objecte DIRECTORY en oracle La carpeta ha d’existir !!

Còpies de Seguretat DataPump (expdp / impdp) Exemple d’us del paquet DBMS_DATAPUMP declare handle number; begin

```sql
handle:=dbms_datapump.open(‘EXPORT’,’SCHEMA’);
dbms_datapump.add_file(handle,’VENTAS.DMP’,’DUMPDIR’);
dbms_datapump.metadata_filter(handle,’SCHEMA_EXPR’,’=VENTAS’);
dbms_datapump.set_parallel(handle,4);
dbms_datapump.start_job(handle);
dbms_datapump.detach(handle);
```

end; Açò ho vorem millor en la unitat 04 (part procediments) Procediment anònim

Còpies de Seguretat RMAN (Oracle Recovery Manager) ✔Des de la ferramenta especial RMAN ✔Des de dins de l’SGBD amb el paquet DBMS_RCVMAN i DBMS_BACKUP_RESTORE ✔La còpia és física i incremental, a nivell de blocs ✔Utilitza Servidor de backup ✔RMAN necessita el ARCHIVELOG activat Exemples

```sql
$ rman target /
```

RMAN> show all; RMAN> backup incremental level 0 tag 'INC_L0' database ; //nivell 0 es complet RMAN> backup incremental level 1 for recover of copy tag 'INC_L0' database ; // nivell 1 es incremental RMAN> recover copy of database with tag 'INC_L0' ; RMAN> backup recovery area ;

Còpies de Seguretat (oracle) Aplicació Total / Parcial Completa / Incremental Online / Offline Lògica / Física exp / imp Ambdues Completes Ambdues Lògica Data Pump Ambdues Completes Ambdues Lògica RMAN Ambdues Ambdues Ambdues Física

Còpies de Seguretat (oracle) SQL*Loader SQL*Loader és una utilitat que permet la inserció de dades des d'un arxiu pla a una o més bases de dades. Durant una sola de les seves execucions és possible omplir múltiples taules amb dades de múltiples arxius, manejar registres d'ample variable o fix, manipular les dades entrants per a tractar amb valors nuls, delimitadors i espais en blanc, obviar registres o encapçalats i reaccionar enfront de fallades del procés de carregat

Còpies de Seguretat (postgreSQL) pg_dump [connection-option...] [option...] [dbname] doc.postgres // backup lògic

```sql
$ pg_dump dbname > dumpfile
$ psql dbname < dumpfile  (si no existeix bbdd , crear-la primer, i tots els usuaris)
$ pg_restore archivo_de_texto_no_plano
$ pg_dumpall > dumpfile
```

pg_basebackup [option...] doc.postgres // backup físic

Confidencialitat Encriptació Auditoria Integritat Restriccions Transaccions Disponibilitat Copies de seguretat Recuperació Autenticitat No repudi + Autorització Comptabilitat Normativa vigent en matèria de dades personals LOPDGDD - RPGD (GDPR) +

Normativa vigent en matèria de dades personals LOPDGDD - RPGD (GDPR) Drets ARCO ●Accés ●Rectificació ●Cancel·lació ●Oposició Classificar informació ●Nivell bàsic ●Nivell mig ●Nivell alt ➔Document de seguretat actualitzat ➔Notificar a AEPD Reglament Europeu (UE) 27 abril 2016 Llei Orgànica 3/2018, 5 de desembre

Normativa vigent en matèria de dades personals LOPDGDD - RPGD (GDPR) Paper del SGBD ●Gestió d’usuaris i permisos ●Sistemes de recuperació ●RI ●Encriptació (informació sensible) ●Auditoria Els procediments han d’estar documentats i supervisats per poder garantir el compliment de la normativa i la llei.

“ ” Activitat Investiga que relació té la LOPDGDD amb la GDPR Que és cadascuna d’elles ?

---
