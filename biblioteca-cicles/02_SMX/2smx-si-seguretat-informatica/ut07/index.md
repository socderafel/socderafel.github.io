---
title: "UT 07: Normativa, Protecció de Dades (RGPD) i Gestió d'Incidents — Seguretat Informàtica"
layout: "default"
prev_url: "/02_SMX/2smx-si-seguretat-informatica/ut06/index.html"
prev_label: "UT 06: Criptografia i Xarxes Segures"
next_url: "/02_SMX/2smx-si-seguretat-informatica/index.html"
next_label: "Tornar a l'Índex General del Mòdul"
course_root: ".."
badge: "2n SMX · Seguretat Informàtica · UT07"
module: "SI"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 7</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 07: Normativa, Protecció de Dades (RGPD) i Gestió d'Incidents

La **Unitat Temàtica 07** clou el mòdul desenvolupant de forma integral el **Resultat d'Aprenentatge 4 (RA4)** del currículum oficial de Seguretat Informàtica. L'alumnat aprofundirà en el marc legal de protecció de dades personals (RGPD europeu i LOPD-GDD espanyola), els principis fonamentals del tractament, el catàleg de drets ARCO-POL, els marcs d'estandardització de l'Esquema Nacional de Seguretat (ENS) i la norma ISO/IEC 27001, així com els protocols d'actuació i notificació obligatòria de ciberincidents a l'AEPD i INCIBE en menys de 72 hores.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA4)

- **RA4:** Assegura el compliment de la legislació vigent en matèria de protecció de dades (RGPD, LOPD-GDD) i seguretat de la informació (ENS, ISO/IEC 27001), gestionant protocols de notificació d'incidents.
- **Criteris d'Avaluació:**
  - Identificació dels rols, responsabilitats i categories de dades segons el RGPD.
  - Aplicació dels principis de tractament (minimització, limitació de finalitat, confidencialitat).
  - Gestió procedimental dels drets ciutadans d'accés, rectificació, supressió (dret a l'oblit), oposició i portabilitat.
  - Caracterització dels requisits de conformitat de l'Esquema Nacional de Seguretat (RD 311/2022).
  - Execució de protocols de contenció i compliment dels terminis de notificació de bretxes en 72 hores.

---

## 📚 Apartats Didàctics de la Unitat

1. [**7.1 Marc Legal de Protecció de Dades: RGPD i LOPD-GDD**](./ut0701.html)
   - Reglament (UE) 2016/679 i Llei Orgànica 3/2018; abast extraterritorial.
   - Rols: Responsable, Encarregat i Delegat de Protecció de Dades (DPD/DPO).
   - Categories especials de dades (salut, biometria, genètica).
2. [**7.2 Principis Fonamentals del Tractament de Dades**](./ut0702.html)
   - Els 7 principis de l'Art. 5: licitud, transparència, minimització, exactitud, conservació, seguretat i responsabilitat proactiva (*Accountability*).
   - Privadesa des del Disseny i per Defecte (*Privacy by Design*).
3. [**7.3 Drets de la Ciutadania (Drets ARCO-POL)**](./ut0703.html)
   - Accés, Rectificació, Supressió (*Dret a l'Oblit*), Oposició, Portabilitat i Limitació.
   - Gratuïtat i termini màxim legal de resposta (1 mes).
4. [**7.4 L'Esquema Nacional de Seguretat (ENS) i ISO/IEC 27001**](./ut0704.html)
   - Objectius de l'ENS (RD 311/2022) per a administracions i proveïdors.
   - Les 5 dimensions de seguretat (C, I, D, A, T) i categories de sistemes.
   - El cicle de millora contínua PDCA en sistemes SGSI ISO 27001.
5. [**7.5 Gestió d'Incidents de Seguretat i Notificació Obligatòria en 72h**](./ut0705.html)
   - Fases de resposta a incidents segons NIST SP 800-61 (contenció sense apagat brusc).
   - Protocol de notificació de bretxes a l'AEPD en un màxim de 72 hores.
   - Els centres nacionals CSIRT/CERT (INCIBE-CERT, línia 017 i CCN-CERT).

---

## 🏆 Reptes Globals de Síntesi de la Unitat 7 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut07_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Un hospital pateix un atac de ransomware durant la nit de dissabte: els historials clínics de milers de pacients han estat xifrats i els atacants han sostret dades abans de demanar un rescat. Quin termini té l'hospital per a notificar oficialment la bretxa a l'Agència Espanyola de Protecció de Dades (AEPD)?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut07_global_c1" value="a"> A) En un màxim de 72 hores des que es tinga constància de l'incident.</label>
    <label><input type="radio" name="opt_si_ut07_global_c1" value="b"> B) Quan acabe el mes de facturació.</label>
    <label><input type="radio" name="opt_si_ut07_global_c1" value="c"> C) Només cal notificar-ho si els pacients se n'assabenten per la premsa.</label>
    <label><input type="radio" name="opt_si_ut07_global_c1" value="d"> D) En un termini de 6 mesos després de pagar el rescat.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El límit legal improrrogable de l'article 33 del RGPD és de 72 hores des que l'organització té evidència de la violació de seguretat." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut07_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: Per què un tècnic informàtic que investiga una intrusió activa en un servidor mai ha d'apagar l'equip desendollant-lo del corrent de colp?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut07_global_c2" value="a"> A) Perquè en desendollar-lo s'esborra instantàniament tota la informació volàtil de la memòria RAM (processos del malware, connexions de xarxa actives, claus de xifratge en memòria), destruint proves forenses irrecuperables.</label>
    <label><input type="radio" name="opt_si_ut07_global_c2" value="b"> B) Perquè el SAI s'avaria si es desendolla un equip.</label>
    <label><input type="radio" name="opt_si_ut07_global_c2" value="c"> C) Perquè el reglament de l'ENS prohibeix tocar els endolls sense guants d'amiant.</label>
    <label><input type="radio" name="opt_si_ut07_global_c2" value="d"> D) Perquè l'ordinador explota per sobretensió.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La bona pràctica forense és desconnectar el cable de xarxa per a contindre el contagi i capturar immediatament una imatge de la memòria RAM abans de qualsevol apagat." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut07_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Què distingeix el Dret de Supressió (Dret a l'Oblit) de la resta de drets ARCO-POL?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut07_global_c3" value="a"> A) Permet a un ciutadà exigir la destrucció de les seues dades personals o la desindexació de motors de cerca quan ja no són necessàries o s'han recollit de forma il·lícita.</label>
    <label><input type="radio" name="opt_si_ut07_global_c3" value="b"> B) Permet als ciutadans oblidar les seues contrasenyes sense penalització.</label>
    <label><input type="radio" name="opt_si_ut07_global_c3" value="c"> C) Només és aplicable als menors de 10 anys.</label>
    <label><input type="radio" name="opt_si_ut07_global_c3" value="d"> D) Obliga a les empreses a regalar un disc dur a l'usuari.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El dret a l'oblit consagra el dret de les persones a no quedar vinculades de per vida a informacions personals obsoletes o no pertinents en plataformes digitals." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut07_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: En una auditoria de conformitat amb l'Esquema Nacional de Seguretat (ENS), per què s'exigeix que els sistemes informàtics registren i custodien les traces d'auditoria (logs) durant un període mínim de temps?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut07_global_c4" value="a"> A) Per a complir la dimensió de Traçabilitat (T), garantint que davant qualsevol incident o accés irregular es puga reconstruir amb certesa qui va entrar, des d'on, a quina hora i quins canvis va executar.</label>
    <label><input type="radio" name="opt_si_ut07_global_c4" value="b"> B) Perquè els fitxers de registre acceleren la velocitat d'arrencada de Windows.</label>
    <label><input type="radio" name="opt_si_ut07_global_c4" value="c"> C) Perquè els logs serveixen per a comprovar la temperatura dels microprocessadors.</label>
    <label><input type="radio" name="opt_si_ut07_global_c4" value="d"> D) Perquè ho exigeix el protocol de correu SMTP.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La traçabilitat és la base indispensable per a l'auditoria, la responsabilitat i la investigació forense en el sector públic i privat." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT07_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 07</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre normativa RGPD, ENS i gestió d'incidents i descarrega el certificat global de la UT 07 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
