---
title: "UD6: Consultes sobre Bases de Dades — SQL DQL (SELECT) — Bases de Dades"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UT06"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5"
next_url: "ut0600.html"
next_label: "📋 6.0 Proposta Didàctica: Consultes BBDD. (DQL) ➡️"
module: "BBDD"
---

# UD6: Consultes sobre Bases de Dades — SQL DQL (SELECT)

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 6** del mòdul de **Bases de Dades**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 6.0 Proposta Didàctica: Consultes BBDD. (DQL)](ut0600.html)**
1. **[6.1 Introducció. El llenguatge SQL](ut0601.html)**
1. **[6.2 Consultes Simples. SELECT](ut0602.html)**
1. **[6.3 Consultes Simples. Tipus d'operadors](ut0603.html)**
1. **[6.4 Consultes Simples. Camps calculats, ordenades i capçalera](ut0604.html)**
1. **[6.5 Consultes complexes. Resum o agregat](ut0605.html)**
1. **[6.6 Consultes complexes. Subconsultes](ut0606.html)**
1. **[6.7 Consultes complexes. Múltiples seleccions](ut0607.html)**
1. **[6.8 Consultes complexes. Consultes multitaula](ut0608.html)**
1. **[6.9 Optimització de consultes](ut0609.html)**
1. **[6.10 Vistes](ut0610.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 601: 1. Consultes simples](act601.html)**
- **[⚡ Activitat 602: 1. Consultes simples](act602.html)**
- **[⚡ Activitat 603: Consultes a Jardineria 2](act603.html)**
- **[⚡ Activitat 604: 1. Base de dades: Empresa](act604.html)**
- **[⚡ Activitat 605: Optimització de consultes](act605.html)**
- **[📓 Recull Complet d'Activitats (UD6)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD6: Consultes sobre Bases de Dades — SQL DQL (SELECT)** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="En SQL el valor NULL no es compara amb '=', sinó amb els operadors IS NULL i IS NOT NULL.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quin operador SQL s'utilitza en la clàusula <code>WHERE</code> per a comprovar si un camp té valor nul (buit)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) = NULL</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) IS NULL</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) LIKE NULL</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) == NULL</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="SELECT DISTINCT retorna únicament les combinacions de valors úniques.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina paraula clau col·locada just després de <code>SELECT</code> elimina les files duplicades del conjunt de resultats?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) DISTINCT</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) ALL</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) BETWEEN</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) LIMIT</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Per exemple, LIKE 'A%' busca textos que comencen per A.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En l'operador <code>LIKE</code>, el caràcter comodí <code>%</code> representa qualsevol cadena de zero, un o més caràcters, mentre que <code>_</code> representa un únic caràcter.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="avg|avg()" data-hint="És la funció AVG().">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina funció d'agregació SQL calcula la mitjana aritmètica dels valors numèrics d'una columna?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD6: Consultes sobre Bases de Dades — SQL DQL (SELECT)**):

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
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD06" data-activity="ut06_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
