---
title: "UD5: Manipulació de Dades i Transaccions — SQL DML i TCL — Bases de Dades"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UT05"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4"
next_url: "ut0500.html"
next_label: "📋 5.0 Proposta Didàctica: Tractament de dades (DML i TCL) ➡️"
module: "BBDD"
---

# UD5: Manipulació de Dades i Transaccions — SQL DML i TCL

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 5** del mòdul de **Bases de Dades**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 5.0 Proposta Didàctica: Tractament de dades (DML i TCL)](ut0500.html)**
1. **[5.1 Introducció al SQL. DML](ut0501.html)**
1. **[5.2 Creació de registres. INSERT](ut0502.html)**
1. **[5.3 Esborrat de registres. DELETE](ut0503.html)**
1. **[5.4 Modificació de registres. UPDATE](ut0504.html)**
1. **[5.5 Transaccions (TCL)](ut0505.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 501: Gestió de dades - Jardineria](act501.html)**
- **[⚡ Activitat 502: Hospitals](act502.html)**
- **[⚡ Activitat 503: Botiga](act503.html)**
- **[⚡ Activitat 504: Transaccions](act504.html)**
- **[⚡ Activitat 505: Activitat de classe: botiga](act505.html)**
- **[📓 Recull Complet d'Activitats (UD5)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD5: Manipulació de Dades i Transaccions — SQL DML i TCL** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="Sense la clàusula WHERE, l'operació DML afecta tots els registres de la taula!">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Què passa si executem una sentència <code>UPDATE</code> o <code>DELETE</code> en SQL sense incloure la clàusula <code>WHERE</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El servidor SQL mostra un error de sintaxi i no fa res.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) S'actualitzen o s'esborren TOTES les files de la taula afectada.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Només es modifica la primera fila de la taula.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Es crea automàticament una còpia de seguretat al núvol.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="ROLLBACK reverteix les operacions pendents de la transacció actual.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> En el control de transaccions (TCL), quina instrucció desfà tots els canvis realitzats des de l'inici de la transacció o fins a un punt de salvat (<code>SAVEPOINT</code>)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) COMMIT</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) ROLLBACK</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) TRUNCATE</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) REVOKE</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="ACID garanteix que les transaccions siguen fiables i segures davant fallades o accessos concurrents.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Les propietats ACID d'una transacció fan referència a Atomicitat, Consistència, Aïllament (Isolation) i Durabilitat.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="commit|commit;" data-hint="És la sentència COMMIT.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina sentència SQL TCL confirma de manera definitiva i permanent els canvis realitzats durant una transacció?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD5: Manipulació de Dades i Transaccions — SQL DML i TCL**):

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
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD05" data-activity="ut05_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
