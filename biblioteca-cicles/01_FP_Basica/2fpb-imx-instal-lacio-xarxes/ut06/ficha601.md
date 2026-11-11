---
layout: default
title: "Fitxa 6.1 · Taller de Grimpat RJ-45 (T568A / T568B) i Rosetes IDC — Instalación y Mantenimiento de Redes para Transmisión de Datos (Networking Essentials)"
course_root: ".."
badge: "2º FPB · Instalación y Mantenimiento de Redes (IMX / NE) · UD6"
prev_url: "ut0602.html"
prev_label: "⬅️ 6.2 El mapa físic de la xarxa local: i"
next_url: "activitats.html"
next_label: "📓 Recull Complet d'Activitats (UD6) ➡️"
---

# Fitxa 6.1 · Taller de Grimpat RJ-45 (T568A / T568B) i Rosetes IDC

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progreso de esta sección:</strong> <span class="tracker-count">0 de 4 superados (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 puntos</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

## 1 · Codi de colors de les normes T568A i T568B

Completa la taula amb l'ordre exacte dels 8 pins del connector RJ-45 (vist amb la pestanya cap avall i els contactes metàl·lics cap amunt, d'esquerra a dreta del pin 1 al pin 8):

| Pin | Norma T568B (Estàndard en Europa) | Norma T568A |
| --- | --- | --- |
| **Pin 1** | Blanc - Taronja | Blanc - Verd |
| **Pin 2** | Taronja | Verd |
| **Pin 3** | Blanc - Verd | Blanc - Taronja |
| **Pin 4** | Blau | Blau |
| **Pin 5** | Blanc - Blau | Blanc - Blau |
| **Pin 6** | Verd | Taronja |
| **Pin 7** | Blanc - Marró | Blanc - Marró |
| **Pin 8** | Marró | Marró |

## 2 · Diagnòstic d'avaries amb el Tester de Xarxa

Explica què ha passat en el grimpat si en connectar un cable directe T568B als dos mòduls del tester observem:
1. El LED del **Pin 3** no s'encén en cap dels dos extrems (l'ordre fa 1, 2, _, 4, 5, 6, 7, 8).
2. En el mòdul principal s'encén l'ordre 1-2-3-4-5-6-7-8, però en el mòdul remot s'encén **1-2-6-4-5-3-7-8**.

<details markdown="1">
<summary>💡 Mostrar / Amagar el Solucionari de la Fitxa 6.1</summary>

1. **Pin 3 apagat:** Hi ha un **circuit obert** en el fil 3 (Blanc-Verd): el fil no ha arribat al fons del connector RJ-45 abans de prémer la grimpadora o s'ha tallat en pelar la coberta.
2. **Intercanvi 3 i 6:** Els fils Blanc-Verd (3) i Verd (6) s'han creuat per error en un dels dos connectors. Cal tallar el connector defectuós i tornar a grimpar-lo.

</details>


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Fitxa 6.1 · Taller de Grimpat RJ-45 (T568A / T568B) i Rosetes IDC** superant aquests 4 reptes gamificats (+25 puntos cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="En la norma T568B, la seqüència comença amb Blanc-Taronja (1) i Taronja (2).">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En grimpar un connector RJ-45 seguint la normativa europea habitual T568B, quin parell de colors va en els pins 1 i 2?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Pin 1: Blanc-Taronja i Pin 2: Taronja.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Pin 1: Marró i Pin 2: Blanc-Marró.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Pin 1: Blau i Pin 2: Roig.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Pin 1: Negre i Pin 2: Groc.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="L'eina d'impacte (tipus Krone/110) insereix el fil al contacte IDC i talla el sobrant automàticament.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina eina s'utilitza per a inserir i tallar a pressió els fils de coure en els contactes IDC d'una roseta RJ-45 o de la part posterior d'un Patch Panel?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Eina d'impacte o inserció Krone / IDC.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Soldador d'estany calent.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Martell de fuster.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Serra de calar.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Un cable directe aplica la mateixa norma (T568B-T568B) en ambdues puntes.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Un cable directe (straight-through) té exactament la mateixa norma de colors (per exemple, T568B en tots dos extrems) i s'usa per a connectar un PC a una roseta o a un Switch.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="tester|comprovador|tester de xarxa|certificador" data-hint="S'anomena tester o comprovador de cables de xarxa.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Com s'anomena l'aparell de comprovació (amb dos mòduls i 8 LEDs de l'1 al 8) que permet verificar la continuïtat i l'ordre dels pins d'un cable de xarxa?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Fitxa 6.1 · Taller de Grimpat RJ-45 (T568A / T568B) i Rosetes IDC**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de código i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 puntos XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 puntos · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="IMX" data-unit="UD06" data-activity="ficha601">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
