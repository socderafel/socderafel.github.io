---
layout: default
title: "UD4: Dispositius d'Interconnexió de Xarxa — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD4"
next_url: "ut0401.html"
next_label: "4.1 ➡️"
---

# UD4: Dispositius d'Interconnexió de Xarxa

Benvingut/da a la **Unitat Didàctica 4** del mòdul d'Instal·lació i Manteniment de Xarxes. Perquè les dades puguen viatjar entre equips calen dispositius electrònics especialitzats. En aquesta unitat aprofundirem en el maquinari que fa possible la interconnexió: des de les **targetes de xarxa (NIC)** i l'adreça física **MAC**, passant per la commutació intel·ligent dels **switches**, l'enrutament de xarxes amb **routers**, fins a l'alimentació remota per cable amb **tecnologia PoE**.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-d-nic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-d-swi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-d-rou" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-d-poe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">DISPOSITIUS D'INTERCONNEXIÓ: NICS, COMMUTADORS, ROUTERS I TECNOLOGIA POE</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Adreces físiques MAC, taula CAM, porta d'enllaç per defecte, enrutament i alimentació elèctrica per xarxa</text>

  <!-- Bloc 1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-d-nic)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🖥️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Targeta NIC</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Interfície Física</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Adreça MAC: 48 bits</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 12 dígits hexadecimals</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 24b Fabricant (OUI)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 24b Sèrie únic</text>
  </g>

  <!-- Bloc 2 -->
  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-d-swi)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Commutador</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Switch (Capa 2)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Taula CAM d'adreces MAC</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Reenviament selectiu</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Sense col·lisions</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Full-Duplex a 1 Gbps</text>
  </g>

  <!-- Bloc 3 -->
  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-d-rou)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Encaminador</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Router (Capa 3)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Interconnexió LAN a WAN</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Porta d'Enllaç (Gateway)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Taula d'enrutament</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Traducció NAT pública</text>
  </g>

  <!-- Bloc 4 -->
  <g transform="translate(655, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-d-poe)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">PoE i Auxiliars</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Alimentació per Xarxa</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• PoE: Dades + 48V al cable</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Càmeres i APs sense endoll</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Adaptadors PLC (230V)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Repetidors de cobertura</text>
  </g>
</svg>
</div>

---

## Apartats de la Unitat Didàctica

1. [**4.1 Targetes de xarxa (NIC) i l'adreça física MAC**](ut0401.html)
   - Formats integrats, PCIe i USB, estructura de 48 bits de l'adreça MAC, OUI del fabricant i identificador de sèrie.
2. [**4.2 Concentradors (Hub) vs Commutadors (Switch) i la taula CAM**](ut0402.html)
   - Diferència entre Capa 1 i Capa 2, aprenentatge automàtic de la taula CAM i reenviament selectiu sense col·lisions.
3. [**4.3 Encaminadors (Routers): interconnexió de xarxes i porta d'enllaç**](ut0403.html)
   - Enrutament de paquets, la funció de Porta d'Enllaç (*Default Gateway*) i la traducció d'adreces NAT.
4. [**4.4 Dispositius auxiliars: repetidors, adaptadors PLC i tecnologia PoE**](ut0404.html)
   - Alimentació elèctrica per cable PoE (IEEE 802.3af/at/bt), comunicació per xarxa elèctrica PLC i repetidors.
5. [**4.5 Pràctica de Taller: Muntatge d'una Xarxa Commutada d'Aula**](ut0405.html)
   - Muntatge de maqueta amb Switch de 24 ports, diagnòstic de LEDs, anàlisi de MACs i comprovant per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-mcq" data-quiz-id="imx_u4_idx_q1" data-answer="B" data-hint="El switch consulta la seua taula CAM per enviar les dades només al port del destinatari.">
  <div class="mcq-question">🔀 Quin dispositiu central d'aula reenvia les trames de dades de manera selectiva consultant la seua taula CAM?</div>
  <div class="mcq-options">
    <button type="button" class="mcq-opt" data-opt="A">A) Concentrador (Hub)</button>
    <button type="button" class="mcq-opt" data-opt="B">B) Commutador (Switch)</button>
    <button type="button" class="mcq-opt" data-opt="C">C) Repetidor passiu</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u4_idx_q2" data-answer="PoE|Power over Ethernet" data-hint="Alimentació elèctrica a través del cable de xarxa.">
  <div class="quiz-question">⚡ Quines 3 sigles identifiquen la tecnologia que alimenta càmeres IP pel mateix cable UTP Cat 6?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu les 3 lletres...">
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
