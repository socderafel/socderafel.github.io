---
layout: default
title: "UD1: Fonaments de les Xarxes de Dades i Comunicació — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD1"
next_url: "ut0101.html"
next_label: "1.1 ➡️"
---

# UD1: Fonaments de les Xarxes de Dades i Comunicació

Benvingut/da a la **Unitat Didàctica 1** del mòdul d'Instal·lació i Manteniment de Xarxes per a Transmissió de Dades de 2n curs de Formació Professional Bàsica (Grau Bàsic). En aquesta unitat assentarem els fonaments imprescindibles que tot futur tècnic o tècnica ha de dominar: des de la definició d'una xarxa i els elements de la comunicació fins a les topologies físiques, els models per capes OSI i TCP/IP, i el quadern de fitxes pràctiques de taller.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-x-abs" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-x-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-x-osi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-x-iee" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">FONAMENTS DE XARXES: CLASSIFICACIÓ, TOPOLOGIES I MODEL OSI/TCP-IP</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura d'interconnexió, àmbit geogràfic, flux de dades i estàndards IEEE</text>

  <!-- Bloc 1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-abs)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Abast Geogràfic</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Tipologia de Xarxa</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• PAN: Personal (&lt;10 m)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• LAN: Local (Aula/Edifici)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• MAN: Ciutat metropolitana</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• WAN: Global (Internet)</text>
  </g>

  <!-- Bloc 2 -->
  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-top)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⭐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Topologies</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Disposició dels Equips</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Bus: Troncal compartit</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Anell: Bucle unidireccional</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Estrella: Switch central</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Arbre: Jerarquia de switches</text>
  </g>

  <!-- Bloc 3 -->
  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-osi)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📚</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Models en Capes</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">OSI (7) vs TCP/IP (4)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Aplicació: Dades</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Transport: Segments (TCP)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Internet: Paquets (IP)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Accés: Trames i Bits</text>
  </g>

  <!-- Bloc 4 -->
  <g transform="translate(655, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-iee)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Estàndards IEEE</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Normativa Internacional</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• IEEE 802.3: Ethernet cable</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• IEEE 802.11: Wi-Fi ràdio</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Codificació: 0s i 1s binaris</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 1 Byte = 8 bits</text>
  </g>
</svg>
</div>

---

## Apartats de la Unitat Didàctica

1. [**1.1 Què és una xarxa informàtica, abast i elements de comunicació**](ut0101.html)
   - Definició de xarxa, els 5 components (emissor, receptor, missatge, canal, protocol), el soroll i la classificació geogràfica (PAN, LAN, CAN, MAN, WAN, WLAN).
2. [**1.2 Topologies físiques i lògiques de xarxa i modes de transmissió**](ut0102.html)
   - Topologies en bus, anell, estrella, arbre i malla. Modes simplex, half-duplex i full-duplex.
3. [**1.3 Arquitectura en capes: models OSI i TCP/IP i l'encapsulament**](ut0103.html)
   - Model teòric OSI (7 capes) vs model pràctic TCP/IP (4 capes), unitats de dades PDU (Dades, Segments, Paquets, Trames, Bits) i capçaleres.
4. [**1.4 Normes, estàndards IEEE i representació de la informació**](ut0104.html)
   - Codificació binària, decimal, hexadecimal i ASCII. Càlculs de capacitat de descàrrega i estàndards IEEE 802.3 i 802.11.
5. [**1.5 Quadern de Taller: Fitxes Pràctiques i Laboratori d'Aula**](ut0105.html)
   - Fitxes de treball de taller 1.01, 1.02 i 1.03 adaptades amb activitats interactives, laboratori de reconeixement de components reals i generació del comprovant oficial per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-mcq" data-quiz-id="imx_u1_idx_q1" data-answer="B" data-hint="L'estrella és la topologia emprada pel 99% de les xarxes locals cablejades d'aula.">
  <div class="mcq-question">⭐ Quina és la topologia física estàndard emprada en les xarxes locals d'aula on cada equip té el seu propi cable fins al switch central?</div>
  <div class="mcq-options">
    <button type="button" class="mcq-opt" data-opt="A">A) Topologia en Bus</button>
    <button type="button" class="mcq-opt" data-opt="B">B) Topologia en Estrella</button>
    <button type="button" class="mcq-opt" data-opt="C">C) Topologia en Anell</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u1_idx_q2" data-answer="8" data-hint="1 Byte són sempre 8 bits.">
  <div class="quiz-question">🔢 Quants bits conté exactament un Byte de memòria?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu el número...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar els reptes de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
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
