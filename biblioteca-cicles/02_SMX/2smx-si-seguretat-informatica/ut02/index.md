---
title: "UT 02: Seguretat Passiva: Entorn Físic, CPD i Protecció Elèctrica (SAI) — Seguretat Informàtica"
layout: "default"
prev_url: "/02_SMX/2smx-si-seguretat-informatica/ut01/index.html"
prev_label: "UT 01: Fonaments de Seguretat"
next_url: "/02_SMX/2smx-si-seguretat-informatica/ut03/index.html"
next_label: "UT 03: Seguretat Lògica i Autenticació"
course_root: ".."
badge: "2n SMX · Seguretat Informàtica · UT02"
module: "SI"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 2</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 02: Seguretat Passiva: Entorn Físic, CPD i Protecció Elèctrica (SAI)

La **Unitat Temàtica 02** desenvolupa de forma integral el **Resultat d'Aprenentatge 1 (RA1)** del currículum oficial de Seguretat Informàtica, centrat en la planificació i aplicació de mesures de **seguretat passiva** per a salvaguardar la infraestructura física, els equips de processament i les comunicacions davant d'avaries, desastres ambientals i anomalies elèctriques.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA1)

- **RA1:** Aplica mesures de seguretat passiva en sistemes informàtics, descrivint les característiques d'entorns d'instal·lació, protecció elèctrica i ambiental, i dimensionant sistemes d'alimentació ininterrompuda (SAI).
- **Criteris d'Avaluació:**
  - Identificació dels requisits d'instal·lació i condicionament ambiental del CPD.
  - Caracterització de les pertorbacions elèctriques i els seus dispositius de protecció.
  - Selecció i dimensionament de sistemes SAI/UPS calculant potències i autonomies.
  - Implementació de controls d'accés físic i protocols d'extinció d'incendis sense aigua.

---

## 📚 Apartats Didàctics de la Unitat

1. [**2.1 Ubicació, Disseny i Estructura del Centre de Processament de Dades (CPD)**](./ut0201.html)
   - Criteris d'emplaçament, terra tècnic, fals sostre i armaris rack 19".
   - Estàndard TIA-942 i nivells de resiliència TIER I a TIER IV.
2. [**2.2 Condicions Ambientals i Climatització del CPD**](./ut0202.html)
   - Rangs ASHRAE de temperatura (18-27 °C) i humitat relativa (40-60%).
   - Riscos d'aire sec (ESD) i humit (condensació).
   - Arquitectura de passadissos freds i calents (*Cold / Hot Aisle*).
3. [**2.3 Seguretat Física i Protecció contra Incendis al CPD**](./ut0203.html)
   - Control d'accés biomètric, targetes RFID i cambres *Man-trap*.
   - Detecció precoç per làser (VESDA) i extinció per gasos nets (Novec 1230, FM-200, Inergen).
4. [**2.4 Pertorbacions Elèctriques i Qualitat de Subministrament**](./ut0204.html)
   - Blackouts, microtalls, sobretensions (*surges*), pics de tensió (*spikes*) i soroll EMI.
   - Elements de protecció: preses de terra, diferencials i varistors MOV.
5. [**2.5 Sistemes d'Alimentació Ininterrompuda (SAI/UPS) i Càlcul de Potència**](./ut0205.html)
   - Tipologies: Off-line, Line-Interactive i On-line de doble conversió.
   - Relació entre Watts (W) i Volt-Ampers (VA) amb el factor de potència ($F_p$).
   - Fórmules de càlcul amb marge de seguretat i apagat controlat per xarxa (*Graceful Shutdown*).

---

## 🏆 Reptes Globals de Síntesi de la Unitat 2 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut02_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Per què un CPD de nivell TIER III o IV utilitza terra tècnic sobreelevat amb rajoles perforades col·locades estratègicament als passadissos frontals dels servidors?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut02_global_c1" value="a"> A) Perquè el terra tècnic actua com a cambra de distribució d'aire fred (plenum), impulsant-lo a pressió directament cap a la cara frontal d'aspiració dels equips.</label>
    <label><input type="radio" name="opt_si_ut02_global_c1" value="b"> B) Perquè permet que els tècnics puguen netejar el terra amb aigua mentre els equips estan funcionant.</label>
    <label><input type="radio" name="opt_si_ut02_global_c1" value="c"> C) Per a evitar que els servidors siguen afectats per la gravetat terrestre.</label>
    <label><input type="radio" name="opt_si_ut02_global_c1" value="d"> D) Només s'utilitza per a passar els tubs de la calefacció central.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El terra tècnic combina dues funcions crítiques: ocultar i protegir el cablejat estructurat i servir de conducte de ventilació per a injectar aire fred directament als passadissos d'admissió dels servidors." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut02_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: En cas que es produïsca un incendi a l'interior d'un CPD, quin és el mecanisme d'acció del gas inert Inergen (IG-541)?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut02_global_c2" value="a"> A) Desplaça i redueix la concentració d'oxigen a l'aire fins al 12-14%, sufocant el foc sense ser letal per a les persones que es troben desallotjant la sala.</label>
    <label><input type="radio" name="opt_si_ut02_global_c2" value="b"> B) Congela la sala a -50 °C en dos segons.</label>
    <label><input type="radio" name="opt_si_ut02_global_c2" value="c"> C) Expulsa escuma sabonosa sobre els armaris rack.</label>
    <label><input type="radio" name="opt_si_ut02_global_c2" value="d"> D) Destrueix les plaques base per evitar que les flames arriben a la memòria.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El foc necessita més del 15% d'oxigen per a mantindre la combustió. Inergen redueix l'oxigen al 12-14% i afegeix un 8% de CO2 per a estimular la respiració humana durant l'evacuació." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut02_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Un tècnic compra un SAI barat de tipus Off-line (Standby) per a protegir el servidor principal de la base de dades. Durant una fallada de corrent elèctric, el servidor s'apaga sobtadament en lloc de continuar funcionant. Quina és la causa més probable?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut02_global_c3" value="a"> A) El temps de commutació del SAI Off-line (entre 6 i 10 ms) va ser superior al temps de reserva (hold-up time) de la font del servidor, provocant la seua caiguda abans que entraren les bateries.</label>
    <label><input type="radio" name="opt_si_ut02_global_c3" value="b"> B) El cable Ethernet no estava connectat al SAI.</label>
    <label><input type="radio" name="opt_si_ut02_global_c3" value="c"> C) Els servidors només funcionen amb corrent trifàsic de 400 V.</label>
    <label><input type="radio" name="opt_si_ut02_global_c3" value="d"> D) El sistema operatiu va rebutjar la bateria per no tindre llicència comercial.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! Els SAIs Off-line tenen un retard de commutació mecànic que moltes fonts d'alimentació de servidors no toleren. Per això, als servidors és obligatori instal·lar SAIs On-line de doble conversió (temps 0 ms)." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut02_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: Si disposem d'una càrrega total de servidors de 1.400 W amb un factor de potència mig de 0,8, quina és la potència en VA consumida i quin SAI de gamma professional haurem d'escollir tenint en compte un 25% de marge de seguretat?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut02_global_c4" value="a"> A) 1.400 W / 0,8 = 1.750 VA; amb el 25% addicional (x 1,25) = 2.187,5 VA. S'ha de seleccionar un SAI comercial de com a mínim 2.200 VA o 3.000 VA.</label>
    <label><input type="radio" name="opt_si_ut02_global_c4" value="b"> B) 1.400 VA exactes.</label>
    <label><input type="radio" name="opt_si_ut02_global_c4" value="c"> C) 500 VA amb 2 bateries.</label>
    <label><input type="radio" name="opt_si_ut02_global_c4" value="d"> D) 10.000 VA perquè sempre s'ha de multiplicar per deu.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El càlcul correcte passa primer de Watts a VA dividint pel factor de potència ($1.400 / 0,8 = 1.750\text{ VA}$) i després aplica el coeficient de seguretat ($1.750 \times 1,25 = 2.187,5\text{ VA}$), recomanant un equip estàndard de 2.200 o 3.000 VA." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT02_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 02</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre seguretat passiva, climatització i SAIs i descarrega el certificat global de la UT 02 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
