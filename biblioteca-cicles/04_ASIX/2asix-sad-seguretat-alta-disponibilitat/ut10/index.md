---
layout: default
title: "UT10 — Setmanes Del 22 de Gener al 4 de Febrer — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT10 Completa"
prev_url: "../ut09/ut09actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT9"
next_url: "../ut10/ut1001.html"
next_label: "10.1 Esciptoris_remots(kali) ➡️"
---

# 📘 UT10 — Setmanes Del 22 de Gener al 4 de Febrer (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**10.1 Esciptoris_remots(kali)**](#ut1001) (o [obrir en pàgina individual ➡️](./ut1001.md) )
> - [**✍️ Activitats pràctiques UT10**](#ut10actividades) (o [obrir en pàgina individual ➡️](./ut10actividades.md) )

---

## 10.1 Esciptoris_remots(kali)

Administració de Sistemes Informàtics en Xarxa Seguretat i alta disponibilitat UD8- Alta disponibilitat- Escriptoris Remots UD8. HA – Escriptoris Remots Un escriptori remot és una tecnologia que permet a un usuari treballar en un ordinador a través del seu escriptori gràfic des d'un altre dispositiu terminal situat en un altre lloc. S'empra en el terreny de la informàtica per a nomenar la possibilitat de fer unes certes tasques en una computadora (ordinador) sense estar físicament en contacte amb l'equip. Això és possible gràcies a programes informàtics que permeten treballar amb la computadora a distància.

Es pot accedir a una màquina virtual des de qualsevol lloc de la teva xarxa. Existeixen moltes aplicacions que fan aquest tipus de treball i són conegudes com a remote desktop o escriptori remot. Algunes aplicacions et permeten accedir a la manera gràfica (com TeamViewer o Anydesk) mentre unes altres solo et permeten accedir en manera text (telnet, ssh).

Una de les aplicacions més conegudes en el món de la informàtica és "Putty", que és un client d'accés remot a ordinadors de qualsevol tipus mitjançant l'ús de diferents protocols RDP (Remote Desktop Protocol) com SSH, Telnet o RLogin. Existeixen diverses versions per a plataformes windows i linux. És molt útil per a accedir a altres sistemes que siguin o no compatibles amb el sistema operatiu que estem executant, com per exemple accedir des d'una maquina amb sistema operatiu *windows a una altra màquina amb sistema operatiu Linux de la nostra xarxa local.

Per a aconseguir aquesta funcionalitat és necessari que un extrem, el que serà controlat, tingui un servei d'accés a aquesta funció (server), i l'altre extrem, el que vol controlar, ha d'utilitzar un “visor” o client del servei. Alguns sistemes integren les dues funcions en un sol frontend, com TeamViewer.

Altres aplicacions conegudes són: ● Connexió remota windows a windows : "Escriptori Remot" ● Connexió remota windows a smartphone (iOS, Android, windows Phone) : "Remote Desktop" ● Basat en Navegador, com extensió "Crome Remote desktop". ● Connexió remota de Linux a windows : "vinagre", KRDC, Remmina I moltes altres aplicacions que circulen per la xarxa.

Remote Admin – Radmin, RadminVPN VNC RealVNC TightVNC AnyDesk, TeamViewer, Iperius Remote, Ammyy http://www.ammyy.com/en/ El ports i serveis utilitzats per estes connexions d’escriptoris remots, han sigut i son objectius d’atacs informàtics i deuen ser protegits i vigilats constantment !!

1 de 5

Administració de Sistemes Informàtics en Xarxa Seguretat i alta disponibilitat UD8- Alta disponibilitat- Escriptoris Remots L'element característic en qualsevol implementació d'escriptori remot és el seu protocol de comunicacions, que varia depenent del programa que s'use

● Remote Desktop Protocol (RDP), utilitzat per Terminal Services. ● Virtual Network Computing, (VNC), utilitzat per el producte del mateix nom. ● X11, utilitzat per el sistema de finestres X. ● Adaptive Internet Protocol (AIP), utilitzat per Secure Global Desktop. ● Independent Computing Architecture (ICA), utilitzat per MetaFrame.

Pràctiques Connectar a W10 des de W10 (RDP) Connectar a W10 des de KALI (RDP) Connectar a W10 des de W10 (VNC) Connectar a W10 des de KALI (VNC) Connectar a KALI des de KALI (VNC) Connectar a KALI des de W10 (VNC) Per a realitzar aquestes pràctiques necessitarem 4 màquines virtuals, 2 en Windows (W10 pro i 2 en Linux( KALI ). En cada pràctica necessitarem tenir 2 màquines actives alhora, i totes connectades per “xarxa NAT” (no NAT).

En totes les pràctiques necessitarem fer dos coses • Una. Preparar el servidor o màquina a la que se va a connectar / controlar • Dos. Preparar el client o màquina que va a connectar / controlar a l’altra 2 de 5

Administració de Sistemes Informàtics en Xarxa Seguretat i alta disponibilitat UD8- Alta disponibilitat- Escriptoris Remots CONNECTAR A WINDOWS ● Remote Desktop Protocol (RDP), utilitzat per Terminal Services. Connectar a W10 des de W10 amb Terminal Service Preparar W10 per a que oferisca el servei Preparar RDP “Permetre connexions remotes” Connectar amb W10(server preparat) des de W10 (client ) Des d’una altra màquina amb W10 prof 3 de 5

Administració de Sistemes Informàtics en Xarxa Seguretat i alta disponibilitat UD8- Alta disponibilitat- Escriptoris Remots • Connectar a W10 utilitzant el protocol Virtual Network Computing, (VNC) Preparar W10 per a admetre connexions VNC Instal·lar servidor VNC (des de https://tightvnc.com/) Connexió des del client Client W10, ( una altra màquina amb W10) Instal·lar tightvnc viewer y/o RealVNC Viewer Client KALI ( una màquina amb KALI) Instal·lar Remmina

```bash
# sudo apt update
# sudo apt -y install remmina
```

• Connectar a W10 des de W10 (Client d’Escriptori Remot de Windows) • Connectar a W10 des de W10 (tightvnc viewer) • Connectar a W10 des de Kali (Remmina amb protocol RDP) • Connectar a W10 des de Kali (Remmina amb protocol VNC) En cada una de les connexions, contesta

Poden els dos equips compartir la pantalla al mateix temps? 4 de 5

Administració de Sistemes Informàtics en Xarxa Seguretat i alta disponibilitat UD8- Alta disponibilitat- Escriptoris Remots CONNECTAR A KALI (Preparar kali per a que oferisca el servei) (https://help.clouding.io/hc/es/articles/360010658340-C%C3%B3mo-instalar-y- configurar-VNC-Server-en-Linux ) KALI Costat servidor

```bash
# sudo apt update
# sudo apt install xfce4 xfce4-goodies gnome-icon-theme dbus-x11
# sudo apt install tightvncserver
# sudo adduser vnc
# sudo gpasswd -a vnc sudo
# sudo su - vnc
# touch .Xauthority
# vncserver
```

KALI Costat client

```bash
# sudo apt update
# sudo apt -y install remmina
# sudo apt -y install vinagre
# sudo apt -y install krdc
```

Connectar a Kali, ** tant des d’un altre kali o debian, usant un un Remmina, vinagre o krdc, ** com des de W10, usant un VNC Viewer (RealVNC Viewer) , o un Tight VNC Viewer. Cada vegada que arranquem el kali servidor s’ha d’entrar en l’usuari vnc i arrancar el servei

```bash
# sudo su - vnc
# vncserver
```

En cada una de les connexions, contesta: Poden els dos equips compartir la pantalla al mateix temps? 5 de 5

---

## ✍️ Activitats pràctiques UT10

> **✍️ Activitat Pràctica 10.1 — (SAD) Activitat Escriptoris_Remots**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: Escriptoris remots Els escriptoris remots serveixen per a veure o manejar un equip a distància. Hi ha molts tipus i amb moltes característiques diferents i variades.
>
> L'element característic en qualsevol implementació d'escriptori remot és el seu protocol de comunicacions, que varia depenent del programa que s'use: ➢RDP Remote Desktop Protocol, utilitzat per Terminal Services. (Microsoft) ➢VNC Virtual Network Computing, utilitzat per el producte del mateix nom.
>
> ➢X11, utilitzat per el sistema de finestres X. ➢AIP Adaptive Internet Protocol, utilitzat per Secure Global Desktop. ➢ICA Independent Computing Architecture, utilitzat per MetaFrame. Activitat Connectar a W10 des de W10 (RDP) (fan falta dos màquines en Windows) Connectar a W10 des de KALI (RDP) Connectar a W10 des de W10 (VNC) (fan falta dos màquines en Windows) Connectar a W10 des de KALI (VNC) Connectar a KALI des de KALI (VNC) Connectar a KALI des de W10 (VNC) Realitza un document explicatiu (en format PDF) de com s'instal·la, es configura i s'utilitza cadascun dels casos plantejats.

> **✍️ Activitat Pràctica 10.2 — (SAD) Arrancada i Parada desatesa de MV de VBox**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat: Arrancada i parada desatesa de màquines virtuals en VirtualBox En esta activitat aprendrem a arrancar i parar màquines virtuals des de la línia de comandos, sense utilitzar el GUI de VirtualBox Açò ens permetrà automatitzar l’arranada automàtica de màquines virtuals des de el programador de tasques de Windows, o des de el cron de Linux.
>
> Per a la realització d’esta pràctica utilitzarem Windows 10 Per allò, primer deurem aprendre els comandos que permeten fer-ho Activitat Cerca en Internet informació sobre esta tècnica. Practica primer des de la línia de comandos a arrancar i a parar una màquina virtual Una vegada domines els comandos bàsics, crea una tasca de Windows per a que a l’arrancar el sistema operatiu, s’arranque una màquina virtual.
>
> Ara, programa l’arranc a una hora determinada del matí i la parada a las 20:00 de la vesprada Cerca més comandos de VirtualBox que es puguen executar des de la línia de comandos. Documentar tot el procés en un document. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”
