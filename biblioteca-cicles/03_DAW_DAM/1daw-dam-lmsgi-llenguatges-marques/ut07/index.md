---
layout: default
title: "UD7: Conversió i Adaptació de Documents — XPath, JSONPath, XSLT i RSS/Atom — Llenguatges de Marques i Sistemes de Gestió d'Informació"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Llenguatges de Marques (LMSGI) · UD7"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6"
next_url: "ut0700.html"
next_label: "📋 7.0 Proposta Didàctica: Conversió de documents ➡️"
---

# UD7: Conversió i Adaptació de Documents — XPath, JSONPath, XSLT i RSS/Atom

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

Benvingut/da a la **Unitat Didàctica 7** del mòdul de **Llenguatges de Marques i Sistemes de Gestió d'Informació**. A continuació trobaràs tots els apartats teòrics, esquemes conceptuals, exemples de codi i el llistat complet d'activitats pràctiques i fitxes de treball traduïts al valencià i amb gamificació interactiva per al seu lliurament en **Aules**.

---

## 📚 Apartats Teòrics i Continguts de la Unitat

1. **[📋 7.0 Proposta Didàctica: Conversió de documents](ut0700.html)**
1. **[7.1 Introducció a la conversió de documents](ut0701.html)**
1. **[7.2 Tecnologies de processament de documents](ut0702.html)**
1. **[7.3 Sintaxi de localització de dades: XPath i JSONPath](ut0703.html)**
1. **[7.4 Sintaxi i regles de les especificacions de conversió](ut0704.html)**
1. **[7.5 Creació d'especificacions de conversió](ut0705.html)**
1. **[7.6 Eines i casos pràctics de conversió](ut0706.html)**

---

## 🛠️ Activitats Pràctiques i Fitxes de Treball

- **[⚡ Activitat 701: Activitat 1 - Anàlisi de casos d'ús](act701.html)**
- **[📓 Recull Complet d'Activitats (UD7)](activitats.html)**


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UD7: Conversió i Adaptació de Documents — XPath, JSONPath, XSLT i RSS/Atom** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="En XPath, el símbol '@' fa referència a un atribut i els claudàtors '[...]' defineixen un filtre o predicat.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En una expressió XPath com <code>/biblioteca/llibre[@categoria='web']/titol</code>, què selecciona el predicat <code>[@categoria='web']</code>?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Selecciona un element fill anomenat categoria.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Filtra únicament els elements <code>&lt;llibre&gt;</code> que tenen un atribut <code>categoria</code> amb el valor <code>'web'</code>.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Esborra tots els llibres de la biblioteca.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Selecciona el peu de pàgina del document.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="<xsl:for-each> recorre tots els nodes que coincideixen amb l'expressió XPath de l'atribut select.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> En un full d'estils XSLT, quina instrucció s'utilitza per a iterar sobre un conjunt de nodes XML seleccionats per una expressió XPath?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) &lt;xsl:for-each select='...'&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) &lt;xsl:variable&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) &lt;xsl:output&gt;</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) &lt;xsl:import&gt;</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="XPath s'aplica sobre arbres XML i JSONPath aplica la mateixa filosofia sobre objectes i arrays JSON.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> XPath i JSONPath permeten navegar i extreure informació d'estructures jeràrquiques XML i JSON respectivament mitjançant expressions de ruta.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="xslt|xsl" data-hint="Són les sigles XSLT.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina tecnologia de l'ecosistema XML (Extensible Stylesheet Language Transformations) permet transformar un document XML en un document HTML, text o un altre XML?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UD7: Conversió i Adaptació de Documents — XPath, JSONPath, XSLT i RSS/Atom**):

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
    <button type="button" class="btn-aules-dl" data-module="LMSGI" data-unit="UD07" data-activity="ut07_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
