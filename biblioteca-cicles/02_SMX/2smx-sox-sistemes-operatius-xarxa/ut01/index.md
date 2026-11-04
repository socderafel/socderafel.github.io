---
layout: default
title: "UT 01: Introducció i Instal·lació de Sistemes Operatius en Xarxa — SOX"
permalink: /02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/index.html
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat de Treball 01</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 19 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 475 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 01: Introducció i Instal·lació de Sistemes Operatius en Xarxa

Aquesta primera unitat estableix els fonaments teòrics i pràctics indispensables per a la comprensió, instal·lació i configuració bàsica dels Sistemes Operatius en Xarxa corporatius (Windows Server i Linux Server).

L'administrador de sistemes en xarxa ha de conéixer amb exactitud els requeriments de maquinari, planificar correctament la separació d'emmagatzematge, escollir la modalitat d'instal·lació adequada (GUI vs. Server Core/CLI), fixar paràmetres de xarxa estàtics i desplegar un entorn de virtualització controlat per a donar suport als serveis que necessita qualsevol organització moderna.

---

## Continguts de la Unitat de Treball

Exploreu cadascun dels apartats d'aquesta unitat per completar les activitats teòriques i els reptes pràctics:

- **[1.1 Arquitectura Client-Servidor i Sistemes Operatius en Xarxa (NOS)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0101.html):** Models P2P vs. Client-Servidor, rols essencials i comparativa entre famílies de sistemes.
- **[1.2 Planificació de la Instal·lació i Requisits de Maquinari](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0102.html):** Subsistemes crítics (CPU, RAM ECC, RAID, NIC Teaming) i modalitats Server Core vs. Desktop Experience.
- **[1.3 Instal·lació de Windows Server: Interfície Gràfica vs. Server Core](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0103.html):** Procés pas a pas, particionat GPT, eina `sconfig` i automatització per PowerShell.
- **[1.4 Instal·lació i Configuració Base de Linux Server (Ubuntu/Debian)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0104.html):** Instal·lador en mode text, configuració de xarxa amb Netplan (YAML), gestió amb `systemd` i bastionat SSH.
- **[1.5 Virtualització de Servidors i Rols Bàsics en Laboratori](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut01/ut0105.html):** Hipervisors Tipus 1 vs. Tipus 2, modes de xarxa (Pont, Xarxa Interna, NAT) i generalització amb Sysprep.

---

## Reptes Globals de Síntesi de la Unitat 01

Demostra la teua visió global superant aquests 4 reptes d'integració de continguts:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 1: Disseny d'Infraestructura</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una empresa té 120 treballadors i vol centralitzar la gestió d'usuaris, arxius i polítiques de seguretat. Quina combinació d'arquitectura i sistema operatiu és la més recomanable?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Xarxa P2P en grup de treball amb equips amb Windows 10 Home.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Xarxa client-servidor basada en un domini Active Directory gestionat per servidors Windows Server en alta disponibilitat.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Una xarxa Ad-hoc sense fils sense cap servidor físic ni lògic.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Cada empleat emmagatzema les dades en un llapis de memòria USB compartit.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 2: Configuració de Xarxa Estàtica</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Durant la posada en marxa d'un servidor corporatiu que actuarà com a futur controlador de domini i servidor DNS, a quina adreça IP ha d'apuntar el seu propi client DNS primari?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) A l'adreça de difusió (broadcast) 255.255.255.255.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) A la seua pròpia adreça IP estàtica o a l'adreça de loopback 127.0.0.1 (perquè ell mateix resol els noms del domini).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) A la IP dinàmica del router ADSL de casa del tècnic.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) A l'adreça 0.0.0.0 amb màscara /0.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 3: Desplegament de Servidors</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per quin motiu estratègic la majoria de centres de dades prefereixen instal·lar Windows Server Core i Linux Server sense entorn gràfic d'escriptori?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè els monitors d'un centre de dades no admeten resolucions superiors a 640x480 píxels.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè les targetes gràfiques estan prohibides per la normativa contra incendis del CPD.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè maximitza el rendiment del maquinari, estalvia RAM/disc i redueix dràsticament el nombre de vulnerabilitats i reinicis per pegats.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el codi font de les finestres d'escriptori és incompatible amb els discs durs NVMe.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 4: Aïllament de Laboratori</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En dissenyar el laboratori virtual de pràctiques per al mòdul de SOX, quin mode de xarxa virtual assegura que les nostres màquines es comuniquen entre si i amb Internet per a actualitzar-se, sense afectar mai la xarxa física del centre?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Adaptador pont (Bridged).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Controlador genèric sense connexió.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Xarxa NAT (NAT Network) o Xarxa Interna amb passarel·la NAT controlada.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Connexió directa per cable creuat sèrie RS-232 virtualitzat.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament de la Unitat 01 a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En haver completat els reptes de tots els apartats i els reptes globals de la Unitat 01, descarrega el resum en PDF i puja'l a la tasca d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Informe Unitat 01 PDF
    </button>
  </div>
</div>
