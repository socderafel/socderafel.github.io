# UT 03: Instal·lació i Configuració de Sistemes Operatius i Virtualització

<div class="interactive-progress-tracker" data-unit="ut03" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita els desenvolupadors de programari en la preparació, configuració i aïllament d'entorns d'execució mitjançant la instal·lació de **sistemes operatius monolloc i entorns de virtualització**:
- **Arquitectura Interna del Sistema Operatiu:** Funcions de gestió de recursos, separació d'anells de seguretat de la CPU (*Ring 0: Kernel Space* vs *Ring 3: User Space*), crides al sistema (*System Calls*), tipologies de nuclis (monolític, microkernel, híbrid) i planificació de processos.
- **Estructura de Particions i Arrencada:** Esquemes MBR (*Master Boot Record*) vs GPT (*GUID Partition Table*), la partició especial ESP (*EFI System Partition*), gestors d'arrencada (*Bootloaders: GRUB2 i Windows Boot Manager*) i configuració de sistemes d'arrencada dual (*Dual-Boot* Windows/Linux).
- **Procés d'Instal·lació de Sistemes Operatius:** Requisits de maquinari, creació de suports d'instal·lació USB arrencables (Rufus, Ventoy), particionament durant la instal·lació de Windows 10/11 i distribucions GNU/Linux (Ubuntu/Debian Desktop), i postconfiguració inicial.
- **Tecnologies de Virtualització:** Fonaments de virtualització per maquinari (Intel VT-x / AMD-V), diferenciació entre **hipervisors de tipus 1 (*Bare-Metal*: Proxmox VE, VMware ESXi, Hyper-V core)** i **hipervisors de tipus 2 (*Hosted*: Oracle VirtualBox, VMware Workstation)**, configuració de màquines virtuals (CPU virtual vCPU, RAM dinàmica, discs virtuals VDI/VMDK) i modes de xarxa virtual (NAT, Bridge, Host-Only).
- **Desplegament i Clonació d'Imatges de Sistema:** Tècniques de clonació de disc a disc i de disc a imatge mitjançant eines lliures (Clonezilla), generalització de sistemes Windows amb l'eina `Sysprep` per a evitar duplicats de SID, i desplegament desassistit.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA2 (DAW / DAM):** Instal·la sistemes operatius planificant el procés i interpretant la documentació tècnica.
  - **CA 2.a:** S'han identificat les funcions del sistema operatiu i la seua arquitectura bàsica.
  - **CA 2.b:** S'han planificat les particions i el sistema d'arrencada per a la coexistència de sistemes operatius.
  - **CA 2.c:** S'han instal·lat sistemes operatius propietaris i lliures en equips reals i màquines virtuals.
  - **CA 2.d:** S'han configurat hipervisors i creat entorns aïllats de virtualització.
  - **CA 2.e:** S'han clonat discs i desplegat imatges de sistema per a automatitzar la instal·lació.

---

## Estructura de la Unitat de Treball

1. [UT 03.01: Arquitectura del sistema operatiu: nucli, espais d'usuari i crides al sistema](./ut0301.md)
2. [UT 03.02: Particionament MBR vs GPT, gestors d'arrencada (GRUB) i arrencada dual](./ut0302.md)
3. [UT 03.03: Instal·lació pas a pas de sistemes operatius: Windows i GNU/Linux](./ut0303.md)
4. [UT 03.04: Virtualització: hipervisors tipus 1 vs tipus 2 i xarxes virtuals](./ut0304.md)
5. [UT 03.05: Clonació d'imatges de disc (Clonezilla) i generalització amb Sysprep](./ut0305.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut03-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Kernel Space vs User Space</h4>
  </div>
  <p class="challenge-question">Per quina raó de seguretat i estabilitat els sistemes operatius moderns separen la memòria en Espai de Nucli (Kernel Space / Ring 0) i Espai d'Usuari (User Space / Ring 3)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els programes en User Space s'executen sense gastar bateria.</button>
    <button class="btn-check" data-correct="true">B) Perquè impedeix que una fallada, error o acció maliciosa d'una aplicació d'usuari puga accedir directament al maquinari o a les estructures internes del nucli, evitant que una fallada d'un programa menge o faga caure tot el sistema operatiu.</button>
    <button class="btn-check" data-correct="false">C) Perquè Ring 0 només admet caràcters en majúscules.</button>
    <button class="btn-check" data-correct="false">D) Perquè així s'aconsegueix que els discs durs tinguen dues cares.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut03-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Limitacions del Particionament MBR</h4>
  </div>
  <p class="challenge-question">Quines són les dues grans limitacions tècniques que van motivar la substitució de la taula MBR per GPT?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) MBR no admet sistemes operatius en llengua anglesa ni unitats USB.</button>
    <button class="btn-check" data-correct="true">B) MBR només suporta un màxim de 4 particions primàries i no pot gestionar discos amb capacitat superior a 2.2 TB (a causa del seu camp de sectors de 32 bits).</button>
    <button class="btn-check" data-correct="false">C) MBR obliga a tindre connexió a internet per a encendre l'ordinador.</button>
    <button class="btn-check" data-correct="false">D) MBR destrueix automàticament els fitxers PDF.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut03-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Hipervisors Tipus 1 vs Tipus 2</h4>
  </div>
  <p class="challenge-question">Quina diferència arquitectònica defineix un hipervisor de Tipus 1 (Bare-Metal) enfront d'un de Tipus 2 (Hosted)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Els de Tipus 1 només funcionen en màquines portàtils.</button>
    <button class="btn-check" data-correct="true">B) L'hipervisor de Tipus 1 s'executa directament sobre el maquinari físic de la màquina sense cap sistema operatiu intermediari subjacent (màxim rendiment empresarial); mentre que el de Tipus 2 s'executa com una aplicació ordinària damunt d'un sistema operatiu amfitrió (host OS).</button>
    <button class="btn-check" data-correct="false">C) Els de Tipus 2 requereixen targetes gràfiques de tres ranures.</button>
    <button class="btn-check" data-correct="false">D) Són idèntics; només canvia el preu de compra.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut03-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>La Necessitat de Sysprep abans de Clonar</h4>
  </div>
  <p class="challenge-question">Per què és obligatori executar l'eina `Sysprep` en un equip Windows abans de capturar la seua imatge per a clonar-la massivament en un domini de xarxa?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè Sysprep neteja el pols dels ventiladors.</button>
    <button class="btn-check" data-correct="true">B) Perquè generalitza la instal·lació eliminant la informació específica de l'equip com el SID (Security Identifier) únic de la màquina, el nom de xarxa i els controladors específics, evitant conflictes d'identitat greus quan múltiples màquines clòniques es connecten al mateix domini.</button>
    <button class="btn-check" data-correct="false">C) Perquè converteix el disc NTFS en FAT32.</button>
    <button class="btn-check" data-correct="false">D) Perquè augmenta la velocitat del processador un 50%.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Desplegament d'Entorn Dual i Màquines Virtuals</h4>
  </div>
  <p>Planifica i documenta el desplegament d'una estació de desenvolupament completa: taula de particions GPT amb partició EFI, instal·lació neta de Windows 11 i Ubuntu Desktop en arrencada dual amb GRUB2, i configuració d'una màquina virtual en VirtualBox amb xarxa en mode Pont per a proves de serveis web.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
