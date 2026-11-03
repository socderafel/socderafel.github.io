---
layout: default
title: "UD3: Full de Càlcul (LibreOffice Calc / Excel) — Ofimàtica i Arxiu de Documents"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD3"
---

# 📊 UD3: Full de Càlcul (LibreOffice Calc / Excel)

Benvingut/da a la **Unitat Didàctica 3** del mòdul d'**Ofimàtica i Arxiu de Documents (OAD)**. El full de càlcul és l'eina financera i operativa per excel·lència a les empreses. En aquesta unitat aprendràs a dominar la graella de cel·les de **LibreOffice Calc**, aplicaràs fórmules matemàtiques, referències absolutes (`$`), funcions estadístiques (`SUMA`, `MITJANA`, `MAX`, `MIN`), la potent condició lògica `SI` i la representació gràfica de resultats.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│               UD3: FULL DE CÀLCUL (LIBREOFFICE CALC / EXCEL)           │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ 📐 GRAELLA I DADES│ 🧮 FÓRMULES I FUNC│ 📈 GRÀFICS I ANÀLISI           │
│ • Files i columnes│ • Operadors + - * │ • Columnes / barres comparatives│
│ • Format de cel·la│ • Referències $A$1│ • Sectors / pastís proporcional│
│ • Dates i moneda €│ • SUMA, MITJANA,SI│ • Tendències temporals en línia│
└───────────────────┴───────────────────┴────────────────────────────────┘
```

---

### 📋 Continguts de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **3.1** | **Cel·les, files, columnes i formats de dades** | Graella, selecció de rangs (`A1:B10`), format de moneda `€`, decimals i dates. | [**Accedir al Tema 3.1 →**](./ut0301.html) |
| **3.2** | **Fórmules aritmètiques i referències ($)** | Operadors matemàtics, prioritat, referències relatives vs absolutes (`$A$1`). | [**Accedir al Tema 3.2 →**](./ut0302.html) |
| **3.3** | **Funcions: SUMA, MITJANA, MAX, MIN i CONTAR** | Sintaxi de funcions estàndard, càlcul d'estadístiques bàsiques de negoci. | [**Accedir al Tema 3.3 →**](./ut0303.html) |
| **3.4** | **La funció condicional SI (IF)** | Lògica condicional: prova lògica, valor si cert i valor si fals. | [**Accedir al Tema 3.4 →**](./ut0304.html) |
| **3.5** | **Creació i interpretació de gràfics** | Gràfics de columnes, barres, sectors circulars i línies amb llegenda i títol. | [**Accedir al Tema 3.5 →**](./ut0305.html) |

---

### 🛠️ Taller Pràctic: Full de Facturació i Control de Despeses

1. **Estructura de taula:** Crea les columnes: `Descripció`, `Quantitat`, `Preu Unitari`, `Subtotal`, `IVA 21%` i `Total`.
2. **Fórmules aritmètiques:** Calcula el subtotal multiplicant Quantitat per Preu Unitari (`=B2*C2`).
3. **Ús de referència absoluta ($):** Col·loca el tipus d'IVA (0,21) a la cel·la aïllada `H1`. Per calcular l'import d'IVA a cada fila utilitza `=D2*$H$1` de manera que en arrossegar la fórmula cap avall la cel·la de l'IVA no es moga!
4. **Resum estadístic:** Utilitza les funcions `=SUMA()`, `=MITJANA()`, `=MAX()` i `=MIN()` a la part inferior.
5. **Condició d'estat:** Afegeix una columna d'avís amb `=SI(E2>100; "Factura Alta"; "Normal")`.
6. **Gràfic de barres:** Selecciona els conceptes i els totals per generar un gràfic de barres net.

---

## 🎮 Avaluació Global de la Unitat (+100 punts)

<div class="interactive-progress-tracker">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
    <span class="tracker-count">0 de 4 reptes superats (0%)</span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div style="background:rgba(0,0,0,0.1); height:8px; border-radius:4px; overflow:hidden;">
    <div class="tracker-fill" style="width:0%; height:100%; background:#10b981; transition:width 0.3s ease;"></div>
  </div>
</div>

<div class="interactive-mcq" data-answer="B" data-hint="Totes les fórmules i funcions han de començar obligatòriament amb el signe igual (=).">
  <p class="quiz-question"><strong>Pregunta 1:</strong> Quin símbol ha d'anar obligatòriament al principi de qualsevol fórmula o funció a LibreOffice Calc?</p>
  <div class="mcq-option" data-val="A">A) Símbol més (+)</div>
  <div class="mcq-option" data-val="B">B) Signe igual (=)</div>
  <div class="mcq-option" data-val="C">C) Parèntesi obert (()</div>
  <div class="mcq-option" data-val="D">D) Guió mig (-)</div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="El símbol de dòlar bloqueja la fila i la columna evitant que canvien en arrossegar.">
  <p class="quiz-question"><strong>Pregunta 2:</strong> A la fórmula `=A2*$B$1`, la cel·la `$B$1` és una referència absoluta perquè porta el símbol `$`, per la qual cosa no canviarà en copiar la fórmula cap avall.</p>
  <button type="button" class="btn-vf" data-val="V">Vertader</button>
  <button type="button" class="btn-vf" data-val="F">Fals</button>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="C" data-hint="La funció MITJANA (AVERAGE) suma tots els valors i divideix pel recompte.">
  <p class="quiz-question"><strong>Pregunta 3:</strong> Quina funció calcula el valor promig d'un conjunt de cel·les (per exemple, les notes d'un grup)?</p>
  <div class="mcq-option" data-val="A">A) =SUMA(A1:A10)</div>
  <div class="mcq-option" data-val="B">B) =COMPTA(A1:A10)</div>
  <div class="mcq-option" data-val="C">C) =MITJANA(A1:A10)</div>
  <div class="mcq-option" data-val="D">D) =MAX(A1:A10)</div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-answer="7" data-hint="(10 + 4) dividit entre 2 = 14 / 2 = 7.">
  <p class="quiz-question"><strong>Pregunta 4:</strong> Quin és el resultat exacte de la fórmula `=(10 + 4) / 2` a Calc?</p>
  <input type="text" class="quiz-input" placeholder="Escriu el número">
  <button type="button" class="btn-quiz-check">Verifica</button>
  <div class="quiz-feedback"></div>
</div>

---

<div class="aules-delivery-card">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <h3 style="margin:0; font-size:1.1rem; color:var(--text-color);">📋 Lliurament Oficial del Quadern UD3 per a Aules</h3>
    <span class="aules-badge">Avaluació Final de la Unitat</span>
  </div>
  <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:14px;">Introdueix el teu nom complet per descarregar el PDF oficial de la Unitat Didàctica 3 amb totes les teues respostes i puntuació obtinguda:</p>
  <div style="display:flex; gap:10px; margin-bottom:12px;">
    <input type="text" class="student-name-input" placeholder="El teu Nom i Cognoms..." style="flex:1; padding:8px 12px; border:1px solid var(--border); border-radius:6px; font-size:0.9rem;">
    <button type="button" class="btn-generate-aules-pdf" style="background:#2563eb; color:#fff; border:none; padding:8px 16px; border-radius:6px; font-weight:700; cursor:pointer;">📄 Generar Informe Oficial en PDF</button>
  </div>
  <div class="aules-score-count" style="font-size:0.82rem; color:var(--text-muted);">Completa els reptes interactius per sumar punts a l'informe.</div>
</div>
