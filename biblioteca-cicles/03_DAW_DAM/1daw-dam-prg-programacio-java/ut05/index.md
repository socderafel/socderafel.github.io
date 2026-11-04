---
title: "UT5 — Composició, Herència i Polimorfisme"
unit: "5"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT05"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# 📘 UT5 — Composició, Herència i Polimorfisme

> **📌 Resultat d'Aprenentatge i Objectius:** Continguts oficials, exemples guiats, activitats pràctiques, reptes i traces d'execució de UT5 — Composició, Herència i Polimorfisme.

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **5.1** | **5.0 RA i Criteris d'avaluació** | [Obrir apartat ➡️](./ut05ras.html) |
| **5.2** | **5.1 Relacions entre classes (Associació, Agregació, Herència)** | [Obrir apartat ➡️](./ut0501.html) |
| **5.3** | **5.2 Composició de classes** | [Obrir apartat ➡️](./ut0502.html) |
| **5.4** | **5.3 Herència i jerarquías de classes (extends, super)** | [Obrir apartat ➡️](./ut0503.html) |
| **5.5** | **5.4 Classes i mètodes abstractes (abstract)** | [Obrir apartat ➡️](./ut0504.html) |
| **5.6** | **5.5 Interfícies (interface, implements)** | [Obrir apartat ➡️](./ut0505.html) |
| **5.7** | **5.6 Polimorfisme i lligadura dinàmica** | [Obrir apartat ➡️](./ut0506.html) |
| **5.8** | **5.7 Gestió avançada d'excepcions i excepcions personalitzades** | [Obrir apartat ➡️](./ut0507.html) |
| **5.9** | **Activitats pràctiques UT5** | [Obrir apartat ➡️](./ut05actividades.html) |
| **5.10** | **Reptes de programació UT5** | [Obrir apartat ➡️](./ut05retos.html) |
| **5.11** | **Simulacre pràctic UT5** | [Obrir apartat ➡️](./ut05acSimulacro.html) |
| **5.12** | **Vídeos de reforç UT5 (Píndoles Informàtiques)** | [Obrir apartat ➡️](./ut05pi.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT5 — Composició, Herència i Polimorfisme** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina paraula clau s'utilitza en Java perquè una subclasse herete els atributs i mètodes d'una superclasse, i quina per a implementar una interfície?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) 'extends' per a heretar d'una classe i 'implements' per a implementar una interfície.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) 'implements' per a heretar d'una classe i 'extends' per a una interfície.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) 'inherits' i 'uses'.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina característica defineix una classe abstracta ('abstract class') en Java?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) No pot tindre cap atribut ni constructor.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Tots els seus mètodes han de ser privats i estàtics.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) No es pot instanciar directament amb 'new' i pot contindre tant mètodes abstractes (sense cos) com mètodes implementats.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El polimorfisme permet que una variable de referència del tipus de la superclasse o interfície apunte a objectes de qualsevol de les seues subclasses i execute el mètode sobreescrit (@Override) en temps d'execució.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="super" data-hint="Fa referència a la superclasse (5 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina paraula clau s'utilitza en el constructor d'una subclasse per a invocar el constructor de la seua classe pare?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT5 — Composició, Herència i Polimorfisme**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD05" data-activity="ut05_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
