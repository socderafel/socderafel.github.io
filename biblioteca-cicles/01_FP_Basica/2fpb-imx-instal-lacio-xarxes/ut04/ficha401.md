---
layout: default
title: "Fitxa 4.1 · Subsistemes i Elements del Cablejat Estructurat — Instalación y Mantenimiento de Redes para Transmisión de Datos (Networking Essentials)"
course_root: ".."
badge: "2º FPB · Instalación y Mantenimiento de Redes (IMX / NE) · UD4"
prev_url: "ut0401.html"
prev_label: "⬅️ 4.1 Elements d'una xarxa de transmissi"
next_url: "activitats.html"
next_label: "📓 Recull Complet d'Activitats (UD4) ➡️"
---

# Fitxa 4.1 · Subsistemes i Elements del Cablejat Estructurat

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progreso de esta sección:</strong> <span class="tracker-count">0 de 4 superados (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 puntos</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

## 1 · Subsistemes de la norma ANSI/TIA/EIA-568

Identifica sobre el plànol d'un edifici d'oficines els elements i subsistemes del cablejat estructurat:

| Subsistema / Element | Funció en la instal·lació de l'edifici |
| --- | --- |
| **Àrea de Treball (Work Area)** | Lloc on es troba l'equip de l'usuari; connecta el PC a la roseta RJ-45 amb un latiguillo d'usuari (màx. 3-5 m). |
| **Cablejat Horitzontal** | Va des de la roseta de l'àrea de treball fins al Patch Panel de l'armari de planta (IDF). Longitud màxima fixa: **90 m**. |
| **Armari de Telecomunicacions (IDF)** | Concentra el cablejat horitzontal d'una planta i l'enllaça amb el backbone vertical. |
| **Cablejat Vertical (Backbone)** | Interconnecta els armaris de planta (IDF) amb el repartidor principal d'edifici (MDF). |
| **Sala d'Equips i Escomesa (MDF)** | Allotja els servidors centrals, el router principal i el punt de terminació de xarxa de l'operadora. |

## 2 · Càlcul de longituds i distàncies màximes

Si una oficina es troba a **78 metres** de recorregut per canaleta des de l'armari rack de planta (IDF), compleix la normativa ANSI/TIA/EIA-568 utilitzant un latiguillo de **2 m** en el rack i un latiguillo de **3 m** en la taula de l'usuari?

<details markdown="1">
<summary>💡 Mostrar / Amagar el Solucionari de la Fitxa 4.1</summary>

- **Sí que compleix la normativa:** L'enllaç permanent horitzontal mesura **78 m** (inferior al límit màxim de **90 m**), i la suma dels latiguillos és $2 + 3 = 5\text{ m}$ (inferior al límit de **10 m**). El canal complet suma **83 m** (inferior als **100 m** màxims).

</details>


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Fitxa 4.1 · Subsistemes i Elements del Cablejat Estructurat** superant aquests 4 reptes gamificats (+25 puntos cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="L'estàndard fixa 90 m màxim per al cablejat fix horitzontal i 10 m per als latiguillos de parcheig (100 m totals).">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En un sistema de cablejat estructurat segons la normativa ANSI/TIA/EIA-568, quina és la longitud màxima permesa per al canal horitzontal complet (90 m d'enllaç permanent + 10 m de latiguillos)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) 100 metres en total.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) 5.000 metres.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) 2 metres.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) 500 metres.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="El MDF és el repartidor principal, mentre que els IDF són els repartidors intermedis de planta.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Com s'anomena el distribuïdor o repartidor principal de l'edifici on es concentra el nucli de la xarxa i la connexió amb l'exterior?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) MDF (Main Distribution Frame) o Repartidor Principal d'Edifici.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Roseta d'escriptori individual.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Canaleta adhesiva de plàstic.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Grapa de paret.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="El subsistema vertical (backbone) uneix els diferents armaris de telecomunicacions de l'edifici.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El cablejat vertical o de 'backbone' és l'encarregat d'interconnectar el repartidor principal (MDF) amb els armaris repartidors de cada planta (IDF).</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="90|90m|90 metres" data-hint="Són 90 metres d'enllaç fix (+ 10 m de latiguillos = 100 m).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quants metres com a màxim pot mesurar l'enllaç fix horitzontal (sense comptar els 10 m dels latiguillos) segons la norma de cablejat estructurat?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Fitxa 4.1 · Subsistemes i Elements del Cablejat Estructurat**):

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
    <button type="button" class="btn-aules-dl" data-module="IMX" data-unit="UD04" data-activity="ficha401">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
