---
layout: default
title: "✍️ Activitats pràctiques UT1 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT1 — Instal·lació d'un SGBD"
prev_url: "../ut01/ut0105.html"
prev_label: "⬅️ 1.5 Arquitectura BBDD's en Oracle"
next_url: "../ut02/index.html"
next_label: "📘 UT2 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT1

> **✍️ 📋 Exercici / Qüestionari 1.1 — Activitat: preparació mv W10prof**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Preparació MV Windows 10 professional. Utilitzar una MV per cada mòdul / pràctica (segons s’indique). No reutilitzar MV de altres mòduls !! / cursos !!
>
> Crear màquina virtual 4 GB RAM mínim (important) 150 GB disc dur 2-4 processadors (important) Habilitar acceleració 3D Xarxa. (Adaptador pont / NAT) per instal·lar, després la canviarem. instal·lar W10 prof version 22H2 NO actualitzar posar nom usuari (el teu nom) canviar nom equip ( mOracle-{el-teu-nom} ) (long < 15 !!) Per fer la pràctica , no cal activar Windows.
>
> Molt recomanable per pràctiques posteriors: Instal·lar Chrome , Imprescindible, Baixar i Instal·lar 7zip reiniciar NO actualitzar apagar canviar adaptador de xarxa de la maq. Virtual a xarxa interna ( no eixida a internet, per no deixar actualitzar windows) Així evitarem que ens pregunte per actualitzar el SO.
>
> Molt recomanable canviar el Controlador gràfic, per agilitzar el funcionament de la màquina. Temps estimat de la instal·lació: 15 min En este moment la MV ocupa 12GB (aprox) Es recomanable fer una OVA (apagar màquina primer) Temps estimat 6 min. Fem una snapshot / instantània Opcional ( instal·lar guest-additions , compartir portapapeles:Bidireccional , i reiniciar) Per últim, pausem les actualitzacions el més possible x 4

> **✍️ Activitat Pràctica 1.2 — (ASGBD) Instal·lar ORACLE en W10**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Instal·lar Oracle19c en Windows 10 professional. Utilitzar una MV per cada assignatura / pràctica. Partint d’una mv amb W10 profesional, actualitzat Crear un usuari anomenat oracle i donar-li permisos d’administrador.
>
> Utilitzar este usuari per a realitzar les pràctiques. Requisits • 4 o més GB memòria RAM, 2 o 4 cpu, 100 GB o mes de SSD • Visual C++ Redistributable para Visual Studio . Instal·lar Baixar l’ instal·lador ( fitxer zip 3GB aproxim ) de oracle.com Descomprimir ( en 7zip serà mes ràpid) Crear carpetes d'instal·lació amb OFA (i moure l’instal·lador dins ) Visionar els vídeos abans de començar Executar setup.exe (executar com administrador) Si no funciona, comprovar que no hi ha espais en el nom de la carpeta que conte l’instal·lador Instal·lar sols el software del SGBD (vore vídeo) Instal·lar el listener (vore vídeo) Reiniciar màquina Instal·lar la primera bd (vore vídeo) Anotar contrasenya (de sys i system) ! i ...¡¡ No esborrar ni moure la carpeta de l’instal·lador !!
>
> En acabar , comprovar que funciona amb el sql*Plus , des d’un CMD sqlplus / as sysdba show user show con_name sqlplus system show user show con_name Si no hem canviat res, la bbdd (CDB) serà orcl i la bbdd_de_connexió (PDB) serà orclpdb Comprovar que funciona amb el sql*Plus , des d’un CMD sqlplus / AS SYSDBA show pdbs Reiniciar maquina sqlplus / AS SYSDBA show pdbs Busca i explica els resultats, abans i després de reiniciar On esta el registre d’instal·lació ? Indica el lloc i adjunta una còpia del fitxer del registre al treball Baixar i Instal·lar SQL-Developer (versió Windows) Executar SQL-developer (com administrador) Crear una connexió i provar-la.
>
> Documentar el procés. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada. Entregar treball en PDF.

> **✍️ Activitat Pràctica 1.3 — (ASGBD) Instal·lar S.O. Oracle Linux 8 Desktop**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Preparació MV Oracle Linux 8 desktop preparat per ser Client/s d’SGBD Utilitzar una MV per cada assignatura / pràctica. Baixar la .iso de Oracle Linux (OL8Desktop) No baixar la NetInstall !! , costa molt de configurar. Baixar la FULL ISO Crear màquina virtual (OL8) 2 GB ram, 50 GB disco, 2 processador, desactivar diskette, i de moment, deixar la resta com està.
>
> Instal·lar Seleccionar idioma, seleccionar destí de la instal·lació, xarxa, data i hora, selecció de software
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD En xarxa, canviar nom En software, escollir desktop Crear contrasenya de root, i crear primer usuari amb el teu nom (fer-lo administrador) i ... Una volta acabe la instal·lació, reiniciar.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD en el primer reinici, ens demana acceptar la llicència i fer una configuració inicial entrem en el primer usuari abans creat.. Una vegada ha acabat la instal·lació, apagar i fer snapshot En este moment Ocupa 6,6 GB aprox.
>
> En este moment podem considerar canviar la configuració de xarxa de la MV, a Adaptador Pont o a Xarxa Nat. Per Actualitzar, Oracle Linux no utilitza apt, utilitza yum o dnf
>
> ```sql
> sudo yum check-update
> sudo yum update
> ```
>
> uname -mrs Instal·lar guest additions
>
> ```sql
> $ su
> # dnf -y install gcc make perl bzip2
> # dnf -y install kernel-headers kernel-devel
> # dnf -y update kernel*
> ```
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Inserir el CD de les guest additions run En este moment ja es pot redimensionar la pantalla i es queda per al següent arranc En acabar, apagar màquina. Si tot ha anat bé, borrar la snapshot i Exportar a .ova ---------------------------------------- Instal·lar instant_client + sqlplus (client) https://www.oracle.com/es/database/technologies/instant-client/linux-x86-64-downloads.html Baixar basic package (rpm ) Baixar sql plus package (rpm) Instal·lar amb sudo dnf localinstall basic.rpm sudo dnf localinstall sqlplus.rpm provar $ sqlplus ç ç Ara ens falta un servidor d’Oracle per poder connectar.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Instal·lar sqldeveloper Seguir tutorial: https://www.oracleknowhow.com/install-sql-developer-on-rpm-linux/
>
> ```sql
> $ java -version
> $ sudo dnf install java-11-openjdk java-11-openjdk-devel
> ```
>
> (baixar sqldeveloper-21.4.2-018.1706.noarch.rpm, ens demana compte d’oracle)
>
> ```sql
> $ sudo rpm -Uhv sqldeveloper-21.4.2-018.1706.noarch.rpm
> $ cd /opt/sqldeveloper
> ```
>
> ./sqldeveloper.sh Deprés d’iniciar per primera vegada, ja podem trobar el sqldeveloper Ara ens falta un servidor d’Oracle per poder connectar. Instal·lar PgAdmin4 ( per accedir a SGBD postgres ) (seguir tutorial) https://computingforgeeks.com/how-to-install-pgadmin-4-on-centos-linux/
