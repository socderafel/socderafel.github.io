---
layout: default
title: "UD3: Fibra Òptica i Comunicacions Sense Fil (Wi-Fi) — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD3"
next_url: "ut0301.html"
next_label: "3.1 ➡️"
---

# UD3: Fibra Òptica i Comunicacions Sense Fil (Wi-Fi)

Benvingut/da a la **Unitat Didàctica 3** del mòdul d'Instal·lació i Manteniment de Xarxes. Mentre que el cablejat de coure és l'estàndard per a la connexió final dels equips d'aula, la **fibra òptica** permet cobrir grans distàncies i interconnectar edificis amb immunitat total al soroll elèctric, i les **xarxes sense fils Wi-Fi** ofereixen mobilitat per a portàtils, tauletes i dispositius d'alumnat. En aquesta unitat n'aprendràs la instal·lació, els paràmetres de seguretat i la prevenció de riscos laborals (PRL).

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-w-fib" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-w-prl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-w-rad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-w-sec" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">FIBRA ÒPTICA I WI-FI: MEDIS DE TRANSMISSIÓ AVANÇATS I SEGURETAT</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Transmissió òptica monomode/multimode, PRL amb làser i vidre, espectre Wi-Fi i xifratge WPA2/WPA3</text>

  <!-- Bloc 1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-w-fib)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">💡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fibra Òptica</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Transmissió per Llum</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Monomode: 9 µm (Groc)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Multimode: 50 µm (Aqua)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Connectors LC, SC, ST</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Mòduls SFP al switch</text>
  </g>

  <!-- Bloc 2 -->
  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-w-prl)" stroke="#ef4444" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#ef4444" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#ef4444" font-size="14" font-weight="bold">⚠️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Seguretat PRL</text>
    <text x="15" y="62" fill="#ef4444" font-size="11" font-weight="600">Riscos de Taller</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Mai mirar extrem fibra</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Làser infraroig invisible</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Estores negres de vidre</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Alcohol isopropílic 99%</text>
  </g>

  <!-- Bloc 3 -->
  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-w-rad)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📶</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Xarxes Wi-Fi</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Bandes i Canals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 2.4 GHz: Canals 1, 6, 11</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 5 GHz: Més velocitat</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 6 GHz: Wi-Fi 6E / Wi-Fi 7</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Potència en dBm</text>
  </g>

  <!-- Bloc 4 -->
  <g transform="translate(655, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-w-sec)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔒</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Xifratge Wi-Fi</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Protocols de Protecció</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• WEP: Obsolet i prohibit</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• WPA2-Personal (AES)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• WPA3-Personal (SAE)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• WPA-Enterprise (RADIUS)</text>
  </g>
</svg>
</div>

---

## Apartats de la Unitat Didàctica

1. [**3.1 Fonaments de la fibra òptica: monomode vs multimode i connectors**](ut0301.html)
   - Estructura del cable de fibra, reflexió total interna, comparativa monomode (SMF) vs multimode (MMF) i connectors LC, SC i ST.
2. [**3.2 Seguretat i precaucions laborals amb fibra òptica (PRL)**](ut0302.html)
   - Prevenció de danys oculars pel làser infraroig invisible, perill de les estelles microscòpiques de vidre i neteja amb alcohol isopropílic.
3. [**3.3 Xarxes sense fil Wi-Fi: freqüències, canals i cobertura**](ut0303.html)
   - Bandes de 2.4 GHz, 5 GHz i 6 GHz, els canals no solapats 1, 6 i 11, i atenuació del senyal per murs i materials.
4. [**3.4 Seguretat en Wi-Fi: SSID, filtratge MAC, WPA2 i WPA3**](ut0304.html)
   - Ocultació de SSID, filtratge d'adreces físiques MAC, i evolució del xifratge des de WEP fins a WPA2 i WPA3.
5. [**3.5 Pràctica de Taller: Anàlisi d'Espectre Wi-Fi i Configuració d'un AP**](ut0305.html)
   - Mesura de senyal en dBm, canvi de canal lliure, configuració pas a pas del Punt d'Accés i comprovant per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-mcq" data-quiz-id="imx_u3_idx_q1" data-answer="B" data-hint="La fibra òptica utilitza feixos de llum per transportar dades a la velocitat de la llum.">
  <div class="mcq-question">💡 Quin medi de transmissió utilitza la llum per enviar dades i és completament immune a les tempestes elèctriques i interferències?</div>
  <div class="mcq-options">
    <button type="button" class="mcq-opt" data-opt="A">A) Cable coaxial</button>
    <button type="button" class="mcq-opt" data-opt="B">B) Fibra òptica</button>
    <button type="button" class="mcq-opt" data-opt="C">C) Parell trenat UTP</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u3_idx_q2" data-answer="WPA3|WPA3-Personal" data-hint="És l'estàndard de seguretat més avançat de Wi-Fi.">
  <div class="quiz-question">🔒 Quin és l'estàndard de seguretat Wi-Fi més modern i segur que substitueix a WPA2?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu el protocol...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar les pràctiques i els reptes de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
  <div class="aules-student-field">
    <label for="aules-student-name">Nom i Cognoms de l'alumne/a:</label>
    <input type="text" id="aules-student-name" placeholder="Ex: Pere Martí Soler">
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">Calculant resultats dels reptes...</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-copy">📋 Copiar Resum per a Aules</button>
    <button type="button" class="btn-aules-dl">📥 Descarregar Informe (.txt)</button>
  </div>
  <div class="aules-toast"></div>
</div>
