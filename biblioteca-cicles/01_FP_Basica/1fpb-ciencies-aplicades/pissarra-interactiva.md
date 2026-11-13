---
layout: default
title: "Pissarra Digital Interactiva — Ciències Aplicades I"
course_root: "."
badge: "Pissarra Digital (PDI) · 1r FPB"
---

<div class="pdi-app-wrapper">

<!-- ==========================================
     VISTA 1: TAULER DE REPTES (DASHBOARD)
     ========================================== -->
<div id="pdi-dashboard" class="pdi-dashboard-view">
  <div class="pdi-dash-header">
    <div class="dash-title-wrap">
      <h2>🎯 Tauler de Reptes Interactius (PDI)</h2>
      <p>Tria una unitat didàctica per a jugar a la pissarra digital de classe o amb la tauleta. Sense menús que molesten dalt!</p>
    </div>
    <div class="dash-quick-tools">
      <button class="btn-pdi-tool" id="btn-sound-toggle" onclick="togglePDISound()"><span id="sound-icon">🔊</span> <span id="sound-text">So Activat</span></button>
      <button class="btn-pdi-tool" id="btn-fs-toggle" onclick="togglePDIFullscreen()">🖥️ Pantalla Completa</button>
    </div>
  </div>

  <div class="pdi-units-grid">
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #2563eb;">
      <div class="card-head">
        <span class="disc-badge" style="background: #2563eb;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔢</span> <h3>UD1 · Els Nombres Naturals</h3></div>
      <p class="card-desc">Sistema decimal, operacions bàsiques, jerarquia, potències i arrels.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud1-1" onclick="launchGameActivity('act-ud1-1')">
          <span class="act-idx">🧩 Jerarquia</span>
          <span class="act-name">R1 · Ordre</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-2" onclick="launchGameActivity('act-ud1-2')">
          <span class="act-idx">⚡ Potències V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-3" onclick="launchGameActivity('act-ud1-3')">
          <span class="act-idx">🕵️ Troba l'Intrús</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-4" onclick="launchGameActivity('act-ud1-4')">
          <span class="act-idx">🔢 Teclat Mental</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-5" onclick="launchGameActivity('act-ud1-5')">
          <span class="act-idx">🪞 Propietats 3D</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #16a34a;">
      <div class="card-head">
        <span class="disc-badge" style="background: #16a34a;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">➕➖</span> <h3>UD2 · Els Nombres Enters</h3></div>
      <p class="card-desc">Signes positius i negatius, recta numèrica, regla dels signes i parèntesis.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud2-1" onclick="launchGameActivity('act-ud2-1')">
          <span class="act-idx">🧩 Positius vs Negatius</span>
          <span class="act-name">R1 · Classificació</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-2" onclick="launchGameActivity('act-ud2-2')">
          <span class="act-idx">⚡ Regla Signes V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-3" onclick="launchGameActivity('act-ud2-3')">
          <span class="act-idx">🕵️ Troba l'Intrús</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-4" onclick="launchGameActivity('act-ud2-4')">
          <span class="act-idx">🔢 El Saldo del Banc</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-5" onclick="launchGameActivity('act-ud2-5')">
          <span class="act-idx">🪞 Recta Numèrica 3D</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #d97706;">
      <div class="card-head">
        <span class="disc-badge" style="background: #d97706;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🥧</span> <h3>UD3 · Fraccions i Decimals</h3></div>
      <p class="card-desc">Fraccions pròpies i impròpies, decimals, percentatges i equivalències.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud3-1" onclick="launchGameActivity('act-ud3-1')">
          <span class="act-idx">🧩 Tipus de Fraccions</span>
          <span class="act-name">R1 · Classificació</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-2" onclick="launchGameActivity('act-ud3-2')">
          <span class="act-idx">⚡ Equivalències V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-3" onclick="launchGameActivity('act-ud3-3')">
          <span class="act-idx">🕵️ Fraccions Equivalents</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-4" onclick="launchGameActivity('act-ud3-4')">
          <span class="act-idx">🔢 Suma de Fraccions</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-5" onclick="launchGameActivity('act-ud3-5')">
          <span class="act-idx">🪞 Famílies Decimals</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0284c7;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0284c7;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">⚖️</span> <h3>UD4 · Proporcionalitat i Percentatges</h3></div>
      <p class="card-desc">Proporcionalitat directa i inversa, regla de tres, percentatges i IVA.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud4-1" onclick="launchGameActivity('act-ud4-1')">
          <span class="act-idx">🧩 Directa o Inversa</span>
          <span class="act-name">R1 · Classificació</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-2" onclick="launchGameActivity('act-ud4-2')">
          <span class="act-idx">⚡ Percentatges V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-3" onclick="launchGameActivity('act-ud4-3')">
          <span class="act-idx">🕵️ Rebaixes de Taller</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-4" onclick="launchGameActivity('act-ud4-4')">
          <span class="act-idx">🔢 Factura amb IVA</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-5" onclick="launchGameActivity('act-ud4-5')">
          <span class="act-idx">🪞 Escales i Regles 3D</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #7c3aed;">
      <div class="card-head">
        <span class="disc-badge" style="background: #7c3aed;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">📐</span> <h3>UD5 · Àlgebra Bàsica i Equacions</h3></div>
      <p class="card-desc">Llenguatge algebraic, monomis, simplificació i resolució d'equacions.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud5-1" onclick="launchGameActivity('act-ud5-1')">
          <span class="act-idx">🧩 Aïllar la X</span>
          <span class="act-name">R1 · Ordre</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-2" onclick="launchGameActivity('act-ud5-2')">
          <span class="act-idx">⚡ Monomis V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-3" onclick="launchGameActivity('act-ud5-3')">
          <span class="act-idx">🕵️ Monomis Semblants</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-4" onclick="launchGameActivity('act-ud5-4')">
          <span class="act-idx">🔢 Endevina la X</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-5" onclick="launchGameActivity('act-ud5-5')">
          <span class="act-idx">🪞 Traductor a Àlgebra</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0d9488;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0d9488;">Ciències</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔬</span> <h3>UD6 · El Mètode Científic i la Mesura</h3></div>
      <p class="card-desc">Passos del mètode científic, Sistema Internacional, instruments i conversió d'unitats.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud6-1" onclick="launchGameActivity('act-ud6-1')">
          <span class="act-idx">🧩 Mètode Científic</span>
          <span class="act-name">R1 · Ordre</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-2" onclick="launchGameActivity('act-ud6-2')">
          <span class="act-idx">⚡ Unitats SI V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-3" onclick="launchGameActivity('act-ud6-3')">
          <span class="act-idx">🕵️ Instruments de Mesura</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-4" onclick="launchGameActivity('act-ud6-4')">
          <span class="act-idx">🔢 Canvi d'Unitats</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-5" onclick="launchGameActivity('act-ud6-5')">
          <span class="act-idx">🪞 Prefixos SI 3D</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #ea580c;">
      <div class="card-head">
        <span class="disc-badge" style="background: #ea580c;">Ciències</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧪</span> <h3>UD7 · La Matèria i les Seues Propietats</h3></div>
      <p class="card-desc">Estats de la matèria, canvis d'estat, mescles homogènies/heterogènies i densitat.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud7-1" onclick="launchGameActivity('act-ud7-1')">
          <span class="act-idx">🧩 Tipus de Mescles</span>
          <span class="act-name">R1 · Classificació</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-2" onclick="launchGameActivity('act-ud7-2')">
          <span class="act-idx">⚡ Canvis d'Estat V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-3" onclick="launchGameActivity('act-ud7-3')">
          <span class="act-idx">🕵️ Separació de Mescles</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-4" onclick="launchGameActivity('act-ud7-4')">
          <span class="act-idx">🔢 Càlcul de Densitat</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-5" onclick="launchGameActivity('act-ud7-5')">
          <span class="act-idx">🪞 Estats Matèria 3D</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #4f46e5;">
      <div class="card-head">
        <span class="disc-badge" style="background: #4f46e5;">Ciències</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🌍</span> <h3>UD8 · L'Univers i la Terra</h3></div>
      <p class="card-desc">Sistema Solar, moviments de rotació i translació, estacions i capes de la Terra.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud8-1" onclick="launchGameActivity('act-ud8-1')">
          <span class="act-idx">🧩 Planetes del Sol</span>
          <span class="act-name">R1 · Ordre</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-2" onclick="launchGameActivity('act-ud8-2')">
          <span class="act-idx">⚡ Estacions V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-3" onclick="launchGameActivity('act-ud8-3')">
          <span class="act-idx">🕵️ Planetes Rocosos</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-4" onclick="launchGameActivity('act-ud8-4')">
          <span class="act-idx">🔢 Cicle Lunar</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-5" onclick="launchGameActivity('act-ud8-5')">
          <span class="act-idx">🪞 Capes de la Terra</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #15803d;">
      <div class="card-head">
        <span class="disc-badge" style="background: #15803d;">Ciències</span>
        <span class="count-badge">5 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🩺</span> <h3>UD9 · La Salut, el Cos Humà i el Medi Ambient</h3></div>
      <p class="card-desc">Aparells del cos humà, primers auxilis, reciclatge i prevenció de riscos laborals.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud9-1" onclick="launchGameActivity('act-ud9-1')">
          <span class="act-idx">🧩 Contenidors Reciclatge</span>
          <span class="act-name">R1 · Classificació</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-2" onclick="launchGameActivity('act-ud9-2')">
          <span class="act-idx">⚡ Primers Auxilis V/F</span>
          <span class="act-name">R2 · Speed Quiz</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-3" onclick="launchGameActivity('act-ud9-3')">
          <span class="act-idx">🕵️ EPI al Taller</span>
          <span class="act-name">R3 · L'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-4" onclick="launchGameActivity('act-ud9-4')">
          <span class="act-idx">🔢 Pulsacions per Minut</span>
          <span class="act-name">R4 · Càlcul Tàctil</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-5" onclick="launchGameActivity('act-ud9-5')">
          <span class="act-idx">🪞 Protocol P.A.S. 3D</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
  </div>
</div>

<!-- ==========================================
     VISTA 2: PANTALLA DE JOC ULTRA-NETA (STAGE)
     ========================================== -->
<div id="pdi-game-view" class="pdi-game-view" style="display: none;">
  <!-- Barra de joc ultra-neta: només 1 sola barra superior minimalista -->
  <div class="pdi-game-topbar">
    <button class="btn-back-dash" onclick="showPDIDashboard()" title="Tornar al Tauler de Reptes">
      <span>⬅️ Menú de Reptes</span>
    </button>
    
    <div class="game-meta-info" id="game-meta-info">
      <span class="game-unit-badge" id="game-unit-badge">UD1</span>
      <span class="game-act-title" id="game-act-title">Repte 1</span>
    </div>

    <div class="game-nav-arrows">
      <button class="btn-game-nav" id="btn-prev-act" onclick="navRelativeActivity(-1)" title="Repte Anterior">◀ Anterior</button>
      <span class="game-counter" id="game-counter">1 / 5</span>
      <button class="btn-game-nav" id="btn-next-act" onclick="navRelativeActivity(1)" title="Repte Següent">Següent ▶</button>
    </div>

    <div class="game-top-tools">
      <button class="btn-tool-icon" onclick="resetCurrentPDIActivity()" title="Reiniciar repte per al següent alumne">🔄 Reiniciar</button>
      <button class="btn-tool-icon" id="game-sound-btn" onclick="togglePDISound()" title="Activar/Silenciar so">🔊</button>
      <button class="btn-tool-icon" id="game-fs-btn" onclick="togglePDIFullscreen()" title="Pantalla Completa">🖥️</button>
    </div>
  </div>

  <div class="pdi-game-stage">
    <!-- act-ud1-1 (order) -->
    <div class="pdi-activity-card" id="act-ud1-1" data-unit="ud1" data-title="Jerarquia" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R1 · Ordre</span>
        <h3>🔢 Ordena el Viatge de la Jerarquia d'Operacions</h3>
      </div>
      <p class="pdi-instruction">Arrossega els passos en l'ordre matemàtic correcte per a calcular: <strong>3 + 2 × (5 - 1)²</strong></p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Resoldre el parèntesi: (5 - 1) = 4</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Elevar la potència: 4² = 16</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Multiplicar: 2 × 16 = 32</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Sumar al final: 3 + 32 = 35</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r pas: parèntesi</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n pas: potència</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r pas: multiplicació</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t pas: suma</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud1-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud1-2" data-unit="ud1" data-title="Potències V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Potències i Multiplicacions Ràpides</h3>
      </div>
      <p class="pdi-instruction">Llegeix l'afirmació i prem ràpidament si és VERITAT o FALS a la pantalla:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> 2³ significa 2 × 2 × 2 = <strong>8</strong> (no pas 2 × 3). Les potències són multiplicacions repetides!" data-extra="Recorda: la base es multiplica per si mateixa tantes vegades com indica l'exponent.">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">El resultat de calcular <strong>2³</strong> és igual a <strong>6</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud1-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud1-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud1-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud1-3" data-unit="ud1" data-title="Troba l'Intrús" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Quadrats Perfectes</h3>
      </div>
      <p class="pdi-instruction">Un d'aquests quatre nombres NO és un quadrat perfecte d'un nombre natural. Toca l'intrús:</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="És un quadrat perfecte: 4² = 16" onclick="selectIntrus('act-ud1-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">16 (perquè 4 × 4 = 16)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="És un quadrat perfecte: 5² = 25" onclick="selectIntrus('act-ud1-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">25 (perquè 5 × 5 = 25)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS CORRECTE! 6² = 36 i 7² = 49. El 42 no és quadrat de cap natural!" onclick="selectIntrus('act-ud1-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">42 (no hi ha cap natural n tal que n² = 42)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="És un quadrat perfecte: 7² = 49" onclick="selectIntrus('act-ud1-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">49 (perquè 7 × 7 = 49)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud1-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud1-4" data-unit="ud1" data-title="Teclat Mental" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat de Càlcul Mental: Arrels i Productes</h3>
      </div>
      <p class="pdi-instruction">Resol mentalment l'operació i escriu el resultat utilitzant el teclat numèric en pantalla:</p>
      <div class="pdi-keypad-container" data-expected="20" data-steps="√64 = 8  →  3 × 4 = 12  →  8 + 12 = <strong>20</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Quant és: <strong>√64 + (3 × 4)</strong> ?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud1-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud1-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud1-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud1-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud1-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud1-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud1-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud1-5" data-unit="ud1" data-title="Propietats 3D" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Propietats Fonamentals</h3>
      </div>
      <p class="pdi-instruction">Toca cada targeta per a girar-la en 3D i descobrir la seua llei matemàtica:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔄</span>
                <h4>Propietat Commutativa</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>a + b = b + a</h5>
                <p>L'ordre dels factors o dels sumands no altera el resultat: 4 + 7 = 7 + 4 = 11.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📦</span>
                <h4>Propietat Distributiva</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>a × (b + c) = a×b + a×c</h5>
                <p>El producte respecte a la suma es reparteix: 3 × (4 + 2) = 12 + 6 = 18.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⭐</span>
                <h4>Element Neutre</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>+0 en suma, ×1 en producte</h5>
                <p>Sumar 0 deixa el nombre igual (8+0=8). Multiplicar per 1 el deixa igual (8×1=8).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud2-1 (category) -->
    <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Positius vs Negatius" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R1 · Classificació</span>
        <h3>⚖️ Balança de la Vida Real: Positius vs Negatius</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada situació real a la seua caixa de signe enter corresponent:</p>
      <div class="pdi-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="pos">
          <div class="box-head"><span class="box-icon">📈</span><h4>➕ Nombres Positius (+)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="neg">
          <div class="box-head"><span class="box-icon">📉</span><h4>➖ Nombres Negatius (-)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Ingressar 250 € a la nòmina</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Pujar al pis 4 de l'edifici</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Tindre un deute de 75 € al taller</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Submergir-se a 12 m sota el nivell del mar</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Temperatura de 5 graus sota zero (-5°C)</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Guanyar 3 punts en un partit</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud2-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="Regla Signes V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Multiplicació de Signes</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament amb els botons tàctils si l'afirmació és vertadera o falsa:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> Menys per menys és MÉS! (-4) × (-5) = <strong>+20</strong>. Només dóna negatiu si multipliques signes diferents (+ × - = -)." data-extra="Recorda la cançó dels signes: Signes iguals donen POSITIU, signes diferents donen NEGATIU!">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">El producte de <strong>(-4) × (-5)</strong> és igual a <strong>-20</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud2-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud2-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud2-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Troba l'Intrús" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Operacions amb Enters</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquestes operacions donen exactament el mateix resultat, però una dóna un valor diferent. Quina és la intrusa?</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="-8 + 3 = -5" onclick="selectIntrus('act-ud2-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">-8 + 3 (Dóna -5)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="-1 × +5 = -5" onclick="selectIntrus('act-ud2-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">(-1) × (+5) (Dóna -5)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="-2 - 3 = -5" onclick="selectIntrus('act-ud2-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">-2 - 3 (Dóna -5)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! -10 / -2 dóna +5 (positiu), mentre que les altres tres donen -5 (negatiu)!" onclick="selectIntrus('act-ud2-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">-10 / (-2) (Dóna +5)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud2-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud2-4" data-unit="ud2" data-title="El Saldo del Banc" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: El Saldo del Compte Corrent</h3>
      </div>
      <p class="pdi-instruction">Calcula el saldo final i escriu-lo amb el teclat (fes servir el botó '-' si és negatiu):</p>
      <div class="pdi-keypad-container" data-expected="-10" data-steps="45 - 60 = -15 €  →  -15 + 5 = <strong>-10 €</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Tenies <strong>45 €</strong> al compte. Has pagat un rebut de <strong>60 €</strong> i després has ingressat <strong>5 €</strong>. Quin és el saldo actual en €?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud2-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud2-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud2-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud2-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud2-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud2-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud2-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud2-5" data-unit="ud2" data-title="Recta Numèrica 3D" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Conceptes d'Enters</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes 3D per a repassar els conceptes clau de la recta numèrica:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📏</span>
                <h4>Valor Absolut |x|</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>|-7| = 7 i |+7| = 7</h5>
                <p>La distància a zero sense tindre en compte el signe. Sempre és un valor positiu o zero.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🪞</span>
                <h4>Nombre Oposat</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Op(+5) = -5</h5>
                <p>El mateix valor absolut però amb signe canviat. A la recta estan a la mateixa distància del 0.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚖️</span>
                <h4>Comparació d'Enters</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>-8 < -2</h5>
                <p>Entre dos nombres negatius, és més gran el que està més a prop de zero (més a la dreta a la recta)!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud3-1 (category) -->
    <div class="pdi-activity-card" id="act-ud3-1" data-unit="ud3" data-title="Tipus de Fraccions" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R1 · Classificació</span>
        <h3>🥧 Classificació: Fraccions Pròpies vs Impròpies</h3>
      </div>
      <p class="pdi-instruction">Classifica cada fracció segons si el numerador és menor o major que el denominador:</p>
      <div class="pdi-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="prop">
          <div class="box-head"><span class="box-icon">🥧</span><h4>🟢 Fraccions Pròpies (< 1)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="improp">
          <div class="box-head"><span class="box-icon">🍰</span><h4>🔴 Fraccions Impròpies (≥ 1)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 3/4 (Tres quarts)</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 1/2 (Un mig)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 5/2 (Cinc mitjos)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 7/3 (Set terços)</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 2/5 (Dos cinquens)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 9/4 (Nou quarts)</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud3-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Equivalències V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Equivalència Fracció-Decimal</h3>
      </div>
      <p class="pdi-instruction">Toca ràpidament VERITAT o FALS a la pissarra digital:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> Dividir per 10 mou la coma un lloc a l'esquerra: 3 / 10 = <strong>0,3</strong>. (0,03 seria 3/100, és a dir, tres centèsimes!)." data-extra="Recorda: 1/2 = 0,5 | 1/4 = 0,25 | 3/4 = 0,75 | 1/10 = 0,1.">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">La fracció <strong>3/10</strong> equival exactament al decimal <strong>0,03</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud3-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud3-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud3-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Fraccions Equivalents" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: La Fracció No Equivalent</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquestes fraccions representen exactament la meitat (1/2 = 0,5), però una NO. Quina és la intrusa?</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="2/4 = 1/2" onclick="selectIntrus('act-ud3-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">2/4 (Simplificat dóna 1/2)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="5/10 = 1/2" onclick="selectIntrus('act-ud3-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">5/10 (Simplificat dóna 1/2)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! 4/7 no equival a 1/2 perquè el doble de 4 és 8, no 7!" onclick="selectIntrus('act-ud3-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">4/7 (Representa 0,571...)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="6/12 = 1/2" onclick="selectIntrus('act-ud3-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">6/12 (Simplificat dóna 1/2)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud3-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud3-4" data-unit="ud3" data-title="Suma de Fraccions" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: Fraccions a Decimal</h3>
      </div>
      <p class="pdi-instruction">Calcula el resultat en format decimal utilitzant el teclat en pantalla (usa el punt per a la coma decimal):</p>
      <div class="pdi-keypad-container" data-expected="1.25" data-steps="3/4 = 0,75  i  1/2 = 0,50  →  0,75 + 0,50 = <strong>1.25</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Quant és: <strong>3/4 + 1/2</strong> en forma decimal?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud3-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud3-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud3-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud3-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud3-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud3-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud3-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud3-5" data-unit="ud3" data-title="Famílies Decimals" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Tipus de Nombres Decimals</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a aprendre a reconèixer cada família de nombres decimals:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🎯</span>
                <h4>Decimal Exacte</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>3,75  (Xifres finites)</h5>
                <p>Té un nombre limitat de xifres decimals. Prové de fraccions amb denominadors divisors de 10 (com 2 o 5).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔁</span>
                <h4>Periòdic Pur</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>0,333... = 0,3̂</h5>
                <p>La part decimal es repeteix indefinidament immediatament després de la coma. Ex: 1/3 = 0,333...</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔀</span>
                <h4>Periòdic Mixt</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>1,8333... = 1,83̂</h5>
                <p>Té una part que no es repeteix (anteperíode) i després una part que sí es repeteix (període).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud4-1 (category) -->
    <div class="pdi-activity-card" id="act-ud4-1" data-unit="ud4" data-title="Directa o Inversa" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R1 · Classificació</span>
        <h3>⚖️ Relacions de Proporció: Directa vs Inversa</h3>
      </div>
      <p class="pdi-instruction">Classifica cada situació segons el tipus de proporcionalitat que l'explica:</p>
      <div class="pdi-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="dir">
          <div class="box-head"><span class="box-icon">↗️</span><h4>📈 Directa (més ➔ més)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="inv">
          <div class="box-head"><span class="box-icon">↘️</span><h4>📉 Inversa (més ➔ menys)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="dir"><span class="item-handle">☰</span> Quilos de taronges i el preu que pagues</div>
        <div class="pdi-item" draggable="true" data-cat="inv"><span class="item-handle">☰</span> Velocitat del vehicle i el temps per a arribar</div>
        <div class="pdi-item" draggable="true" data-cat="dir"><span class="item-handle">☰</span> Hores treballades i el salari total rebut</div>
        <div class="pdi-item" draggable="true" data-cat="inv"><span class="item-handle">☰</span> Nombre d'obrers pintant i els dies per acabar</div>
        <div class="pdi-item" draggable="true" data-cat="dir"><span class="item-handle">☰</span> Lletres de gasolina i els quilòmetres recorreguts</div>
        <div class="pdi-item" draggable="true" data-cat="inv"><span class="item-handle">☰</span> Aixetes obertes omplint un dipòsit i el temps d'omplert</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud4-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud4-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud4-2" data-unit="ud4" data-title="Percentatges V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Càlcul Ràpid de Percentatges</h3>
      </div>
      <p class="pdi-instruction">Comprova l'afirmació i prem el botó corresponent a la pissarra digital:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> Calcular el 10% és dividir entre 10: 250 / 10 = <strong>25 €</strong>. (2,5 € seria l'1%!)." data-extra="Truc ràpid: el 10% es troba eliminant un zero o corrent la coma un lloc a l'esquerra!">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">El <strong>10%</strong> de <strong>250 €</strong> és igual a <strong>2,5 €</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud4-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud4-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud4-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud4-3" data-unit="ud4" data-title="Rebaixes de Taller" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Descomptes de Taller</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquests descomptes signifiquen pagar exactament la meitat (50%), però un és diferent. Quin és l'intrús?</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="És el 50%" onclick="selectIntrus('act-ud4-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Pagar 50 de cada 100 € (50%)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Un 2x1 equival a un 50% de descompte mitjà" onclick="selectIntrus('act-ud4-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Promoció 2x1 (t'emportes 2 pagant 1)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! La 2a unitat al 70% dóna un descompte global del 35%, no del 50%!" onclick="selectIntrus('act-ud4-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Segona unitat al 70% de descompte</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Multiplicar per 0,5 equival exactament al 50%" onclick="selectIntrus('act-ud4-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Multiplicar el preu original per 0,5</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud4-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud4-4" data-unit="ud4" data-title="Factura amb IVA" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: Factura de Taller amb IVA</h3>
      </div>
      <p class="pdi-instruction">Calcula el preu total amb el 21% d'IVA inclòs i tecleja el resultat final:</p>
      <div class="pdi-keypad-container" data-expected="121" data-steps="IVA: 21% de 100 € = 21 €  →  Preu total: 100 + 21 = <strong>121 €</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Un recanvi per a cotxe costa <strong>100 €</strong> de base imposable. Quant pagarà el client amb el <strong>21% d'IVA</strong> afegit?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud4-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud4-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud4-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud4-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud4-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud4-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud4-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud4-5" data-unit="ud4" data-title="Escales i Regles 3D" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Fórmules de Proporció</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a dominar les tres eines de proporcionalitat:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️</span>
                <h4>Regla de Tres Directa</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x = (b × c) / a</h5>
                <p>Es multipliquen les dades en diagonal i es divideix pel valor que queda sol. Ex: 2 kg valen 6 € ➔ 5 kg valen (5×6)/2 = 15 €.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🗺️</span>
                <h4>Escala del Plànol 1:100</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>1 cm al paper = 100 cm reals</h5>
                <p>Significa que la realitat és 100 vegades més gran. 1 cm al dibuix són 1 metre al taller o a la vivenda.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🏷️</span>
                <h4>Augment de Percentatge</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Preu × (1 + %/100)</h5>
                <p>Per a aplicar un 21% d'IVA directament, multipliques el preu base per 1,21 en un sol pas a la calculadora!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud5-1 (order) -->
    <div class="pdi-activity-card" id="act-ud5-1" data-unit="ud5" data-title="Aïllar la X" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R1 · Ordre</span>
        <h3>📐 El Camí per a Aïllar la X: 2x + 6 = 16</h3>
      </div>
      <p class="pdi-instruction">Ordena els passos lògics per a resoldre l'equació de primer grau: <strong>2x + 6 = 16</strong></p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Passar el +6 a l'altre membre restant: 2x = 16 - 6</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Calcular la resta numèrica: 2x = 10</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Passar el 2 multiplicador dividint: x = 10 / 2</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Obtenir la solució final de la incògnita: x = 5</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r pas: moure el terme independent</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n pas: operar el membre dret</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r pas: aïllar el coeficient</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t pas: resultat de la x</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud5-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud5-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud5-2" data-unit="ud5" data-title="Monomis V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Suma i Producte de Monomis</h3>
      </div>
      <p class="pdi-instruction">Toca VERITAT o FALS a la pantalla:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> x + x és una suma i dóna <strong>2x</strong> (dues vegades x). x² s'obté quan es MULTIPLICA: x · x = x²!" data-extra="Compara: 1 poma + 1 poma = 2 pomes (2x). No confongues la suma amb la potència!">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">L'expressió <strong>x + x</strong> és igual a <strong>x²</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud5-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud5-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud5-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud5-3" data-unit="ud5" data-title="Monomis Semblants" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Monomis Semblants</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquests monomis són semblants (tenen exactament la mateixa part literal), però un no. Toca l'intrús:</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="Té x² de grau 2" onclick="selectIntrus('act-ud5-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">5x² (Part literal: x²)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Té x² de grau 2" onclick="selectIntrus('act-ud5-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">-3x² (Part literal: x²)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! 4x³ té exponent 3 (grau 3), per tant no és semblant als que tenen x²!" onclick="selectIntrus('act-ud5-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">4x³ (Part literal: x³)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Té x² de grau 2" onclick="selectIntrus('act-ud5-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">x² (Part literal: x²)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud5-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud5-4" data-unit="ud5" data-title="Endevina la X" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: Resol l'Equació</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric de la incògnita <strong>x</strong> i tecleja'l:</p>
      <div class="pdi-keypad-container" data-expected="5" data-steps="3x = 10 + 5 = 15  →  x = 15 / 3 = <strong>5</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Si <strong>3x - 5 = 10</strong>, quant val <strong>x</strong>?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud5-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud5-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud5-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud5-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud5-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud5-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud5-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud5-5" data-unit="ud5" data-title="Traductor a Àlgebra" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Llenguatge Natural a Àlgebra</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a aprendre a traduir frases habituals a fórmules matemàtiques:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">👥</span>
                <h4>El doble d'un nombre més tres</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>2x + 3</h5>
                <p>El doble significa multiplicar per 2 (2x) i després li sumem 3 unitats.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➡️</span>
                <h4>El nombre consecutiu o següent</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x + 1</h5>
                <p>Si un nombre és x, el seu número següent sempre és sumar-li 1 unitat.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🍰</span>
                <h4>La meitat d'un nombre</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x / 2  o  ½·x</h5>
                <p>Partir en dues meitats iguals és dividir la variable per 2.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud6-1 (order) -->
    <div class="pdi-activity-card" id="act-ud6-1" data-unit="ud6" data-title="Mètode Científic" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R1 · Ordre</span>
        <h3>🔬 Les 5 Fases del Mètode Científic</h3>
      </div>
      <p class="pdi-instruction">Ordena cronològicament com investiga un científic o un tècnic davant d'un problema:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Observació curiosa d'un fenomen natural o incidència</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Formulació d'una hipòtesi (explicació provisional)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Experimentació controlada i recollida de dades</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Anàlisi dels resultats i conclusions científiques</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r pas: observar</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n pas: plantejar hipòtesi</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r pas: fer experiments</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t pas: extreure conclusions</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud6-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud6-2" data-unit="ud6" data-title="Unitats SI V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Unitats del Sistema Internacional (SI)</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si la correspondència d'unitat és veritat o falsa:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> La unitat oficial del SI per a la temperatura és el <strong>Kelvin (K)</strong>, encara que en la vida diària fem servir graus Celsius (0 °C = 273,15 K)." data-extra="Altres unitats SI oficials: Massa en kg, Temps en segons (s), Longitud en metres (m).">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">En el Sistema Internacional (SI), la unitat oficial de temperatura és el <strong>Grau Celsius (°C)</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud6-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud6-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud6-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud6-3" data-unit="ud6" data-title="Instruments de Mesura" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Instruments de Mesura de Longitud</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquests aparells mesuren longitud o gruix al taller, però un mesura una magnitud diferent. Quin és?</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="Mesura longitud amb precisió de dècimes" onclick="selectIntrus('act-ud6-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Calibre o Peu de Rei (Mesura gruixos i diàmetres)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Mesura longitud d'alta precisió" onclick="selectIntrus('act-ud6-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Micròmetre o Pàlmer (Mesura mil·lèsimes de mm)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS DETECTAT! El termòmetre mesura temperatura, no pas longituds o distàncies!" onclick="selectIntrus('act-ud6-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Termòmetre d'infrarojos (Mesura temperatura)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Mesura longituds en metres i centímetres" onclick="selectIntrus('act-ud6-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Cinta mètrica flexible (Mesura distàncies)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud6-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud6-4" data-unit="ud6" data-title="Canvi d'Unitats" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: Conversió d'Unitats de Longitud</h3>
      </div>
      <p class="pdi-instruction">Fes la conversió i escriu la xifra exacta en metres utilitzant el teclat numèric:</p>
      <div class="pdi-keypad-container" data-expected="3500" data-steps="1 km = 1000 m  →  3,5 × 1000 = <strong>3500 metres</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Quants metres (m) són exactament <strong>3,5 quilòmetres (km)</strong>?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud6-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud6-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud6-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud6-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud6-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud6-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud6-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud6-5" data-unit="ud6" data-title="Prefixos SI 3D" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Prefixos del Sistema Mètric</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a aprendre el valor multiplicador de cada prefix científic:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🏔️</span>
                <h4>Prefix KILO- (k)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>× 1.000 (10³)</h5>
                <p>Significa mil vegades la unitat base: 1 km = 1.000 m; 1 kg = 1.000 g; 1 kW = 1.000 W.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📏</span>
                <h4>Prefix CENTI- (c)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>÷ 100 (10⁻²)</h5>
                <p>Significa la centèsima part: 1 m = 100 cm; 1 L = 100 cL.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔬</span>
                <h4>Prefix MIL·LI- (m)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>÷ 1.000 (10⁻³)</h5>
                <p>Significa la mil·lèsima part de la unitat: 1 m = 1.000 mm; 1 g = 1.000 mg.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud7-1 (category) -->
    <div class="pdi-activity-card" id="act-ud7-1" data-unit="ud7" data-title="Tipus de Mescles" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R1 · Classificació</span>
        <h3>🧪 Laboratori de Mescles: Homogènies vs Heterogènies</h3>
      </div>
      <p class="pdi-instruction">Classifica cada substància segons si es distingeixen o no els seus components a simple vista:</p>
      <div class="pdi-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="homo">
          <div class="box-head"><span class="box-icon">☕</span><h4>✨ Mescles Homogènies (Dissolucions)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="hete">
          <div class="box-head"><span class="box-icon">🥣</span><h4>🥗 Mescles Heterogènies</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="homo"><span class="item-handle">☰</span> Aigua de l'aixeta amb sal completament dissolta</div>
        <div class="pdi-item" draggable="true" data-cat="hete"><span class="item-handle">☰</span> Aigua amb oli (es formen dues capes separades)</div>
        <div class="pdi-item" draggable="true" data-cat="homo"><span class="item-handle">☰</span> Aire net que respirem (mescla de gasos)</div>
        <div class="pdi-item" draggable="true" data-cat="hete"><span class="item-handle">☰</span> Roca de granit (quars, feldespat i mica visibles)</div>
        <div class="pdi-item" draggable="true" data-cat="homo"><span class="item-handle">☰</span> Aliatge metàl·lic de bronze (coure i estany fosos)</div>
        <div class="pdi-item" draggable="true" data-cat="hete"><span class="item-handle">☰</span> Aigua amb arena del riu al fons</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud7-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud7-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud7-2" data-unit="ud7" data-title="Canvis d'Estat V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Canvis d'Estat de la Matèria</h3>
      </div>
      <p class="pdi-instruction">Toca el botó de VERITAT o FALS a la pissarra digital:</p>
      <div class="pdi-speedquiz-container" data-correct="true" data-exp="<strong>VERITAT!</strong> La sublimació és el pas directe de sòlid a gas. Un exemple típic és el gel sec (CO₂ sòlid) o les boles de naftalina." data-extra="Els altres canvis són: Fusió (sòlid a líquid), Vaporització (líquid a gas) i Condensació (gas a líquid).">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">El canvi directe d'estat de <strong>sòlid a gas</strong> sense passar per líquid s'anomena <strong>Sublimació</strong>.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud7-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud7-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud7-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud7-3" data-unit="ud7" data-title="Separació de Mescles" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Mètodes de Separació de Mescles Heterogènies</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquests mètodes separen mescles heterogènies mecànicament, però un és per a dissolucions homogènies líquides. Quin és?</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="Separa sòlids en suspensió d'un líquid" onclick="selectIntrus('act-ud7-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Filtració (paper de filtre per a sòlid-líquid)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Separa líquids immiscibles de diferent densitat" onclick="selectIntrus('act-ud7-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Decantació (embut de decantació per a aigua i oli)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! La destil·lació s'empra per a separar mescles HOMOGÈNIES basant-se en els diferents punts d'ebullició!" onclick="selectIntrus('act-ud7-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Destil·lació (bullir per a separar alcohol i aigua)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Separa partícules denses en mescles heterogènies" onclick="selectIntrus('act-ud7-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Sedimentació per gravetat (deixar caure les partícules)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud7-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud7-4" data-unit="ud7" data-title="Càlcul de Densitat" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: Fórmula de la Densitat (d = m / V)</h3>
      </div>
      <p class="pdi-instruction">Aplica la fórmula d = massa / volum i escriu la densitat obtinguda:</p>
      <div class="pdi-keypad-container" data-expected="8" data-steps="d = m / V  →  d = 160 g / 20 cm³ = <strong>8 g/cm³</strong>">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Una peça d'alumne de taller té una massa de <strong>160 g</strong> i ocupa un volum de <strong>20 cm³</strong>. Quina és la seua densitat en <strong>g/cm³</strong>?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud7-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud7-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud7-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud7-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud7-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud7-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud7-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud7-5" data-unit="ud7" data-title="Estats Matèria 3D" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Els Tres Estats Fonamentals</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a visualitzar com es comporten les partícules en cada estat:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🧊</span>
                <h4>Estat Sòlid</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Forma i Volum Fixos</h5>
                <p>Les partícules estan fortament unides en posicions fixes, només vibren. No es comprimeix fàcilment.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">💧</span>
                <h4>Estat Líquid</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Volum Fix, Forma Variable</h5>
                <p>Les partícules tenen certa llibertat de moviment i llisquen unes sobre altres, adoptant la forma del recipient.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">💨</span>
                <h4>Estat Gasós</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Forma i Volum Variables</h5>
                <p>Les partícules estan molt allunyades entre si, es mouen veloçment i ocupen tot l'espai disponible. Es comprimeixen fàcilment.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud8-1 (order) -->
    <div class="pdi-activity-card" id="act-ud8-1" data-unit="ud8" data-title="Planetes del Sol" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R1 · Ordre</span>
        <h3>🪐 Els 8 Planetes en Ordre des del Sol</h3>
      </div>
      <p class="pdi-instruction">Ordena els planetes del Sistema Solar començant pel més proper al Sol fins al més llunyà:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r Mercuri (planeta rocallós més pròxim)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Venus (l'infern d'efecte hivernacle)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Terra (el nostre planeta blau amb vida)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t Mart (el planeta roig)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r planeta</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n planeta</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r planeta</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t planeta</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud8-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud8-2" data-unit="ud8" data-title="Estacions V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Els Moviments de la Terra</h3>
      </div>
      <p class="pdi-instruction">Toca VERITAT o FALS a la pantalla interactiva:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> Les estacions no ocorren per la distància al Sol, sinó per la <strong>INCLINACIÓ de l'eix de la Terra (23,5°)</strong>, que fa que els rajos solars arriben més perpendiculars!" data-extra="De fet, en el nostre estiu de l'hemisferi nord la Terra està en el seu punt més llunyà del Sol (Afeli)!">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">A l'estiu fa més calor perquè la Terra està molt més a prop del Sol que a l'hivern.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud8-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud8-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud8-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud8-3" data-unit="ud8" data-title="Planetes Rocosos" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Planetes Rocosos Interiors</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquests planetes són petits i rocosos (tel·lúrics), però un és un gegant gasós exterior. Quin és l'intrús?</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="Planeta interior de roca" onclick="selectIntrus('act-ud8-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Mercuri (Rocós)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Planeta interior de roca" onclick="selectIntrus('act-ud8-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Mart (Rocós)</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! Júpiter és el gegant gasós més gran del Sistema Solar, no pas un planeta rocallós!" onclick="selectIntrus('act-ud8-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Júpiter (Gegant de gas)</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="Planeta interior de roca" onclick="selectIntrus('act-ud8-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Venus (Rocós)</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud8-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud8-4" data-unit="ud8" data-title="Cicle Lunar" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: El Cicle de les Fases de la Lluna</h3>
      </div>
      <p class="pdi-instruction">Resol la qüestió astronòmica i introdueix el nombre aproximat de dies:</p>
      <div class="pdi-keypad-container" data-expected="28" data-steps="El cicle lunar dura aproximadament 27,3 a <strong>28 dies</strong> (4 setmanes de 7 dies).">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Quants dies (aproximadament) triga la Lluna en fer una volta sencera i completar les seues 4 fases (mes lunar)?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud8-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud8-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud8-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud8-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud8-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud8-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud8-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud8-5" data-unit="ud8" data-title="Capes de la Terra" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Les Grans Capes de la Terra</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a explorar l'estructura externa i interna del nostre planeta:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">💨</span>
                <h4>Atmosfera</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Capa Gasosa</h5>
                <p>Composta principalment per Nitrogen (78%), Oxigen (21%) i altres gasos. Ens protegeix de la radiació solar i meteors.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌊</span>
                <h4>Hidrosfera</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Capa d'Aigua</h5>
                <p>Tota l'aigua del planeta: oceans, mars, rius, glaceres i aigües subterrànies. Cobreix el 71% de la superfície terrestre.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌋</span>
                <h4>Geosfera Interna</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Escorça, Mantell i Nucli</h5>
                <p>L'escorça sòlida exterior, el mantell viscós on es mouen les plaques tectòniques i el nucli de ferro i níquel a gran temperatura.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud9-1 (category) -->
    <div class="pdi-activity-card" id="act-ud9-1" data-unit="ud9" data-title="Contenidors Reciclatge" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R1 · Classificació</span>
        <h3>♻️ Reciclatge al Taller: Tria el Contenidor Adequat</h3>
      </div>
      <p class="pdi-instruction">Classifica cada residu en el seu contenidor oficial per a cuidar el medi ambient:</p>
      <div class="pdi-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="groc">
          <div class="box-head"><span class="box-icon">🥫</span><h4>🟡 Contenidor Groc (Envasos)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="blau">
          <div class="box-head"><span class="box-icon">📦</span><h4>🔵 Contenidor Blau (Paper/Cartó)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="groc"><span class="item-handle">☰</span> Botes buides de refresc i llandes metàl·liques</div>
        <div class="pdi-item" draggable="true" data-cat="blau"><span class="item-handle">☰</span> Caixes de cartó d'embalatge de recanvis</div>
        <div class="pdi-item" draggable="true" data-cat="groc"><span class="item-handle">☰</span> Bosses i plàstic de bombolles</div>
        <div class="pdi-item" draggable="true" data-cat="blau"><span class="item-handle">☰</span> Fulls de paper d'oficina i catàlegs vells</div>
        <div class="pdi-item" draggable="true" data-cat="groc"><span class="item-handle">☰</span> Botelles de plàstic d'aigua mineral</div>
        <div class="pdi-item" draggable="true" data-cat="blau"><span class="item-handle">☰</span> Periòdics i revistes usades</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud9-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud9-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud9-2" data-unit="ud9" data-title="Primers Auxilis V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R2 · Speed Quiz</span>
        <h3>⚡ Speed Quiz: Primers Auxilis en Cas de Cremada</h3>
      </div>
      <p class="pdi-instruction">Toca ràpidament si l'actuació és correcta o errònia:</p>
      <div class="pdi-speedquiz-container" data-correct="false" data-exp="<strong>FALS!</strong> MAI s'han de posar pastes, pomades ni olis! El primer que cal fer és aplicar <strong>AIGUA FREDA CORRENT durant 10-15 minuts</strong> per a refredar la pell i evitar infeccions." data-extra="Recorda sempre el telèfon d'emergències a la Unió Europea: 112!">
        <div class="sq-streak-badge">
          <span>🔥 Ratxa Actual:</span> <strong class="sq-streak-val">0</strong> encerts consecutius
        </div>
        <div class="sq-statement-box">
          <span class="sq-quote-icon">⚡</span>
          <p class="sq-statement-text">Davant d'una cremada tèrmica recent, el primer que cal fer és posar crema o pasta de dents sobre la ferida.</p>
        </div>
        <div class="sq-buttons-row">
          <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud9-2', true)">
            <span class="sq-btn-icon">✓</span>
            <span class="sq-btn-label">VERITAT</span>
          </button>
          <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud9-2', false)">
            <span class="sq-btn-icon">✗</span>
            <span class="sq-btn-label">FALS</span>
          </button>
        </div>
        <div class="sq-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud9-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud9-3" data-unit="ud9" data-title="EPI al Taller" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R3 · L'Intrús</span>
        <h3>🕵️ Troba l'Intrús: Equips de Protecció Individual (EPI)</h3>
      </div>
      <p class="pdi-instruction">Tres d'aquests elements són equips homologats per a protegir-se al taller, però un NO ho és. Toca l'intrús:</p>
      <div class="pdi-intrus-container">
        <div class="intrus-cards-grid">
          <div class="intrus-card" data-intrus="false" data-hint="EPI essencial per als ulls" onclick="selectIntrus('act-ud9-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Ulleres de seguretat antiesquitxades homologades</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="EPI obligatori contra caiguda d'objectes" onclick="selectIntrus('act-ud9-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Botes de seguretat amb puntera d'acer reforçada</p>
          </div>
          <div class="intrus-card" data-intrus="true" data-hint="INTRÚS TROBAT! Els auriculars de música NO són un EPI homologat i a més distreuen i tapen alarmes del taller!" onclick="selectIntrus('act-ud9-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Auriculars de música personals sense fils</p>
          </div>
          <div class="intrus-card" data-intrus="false" data-hint="EPI per a protegir les mans" onclick="selectIntrus('act-ud9-3', this)">
            <span class="intrus-badge">Opció</span>
            <p class="intrus-card-text">Guants de cuir resistents a l'abrasió mecànica</p>
          </div>
        </div>
        <div class="intrus-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud9-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud9-4" data-unit="ud9" data-title="Pulsacions per Minut" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R4 · Càlcul Tàctil</span>
        <h3>🔢 Teclat Mental: Freqüència Cardíaca (PPM)</h3>
      </div>
      <p class="pdi-instruction">Fes el càlcul de la freqüència cardíaca en repòs i tecleja el resultat final:</p>
      <div class="pdi-keypad-container" data-expected="72" data-steps="Un minut té 60 segons (15 s × 4)  →  18 × 4 = <strong>72 ppm</strong> (freqüència cardíaca normal en repòs).">
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Un company compta <strong>18 pulsacions</strong> durant <strong>15 segons</strong> al canell. Quantes pulsacions per minut (ppm) té?</p>
        </div>
        <div class="kp-calc-wrapper">
          <div class="kp-display-wrap">
            <span class="kp-display-label">La teua resposta:</span>
            <div class="kp-display-screen" id="kp-screen-act-ud9-4">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud9-4', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud9-4', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud9-4', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud9-4', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud9-4')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;"></div>
      </div>
    </div>
    <!-- act-ud9-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud9-5" data-unit="ud9" data-title="Protocol P.A.S. 3D" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: El Protocol d'Emergències P.A.S.</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a aprendre la seqüència vital d'auxili en cas d'accident:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛡️</span>
                <h4>P · PROTEGIR</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Assegurar la zona</h5>
                <p>Abans d'actuar, assegura que ni tu ni la víctima esteu en perill (tallar corrent, senyalitzar perill, apagar motors).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📞</span>
                <h4>A · AVISAR</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Telefonar al 112</h5>
                <p>Donar dades clares: on ha ocorregut, què ha passat, quantes persones estan ferides i el seu estat de consciència.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">❤️</span>
                <h4>S · SOCÓRRER</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Atendre la víctima</h5>
                <p>Acompanyar el ferit, comprovar si respira, no moure'l si hi ha sospita de lesió a la columna i mantindre la calma.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la i veure la fórmula o definició. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
  </div>
</div>

<canvas id="pdi-confetti-canvas" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999; display: none;"></canvas>

</div>

<!-- ==========================================
     ESTILS CSS COMPLETS I RESPONSIVES
     ========================================== -->
<style>
/* Reset i variables generals */
.pdi-app-wrapper {
  --pdi-font: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --pdi-bg: var(--bg-color, #f8fafc);
  --pdi-card-bg: var(--card-bg, #ffffff);
  --pdi-border: var(--border-color, #e2e8f0);
  --pdi-text: var(--text-color, #1e293b);
  --pdi-text-muted: #64748b;
  --pdi-primary: #2563eb;
  --pdi-success: #10b981;
  --pdi-danger: #ef4444;
  --pdi-warning: #f59e0b;
  font-family: var(--pdi-font);
  color: var(--pdi-text);
  margin: 0 auto;
  max-width: 1400px;
  user-select: none;
  -webkit-user-select: none;
}

/* Pantalla completa pura */
body.pdi-fullscreen-mode {
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
  background: var(--pdi-bg) !important;
}
body.pdi-fullscreen-mode header,
body.pdi-fullscreen-mode nav,
body.pdi-fullscreen-mode footer,
body.pdi-fullscreen-mode .site-header,
body.pdi-fullscreen-mode .breadcrumbs,
body.pdi-fullscreen-mode .sidebar {
  display: none !important;
}
body.pdi-fullscreen-mode .pdi-app-wrapper {
  max-width: 100vw !important;
  height: 100vh !important;
  padding: 0 !important;
}
body.pdi-fullscreen-mode #pdi-game-view {
  height: 100vh !important;
}

/* -------------------------------------------
   DASHBOARD (VISTA 1)
   ------------------------------------------- */
.pdi-dashboard-view {
  padding: 1rem 0.5rem 3rem 0.5rem;
}
.pdi-dash-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: var(--pdi-card-bg);
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  border: 1px solid var(--pdi-border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}
.dash-title-wrap h2 {
  margin: 0 0 0.35rem 0;
  font-size: 1.6rem;
  color: var(--pdi-primary);
  font-weight: 800;
}
.dash-title-wrap p {
  margin: 0;
  color: var(--pdi-text-muted);
  font-size: 0.95rem;
}
.dash-quick-tools {
  display: flex;
  gap: 0.75rem;
}
.btn-pdi-tool {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  padding: 0.6rem 1.1rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.btn-pdi-tool:hover {
  background: #e2e8f0;
  transform: translateY(-1px);
}

.pdi-units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.5rem;
}
.pdi-unit-dash-card {
  background: var(--pdi-card-bg);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--pdi-border);
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.pdi-unit-dash-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.disc-badge {
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  letter-spacing: 0.5px;
}
.count-badge {
  background: #f1f5f9;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}
.card-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}
.card-title .unit-icon {
  font-size: 1.5rem;
}
.card-title h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--pdi-text);
}
.card-desc {
  font-size: 0.88rem;
  color: var(--pdi-text-muted);
  margin: 0 0 1.25rem 0;
  line-height: 1.4;
  flex-grow: 1;
}
.card-acts-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.btn-launch-act {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}
.btn-launch-act:hover {
  background: #eff6ff;
  border-color: #93c5fd;
  transform: translateX(4px);
}
.btn-launch-act .act-idx {
  font-weight: 700;
  font-size: 0.85rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.btn-launch-act .act-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  background: #e2e8f0;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}
.btn-launch-act .act-arrow {
  color: var(--pdi-primary);
  font-weight: bold;
}

/* -------------------------------------------
   PANTALLA DE JOC (VISTA 2)
   ------------------------------------------- */
.pdi-game-view {
  display: flex;
  flex-direction: column;
  height: 94vh;
  box-sizing: border-box;
  background: var(--pdi-bg);
}
.pdi-game-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e293b;
  color: #ffffff;
  padding: 0.4rem 1rem;
  height: 48px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  flex-shrink: 0;
}
.btn-back-dash {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: #ffffff;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-back-dash:hover {
  background: rgba(255,255,255,0.3);
}
.game-meta-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.game-unit-badge {
  background: var(--pdi-primary);
  color: #ffffff;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 800;
}
.game-act-title {
  font-size: 0.95rem;
  font-weight: 700;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.game-nav-arrows {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-game-nav {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: #ffffff;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-game-nav:hover {
  background: rgba(255,255,255,0.3);
}
.game-counter {
  font-size: 0.85rem;
  font-weight: 800;
  color: #94a3b8;
  min-width: 45px;
  text-align: center;
}
.game-top-tools {
  display: flex;
  gap: 0.4rem;
}
.btn-tool-icon {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-tool-icon:hover {
  background: rgba(255,255,255,0.25);
}

.pdi-game-stage {
  flex-grow: 1;
  background: var(--pdi-card-bg);
  border-radius: 0 0 12px 12px;
  border: 1px solid var(--pdi-border);
  border-top: none;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
}

/* Card general de joc */
.pdi-activity-card {
  display: none;
  flex-direction: column;
  height: 100%;
}
.pdi-activity-card.active {
  display: flex;
}
.pdi-act-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
  flex-shrink: 0;
}
.pdi-act-title .act-num {
  color: #ffffff;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 800;
}
.pdi-act-title h3 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--pdi-text);
}
.pdi-instruction {
  font-size: 1.05rem;
  color: var(--pdi-text-muted);
  margin: 0 0 0.75rem 0;
  flex-shrink: 0;
}

/* FORMAT 1: DRAG & DROP */
.pdi-order-wrapper {
  display: flex;
  gap: 1.5rem;
  flex-grow: 1;
  min-height: 0;
}
.pdi-source-pool {
  flex: 1;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  overflow-y: auto;
}
.pdi-slots-column {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  overflow-y: auto;
}
.pdi-slot {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.5rem 0.75rem;
  min-height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s;
}
.pdi-slot.drag-over {
  border-color: var(--pdi-primary);
  background: #eff6ff;
  transform: scale(1.01);
}
.slot-badge {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--pdi-primary);
  text-transform: uppercase;
  margin-bottom: 0.15rem;
}
.slot-hint {
  font-size: 0.8rem;
  color: #94a3b8;
  font-style: italic;
}
.pdi-item {
  background: #ffffff;
  border: 2px solid #94a3b8;
  border-radius: 10px;
  padding: 0.65rem 0.85rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  touch-action: none;
}
.pdi-item:active {
  cursor: grabbing;
}
.pdi-item.dragging {
  opacity: 0.5;
}
.item-handle {
  color: #94a3b8;
  font-size: 1.1rem;
}

/* Categories grid */
.pdi-boxes-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex: 1.5;
  min-height: 0;
}
.pdi-boxes-grid.grid-2 { grid-template-columns: 1fr 1fr; }
.pdi-boxes-grid.grid-3 { grid-template-columns: 1fr 1fr 1fr; }
.pdi-drop-box {
  background: #f8fafc;
  border: 2px dashed #94a3b8;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  transition: all 0.2s;
}
.pdi-drop-box.drag-over {
  border-color: var(--pdi-primary);
  background: #eff6ff;
}
.box-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #e2e8f0;
}
.box-head h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}
.box-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  overflow-y: auto;
  min-height: 60px;
}

/* Footer & Feedback */
.pdi-footer-feedback {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;
  padding-top: 0.6rem;
  border-top: 1px solid var(--pdi-border);
  flex-shrink: 0;
}
.btn-pdi-check {
  background: var(--pdi-primary);
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.4rem;
  border-radius: 10px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(37,99,235,0.3);
  transition: all 0.2s;
}
.btn-pdi-check:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}
.pdi-status-msg {
  font-weight: 700;
  font-size: 1rem;
  flex-grow: 1;
}
.pdi-status-msg.correct { color: var(--pdi-success); }
.pdi-status-msg.incorrect { color: var(--pdi-danger); }

/* FORMAT 2: SPEED QUIZ */
.pdi-speedquiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
.sq-streak-badge {
  background: #fef3c7;
  border: 1px solid #fde68a;
  color: #b45309;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
}
.sq-statement-box {
  background: #f8fafc;
  border: 3px solid #cbd5e1;
  border-radius: 20px;
  padding: 2rem 2.5rem;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  position: relative;
}
.sq-quote-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: block;
}
.sq-statement-text {
  font-size: 1.6rem;
  line-height: 1.4;
  margin: 0;
  color: #0f172a;
  font-weight: 600;
}
.sq-buttons-row {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: center;
}
.btn-sq {
  flex: 1;
  max-width: 320px;
  min-height: 85px;
  border-radius: 18px;
  border: none;
  font-size: 1.5rem;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #ffffff;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.btn-sq-true {
  background: linear-gradient(135deg, #10b981, #059669);
  border-bottom: 6px solid #047857;
}
.btn-sq-true:hover {
  background: linear-gradient(135deg, #34d399, #10b981);
  transform: translateY(-3px);
}
.btn-sq-true:active {
  transform: translateY(3px);
  border-bottom-width: 2px;
}
.btn-sq-false {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border-bottom: 6px solid #b91c1c;
}
.btn-sq-false:hover {
  background: linear-gradient(135deg, #f87171, #ef4444);
  transform: translateY(-3px);
}
.btn-sq-false:active {
  transform: translateY(3px);
  border-bottom-width: 2px;
}
.sq-btn-icon {
  font-size: 2rem;
}
.sq-feedback-box {
  width: 100%;
  padding: 1.25rem 1.75rem;
  border-radius: 14px;
  font-size: 1.1rem;
  line-height: 1.5;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease;
}
.sq-feedback-box.correct {
  background: #ecfdf5;
  border: 2px solid #a7f3d0;
  color: #065f46;
}
.sq-feedback-box.incorrect {
  background: #fef2f2;
  border: 2px solid #fecaca;
  color: #991b1b;
}

/* FORMAT 3: TROBA L'INTRÚS */
.pdi-intrus-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
.intrus-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.intrus-card {
  background: #ffffff;
  border: 3px solid #cbd5e1;
  border-radius: 18px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 110px;
}
.intrus-card:hover {
  border-color: var(--pdi-primary);
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(37,99,235,0.12);
}
.intrus-card.selected-correct {
  border-color: var(--pdi-success) !important;
  background: #ecfdf5 !important;
  box-shadow: 0 0 0 4px rgba(16,185,129,0.25) !important;
  transform: scale(1.02);
}
.intrus-card.selected-wrong {
  border-color: var(--pdi-danger) !important;
  background: #fef2f2 !important;
  animation: shake 0.4s ease;
}
.intrus-badge {
  font-size: 0.75rem;
  font-weight: 800;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}
.intrus-card-text {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: #1e293b;
  line-height: 1.35;
}
.intrus-feedback-box {
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  animation: fadeIn 0.3s ease;
}
.intrus-feedback-box.correct {
  background: #ecfdf5;
  border: 2px solid #a7f3d0;
  color: #065f46;
}
.intrus-feedback-box.incorrect {
  background: #fef2f2;
  border: 2px solid #fecaca;
  color: #991b1b;
}

/* FORMAT 4: TECLAT MENTAL TÀCTIL */
.pdi-keypad-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;
  max-width: 850px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
.kp-problem-box {
  background: #f8fafc;
  border: 2px solid #cbd5e1;
  border-radius: 16px;
  padding: 1rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}
.kp-prob-icon {
  font-size: 2.2rem;
}
.kp-prob-text {
  font-size: 1.4rem;
  margin: 0;
  font-weight: 700;
  color: #0f172a;
}
.kp-calc-wrapper {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.kp-display-wrap {
  flex: 1;
  background: #0f172a;
  border-radius: 18px;
  padding: 1.5rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-shadow: inset 0 4px 10px rgba(0,0,0,0.4);
  min-height: 160px;
  box-sizing: border-box;
}
.kp-display-label {
  font-size: 0.85rem;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.kp-display-screen {
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56,189,248,0.5);
  word-break: break-all;
}
.kp-keys-grid {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  gap: 0.6rem;
}
.kp-key {
  height: 60px;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: 0 3px 6px rgba(0,0,0,0.06);
}
.kp-key:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
}
.kp-key:active {
  transform: translateY(1px);
  background: #e2e8f0;
}
.kp-key-clear {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fca5a5;
}
.kp-key-del {
  background: #fef3c7;
  color: #d97706;
  border-color: #fde68a;
}
.kp-key-check {
  grid-column: span 2;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  border: none;
  font-size: 1.1rem;
  box-shadow: 0 4px 10px rgba(16,185,129,0.3);
}
.kp-key-check:hover {
  background: linear-gradient(135deg, #34d399, #10b981);
}
.kp-feedback-box {
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  line-height: 1.4;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease;
}
.kp-feedback-box.correct {
  background: #ecfdf5;
  border: 2px solid #a7f3d0;
  color: #065f46;
}
.kp-feedback-box.incorrect {
  background: #fef2f2;
  border: 2px solid #fecaca;
  color: #991b1b;
}

/* FORMAT 5: TARGETES GIRATÒRIES 3D */
.pdi-flipcards-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
.flipcards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  perspective: 1200px;
}
.flipcard-scene {
  height: 280px;
  cursor: pointer;
}
.flipcard-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  border-radius: 20px;
}
.flipcard-scene.is-flipped .flipcard-inner {
  transform: rotateY(180deg);
}
.flipcard-front, .flipcard-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
  padding: 1.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #e2e8f0;
}
.flipcard-front {
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  color: #1e293b;
}
.flipcard-front .fc-icon {
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
}
.flipcard-front h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--pdi-primary);
}
.flipcard-front .fc-hint {
  font-size: 0.85rem;
  color: #94a3b8;
  font-weight: 700;
  margin-top: auto;
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}
.flipcard-back {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #ffffff;
  transform: rotateY(180deg);
  border-color: #334155;
}
.flipcard-back h5 {
  margin: 0 0 0.75rem 0;
  font-size: 1.3rem;
  font-weight: 800;
  color: #38bdf8;
}
.flipcard-back p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #cbd5e1;
}
.flipcard-back .fc-check-badge {
  margin-top: auto;
  background: #10b981;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
}
.fc-instructions-bar {
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  text-align: center;
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 600;
}

/* Animacions clau */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-8px); }
  40%, 80% { transform: translateX(8px); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Media queries */
@media (max-width: 768px) {
  .intrus-cards-grid { grid-template-columns: 1fr; }
  .sq-buttons-row { flex-direction: column; gap: 1rem; }
  .btn-sq { max-width: 100%; min-height: 70px; }
  .kp-calc-wrapper { flex-direction: column; }
  .kp-display-wrap { width: 100%; min-height: 100px; }
  .kp-keys-grid { grid-template-columns: repeat(4, 1fr); width: 100%; }
}
</style>

<!-- ==========================================
     INCLUSIÓ DEL MOTOR JAVASCRIPT EXTERN
     ========================================== -->
<script src="{{ 'pissarra-interactiva.js' | relative_url }}?v=2"></script>
<script src="pissarra-interactiva.js?v=2"></script>
