---
layout: default
title: "UD5: JavaScript Avançat — Manipulació del DOM, Esdeveniments, Formularis i Fetch API — Llenguatges de Marques i Sistemes de Gestió d'Informació"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Llenguatges de Marques (LMSGI) · UD5"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4"
next_url: "ut0500.html"
next_label: "📋 5.0 Proposta Didàctica: Manipulació de documents web JavaScript - DOM ➡️"
---

# UD5: JavaScript Avançat — Manipulació del DOM, Esdeveniments, Formularis i Fetch API

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 5** del mòdul de **Llenguatges de Marques i Sistemes de Gestió d'Informació**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 5.0 Proposta Didàctica: Manipulació de documents web JavaScript - DOM](ut0500.html)**
1. **[5.1 Introducció al DOM](ut0510.html)**
1. **[5.2 Accés al DOM](ut0520.html)**
1. **[5.3 Modificar el DOM](ut0530.html)**
1. **[5.4 Crear i Eliminar en el DOM](ut0540.html)**
1. **[5.5 Modificar estils i CSS del DOM amb JavaScript.](ut0550.html)**
1. **[5.6.1 Asincronia en Javascript](ut0561.html)**
1. **[5.6.2 Callbacks](ut0562.html)**
1. **[5.6.3 Promeses](ut0563.html)**
1. **[5.6.4 Async/await](ut0564.html)**
1. **[5.6.5 Ús de fetch](ut0565.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 501: 1 Introducció al DOM](act501.html)**
- **[⚡ Activitat 502: Bloc 1. Callback](act502.html)**
- **[📓 Recull Complet d'Activitats (UD5)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD5: JavaScript Avançat — Manipulació del DOM, Esdeveniments, Formularis i Fetch API** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="document.querySelector('.classe #id') utilitza la sintaxi de selectors CSS.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quin mètode de l'objecte <code>document</code> (DOM) permet seleccionar el primer element HTML que coincidisca amb qualsevol selector CSS vàlid?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) document.getElementsByTagName()</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) document.querySelector()</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) window.alert()</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) console.log()</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="response.json() retorna una Promesa que es resol amb l'objecte JavaScript resultant de parsejar el JSON.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> En consumir una API REST amb <code>fetch()</code> en JavaScript utilitzant <code>async / await</code>, per a què serveix <code>await resposta.json()</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Per a tancar la connexió de xarxa sense llegir les dades.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Per a llegir el cos de la resposta HTTP i convertir-lo (parsejar-lo) de text JSON a un objecte o array natiu de JavaScript.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Per a esborrar el DOM de la pàgina.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Per a recarregar la pestanya del navegador.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="addEventListener és la forma estàndard i recomanada de gestionar esdeveniments en el DOM.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El mètode <code>element.addEventListener('click', funcio)</code> permet associar múltiples manejadors d'esdeveniments a un mateix element del DOM sense sobreescriure'ls.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="dom" data-hint="Són les sigles DOM.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quines són les sigles de la interfície que representa el document HTML com un arbre d'objectes manipulable des de JavaScript (Document Object Model)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD5: JavaScript Avançat — Manipulació del DOM, Esdeveniments, Formularis i Fetch API**):

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
    <button type="button" class="btn-aules-dl" data-module="LMSGI" data-unit="UD05" data-activity="ut05_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
