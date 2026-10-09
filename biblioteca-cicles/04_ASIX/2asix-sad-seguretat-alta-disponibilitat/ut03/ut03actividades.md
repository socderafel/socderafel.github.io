---
layout: default
title: "✍️ Activitats pràctiques UT3 — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT3 — Setmanes (5-6) del 9 al 22 d'octubre"
prev_url: "../ut03/ut0302.html"
prev_label: "⬅️ 3.2 Anàlisi Forense"
next_url: "../ut04/index.html"
next_label: "📘 UT4 Completa ➡️"
---

# ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — Copia de seguretat amb Cobian**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: Cobian Backup 11 Utilitza una maquina virtual amb W10 Profesional 64bits. Crea una carpeta en l'escriptori Prepara 4 carpetes dins de la carpeta creada. (Crida-les: UNA, DOS, TRES, QUATRE) Prepara 2 fitxers de text amb contingut en cada carpeta, crida'ls com tu vulgues.
>
> Visualitza i observa el Camp/Columna «Atributs» dels arxius involucrats en la pràctica. Que informació tenen ? Que significa? Utilitza el manual de Sagrario Pedraza per a instal·lar la utilitat Cobian Backup 11. Atents al Check de Volume Shadow Copy, ¡ desmarca'l !
>
> Tingues en compte que les tasques s'executaran elles soles. Deixa que ho facen quan els corresponga, no les executes manualment. Crea la teua primera tasca: Programa una còpia incremental cada 10 min. Indica que la còpia es realitze de les carpetes creades, i el destí estiga en una carpeta dins de Documents. També pots posar com a destí un altre disc dur (si el teu equip en té un) Deixa que el programa execute la primera còpia. Observa el resultat.
>
> En el temps entre còpies, modifica algun fitxer, afig un altre fitxer. Observa les carpetes creades. hi ha carpetes buides? fan falta? com es pot solucionar això? Crea una tasca amb mes opcions. Analitza cadascuna de les finestres de la tasca. Utilitza les opcions d'execució pre-còpia (tancar un programa) i post-copia (apagar l'equip).
>
> Utilitza un filtre per a no copiar els arxius de tipus vídeo. Utilitza el xifratge d'arxius. (indica la clau de xifratge) Quan es cree la còpia, Quin format tenen ? Com es poden desxifrar? Aprén a observar i interpretar els log, que en cobian es diuen Diari Configura l'aplicació perquè t'envie els log al teu compte de correu Obri el menú Eines – Opcions Estudia les pestanyes de “Diari” i “Correu” Configura perquè se t'envie el Diari al teu correu.
>
> Configura una còpia incremental, que mantinga 2 còpies completes i que realitze una completa cada 2 incrementals. Executa manualment reiterades còpia per a observar com va creant completes i esborrant còpies obsoletes. Documenta tot el procés en format pdf. Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”

> **✍️ Activitat Pràctica 3.2 — (SAD) John**
> ### 📄 01 activitat john.pdf
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: John John és una eina que permet descobrir contrasenyes en diferents mitjans: Contrasenyes d'usuari (shadow) , de fitxer *zip encriptat, de fitxer pdf encriptat, etc...
>
> Activitat Busca informació en internet de la ferramenta i com utilitzar-la (documenta els resultats) En kali, john està instal·lat, però els diccionaris de contrasenyes estan comprimits
>
> - En kali, busquem el diccionari comprimit i el descomprimim a un txt. (PISTA: El diccionari
>
> s’anomena rockyou......)
>
> - Utilitzem l’eina John para trencar la contrasenya d’un fitxer shadow ( el que acompanya a la
>
> pràctica )
>
> ### 3. Utilitzem l’eina(es) John para trencar/desvelar la contrasenya del fitxer .zip
>
> ### 4. Utilitzem l’eina(es) John para trencar/desvelar la contrasenya del fitxer pdf
>
> Activitat d’ampliació. Opcional
>
> ### 5. Sabem que hi ha un usuari amb una contrasenya complexa, però hem pogut saber
>
> que te un patró. Una majúscula, 3 minúscules, 2 simbol i 2 digits.
>
> Ajuda: Ferramenta CRUNCH Documentar tot el procés en un document. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball” ===================================================================
>
> ### 📄 docu1.pdf
>
> > **📄 Document Escanejat / Visual (docu1.pdf)**
> > Aquest document PDF (1 pàgines) està compost principalment per esquemes o imatges escanejades.
>
> ### 📄 hash.txt
>
> root:!:19634:0:99999:7::: daemon:*:19634:0:99999:7::: bin:*:19634:0:99999:7::: sys:*:19634:0:99999:7::: sync:*:19634:0:99999:7::: games:*:19634:0:99999:7::: man:*:19634:0:99999:7::: lp:*:19634:0:99999:7::: mail:*:19634:0:99999:7::: news:*:19634:0:99999:7::: uucp:*:19634:0:99999:7
>
> proxy:*:19634:0:99999:7::: www-data:*:19634:0:99999:7::: backup:*:19634:0:99999:7::: list:*:19634:0:99999:7::: irc:*:19634:0:99999:7::: _apt:*:19634:0:99999:7::: nobody:*:19634:0:99999:7::: systemd-network:!*:19634:::::: mysql:!:19634:::::: tss:!:19634:::::: strongswan:!:19634
>
> systemd-timesync:!*:19634:::::: redsocks:!:19634:::::: rwhod:!:19634:::::: _gophish:!:19634:::::: iodine:!:19634:::::: messagebus:!:19634:::::: miredo:!:19634:::::: redis:!:19634:::::: usbmux:!:19634:::::: mosquitto:!:19634:::::: tcpdump:!:19634:::::: sshd:!:19634:::::: _rpc:!:19634
>
> dnsmasq:!:19634:::::: statd:!:19634:::::: avahi:!:19634:::::: stunnel4:!*:19634:::::: Debian-snmp:!:19634:::::: _gvm:!:19634:::::: speech-dispatcher:!:19634:::::: sslh:!:19634:::::: postgres:!:19634:::::: pulse:!:19634:::::: inetsim:!:19634:::::: lightdm:!:19634:::::: geoclue:!:19634
>
> saned:!:19634:::::: polkitd:!*:19634:::::: rtkit:!:19634:::::: colord:!:19634:::::: nm-openvpn:!:19634:::::: nm-openconnect:!:19634:::::: kali:$y$j9T$AwE33Tc30iw3jXAoqM8L40$fsG5Xk1wdmVvc5lBwMl.k9RK1V3KgMMY4XNG4.noIu3:19634:0:99999:7::: user1:$1$3RHk5NUv$.qA2Hwzq7Yw0TdrqoddIo1:19642:0:99999:7
>
> user2:$1$SRCYpfDZ$TPQi3NXrUN9kgorGRYLZd/:19642:0:99999:7::: user3:$1$BFEO8EDP$gAUpZQA/2Iy37rLCEfZpm1:19642:0:99999:7::: user4:$1$441zQzdA$Cr/W5zyZiCjjQ3eP1LB.B/:19642:0:99999:7::: user5:$1$sdqJX.ZT$85fgv7TJyeGeX8KPn073q/:19642:0:99999:7

> **✍️ 📋 Exercici / Qüestionari 3.3 — Activitat DeepFreeze ( ampliació )**
> En esta activitat no cal entregar document
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: DeepFreeze En Windows, existeixen un tipus de programes que permeten “congelar” el sistema en un moment determinat, a partir del qual, tot el que es realitze, instal·le, esborre, etc. serà oblidat quan es reinicie el sistema.
>
> Utilitza una màquina virtual amb Windows 10 profesional 64 bits
>
> ### 1. Instal·lar esta ferramenta. És de pagament, però permet un
>
> període de prova (30 dies), suficient per a realitzar pràctiques i observar com funciona i els beneficis que pot reportar-nos en seguretat informàtica. Utilitzarem la versió Standard. https://www.faronics.com/es/downloads_es/download-form_es?product=DFS
>
> - Congelar el sistema utilitzant esta aplicació.
>
> ### 3. Realitzar modificacions, esborrats, instal·lacions d’altres
>
> aplicacions, canvis de contrasenyes, etc.
>
> ### 4. Reiniciar sistema i comprovar que tot el realitzat, inclús
>
> danyat del sistema, no s’ha quedat reflectit.
>
> ### 5. Observa las opcions addicionals, practica i detalla el seu us
>
> i per a que serveixen.
>
> ### 6. Porta a l’extrem la prova, esborrant la carpeta del sistema
>
> operatiu, i reinicia el sistema Documentar tot el procés en un document. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”
