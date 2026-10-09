---
layout: default
title: "✍️ Activitats pràctiques UT2 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT2 — Configuració d'un SGBD"
prev_url: "../ut02/ut0205.html"
prev_label: "⬅️ 2.5 primers pasos - sol"
next_url: "../ut03/index.html"
next_label: "📘 UT3 Completa ➡️"
---

# ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — (ASGBD) Primers pasos en DBA**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Primers passos en l'administració d’Oracle Utilitzem primer SQL Developer Localitza el valor de les variables ORACLE_SID i ORACLE_HOME Localitza els fitxers listener.ora, sqlnet.ora i tnsnames.ora Localitza el fitxer SPFILE Realitza connexió amb el servidor oracle19c amb l’usuari administador d’Oracle (sys) Crea un nou tablespace simple T1 de 10 Mbytes Crea un nou tablespace T2 autoextensible de 20 Mbytes Afegix un datafile al tablespace T1 Crea un nou tablespace temporal T3_temp de 30 Mbytes Localitza el fitchers startup.log i listener.log Para la bbdd de manera «immediata» Arranca la bbdd en l’estat NOMOUNT Passa a l’estat OPEN Eixim de SQL Developer.
>
> Utilitzem ara SQL*Plus Connecta com a sys i esbrina el nom de la CDB$ROOT i de la primera PDB Connecta com a sys a la primera PDB Crear taula/es (DDL) baix tens dos exemples. Crea quatre taules en total. Explorar les taules creades al DD amb les eines (DML) Descriu les vistes del DD utilitzades Documentar el procés. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF Codi creació de taules
>
> ```sql
> CREATE TABLE alumnes(
> ```
>
> alumn_id NUMBER(9), nom VARCHAR2(100) NOT NULL, localitat VARCHAR2(300) NOT NULL, telefon NUMBER(11) UNIQUE, email VARCHAR2(50) UNIQUE, data_creacio DATE DEFAULT SYSDATE, CONSTRAINT alumnes1 PRIMARY KEY(alumn_id)
>
> ```sql
> );
> CREATE TABLE modul(
> ```
>
> modul_id NUMBER(9), nom_modul VARCHAR2(100) NOT NULL, codi_modul NUMBER(5) NOT NULL, cicle VARCHAR(10) NOT NULL, curs NUMBER(1) NOT NULL, hores NUMBER(3), CONSTRAINT modul PRIMARY KEY(modul_id)
>
> ```sql
> );
> ```

> **✍️ 📋 Exercici / Qüestionari 2.2 — Activitat - Investiga un SGBD**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Investigació d’un SGBD En esta pràctica, se facilitarà una màquina virtual amb un SGBD instal·lat Es demana Restaura/Importa la OVA Configura la xarxa en Red Nat Arranca la màquina i entra en l’usuari ORACLE/oracle Contesta 1 Quantes BBDD hi ha instal·lades ?
>
> 2 De quin tipus son ? ( tradicionals / multitenant ) 3 Quin nom tenen les BBDD instal·lades ? 4 En cas de les bbdd multitenant, nom del CDB i de les PDB’s 5 En quin estat estan ? ( parades, muntades, obertes .... ) 6 Obri les que estiguen parades. 7 Configura per a que s'òbriguen automàticament la pròxima arrancada de l’SGBD 8 Hi ha algun Tablespace apart dels Tablespaces del sistema ?
>
> 9 Quin nom tenen ? X Quins ‘datafiles’ tenen associats cadascun ? ============================== Documentar el procés. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF
