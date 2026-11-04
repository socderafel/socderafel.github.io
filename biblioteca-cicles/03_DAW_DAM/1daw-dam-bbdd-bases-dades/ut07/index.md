---
title: "UD7: Programació de Bases de Dades — Procediments, Funcions, Triggers i Cursors — Bases de Dades"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UT07"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6"
next_url: "ut0700.html"
next_label: "📋 7.0 Proposta Didàctica: Programació de BBDD ➡️"
module: "BBDD"
---

# UD7: Programació de Bases de Dades — Procediments, Funcions, Triggers i Cursors

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 7** del mòdul de **Bases de Dades**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 7.0 Proposta Didàctica: Programació de BBDD](ut0700.html)**
1. **[7.1 Guions](ut0701.html)**
1. **[7.2 Variables](ut0702.html)**
1. **[7.3 Procediments emmagatzemats](ut0703.html)**
1. **[7.4 Sentències Prepared](ut0704.html)**
1. **[7.5 Control de fluxos](ut0705.html)**
1. **[7.6 Esdeveniments](ut0706.html)**
1. **[7.7 Triggers](ut0707.html)**
1. **[7.8 Cursors](ut0708.html)**
1. **[7.9 Funcions](ut0709.html)**
1. **[7.10 Gestió d'excepcions](ut0710.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 701: Procediments - CIRC](act701.html)**
- **[⚡ Activitat 702: Procediments amb paràmetres - CIRC](act702.html)**
- **[⚡ Activitat 703: Sentències Prepared - CIRC](act703.html)**
- **[⚡ Activitat 704: Fluxos de Control - CIRC](act704.html)**
- **[⚡ Activitat 705: Esdeveniments](act705.html)**
- **[⚡ Activitat 706: Triggers - CIRC](act706.html)**
- **[⚡ Activitat 707: Cursors - CIRC](act707.html)**
- **[⚡ Activitat 708: Funcions d'usuari - CIRC](act708.html)**
- **[⚡ Activitat 709: Excepcions - CIRC](act709.html)**
- **[📓 Recull Complet d'Activitats (UD7)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD7: Programació de Bases de Dades — Procediments, Funcions, Triggers i Cursors** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Les funcions retornen un valor escalar i s'usen en expressions; els procediments s'executen amb CALL.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En la programació de bases de dades (MySQL/MariaDB), quina diferència clau hi ha entre un <code>PROCEDURE</code> (procediment) i una <code>FUNCTION</code> (funció)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Una funció retorna obligatòriament un valor amb <code>RETURN</code> i pot invocar-se dins d'una expressió <code>SELECT</code>, mentre que un procediment s'invoca amb <code>CALL</code> i pot tenir paràmetres <code>IN</code>, <code>OUT</code> i <code>INOUT</code>.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Els procediments no poden contenir bucles ni condicionals <code>IF</code>.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Les funcions només s'executen en el navegador del client.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Els procediments s'esborren automàticament després de cada execució.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="OLD conté els valors anteriors a la modificació i NEW els nous valors que s'hi volen desar.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> En un disparador (<code>TRIGGER</code>) de tipus <code>BEFORE UPDATE</code>, quins pseudoregistres permeten accedir al valor antic i al nou valor d'una fila?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) FIRST i LAST</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) OLD i NEW</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) PRIOR i NEXT</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) START i END</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Els cursors es declaren (DECLARE), s'obrin (OPEN), es llig cada fila (FETCH) i es tanquen (CLOSE).">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Un cursor (<code>CURSOR</code>) en SQL permet recórrer i processar fila per fila el conjunt de resultats d'una consulta dins d'un procediment emmagatzemat.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="delimiter" data-hint="És la comanda DELIMITER.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina paraula clau s'utilitza en MySQL/MariaDB per a canviar temporalment el caràcter delimitador d'instruccions (per exemple a <code>$$</code> o <code>//</code>) en crear un procediment o trigger?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD7: Programació de Bases de Dades — Procediments, Funcions, Triggers i Cursors**):

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
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD07" data-activity="ut07_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
