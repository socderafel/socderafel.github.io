---
layout: default
title: "✍️ Activitats pràctiques UT6 — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT6 — Setmana d'exàmens. Del 20 al 26 de Novembre"
prev_url: "../ut06/ut0601.html"
prev_label: "⬅️ 6.1 Continguts i Recursos"
next_url: "../ut07/index.html"
next_label: "📘 UT7 Completa ➡️"
---

# ✍️ Activitats pràctiques UT6

> **✍️ 📋 Exercici / Qüestionari 6.1 — Qüestionari 1**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 6.2 — Qüestionari 2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ 📋 Exercici / Qüestionari 6.3 — Examen. Part teoria**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 6.4 — Examen. Part pràctica**
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: Seguretat i Alta Disponibilitat ASIX-SEMI Primer Trimestre NOM: DATA: __ / __ / _______ Preparació de l'examen Tindre a mà l’usuari i password d’Aules. L’examen s’entregarà en Aules. Arrancar ordinador (multi-arranc) en SO mint 21 Entrar en l’usuari alumne , password alumne Per a la realització de l'exercici utilitzarem una MV linux Kali (ja instal·lada) Entrar en virtualbox i engegar màquina virtual Kali Usuari : kali pass: kali Exercici 0 Arranca la màquina (si te demana actualitzar, no actualitzes) posa-li el teu nom (en /etc/hostname i /etc/hosts) i reinicia Exercici 1 En la carpeta ~/Downloads/EJ1 hi ha 2 fitxers, un en clar(internxt.jpg) i un altre xifrat(fitxer.txt.cpt).
>
> El fitxer xifrat està encriptat amb l'eina ccrypt i utilitzant com a clau els 8 dígits finals del resum sha512 del fitxer en clar. (compte amb les majúscules/minúscules) Desxifra el fitxer xifrat i aplica la funció md5 al resultat (al fitxer desxifrat). Es demana: Esbrinar els últims 8 dígits del resum md5 del fitxer desxifrat.
>
> Anota la solució ací: Que conté el fitxer ?? ---------------------------------------------------------------------------------------------------------------------------------- El SO amfitrió, linux mint, té LibreOffice instal·lat, amb writer. Elabora un document amb writer, explicant el procés seguit per a l'obtenció de la solució, i una vegada acabat, guarda com PDF. Lliura el document PDF amb el teu nom El lliurament es farà en Aules. S’obrirà una tasca específica.
>
> Fes servir captures de pantalla parcials, capturant sols la informació rellevant. Des de mint, polsa tecla impr pa , després al botó +Nuevo i després escull opció de ‘ ● Seleccionar área que capturar’ i finalment polsar el botó Tomar una captura de pantalla 1/2
>
> Parc Salvador Castell, 16 46680 Algemesí MÓDUL: Seguretat i Alta Disponibilitat ASIX-SEMI Primer Trimestre NOM: DATA: __ / __ / _______ Exercici 2 En la carpeta ~/Downloads/EJ2 es disposa d'un fitxer de text amb un secret en el seu interior, “secret.txt”.
>
> Usant gpg ….. • Crear claus asimètriques amb grandària 4096, validesa 2 anys, i amb passfrase “santvicent” • Exportar la clau pública en un fitxer text/base64. Anomena amb el teu nom.claupub • Signa el fitxer “secret.txt” amb la clau privada generada prèviament. • Xifra el fitxer “secret.txt” amb una clau simètrica. (santvicent2023) • Contesta a les següents preguntes.
>
> Quin algorisme s'ha utilitzat per a signar? Confecciona un document en writer amb els passos seguits i una vegada acabat, guarda com PDF Lliura: el document PDF el fitxer amb la clau pública, el fitxer xifrat el fitxer signat Comandos d’ajuda sha256sum md5sum sha1sum sha512sum gpg 2/2
