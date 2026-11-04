---
layout: default
title: "UD2: Disseny Conceptual: Model Entitat-Relació (E/R) — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD2"
prev_url: "../ut01/index.html"
prev_label: "⬅️ UD1 Sistemes SGBD"
next_url: "ut0201.html"
next_label: "Començar 2.1 ➡️"
---

# UD2: Disseny Conceptual: Model Entitat-Relació (E/R)

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 2</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD2: Disseny Conceptual: Model Entitat-Relació (E/R)** del mòdul professional de **Bases de Dades**.

El disseny d'una base de dades és una de les fases més crítiques en l'enginyeria de programari. Si l'esquema conceptual conté errors d'origen, el sistema serà ineficient, generarà inconsistències i resultarà extremadament car de mantenir. En aquesta unitat dominarem el **Model Entitat-Relació (Peter Chen, 1976)** i les seues extensions (**EER**), l'estàndard gràfic universal per modelar la semàntica del món real.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA6)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA6:** Dissenya bases de dades relacionals identificant els elements que les componen i aplicant tècniques de modelització conceptual (E/R i E/R estès).
  - Reconèixer les fases del cicle de vida d'una base de dades (anàlisi de requeriments, disseny conceptual, disseny lògic i físic).
  - Identificar entitats fortes, entitats febles i els seus atributs (simples, compostos, multivalorats i derivats).
  - Determinar claus primàries, candidates i alternatives.
  - Representar relacions binàries, recursives i n-àries amb les seues cardinalitats màximes i mínimes.
  - Aplicar conceptes del model E/R estès: generalització, especialització, herència d'atributs i restriccions de disjunció i completitud.
  - Transformar especificacions narratives del client en diagrames conceptuals rigorosos.

---

## 📑 Apartats de la Unitat

1. **[2.1 Fonaments del Disseny Conceptual i Cicle de Vida de les BD](ut0201.html)**
   - Fases del cicle de vida: anàlisi de requeriments, disseny conceptual, lògic i físic. L'abstracció com a eina d'enginyeria.
2. **[2.2 Entitats, Atributs i Tipus de Claus](ut0202.html)**
   - Entitats regulars vs. febles (per existència i per identificació). Classificació d'atributs i elecció de claus primàries.
3. **[2.3 Relacions, Tipus de Correspondència i Cardinalitats](ut0203.html)**
   - Grau de la relació (binària, reflexiva, ternària). Cardinalitat màxima (1:1, 1:N, M:N) i cardinalitat mínima (0 o 1, participació opcional o obligatòria).
4. **[2.4 Model Entitat-Relació Estès (EER): Jerarquies i Especialització](ut0204.html)**
   - Superclasses i subclasses. Restriccions de disjunció (disjunta / solapada) i de completitud (total / parcial).
5. **[2.5 Resolució de Casos Pràctics i Diagrames E/R Reals](ut0205.html)**
   - Metodologia de resolució, anàlisi de textos narratius, comprovació de redundàncies, trampes de disseny (fan traps i chasm traps).

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Posa a prova els teus coneixements de modelització conceptual resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Fases de Disseny</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En quina fase del disseny d'una base de dades es decideixen els tipus d'emmagatzematge físic, els índexs B-Tree i els paràmetres de disc de l'SGBD?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) En el disseny conceptual mitjançant diagrames E/R.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) En la fase de recopilació i anàlisi de requeriments d'usuari.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) En el disseny físic de la base de dades.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) En la fase de normalització a tercera forma normal.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Entitats Febles</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina característica defineix de manera inconfusible una entitat feble per identificació en un diagrama E/R?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Que conté menys de tres atributs en el seu interior.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Que no té atributs propis suficients per formar una clau primària i necessita la clau de l'entitat forana de la qual depèn.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Que no es pot emmagatzemar en cap disc rígid magnètic.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Que només admet relacions de tipus molts a molts (M:N).</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Cardinalitats de Relació</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Un hospital estableix que 'un metge pot tindre assignats diversos pacients (o cap), però cada pacient té assignat exactament un metge responsable'. Quina és la cardinalitat de la relació entre Metge i Pacient?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Molts a Molts (M:N).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Un a Un (1:1).</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Un a Molts (1:N) des de Metge cap a Pacient.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Ternària amb participació parcial obligatòria.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Jerarquies EER</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En una jerarquia de generalització d'una universitat on PERSONA és la superclasse i ALUMNE i PROFESSOR són les subclasses, si una persona NO pot ser simultàniament alumne i professor, la jerarquia és:</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Solapada (overlapping).</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Disjunta (disjoint).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Recursiva.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Feblesa total.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament d'Activitats a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En acabar de resoldre els reptes interactius d'aquest apartat, descarrega el justificant en PDF i puja'l a la tasca corresponent d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Justificant PDF
    </button>
  </div>
</div>
