---
layout: default
title: "UT9 — Convocatoria Ordinaria — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT9 Completa"
prev_url: "../ut08/ut08actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT8"
next_url: "../ut09/ut0901.html"
next_label: "9.1 Continguts i Recursos ➡️"
---

# 📘 UT9 — Convocatoria Ordinaria (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**9.1 Continguts i Recursos**](#ut0901) (o [obrir en pàgina individual ➡️](./ut0901.md) )
> - [**✍️ Activitats pràctiques UT9**](#ut09actividades) (o [obrir en pàgina individual ➡️](./ut09actividades.md) )

---

## 9.1 Continguts i Recursos

> **📌 🏷️ Apunt de la Unitat**
> #### **Informació examen dia 19/FEB, 17:15h, Aula C04**
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
> La prova es realitzarà en l'aula C04
>
> Què heu de portar?
>
> Document oficial d'acreditació ( DNI, carnet conduir, passaport )
>
> 2 bolígrafs
>
> Usuari i contrasenya d'Aules

---

## ✍️ Activitats pràctiques UT9

> **✍️ 📋 Exercici / Qüestionari 9.1 — Examen Teoria 1er Trimestre**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 9.2 — Part pràctica 1er Trimestre**
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX - Presencial Convocatòria Ordinaria NOM: DATA: 19/02/2024 La nota de la prova objectiva serà 50% nota qüestionari, 50% nota d’aquesta part pràctica. (obligatori puntuar més d’un 4 en cada part per qualificar nota) Preparació de l'examen Tindre a mà l’usuari i password d’Aules. El resultat s’entregarà en Aules.
>
> Arrancar ordinador assignat: Entrar en l’usuari examen , password examencito Per a la realització de l'exercici utilitzarem una MV Windows 10 prof amb Oracle (ja instal·lada) Entrar en virtualbox i engegar màquina virtual : Usuari : oracle password: OraOrd Exercici 0 . Arranca la màquina (si te demana actualitzar, no actualitzes) i espera 2 minuts.
>
> Explica la realització dels punts següents i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada. No connectes encara a l’SGBD
>
> ### 1. Abans de connectar, com es pot saber quina és la bbdd a la que connectarà SQL*Plus per
>
> defecte?. Abans de connectar, esbrina quantes BBDD hi ha en el SGBD i el nom de cadascuna. A partir d’ací pots utilitzar SQL*Plus o pots utilitzar SQL Developer. Ja pots connectar.
>
> - Connecta amb l’usuari sys. Esbrina el nom de la primera PDB de treball, i el nom de la CDB
>
> Connecta amb l’usuari system a la primera PDB i comprova el nom de la PDB on estàs connectat 3.Crea dos tablespace nous (tabspc01, tabspc02) amb datafiles respectius (fitxer01.dbf, fitxer02.dbf) sense especificar cap ruta, de 100MB cadascú. Consulta el DD. En quina ruta del sistema d’arxius del SO s’han creat els fitxers dels datafiles?
>
> 4.Com es diuen i on estan els datafiles dels tablespaces USERS de la CDB i de la primera PDB 5.Crear un usuari (client01) i assignar-li el tablespace tabspc01 amb una quota de 20M 6.Assignar permisos concrets a l’usuari client01 de: connexió, crear taules, i crear usuaris 7.Connecta amb l’usuari (client01) a la primera PDB i crea una taula (ESTUDIANTS) amb camps (id,nom,cognom,email) tots del tipus VARCHAR2, id com PK i els altres amb restricció de no null Afegix tres registres a la taula 8.Canvia la contrasenya de client01 des de client01 9.Crea un nou usuari (suport01) (sense i assignar-li cap tablespace ) 10.Consulta el DD i contesta : ¿quin tablespace se li assigna per defecte a l’usuari suport01?
>
> Explica cadascun dels punts i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada.
>
> 1/2
>
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX - Presencial Convocatòria Ordinaria NOM: DATA: 19/02/2024 El SO amfitrió, linux mint, té LibreOffice instal·lat, amb Writer. Elabora un document amb Writer, explicant el procés seguit per a l'obtenció de la solució, i una vegada acabat, guarda com PDF. Lliura el document PDF.
>
> El lliurament es farà en Aules. S’obrirà una tasca específica. Fes servir captures de pantalla parcials (regió), capturant sols la informació rellevant. Des de mint, polsa tecla impr pa , després al botó +Nuevo i després escull opció de ‘ ● Seleccionar área que capturar’ i finalment polsar el botó Tomar una captura de pantalla ---------------------------------------------------------------------------------------------------------------------------------- 2/2

> **✍️ Activitat Pràctica 9.3 — Part pràctica 2on Trimestre**
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX - Presencial Convocatòria Ordinaria NOM: DATA: 19/02/2024 Preparació de l'examen Tindre a mà l’usuari i password d’Aules. El resultat s’entregarà en Aules. Arrancar ordinador assignat: Entrar en l’usuari examen , password examencito Per a la realització de l'exercici utilitzarem una MV Windows 10 prof amb Oracle (ja instal·lada) Entrar en virtualbox i engegar màquina virtual : Usuari : oracle password: OraOrd Exercici 0 . Arranca la màquina (si te demana actualitzar, no actualitzes) i espera 2 minuts.
>
> Explica la realització dels punts següents i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada. Utilitza SQL Developer. Preguntes Segon Trimestre Connecta amb l’usuari23 / 1234 a la PDB_01. Mira les taules que te l’esquema d’usuari23?
>
> - Crea una funció (nom: llibres_ed) que donada una editorial, torne quants llibres te. Prova que
>
> funciona.
>
> - Crea un disparador (nom: baixa_llibre) que guarde registre en la taula control quan es done
>
> d’alta un llibre de més de 100€ (utilitza la estructura del trigger, i fes que es guarden totes les dades possibles). Prova el disparador. Mostra i explica els resultats.
>
> - Fes un procediment (nom: llibres_autor) al qual se li passe un autor, i escriga tots els títols dels
>
> seus llibres. Prova procediment. Mostra i explica els resultats.
>
> - Modificar la taula rebuts, per a fer-la particionada pel camp datap.
>
> Una partició per als anys 2015 al 2020, un altra per als inferiors i altra per als superiors 5-Crear un un disparador (nom: horari_laboral) que no ens permeta dur a terme operacions amb pòlisses si no es fan en la jornada laboral. L’horari de la empresa es: De dimarts a dijous de 10-14h i 15–18h. El divendres sols treballen pel mati, de 9h a 15h . Prova que funciona. (canvia la data/hora de la maq W10 manualment) ---------------------------------------------------------------------------------------------------------------------------------- Explica cadascun dels punts i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada.
>
> El SO amfitrió, linux mint, té LibreOffice instal·lat, amb Writer. Elabora un document amb Writer, explicant el procés seguit per a l'obtenció de la solució, i una vegada acabat, guarda com PDF. Lliura el document PDF.
>
> El lliurament es farà en Aules. S’obrirà una tasca específica. Fes servir captures de pantalla parcials (regió), capturant sols la informació rellevant. Des de mint, polsa tecla impr pa , després al botó +Nuevo i després escull opció de ‘ ● Seleccionar área que capturar’ i finalment polsar el botó Tomar una captura de pantalla 1/1
