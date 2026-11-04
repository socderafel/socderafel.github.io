# UT 06: Sistemes Operatius en Xarxa: Dominis, Usuaris, Grups i Recursos Compartits

<div class="interactive-progress-tracker" data-unit="ut06" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita els futurs tècnics en l'administració centralitzada de xarxes corporatives mitjançant **Sistemes Operatius de Xarxa (NOS - Network Operating Systems)**:
- **Models d'Arquitectura de Xarxa:** Contrast fonamental entre xarxes d'igual a igual (**Grups de Treball / Peer-to-Peer**, on cada màquina gestiona la seua pròpia base de dades local SAM d'usuaris sense cap govern central) i xarxes amb **Servidors Dedicats (Client/Servidor)** amb gestió centralitzada de credencials i seguretat.
- **Serveis de Directori i Dominis:** Fonaments del servei de directori **Active Directory Domain Services (AD DS)** de Microsoft Windows Server basat en LDAP, Kerberos i DNS, el paper del Controlador de Domini (**DC - Domain Controller**), jerarquies d'arbres i boscos, i la seua rèplica de codi obert en entorns Linux mitjançant **Samba 4 AD DC** i **OpenLDAP**.
- **Gestió Centralitzada d'Identitats i Accessos:** Creació i cicle de vida de comptes d'usuari de domini, **Unitats Organitzatives (OU)** com a contenidors lògics de gestió, grups de seguretat (globals, universals i de domini local), polítiques de contrasenyes corporatives i perfils d'usuari mòbils (*Roaming Profiles*) amb redirecció de carpetes.
- **Publicació de Recursos Compartits:** Servidors de fitxers basats en el protocol **SMB/CIFS** (Server Message Block) en Windows i Samba en Linux, i **NFS** (*Network File System*) en entorns Unix, assignació automàtica de lletres d'unitat de xarxa per script/GPO, i servidors d'impressió en xarxa centralitzats.
- **Seguretat Combinada i Directrius de Grup (GPO):** L'avaluació estricta entre **Permisos de Xarxa (*Share Permissions*)** i **Permisos Locals NTFS/POSIX ACLs** (principi del permís més restrictiu), el poder de les **Directrius de Grup (GPO - Group Policy Objects)** per a desplegar configuracions de programari, fons de pantalla, bloqueig de ports USB o tallafocs a milers d'ordinadors d'un sol cop, i protocols d'administració remota segura (RDP amb NLA, SSH i PowerShell Remoting).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA6 (DAW / DAM):** Opera sistemes en xarxa gestionant els seus recursos i identificant les restriccions de seguretat existents.
  - **CA 6.a:** S'han diferenciat els models de xarxa basats en grup de treball i en domini.
  - **CA 6.b:** S'han identificat les característiques i components dels serveis de directori.
  - **CA 6.c:** S'han creat i administrat comptes d'usuari, grups i unitats organitzatives.
  - **CA 6.d:** S'han compartit recursos en xarxa establint permisos d'accés adequats.
  - **CA 6.e:** S'han definit i aplicat directrius de seguretat mitjançant polítiques de grup.

---

## Estructura de la Unitat de Treball

1. [UT 06.01: Arquitectures de xarxa: Grups de Treball (Peer-to-Peer) vs Dominis Client/Servidor](./ut0601.md)
2. [UT 06.02: Serveis de directori: Active Directory Domain Services (AD DS) i Samba4](./ut0602.md)
3. [UT 06.03: Gestió centralitzada d'usuaris, grups, unitats organitzatives i perfils mòbils](./ut0603.md)
4. [UT 06.04: Recursos compartits: protocols SMB/CIFS, NFS i servidors d'impressió](./ut0604.md)
5. [UT 06.05: Seguretat en xarxa: permisos Share vs NTFS, directrius GPO i administració remota](./ut0605.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut06-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Grup de Treball vs Domini</h4>
  </div>
  <p class="challenge-question">Quina fallada crítica d'escalabilitat té una xarxa en model de "Grup de Treball" quan l'empresa supera els 15 o 20 ordinadors?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Els ordinadors s'apaguen automàticament.</button>
    <button class="btn-check" data-correct="true">B) Que no existeix una base de dades centralitzada: cada ordinador manté la seua pròpia base de dades local d'usuaris (SAM), obligant a crear i mantindre manualment el compte i la contrasenya de cada empleat en cadascun dels 20 ordinadors per separat, generant un caos inassumible d'administració.</button>
    <button class="btn-check" data-correct="false">C) Que el cable de xarxa no admet més de 5 usuaris.</button>
    <button class="btn-check" data-correct="false">D) Que Windows prohibeix obrir fitxers PDF.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut06-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>El Rol de les Unitats Organitzatives (OU)</h4>
  </div>
  <p class="challenge-question">Quina és la utilitat d'agrupar equips i usuaris en Unitats Organitzatives (OU) dins d'un domini d'Active Directory?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Fer que els ordinadors estiguen a la mateixa taula de l'oficina.</button>
    <button class="btn-check" data-correct="true">B) Permet reflectir l'estructura departamental de l'empresa (ex: OU_Desenvolupament, OU_Vendes) per a vincular directrius de grup (GPO) específiques i delegar permisos administratius a usuaris concrets sobre eixe departament.</button>
    <button class="btn-check" data-correct="false">C) Reduir el consum d'energia dels monitors.</button>
    <button class="btn-check" data-correct="false">D) Substituir el router de la companyia.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut06-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Permisos Efectius: Share vs NTFS</h4>
  </div>
  <p class="challenge-question">Si una carpeta compartida en xarxa té permís de Share 'Control Total' per al grup Tothom, però a la pestanya de seguretat local NTFS l'usuari només té permís de 'Lectura', quin permís efectiu té quan accedeix a través de la xarxa?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Té Control Total perquè Share mana sobre NTFS.</button>
    <button class="btn-check" data-correct="true">B) Té exclusivament permís de Lectura, perquè quan s'accedeix per xarxa s'aplica el principi del permís MÉS RESTRICTIU entre els permisos de recurs compartit (Share) i els permisos del sistema de fitxers (NTFS).</button>
    <button class="btn-check" data-correct="false">C) Se li bloqueja l'accés completament.</button>
    <button class="btn-check" data-correct="false">D) Se li demana la contrasenya del router.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut06-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>El Poder de les Directrius de Grup (GPO)</h4>
  </div>
  <p class="challenge-question">Com permet una GPO bloquejar la instal·lació de programari o impedir l'ús de memòries USB a 500 ordinadors d'una empresa?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Enviant un tècnic a posar cola als ports USB.</button>
    <button class="btn-check" data-correct="true">B) L'administrador defineix la política una única vegada al Controlador de Domini i la vincula a la Unitat Organitzativa; cada ordinador client descarrega i aplica automàticament les claus de registre i restriccions de seguretat en iniciar la sessió.</button>
    <button class="btn-check" data-correct="false">C) Desinstal·lant el sistema operatiu de tots els equips.</button>
    <button class="btn-check" data-correct="false">D) Trucant per telèfon a cada treballador.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Desplegament de Domini i Servidor de Fitxers Segur</h4>
  </div>
  <p>Configura un entorn de domini (Active Directory en Windows Server o Samba4 AD DC en Linux): crea una estructura d'Unitats Organitzatives, comptes d'usuari i grups de departament. Publica una carpeta compartida en xarxa amb quotes de disc i permisos combinats Share/NTFS que permeta lectura a tots els treballadors però escriptura només als membres del grup d'administració.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
