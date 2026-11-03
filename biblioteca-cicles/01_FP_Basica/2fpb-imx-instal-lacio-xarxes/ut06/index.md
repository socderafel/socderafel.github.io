---
layout: default
title: "UD6: Configuració d'Equips i Adreçament IPv4 — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD6"
next_url: "ut0601.html"
next_label: "6.1 ➡️"
---

# UD6: Configuració d'Equips i Adreçament IPv4

Benvingut/da a la **Unitat Didàctica 6** del mòdul d'Instal·lació i Manteniment de Xarxes. Un cop instal·lada la infraestructura física (canaletes, cables, rosetes i armari rack), és el moment de donar vida lògica a la xarxa. En aquesta unitat aprendràs l'estructura de les **adreces IPv4**, el càlcul de **màscares de subxarxa i adreces de difusió (broadcast)**, el funcionament dels servidors **DHCP i DNS**, el diagnòstic d'avaries per consola amb **ordres CLI (`ipconfig`, `ping`, `tracert`)** i les fitxes d'exercicis pràctics del taller.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-i-ipv" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-i-mas" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-i-ser" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-i-cli" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">ADREÇAMENT IPV4: FORMAT, MÀSCARES, SERVEIS DHCP/DNS I DIAGNÒSTIC CLI</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Configuració lògica TCP/IP, classes d'adreces privades, broadcast i mètodes de diagnòstic</text>

  <!-- Bloc 1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-i-ipv)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Adreça IPv4</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">32 Bits en 4 Octets</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Net ID (Part de xarxa)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Host ID (Part d'equip)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Classe C (192-223)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Rang privat 192.168.X.X</text>
  </g>

  <!-- Bloc 2 -->
  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-i-mas)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🎭</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Màscara i Subxarxa</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Subxarxa /24</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 255.255.255.0 (/24)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Xarxa: .0 (Reservada)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Broadcast: .255</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 254 hosts útils (.1 a .254)</text>
  </g>

  <!-- Bloc 3 -->
  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-i-ser)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Serveis de Xarxa</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">DHCP i DNS</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• DHCP: Assignació automàtica</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Procés DORA en 4 passos</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• DNS: Traducció de noms a IP</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Google DNS: 8.8.8.8</text>
  </g>

  <!-- Bloc 4 -->
  <g transform="translate(655, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-i-cli)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">💻</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Comandes CLI</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Diagnòstic de Consola</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ipconfig /all (Dades completes)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• ping (Prova de connectivitat)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• tracert (Salts entre routers)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• nslookup (Resolució DNS)</text>
  </g>
</svg>
</div>

---

## Apartats de la Unitat Didàctica

1. [**6.1 L'adreça IPv4: estructura, classes i adreces privades**](ut0601.html)
   - Els 32 bits en 4 octets decimals, part de xarxa vs host, classes històriques i rangs d'adreces privades RFC 1918.
2. [**6.2 Màscara de subxarxa, porta d'enllaç i difusió (Broadcast)**](ut0602.html)
   - Filtre de subxarxa, adreça identificadora de xarxa (.0), adreça de broadcast (.255) i els 254 hosts útils.
3. [**6.3 Servidors DNS i servei d'assignació automàtica DHCP**](ut0603.html)
   - Procés DORA d'assignació automàtica d'IPs per DHCP i resolució de noms amb servidors DNS.
4. [**6.4 Ordres bàsiques de diagnòstic de xarxa en consola (CLI)**](ut0604.html)
   - Les comandes `ipconfig /all`, `ping`, `tracert` i la metodologia de diagnòstic de fallades pas a pas.
5. [**6.5 Quadern de Taller: Pràctiques d'Adreçament i Fitxes 1.04**](ut0605.html)
   - Fitxes pràctiques d'adreçament, configuració manual d'IPs estàtiques, resolució de conflictes i comprovant per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u6_idx_q1" data-answer="DHCP" data-hint="Assigna automàticament la configuració als equips.">
  <div class="quiz-question">⚙️ Quin servei de xarxa evita haver de posar les adreces IP a mà ordinador per ordinador?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu les 4 lletres...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="imx_u6_idx_q2" data-answer="B" data-hint="255.255.255.0 permet connectar fins a 254 equips útils.">
  <div class="mcq-question">🎭 Quina màscara de subxarxa s'associa a la notació /24 en xarxes domèstiques i d'aula?</div>
  <div class="mcq-options">
    <button type="button" class="mcq-opt" data-opt="A">A) 255.0.0.0</button>
    <button type="button" class="mcq-opt" data-opt="B">B) 255.255.255.0</button>
    <button type="button" class="mcq-opt" data-opt="C">C) 255.255.0.0</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar els exercicis i reptes d'adreçament de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
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
