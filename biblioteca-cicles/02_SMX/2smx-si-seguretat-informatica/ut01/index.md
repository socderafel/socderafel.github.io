---
layout: default
title: "UT 01: Fonaments de Seguretat Informàtica i Anàlisi de Riscos — Seguretat Informàtica"
permalink: /02_SMX/2smx-si-seguretat-informatica/ut01/index.html
prev_url: /02_SMX/2smx-si-seguretat-informatica/index.html
prev_label: "Tornar a la Portada del Mòdul"
next_url: /02_SMX/2smx-si-seguretat-informatica/ut02/index.html
next_label: "UT 02: Seguretat Passiva i CPD"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 1</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 01: Fonaments de Seguretat Informàtica i Anàlisi de Riscos

La **Unitat Temàtica 01** estableix les bases teòriques, conceptuals i metodològiques del mòdul de Seguretat Informàtica. S'introdueixen els principis fonamentals de protecció de la informació, la caracterització dels diferents tipus d'amenaces i atacants, els enganys psicològics basats en enginyeria social i el marc formal d'anàlisi i gestió de riscos segons l'estàndard MAGERIT.

---

## 🎯 Resultats d'Aprenentatge Curriculars

- **RA Introductori:** Caracteritza els principis de seguretat de la informació, avaluant l'impacte de les amenaces lògiques, humanes i ambientals sobre els actius d'una organització.
- **Alineació Curricular:** RD 1691/2007 i Decret 81/2010 CV.

---

## 📚 Apartats Didàctics de la Unitat

1. [**1.1 La Tríada CIA, Autenticitat i No-Repudi**](./ut0101.html)
   - Confidencialitat, Integritat i Disponibilitat com a pilars indestructibles.
   - Autenticitat i no-repudi d'origen i de destinació.
2. [**1.2 Tipologies d'Amenaces en Sistemes Informàtics**](./ut0102.html)
   - Amenaces humanes (accidentals vs intencionades), lògiques (malware) i ambientals.
   - Diferència clau entre actiu, amenaça, vulnerabilitat i risc.
3. [**1.3 Perfils d'Atacants i Motivacions**](./ut0103.html)
   - Script Kiddies, ciberdelinqüents, hacktivistes, amenaces internes (*insiders*) i grups APT.
   - La taxonomia de colors: White Hat, Black Hat i Grey Hat.
4. [**1.4 Tècniques d'Enginyeria Social**](./ut0104.html)
   - Phishing, Spear Phishing, Whaling, Vishing, Smishing i Baiting.
   - Biaixos psicològics utilitzats: autoritat, urgència i por.
5. [**1.5 Metodologies d'Anàlisi i Gestió de Riscos**](./ut0105.html)
   - Metodologia MAGERIT del CCN-CERT.
   - Matrius de probabilitat i impacte (5x5).
   - Estratègies: mitigar, transferir, evitar i acceptar el risc residual.

---

## 🏆 Reptes Globals de Síntesi de la Unitat 1 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut01_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Un banc pateix una incidència: el seu portal web permet a qualsevol usuari registrat veure el saldo i moviments d'altres clients canviant un número en l'adreça URL. Quin pilar de la tríada CIA s'ha trencat de manera greu?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut01_global_c1" value="a"> A) Confidencialitat</label>
    <label><input type="radio" name="opt_si_ut01_global_c1" value="b"> B) Disponibilitat</label>
    <label><input type="radio" name="opt_si_ut01_global_c1" value="c"> C) Eficiència energètica</label>
    <label><input type="radio" name="opt_si_ut01_global_c1" value="d"> D) No-repudi de recepció</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! La confidencialitat impedeix que persones no autoritzades tinguen accés a dades privades de tercers." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut01_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: Un ciberdelinqüent envia un SMS a tots els telèfons d'un barri simulant ser l'Agència Tributària i demanant fer clic per a cobrar una devolució de 240 €. Quin tipus d'enginyeria social és?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut01_global_c2" value="a"> A) Smishing (SMS Phishing)</label>
    <label><input type="radio" name="opt_si_ut01_global_c2" value="b"> B) Vishing</label>
    <label><input type="radio" name="opt_si_ut01_global_c2" value="c"> C) Shoulder Surfing</label>
    <label><input type="radio" name="opt_si_ut01_global_c2" value="d"> D) Dumpster Diving</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El Smishing és la variant de pesca que utilitza la missatgeria mòbil SMS per a enganyar les víctimes." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut01_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Quin és el motiu pel qual les amenaces internes (*insider threats*) solen tindre un impacte molt més destructiu que els atacs procedents d'intrusos externs desconeguts?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut01_global_c3" value="a"> A) Perquè els empleats interns ja disposen de credencials vàlides, coneixen l'estructura de la xarxa i estan situats darrere del tallafocs perimetral.</label>
    <label><input type="radio" name="opt_si_ut0103_global_c3" value="b"> B) Perquè utilitzen virus creats per ells mateixos.</label>
    <label><input type="radio" name="opt_si_ut0103_global_c3" value="c"> C) Perquè la llei no permet sancionar treballadors d'una empresa.</label>
    <label><input type="radio" name="opt_si_ut0103_global_c3" value="d"> D) Perquè no utilitzen sistemes operatius convencionals.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! En trobar-se ja a l'interior del perímetre defensiu i comptar amb privilegis assignats legítimament, un empleat descontent pot causar un dany massiu sense fer sonar les alarmes perimetrals." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut01_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: En una matriu de risc, una amenaça té una probabilitat molt baixa de succeir (1 vegada cada 100 anys), però si ocorreguera l'impacte seria la fallida total de l'empresa. Com ha de classificar-se aquest risc segons MAGERIT?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut01_global_c4" value="a"> A) Risc Menor o Despreciable</label>
    <label><input type="radio" name="opt_si_ut01_global_c4" value="b"> B) Risc Significatiu o Mitjà/Alt que requereix mesures de continuïtat o transferència (assegurança)</label>
    <label><input type="radio" name="opt_si_ut01_global_c4" value="c"> C) No és un risc perquè la probabilitat és quasi zero.</label>
    <label><input type="radio" name="opt_si_ut01_global_c4" value="d"> D) Risc que només afecta els tècnics de manteniment.</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Molt bé! Els esdeveniments de baixa freqüència però impacte catastròfic no poden ser ignorats: requereixen plans de recuperació davant desastres (DRP) o assegurances de danys." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT01_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 01</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre fonaments de seguretat i descarrega el certificat global de la UT 01 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
