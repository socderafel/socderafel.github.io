---
layout: default
title: "✍️ Activitats pràctiques UT8 — Serveis en Xarxa | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · U0 — Virtualització i Repàs de Conceptes Previs"
prev_url: "../ut08/ut0802.html"
prev_label: "⬅️ 8.2 Plantilla qüestionai d'avaluació"
next_url: "../ut07/index.html"
next_label: "📘 U1 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT8

> **✍️ 📋 Exercici / Qüestionari 8.1 — Pràctica Virtualització. Part 1**
> Pràctica Virtualització. Part 1
>
> Pràctica Virtualització. Part 1
>
> Al llarg d'aquest curs usarem tant VMs basades en Windows i GNU/Linux. En aquesta primera pràctica refrescarem el procediment per a la creació de VMs amb VirtualBox.
>
> En principi, necessitarem 3 màquines virtuals
>
> - Un client amb Windows
> - Un servidor amb Ubuntu Server
> - Un client amb Ubuntu Desktop
>
> ### 1. Cerca el VirtualBox en el teu ordinador, perquè ha de vindre amb la instal·lació
>
> de base.
>
> ### 2. Crea una VMs partint de la ISO que pots descarregar de
>
> Windows
>
> Quan finalitzes comprova si el Sistema Operatiu té les "*Guests *Additions", i en cas contrari, instal·la-les. Configura
>
> Pràctica Virtualització. Part 1
>
> - El disc dur virtual han de ser d'emmagatzematge d'expansió dinàmica, de
>
> 15 Gb de capacitat.
>
> - La memòria RAM a assignar de 800MB.
>
> ### 3. Després crea una nova VM per a la versió de 64 bits servidor
>
> de GNU/Linux coneguda com ​Ubuntu Server​ (*) partint d'un disc dur virtualitzat- un fitxer de tipus VDI ("Virtual Disk Image").
>
> Configura
>
> - Tres adaptadors de xarxa (que, de moment, poden deixar-se dues en
>
> manera "Només amfitriona").
>
> Ajuda: per a això, hauràs de crear la VM des de zero i en el moment de configurar l'opció de disc dur, indicar-li que vols usar un prèviament creat.
>
> ### 4. Finalment, crea una altra VM partint d'un un fitxer de tipus
>
> OVA a partir del qual pugues crear una VM amb​ Ubuntu Desktop (*) ja prèviament creada.
>
> Abans d'acabar amb aquest apartat, situa tant el​ servidor Ubuntu​ com a la VM amb ​Ubuntu Desktop​ dins de la mateixa xarxa, usant l'esquema de direccions que vulgues. Comprova que existeix connectivitat​ entre totes dues VMs abans de seguir.
>
> Una vegada tingues les VMs preparades, avisa al professor perquè passe a veure el resultat.
>
> (*) admini/admini

> **✍️ 📋 Exercici / Qüestionari 8.2 — Pràctica Virtualització. Part 2**
> Pràctica Virtualització. Part 2
>
> Pràctica Virtualització. Part 2
>
> En aquest segon exercici has de pensar en la configuració conjunta que hauria de presentar les diverses VMs de VirtualBox en cas de disposar d'un disseny de xarxa com aquest
>
> Abans de passar a resoldre l'escenari, en el qual usarem les VMs de l'apartat anterior, convé tindre clara la diferència entre els diferents tipus de configuració que pot presentar la interfície de xarxa. Revisa aquest ​document ​abans de seguir.
>
> Pràctica Virtualització. Part 2
>
> Observacions a l'esquema proposat: La icona que representa a l'encaminador serà en la pràctica el teu ordinador amb Ubuntu Server. Per tant, perquè el trànsit puga viatjar entre xarxes, l'encaminament haurà d'estar habilitat. Cerca en internet com activar l'encaminament en un S.O com Ubuntu Server (Linux). Els switches virtuals no existeixen en la pràctica, però cal suposar que en un cas real sí que serien necessaris.
>
> En la imatge s'observen 3 xarxes. Una d'elles, connecta l'encaminador a la xarxa del centre, és a dir, a la xarxa de l'aula. Configura un dels 3 adaptadors de xarxa d'aquesta VM en manera "Puente" de manera que reba automàticament una direcció de xarxa a l'aula. Les altres 2 xarxes deuran virtualitzar-se, ajustant els adaptadors de xarxa a la manera "Xarxa Interna". Indaga com fer-ho.
>
> Per configurar les xarxes en Ubuntu hauras de configurar les interfícies de xarxa. En aquest document tens tots els conceptes necessaris. Revisa-ho (​tutorial Ubuntu i netplan​ en l’apartat “​Configuración NETPLAN con direccionamiento estático/manual​”) En la tasca anomena les targetes amb el nom de la xarxa virtual on vagen a treballar.
>
> Ajuda't de les següents preguntes per a resoldre l'exercici
>
> 1.- Quants interfícies hauran de crear-se en Virtual Box per a donar cabuda a les 2 xarxes virtuals?
>
> 2.- Quina diferència existeix en el funcionament els adaptadors de xarxa virtuals dels clients, en manera “Puente”, “Només Amfitrió”, "Xarxa Interna" o NAT?
>
> 3.- Com es pot canviar el número IP d'una xarxa virtual determinada quan l'adaptador funciona en "Només Amfitrió"?
>
> 4.- Com podem aconseguir que l'encaminador (l'ordinador amb Ubunutu Server en aquest cas) encamine el trànsit entre les xarxes 1 i 2?
>
> Una vegada tingues les VMs preparades, avisa al professor perquè passe a veure el resultat.
>
> Pràctica Virtualització. Part 2

> **✍️ 📋 Exercici / Qüestionari 8.3 — Pràctica Virtualització. Part 3**
> Pràctica Virtualització. Part 3
>
> Pràctica Virtualització. Part 3
>
> Per a finalitzar, partint del cas anterior,
>
> realitza les modificacions necessàries en els seus components perquè s'ajuste al següent esquema de xarxa en el qual tenim dos nous equips, d'una banda, un Windows (genera'l clonant el que ja tens) i l'ordinador en el qual estàs treballant, que haurà d'estar connectat a l'encaminador
>
> Una vegada tingues les VMs preparades, avisa al professor perquè passe a veure el resultat.

> **✍️ Activitat Pràctica 8.4 — Entrega memoria UD0**
> Entrega memoria de les pràctiques.

> **✍️ Activitat Pràctica 8.5 — Entrega presentació UD0**
> Entrega presentació UD0

> **✍️ Activitat Pràctica 8.6 — Entrega Acta inicial**
> Entrega Acta inicial

> **✍️ Activitat Pràctica 8.7 — Entrega Acta final**
> Entrega Acta final

> **✍️ 📋 Exercici / Qüestionari 8.8 — Qüestionari d'avaluació U0**
> Qüestionari d'avaluació U0

> **✍️ Activitat Pràctica 8.9 — Nota UD0**
> Nota UD0
