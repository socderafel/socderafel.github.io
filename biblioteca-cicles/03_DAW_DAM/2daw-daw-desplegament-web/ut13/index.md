---
layout: default
title: "UT13 — Unitat Didàctica 13 — Desplegament d'Aplicacions Web | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT13 Completa"
prev_url: "../ut12/ut1202.html"
prev_label: "⬅️ 12.2 Calendari mòdul Desplegament d'Aplicacions Web"
next_url: "../ut13/ut1301.html"
next_label: "13.1 UT 2.1 Introducció - Creació servidor FTP (còpia ➡️"
---

# 📘 UT13 — Unitat Didàctica 13 (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**13.1 UT 2.1 Introducció - Creació servidor FTP (còpia**](#ut1301) (o [obrir en pàgina individual ➡️](./ut1301.md) )
> - [**✍️ Activitats pràctiques UT13**](#ut13actividades) (o [obrir en pàgina individual ➡️](./ut13actividades.md) )

---

## 13.1 UT 2.1 Introducció - Creació servidor FTP (còpia

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 25/09/23 al 08/10/23

> **📌 🏷️ Apunt de la Unitat**
> #### ACTIVITATS DE REFORÇ

> **📌 🏷️ Apunt de la Unitat**
> #### ACTIVITATS D'AMPLIACIÓ

---

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 2.1 Administració de

servidors d’arxius Introducció i instal·lació d’un servidor FTP Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- protocol FTP..........................................................................................................................................3
- protocol FTP securitzat, SFTP..............................................................................................................5
- Servidor FTP, instal·lació......................................................................................................................5

4.1. Servidor FTP, instal·lació sobre SO Ubuntu Server 22.04.3 LTS.................................................6 4.2. Configuració del servidor FTP sota Vsftpd.................................................................................10

- Securitzar el servidor FTP...................................................................................................................12

5.1. Creació del certificat SSL:...........................................................................................................12 2 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

Un servidor de fitxers és un servidor que permet gestionar a través de xarxa la càrrega, descàrrega, actualització i eliminació de fitxers emmagatzemats en els seus dispositius des d’ordinadors client. En l’àmbit de les aplicacions web, els servidors de fitxers s’utilitzen principalment per desplegar les aplicacions sobre el servidor on s’executaran.

El desplegament d’una aplicació web sobre els servidors de producció comporta habitualment la càrrega de grans quantitats de fitxers sobre aquests servidors. Com que el desenvolupament i manteniment d’aquestes aplicacions es fa en les màquines dels programadors, cal algun sistema de transferència d’arxius cada cop que es vol actualitzar la versió de producció d’una aplicació.

Un dels protocols més usats per a la transferència de fitxers en el desplegament d’aplicacions web és el protocol FTP (file transfer protocol), amb les seves variants FTPS i SFTP per adaptar-se a les necessitats actuals de seguretat. Alguns exemples de servidors de transferència de fitxers són Vsftpd, per a sistemes operatius Linux i Microsoft Internet Information Server (IIS), per a Windows.

- PROTOCOL FTP.

El protocol FTP es basa en l’arquitectura client/servidor i fa ús del protocol de control de transport, TCP (Transport Control Protocol) per realitzar el canal de transmissió entre el client i el servidor, amb la garantia que la informació que s’envia o es llegeix arribarà al seu destí.

3 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Es fan servir dos canals de comunicació dins del protocol FTP, el canal de control (port 21) i el canal de dades (port 20): • El canal de control envia totes les ordres de comunicació, com poden ser iniciar la sessió de treball i ordres d’execució com llegir, escriure, llistar, esborrar, etc.

• El canal de dades envia el contingut d’aquells fitxers a treballar, que pot ser tant per llegir el contingut del fitxer com per fer l’escriptura del fitxer. Tant el client com el servidor gestionen dos processos: • DTP (procés de transferència de dades): és l’encarregat d’establir la connexió i administrar el canal de dades. Tant el client com el servidor tenen el seu propi PTD.

• PI (intèrpret del protocol): interpreta el protocol i permet que el PTD pugui ser controlat mitjançant ordres rebudes pel canal de control. 4 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 3. PROTOCOL FTP SECURITZAT, SFTP

Per defecte, FTP no fa cap encriptació de dades, per això, després de la instal·lació, utilitzarem TTL/SSL per a garantir-ne la seguretat. A l’hora d'instal·lar el servidor (sobre una màquina virtual) s’habilitarà el servei SSH per a garantir una connexió segura amb el servidor.

- SERVIDOR FTP, INSTAL·LACIÓ.

Farem servir el servidor FTP amb Vsftpd ja que és un dels servidors FTP més potents i complets disponibles per a la majoria de distribucions de Linux. Algunes dels avantatges d’utilitzar aquest servidor són: ✔ Seguretat. És molt conegut per atorgar alts estàndards de qualitat respecte a la seguretat. L'eina inclou opcions avançades per a configurar la seguretat, així com suporte per a SSL i TLS. També ens proporciona un sistema d'autenticació d'usuaris anomenat PAM (Pluggable Authentication Modules).

✔ Facilitat de configuració. ✔ Velocitat de transferència. 5 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ✔ Escalabilitat. Aquest sistema és altament escalable, la qual cosa vol dir que podrem continuar manejant grans quantitats de trànsit, així com usuaris de manera simultània. ✔ Flexibilitat. Pot personalitzar-se per a adaptar-se a diferents necessitats (configurar límits en les amplades de banda, quotes d'espai per a usuaris i grups, i per a establir permisos per a contingut concret).

✔ Estabilitat.

#### 4.1. Servidor FTP, instal·lació sobre SO Ubuntu Server 22.04.3 LTS

➔Obtinguem les actualitzacions dels nostres paquets abans de començar la instal·lació del Vsftpd. ➔Instal·lar el daemon del Vsftpd.

➔Realitzar una còpia de seguretat de l'arxiu de configuració original per poder començar la instal·lació amb un arxiu de configuració en blanc: 6 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Permetre el trànsit FTP des del firewall. Primerament comprovarem si el firewall del servidor està actiu. Si no ho és l’activem: Finalment permetem el trànsit FTP: Aquesta sèrie de comandos obrirà els ports

✔ OpenSSH per a accedir al servidor a través de SSH. ✔ Els ports 20 i 21 per al trànsit FTP. ✔ Els ports 40000:50000 es reserven per al rang de ports passius que eventualment s'establirà en l'arxiu de configuració. ✔ El port 990 serà necessari quan s'active el TLS. Comproven de nou el firewall

7 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Crear el directori d'usuaris autoritzats. Primer crear un usuari. Nota: Ingressa una contrasenya per a l'usuari i completa tots els altres detalls. L'ideal és que el FTP es restringisca a un directori específic (per motius de seguretat).

Vsftpd utilitza chroot per a aconseguir-ho. Amb chroot habilitat, un usuari local està restringit al seu directori d'inici. No obstant, és possible que un usuari no puga escriure en el directori. No eliminarem els privilegis d'escriptura de la carpeta d'inici; en el seu lloc, crearem un directori ftp que actuarà com chroot juntament amb un directori d'arxius modificables.

Segon, crear la carpeta FTP: 8 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Tercer, establir la propietat dels fitxers del directori. Quart, eliminar els permisos d’escriptura. Verificar els permisos. Nota: Explicació del log mostrat a la terminal Formes de codificar els permisos

9 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Crear el directori contenidor d'arxius i assignar-ne la propietat. Crearem un fitxer per a fer proves més endavant. 4.2. Configuració del servidor FTP sota Vsftpd. El següent pas és configurar Vsftpd i l’accés FTP.

En aquest cas, permetrem que un usuari es connecte amb l’FTP utilitzant un compte shell local. Les configuracions clau requerides estan establides a l'arxiu de configuració vsftpd.conf. ➔Editar el fitxer vsftpd.conf 10 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Habilitar write_enable: Habilitar chroot: Per a permetre que la configuració funcione amb l'usuari actual i amb qualsevol altre usuari que s'agregue després cal afegir al final del fitxer: Per a garantir que hi haja una quantitat suficient de connexions disponibles afegim

Ajustem la configuració per a que l'accés només s'atorgue als usuaris que s'hagen agregat explícitament a una llista: Nota: Quan userlist_deny s'estableix en NO, només es permetrà l'accés als usuaris especificats en la llista. Finalment desem i tanquem l’arxiu. ➔Afegir l’usuari a l’arxiu ➔Verificar que l'usuari s’ha afegit correctament.

11 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Reinicia el daemon per a carregar els canvis de configuració.

- SECURITZAR EL SERVIDOR FTP.

Per defecte, FTP no fa cap encriptació de dades. Utilitzarem TTL/SSL per a garantir la seguretat.

#### 5.1. Creació del certificat SSL

Hem de crear el certificat SSL i usar-lo per a protegir el servidor. Nota: -days fa que el certificat siga vàlid per un any i hem inclòs una clau privada RSA de 2048 bits en el mateix comando. Obrir l’arxiu de configuració amb nano i comentar les línies de codi següents.

12 / 13

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web A continuació afegir les línies de codi següents: Habilitar SSL per a permetre la connexió tan sols a clientes amb SSL habilitat: Per a prohibir qualsevol connexió anònima a través d’SSK: Configura el servidor per a que utilitze TLS

Per a evitar que molts clients FTP no es puguen connectar no reutilitzarem SSL i sols utilitzarem claus xifrades amb un mínim de 128 bits. ➔Reinicia el daemon per a carregar els canvis de configuració. 13 / 13

---

## ✍️ Activitats pràctiques UT13

> **✍️ Activitat Pràctica 13.1 — Tasca 1 UD1 (còpia) (còpia)**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 13.2 — Tasca 2 UD1 (còpia) (còpia)**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 13.3 — Tasca 3 UD1 (còpia) (còpia)**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
