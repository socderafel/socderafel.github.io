---
title: "7.0 RA i Criteris d'avaluació"
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

# 7.0 RA i Criteris d'avaluació

| Criteri d'avaluació | Apartat | Bloc d'activitats |
| --- | --- | --- |
| a) S'han identificat les característiques de les bases de dades orientades a objectes. | 7.1 Introducció |  |
| b) S'ha analitzat la seua aplicació en el desenvolupament d'aplicacions mitjançant llenguatges orientats a objectes. | 7.1 Introducció | Bloc 7.0 |
| c) Es han instal·lat sistemes gestors de bases de dades orientades a objectes. | 7.2 JDBC 7.10 Treballar amb Sqlite |  |
| d) S'han classificat i analitzat els distints mètodes suportats pels sistemes gestors per a la gestió de la informació emmagatzemada. | 7.4 Navegabilitat i concurrencia |  |
| e) S'han creat bases de dades i les estructures necessàries per a l'emmagatzematge d'objectes. | 7.10 Treballar amb Sqlite 7.11 DAO |  |
| f) Es han programado aplicacions que almacenen objectes en les bases de dades creades. | 7.11 DAO | Bloc 7.1 |
| g) S'han realitzat programes per a recuperar, actualitzar i eliminar objectes de les bases de dades. | 7.11 DAO | Bloc 7.1 |
| h) S'han realitzat programes per a emmagatzemar i gestionar tipus de dades estructurats, compostos i relacionats. | 7.11 DAO | Bloc 7.1 |

# RA 9 - Gestiona informació emmagatzemada en bases de dades mantenint la integritat i consistència de les dades.

| Criteri d'avaluació | Apartat | Bloc d'activitats |
| --- | --- | --- |
| a) S'han identificat les característiques i mètodes d'accés a sistemes gestors de bases de dades. | 7.2 JDBC 7.3 Accés a BBDD | Bloc 7.2 Bloc 7.3 Bloc 7.7 |
| b) Es han programado connexions amb bases de dades. | 7.3 Accés a BBDD | Bloc 7.2 Bloc 7.3 Bloc 7.7 |
| c) Es ha escrit un codi per a emmagatzemar informació en bases de dades. | 7.7 Inserció (insert) 7.9 Sentències predefinides | Bloc 7.2 Bloc 7.3 Bloc 7.7 |
| d) S'han creat programes per a recuperar i mostrar informació emmagatzemada en bases de dades. | 7.5 Consultes (Query) | Bloc 7.2 Bloc 7.3 Bloc 7.7 |
| e) Es han efectuado esborrats i modificacions sobre la informació emmagatzemada. | 7.6 Modificació (update) 7.8 Esborrat (delete) | Bloc 7.5 Bloc 7.7 |
| f) S'han creat aplicacions que muestren la informació emmagatzemada en bases de dades. | Al llarg de tota la UT | Bloc 7.6 Bloc 7.7 |
| g) S'han creat aplicacions per a gestionar la informació present en bases de dades. | Al llarg de tota la UT | Bloc 7.7 |



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **7.0 RA i Criteris d'avaluació** superant aquests 4 reptes gamificats (+25 punts cadascun):

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

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**7.0 RA i Criteris d'avaluació**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD07" data-activity="ut07ras">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

