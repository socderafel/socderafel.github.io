---
layout: default
title: "UD1: Desenvolupament de Programari i Cicle de Vida — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Entorns de Desenvolupament · UD1"
prev_url: "../index.html"
prev_label: "⬅️ Portada del Mòdul"
next_url: "ut0101.html"
next_label: "Començar 1.1 ➡️"
---

# UD1: Desenvolupament de Programari i Cicle de Vida

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 1</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD1: Desenvolupament de Programari i Cicle de Vida** del mòdul professional d'**Entorns de Desenvolupament** per als cicles formatius de Grau Superior en **Desenvolupament d'Aplicacions Web (DAW)** i **Desenvolupament d'Aplicacions Multiplataforma (DAM)**.

Construir programari professional és molt més que picar línies de codi en un editor de text. L'**Enginyeria del Programari** naix per donar resposta a la necessitat de produir aplicacions fiables, mantenibles, entregades a temps i dins del pressupost acordat. En aquesta unitat explorarem les etapes fonamentals de vida de qualsevol aplicació, comparant els models clàssics predictius amb les modernes metodologies àgils (**Scrum**, **Kanban**) que dominen la indústria tecnològica actual.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA1)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA1:** Reconeix els elements i les eines que intervenen en el desenvolupament d'una aplicació informàtica, analitzant les seues característiques i les fases del cicle de vida del programari.
  - Comprendre el concepte d'enginyeria del programari i les causes de la crisi del programari.
  - Identificar les fases del cicle de vida (anàlisi, disseny, codificació, proves, desplegament i manteniment).
  - Avaluar els models clàssics de desenvolupament: cascada, prototipatge, incremental i espiral.
  - Dominar els valors i principis del Manifest Àgil.
  - Conèixer els rols, esdeveniments i artefactes del marc de treball Scrum.
  - Reconèixer l'ús de taulers Kanban i el control del treball en curs (WIP).
  - Identificar els estàndards de qualitat del programari (ISO/IEC 25010).

---

## 📑 Apartats de la Unitat

1. **[1.1 Concepte de Programari i Enginyeria del Programari](ut0101.html)**
   - Concepte, tipus de programari, la crisi del programari i els rols en un equip professional de desenvolupament.
2. **[1.2 Fases del Cicle de Vida del Programari](ut0102.html)**
   - De la idea inicial a la retirada: anàlisi de requeriments, disseny arquitectural, implementació, verificació, desplegament i manteniment.
3. **[1.3 Models de Cicle de Vida Clàssics](ut0103.html)**
   - Model en cascada (*waterfall*), model en V, cicle de vida incremental i model en espiral de Boehm.
4. **[1.4 Metodologies Àgils: El Manifest Àgil, Scrum i Kanban](ut0104.html)**
   - Els 4 valors del Manifest Àgil, el marc Scrum (Product Owner, Scrum Master, Sprints, Backlogs) i taulers Kanban.
5. **[1.5 Gestió de Projectes i Estàndards de Qualitat (ISO 25010)](ut0105.html)**
   - Estimació d'esforç, gestió de riscos tècnics i les 8 característiques de qualitat de l'estàndard ISO/IEC 25010.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua visió global sobre el cicle de vida i la gestió de projectes resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: La Crisi del Programari</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Què va ser històricament la 'Crisi del Programari' identificada a finals de la dècada de 1960?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Una fallada mundial en la fabricació de vàlvules de buit.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) La incapacitat crònica de la indústria per entregar projectes informàtics a temps, sense sobrecostos desmesurats i amb un nivell acceptable de defectes.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) La manca d'ordinadors personals a les escoles primàries.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) L'aparició dels primers virus informàtics en discs flexibles.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Model en Cascada vs. Àgil</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En quin tipus de projecte és més aconsellable emprar un model de desenvolupament clàssic en cascada abans que una metodologia àgil?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) En aplicacions mòbils de consum amb requeriments molt canviants setmana a setmana.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) En sistemes crítics aeroespacials o ferroviaris on els requeriments estan completament fixats per normativa i no poden patir canvis durant el desenvolupament.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) En una pàgina web de comerç electrònic per a una botiga de roba de moda.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) En jocs en línia multijugador.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Rol del Product Owner a Scrum</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la responsabilitat màxima del Product Owner dins d'un equip Scrum?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Decidir quines tecnologies de compilació i servidors físics s'han de comprar.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Maximitzar el valor del producte i gestionar de manera prioritzada el Product Backlog representant els usuaris i el negoci.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Supervisar els horaris d'entrada i eixida dels programadors.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Escriure tots els tests unitaris del codi.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Estàndard ISO/IEC 25010</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina característica de qualitat segons la norma ISO/IEC 25010 mesura la facilitat amb què un programa pot ser modificat per corregir defectes o adaptar-se a nous canvis?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Mantenibilitat (Maintainability).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Eficiència d'execució.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Portabilitat electromagnètica.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Compatibilitat de pantalla.</button>
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
