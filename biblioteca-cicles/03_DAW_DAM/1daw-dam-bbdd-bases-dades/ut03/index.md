---
layout: default
title: "UD3: Disseny Lògic: Model Relacional i Normalització — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD3"
prev_url: "../ut02/index.html"
prev_label: "⬅️ UD2 Model E/R"
next_url: "ut0301.html"
next_label: "Començar 3.1 ➡️"
---

# UD3: Disseny Lògic: Model Relacional i Normalització

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 3</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD3: Disseny Lògic: Model Relacional i Normalització** del mòdul professional de **Bases de Dades**.

Una vegada dissenyat l'esquema conceptual mitjançant diagrames E/R, cal traduir-lo a una estructura comprensible pels motors de bases de dades relacionals: el **Model Relacional**. A més, és imprescindible validar la qualitat d'aquestes taules mitjançant la **Teoria de la Normalització**, un procediment matemàtic rigorós que garanteix l'absència d'anomalies de modificació, redundàncies perjudicials i pèrdues d'informació.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA6)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA6:** Dissenya bases de dades relacionals identificant els elements que les componen i aplicant tècniques de modelització conceptual i lògica.
  - Dominar la terminologia formal del model relacional (relació, tupla, atribut, domini, grau, cardinalitat).
  - Aplicar les regles d'integritat bàsiques (integritat d'entitat i integritat referencial).
  - Transformar sistemàticament diagrames E/R a esquemes de taules relacionals.
  - Identificar dependències funcionals entre conjunts d'atributs.
  - Aplicar el procés de normalització fins a 3a Forma Normal (3FN) i Boyce-Codd (BCNF).
  - Avaluar quan és convenient aplicar una desnormalització controlada per motius de rendiment.

---

## 📑 Apartats de la Unitat

1. **[3.1 El Model Relacional: Estructura, Conceptes i Terminologia](ut0301.html)**
   - Taules, files, columnes, dominis, graus i cardinalitats. Esquemes relacionals.
2. **[3.2 Regles d'Integritat en el Model Relacional](ut0302.html)**
   - Integritat d'entitat (clau primària no nul·la), integritat referencial (claus foranes) i regles de domini.
3. **[3.3 Regles de Transformació del Model E/R al Model Relacional](ut0303.html)**
   - Transformació d'entitats, relacions 1:1, 1:N, M:N, atributs multivalorats i jerarquies d'herència.
4. **[3.4 Teoria de la Normalització: Dependències Funcionals](ut0304.html)**
   - Concepte de dependència funcional, dependències completes, dependències transitives i anomalies d'actualització.
5. **[3.5 Formes Normals (1FN, 2FN, 3FN i BCNF) i Desnormalització](ut0305.html)**
   - Criteris estrictes de descomposició sense pèrdua, anàlisi de formes normals i trade-offs de rendiment en lectures.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua capacitat de transformació i normalització lògica resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Transformació d'una Relació M:N</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Com es transforma obligatòriament una relació molts a molts (M:N) entre dues entitats 'ALUMNE' i 'ASSIGNATURA' al passar al model relacional?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Es col·loca la clau primària d'Alumne dins de la taula Assignatura com a clau forana.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Es crea una nova taula intermèdia que té com a clau primària composta la combinació de les claus primàries de les dues entitats.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) S'elimina una de les dues taules perquè és redundant.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Es concatenen els dos noms en una sola columna de text.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Integritat Referencial</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Què garanteix la regla d'integritat referencial en una base de dades relacional?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Que cap taula no puga contindre més d'un milió de registres.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Que el valor d'una clau forana ha de coincidir obligatòriament amb una clau primària existent a la taula referenciada o ser nul.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Que totes les columnes de text s'emmagatzemen en majúscules.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Que no es puguen fer consultes de tipus SELECT en diumenge.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Tercera Forma Normal (3FN)</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una taula està en Segona Forma Normal (2FN). Què exigeix la Tercera Forma Normal (3FN) per a considerar-se complida?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Que cap atribut no primari tinga una dependència funcional transitiva respecte a la clau primària.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Que la taula continga exactament tres claus foranes.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Que tots els atributs siguen de tipus numèric enter.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Que no existisca cap fila repetida al disc dur físic.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Desnormalització Controlada</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En quin context professional està plenament justificat aplicar una desnormalització controlada d'una base de dades?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Quan l'equip de programació no vol aprendre a escriure claus foranes.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) En magatzems de dades analítics (Data Warehouses / OLAP) per a optimitzar el temps de resposta en lectures massives i reduir joins costosos.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Quan el disc dur és massa gran i cal omplir-lo de dades redundants.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Per a evitar haver de pagar la quota mensual d'electricitat del servidor.</button>
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
