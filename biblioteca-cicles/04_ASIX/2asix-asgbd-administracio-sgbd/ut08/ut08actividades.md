---
layout: default
title: "✍️ Activitats pràctiques UT8 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT8 — Segona Avaluació"
prev_url: "../ut08/ut0801.html"
prev_label: "⬅️ 8.1 Enquesta valoració docent. 2on trimestre"
next_url: "../ut09/index.html"
next_label: "📘 UT9 Completa ➡️"
---

# ✍️ Activitats pràctiques UT8

> **✍️ 📋 Exercici / Qüestionari 8.1 — Examen 2on Trimestre. Part Teòrica**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 8.2 — Examen 2on Trimestre. Part Pràctica**
> Test: 17:10 - 17:30 20'
>
> Pràctic : 17:30 - 19:15 1h 40'
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX - Presencial Segon Trimestre NOM: DATA: 12/02/2024 La nota de la prova objectiva serà 50% nota qüestionari, 50% nota d’aquesta part pràctica. (obligatori puntuar més d’un 4 en cada part per qualificar nota) Preparació de l'examen Tindre a mà l’usuari i password d’Aules. El resultat s’entregarà en Aules.
>
> Arrancar ordinador assignat: Entrar en l’usuari examen , password examencito Per a la realització de l'exercici utilitzarem una MV Windows 10 prof amb Oracle (ja instal·lada) Entrar en virtualbox i engegar màquina virtual : Usuari : oracle password: AsIx24 Exercici 0 . Arranca la màquina (si te demana actualitzar, no actualitzes) i espera 2 minuts.
>
> Explica la realització dels punts següents i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada.
>
> ### 1. Connecta amb l’usuari sys des de SQL*Plus (utilitza SQL*Plus en aquest punt )
>
> Esbrina i indica el nom de la primera, segon i tercera PDB i de la CDB del SGBD de la màquina -Des de SQL*Plus, connecta amb l’usuari system a la segona PDB (que no siga read only). Comprova el nom de la PDB on estàs connectat. -Crea usuari usuari19 i dona-li contrasenya i permisos necessaris per fer les tasques següents
>
> - Utilitza SQL Developer a partir d’ací. Connecta com a usuari19. Crea taula llibres i taula
>
> control_llibres (definicions de taules en la segona fulla, darrere) 50% -Crea una funció (nom: llibres_cars) que torne el nombre de llibres amb preu > 35€
>
> - 50% Crea un disparador (nom: baixa_llibre) que guarde registre en la taula control quan
>
> s’esborre un llibre (totes les dades possibles). -Inserix 5 files amb dades i a continuació, esborra 3 llibres. -Llista dades de les taules llibres i control_llibres i explica els resultats
>
> - Crea taules de pòlisses i rebuts. Pobla la taula pòlisses (4 registres)
>
> 70% Crea un procediment (nom: calcula_rebuts) que genere els rebuts d’un mes. Prova procediment. Mostra i explica els resultats
>
> - Crear un job que execute el procediment anterior el primer dimarts de cada mes, a les
>
> 01h:05min -Crear un un disparador (nom: horari_laboral) que no ens permeta dur a terme operacions amb pòlisses si no es fan en la jornada laboral. (10h – 18h) Dimarts a Dijous. Prova que funciona. ---------------------------------------------------------------------------------------------------------------------------------- Explica cadascun dels punts i adjunta captures de regions de pantalla (no pantalla sencera) on es puga vore l’èxit de l’acció realitzada.
>
> 1/2
>
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: ASGBD ASIX - Presencial Segon Trimestre NOM: DATA: 12/02/2024 El SO amfitrió, linux mint, té LibreOffice instal·lat, amb Writer. Elabora un document amb Writer, explicant el procés seguit per a l'obtenció de la solució, i una vegada acabat, guarda com PDF. Lliura el document PDF.
>
> El lliurament es farà en Aules. S’obrirà una tasca específica. Fes servir captures de pantalla parcials (regió), capturant sols la informació rellevant. Des de mint, polsa tecla impr pa , després al botó +Nuevo i després escull opció de ‘ ● Seleccionar área que capturar’ i finalment polsar el botó Tomar una captura de pantalla ---------------------------------------------------------------------------------------------------------------------------------- llibres codi titol autor editorial preu NUMBER(6) VARCHAR2(50) VARCHAR2(30) VARCHAR2(40) NUMBER(8,2) control_llibres datacanvi usuari codi_llibre preu_abans preu_despres DATE VARCHAR2(10 NUMBER(6) NUMBER(8,2) NUMBER(8,2) polisses numpolissa codiclient nom prima estat preu_any NUMBER(6) NUMBER(6) VARCHAR2(50) NUMBER(8,2) VARCHAR2(10) NUMBER(8,2) rebuts numpolissa datap quantitat estat NUMBER(6) DATE NUMBER(6) VARCHAR2(10) 2/2
