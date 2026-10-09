---
layout: default
title: "✍️ Activitats pràctiques UT10 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT10 — Programa de recuperació"
prev_url: "../ut10/ut1001.html"
prev_label: "⬅️ 10.1 Dates en Oracle"
next_url: "../ut11/index.html"
next_label: "📘 UT11 Completa ➡️"
---

# ✍️ Activitats pràctiques UT10

> **✍️ Activitat Pràctica 10.1 — Instal·lar Oracle 21c**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Instal·lar Oracle21c en Windows 10 professional. Partint d’una MV amb W10 profesional, (prèviament instal·lat en la pràctica anterior) Crear un usuari anomenat oracle i donar-li permisos d’administrador.
>
> Utilitzar este usuari per a realitzar les pràctiques. Requisits • 4 o més GB memòria RAM, 2 o 4 cpu, 100 GB o més de SSD • Visual C++ Redistributable para Visual Studio . Instal·lar • java runtime Instal·lar i reiniciar (verificar amb java -version en un cmd ) *Comprovar requisits de la màquina on es va a instal·lar (HW i SW) ( --Si falta algun, posa’l--) Baixar l’ instal·lador versió 21c ( fitxer zip 3GB aproxim ) d’oracle.com Descomprimir ( utilitzar 7zip, serà mes ràpid) Està ja fet en la ova Crear carpetes d'instal·lació amb OFA (i moure l’instal·lador dins ) *Instal·lar sols el software de l’SGBD ( Executar setup.exe (executar com administrador) ) A partir d’ací ... ¡¡ No esborrar ni moure la carpeta de l’instal·lador !!
>
> Si no funciona, comprovar que no hi ha espais en el nom de la carpeta que conte l’instal·lador Instal·lar el listener (i configurar) Reiniciar màquina Instal·lar la primera bd Multitenant. (The non-CDB architecture is desupported in Oracle 21c ) nom CDB ribera nom PDB santvi Anotar contrasenya (de sys i system) !
>
> *En acabar , comprovar que funciona amb el sql*Plus , des d’un CMD sqlplus / as sysdba show user show con_name sqlplus system show user show con_name sqlplus / AS SYSDBA show pdbs Reiniciar maquina sqlplus / AS SYSDBA show pdbs Busca i explica els resultats, abans i després de reiniciar *On esta el log de la instal·lació ? Indica el lloc i adjunta una còpia del fitxer del log al treball Baixar i Instal·lar SQL-Developer (última versió per a Windows) Executar SQL-developer (com administrador) Crear una connexió per a sys i per a system a la CDB i provar-les.
>
> Crear una connexió per a sys i per a system a la PDB i provar-les.
>
> - En la mateixa màquina, instal·la altra bd multitenant, nom CDB costera nom PDB simarro
>
> Documentar el procés. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada. Entregar treball en PDF. Molt Important !

> **✍️ Activitat Pràctica 10.2 — Crear PDBs addicionals**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear una nova PDB Utilitzant la mv de W10 amb Oracle instal·lat. Utilitza dbca (comando) o Assistent: (executa com administrador) Estudia detingudament el procés.
>
> *Crear una nova PDB (Base de Dades de connexió) (Pluggable Data Base) dins de la CDB de ribera Anomena-la com a Guinovart Crea altra PDB dins de la CDB de costera Anomena-la com a Josep Mostra les opcions emprades. *Estudia detingudament el procés anterior, i contesta a les preguntes següents Quines dades necessita dbca ?
>
> Que signifiquen ? Quina informació demana que en la primera PDB no va demanar? Com queda el registre de windows ? (entrades relacionades amb l’SGBD oracle) Com queden els serveis de windows ? (serveis relacionat amb l’SGBD oracle) *Crea una nova PDB sense utilitzar el dbca. Fes-ho amb comando d’sql*plus (mira apunts) Anomena-la com a SoleriGodes Mira si esta oberta o no. Configura per a que quan se reinicie Windows, s'òbriga automàticament Prova que funciona i explica com es fa.
>
> Documentar tot el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 10.3 — Primers passos en l'administració d'Oracle**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Primers passos en l'administració d’Oracle Restaura la ova de windowsOracle3 Des del Sistema Operatiu Localitza el valor de les variables ORACLE_SID , ORACLE_HOME i ORACLE_BASE Localitza els fitxers listener.ora, sqlnet.ora i tnsnames.ora Localitza el fitxer SPFILE. Quin nom té? On està ubicat?
>
> Utilitzem SQL Developer Realitza connexió amb el servidor oracle21c amb l’usuari administador d’Oracle (sys) Mostra els registres (els noms) de la vista del DD que conte els tablespaces creats en la instal·lació Crea un nou tablespace simple T1 de 10 Mbytes Crea un nou tablespace T2 autoextensible de 20 Mbytes Afegix un datafile al tablespace T1 Crea un nou tablespace temporal T3_temp de 30 Mbytes On s’han creat els tablespaces ( CDB o PDB ?? , posa el nom de CDB o PDB) Mostra els registres (amb dades) de la vista del DD que conte els tablespaces creats Mostra els registres (amb dades) de la vista del DD que conte els datafiles creats Localitza el fitchers startup.log i listener.log Para la bbdd de manera «immediata» Arranca la bbdd en l’estat NOMOUNT (mostra resultats) Passa a l’estat OPEN (mostra resultats) Eixim de SQL Developer.
>
> Utilitzem ara SQL*Plus Connecta com a sys i esbrina el nom de la CDB$ROOT i de la primera PDB Connecta com a sys a la primera PDB Crear quatre taules (DDL). Baix tens dos exemples. Inserir dades en les taules creades. Dos files per taula creada. Explorar les taules creades al DD. Descriu les vistes del DD utilitzades Mostra els registres (amb dades) de la vista del DD que conte les taules creades Documentar el procés. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF Exemples Taules Alumnes Nia Nom Adreça Telefon Email dataAlta Modul CodModul NomModul Cicle Curs Hores

> **✍️ Activitat Pràctica 10.4 — Investigació d'un SGBD**
> > **✍️ Pràctica : Investigació d’un SGBD En esta pràctica, es facilitarà**
> > Pràctica : Investigació d’un SGBD En esta pràctica, es facilitarà una màquina virtual amb un SGBD instal·lat Es demana Restaura/Importa la OVA Arranca la màquina i entra en l’usuari del S.O. admin/1234 Contesta abans d’obrir sql*plus o sql developer Contesta i justifica
>
> - Quants i quins usuaris té el sistema operatiu?. Qui ha instal·lat el SGBD ?
> - Quantes BBDD hi ha instal·lades ?
> - De quin tipus son ? ( tradicionals / multitenant )
> - Quin nom tenen les BBDD instal·lades ?
> - Quin és el valor de: ORACLE_SID, ORACLE_BASE, ORACLE_HOME, NLS_LANG,
>
> ORACLE_BUNDLE_NAME
>
> - Obri un cmd i busca en el PATH alguna ruta de l’SGBD. Indica les que trobes.
> - Quants listeners hi han ? (noms i ports)
> - Localitza els fitxers de log de operació. Adjunta l’últim a esta pràctica.
>
> A partir d’ací, en sql developer ( o en sql*plus ) Contesta i justifica
>
> - Nom de totes les CDB i de les PDB’s
> - En quin estat estan ? ( parades, muntades, obertes .... )
> - Obri les que estiguen parades. (mostra com ho fas)
> - Configura per a que s'òbriguen automàticament la pròxima arrancada de l’SGBD
> - Hi ha algun Tablespace apart dels Tablespaces del sistema(creats en la instal·lació) ?
> - Quin nom tenen ?
> - Quins 'datafiles' tenen associats cadascun ?
> - Explora tots els tablespaces de la/les CDB i de les PDBs corresponents. ¿quins noms tenen els
>
> 'datafiles' i on estan emmagatzemats? (mostra ruta/rutes)
>
> - Para la BBDD de forma immediata.
>
> ============================== Documentar el procés. I no oblides seguir les indicacions del document de Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 10.5 — Limitacions amb perfils**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Limitacions amb perfils Per realitzar esta pràctica, utilitza la màquina windowsOracle3 Connecta amb l’usuari system a la primera PDB Crea un usuari amb el nom prova1 i password secreta i privilegis per connectar i crear recursos amb quota. Força que es canvie la contrasenya en la primera connexió.
>
> Visualitza els límits actuals del perfil DEFAULT Modifica el perfil DEFAULT per a que els usuaris que l’utilitzen: • Sols puguen fallar 3 vegades fins que es bloquege l’accés. • El bloqueig dure 9 dies • El password s’haja de canviar cada 4 mesos • El temps de que deixa canviar la password una vegada caducat siga 10 dies Visualitza els límits nous del perfil DEFAULT Desconnecta a system Visualitza l’estat de l’usuari prova1, abans i després de connectar. (ACCOUNT_STATUS, data de bloqueig, etc...) Connecta amb l’usuari prova1, comprova que demana canviar la contrasenya. Canvia-la i entra.
>
> Desconnecta Intenta connectar a l’usuari prova1 posant malament la password més de tres vegades. Comprova que l’usuari es bloqueja i no pot connectar Connecta amb l’usuari system a la primera PDB Comprova l’estat de l’usuari prova1 (ACCOUNT_STATUS, data de bloqueig, etc...) Desbloqueja l’usuari prova1.
>
> Desconnecta a system Comprova que l’usuari prova1 pot connectar. Comprova la data del pròxim canvi de contrasenya i el temps de gràcia Canvia la data del sistema operatiu per vore que passa quan es caduca la contrasenya Comprova l’estat de l’usuari prova1 (ACCOUNT_STATUS, data de bloqueig, etc...) Canvia la data del S.O. per vore que passa quan es caduca la contrasenya + temps de gràcia Comprova l’estat de l’usuari prova1 (ACCOUNT_STATUS, data de bloqueig, etc...) Documentar el procés. I no oblides seguir les indicacions del document de Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 10.6 — Còpia de Seguretat amb expdp**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Oracle expdp Per realitzar esta pràctica, utilitza sql*plus en la màquina servidor i el cmd per llançar la còpia Mostra i explica els passos realitzats En la primera PDB de la CDB de l’ORACLE_SID
>
> Crea l’usuari client01 i dona-li els permisos necessaris per connectar, crear recursos i quotes Connecta amb l’usuari (client01). Crear una taula festius amb els camps mes, dia, nom-festa Pobla la taula amb 5 registres/files (tot sants 1/11 , Nadal 25/12, cap d’any 31/12, i algun més) Ix de sql*plus Des de cmd, crea una carpeta amb el teu nom , per fer les còpies (en la màquina servidor) Connecta com a SYS defineix la carpeta dins de l’SGBD amb (CREATER DIRECTORY .....) i dona-li permisos si cal.
>
> Ix de sql*plus Des de cmd, crea un fitxer de paràmetres parametres1.txt dins de la carpeta abans definida, indicant que es farà còpia dels objectes del esquema (schemas) de client01 Crea un fitxer de paràmetres parametres2.txt dins de la carpeta abans definida, indicant que es farà còpia dels objectes del tablespace (tablespaces) de users Dona-li permisos a client01 per poder llançar expdp (grant DBA to ....) Fes una copia amb la utilitat expdp d’Oracle (des de cmd i utilitza l’opció parfile , ) Llança expdp per l’usuari system amb parametres1.txt Llança expdp per l’usuari client01 amb parametres2.txt
>
> Documentar el procés. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ----------------------------------------------------------------------------------------------------------------- Taula FESTIUS
>
> ```sql
> CREATE TABLE FESTIUS( Dia es num, Mes es num, nom_festa es text)
> ```

> **✍️ Activitat Pràctica 10.7 — Funcions i procediments**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear procediments amb pl/sql Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb l’usuari system, connectat en la primera pdb, Crear usuari usuari3 (donar-li contrasenya i permisos de connexió i creació de procediments i funcions) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.
>
> Connecta a la primera pdb amb l’usuari creat (usuari3) Realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)
>
> ```sql
> drop table llibres;
> CREATE TABLE llibres(
> ```
>
> codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL, autor VARCHAR2(30), editorial VARCHAR2(40), preu number(8,2),
>
> ```sql
> datadalta date  );
> ```
>
> #### 1) Escriure un bloc anònim PL/SQL que escriga el text ‘HOLA’
>
> SET SERVEROUTPUT ON BEGIN
>
> ```sql
> DBMS_OUTPUT.PUT_LINE('HOLA');
> ```
>
> END;
>
> - Escriure un bloc PL/SQL que compte el nombre de files que hi ha en la taula llibres, deposita el
>
> resultat en la variable v_num, i visualitza el seu contingut. 2.1 – Guardar el bloc en un fitxer anomenat PROG01.SQL en c:\users\oracle\Documents
>
> #### 3) Carregar i executar el bloc guardat en l'arxiu PROG01.SQL de c:\users\oracle\Documents
>
> 4)Escriure un procediment anomenat ‘suma2n’ que reba dos números i visualitze la seua suma. =========================================================================
>
> - Codificar un procediment ‘inreves’ que reba una cadena i la visualitze a l'inrevés.
>
> Hola > aloH
>
> - Escriure una funció que reba una data i retorne l'any, en número, corresponent a aqueixa data.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD
>
> #### 7) Escriure un bloc PL/SQL que faça ús de la funció anterior. Guarda el
>
> bloc en un fitxer prog02.sql
>
> #### 8) Donat el següent procediment, basat en la taula abans creada
>
> CREATE OR REPLACE PROCEDURE alta_llibre ( v_num llibres.llibreid%TYPE, v_titol llibres.titol%TYPE default 'sense titol', v_autor llibes.autor%TYPE DEFAULT 'anònim') IS BEGIN
>
> ```sql
> INSERT INTO llibres
> VALUES (v_num , v_titol, v_autor);
> ```
>
> END crear_llibre; ------ Detecta els errors i corregix-los (compila i executa primer ) Indicar quins de les següents cridades al procediment són correctes i quins incorrectes, en aquest últim cas escriure la crida correcta usant la notació posicional (en els casos que es puga)
>
> 1º. crear_llibre;
>
> ```sql
> 2º. crear_llibre(50);
> 3º. crear_llibre('Hackers');
> 4º. crear_llibre(50,'Hackers');
> 5º. crear_llibre('Hackers', 50);
> 6º. crear_llibre('Hackers', 'McClure');
> 7º. crear_llibre(50, 'Hackers', 'McClure');
> 8º. crear_llibre('Hackers', 50, 'McClure');
> 9º. crear_llibre('McClure', ‘Hackers’);
> 10º. crear_llibre('McClure', 50);
> ```
>
> #### 9) Desenvolupar una funció que retorne el nombre d'anys complets que hi ha entre
>
> dues dates que es passen com a arguments. Fes servir la funció amb un exemple.
>
> - Escriure una funció que, fent ús de la funció anterior retorne els triennis que hi ha entre dues
>
> dates. (Un trienni són tres anys complets). Fes servir la funció amb un exemple.
>
> - Codificar un procediment que reba una llista de fins a 5 números i visualitze la seua suma.
>
> Fes servir el procediment amb un exemple.
>
> - Escriure una funció que retorne solament caràcters alfabètics substituint qualsevol altre
>
> caràcter per blancs a partir d'una cadena que es passarà en la crida. Fes servir la funció amb un exemple.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD
>
> - Implementar un procediment que reba un import i visualitze el desglossament del canvi en
>
> unitats monetàries de 1c ,2c, 5c, 10c, 20c, 50c, 1€, 2€, 5€, 10€, 20€, 50€, 100€, 200€, 500€ en ordre invers al que apareixen ací enumerades. Fes servir el procediment amb un exemple.
>
> - Codificar un procediment que permeta esborrar un llibre el número(id) del qual es passarà en la
>
> cridada al procediment. Nota: El procediment anterior retornarà el missatge << Procedimiento PL/SQL terminado con éxito >> encara que no existisca el número i, per tant , no s'esborre el llibre. Pots fer que s’informe d’aquesta situació quan es produeixca ?
>
> #### 15) Escriure un procediment que modifique el títol d’un llibre. El procediment rebrà com a
>
> paràmetres el número del llibre i el títol nou. Nota: L'indicat en la nota de l'exercici anterior es pot aplicar també a aquest.
>
> - Utilitzant el DD ( Diccionari de Dades d’Oracle ) Visualitzar tots els procediments i funcions de
>
> l'usuari (el que s’està utilitzant per fer els problemes del butlletí) emmagatzemats en la base de dades i la seua situació (vàlid o invalid). <================================================> Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 10.8 — Connexió usuaris**
> Per realitzar esta pràctica, utilitza la .ova facilitada en classe. (windowsOracle7.ova)
>
> *Vos passe el text en classe.

> **✍️ Activitat Pràctica 10.9 — Procediments i Funcions en PL/SQL (II)**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Crear procediments amb pl/sql (II) Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb usuari system en pdb1, Crear usuari usuari3 (donar-li contrasenya i permisos de connexió i creació de procediments i funcions) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.
>
> Connecta a pdb1 amb l’usuari creat (usuari3), realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)
>
> ```sql
> DROP TABLE llibres;
> CREATE TABLE llibres(
> ```
>
> codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL, autor VARCHAR2(30), editorial VARCHAR2(40), preu number(8,2)
>
> ```sql
> );
> insert into llibres values (1,'Bases de datos relacionales','Mota','Pearson'’,50);
> insert into llibres values (2 ,'El lenguaje de programacion C’,’Kernigan’,’Prentice Hall’,60);
> insert into llibres values (3 ,'Fundamentos de JAVA’,’Schildt’,’Mc GrawHill’,55);
> insert into llibres values (4 ,'Redes de Computadoras’,’Kurose’,’Pearson’,70);
> insert into llibres values (5 ,'Sistemas Operativos’,’Tanenbaum’,’Prentice Hall’,60);
> insert into llibres values (6 ,'Multitenant for Beginners','Kumar','Adison',12);
> insert into llibres values (7 ,'OSINT para analistas','Yaiza','Adison',27);
> insert into llibres values (8 ,'La revolucion cuantica','Alberto','Sinequanon',12);
> ```
>
> 1)Escriure un procediment(nom es_parell) que reba un número i visualitze si es parell o imparell. Ajuda: funció mod(x) torna la resta de la divisió. 2)Escriure un procediment(nom son_divisibles) que reba dos números i visualitze si un es divisible per l’altre. Ajuda: funció mod(x) torna el residu de la divisió.
>
> - Escriure un procediment(nom major_de_tres) que reba tres números i visualitze el major.
>
> Ajuda: sentència IF anidada
>
> - Escriure un procediment(nom ordena_3num) que reba tres números i els visualitze ordenats de
>
> major a menor. Ajuda: sentència IF anidada
>
> - Escriure una funció(nom calcula_irpf) que, donat un sou, un núm de fills menors , calcule irpf
>
> ( amb reducció ) , sabent que irpf=15% i cada fill (max 5 ) redueix un 10% de la quota.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD
>
> #### 6) Escriure una funció(nom notaenlletra) que, donat una qualificació, la
>
> torne en lletres segons la taula següent: <5 No aprovat >=5 , <6 Aprovat >=6 , <7 Bé >=7 , <9 Notable >=9 , <=10 Excel·lent Ajuda: sentència IF o CASE
>
> - Escriure una funció(nom capicua) que, donat una número, torne si es cap-i-cua (true, false)
>
> Ajuda: sentència de bucle
>
> #### 8) Escriure un procediment(nom mostra_imparells) que, donat una número, mostre tots el
>
> imparells de l’1 al N. Ajuda: sentència de bucle
>
> - Escriure un procediment(nom escriu_taula) que, donat una número (1-10) , mostre la seua taula
>
> de multiplicar. Ajuda: sentència de bucle
>
> - Escriure un procediment(nom dibuixaQuadrat) que, donat un número N dibuixe un quadrat de
>
> costat N utilitzant * (Ajuda: sentència de bucle)
>
> ```sql
> Exemple: per a n=4 ==>    execute dibuixaQuadrat(4);
> ```
>
> - * * *
> - * * *
> - * * *
> - * * *

> **✍️ Activitat Pràctica 10.10 — Funcions en Diccionari de Dades**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Butlletí repàs 80
>
> ### 1. Fes una funció (nom: numTriggers )que torne quants triggers té (pertanyen
>
> - un usuari
>
> ### 2. Fes una funció (nom: numTriggersActius) que torne quants triggers actius
>
> te la BD actual
>
> ### 3. Fes un procediment (nom: escriuTriggersBiE) que escriga tots els triggers
>
> de tipus BEFORE que estiguen actius (ENABLED)
>
> ### 4. Fes una funció (nom: numTaules) que torne quantes taules te un usuari
>
> ### 5. Fes un procediment (nom: escriuUsuarisRecents) que escriga els usuaris
>
> creats des de fa una setmana
>
> ### 6. Fes un procediment (nom: esborraTau) al qual se li passe un usuari, i
>
> escriga totes les DDL d’esborrar les seues taules.
>
> ### 7. Fes un procediment (nom: arrancaPDBs) que, des de la cdb$root, pose en
>
> estat read/write totes les pdbs que no ho estiguen.
>
> ### 8. Fes un procediment (nom: refesInd) al qual se li passe un usuari, i
>
> escriga totes les DDL de reconstruir tots els index de les seues taules.
>
> ### 9. Fes un procediment (nom: ampliaA50) al qual se li passe una taula, i
>
> amplie totes les columnes de la taula del tipus varchar2, a 50. Ajuda: Taules de DD. dba_triggers dba_tables dba_tab_columns dba_indexes dba_users dba_sys_privs dba_role_privs dba_directories dba_sequences dba_tablespaces dba_data_files TIPS: Pots utilitzar funcions predefinides de PL/SQL round( n) trunc( n) mod(n,m ) floor(n ) Ceil(n ) Length( s) Lower(s ) Upper(s ) Ascii(s ) Chr(n ) Substr(s,n [,l]) trim(s) instr(c,s) || initcap(s) replace(s,s1,s2) Data2 – data1 : num de dies entre les dos dates :: Data1 + num : data de ‘num’ de dies més que Data1

> **✍️ Activitat Pràctica 10.11 — Triggers**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD BUTLLETÍ TRIGGERS
>
> ### 0. Crea un usuari (usuari4) amb permisos per fer les operacions
>
> necessàries d’esta pràctica. Connecta amb l’usuari. Crea les taules EMP, ALUMNES, NOTES (esquema de baix) i pobla-les
>
> - Fes un trigger que només permeta als venedors (CARREC=VENEDOR) tindre comissions.
>
> ### 2. Registrar totes les operacions realitzades per l’usuari BERNAT sobre la taula EMP, en
>
> una taula anomenada AUDIT_EMP on es guarde: usuari, data i tipus d'operació.
>
> ### 3. Fes un trigger que controle que els sous estan en els següents rangs
>
> AUXILIAR: 800 – 1100 ANALISTA: 1200 – 1600 CAP:1800 – 2000 ((Si un empleat té uns altres al seu càrrec o el seu CÀRREC no és un dels anteriors, no s'apliquen els límits.))
>
> - JOAN treballa en una empresa multinacional, amb delegacions en molts pobles.
>
> JOAN es el cap de la delegació de SUECA. Fes un trigger que impedisca a l'usuari JOAN que canvie el sou dels empleats que treballen fora de SUECA.
>
> ### 5. Fes un trigger que puge un 10% el sou als empleats quan canvia la localitat on
>
> treballen.
>
> ### 6. Dissenya un trigger que impedisca la introducció de registres en la taula Alumnes si
>
> contenen algun caràcter numèric o algun caràcter de puntuació en el camp Apenom. Taules EMP DNI (pk) NOMCOMPLET NO NULL ADRESS CITY CP NSS CARREC NO NULL SOU_MES NO NULL SOU_EXTRA NO NULL COMISSIO NO NULL POB_TREBALL NO NULL CAP (fk , dni->emp) ALUMNES NIA (pk) APENOM ADRESS CITY CP TELEF EMAIL NOTA_MITJANA NOTES NIA (fk, nia->alumnes) MODUL NOTA (pk) NIA , MODUL
