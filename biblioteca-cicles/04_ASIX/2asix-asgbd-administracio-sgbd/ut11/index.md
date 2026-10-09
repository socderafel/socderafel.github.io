---
layout: default
title: "UT11 — Convocatòria extraordinaria ASGBD - curs — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT11 Completa"
prev_url: "../ut10/ut10actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT10"
next_url: "../ut11/ut1101.html"
next_label: "11.1 Continguts i Recursos ➡️"
---

# 📘 UT11 — Convocatòria extraordinaria ASGBD - curs (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**11.1 Continguts i Recursos**](#ut1101) (o [obrir en pàgina individual ➡️](./ut1101.md) )
> - [**✍️ Activitats pràctiques UT11**](#ut11actividades) (o [obrir en pàgina individual ➡️](./ut11actividades.md) )

---

## 11.1 Continguts i Recursos

> **📌 🏷️ Apunt de la Unitat**
> #### **Informació examen dia 10/JUNY, 19:10h, Aula C05**
>
> La prova constarà de dos parts, una part de teoria i una part de pràctica
>
> En la part teòrica, hi haurà preguntes tipus test, o de resposta curta (no es podrà consultar cap font d'informació)
>
> En el mòdul d'ASGBD no fa falta que porteu cap màquina virtual de casa.
>
> Les màquines virtuals se vos facilitaran.
>
> La part pràctica es realitzarà en un ordinador de l'aula, el qual tindrà tot el necessari preparat
>
> En la part pràctica podreu consultar el material d'aules
>
> La prova es realitzarà en l'aula C05
>
> Què heu de portar?
>
> Document oficial d'acreditació ( DNI, carnet conduir, passaport )
>
> 2 bolígrafs
>
> Usuari i contrasenya d'Aules

---

## ✍️ Activitats pràctiques UT11

> **✍️ 📋 Exercici / Qüestionari 11.1 — Qüestionari d'entrenament 1**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 11.2 — Qüestionari d'entrenament 2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 11.3 — Qüestionari d'entrenament 3**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 11.4 — Qüestionari d'entrenament 4**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 11.5 — Examen. Part Teòrica**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 11.6 — Examen. Part Pràctica**
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX-Presencial Convocatoria Extraordinaria NOM: DATA: __ / __ / _______ Preparació de l'examen Arrancar ordinador. Entrar en l’usuari alumne , password alumne Per a la realització de l'exercici utilitzarem una MV Windows 10 prof amb Oracle (ja instal·lada) Entrar en virtualbox i engegar màquina virtual Usuari : oracle password: oracle En l’escriptori trobaràs un/s fitxers .sql d’ajuda , però ves amb compte, necessitaràs modificar-les !!
>
> ### 1. Connecta a la CDB amb l’usuari sys utilitzant SQL*Plus
>
> (1punt) Des de dins de Sql*plus , Crea una PDB nova anomenada santvi
>
> ### 2. Connecta amb l’usuari system a la PDB creada des de SQL*Plus
>
> (1punt) Comprova el nom de la PDB on estàs connectat.
>
> - Amb SQL*Plus, crea dos tablespaces nous (biblioteca i assegurances) amb datafiles respectius
>
> (biblioteca.dbf, assegurances.dbf) sense especificar el path/ruta dels datafiles de 50MB cadascú. Pregunta: On s’han creat els fitxers ? (especifica la ruta del sistema d’arxius de windows) (3punts) Utilitza SQL Developer a partir d’ací. (continua amb usuari system en santvi)
>
> - Amb SQL*Plus, crea taula llibres i taula control_llibres (definicions de taules en la segona fulla,
>
> darrere) dins de la tablespace creada abans biblioteca (1punt)
>
> - Crea un disparador (nom: canvi_preus) que guarde qui canvia un preu de la taula llibres.(3punts)
> - Inserix 5 files amb dades. Llista les dades de les taules llibres i control.
>
> (1punt)
>
> - Crea usuaria Rachel. Donar-li contrasenya i permisos de connectar i actualitzar la taula llibres
>
> Connecta amb la usuaria Rachel i modifica preus de 2 llibres. Connecta amb system i Llista les dades de les taules llibres i control (2punts)
>
> ### 8. Amb l’usuari system, crea taules de pòlisses i rebuts, dins del tablespace creat abans
>
> assegurances . Pobla la taula pòlisses (4 registres) (1punt)
>
> - Crea un disparador que no deixe inserir pòlisses que el preu siga major que la prima.
>
> Prova que funciona intentant inserir un registre que no complisca la condició (3punts)
>
> - Utilitza el diccionari de dades i contesta. ¿quins son els 4 usuaris del sistema amb el ID mes
>
> baix? (2punts) (de18p) ---------------------------------------------------------------------------------------------------------------------------------- Explica cadascun dels punts i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada.
>
> 1/2
>
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX-Presencial Convocatoria Extraordinaria NOM: DATA: __ / __ / _______ El SO amfitrió, té LibreOffice instal·lat, amb writer. Elabora un document amb writer, explicant el procés seguit per a l'obtenció de la solució, i una vegada acabat, guarda com PDF. Lliura el document PDF.
>
> El lliurament es farà en Aules. S’obrirà una tasca específica. Fes servir captures de pantalla parcials (regió), capturant sols la informació rellevant. Des de mint/lliurex, polsa tecla impr pa , després al botó +Nuevo i després escull opció de ‘ ● Seleccionar área que capturar’ i finalment polsar el botó Tomar una captura de pantalla ---------------------------------------------------------------------------------------------------------------------------------- llibres iban titol datapub editorial preu VARCHAR2(20) VARCHAR2(60) date VARCHAR2(50) number(8,2) PK: codi control_llibres data_canvi usuari codi_llibre preu_abans preu_despres DATE VARCHAR2(10) NUMBER(6) NUMBER(8,2) NUMBER(8,2) Fk: codi_llibre polisses numpolissa codiclient nom prima estat preu NUMBER(6) NUMBER(6) VARCHAR2(50) number(8,2) VARCHAR2(10) number(8,2) Pk: numpolissa rebuts numpolissa datap quantitat estat NUMBER(6) DATE NUMBER(6) VARCHAR2(10) Pk: numpolissa + datap Fk: numpolissa alumnes nie nom d_alta adreça telefon email NUMBER(6) VARCHAR2(50) DATE VARCHAR2(50) VARCHAR2(12) VARCHAR2(35) Pk: nie 2/2
