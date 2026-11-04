# UT 01: Elaboració de Documentació Tècnica i Aplicacions Ofimàtiques d'Ús General

<div class="interactive-progress-tracker" data-unit="ut01" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita els futurs desenvolupadors de programari (DAW / DAM) en la creació, gestió i publicació de **documentació tècnica rigorosa i de qualitat empresarial**, utilitzant eines ofimàtiques avançades i serveis d'intercanvi d'informació a la xarxa:
- **Llicències de Programari i Tipologia:** Comprensió del marc jurídic de la propietat intel·lectual, diferenciació entre programari propietari comercial, programari lliure (GPL, AGPL), llicències permissives de codi obert (MIT, Apache 2.0, BSD) i llicències de continguts (Creative Commons).
- **Processadors de Text per a Manuals Tècnics:** Ús professional d'estils jeràrquics, generació automàtica d'índexs i taules de continguts, gestió de plantilles corporatives, control de canvis col·laboratiu i exportació a estàndards de preservació digital a llarg termini (PDF/A).
- **Fulls de Càlcul per a la Gestió i Pressupostos:** Automatització de càlculs de pressupostos de maquinari i inventari, domini de referències relatives, absolutes (`$A$1`) i mixtes, funcions matemàtiques, estadístiques i de cerca (`VLOOKUP`, `XLOOKUP`), i anàlisi visual mitjançant formats condicionals i gràfics.
- **Cerca Avançada i Verificació Tècnica:** Domini d'operadors de cerca avançats (`site:`, `filetype:`, `intitle:`), cerca de repositoris, manuals oficials RFCs i avaluació crítica de la fiabilitat de les fonts d'informació.
- **Transferència de Fitxers i Treball Col·laboratiu:** Protocols de transferència (FTP clàssic en text pla vs SFTP/FTPS amb xifratge SSH/TLS), plataformes d'emmagatzematge al núvol, control de permisos i disseny d'instruments de recollida de dades (formularis web).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA7 (DAW / DAM):** Elabora documentació tècnica utilitzant aplicacions ofimàtiques de propòsit general i cercant informació a la xarxa.
  - **CA 7.a:** S'han identificat els tipus de llicències de programari i les seues característiques legals.
  - **CA 7.b:** S'han utilitzat processadors de textos per a elaborar manuals, memòries tècniques i informes aplicant estils i plantilles.
  - **CA 7.c:** S'han elaborat fulls de càlcul utilitzant fórmules, funcions, referències i gràfics per a la gestió tècnica i econòmica.
  - **CA 7.d:** S'han utilitzat navegadors i cercadors d'Internet aplicant criteris i filtres avançats de cerca.
  - **CA 7.e:** S'han utilitzat aplicacions de transferència de fitxers i serveis d'emmagatzematge col·laboratiu per a compartir documentació.

---

## Estructura de la Unitat de Treball

1. [UT 01.01: Tipologies de programari ofimàtic, llicències i drets d'autor](./ut0101.md)
2. [UT 01.02: Processament avançat de textos: estils, plantilles i format PDF/A](./ut0102.md)
3. [UT 01.03: Fulls de càlcul tècnics: referències, funcions i gràfics estadístics](./ut0103.md)
4. [UT 01.04: Cerca avançada d'informació tècnica a la xarxa i validació de fonts](./ut0104.md)
5. [UT 01.05: Transferència segura de fitxers (FTP/SFTP) i eines cloud col·laboratives](./ut0105.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut01-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Diferència entre Programari Lliure i Gratuït (Freeware)</h4>
  </div>
  <p class="challenge-question">Per què un programari sota llicència "Freeware" no és considerat "Programari Lliure" segons la Free Software Foundation?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè el Freeware no es pot instal·lar a cap sistema Linux.</button>
    <button class="btn-check" data-correct="true">B) Perquè Freeware només implica gratuïtat econòmica de descàrrega (preu 0), però el codi font roman tancat i privat, privant l'usuari de les 4 llibertats fonamentals (estudiar, modificar, redistribuir i millorar el programa).</button>
    <button class="btn-check" data-correct="false">C) Perquè tot el Freeware conté virus obligatòriament.</button>
    <button class="btn-check" data-correct="false">D) Perquè el Freeware requereix tindre connexió a internet per cable.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut01-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Preservació Digital amb l'Estàndard PDF/A</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge tècnic aporta exportar una documentació tècnica o contracte a format PDF/A en lloc de PDF ordinari?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Redueix el fitxer a menys d'1 KB.</button>
    <button class="btn-check" data-correct="true">B) Garanteix la preservació digital a llarg termini (arxiu), obligant a incrustar tots els tipus de lletra, imatges i perfils de color dins del fitxer, i prohibint continguts dinàmics externs, assegurant que el document es renderitzarà de manera exacta d'ací a 20 anys.</button>
    <button class="btn-check" data-correct="false">C) Permet editar el text directament des de la consola Bash.</button>
    <button class="btn-check" data-correct="false">D) Transforma el document en una presentació de diapositives automàtica.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut01-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Fixació de Cel·les en Fulls de Càlcul</h4>
  </div>
  <p class="challenge-question">Quina fórmula calcula el preu amb IVA d'un producte a la cel·la B2 sabent que el tipus d'IVA (21%) està a la cel·la $F$1, de manera que puga arrossegar-se cap avall per a 500 files?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) =B2 * F1</button>
    <button class="btn-check" data-correct="true">B) =B2 * (1 + $F$1), utilitzant referència absoluta per a la cel·la F1 amb el símbol de dòlar per a bloquejar la columna i la fila.</button>
    <button class="btn-check" data-correct="false">C) =B2 + IVA</button>
    <button class="btn-check" data-correct="false">D) =SUMA(B2:F1)</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut01-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Seguretat en Transferència de Fitxers</h4>
  </div>
  <p class="challenge-question">Per què és inacceptable utilitzar el protocol FTP clàssic (port 21) en entorns de producció i s'ha de substituir per SFTP o FTPS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè FTP només admet fitxers de menys de 2 MB.</button>
    <button class="btn-check" data-correct="true">B) Perquè el protocol FTP transmet tota la informació (incloent les credencials d'usuari, contrasenyes i el contingut dels fitxers) en text pla clar sense cap xifratge, sent vulnerable a intercepció per sniffers de xarxa; mentre que SFTP utilitza un túnel xifrat SSH.</button>
    <button class="btn-check" data-correct="false">C) Perquè FTP només funciona en ordinadors Macintosh.</button>
    <button class="btn-check" data-correct="false">D) Perquè FTP està prohibit per la Unió Europea des de 1999.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Manual Tècnic d'Instal·lació i Pressupost de Maquinari</h4>
  </div>
  <p>Elabora un document tècnic complet utilitzant estils professionals, índex automàtic i portada corporativa. Afig com a annex un full de càlcul amb el pressupost detallat de desplegament de 10 llocs de treball amb fórmules i gràfic comparatiu. Exporta el paquet a format PDF/A i penja'l a la tasca d'Aules.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
