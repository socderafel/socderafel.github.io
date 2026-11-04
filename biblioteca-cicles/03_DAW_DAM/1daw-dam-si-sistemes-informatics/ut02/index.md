# UT 02: Arquitectura del Maquinari i Característiques dels Sistemes Informàtics

<div class="interactive-progress-tracker" data-unit="ut02" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa proporciona una base sòlida d'enginyeria sobre la constitució física dels ordinadors personals i servidors que executen els sistemes operatius i les aplicacions de desenvolupament:
- **Model Funcional de Von Neumann:** Anàlisi de la Unitat Central de Processament (CPU), descomposició en Unitat de Control (UC), Unitat Aritmeticològica (ALU), banc de registres, rellotge de sistema i busos de comunicació (dades, adreces i control).
- **La Placa Base i Connectivitat Interna:** Estructura de la placa mare, evolució dels xipsets tradicionals cap al concentrador de controladors PCH, sòcols de microprocessador (LGA vs PGA), ranures d'expansió d'alta velocitat PCI Express i gestió tèrmica/energètica.
- **Jerarquia d'Emmagatzematge:** Anàlisi comparativa entre memòries volàtils d'alta velocitat (Caché L1/L2/L3, RAM DDR4/DDR5) i emmagatzematge secundari no volàtil: discos magnètics HDD vs unitats d'estat sòlid SSD (SATA III vs M.2 NVMe PCIe) mesurant IOPS, taxes de transferència i vida útil (TBW).
- **Perifèrics i Controladors de Dispositiu:** Classificació de perifèrics d'E/S, interfícies de comunicació modernes (USB-C, Thunderbolt, DisplayPort), el paper fonamental dels controladors (*drivers*) en el sistema operatiu i diagnòstic de conflictes de maquinari.
- **Microprogramari i Seqüència d'Engegada:** El cicle d'arrencada complet: firmware BIOS clàssic vs UEFI modern, test de verificació inicial POST, interfície de configuració CMOS, arrencada segura (*Secure Boot*) i diagnòstic de fallades per codis acústics (*beeps*) i pantalles de codi POST.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA1 (DAW / DAM):** Avalua sistemes informàtics identificant els seus components físics i lògics i les seues característiques funcionals.
  - **CA 1.a:** S'han identificat els blocs funcionals d'un sistema informàtic i la seua interconnexió segons l'arquitectura de Von Neumann.
  - **CA 1.b:** S'han analitzat les característiques tècniques dels microprocessadors, plaques base i memòries.
  - **CA 1.c:** S'han avaluat les prestacions de diferents dispositius d'emmagatzematge secundari.
  - **CA 1.d:** S'han connectat i configurat dispositius perifèrics instal·lant els seus controladors.
  - **CA 1.e:** S'han verificat els paràmetres de configuració del microprogramari UEFI/BIOS i la seqüència d'engegada.

---

## Estructura de la Unitat de Treball

1. [UT 02.01: L'arquitectura de Von Neumann, CPU, memòria principal i busos](./ut0201.md)
2. [UT 02.02: Placa base, xipsets, ranures PCIe i sistemes d'alimentació i refrigeració](./ut0202.md)
3. [UT 02.03: Emmagatzematge massiu: HDD vs SSD (SATA, M.2 NVMe) i mètriques IOPS](./ut0203.md)
4. [UT 02.04: Perifèrics d'entrada/eixida, ports de comunicació i controladors (drivers)](./ut0204.md)
5. [UT 02.05: Microprogramari BIOS/UEFI, seqüència d'engegada POST i diagnòstic](./ut0205.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut02-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Arquitectura de Von Neumann</h4>
  </div>
  <p class="challenge-question">Quina característica defineix l'arquitectura clàssica de Von Neumann en contrast amb l'arquitectura Harvard?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que la CPU no té unitat aritmeticològica.</button>
    <button class="btn-check" data-correct="true">B) Que tant les instruccions del programa com les dades comparteixen el mateix espai de memòria principal i els mateixos busos físics de comunicació.</button>
    <button class="btn-check" data-correct="false">C) Que utilitza només discs durs mecànics.</button>
    <button class="btn-check" data-correct="false">D) Que no admet dispositius USB.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut02-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>SSD SATA vs SSD NVMe M.2</h4>
  </div>
  <p class="challenge-question">Quin és el factor tècnic pel qual un SSD M.2 NVMe ofereix taxes de transferència molt superiors (ex: 7000 MB/s) a un SSD SATA III tradicional (màx 550 MB/s)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els SSD M.2 tenen un motor magnètic que gira a 15000 RPM.</button>
    <button class="btn-check" data-correct="true">B) Perquè SATA III està limitat físicament pel bus sèrie SATA a 6 Gbps, mentre que NVMe es connecta directament a múltiples línies del bus PCI Express (com PCIe 4.0 x4) comunicant-se directament amb la CPU amb latències mínimes.</button>
    <button class="btn-check" data-correct="false">C) Perquè SATA només funciona en ordinadors portàtils.</button>
    <button class="btn-check" data-correct="false">D) Perquè NVMe requereix tindre instal·lat Windows 98.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut02-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Evolució de BIOS a UEFI</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge de seguretat i particionament va introduir el microprogramari UEFI respecte al sistema BIOS clàssic?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que impedeix que el sistema operatiu tinga connexió a internet.</button>
    <button class="btn-check" data-correct="true">B) Suport natiu per a taules de particions GPT superant el límit de 2 TB de MBR, interfície gràfica amb ratolí de 64 bits i arrencada segura (Secure Boot) per a impedir l'execució de bootkits no signats.</button>
    <button class="btn-check" data-correct="false">C) Que elimina la necessitat de tindre memòria RAM.</button>
    <button class="btn-check" data-correct="false">D) Que redueix la calor de la pantalla.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut02-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Mètriques d'Emmagatzematge: IOPS vs Taxa Seqüencial</h4>
  </div>
  <p class="challenge-question">Què mesura la mètrica IOPS i per què és crítica per a un servidor de base de dades?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Mesura el consum de corrent de la font d'alimentació.</button>
    <button class="btn-check" data-correct="true">B) Mesura el nombre d'Operacions d'Entrada/Eixida per Segon (Input/Output Operations Per Second) en accessos aleatoris a blocs petits (típicament 4 KB), determinant la capacitat de resposta del servidor davant milers de consultes concurrents.</button>
    <button class="btn-check" data-correct="false">C) Mesura la temperatura màxima del disc abans de fondre's.</button>
    <button class="btn-check" data-correct="false">D) És la quantitat de carpetes que caben a l'escriptori.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Auditoria de Maquinari i Proposta d'Ampliació</h4>
  </div>
  <p>Realitza una auditoria física d'un equip de sobretaula o estació de treball real: documenta model de CPU, sòcol, placa base, tipus de memòria RAM i emmagatzematge. Proposa un pla d'actualització justificat (canvi d'HDD a SSD NVMe, ampliació de RAM) calculant el coll d'ampolla previ i la millora estimada de rendiment.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
