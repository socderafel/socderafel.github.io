# UT 07: Administració de Sistemes Operatius mitjançant Comandes i Scripts (Bash / PowerShell)

<div class="interactive-progress-tracker" data-unit="ut07" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

En l'àmbit professional del desenvolupament d'aplicacions web i multiplataforma (DAW / DAM), la capacitat d'interactuar directament amb el sistema operatiu mitjançant la consola d'ordres (CLI - *Command Line Interface*) i automatitzar tasques administratives complexes mitjançant scripts és una competència nuclear i indispensable (Resultat d'Aprenentatge 4 - RA4). 

Des de la gestió remota de servidors en el núvol (sense interfície gràfica GUI) fins al desplegament d'aplicacions, pipelines d'integració contínua (CI/CD) i manteniment preventiu, l'administració basada en scripts Bash i PowerShell permet optimitzar els recursos, garantir la reproductibilitat de processos i gestionar grans volums de sistemes de forma concurrent i fiable.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 07.01](ut0701.md)** | **Entorns d'Ordres (CLI): Bash i PowerShell** | Intèrprets d'ordres, terminals, variables d'entorn, canonades (*pipes*) i filtres de text bàsics. | +75 XP |
| **[UT 07.02](ut0702.md)** | **Gestió Avançada de Fitxers, Directoris i Permisos per Consola** | Navegació ràpida, enllaços durs i simbòlics, permisos estàndard POSIX i llistes de control d'accés (ACLs). | +75 XP |
| **[UT 07.03](ut0703.md)** | **Control i Monitorització de Processos del Sistema** | Cicle de vida de processos, PID/PPID, senyals de terminació, prioritats (*nice*) i concurrència en segon pla. | +75 XP |
| **[UT 07.04](ut0704.md)** | **Programació d'Scripts en Bash: Sintaxi i Control de Flux** | Fitxers `.sh`, *shebang*, paràmetres posicionals, estructures condicionals i bucles per a automatització. | +75 XP |
| **[UT 07.05](ut0705.md)** | **Automatització de Tasques Planificades i Gestió de Registres (Logs)** | El dimoni Cron, programador de tasques, arquitectura `systemd-journald`, servei `rsyslog` i rotació de logs. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut07-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Mecanisme de Canonades (*Pipes*)</h4>
  </div>
  <p class="challenge-question">Com funciona exactament l'operador de canonada `|` en un entorn Bash de Linux?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Copia el fitxer d'entrada a un disc dur secundari abans d'executar el programa.</button>
    <button class="btn-check" data-correct="true">B) Connecta la sortida estàndard (stdout / descriptor 1) de la comanda de l'esquerra directament amb l'entrada estàndard (stdin / descriptor 0) de la comanda de la dreta en memòria, sense crear fitxers temporals en disc.</button>
    <button class="btn-check" data-correct="false">C) Atura tots els processos del sistema operatiu fins que finalitza el filtre.</button>
    <button class="btn-check" data-correct="false">D) Converteix codi PowerShell a codi Bash automàticament.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut07-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Enllaços Simbòlics vs Enllaços Durs (*Hard Links*)</h4>
  </div>
  <p class="challenge-question">Quina diferència fonamental existeix entre un enllaç dur (*hard link*) i un enllaç simbòlic (*symlink* `ln -s`) en el sistema de fitxers Linux?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Els enllaços tous només poden apuntar a servidors Windows.</button>
    <button class="btn-check" data-correct="true">B) Un enllaç dur apunta directament al mateix node-i (inode) físic de les dades i no pot travessar diferents sistemes de fitxers; un enllaç simbòlic és un fitxer especial que conté una ruta de text al fitxer de destí i pot apuntar a qualsevol partició o directori.</button>
    <button class="btn-check" data-correct="false">C) Si s'esborra el fitxer original, un enllaç dur queda trencat i inservible, mentre que el simbòlic conserva les dades.</button>
    <button class="btn-check" data-correct="false">D) Els enllaços durs ocupen el doble d'espai en memòria RAM.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut07-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>Senyals POSIX de Gestió de Processos</h4>
  </div>
  <p class="challenge-question">Quina és la diferència crucial entre enviar a un procés el senyal `SIGTERM` (15) i el senyal `SIGKILL` (9)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) SIGKILL s'utilitza només en impressores de xarxa.</button>
    <button class="btn-check" data-correct="true">B) SIGTERM demana educadament al procés que finalitzi, permetent-li tancar fitxers, alliberar sockets i buidar buffers; mentre que SIGKILL és interceptat pel nucli (kernel), no pot ser capturat ni ignorat pel programa i l'extermina immediatament sense alliberament net.</button>
    <button class="btn-check" data-correct="false">C) SIGTERM reinicia la màquina sencera de forma immediata.</button>
    <button class="btn-check" data-correct="false">D) SIGKILL només funciona si el procés està en estat zombi.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut07-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Programació Periòdica amb Cron</h4>
  </div>
  <p class="challenge-question">En una línia de `crontab`, què expressa la següent planificació temporal: `30 2 * * 1`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Cada 30 minuts del dia 2 de cada mes de gener.</button>
    <button class="btn-check" data-correct="true">B) Executar la tasca cada dilluns a les 02:30 de la matinada.</button>
    <button class="btn-check" data-correct="false">C) Executar cada 1 hora durant 30 dies seguits.</button>
    <button class="btn-check" data-correct="false">D) Aturar el servidor el dia 30 de febrer a les 02:01.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 07: Automatització de Còpies de Seguretat i Monitorització</h4>
  </div>
  <p>Desenvolupa un script en Bash (`backup_monitor.sh`) que s'executi automàticament mitjançant `cron`. L'script ha de comprovar l'estat dels serveis crítics, generar un arxiu comprimit `.tar.gz` de la carpeta d'aplicació web, registrar l'operació al dimoni `systemd-journald` mitjançant la comanda `logger` i enviar un avís en cas que l'espai en disc supere el 85% d'ocupació.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
