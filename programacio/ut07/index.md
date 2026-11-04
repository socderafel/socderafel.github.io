---
title: "UT7 — Accés a bases de dades"
unit: "7"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT07"
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

# 📘 UT7 — Accés a bases de dades

> **📌 Resultat d'Aprenentatge i Objectius:** Continguts oficials, exemples guiats, activitats pràctiques, reptes i traces d'execució de UT7 — Accés a bases de dades.

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **7.1** | **7.0 RA i Criteris d'avaluació** | [Obrir apartat ➡️](./ut07ras.html) |
| **7.2** | **7.1 Introducció a la persistència en bases de dades** | [Obrir apartat ➡️](./ut0701.html) |
| **7.3** | **7.2 Arquitectura i connectors JDBC** | [Obrir apartat ➡️](./ut0702.html) |
| **7.4** | **7.3 Connexió a bases de dades des de Java** | [Obrir apartat ➡️](./ut0703.html) |
| **7.5** | **7.4 ResultSet: Navegabilitat i concurrencia** | [Obrir apartat ➡️](./ut0704.html) |
| **7.6** | **7.5 Consultes de selecció (SELECT / executeQuery)** | [Obrir apartat ➡️](./ut0705.html) |
| **7.7** | **7.6 Modificació de registres (UPDATE)** | [Obrir apartat ➡️](./ut0706.html) |
| **7.8** | **7.7 Inserció de registres (INSERT)** | [Obrir apartat ➡️](./ut0707.html) |
| **7.9** | **7.8 Esborrat de registres (DELETE)** | [Obrir apartat ➡️](./ut0708.html) |
| **7.10** | **7.9 Sentències precompilades (PreparedStatement)** | [Obrir apartat ➡️](./ut0709.html) |
| **7.11** | **7.10 Treballar amb SQLite en Java** | [Obrir apartat ➡️](./ut0710.html) |
| **7.12** | **7.11 Patró de disseny DAO (Data Access Object)** | [Obrir apartat ➡️](./ut0711.html) |
| **7.13** | **7.12 Repàs global d'accés a dades** | [Obrir apartat ➡️](./ut0712.html) |
| **7.14** | **Activitats pràctiques UT7** | [Obrir apartat ➡️](./ut07actividades.html) |
| **7.15** | **Reptes de programació UT7** | [Obrir apartat ➡️](./ut07retos.html) |
| **7.16** | **Vídeos de reforç UT7 (Píndoles Informàtiques)** | [Obrir apartat ➡️](./ut07pi.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT7 — Accés a bases de dades** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Per què és fonamental utilitzar PreparedStatement amb paràmetres '?' en lloc de concatenar cadenes en Statement en accedir a bases de dades amb JDBC?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Perquè precompila la sentència SQL i protegeix l'aplicació contra atacs d'Injecció SQL (SQL Injection).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Perquè Statement no permet executar consultes SELECT.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Perquè PreparedStatement no necessita connexió a la base de dades.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin patró de disseny de programari separa completament la lògica de negoci de la lògica d'accés i persistència a la base de dades mitjançant classes i interfícies dedicades?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Patró Singleton d'impressió.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Recursivitat indirecta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Patró DAO (Data Access Object).</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En JDBC, el mètode executeQuery() s'utilitza per a consultes SELECT (retorna un ResultSet), mentre que executeUpdate() s'utilitza per a INSERT, UPDATE i DELETE.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="next" data-hint="Següent en anglès (4 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin mètode de l'objecte ResultSet s'invoca dins d'un bucle 'while' per a avançar el cursor a la següent fila de resultats?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT7 — Accés a bases de dades**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD07" data-activity="ut07_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
