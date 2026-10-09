---
layout: default
title: "✍️ Activitats pràctiques UT6 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT6 — Optimització de l'SGBD"
prev_url: "../ut06/ut0601.html"
prev_label: "⬅️ 6.1 Optimització de l'SGBD"
next_url: "../ut07/index.html"
next_label: "📘 UT7 Completa ➡️"
---

# ✍️ Activitats pràctiques UT6

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
