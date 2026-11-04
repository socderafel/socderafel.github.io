---
title: "UD8: Bases de Dades No Relacionals (NoSQL) — MongoDB — Bases de Dades"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UT08"
prev_url: "../ut07/index.html"
prev_label: "⬅️ UD7"
next_url: "ut0800.html"
next_label: "📋 8.0 Proposta Didàctica: Bases de dades no relacionals (NoSQL) ➡️"
module: "BBDD"
---

# UD8: Bases de Dades No Relacionals (NoSQL) — MongoDB

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 8** del mòdul de **Bases de Dades**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 8.0 Proposta Didàctica: Bases de dades no relacionals (NoSQL)](ut0800.html)**
1. **[8.1 Bases de dades no relacionals (NoSQL)](ut0801.html)**
1. **[8.2 MongoDB](ut0802.html)**
1. **[8.3 Configuració entorn MongoDB](ut0803.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 801](act801.html)**
- **[⚡ Activitat 802: Activitat 1](act802.html)**
- **[⚡ Activitat 803](act803.html)**
- **[📓 Recull Complet d'Activitats (UD8)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD8: Bases de Dades No Relacionals (NoSQL) — MongoDB** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="MongoDB utilitza BSON (Binary JSON), que estén JSON amb tipus com ObjectId, Date o BinData.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En les bases de dades NoSQL documentals com MongoDB, quin format binari s'utilitza internament per a emmagatzemar els documents amb suport de tipus de dades estès?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) CSV delimitat per punt i coma.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) BSON (Binary JSON).</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) HTML4 transicional.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Taules relacionals planes.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="En MongoDB, les col·leccions agrupen documents JSON/BSON.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> A què equival una 'taula' i una 'fila/tupla' del model relacional dins de la terminologia de MongoDB?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) A una 'col·lecció' (collection) i un 'document' (document) respectivament.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) A un 'trigger' i una 'vista'.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) A un 'full de càlcul' i una 'macro'.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) A un 'arbre DTD' i un 'atribut XML'.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Si no s'especifica el camp _id en inserir un document, MongoDB genera automàticament un ObjectId únic.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En MongoDB, tot document emmagatzemat dins d'una col·lecció posseeix un camp clau <code>_id</code> que l'identifica de manera única.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="find|findone|db.collection.find" data-hint="És el mètode find (o findOne).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin mètode de <code>mongosh</code> s'utilitza sobre una col·lecció (<code>db.colleccio.____()</code>) per a cercar i recuperar documents que compleixen un filtre?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD8: Bases de Dades No Relacionals (NoSQL) — MongoDB**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD08" data-activity="ut08_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
