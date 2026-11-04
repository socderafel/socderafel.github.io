---
title: "UD4: Disseny Físic — Llenguatge SQL: DDL i DCL — Bases de Dades"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UT04"
prev_url: "../ut03/index.html"
prev_label: "⬅️ UD3"
next_url: "ut0400.html"
next_label: "📋 4.0 Proposta Didàctica: Disseny Físic. Model Físic. (DDL i DCL) ➡️"
module: "BBDD"
---

# UD4: Disseny Físic — Llenguatge SQL: DDL i DCL

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 4** del mòdul de **Bases de Dades**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 4.0 Proposta Didàctica: Disseny Físic. Model Físic. (DDL i DCL)](ut0400.html)**
1. **[4.1 Introducció](ut0401.html)**
1. **[4.2 Emmagatzematge de la informació](ut0402.html)**
1. **[4.3 Tipus de dades (Dominis)](ut0403.html)**
1. **[4.4 DDL (Data Definition Language)](ut0404.html)**
1. **[4.5 DCL (Data Control Language)](ut0405.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 401](act401.html)**
- **[⚡ Activitat 402: Disseny físic - Jardineria](act402.html)**
- **[⚡ Activitat 403: Disseny físic - Universitat](act403.html)**
- **[⚡ Activitat 404: Llenguatge de Control de Dades (DCL)](act404.html)**
- **[⚡ Activitat 405: Disseny físic - Películas](act405.html)**
- **[⚡ Activitat 406: Disseny físic - Clients](act406.html)**
- **[📓 Recull Complet d'Activitats (UD4)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD4: Disseny Físic — Llenguatge SQL: DDL i DCL** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="GRANT concedeix privilegis i REVOKE els retira.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina instrucció del subllenguatge DCL permet atorgar permisos d'accés (com <code>SELECT</code> o <code>INSERT</code>) a un usuari sobre una taula?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) GRANT</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) REVOKE</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) COMMIT</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) CHECK</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="La restricció CHECK valida que els valors inserits o modificats complisquen una expressió lògica.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina restricció SQL s'utilitza per a validar que el valor d'una columna complisca una condició booleana (per exemple <code>preu &gt; 0</code>)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) DEFAULT</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) CHECK</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) AUTO_INCREMENT</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) INDEX</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Per exemple, utf8mb4_spanish_ci és insensible a majúscules (case-insensitive) i ordena segons l'alfabet.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En MySQL/MariaDB, la col·lació (<code>COLLATE</code>) determina les regles d'ordenació alfabètica i si les comparacions de text distingeixen majúscules o accents.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="create table" data-hint="És la sentència CREATE TABLE.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina sentència SQL DDL permet crear una taula nova en la base de dades?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD4: Disseny Físic — Llenguatge SQL: DDL i DCL**):

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
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD04" data-activity="ut04_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
