---
layout: default
title: "UD2 — Administració de Servidors de Transferència d'Arxius (FTP / SFTP) · Temari Complet"
course_root: ".."
badge: "2n DAW · Grau Superior · UT10 Completa"
prev_url: "../ut11/ut1103.html"
prev_label: "⬅️ 1.3 1 Servicios de Red"
next_url: "../ut10/ut1001.html"
next_label: "2.1 2 Introducció - Creació servidor FTP amb SF ➡️"
---

# 📘 UD2 — Administració de Servidors de Transferència d'Arxius (FTP / SFTP) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 2 Introducció - Creació servidor FTP amb SF**](./ut1001.md)
- [**2.2 1 Introducció - Creació servidor FTP amb VS**](./ut1002.md)

---

# 2.1 2 Introducció - Creació servidor FTP amb SF

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 09/10/23 al 21/10/23

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 25/09/23 al 08/10/23

---

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 2.2 Administració de

servidors d’arxius Instal·lació d’un servidor d’arxius amb SFTP Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Instal·lació de l’sFTP sobre SO Ubuntu Server LTS 22.04 LTS...........................................................4

2.1. Canvi a usuari root.........................................................................................................................4 2.2. Actualització de l’SO.....................................................................................................................4 2.3. Instal·lació del servei SSH............................................................................................................4 2.4. Creació de un usuari......................................................................................................................5 2.5. Creació de un directori per al servei SFTP....................................................................................5 2.6. Canvi del propietari de l'arxiu root................................................................................................5 2.7. Canvi dels permisos del directori..................................................................................................5 2.8. Assignació del directori al nou usuari...........................................................................................5 2.9. Configuració del arxiu sshd_config...............................................................................................6 2.10. Primera connexió a l’SFTP..........................................................................................................7 2.11. Segona connexió a l’SFTP...........................................................................................................7

- Connexió al servei SFTP amb filezilla..................................................................................................8

3.1. Connexió........................................................................................................................................8 3.2. Manipulació d'arxius i directoris...................................................................................................9 2 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

Encara que el servei VSFTPD és bastant segur, no és més que una evolució securitzada de l'intrínsecament insegur FTP. Per aquest motiu té bastants detractors que no el recomanen com a servei FTP i recomanen en el seu lloc l’SFTP (SSH File Transfer Protocol). El protocol de xarxa SSH (Secure SHell) és un protocol destinat principalment a la connexió amb màquines a les quals accedim per línia de comandos. Amb SSH podem connectar-nos amb servidors, usant Internet com a via per a les comunicacions.

Mentre que VSFTPD utilitza certificats digitals, SFTP utilitza claus publiques i privades per a l'encriptació. Igual que amb l'ús de certificats no reconeguts per part de VSFTPD, l'únic dubte del servei SFTP és la procedència de les claus publiques i privades que a priori no donen cap garantia sobre la identitat del servidor que les emet.

SFTP és un protocol que simula el comportament del protocol FTP però que no ha res té a veure amb ell i va ser desenvolupat des de zero. A diferència del servei FTP, SFTP només fa ús del port 22 per al tránsit de les dades de control com de transferència. 3 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INSTAL·LACIÓ DE L’SFTP SOBRE SO UBUNTU SERVER LTS 22.04 LTS.

2.1. Canvi a usuari root. Amb aquest canvi tindrem accés total a la màquina. Això facilitarà la instal·lació del programa i evitara errors. 2.2. Actualització de l’SO. Com és habitual actualitzem tot el sistema abans d'instal·lar el servei SSH. 2.3. Instal·lació del servei SSH.

4 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.4. Creació de un usuari. Ens servirà per a accedir al servidor SFTP • 2.5. Creació de un directori per al servei SFTP. 2.6. Canvi del propietari de l'arxiu root. 2.7. Canvi dels permisos del directori.

2.8. Assignació del directori al nou usuari. 5 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.9. Configuració del arxiu sshd_config. Canviem de directori i llistem el contingut del directori /etc/ssh. Comprovem que existeix l'arxiu sshd_config i l'editem. Afegim al final. Reiniciem el servei.

6 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.10. Primera connexió a l’SFTP. Esbrinem la IP de l’SFTP. Intentem connectar-nos al servei amb l'usuari que hem creat. Veiem que la connexió és possible, però en aquest cas, ha sigut rebutjada per no usar el protocol adequat.

2.11. Segona connexió a l’SFTP. Intentem connectar-nos de nou usant el protocol adequat. Llistem el contingut del directori. Eixim del servei. 7 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- CONNEXIÓ AL SERVEI SFTP AMB FILEZILLA.

3.1. Connexió. Per a connectar-se a l’SFTP, hi ha prou amb posar la IP del servidor precedit de sftp://xxx En aquest cas la màquina que empra el Filezilla és la màquina física amb Windows 10. 8 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 3.2. Manipulació d'arxius i directoris. Una vegada realitzada la connexió veiem que podem amb Filezilla, transferir arxius, canviar-los de nom i també crear i canviar de nom dels directoris.

9 / 9

---

# 2.2 1 Introducció - Creació servidor FTP amb VS

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 2.1 Administració de

servidors d’arxius Introducció i instal·lació d’un servidor FTP amb vsftpd Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Protocol FTP..........................................................................................................................................3
- Protocol FTP securitzat, SFTP..............................................................................................................5
- Servidor FTP, instal·lació......................................................................................................................5

4.1. Servidor FTP, instal·lació bàsica sobre SO Ubuntu Server 22.04.3 LTS......................................6 4.2. Configuració del talla focs, firewall............................................................................................10 4.3. Creació d’usuaris per a poder accedir al servei FTP....................................................................11 4.4. Configuració del servei FTP per a utilitzar una connexió segura................................................13 4.5. Resolució de problemes 1/4.........................................................................................................15 4.6. Resolució de problemes 2/4.........................................................................................................16 4.7. Resolució de problemes 3/4.........................................................................................................16 4.8. Resolució de problemes 4/4.........................................................................................................16 2 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

Un servidor de fitxers és un servidor que permet gestionar a través de xarxa la càrrega, descàrrega, actualització i eliminació de fitxers emmagatzemats en els seus dispositius des d’ordinadors client. En l’àmbit de les aplicacions web, els servidors de fitxers s’utilitzen principalment per desplegar les aplicacions sobre el servidor on s’executaran.

El desplegament d’una aplicació web sobre els servidors de producció comporta habitualment la càrrega de grans quantitats de fitxers sobre aquests servidors. Com que el desenvolupament i manteniment d’aquestes aplicacions es fa en les màquines dels programadors, cal algun sistema de transferència d’arxius cada cop que es vol actualitzar la versió de producció d’una aplicació.

Un dels protocols més usats per a la transferència de fitxers en el desplegament d’aplicacions web és el protocol FTP (file transfer protocol), amb les seves variants FTPS i SFTP per adaptar-se a les necessitats actuals de seguretat. Alguns exemples de servidors de transferència de fitxers són Vsftpd (Very Secure File Transfer Protocol Daemon), per a sistemes operatius Linux i Microsoft Internet Information Server (IIS), per a Windows.

- PROTOCOL FTP.

El protocol FTP es basa en l’arquitectura client/servidor i fa ús del protocol de control de transport, TCP (Transport Control Protocol) per realitzar el canal de transmissió entre el client i el servidor, amb la garantia que la informació que s’envia o es llegeix arribarà al seu destí.

3 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Es fan servir dos canals de comunicació dins del protocol FTP, el canal de control (port 21) i el canal de dades (port 20): • El canal de control envia totes les ordres de comunicació, com poden ser iniciar la sessió de treball i ordres d’execució com llegir, escriure, llistar, esborrar, etc.

• El canal de dades envia el contingut d’aquells fitxers a treballar, que pot ser tant per llegir el contingut del fitxer com per fer l’escriptura del fitxer. Tant el client com el servidor gestionen dos processos: • DTP (procés de transferència de dades): és l’encarregat d’establir la connexió i administrar el canal de dades. Tant el client com el servidor tenen el seu propi PTD.

• PI (intèrpret del protocol): interpreta el protocol i permet que el PTD pugui ser controlat mitjançant ordres rebudes pel canal de control. 4 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 3. PROTOCOL FTP SECURITZAT, SFTP

Per defecte, FTP no fa cap encriptació de dades, per això, després de la instal·lació, utilitzarem TTL/SSL per a garantir-ne la seguretat. A l’hora d'instal·lar el servidor (sobre una màquina virtual) s’habilitarà el servei SSH per a garantir una connexió segura amb el servidor.

- SERVIDOR FTP, INSTAL·LACIÓ.

Farem servir el servidor FTP amb Vsftpd ja que és un dels servidors FTP més potents i complets disponibles per a la majoria de distribucions de Linux. Algunes dels avantatges d’utilitzar aquest servidor són: ✔ Seguretat. És molt conegut per atorgar alts estàndards de qualitat respecte a la seguretat. L'eina inclou opcions avançades per a configurar la seguretat, així com suporte per a SSL i TLS. També ens proporciona un sistema d'autenticació d'usuaris anomenat PAM (Pluggable Authentication Modules).

✔ Facilitat de configuració. ✔ Velocitat de transferència. 5 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ✔ Escalabilitat. Aquest sistema és altament escalable, la qual cosa vol dir que podrem continuar manejant grans quantitats de trànsit, així com usuaris de manera simultània. ✔ Flexibilitat. Pot personalitzar-se per a adaptar-se a diferents necessitats (configurar límits en les amplades de banda, quotes d'espai per a usuaris i grups, i per a establir permisos per a contingut concret).

✔ Estabilitat.

#### 4.1. Servidor FTP, instal·lació bàsica sobre SO Ubuntu Server 22.04.3 LTS

➔Obtinguem les actualitzacions dels nostres paquets abans de començar la instal·lació del Vsftpd. ➔Apliquem les actualitzacions. ➔Instal·lar el daemon de Vsftpd. 6 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Realitzar una còpia de seguretat de l'arxiu de configuració original: Un cop instal·lat l’Vsftpd cal configurar-lo. Abans de res realitzarem una copia de l’arxiu de configuració. ➔Obrir amb Nano o qualsevol editor de text l’arxiu vsftpd.conf Com dit abans tot el funcionament del Vsftpd està condicionat a l’arxiu de configuració.

Així doncs l’editem.

➔Per a fer proves permetem l’accés anònim (i el permís d’escriptura per a usuaris autenticats). Desem i tanquem l’arxiu. ➔Reiniciem el servei vsftpd. ➔Comprovem l’estat del servei. 7 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Canviem al directori /srv/ftp. Per a fer proves creem 2 arxius de text al directori /srv/ftp (directori per defecte de les connexions anònimes). Verifiquen que existeixen els arxius. ➔Utilitzen el programa Filezilla i verifiquem que en podem connectar mitjançant connexió anònima i podem descarregar els arxius.

Detalls dels permisos dels usuaris anònims. -rw-r--r--: Significa que el propietari té permisos de lectura i escriptura, però el grup i altres usuaris només tenen permís de lectura. 8 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula per a desencriptar els permisos: Nota: Encara que semble que l’usuari anònim té drets d’escriptura, no els té. Com és evident, els clients anònims no tenen ningun privilegi. Només poden descarregar arxius, no poden pujar arxius, ni realitzar cap mena d’operació sobre els directoris.

A més, estan limitats (enreixats) al directori /srv/ftp. Es poden canviar els privilegis dels clients anònims però no és una pràctica recomanable. Ara que sabem que el servei svftpd funciona correctament, editem l’arxiu vsftpd.conf, canviem l’accés d’usuaris anònims a NO i reiniciem el servei.

Si intentem connectar-nos de nou, ja no podrem. 9 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.2. Configuració del talla focs, firewall. Abans de res, si els usuaris han de connectar-se des de la xarxa, haurem de configurar el firewall del servidor per a que deixe passar el transit d’FTP i també que la connexió siga segura.

➔Permetre el trànsit FTP des del firewall. Primerament comprovarem si el firewall del servidor està actiu. Si no ho és l’activem: Finalment permetem el trànsit FTP: Aquesta sèrie de comandos obrirà els ports: ✔ OpenSSH per a accedir al servidor a través de SSH. ✔ Els ports 20 i 21 per al trànsit FTP.

✔ Els ports 40000:50000 es reserven per al rang de ports passius que eventualment s'establirà en l'arxiu de configuració. ✔ El port 990 serà necessari quan s'active el TLS. ➔Comproven de nou el firewall: 10 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.3. Creació d’usuaris per a poder accedir al servei FTP. Per a poder crear usuaris són necessàries tres tasques diferenciades: ➔Crear i emmagatzemar els seus noms i contrasenyes. ➔Manipular l'autenticació.

➔Configurar vsftpd per a poder utilitzar-los. ➔Comprovació de les carpetes d’usuari. En aquest cas el SO crea la carpeta a l’usuari root per defecte, si volem afegir més directoris d’usuaris caldrà crear els usuaris. ➔Creació dels usuaris. Usarem l’scrip adduser que crearà la carpeta d’usuari i la contrasenya tot plegat.

Usuari raquel: Usuari rafael: 11 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔Canviem els permisos perquè els usuaris puguen accedir als seus directoris. ➔Creació de la llista dels usuaris. ➔Verifiquen la llista d’usuaris editant l’arxiu vsftpd.userlist. Si volem, podem afegir l’usuari root «manualment».

➔Creació de la llista d’usuaris enreixats al seu directori. D’aquesta manera sols podran operar el seu directori. ➔Editem l’arxiu vsftpd.conf i afegim al final. Aquesta configuració donarà permisos als usuaris inclosos a la llista. 12 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.4. Configuració del servei FTP per a utilitzar una connexió segura. ➔Creació del certificat SSL: Hem de crear el certificat SSL i usar-lo per a protegir el servidor. Nota: -days fa que el certificat siga vàlid per un any i hem inclòs una clau privada RSA de 2048 bits en el mateix comando.

➔Obrir l’arxiu de configuració amb nano i comentar les línies de codi següents. Canvis a realitzar: D’aquesta manera, els usuaris locals només se'ls permetrà l'accés al directori /home/usuari. També caldrà (ho farem més avant) canviar els permisos del directori perquè puguen escriure-hi.

13 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Canvis a realitzar: Comentaris sobre els canvis: Habilita SSL per a permetre la connexió tan sols a clientes amb SSL habilitat i utilitzar el certificat que hem creat. Per a prohibir qualsevol connexió anònima a través d’SSK

Configura el servidor per a que utilitze TLS: Per a evitar que molts clients FTP no es puguen connectar no reutilitzarem SSL i sols utilitzarem claus xifrades amb un mínim de 128 bits. 14 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.5. Resolució de problemes 1/4. ➔Reiniciem el servidor FTP per a carregar els canvis de configuració. ➔De hi haure problemes escriure sudo /usr/sbin/vsftpd /etc/vsftp.conf Aquest comando ens dirà què hi ha malament a l’arxiu de configuració.

També és pot usar l’utilitat strace que ens donarà el debug complet del vsftpd. ➔A aquest cas generem un certificat nou. ➔Reiniciem i comprovem el servei amb service vsftpd restart / status. 15 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.6. Resolució de problemes 2/4. ➔Problema: Cannot load RSA private key. Amb aquest comando generem el certificat al mateix arxiu. Amb aquest altre generem el certificat a l’arxiu vsftpd.pem y la clau privada al vsftpd.key Modifiquem l’arxiu de configuració

4.7. Resolució de problemes 3/4. No es pot connectar al servidor o no es pot descarregar o pujar arxius. Si esteu usant una màquina virtual per al servidor i una màquina física per al client (Filezilla) pot ser que el problema siga l’antivirus o el talla focs d’aquesta.

Per a fer proves, desactiveu-los i provar de nou. 16 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 5. AFINAR LA CONFIGURACIÓ PER A MILLORAR LA PRIVACITAT I LA

SEGURETAT Com podem veure, l'usuari FTP té accés a tots els directoris del SO (encara que no hi puga fer res). També pot veure els altres usuaris encara que no pot accedir als seus directoris. La causa és que té accés al directori /home . La solució consistirà en «allunyar-lo» d’aquest directori.

➔Creem l’usuari sandra ➔Dins del directori de sandra creem el directori /ftp ➔Canviem el propietari del directori /home/sandra/ftp. Verifiquem els permisos d’usuari. ➔Creem el directori de treball del usuari «sandra» /home/sandra/ftp/misitio. ➔Assignem el propietari del directori

17 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web ➔A l’arxiu de configuració vsftpd.conf canvien la línia de codi on es defineix el directori root: ➔A l’arxiu de configuració vsftpd.conf canvien la línia de codi on es defineixen els privilegis dels usuaris locals

➔Reiniciem el servei per a carregar la nova configuració. ➔Ens connectem amb filezilla i comprovem que l’usuari «sandra» només pot veure el seu directori. 18 / 19

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web L’usuari pot crear nous directoris, copiar /apegar / canviar el nom / transferir / etc. sense cap problema. 19 / 19

---
