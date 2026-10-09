---
layout: default
title: "✍️ Activitats pràctiques UT5 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT5 — Automatització de tasques"
prev_url: "../ut05/ut0508.html"
prev_label: "⬅️ 5.8 Solucions a pl/sql"
next_url: "../ut06/index.html"
next_label: "📘 UT6 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — (ASGBD) Procediments en Oracle**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear procediment emmagatzemat en Oracle Esta pràctica no funciona molt bé ... Esbrina perquè i fes les modificacions oportunes per a que funcione. Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQL Developer Amb usuari system en pdb1
>
> Crear usuari usuari1 (donar-li contrasenya i permisos de connexió, crear taules, crear procediments) Crear usuari usuari2 (donar-li contrasenya i permisos de connexió ) Amb usuari1 en pdb1: Crear taula llibres3 Crear un procediment (nom amay) que pose totes les dades de la taula en majúscules Donar-li a usuari2 permís d’execució del procediment creat.
>
> Inserir 3 files amb dades en majúscules i minúscules Llistar dades de la taula Amb usuari2 en pdb1: executar procediment (execute usuari1.amay;) explorar resultats (llistar dades) -- (comenta que succeeix i perquè) Inserir 2 files més amb dades en majúscules i minúscules (comenta que succeeix i perquè) explorar resultats (comenta que succeeix i perquè) Com podríem solucionar-ho Des d’usuari1, crea un procediment que inserisca llibres de la editorial ‘Sintesis’ , anomenat inserixSintesis , on se li pase com a paràmetre, el nom del llibre i el preu.
>
> El procediment buscará l’úlim codi de la taula, l’incrementarà en 1 per a donar de alta el nou registre Dona permís a usuari2 per executar el nou procediment i prova’l des d’usuari2 Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ---------------------------------------- Taula Llibres3
>
> ```sql
> CREATE TABLE llibres3(  codi NUMBER(6) PRIMARY KEY,
> ```
>
> titol VARCHAR2(30) NOT NULL, editorial VARCHAR2(30),
>
> ```sql
> preu NUMBER(8,2),  datadalta date );
> ```

> **✍️ Activitat Pràctica 5.2 — (ASGBD) Activitat Triggers**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Activitat Crear (2) triggers amb pl/sql Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb usuari system en pdb1, Crear usuari usuari13 (donar-li contrasenya i permisos de connexió i creació de triggers) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.
>
> Connecta a pdb1 amb l’usuari creat (usuari13) Realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)
>
> ```sql
> DROP TABLE llibres;
> CREATE TABLE llibres(  codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL,
> ```
>
> autor VARCHAR2(30) , editorial VARCHAR2(40), impressor VARCHAR2(40),
>
> ```sql
> preu number(8,2) , datadalta date );
> ```
>
> Crea la taula control_llibres
>
> ```sql
> DROP TABLE control_llibres;
> CREATE TABLE control(  data_canvi DATE,  usuari VARCHAR2(10),
> ```
>
> codi_llibre NUMBER(6), preu_abans NUMBER(8,2), preu_despres NUMBER(8,2),
>
> ```sql
> operacio_denegada VARCHAR2(10)  );
> ```
>
> - Crear un disparador (nom: canvi_preus) que guarde quan i qui canvia un preu de la taula llibres,
>
> el preu nou i el vell. En la exploració dels resultats, que informació te el camp ‘DATA_CANVI’ ? Es pot vore l’hora i minuts del canvi de preu ?
>
> - Crea un disparador (nom: horari_laboral) que no ens permeta dur a terme operacions amb
>
> llibres si no estem en la jornada laboral. (8h – 20h) Dilluns a Divendres, i a més a més, guarde els intents en la taula control_llibres. En tots els exercicis, documenta les proves necessàries i els resultats. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 5.3 — (ASGBD) Activitat Jobs**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear job en Oracle Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQL Developer Amb usuari system en pdb1: Crear usuari usuari4 (donar-li contrasenya i permisos de connexió i crear taules, procediments, triggers, jobs) Amb usuari4 en pdb1
>
> En una empresa d'assegurances. Tindrem dues taules. Una de pòlisses i una altra de rebuts mensuals. Cada mes, s'hauran de generar els rebuts dels clients que tinguen la seua pòlissa activa. Crear taula polisses Crear taula rebuts Poblar la taula polisses ( 3 o 4 pòlisses ) Crear un procediment (nom: calcula_rebuts) que genere els rebuts d’un mes.
>
> Provar procediment. Crear un job que execute el procediment el primer dia de cada mes, a les 00h:01min Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ---------------------------------------- Taules
>
> ```sql
> CREATE TABLE polisses(
> ```
>
> numpolissa NUMBER(6) PRIMARY KEY, codiclient NUMBER(6) , nom VARCHAR2(50) NOT NULL, prima number(8,2), estat VARCHAR2(10), preu number(8,2)
>
> ```sql
> );
> CREATE TABLE rebuts(
> ```
>
> numpolissa NUMBER(6) not null , datap DATE not null , quantitat NUMBER(6) not null, estat varchar2(10) not null , constraint rebuts_pk primary key (datap, numpolissa)
>
> ```sql
> );
> insert into polisses values (1,1,’pepe’, 100,’actiu’,100);
> ```

> **✍️ 📋 Exercici / Qüestionari 5.4 — Qüestionari Repàs de classe (UD4)**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
