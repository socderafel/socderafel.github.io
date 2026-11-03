---
layout: default
title: "UD2: Medis de Transmissió: Cablejat de Parell Trenat — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD2"
next_url: "ut0201.html"
next_label: "2.1 ➡️"
---

# UD2: Medis de Transmissió: Cablejat de Parell Trenat

Benvingut/da a la **Unitat Didàctica 2** del mòdul d'Instal·lació i Manteniment de Xarxes. El cablejat de coure de parell trenat és la columna vertebral de qualsevol xarxa d'àrea local. En aquesta unitat aprendràs les diferents categories de cable, la tècnica professional de conectoritzat de terminals RJ-45 amb la norma T568B, el maneig de les eines del taller i el diagnòstic d'avaries amb el comprovador de xarxa.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-c-utp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-c-col" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#ea580c" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-c-ein" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-c-tst" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#9333ea" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">CABLEJAT DE PARELL TRENAT: CATEGORIES, CODIS T568A/B I CONECTORITZAT</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Infraestructura de coure, crimpat professional RJ45, eina d'impacte i verificació de continuïtat</text>

  <!-- Bloc 1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-c-utp)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔌</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tipus de Cable</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Blindatge i Coberta</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• UTP: Sense blindatge</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• FTP / STP: Apantallat</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Cat 6 (250 MHz - 1Gbps)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Coberta LSZH lliure d'halògens</text>
  </g>

  <!-- Bloc 2 -->
  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-c-col)" stroke="#f97316" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f97316" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f97316" font-size="14" font-weight="bold">🎨</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Codis de Color</text>
    <text x="15" y="62" fill="#f97316" font-size="11" font-weight="600">Norma TIA-568</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• T568B: Estàndard Espanya</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 1-BT, 2-T, 3-BV, 4-Bl</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 5-BBl, 6-V, 7-BM, 8-M</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Auto-MDIX als switches</text>
  </g>

  <!-- Bloc 3 -->
  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-c-ein)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🛠️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Eines de Taller</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Equipament Tècnic</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Pelacables rotatiu</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Grimpadora RJ45 (8P)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Punxadora d'impacte Krone</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Alicates de tall diagonal</text>
  </g>

  <!-- Bloc 4 -->
  <g transform="translate(655, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-c-tst)" stroke="#a855f7" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#a855f7" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#a855f7" font-size="14" font-weight="bold">🔍</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Diagnòstic</text>
    <text x="15" y="62" fill="#a855f7" font-size="11" font-weight="600">Tester de Continuïtat</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 8 LEDs correlatius</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Circuit obert (LED apagat)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Curtcircuit (dos encesos)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Parells creuats (desordre)</text>
  </g>
</svg>
</div>

---

## Apartats de la Unitat Didàctica

1. [**2.1 Tipus de cables de parell trenat i categories**](ut0201.html)
   - UTP, FTP, STP, categories Cat 5e a Cat 8, diàmetre, radi de curvatura i cobertes LSZH contra incendis.
2. [**2.2 Connectors RJ45 i codis de colors T568A i T568B**](ut0202.html)
   - Els 8 pins del connector RJ45, la combinació de colors T568B, cables directes vs creuats i tecnologia Auto-MDI/MDIX.
3. [**2.3 Eines de taller per a cablejat de dades**](ut0203.html)
   - Pelacables rotatiu, grimpadora, punxadora d'impacte Krone per a Keystone/Patch Panel i comprovador tester.
4. [**2.4 Pràctica pas a pas: Construcció d'un cable directe T568B**](ut0204.html)
   - Guia de taller pas a pas per tallar, pelar, ordenar, anivellar, inserir i crimpar amb precisió.
5. [**2.5 Quadern de Taller: Diagnòstic de Fallades i Fitxes 2.01 i 2.02**](ut0205.html)
   - Detecció d'avaries amb el tester (circuit obert, curtcircuit, parells creuats), fitxes de taller interactives i comprovant per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u2_idx_q1" data-answer="T568B|568B" data-hint="La norma estàndard comença per Blanc-Taronja i Taronja.">
  <div class="quiz-question">🎨 Quin és el codi de colors estàndard que utilitzem en la majoria d'instal·lacions a la Comunitat Valenciana?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu el codi...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="imx_u2_idx_q2" data-answer="B" data-hint="Els 8 pins metàl·lics han de fer contacte amb cadascun dels huit conductors de coure.">
  <div class="mcq-question">🔌 Quants pins de contacte elèctric té el connector mascle RJ-45?</div>
  <div class="mcq-options">
    <button type="button" class="mcq-opt" data-opt="A">A) 4 pins</button>
    <button type="button" class="mcq-opt" data-opt="B">B) 8 pins</button>
    <button type="button" class="mcq-opt" data-opt="C">C) 16 pins</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar la fabricació del cable i els reptes de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
  <div class="aules-student-field">
    <label for="aules-student-name">Nom i Cognoms de l'alumne/a:</label>
    <input type="text" id="aules-student-name" placeholder="Ex: Pere Martí Soler">
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">Calculant resultats dels reptes...</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-copy">📋 Copiar Resum per a Aules</button>
    <button type="button" class="btn-aules-dl">📄 Descarregar Comprovant (.pdf)</button>
  </div>
  <div class="aules-toast"></div>
</div>
