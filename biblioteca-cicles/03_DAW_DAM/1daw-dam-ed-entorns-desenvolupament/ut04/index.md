---
layout: default
title: "UD4: Modelat de Comportament amb Diagrames UML — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Entorns de Desenvolupament · UD4"
prev_url: "../ut03/index.html"
prev_label: "⬅️ UD3 UML Classes"
next_url: "ut0401.html"
next_label: "Començar 4.1 ➡️"
---

# UD4: Modelat de Comportament amb Diagrames UML

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 4</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD4: Modelat de Comportament amb Diagrames UML** del mòdul professional d'**Entorns de Desenvolupament**.

Mentre que el diagrama de classes descriu la carcassa estàtica d'un programa, les aplicacions reals cobren vida quan els objectes interactuen entre si, processen peticions d'usuaris, canvien d'estat i executen regles de negoci. En aquesta unitat dominarem la branca de **diagrames de comportament d'UML**: els **Diagrames de Casos d'Ús** (la visió funcional externa), els **Diagrames de Seqüència** (l'intercanvi de missatges ordenat en el temps), els **Diagrames d'Activitats** (el flux de treball paral·lel) i els **Diagrames d'Estats** (el cicle de vida reactiu d'un objecte).

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA5 / RA6)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA5/RA6:** Dissenya i representa el comportament dinàmic d'aplicacions orientades a objectes mitjançant diagrames de comportament UML.
  - Modelar les funcionalitats del sistema des de la perspectiva de l'usuari amb diagrames de casos d'ús.
  - Distingir les relacions de dependència estereotipades `<<include>>` i `<<extend>>`.
  - Redactar especificacions narratives formals de casos d'ús amb fluxos bàsics, alternatius i excepcions.
  - Representar la interacció temporal entre objectes mitjançant diagrames de seqüència i fragments combinats (`alt`, `opt`, `loop`).
  - Modelar processos de negoci i algorismes concurrents amb diagrames d'activitats i carrils (*swimlanes*).
  - Representar canvis d'estat provocats per esdeveniments mitjançant diagrames de màquines d'estats.

---

## 📑 Apartats de la Unitat

1. **[4.1 Diagrames de Casos d'Ús](ut0401.html)**
   - Actors, el·lipses de casos d'ús, el límit del sistema (*system boundary*) i relacions `<<include>>`, `<<extend>>` i generalització.
2. **[4.2 Especificació Narrativa de Casos d'Ús](ut0402.html)**
   - Plantilla formal: precondicions, postcondicions, flux principal d'èxit, fluxos secundaris i excepcions.
3. **[4.3 Diagrames de Seqüència](ut0403.html)**
   - Objectes, línies de vida (*lifelines*), missatges sincrònics/asincrònics, retorns i fragments combinats (`alt`, `opt`, `loop`).
4. **[4.4 Diagrames d'Activitats](ut0404.html)**
   - Nodes d'acció, decisions, bifurcacions (*fork*) i sincronitzacions (*join*) paral·leles, i carrils de responsabilitat (*swimlanes*).
5. **[4.5 Diagrames d'Estats (State Machine)](ut0405.html)**
   - Estats, transicions disparades per esdeveniments, condicions de guarda, accions internes `entry/`, `do/`, `exit/`.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua expertesa en modelització dinàmica resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Relació <<include>> vs. <<extend>></span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina diferència fonamental existeix entre la relació <<include>> i la relació <<extend>> entre dos casos d'ús?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) <<include>> és per a aplicacions mòbils i <<extend>> per a aplicacions web.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) <<include>> és una inclusió obligatòria (el cas base no pot finalitzar sense executar el cas inclòs), mentre que <<extend>> és una extensió opcional que només s'executa si es compleix una condició en un punt d'extensió.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) <<include>> es dibuixa amb línia contínua i <<extend>> sense fletxa.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No hi ha cap diferència, són sinònims exactes en UML.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Diagrames de Seqüència: Fragment 'alt'</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En un diagrama de seqüència UML, per a què s'utilitza el fragment combinat d'interacció 'alt'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Per reiniciar el programa des del principi.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Per representar un comportament condicional d'alternatives múltiples (equivalent a un IF-ELSE o SWITCH en programació) dividit per una línia discontínua.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Per indicar que el missatge s'ha enviat amb alta prioritat.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Per a apagar l'altaveu de l'ordinador.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Fork i Join en Activitats</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En un diagrama d'activitats UML, què representa una barra gruixuda horitzontal de tipus 'Fork' (bifurcació paral·lela)?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) El final absolut del programa.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) La divisió d'un únic flux d'entrada en dos o més fluxos concurrents que s'executen en paral·lel de manera simultània.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) La impressió d'un document en paper continu.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Una parada d'emergència per sobreescalfament del processador.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Condició de Guarda en Transicions d'Estat</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Com s'expressa una 'Condició de Guarda' en una fletxa de transició d'un diagrama d'estats?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) En majúscules vermelles.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Entre claudàtors [condicio_booleana], indicant que la transició només es dispararà si eixa condició és certa en el moment de l'esdeveniment.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Entre parèntesis rodons amb KaTeX.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Mitjançant una funció SQL DDL.</button>
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
