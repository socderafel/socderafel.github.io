# UT 04: Gestió de l'Emmagatzematge, Sistemes de Fitxers i Seguretat de Dades

<div class="interactive-progress-tracker" data-unit="ut04" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa aprofundeix en l'organització lògica, administració avançada i blindatge de seguretat de les dades persistents en sistemes operatius moderns:
- **Estructura Interna dels Sistemes de Fitxers:** Concepte de clúster o bloc, assignació d'espai, metadades, taules d'inodes en sistemes UNIX/Linux, taula MFT (*Master File Table*) en NTFS, i el mecanisme transaccional de **registre diari (*Journaling*)** per a evitar corrupcions després d'un tall elèctric sobtat.
- **Topologia de Directoris:** L'Estàndard de Jerarquia del Sistema de Fitxers (**FHS - Filesystem Hierarchy Standard**) en entorns GNU/Linux (`/bin`, `/etc`, `/var`, `/home`, `/dev`, `/proc`), en contrast amb l'organització per unitats de disc independents (`C:\`, `D:\`) i el registre de configuració de Windows.
- **Volums Lògics Dinàmics i Tolerància a Fallades:** Desacoblament dels discos físics mitjançant **LVM (*Logical Volume Manager*)** en Linux (Volums Físics PV, Grups de Volums VG i Volums Lògics LV redimensionables en calent), Espais d'Emmagatzematge en Windows i configuració de matrius de discos redundants **RAID (RAID 0 per rendiment, RAID 1 per mirall, RAID 5 amb paritat distribuïda i RAID 10)**.
- **Polítiques de Seguretat i Xifratge:** Control d'ús d'espai mitjançant quotes de disc per usuari i grup (quotes dures *hard* i suaus *soft*), compressió transparent de fitxers i xifratge integral de volums amb **BitLocker** (recolzat en xip TPM) i **LUKS / dm-crypt** en Linux.
- **Estratègia Professional de Còpies de Seguretat (Backups):** Polítiques de còpia completa, diferencial i incremental, la regla d'or **3-2-1** (3 còpies, 2 suports diferents, 1 fora de la seu física), utilitats d'automatització (`rsync`, `tar`, `cron`) i plans de continuïtat de negoci i recuperació davant desastres (DRP).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA3 (DAW / DAM):** Gestiona la informació del sistema operatiu identificant l'estructura de l'emmagatzematge i aplicant tècniques d'integritat i seguretat.
  - **CA 3.a:** S'han identificat les característiques i tipologies dels sistemes de fitxers moderns.
  - **CA 3.b:** S'ha analitzat la jerarquia de directoris i la ubicació dels fitxers de configuració del sistema.
  - **CA 3.c:** S'han creat i administrat volums lògics i sistemes RAID per a garantir la disponibilitat de les dades.
  - **CA 3.d:** S'han establert quotes d'espai i polítiques de compressió i xifratge de dades.
  - **CA 3.e:** S'han planificat i executat còpies de seguretat aplicant diferents estratègies i verificant la seua restauració.

---

## Estructura de la Unitat de Treball

1. [UT 04.01: Sistemes de fitxers moderns: blocs, inodes, metadades i Journaling](./ut0401.md)
2. [UT 04.02: Jerarquia de directoris: FHS en Linux vs estructura de volums en Windows](./ut0402.md)
3. [UT 04.03: Volums lògics (LVM) i sistemes RAID per a tolerància a fallades](./ut0403.md)
4. [UT 04.04: Seguretat en emmagatzematge: quotes d'usuari i xifratge (BitLocker i LUKS)](./ut0404.md)
5. [UT 04.05: Còpies de seguretat (backups), regla 3-2-1 i eines d'automatització (rsync)](./ut0405.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut04-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>El Mecanisme de Journaling</h4>
  </div>
  <p class="challenge-question">Com protegeix el mecanisme de registre diari (*Journaling*) en sistemes com ext4 o NTFS davant un tall sobtat del subministrament elèctric?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Envia un correu electrònic a la companyia elèctrica.</button>
    <button class="btn-check" data-correct="true">B) Registra prèviament les intencions de canvi en una zona circular de log (journal) abans d'escriure als blocs definitius; en reiniciar després del tall, el sistema revisa el registre i repara la consistència en segons sense haver d'escanejar tot el disc sencer amb fsck/chkdsk.</button>
    <button class="btn-check" data-correct="false">C) Manté la memòria RAM encesa amb bateries solars.</button>
    <button class="btn-check" data-correct="false">D) Duplica l'espai d'emmagatzematge del disc.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut04-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Flexibilitat del Gestor de Volums Lògics (LVM)</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge ofereix LVM respecte al particionament estàndard quan s'esgota l'espai del volum de dades en un servidor en producció?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Permet ignorar la mida dels fitxers.</button>
    <button class="btn-check" data-correct="true">B) Permet afegir un nou disc dur físic al grup de volums (Volume Group) i ampliar la mida del volum lògic (Logical Volume) i del sistema de fitxers en calent de forma immediata sense aturar el servidor ni perdre dades.</button>
    <button class="btn-check" data-correct="false">C) Converteix el disc en un arxiu zip comprimit.</button>
    <button class="btn-check" data-correct="false">D) Elimina automàticament els fitxers més vells de 30 dies.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut04-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>RAID 5: Rendiment i Paritat</h4>
  </div>
  <p class="challenge-question">Quants discs físics es poden avariar simultàniament en una matriu RAID 5 de 4 discs sense perdre absolutament cap dada?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Cap disc, qualsevol fallada destrueix tota la matriu.</button>
    <button class="btn-check" data-correct="true">B) Exactament 1 disc, ja que la informació de paritat distribuïda permet reconstruir les dades del disc caigut mitjançant operacions lògiques XOR entre els discs restants.</button>
    <button class="btn-check" data-correct="false">C) Dos discs alhora.</button>
    <button class="btn-check" data-correct="false">D) Tres discs.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut04-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>La Regla d'Or del Backup 3-2-1</h4>
  </div>
  <p class="challenge-question">En què consisteix de manera exacta l'estratègia professional de còpies de seguretat coneguda com la regla 3-2-1?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Fer còpies cada 3 dies a les 2 del matí durant 1 hora.</button>
    <button class="btn-check" data-correct="true">B) Mantindre un mínim de 3 còpies de les dades crítiques (l'original i 2 còpies), emmagatzemades en almenys 2 tipus de suports físics diferents (ex: disc local i NAS/cinta), i com a mínim 1 de les còpies ubicada fora de la seu física (offsite / núvol) per a protegir davant incendis, robatoris o catàstrofes.</button>
    <button class="btn-check" data-correct="false">C) Tenir 3 servidors de 2 TB amb 1 sol disc dur.</button>
    <button class="btn-check" data-correct="false">D) Fer el backup en 3 passos manuals per cada usuari.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Arquitectura d'Emmagatzematge Resilient amb LVM i rsync</h4>
  </div>
  <p>Configura en una màquina Linux un sistema d'emmagatzematge basat en LVM sobre dos discs virtuals: crea un Volume Group i dos Logical Volumes (un per a base de dades i un per a documents). Implementa una tasca programada amb cron que execute un script amb `rsync` per a realitzar una còpia diferencial diària incremental cap a un servidor extern.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
