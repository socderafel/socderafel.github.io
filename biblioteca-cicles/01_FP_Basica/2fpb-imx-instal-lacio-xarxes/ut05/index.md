---
layout: default
title: "UD5: Cablejat Estructurat i Infraestructura Física — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD5"
next_url: "ut0501.html"
next_label: "5.1 ➡️"
---

# UD5: Cablejat Estructurat i Infraestructura Física

Benvingut/da a la **Unitat Didàctica 5** del mòdul d'Instal·lació i Manteniment de Xarxes. Aquesta unitat és el cor pràctic del perfil professional d'FP Bàsica en Informàtica i Comunicacions. Aprendràs la normativa de **cablejat estructurat**, el disseny d'**armaris rack de 19 polzades**, el muntatge de **canaletes i safates metàl·liques**, la selecció de **tacs i fixacions mecàniques** segons el tipus de paret, i el conectoritzat professional de **rosetes Keystone i panells de pegat**.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-e-est" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-e-rck" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-e-can" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-e-fix" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">CABLEJAT ESTRUCTURAT: SUBSISTEMES, ARMARIS RACK 19", CANALETES I FIXACIONS</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Subsistemes TIA-568, unitats U, safates Cabofil, rosetes Keystone Cat 6 i caragols M6 amb gàbia</text>

  <!-- Bloc 1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-e-est)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Subsistemes</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Norma TIA/EIA-568</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• MDF (Edifici) / IDF (Planta)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Troncal Backbone vertical</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Horitzontal: màxim 90 m</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Àrea de treball (5 m patch)</text>
  </g>

  <!-- Bloc 2 -->
  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-e-rck)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🗄️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Armari Rack 19"</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Unitats d'Alçada</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1U = 44,45 mm (1,75")</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Murals: 6U, 9U, 12U</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Patch Panel 24 ports</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• PDU, guies i bateries SAI</text>
  </g>

  <!-- Bloc 3 -->
  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-e-can)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🧱</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Canalitzacions</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Conducció i Caixes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Canaleta PVC paret/sòl</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Safata reixa Cabofil</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Rosetes Keystone Cat 6</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Separació 20 cm elèctrica</text>
  </g>

  <!-- Bloc 4 -->
  <g transform="translate(655, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-e-fix)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔩</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fixacions</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Tacs i Cargoleria</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Tacs niló, pladur i metàl·lics</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Femella gàbia M6 per a rack</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bridetes de velcro tèxtils</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• No aixafar els cables!</text>
  </g>
</svg>
</div>

---

## Apartats de la Unitat Didàctica

1. [**5.1 Concepte i subsistemes de cablejat estructurat**](ut0501.html)
   - Normativa TIA/EIA-568, els 6 subsistemes (MDF, IDF, Backbone, cablejat horitzontal màxim 90m i àrea de treball).
2. [**5.2 L'armari de telecomunicacions (Rack de 19 polzades) i accessoris**](ut0502.html)
   - L'estàndard de 19", la unitat d'alçada U (44,45 mm), racks murals i de terra, patch panels, guies passacables i regletes PDU.
3. [**5.3 Canalitzacions, canaletes, caixes i rosetes de paret**](ut0503.html)
   - Canaletes de PVC, canaletes de terra, safates de reixa tipus Cabofil, separació de seguretat elèctrica i preses Keystone.
4. [**5.4 Tipus de fixacions i criteris de selecció**](ut0504.html)
   - Tacs universals, metàl·lics, basculants i de pladur, cargoleria M6 amb femella gàbia, i ús obligatòri de bridetes de velcro.
5. [**5.5 Quadern de Taller: Muntatge de Canaleta, Roseta i Patch Panel**](ut0505.html)
   - Treball pas a pas de taller amb trepant, nivell, punxadora d'impacte Krone, caragols M6 i comprovant per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u5_idx_q1" data-answer="19|19"|19 polzades" data-hint="L'amplada homologada internacional dels armaris és de 19 polzades (48,26 cm).">
  <div class="quiz-question">🗄️ Quina és l'amplada estàndard en polzades dels perfils d'un armari rack de telecomunicacions?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu les polzades...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="imx_u5_idx_q2" data-answer="B" data-hint="El velcro no aprisiona ni aixafa l'aïllant dels conductors interiors.">
  <div class="mcq-question">🔩 Quin tipus de brida és el recomanat per a agrupar cables de dades al rack sense aixafar els parells trenats?</div>
  <div class="mcq-options">
    <button type="button" class="mcq-opt" data-opt="A">A) Brida de niló d'un sol ús apretada amb força</button>
    <button type="button" class="mcq-opt" data-opt="B">B) Brida de velcro tèxtil reutilitzable</button>
    <button type="button" class="mcq-opt" data-opt="C">C) Cinta d'embalar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar el taller de canalitzacions i els reptes de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
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
