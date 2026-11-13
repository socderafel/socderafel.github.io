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
      <p>Ciències Aplicades I (1r FPB) · 45 Reptes Avançats multijoc per a la pissarra digital de classe o tauleta.</p>
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
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔢</span> <h3>UD1 · Els Nombres Naturals</h3></div>
      <p class="card-desc">Jerarquia d'operacions complexes, potències, arrels quadrades, descomposició i càlcul mental.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud1-1" onclick="launchGameActivity('act-ud1-1')">
          <span class="act-idx">🧩 Jerarquia Combinada</span>
          <span class="act-name">R1 · Ordre Complex</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-2" onclick="launchGameActivity('act-ud1-2')">
          <span class="act-idx">⚡ Potències i Arrels V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-3" onclick="launchGameActivity('act-ud1-3')">
          <span class="act-idx">🕵️ Nombres Primers i Quadrats</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-4" onclick="launchGameActivity('act-ud1-4')">
          <span class="act-idx">🔢 Problemes de Taller</span>
          <span class="act-name">R4 · Càlcul de Taller (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-5" onclick="launchGameActivity('act-ud1-5')">
          <span class="act-idx">🪞 Lleis dels Naturals</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #16a34a;">
      <div class="card-head">
        <span class="disc-badge" style="background: #16a34a;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">➕➖</span> <h3>UD2 · Els Nombres Enters</h3></div>
      <p class="card-desc">Signes positius i negatius, recta numèrica, regla dels signes, parèntesis i temperatures.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud2-1" onclick="launchGameActivity('act-ud2-1')">
          <span class="act-idx">🧩 Classificació d'Enters</span>
          <span class="act-name">R1 · Balança 8 Casos</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-2" onclick="launchGameActivity('act-ud2-2')">
          <span class="act-idx">⚡ Regla Signes V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-3" onclick="launchGameActivity('act-ud2-3')">
          <span class="act-idx">🕵️ Signes i Recta Numèrica</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-4" onclick="launchGameActivity('act-ud2-4')">
          <span class="act-idx">🔢 Balanç i Salt Tèrmic</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-5" onclick="launchGameActivity('act-ud2-5')">
          <span class="act-idx">🪞 Guia Pràctica d'Enters</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #d97706;">
      <div class="card-head">
        <span class="disc-badge" style="background: #d97706;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">🥧</span> <h3>UD3 · Fraccions i Decimals</h3></div>
      <p class="card-desc">Fraccions equivalents, operacions amb m.c.m., decimals exactes i periòdics, i percentatges.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud3-1" onclick="launchGameActivity('act-ud3-1')">
          <span class="act-idx">🧩 Tipus de Fraccions</span>
          <span class="act-name">R1 · Classificació 8 Fraccions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-2" onclick="launchGameActivity('act-ud3-2')">
          <span class="act-idx">⚡ Fraccions i Decimals V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-3" onclick="launchGameActivity('act-ud3-3')">
          <span class="act-idx">🕵️ Equivalències i Decimals</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-4" onclick="launchGameActivity('act-ud3-4')">
          <span class="act-idx">🔢 Taller amb Fraccions</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-5" onclick="launchGameActivity('act-ud3-5')">
          <span class="act-idx">🪞 Operacions amb Fraccions</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0284c7;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0284c7;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">⚖️</span> <h3>UD4 · Proporcionalitat i Percentatges</h3></div>
      <p class="card-desc">Proporció directa i inversa, regla de tres composta, percentatges d'IVA, descomptes encadenats i escales.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud4-1" onclick="launchGameActivity('act-ud4-1')">
          <span class="act-idx">🧩 Directa, Inversa o No Proporcional</span>
          <span class="act-name">R1 · Classificació 8 Relacions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-2" onclick="launchGameActivity('act-ud4-2')">
          <span class="act-idx">⚡ Proporció i Percentatges V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-3" onclick="launchGameActivity('act-ud4-3')">
          <span class="act-idx">🕵️ Descomptes i Escales</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-4" onclick="launchGameActivity('act-ud4-4')">
          <span class="act-idx">🔢 Factura i Regla de Tres</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-5" onclick="launchGameActivity('act-ud4-5')">
          <span class="act-idx">🪞 Fórmules de Proporció</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #7c3aed;">
      <div class="card-head">
        <span class="disc-badge" style="background: #7c3aed;">Matemàtiques</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">📐</span> <h3>UD5 · Àlgebra Bàsica i Equacions</h3></div>
      <p class="card-desc">Llenguatge algebraic, monomis, grau, reducció de termes semblants i resolució d'equacions de 1r grau amb parèntesi.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud5-1" onclick="launchGameActivity('act-ud5-1')">
          <span class="act-idx">🧩 Resolució d'Equació</span>
          <span class="act-name">R1 · Ordre 5 Passos</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-2" onclick="launchGameActivity('act-ud5-2')">
          <span class="act-idx">⚡ Àlgebra i Lleis V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-3" onclick="launchGameActivity('act-ud5-3')">
          <span class="act-idx">🕵️ Monomis i Solucions</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-4" onclick="launchGameActivity('act-ud5-4')">
          <span class="act-idx">🔢 Resol les Equacions</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Equacions)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-5" onclick="launchGameActivity('act-ud5-5')">
          <span class="act-idx">🪞 Traductor Algebraic</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0d9488;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0d9488;">Ciències</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔬</span> <h3>UD6 · El Mètode Científic i la Mesura</h3></div>
      <p class="card-desc">Fases d'investigació, Sistema Internacional (SI), instruments de laboratori/taller, precisió i conversió d'unitats.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud6-1" onclick="launchGameActivity('act-ud6-1')">
          <span class="act-idx">🧩 Fases Mètode Científic</span>
          <span class="act-name">R1 · Protocol 5 Passos</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-2" onclick="launchGameActivity('act-ud6-2')">
          <span class="act-idx">⚡ Unitats i Mesura V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-3" onclick="launchGameActivity('act-ud6-3')">
          <span class="act-idx">🕵️ Magnituds i Aparells</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-4" onclick="launchGameActivity('act-ud6-4')">
          <span class="act-idx">🔢 Canvis d'Unitats SI</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Conversions)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-5" onclick="launchGameActivity('act-ud6-5')">
          <span class="act-idx">🪞 Metrologia i Errors</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #ea580c;">
      <div class="card-head">
        <span class="disc-badge" style="background: #ea580c;">Ciències</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧪</span> <h3>UD7 · La Matèria i les Seues Propietats</h3></div>
      <p class="card-desc">Estats de la matèria, teoria cinètica, canvis d'estat, mescles, dissolucions i fórmula de la densitat.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud7-1" onclick="launchGameActivity('act-ud7-1')">
          <span class="act-idx">🧩 Pures vs Mescles</span>
          <span class="act-name">R1 · Classificació 8 Substàncies</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-2" onclick="launchGameActivity('act-ud7-2')">
          <span class="act-idx">⚡ Matèria i Canvis V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-3" onclick="launchGameActivity('act-ud7-3')">
          <span class="act-idx">🕵️ Canvis Físics vs Químics</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-4" onclick="launchGameActivity('act-ud7-4')">
          <span class="act-idx">🔢 Càlcul de Densitat</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-5" onclick="launchGameActivity('act-ud7-5')">
          <span class="act-idx">🪞 Separació de Mescles</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #4f46e5;">
      <div class="card-head">
        <span class="disc-badge" style="background: #4f46e5;">Ciències</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">🌍</span> <h3>UD8 · L'Univers i la Terra</h3></div>
      <p class="card-desc">Sistema Solar, rotació i translació, estacions, estructura de la Terra, atmosfera i cicle de l'aigua.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud8-1" onclick="launchGameActivity('act-ud8-1')">
          <span class="act-idx">🧩 El Sistema Solar</span>
          <span class="act-name">R1 · Ordre 8 Planetes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-2" onclick="launchGameActivity('act-ud8-2')">
          <span class="act-idx">⚡ Astronomia i Terra V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-3" onclick="launchGameActivity('act-ud8-3')">
          <span class="act-idx">🕵️ Atmosfera i Gasos</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-4" onclick="launchGameActivity('act-ud8-4')">
          <span class="act-idx">🔢 Astronomia Numèrica</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-5" onclick="launchGameActivity('act-ud8-5')">
          <span class="act-idx">🪞 Geodinàmica Terrestre</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #15803d;">
      <div class="card-head">
        <span class="disc-badge" style="background: #15803d;">Ciències</span>
        <span class="count-badge">5 Reptes Avançats</span>
      </div>
      <div class="card-title"><span class="unit-icon">🩺</span> <h3>UD9 · La Salut, el Cos Humà i el Medi Ambient</h3></div>
      <p class="card-desc">Prevenció de riscos laborals (PRL), primers auxilis, reanimació cardiopulmonar (RCP), reciclatge i hàbits saludables.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud9-1" onclick="launchGameActivity('act-ud9-1')">
          <span class="act-idx">🧩 Tipus de Riscos de Taller</span>
          <span class="act-name">R1 · Classificació 8 Riscos</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-2" onclick="launchGameActivity('act-ud9-2')">
          <span class="act-idx">⚡ Salut i Primers Auxilis V/F</span>
          <span class="act-name">R2 · Speed Quiz (5 Preguntes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-3" onclick="launchGameActivity('act-ud9-3')">
          <span class="act-idx">🕵️ Senyals de Seguretat i Cos</span>
          <span class="act-name">R3 · Troba l'Intrús (2 Rondes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-4" onclick="launchGameActivity('act-ud9-4')">
          <span class="act-idx">🔢 Càlculs de Salut i PRL</span>
          <span class="act-name">R4 · Càlcul Tàctil (3 Problemes)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-5" onclick="launchGameActivity('act-ud9-5')">
          <span class="act-idx">🪞 Normativa i Protocols</span>
          <span class="act-name">R5 · Targetes 3D Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
  </div>
</div>

<!-- ==========================================
     VISTA 2: PANTALLA DE JOC ULTRA-NETA (STAGE)
     ========================================== -->
<div id="pdi-game-view" class="pdi-game-view" style="display: none;">
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
    <div class="pdi-activity-card" id="act-ud1-1" data-unit="ud1" data-title="Jerarquia Combinada" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R1 · Ordre Complex</span>
        <h3>🔢 Jerarquia d'Operacions Avançada: [(4 + 2×3) - 2³] × (15 - √25)</h3>
      </div>
      <p class="pdi-instruction">Arrossega els 5 passos en l'ordre matemàtic estricte per a resoldre aquesta operació combinada:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Resoldre el producte interior del parèntesi: 2 × 3 = 6 ➔ (4 + 6) = 10</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Calcular les potències i arrels: 2³ = 8  i  √25 = 5</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Resoldre el claudàtor esquerre: [10 - 8] = 2</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Resoldre el parèntesi dret: (15 - 5) = 10</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Multiplicar els dos resultats finals: 2 × 10 = 20</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r pas: parèntesi intern</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n pas: potència i arrel</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r pas: restar claudàtor</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t pas: restar parèntesi dret</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è pas: producte final</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud1-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud1-2" data-unit="ud1" data-title="Potències i Arrels V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Potències i Arrels</h3>
      </div>
      <p class="pdi-instruction">Ronda ràpida de 5 preguntes! Llegeix amb atenció i prem VERITAT o FALS abans que acabe el temps:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La potència &lt;strong&gt;3⁴&lt;/strong&gt; és igual a &lt;strong&gt;81&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 3⁴ = 3 × 3 × 3 × 3 = 9 × 9 = &lt;strong&gt;81&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;Qualsevol nombre natural diferent de zero elevat a 0 és igual a &lt;strong&gt;0&lt;/strong&gt; (Exemple: 7⁰ = 0).&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Per definició matemàtica, qualsevol nombre no nul elevat a 0 és igual a &lt;strong&gt;1&lt;/strong&gt; (7⁰ = 1).&quot;}, {&quot;q&quot;: &quot;L&#x27;arrel quadrada exacta de &lt;strong&gt;144&lt;/strong&gt; és &lt;strong&gt;12&lt;/strong&gt; (perquè 12² = 144).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 12 × 12 = 144, per tant √144 = &lt;strong&gt;12&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;En l&#x27;expressió &lt;strong&gt;2 × 3²&lt;/strong&gt;, primer es fa la multiplicació (2 × 3 = 6) i després s&#x27;eleva (6² = 36).&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Les potències tenen prioritat sobre les multiplicacions! Primer 3² = 9, i després 2 × 9 = &lt;strong&gt;18&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;El nombre &lt;strong&gt;10⁵&lt;/strong&gt; s&#x27;escriu amb un 1 seguit de 5 zeros, és a dir, &lt;strong&gt;100.000&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; En les potències de base 10, l&#x27;exponent indica exactament el nombre de zeros: 10⁵ = 100.000 (cent mil).&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud1-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud1-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud1-3" data-unit="ud1" data-title="Nombres Primers i Quadrats" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Propietats Numèriques Ocultes</h3>
      </div>
      <p class="pdi-instruction">Analitza les xifres i descobreix quin nombre trenca la regla matemàtica del grup:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Nombres Primers&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són PRIMERS (només divisibles per 1 i per si mateixos), però un és COMPOST. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;13 (Només divisible per 1 i 13)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És nombre primer.&quot;}, {&quot;text&quot;: &quot;17 (Només divisible per 1 i 17)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És nombre primer.&quot;}, {&quot;text&quot;: &quot;21 (Compost: 3 × 7 = 21)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El 21 té com a divisors l&#x27;1, el 3, el 7 i el 21; per tant és compost!&quot;}, {&quot;text&quot;: &quot;29 (Només divisible per 1 i 29)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És nombre primer.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Quadrats vs Cubs&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són QUADRATS PERFECTES, però un és un CUB PERFECTE (i no quadrat). Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;64 (És 8²)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;64 = 8² és un quadrat perfecte.&quot;}, {&quot;text&quot;: &quot;81 (És 9²)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;81 = 9² és un quadrat perfecte.&quot;}, {&quot;text&quot;: &quot;125 (És 5³, no és quadrat)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 125 = 5³ (cub de 5). No hi ha cap nombre natural que elevat al quadrat done 125 (11²=121, 12²=144)!&quot;}, {&quot;text&quot;: &quot;100 (És 10²)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;100 = 10² és un quadrat perfecte.&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud1-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud1-4" data-unit="ud1" data-title="Problemes de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R4 · Càlcul de Taller (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Problemes Reals d'Inventari i Pressupost</h3>
      </div>
      <p class="pdi-instruction">Resol els càlculs següents i escriu la resposta amb el teclat numèric en pantalla:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Al taller hem rebut &lt;strong&gt;8 caixes de 25 cargols&lt;/strong&gt; cadascuna. Si en revisar-les hem hagut de retirar &lt;strong&gt;35 cargols defectuosos&lt;/strong&gt;, quants cargols útils ens queden en total?&quot;, &quot;expected&quot;: &quot;165&quot;, &quot;steps&quot;: &quot;8 × 25 = 200 cargols  ➔  200 - 35 = &lt;strong&gt;165 cargols útils&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Calcula el resultat exacte de l&#x27;operació combinada: &lt;strong&gt;√81 × 2³ - 12&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;60&quot;, &quot;steps&quot;: &quot;√81 = 9  ➔  2³ = 8  ➔  9 × 8 = 72  ➔  72 - 12 = &lt;strong&gt;60&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un mecànic fa una reparació que requereix &lt;strong&gt;4 hores de feina a 22 €/hora&lt;/strong&gt;, més &lt;strong&gt;45 € en recanvis&lt;/strong&gt;. Quin és el cost total del servei en €?&quot;, &quot;expected&quot;: &quot;133&quot;, &quot;steps&quot;: &quot;Mà d&#x27;obra: 4 × 22 = 88 €  ➔  Total: 88 + 45 = &lt;strong&gt;133 €&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud1-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud1-5" data-unit="ud1" data-title="Lleis dels Naturals" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Lleis Matemàtiques i Factor Comú</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a girar-les en 3D i descobrir la seua aplicació directa en càlcul ràpid:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📐</span>
                <h4>Factor Comú (Distributiva Inversa)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>a·b + a·c = a·(b + c)</h5>
                <p>Si tens 6×14 + 6×6, pots extreure el 6 com a factor comú: 6 × (14 + 6) = 6 × 20 = 120. Molt més ràpid que multiplicar per separat!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚡</span>
                <h4>Producte de Potències d'Igual Base</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>aⁿ × aᵐ = aⁿ⁺ᵐ</h5>
                <p>Es manté la mateixa base i es SUMEN els exponents. Exemple: 2³ × 2⁴ = 2³⁺⁴ = 2⁷ = 128.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➗</span>
                <h4>Divisió de Potències d'Igual Base</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>aⁿ ÷ aᵐ = aⁿ⁻ᵐ</h5>
                <p>Es manté la base i es RESTEN els exponents. Exemple: 5⁶ ÷ 5⁴ = 5⁶⁻⁴ = 5² = 25.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📦</span>
                <h4>Potència d'una Potència</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>(aⁿ)ᵐ = aⁿˣᵐ</h5>
                <p>Es manté la base i es MULTIPLIQUEN els exponents entre si. Exemple: (3²)³ = 3²ˣ³ = 3⁶ = 729.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud2-1 (category) -->
    <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Classificació d'Enters" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R1 · Balança 8 Casos</span>
        <h3>⚖️ Balança Financera i Tècnica: Positius vs Negatius (8 Casos)</h3>
      </div>
      <p class="pdi-instruction">Classifica cada situació tècnica o econòmica segons si representa un nombre enter POSITIU (+) o NEGATIU (-):</p>
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
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Ingressar un xec de 420 € al compte</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Pagar una factura de proveïdor de 175 €</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Ascensor que puja al pis 6</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Baixar al segon soterrani d'aparcament (-2)</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Temperatura d'una cambra de congelació a 18°C sota zero</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Altitud d'una muntanya a 1.250 metres sobre el nivell del mar</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Profunditat d'una fossa marina a 450 m sota el mar</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Un benefici de 85 € en la venda d'un accessori</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud2-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="Regla Signes V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Signes i Parèntesis</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació sobre nombres enters és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El producte de &lt;strong&gt;(-3) × (-7)&lt;/strong&gt; és igual a &lt;strong&gt;+21&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Menys per menys és MÉS (+): (-3) × (-7) = +21.&quot;}, {&quot;q&quot;: &quot;El nombre &lt;strong&gt;-15&lt;/strong&gt; és més gran que &lt;strong&gt;-3&lt;/strong&gt; (és a dir, -15 &gt; -3) perquè 15 és major que 3.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; En els nombres negatius, com més a prop de zero estigues, més gran ets. A la recta numèrica -3 està més a la dreta que -15, per tant &lt;strong&gt;-3 &gt; -15&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;El resultat de calcular &lt;strong&gt;(-2)³&lt;/strong&gt; és &lt;strong&gt;-8&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (-2) × (-2) × (-2) = (+4) × (-2) = &lt;strong&gt;-8&lt;/strong&gt;. Una base negativa amb exponent senar sempre dóna resultat negatiu.&quot;}, {&quot;q&quot;: &quot;La resta &lt;strong&gt;-8 - (-5)&lt;/strong&gt; dóna com a resultat &lt;strong&gt;-13&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Un menys davant d&#x27;un altre menys es converteix en més: -8 - (-5) = -8 + 5 = &lt;strong&gt;-3&lt;/strong&gt; (no pas -13!).&quot;}, {&quot;q&quot;: &quot;El valor absolut d&#x27;un nombre negatiu sempre és positiu: &lt;strong&gt;|-12| = +12&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El valor absolut és la distància física al zero, i una distància mai no pot ser negativa: |-12| = 12.&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud2-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud2-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Signes i Recta Numèrica" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Trampes de Signe en Operacions</h3>
      </div>
      <p class="pdi-instruction">Fes els càlculs i troba quina opció dóna un resultat diferent de les altres tres:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Objectiu Resultat -12&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen exactament -12, però una dóna un valor diferent. Quina és la intrusa?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-4) × (+3) ➔ Dóna -12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;-4 × 3 = -12&quot;}, {&quot;text&quot;: &quot;-20 - (-8) ➔ Dóna -12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;-20 + 8 = -12&quot;}, {&quot;text&quot;: &quot;(-24) ÷ (-2) ➔ Dóna +12&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Menys entre menys és MÉS (+12), mentre que les altres tres donen -12!&quot;}, {&quot;text&quot;: &quot;-5 - 7 ➔ Dóna -12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;-5 - 7 = -12&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Parèntesis i Prioritat&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions tenen el mateix resultat positiu (+10), però una dóna negatiu. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;2 - (-8) ➔ 2 + 8 = +10&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +10&quot;}, {&quot;text&quot;: &quot;(-5) × (-2) ➔ Dóna +10&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +10&quot;}, {&quot;text&quot;: &quot;(-20) + 10 ➔ Dóna -10&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! -20 + 10 dóna -10 (negatiu), mentre que totes les altres donen +10!&quot;}, {&quot;text&quot;: &quot;(-50) ÷ (-5) ➔ Dóna +10&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +10&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud2-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud2-4" data-unit="ud2" data-title="Balanç i Salt Tèrmic" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R4 · Càlcul Tàctil (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Balanç Financer i Diferència de Temperatures</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric i escriu-lo (recorda prémer '+/-' si el resultat és negatiu):</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Al compte del taller teníem &lt;strong&gt;120 €&lt;/strong&gt;. Hem pagat una factura de recanvis de &lt;strong&gt;185 €&lt;/strong&gt; i a la vesprada un client ens ha pagat &lt;strong&gt;40 €&lt;/strong&gt; per Bizum. Quin és el saldo final en €?&quot;, &quot;expected&quot;: &quot;-25&quot;, &quot;steps&quot;: &quot;120 - 185 = -65 €  ➔  -65 + 40 = &lt;strong&gt;-25 €&lt;/strong&gt; (saldo negatiu).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una cambra de congelació està a &lt;strong&gt;-18°C&lt;/strong&gt;. Si per una avaria la temperatura puja fins a assolir els &lt;strong&gt;+22°C&lt;/strong&gt;, quants graus de temperatura ha pujat en total (salt tèrmic)?&quot;, &quot;expected&quot;: &quot;40&quot;, &quot;steps&quot;: &quot;Diferència: 22 - (-18) = 22 + 18 = &lt;strong&gt;40 graus d&#x27;increment&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Resol l&#x27;operació combinada amb enters respectant els signes: &lt;strong&gt;15 - 2 × (-6)&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;27&quot;, &quot;steps&quot;: &quot;Primer la multiplicació: 2 × (-6) = -12  ➔  15 - (-12) = 15 + 12 = &lt;strong&gt;27&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud2-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud2-5" data-unit="ud2" data-title="Guia Pràctica d'Enters" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Lleis dels Enters sense Errors</h3>
      </div>
      <p class="pdi-instruction">Gira cada targeta per a dominar les 4 regles d'or dels nombres amb signe:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➕➖</span>
                <h4>Suma de Signes Iguals</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Es sumen i es deixa el mateix signe</h5>
                <p>(-4) + (-6) = -10. Si deus 4 € i després deus 6 €, deus un total de 10 €. No es multipliquen signes en sumar!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔀</span>
                <h4>Suma de Signes Diferents</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Es resten i es posa el signe del major</h5>
                <p>(-12) + (+5) = -7. Com que 12 és més gran que 5, es fa 12 - 5 = 7 i es queda el signe negatiu del 12.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️➗</span>
                <h4>Producte i Divisió (Regla Signes)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>+·+ = + | -·- = + | +·- = -</h5>
                <p>Signes IGUALS donen sempre POSITIU (+). Signes DIFERENTS donen sempre NEGATIU (-). Serveix exactament igual per a dividir!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛡️</span>
                <h4>Signe Menys Davant de Parèntesi</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>-(a - b) = -a + b</h5>
                <p>Un signe menys fora d'un parèntesi actua com un multiplicador per (-1) i inverteix el signe de TOTS els termes de l'interior.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud3-1 (category) -->
    <div class="pdi-activity-card" id="act-ud3-1" data-unit="ud3" data-title="Tipus de Fraccions" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R1 · Classificació 8 Fraccions</span>
        <h3>🥧 Gran Classificació: Pròpies, Impròpies o Iguals a la Unitat (8 Fraccions)</h3>
      </div>
      <p class="pdi-instruction">Classifica cadascuna de les 8 fraccions segons el seu valor respecte a la unitat (1):</p>
      <div class="pdi-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="prop">
          <div class="box-head"><span class="box-icon">🥧</span><h4>🟢 Pròpia (< 1)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="improp">
          <div class="box-head"><span class="box-icon">🍰</span><h4>🔴 Impròpia (> 1)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="unit">
          <div class="box-head"><span class="box-icon">🎯</span><h4>⭐ Igual a la Unitat (= 1)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 3/4 (Tres quarts = 0,75)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 5/2 (Cinc mitjos = 2,5)</div>
        <div class="pdi-item" draggable="true" data-cat="unit"><span class="item-handle">☰</span> 8/8 (Huit huitens = 1,0)</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 7/10 (Set dècims = 0,7)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 9/4 (Nou quarts = 2,25)</div>
        <div class="pdi-item" draggable="true" data-cat="unit"><span class="item-handle">☰</span> 12/12 (Dotze dotzens = 1,0)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 11/3 (Onze terços = 3,66...)</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 1/5 (Un cinqué = 0,2)</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud3-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Fraccions i Decimals V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Equivalències i Operacions</h3>
      </div>
      <p class="pdi-instruction">Demostra la teua rapidesa mental amb fraccions i decimals responent VERITAT o FALS:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La fracció &lt;strong&gt;3/4&lt;/strong&gt; equival exactament al decimal &lt;strong&gt;0,75&lt;/strong&gt; i al percentatge &lt;strong&gt;75%&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 3 dividit entre 4 és 0,75, que multiplicat per 100 dóna el 75%.&quot;}, {&quot;q&quot;: &quot;Per a sumar &lt;strong&gt;1/2 + 1/3&lt;/strong&gt; se sumen directament numeradors i denominadors donant &lt;strong&gt;2/5&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; MAI es sumen els denominadors! Cal trobar el comú denominador (m.c.m. de 2 i 3 = 6): 3/6 + 2/6 = &lt;strong&gt;5/6&lt;/strong&gt; (0,833...), no pas 2/5 (0,4)!&quot;}, {&quot;q&quot;: &quot;El decimal &lt;strong&gt;0,333...&lt;/strong&gt; és un decimal periòdic pur i prové de la fracció &lt;strong&gt;1/3&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 1 dividit entre 3 dóna 0,333... amb període infinit de xifra 3.&quot;}, {&quot;q&quot;: &quot;Multiplicar qualsevol nombre per &lt;strong&gt;0,1&lt;/strong&gt; equival exactament a dividir-lo entre &lt;strong&gt;10&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 0,1 és la fracció 1/10. Per exemple: 45 × 0,1 = 45 / 10 = 4,5.&quot;}, {&quot;q&quot;: &quot;La fracció impròpia &lt;strong&gt;7/2&lt;/strong&gt; equival al nombre decimal &lt;strong&gt;3,2&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; 7 dividit entre 2 és exactament &lt;strong&gt;3,5&lt;/strong&gt; (tres i mig), no pas 3,2!&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud3-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud3-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Equivalències i Decimals" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Fraccions no Equivalents i Irracionals</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor de cada element i troba quin no compleix la condició comuna:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Equivalents a 3/5 (0,60)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes fraccions equivalen exactament a 3/5 (és a dir, 0,60 o 60%), però una és diferent. Quina és la intrusa?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;6/10 (Simplificat dividint per 2 = 3/5)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;6/10 = 0,60&quot;}, {&quot;text&quot;: &quot;15/25 (Simplificat dividint per 5 = 3/5)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;15/25 = 0,60&quot;}, {&quot;text&quot;: &quot;9/12 (Simplificat dividint per 3 = 3/4)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 9/12 equival a 3/4 = 0,75, mentre que les altres tres equivalen a 3/5 = 0,60!&quot;}, {&quot;text&quot;: &quot;30/50 (Simplificat dividint per 10 = 3/5)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;30/50 = 0,60&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Decimals Periòdics vs No Periòdics&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són racionals amb decimals periòdics, però un és un nombre irracional amb decimals infinits no periòdics. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;0,666... (Prové de 2/3)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Periòdic pur racional&quot;}, {&quot;text&quot;: &quot;1,8333... (Prové de 11/6)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Periòdic mixt racional&quot;}, {&quot;text&quot;: &quot;π = 3,14159265... (Nombre Pi)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS DETECTAT! El nombre Pi és irracional: té infinites xifres decimals sense cap període repetitiu!&quot;}, {&quot;text&quot;: &quot;0,454545... (Prové de 5/11)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Periòdic pur racional&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud3-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud3-4" data-unit="ud3" data-title="Taller amb Fraccions" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R4 · Càlcul Tàctil (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Mescles de Pintura i Capacitat de Dipòsits</h3>
      </div>
      <p class="pdi-instruction">Resol els 3 problemes pràctics i introdueix el resultat decimal o enter exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Per a preparar una imprimació barregem &lt;strong&gt;3/4 de litre&lt;/strong&gt; de pintura base i &lt;strong&gt;2/5 de litre&lt;/strong&gt; de dissolvent. Quants litres de mescla tenim en format decimal (usa el punt)?&quot;, &quot;expected&quot;: &quot;1.15&quot;, &quot;steps&quot;: &quot;3/4 = 0,75 L  ➔  2/5 = 0,40 L  ➔  0,75 + 0,40 = &lt;strong&gt;1.15 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El dipòsit de gasoil d&#x27;una furgoneta té una capacitat total de &lt;strong&gt;60 litres&lt;/strong&gt;. Si el marcador indica que està ple a &lt;strong&gt;2/3&lt;/strong&gt; de la seua capacitat, quants litres queden?&quot;, &quot;expected&quot;: &quot;40&quot;, &quot;steps&quot;: &quot;(60 × 2) / 3 = 120 / 3 = &lt;strong&gt;40 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un casc de seguretat marcat a &lt;strong&gt;80 €&lt;/strong&gt; té una rebaixa de &lt;strong&gt;1/4&lt;/strong&gt; del seu preu. Quin és el preu final rebaixat en €?&quot;, &quot;expected&quot;: &quot;60&quot;, &quot;steps&quot;: &quot;Descompte: 1/4 de 80 = 20 €  ➔  Preu final: 80 - 20 = &lt;strong&gt;60 €&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud3-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud3-5" data-unit="ud3" data-title="Operacions amb Fraccions" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: L'Algorisme de les Fraccions</h3>
      </div>
      <p class="pdi-instruction">Toca cada targeta per a veure l'algorisme exacte d'operació pas a pas:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➕</span>
                <h4>Suma i Resta (Diferent Denominador)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>1r m.c.m. ➔ 2n Numeradors</h5>
                <p>Es calcula el mínim comú múltiple dels denominadors, es divideix pel vell i es multiplica pel numerador. Després se sumen els numeradors resultants.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️</span>
                <h4>Multiplicació de Fraccions</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>En línia recta (numerador × numerador)</h5>
                <p>(a/b) × (c/d) = (a×c) / (b×d). Exemple: 2/3 × 5/7 = 10/21. No cal fer m.c.m. mai per a multiplicar!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➗</span>
                <h4>Divisió de Fraccions</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Multiplicació en creu</h5>
                <p>(a/b) ÷ (c/d) = (a×d) / (b×c). O multiplicar per la fracció inversa: 2/3 ÷ 4/5 = (2×5) / (3×4) = 10/12 = 5/6.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✂️</span>
                <h4>Simplificació a Fracció Irreducible</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Dividir pel M.C.D.</h5>
                <p>Per a deixar una fracció en la seua forma més simple, es divideix el numerador i el denominador pel seu Màxim Comú Divisor fins que siguen primers entre si.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud4-1 (category) -->
    <div class="pdi-activity-card" id="act-ud4-1" data-unit="ud4" data-title="Directa, Inversa o No Proporcional" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R1 · Classificació 8 Relacions</span>
        <h3>⚖️ Classificació de Magnituds: Directa, Inversa o No Proporcional (8 Casos)</h3>
      </div>
      <p class="pdi-instruction">Classifica cadascuna de les 8 relacions de la vida real o del taller segons el seu tipus de proporció:</p>
      <div class="pdi-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="dir">
          <div class="box-head"><span class="box-icon">↗️</span><h4>📈 Directa (més ➔ més)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="inv">
          <div class="box-head"><span class="box-icon">↘️</span><h4>📉 Inversa (més ➔ menys)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="no">
          <div class="box-head"><span class="box-icon">❌</span><h4>⛔ No Proporcional</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="dir"><span class="item-handle">☰</span> Quilos de xapa d'alumini i el preu total a pagar</div>
        <div class="pdi-item" draggable="true" data-cat="inv"><span class="item-handle">☰</span> Velocitat d'un vehicle i temps que tarda a fer 100 km</div>
        <div class="pdi-item" draggable="true" data-cat="no"><span class="item-handle">☰</span> Edat d'una persona i la seua alçada en centímetres</div>
        <div class="pdi-item" draggable="true" data-cat="inv"><span class="item-handle">☰</span> Nombre d'operaris treballant alhora i dies per a pintar una nau</div>
        <div class="pdi-item" draggable="true" data-cat="dir"><span class="item-handle">☰</span> Hores treballades a tarifa fixa i salari brut rebut</div>
        <div class="pdi-item" draggable="true" data-cat="no"><span class="item-handle">☰</span> Preu d'un bitllet de loteria i la probabilitat de guanyar</div>
        <div class="pdi-item" draggable="true" data-cat="inv"><span class="item-handle">☰</span> Secció d'un tub d'aigua i temps que tarda a buidar un dipòsit</div>
        <div class="pdi-item" draggable="true" data-cat="dir"><span class="item-handle">☰</span> Lletres de pintura i metres quadrats de paret coberts</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud4-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud4-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud4-2" data-unit="ud4" data-title="Proporció i Percentatges V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Percentatges i IVA</h3>
      </div>
      <p class="pdi-instruction">Prem VERITAT o FALS a la pissarra abans que s'esgote el temps:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Si &lt;strong&gt;3 pintors&lt;/strong&gt; tarden &lt;strong&gt;6 dies&lt;/strong&gt; a pintar un taller, &lt;strong&gt;6 pintors&lt;/strong&gt; tardaran &lt;strong&gt;12 dies&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És proporcionalitat INVERSA: al doble de treballadors, el temps es redueix a la meitat! Tardaran &lt;strong&gt;3 dies&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Per a calcular el preu final amb el &lt;strong&gt;21% d&#x27;IVA inclòs&lt;/strong&gt;, es pot multiplicar directament la base imposable per &lt;strong&gt;1,21&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 100% + 21% = 121% = 1,21. És l&#x27;índex de variació directe més ràpid en una factura!&quot;}, {&quot;q&quot;: &quot;En un plànol a escala &lt;strong&gt;1:50&lt;/strong&gt;, una paret que mesura &lt;strong&gt;4 cm&lt;/strong&gt; al dibuix fa realment &lt;strong&gt;2 metres&lt;/strong&gt; a la realitat.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 4 cm × 50 = 200 cm = &lt;strong&gt;2 metres&lt;/strong&gt; reals.&quot;}, {&quot;q&quot;: &quot;Si a un article li apliquen un descompte del &lt;strong&gt;20%&lt;/strong&gt; i després un altre descompte del &lt;strong&gt;20%&lt;/strong&gt;, el descompte total és del &lt;strong&gt;40%&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Els descomptes encadenats no se sumen mai directament, perquè el segon 20% s&#x27;aplica sobre el preu ja rebaixat (descompte real: 36%)!&quot;}, {&quot;q&quot;: &quot;Si un article de 100 € puja un &lt;strong&gt;10%&lt;/strong&gt; (passa a costar 110 €) i l&#x27;endemà baixa un &lt;strong&gt;10%&lt;/strong&gt;, torna a costar exactament &lt;strong&gt;100 €&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El 10% de 110 € són 11 € de rebaixa, per tant queda en &lt;strong&gt;99 €&lt;/strong&gt; (un 1% menys que al principi)!&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud4-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud4-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud4-3" data-unit="ud4" data-title="Descomptes i Escales" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Falses Proporcions i Escales de Dibuix</h3>
      </div>
      <p class="pdi-instruction">Calcula amb precisió i detecta quin valor no correspon a la regla establerta:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Descomptes Reals del 20%&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests articles tenen exactament un 20% de descompte aplicat, però un té un descompte diferent. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Abans 50 € ➔ Ara 40 € (Descompte de 10 €)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;10 de 50 = 20%&quot;}, {&quot;text&quot;: &quot;Abans 100 € ➔ Ara 80 € (Descompte de 20 €)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;20 de 100 = 20%&quot;}, {&quot;text&quot;: &quot;Abans 80 € ➔ Ara 60 € (Descompte de 20 €)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Un descompte de 20 € sobre 80 € representa el 25%, no el 20% (el 20% de 80 € serien 64 €)!&quot;}, {&quot;text&quot;: &quot;Abans 200 € ➔ Ara 160 € (Descompte de 40 €)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;40 de 200 = 20%&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Escales de Reducció vs Ampliació&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes escales són de REDUCCIÓ (el dibuix és més petit que la realitat), però una és d&#x27;AMPLIACIÓ per a peces diminutes de precisió. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;1:20 (Plànol d&#x27;un vehicle)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Escala de reducció&quot;}, {&quot;text&quot;: &quot;1:100 (Plànol d&#x27;un edifici)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Escala de reducció&quot;}, {&quot;text&quot;: &quot;5:1 (Dibuix d&#x27;un engranatge de rellotge)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;escala 5:1 és d&#x27;AMPLIACIÓ: el dibuix és 5 vegades més gran que la peça real!&quot;}, {&quot;text&quot;: &quot;1:500 (Plànol topogràfic d&#x27;una parcel·la)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Escala de reducció&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud4-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud4-4" data-unit="ud4" data-title="Factura i Regla de Tres" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R4 · Càlcul Tàctil (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Factures de Taller i Consums de Combustible</h3>
      </div>
      <p class="pdi-instruction">Resol els 3 problemes i introdueix la xifra numèrica final mitjançant el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un cotxe de taller consumeix &lt;strong&gt;6 litres de dièsel cada 100 km&lt;/strong&gt;. Quants litres de combustible gastarà en un trajecte de &lt;strong&gt;350 km&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;21&quot;, &quot;steps&quot;: &quot;Proporció directa: (350 × 6) / 100 = 2100 / 100 = &lt;strong&gt;21 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una reparació té una base de peces de &lt;strong&gt;150 €&lt;/strong&gt; amb un &lt;strong&gt;10% de descompte&lt;/strong&gt; comercial, i després s&#x27;aplica el &lt;strong&gt;21% d&#x27;IVA&lt;/strong&gt;. Quin és l&#x27;import final que paga el client en € (amb dos decimals)?&quot;, &quot;expected&quot;: &quot;163.35&quot;, &quot;steps&quot;: &quot;Preu amb descompte: 150 × 0,90 = 135 €  ➔  Amb IVA: 135 × 1,21 = &lt;strong&gt;163.35 €&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;4 bombes d&#x27;aigua iguals buiden un pou d&#x27;inundació en &lt;strong&gt;6 hores&lt;/strong&gt;. Si connectem &lt;strong&gt;8 bombes&lt;/strong&gt; funcionant alhora, quantes hores tardaran a buidar-lo?&quot;, &quot;expected&quot;: &quot;3&quot;, &quot;steps&quot;: &quot;Proporcionalitat inversa: (4 × 6) / 8 = 24 / 8 = &lt;strong&gt;3 hores&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud4-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud4-5" data-unit="ud4" data-title="Fórmules de Proporció" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Eines Clau de Càlcul Proporcional</h3>
      </div>
      <p class="pdi-instruction">Gira les 4 targetes per a revisar les fórmules que s'apliquen diàriament a la feina:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">↗️</span>
                <h4>Regla de Tres Directa</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x = (B × C) / A</h5>
                <p>Si A produeix B, aleshores C produirà x. Es multipliquen les dades en creu diagonal i es divideix pel terme enfrontat.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">↘️</span>
                <h4>Regla de Tres Inversa</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x = (A × B) / C</h5>
                <p>Quan una magnitud augmenta i l'altra disminueix. Es multipliquen les dades de la mateixa línia horitzontal i es divideix per la restant.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📈</span>
                <h4>Índex de Variació (Pujades)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>I.V. = 1 + (p / 100)</h5>
                <p>Per a pujar un 15%, es multiplica per 1,15. Per a afegir un 21% d'IVA, es multiplica per 1,21 en un únic pas de calculadora.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📉</span>
                <h4>Índex de Variació (Rebaixes)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>I.V. = 1 - (d / 100)</h5>
                <p>Per a rebaixar un 25%, es multiplica per 0,75 (es paga el 75%). Per a rebaixar un 10%, es multiplica per 0,90.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud5-1 (order) -->
    <div class="pdi-activity-card" id="act-ud5-1" data-unit="ud5" data-title="Resolució d'Equació" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R1 · Ordre 5 Passos</span>
        <h3>📐 Resolució d'Equacions amb Parèntesi: 3(x - 2) + 4 = 2x + 8</h3>
      </div>
      <p class="pdi-instruction">Ordena els 5 passos matemàtics per a trobar la solució exacta de la incògnita x:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Treure el parèntesi aplicant la propietat distributiva: 3x - 6 + 4 = 2x + 8</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Simplificar els termes numèrics del membre esquerre (-6 + 4 = -2): 3x - 2 = 2x + 8</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Transposar termes: passar 2x a l'esquerra restant i -2 a la dreta sumant: 3x - 2x = 8 + 2</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Reduir els dos membres de l'equació: 1x = 10</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Concloure la solució definitiva de la incògnita: x = 10</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r pas: eliminar parèntesi</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n pas: agrupar nombres</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r pas: lletres a l'esquerra, números a la dreta</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t pas: reduir termes semblants</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è pas: solució final</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud5-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud5-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud5-2" data-unit="ud5" data-title="Àlgebra i Lleis V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Lleis Algebraiques</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les lleis algebraiques i operacions amb monomis:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La suma dels monomis semblants &lt;strong&gt;2x + 3x&lt;/strong&gt; és igual a &lt;strong&gt;5x&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Es sumen els coeficients (2 + 3 = 5) i es manté la mateixa part literal (x).&quot;}, {&quot;q&quot;: &quot;L&#x27;expressió &lt;strong&gt;x · x&lt;/strong&gt; és igual a &lt;strong&gt;2x&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Multiplicar una variable per si mateixa és elevar-la al quadrat: x · x = &lt;strong&gt;x²&lt;/strong&gt; (2x és la suma: x + x)!&quot;}, {&quot;q&quot;: &quot;En l&#x27;equació &lt;strong&gt;3x - 7 = 14&lt;/strong&gt;, el valor correcte de x és &lt;strong&gt;7&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 3x = 14 + 7 = 21  ➔  x = 21 / 3 = &lt;strong&gt;7&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;El grau del monomi &lt;strong&gt;-5x²y³&lt;/strong&gt; és igual a &lt;strong&gt;3&lt;/strong&gt; perquè 3 és l&#x27;exponent més gran.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El grau d&#x27;un monomi és la SUMA de tots els exponents de les seues lletres: 2 + 3 = &lt;strong&gt;grau 5&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Quan un terme que està MULTIPLICANT a un membre passa a l&#x27;altre membre, passa &lt;strong&gt;DIVIDINT&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La regla de la transposició de termes sempre empra l&#x27;operació matemàtica inversa (multiplicar ➔ dividir).&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud5-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud5-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud5-3" data-unit="ud5" data-title="Monomis i Solucions" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Monomis no Semblants i Equacions Tramposes</h3>
      </div>
      <p class="pdi-instruction">Resol mentalment i detecta quina opció no comparteix la mateixa propietat que les altres tres:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Monomis Semblants a 4x²y&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests monomis són SEMBLANTS a 4x²y (tenen exactament la mateixa part literal x²y), però un NO ho és. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;-7x²y (Part literal: x²y)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Té x²y&quot;}, {&quot;text&quot;: &quot;x²y (Part literal: x²y, coeficient 1)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Té x²y&quot;}, {&quot;text&quot;: &quot;5xy² (Part literal: xy²)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! A 5xy² l&#x27;exponent 2 està sobre la y, mentre que a x²y està sobre la x. No són semblants!&quot;}, {&quot;text&quot;: &quot;0,5x²y (Part literal: x²y)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Té x²y&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Equacions amb Solució x = 3&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes equacions tenen com a solució x = 3, però una té una solució diferent. Quina és la intrusa?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;2x + 4 = 10 ➔ 2(3)+4=10 (Solució x=3)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;x = 3&quot;}, {&quot;text&quot;: &quot;5x - 5 = 10 ➔ 5(3)-5=10 (Solució x=3)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;x = 3&quot;}, {&quot;text&quot;: &quot;4x + 2 = 18 ➔ 4x=16 ➔ x=4&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! En 4x + 2 = 18 la solució és x = 4, no pas x = 3!&quot;}, {&quot;text&quot;: &quot;x/3 + 5 = 6 ➔ x/3=1 ➔ x=3&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;x = 3&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud5-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud5-4" data-unit="ud5" data-title="Resol les Equacions" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R4 · Càlcul Tàctil (3 Equacions)</span>
        <h3>🔢 Teclat Mental: Resol les 3 Equacions de Primer Grau</h3>
      </div>
      <p class="pdi-instruction">Troba el valor numèric exacte de la incògnita x en cada cas i tecleja'l:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Resol l&#x27;equació: &lt;strong&gt;4x - 8 = 16&lt;/strong&gt;. Quant val &lt;strong&gt;x&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;6&quot;, &quot;steps&quot;: &quot;4x = 16 + 8 = 24  ➔  x = 24 / 4 = &lt;strong&gt;6&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Resol l&#x27;equació amb x a ambdós membres: &lt;strong&gt;5x + 3 = 2x + 18&lt;/strong&gt;. Quant val &lt;strong&gt;x&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;5&quot;, &quot;steps&quot;: &quot;5x - 2x = 18 - 3  ➔  3x = 15  ➔  x = 15 / 3 = &lt;strong&gt;5&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Resol l&#x27;equació amb parèntesi: &lt;strong&gt;2(x + 4) = 30&lt;/strong&gt;. Quant val &lt;strong&gt;x&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;11&quot;, &quot;steps&quot;: &quot;2x + 8 = 30  ➔  2x = 30 - 8 = 22  ➔  x = 22 / 2 = &lt;strong&gt;11&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud5-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud5-5" data-unit="ud5" data-title="Traductor Algebraic" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Diccionari de Llenguatge Natural a Àlgebra</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a aprendre a plantejar equacions traduint expressions habituals:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔤</span>
                <h4>El triple d'un nombre menys cinc</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>3x - 5</h5>
                <p>El triple és multiplicar per 3 (3x) i restar-li 5 unitats. Si el nombre fóra 10, seria 3(10) - 5 = 25.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">👥</span>
                <h4>La suma de dos nombres consecutius</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x + (x + 1) = 2x + 1</h5>
                <p>Un nombre és x i el seu següent és x + 1. La suma dels dos és x + x + 1 = 2x + 1 (sempre dóna un nombre senar!).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚖️</span>
                <h4>La meitat d'un nombre més el seu doble</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>(x / 2) + 2x</h5>
                <p>La meitat és x/2 i el doble és 2x. En comú denominador: x/2 + 4x/2 = 5x/2.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🎂</span>
                <h4>L'edat d'una persona d'ací a 7 anys</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>x + 7  (fa 5 anys: x - 5)</h5>
                <p>En problemes d'edats, el temps futur es suma a la incògnita (x + 7) i el temps passat es resta (x - 5).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud6-1 (order) -->
    <div class="pdi-activity-card" id="act-ud6-1" data-unit="ud6" data-title="Fases Mètode Científic" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R1 · Protocol 5 Passos</span>
        <h3>🔬 Protocol Rigorós del Mètode Científic en una Avaria de Taller</h3>
      </div>
      <p class="pdi-instruction">Ordena cronològicament com investiga un tècnic per a resoldre científicament un problema:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Observació detallada del símptoma o anomalia (soroll, sobreescalfament, fuga)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Formulació d'una hipòtesi raonada de la possible causa de la fallada</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Disseny experimental i assaig controlat amb instruments de mesura</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Anàlisi de les dades numèriques mesurades i contrast amb les toleràncies</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Conclusió, verificació de la hipòtesi i redacció de l'informe tècnic de reparació</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r pas: observar</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n pas: plantejar hipòtesi</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r pas: experimentació</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t pas: anàlisi de dades</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è pas: informe i conclusió</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud6-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud6-2" data-unit="ud6" data-title="Unitats i Mesura V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre el Sistema Internacional (SI)</h3>
      </div>
      <p class="pdi-instruction">Respon si cada afirmació sobre unitats científiques i instruments és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;En el Sistema Internacional (SI), la unitat fonamental de massa és el &lt;strong&gt;gram (g)&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;única unitat fonamental del SI que porta prefix per raons històriques és el &lt;strong&gt;quilogram (kg)&lt;/strong&gt;, no el gram!&quot;}, {&quot;q&quot;: &quot;La precisió d&#x27;un &lt;strong&gt;calibre o peu de rei convencional&lt;/strong&gt; amb nònius pot arribar fàcilment a &lt;strong&gt;0,05 mm&lt;/strong&gt; (mitja desena de mil·límetre).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els calibres mecànics de taller mesuren habitualment amb apreciació de 0,05 mm o 0,02 mm.&quot;}, {&quot;q&quot;: &quot;Un volum d&#x27;exactament &lt;strong&gt;1 metre cúbic (1 m³)&lt;/strong&gt; té una capacitat equivalent a &lt;strong&gt;1.000 litres&lt;/strong&gt; d&#x27;aigua.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 1 m³ = 1.000 dm³ = 1.000 L. (Una tona d&#x27;aigua pura!).&quot;}, {&quot;q&quot;: &quot;La densitat d = m / V és una &lt;strong&gt;magnitud fonamental&lt;/strong&gt; del Sistema Internacional.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La densitat és una &lt;strong&gt;magnitud derivada&lt;/strong&gt; perquè s&#x27;obté combinant la massa i la longitud al cub (kg/m³).&quot;}, {&quot;q&quot;: &quot;Per a passar d&#x27;una velocitat expressada en &lt;strong&gt;km/h&lt;/strong&gt; a &lt;strong&gt;m/s&lt;/strong&gt;, s&#x27;ha de &lt;strong&gt;DIVIDIR entre 3,6&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 1 km/h = 1000 m / 3600 s = 1 / 3,6 m/s. Per exemple: 72 km/h ÷ 3,6 = 20 m/s.&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud6-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud6-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud6-3" data-unit="ud6" data-title="Magnituds i Aparells" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Magnituds Derivades i Aparells Fora de Lloc</h3>
      </div>
      <p class="pdi-instruction">Detecta quin element trenca la categoria científica del grup:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Magnituds Fonamentals del SI&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes magnituds són FONAMENTALS del Sistema Internacional, però una és DERIVADA. Quina és la intrusa?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Longitud (Metre, m)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fonamental del SI&quot;}, {&quot;text&quot;: &quot;Temps (Segon, s)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fonamental del SI&quot;}, {&quot;text&quot;: &quot;Velocitat (Metres per segon, m/s)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La velocitat és DERIVADA: s&#x27;obté dividint la longitud entre el temps (v = e / t)!&quot;}, {&quot;text&quot;: &quot;Temperatura (Kelvin, K)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fonamental del SI&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aparells de Mesura de Taller Elèctric&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests aparells mesuren magnituds elèctriques, però un mesura forces mecàniques. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Voltímetre (Mesura tensió elèctrica en Volts)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aparell elèctric&quot;}, {&quot;text&quot;: &quot;Amperímetre (Mesura intensitat de corrent en Amperes)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aparell elèctric&quot;}, {&quot;text&quot;: &quot;Dinamòmetre (Mesura forces en Newtons)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El dinamòmetre mesura forces mitjançant l&#x27;allargament d&#x27;una molla, no pas electricitat!&quot;}, {&quot;text&quot;: &quot;Ohmmètre (Mesura resistència elèctrica en Ohms)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aparell elèctric&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud6-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud6-4" data-unit="ud6" data-title="Canvis d'Unitats SI" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R4 · Càlcul Tàctil (3 Conversions)</span>
        <h3>🔢 Teclat Mental: Conversió d'Unitats al Sistema Internacional</h3>
      </div>
      <p class="pdi-instruction">Fes les conversions i escriu el valor numèric exacte amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un vehicle circula a &lt;strong&gt;72 km/h&lt;/strong&gt;. Quina és la seua velocitat expressada en &lt;strong&gt;metres per segon (m/s)&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;20&quot;, &quot;steps&quot;: &quot;72 km/h ÷ 3,6 = &lt;strong&gt;20 m/s&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una xapa d&#x27;acer rectangular fa &lt;strong&gt;150 cm&lt;/strong&gt; de llargària per &lt;strong&gt;80 cm&lt;/strong&gt; d&#x27;amplària. Quina és la seua àrea en &lt;strong&gt;metres quadrats (m²)&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;1.2&quot;, &quot;steps&quot;: &quot;150 cm = 1,5 m  i  80 cm = 0,8 m  ➔  1,5 × 0,8 = &lt;strong&gt;1.2 m²&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una ampolla de refrigerant de taller conté &lt;strong&gt;2,5 litres&lt;/strong&gt;. Quants &lt;strong&gt;centilitres (cL)&lt;/strong&gt; són?&quot;, &quot;expected&quot;: &quot;250&quot;, &quot;steps&quot;: &quot;1 L = 100 cL  ➔  2,5 × 100 = &lt;strong&gt;250 cL&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud6-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud6-5" data-unit="ud6" data-title="Metrologia i Errors" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Conceptes de Metrologia al Taller</h3>
      </div>
      <p class="pdi-instruction">Toca cada targeta per a comprendre la precisió, els errors i els factors de conversió:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🎯</span>
                <h4>Precisió vs Exactitud</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Repetibilitat vs Veritat</h5>
                <p>L'exactitud és com de a prop està la mesura del valor real. La precisió és com de semblants són diverses mesures fetes en les mateixes condicions.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚠️</span>
                <h4>Error Absolut i Error Relatiu</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Eₐ = |Vreal - Vmesurat|</h5>
                <p>L'error absolut és la diferència directa en les mateixes unitats. L'error relatiu és el percentatge d'error respecte al total: Er = (Eₐ / Vreal) × 100%.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📏</span>
                <h4>Micròmetre o Pàlmer</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Apreciació de 0,001 mm</h5>
                <p>Basat en un cargol micromètric de pas fi (normalment 0,5 mm per volta). Permet mesurar mil·lèsimes de mil·límetre (micres) en cilindres i pistons.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔢</span>
                <h4>Prefixos Científics Kilo, Mega, Giga</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>k = 10³ | M = 10⁶ | G = 10⁹</h5>
                <p>Kilo és mil (1.000). Mega és un milió (1.000.000). Giga és mil milions (1.000.000.000). Essencials en informàtica i potències elèctriques.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud7-1 (category) -->
    <div class="pdi-activity-card" id="act-ud7-1" data-unit="ud7" data-title="Pures vs Mescles" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R1 · Classificació 8 Substàncies</span>
        <h3>🧪 Gran Classificació Química: Pures, Homogènies o Heterogènies (8 Substàncies)</h3>
      </div>
      <p class="pdi-instruction">Classifica cadascuna de les 8 substàncies habituals segons la seua naturalesa material:</p>
      <div class="pdi-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="pura">
          <div class="box-head"><span class="box-icon">💠</span><h4>💎 Substància Pura (Element o Compost)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="homo">
          <div class="box-head"><span class="box-icon">☕</span><h4>✨ Mescla Homogènia (Dissolució / Aliatge)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="hete">
          <div class="box-head"><span class="box-icon">🥗</span><h4>🥣 Mescla Heterogènia</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="pura"><span class="item-handle">☰</span> Coure pur d'un cable elèctric (Element químic Cu)</div>
        <div class="pdi-item" draggable="true" data-cat="homo"><span class="item-handle">☰</span> Aigua de l'aixeta amb sal totalment dissolta</div>
        <div class="pdi-item" draggable="true" data-cat="hete"><span class="item-handle">☰</span> Aigua amb oli de motor (dues fases visibles)</div>
        <div class="pdi-item" draggable="true" data-cat="pura"><span class="item-handle">☰</span> Aigua destil·lada pura (Compost químic H₂O)</div>
        <div class="pdi-item" draggable="true" data-cat="homo"><span class="item-handle">☰</span> Aire net del taller (mescla gasosa de N₂, O₂, Ar)</div>
        <div class="pdi-item" draggable="true" data-cat="hete"><span class="item-handle">☰</span> Formigó d'obra (ciment, arena, grava i aigua)</div>
        <div class="pdi-item" draggable="true" data-cat="homo"><span class="item-handle">☰</span> Aliatge de llautó (coure i zinc fosos)</div>
        <div class="pdi-item" draggable="true" data-cat="hete"><span class="item-handle">☰</span> Granit d'una taula de traçat (quars, feldespat i mica)</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud7-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud7-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud7-2" data-unit="ud7" data-title="Matèria i Canvis V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Canvis d'Estat i Densitat</h3>
      </div>
      <p class="pdi-instruction">Respon si cada principi físic i químic és VERITAT o FALS:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El gel sura a l&#x27;aigua líquida perquè en congelar-se augmenta de volum i la seua densitat es fa &lt;strong&gt;menor que la de l&#x27;aigua líquida&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;aigua té una anomalia tèrmica única: el gel té una densitat d&#x27;uns 0,92 g/cm³, menor que l&#x27;1 g/cm³ de l&#x27;aigua líquida, per això sura!&quot;}, {&quot;q&quot;: &quot;El pas directe d&#x27;estat gasós a líquid s&#x27;anomena &lt;strong&gt;evaporació&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; De gas a líquid s&#x27;anomena &lt;strong&gt;CONDENSACIÓ&lt;/strong&gt; (l&#x27;evaporació és el contrari: de líquid a gas)!&quot;}, {&quot;q&quot;: &quot;En una reacció química ordinària, la massa total dels reactius és sempre igual a la massa total dels productes (&lt;strong&gt;Llei de Conservació de la Massa de Lavoisier&lt;/strong&gt;).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; &#x27;La matèria ni es crea ni es destrueix, només es transforma&#x27;.&quot;}, {&quot;q&quot;: &quot;Mentre dura el procés de fusió o ebullició d&#x27;una substància pura, la temperatura &lt;strong&gt;roman completament constant&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Tota l&#x27;energia tèrmica subministrada s&#x27;empra a trencar els enllaços entre partícules (calor latent), sense augmentar la temperatura fins que tot ha canviat d&#x27;estat.&quot;}, {&quot;q&quot;: &quot;L&#x27;aigua pura destil·lada és una &lt;strong&gt;mescla homogènia&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;aigua destil·lada és una &lt;strong&gt;SUBSTÀNCIA PURA COMPOSTA&lt;/strong&gt; (molècules idèntiques d&#x27;H₂O), no una mescla!&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud7-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud7-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud7-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud7-3" data-unit="ud7" data-title="Canvis Físics vs Químics" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Canvis Físics vs Químics i Propietats Específiques</h3>
      </div>
      <p class="pdi-instruction">Descobreix quin fenomen no correspon a la naturalesa del conjunt:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Canvis Químics vs Físics&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests processos són CANVIS QUÍMICS (es formen substàncies noves diferents), però un és un CANVI FÍSIC. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Oxidació d&#x27;una clau de ferro que s&#x27;omple de rovell&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Canvi químic (Fe + O₂)&quot;}, {&quot;text&quot;: &quot;Combustió de gasolina al motor d&#x27;un vehicle&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Canvi químic&quot;}, {&quot;text&quot;: &quot;Fusió d&#x27;una barra de plom quan s&#x27;escalfa al bufador&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La fusió és un CANVI FÍSIC d&#x27;estat: el plom líquid continua sent plom pur, no canvia la seua composició química!&quot;}, {&quot;text&quot;: &quot;Càrrega i descàrrega química d&#x27;una bateria de plom-àcid&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Canvi químic&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Propietats Específiques o Característiques&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes propietats són ESPECÍFIQUES (permeten identificar la substància perquè no depenen de la quantitat), però una és GENERAL. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Densitat (kg/m³)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Propietat específica&quot;}, {&quot;text&quot;: &quot;Punt d&#x27;ebullició (Temperatura a la qual bull)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Propietat específica&quot;}, {&quot;text&quot;: &quot;Volum total que ocupa (Litres o m³)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El volum és una propietat GENERAL o extensiva: depèn de la mida de l&#x27;objecte i no serveix per a identificar de quin material es tracta!&quot;}, {&quot;text&quot;: &quot;Conductivitat elèctrica&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Propietat específica&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud7-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud7-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud7-4" data-unit="ud7" data-title="Càlcul de Densitat" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R4 · Càlcul Tàctil (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Càlculs de Densitat, Massa i Volum Desplaçat</h3>
      </div>
      <p class="pdi-instruction">Aplica la fórmula d = m / V i escriu el valor numèric exacte en cada cas:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un bloc de ferro de taller té una massa de &lt;strong&gt;780 grams&lt;/strong&gt; i mesura un volum exacte de &lt;strong&gt;100 cm³&lt;/strong&gt;. Quina és la seua densitat en &lt;strong&gt;g/cm³&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;7.8&quot;, &quot;steps&quot;: &quot;d = m / V  ➔  d = 780 g / 100 cm³ = &lt;strong&gt;7.8 g/cm³&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En una proveta amb aigua fins a la marca de &lt;strong&gt;50 mL&lt;/strong&gt; s&#x27;introdueix una peça irregular de metall. El nivell de l&#x27;aigua puja fins als &lt;strong&gt;85 mL&lt;/strong&gt;. Quin és el volum exacte de la peça en &lt;strong&gt;cm³&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;35&quot;, &quot;steps&quot;: &quot;Volum desplaçat: 85 - 50 = 35 mL  ➔  Com que 1 mL = 1 cm³, el volum és &lt;strong&gt;35 cm³&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un lubricant d&#x27;automoció té una densitat de &lt;strong&gt;0,92 kg/litre&lt;/strong&gt;. Quants quilograms (kg) pesaran &lt;strong&gt;5 litres&lt;/strong&gt; d&#x27;aquest oli?&quot;, &quot;expected&quot;: &quot;4.6&quot;, &quot;steps&quot;: &quot;m = d × V  ➔  m = 0,92 kg/L × 5 L = &lt;strong&gt;4.6 kg&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud7-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud7-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud7-5" data-unit="ud7" data-title="Separació de Mescles" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Tècniques Industrials de Separació</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a aprendre el fonament físic de cada mètode de separació de mescles:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚗️</span>
                <h4>Destil·lació Fraccionada</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Diferència en Punts d'Ebullició</h5>
                <p>S'escalfa la mescla líquida homogènia. El component més volàtil s'evapora primer, passa pel condensador i es recull separat (essencial en refineria de petroli!).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⏳</span>
                <h4>Decantació</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Diferència de Densitat</h5>
                <p>Per a separar líquids immiscibles (com aigua i oli) o sòlids en suspensió. El més dens cau al fons per gravetat i s'obre la clau de l'embut.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">☕</span>
                <h4>Filtració</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Diferència de Mida de Partícula</h5>
                <p>Un medi porós reté les partícules sòlides més grans que els porus i deixa passar el líquid filtrat (filtre d'oli i d'aire del cotxe!).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🧲</span>
                <h4>Separació Magnètica</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Ferromagnetisme</h5>
                <p>Un electroimant potent atrau i separa els metalls ferrosos (ferro, acer) de la resta de residus no fèrrics (plàstic, alumini, coure).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud8-1 (order) -->
    <div class="pdi-activity-card" id="act-ud8-1" data-unit="ud8" data-title="El Sistema Solar" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R1 · Ordre 8 Planetes</span>
        <h3>🪐 Els 8 Planetes del Sistema Solar en Ordre des del Sol</h3>
      </div>
      <p class="pdi-instruction">Ordena els 8 planetes començant pel més pròxim al Sol fins al més exterior:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Mercuri (el planeta rocallós més xicotet i proper al Sol)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Venus (el més brillant i calent per efecte d'hivernacle)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Terra (el planeta blau amb aigua líquida i atmosfera protectora)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Mart (el planeta roig ric en òxid de ferro)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Júpiter (el gegant gasós més gran del Sistema Solar)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6è: Saturn (el gegant gasós famós pels seus espectaculars anells)</div>
          <div class="pdi-item" draggable="true" data-order="7"><span class="item-handle">☰</span> 7è: Urà (gegant de gel amb l'eix de rotació totalment inclinat)</div>
          <div class="pdi-item" draggable="true" data-order="8"><span class="item-handle">☰</span> 8è: Neptú (el planeta més llunyà, amb vents supersònics)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r planeta</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n planeta</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r planeta</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t planeta</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è planeta</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">6è planeta</span></div>
          <div class="pdi-slot" data-slot="7"><span class="slot-badge">Pas 7</span><span class="slot-hint">7è planeta</span></div>
          <div class="pdi-slot" data-slot="8"><span class="slot-badge">Pas 8</span><span class="slot-hint">8è planeta</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud8-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud8-2" data-unit="ud8" data-title="Astronomia i Terra V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre la Terra i l'Univers</h3>
      </div>
      <p class="pdi-instruction">Comprova els teus coneixements astronòmics i respon VERITAT o FALS ràpidament:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El moviment de &lt;strong&gt;translació&lt;/strong&gt; de la Terra al voltant del Sol dura exactament &lt;strong&gt;365 dies i 6 hores&lt;/strong&gt; aproximadament.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquestes 6 hores sobrants cada any s&#x27;acumulen i donen lloc a un any de traspàs de 366 dies cada 4 anys.&quot;}, {&quot;q&quot;: &quot;A l&#x27;estiu fa més calor perquè la Terra està &lt;strong&gt;molt més a prop del Sol&lt;/strong&gt; que a l&#x27;hivern.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Les estacions es deuen a la &lt;strong&gt;INCLINACIÓ de 23,5° de l&#x27;eix de rotació&lt;/strong&gt;, no a la distància (de fet, al juliol la Terra està en el seu punt més llunyà del Sol: l&#x27;afeli)!&quot;}, {&quot;q&quot;: &quot;L&#x27;&lt;strong&gt;efecte d&#x27;hivernacle natural&lt;/strong&gt; és indispensable per a la vida a la Terra, ja que manté una temperatura mitjana d&#x27;uns +15°C.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Sense efecte d&#x27;hivernacle natural, la Terra estaria completament congelada a -18°C. El problema actual és l&#x27;augment artificial descontrolat de CO₂.&quot;}, {&quot;q&quot;: &quot;El mantell terrestre és una capa completament líquida de ferro pur fos.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El mantell està format per roques dures i viscoles (magma); la capa líquida de ferro i níquel és el &lt;strong&gt;nucli extern&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Els &lt;strong&gt;solsticis&lt;/strong&gt; (juny i desembre) marquen el dia amb la nit més llarga o el dia amb més hores de llum de l&#x27;any.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Al solstici d&#x27;estiu tenim el dia més llarg de l&#x27;any, i al d&#x27;hivern la nit més llarga.&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud8-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud8-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud8-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud8-3" data-unit="ud8" data-title="Atmosfera i Gasos" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Capes de la Terra i Gasos d'Hivernacle</h3>
      </div>
      <p class="pdi-instruction">Identifica l'element discordant en cada ronda:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Capes de l&#x27;Atmosfera Terrestre&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests noms són capes gasoses de l&#x27;ATMOSFERA, però un és una capa sòlida de la GEOSFERA. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Troposfera (On es produeixen els fenòmens meteorològics)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa atmosfèrica (0-12 km)&quot;}, {&quot;text&quot;: &quot;Estratosfera (On es troba la capa d&#x27;ozó)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa atmosfèrica (12-50 km)&quot;}, {&quot;text&quot;: &quot;Litosfera (Capa sòlida rocallosa de l&#x27;escorça terrestre)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La litosfera pertany a la GEOSFERA (roques i terra), no pas a l&#x27;atmosfera!&quot;}, {&quot;text&quot;: &quot;Termosfera o Ionosfera (On es formen les aurores boreals)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa atmosfèrica&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Gasos amb Efecte d&#x27;Hivernacle&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests gasos atrapen calor atmosfèrica (gasos d&#x27;hivernacle), però un NO és gas d&#x27;efecte d&#x27;hivernacle. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Dioxid de carboni (CO₂)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas d&#x27;hivernacle principal&quot;}, {&quot;text&quot;: &quot;Metà (CH₄)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas d&#x27;hivernacle molt potent&quot;}, {&quot;text&quot;: &quot;Oxigen pur (O₂)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;oxigen di-atòmic (O₂) no absorbeix radiació infraroja i per tant NO és un gas d&#x27;efecte d&#x27;hivernacle!&quot;}, {&quot;text&quot;: &quot;Vapor d&#x27;aigua (H₂O gas)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;El gas d&#x27;hivernacle natural més abundant&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud8-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud8-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud8-4" data-unit="ud8" data-title="Astronomia Numèrica" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R4 · Càlcul Tàctil (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Velocitat de la Llum i Anys de Traspàs</h3>
      </div>
      <p class="pdi-instruction">Fes els càlculs astronòmics i introdueix el resultat mitjançant el teclat en pantalla:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La translació terrestre dura 365 dies i 6 hores. Com que cada any s&#x27;acumulen 6 hores, cada quants anys cal afegir un dia extra al calendari (&lt;strong&gt;any de traspàs&lt;/strong&gt;, 24 hores)?&quot;, &quot;expected&quot;: &quot;4&quot;, &quot;steps&quot;: &quot;24 hores / 6 hores per any = &lt;strong&gt;cada 4 anys&lt;/strong&gt; s&#x27;afegeix el 29 de febrer.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;La llum viatja a &lt;strong&gt;300.000 km/s&lt;/strong&gt;. Si el Sol està a &lt;strong&gt;150.000.000 km&lt;/strong&gt; de la Terra, quants segons triga la llum solar a arribar a nosaltres?&quot;, &quot;expected&quot;: &quot;500&quot;, &quot;steps&quot;: &quot;Temps: 150.000.000 / 300.000 = &lt;strong&gt;500 segons&lt;/strong&gt; (aproximadament 8 minuts i 20 segons).&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;La Terra tarda exactament 24 hores en fer un gir complet sobre si mateixa (360°). Quants graus gira la Terra en &lt;strong&gt;2 hores&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;30&quot;, &quot;steps&quot;: &quot;360° / 24 hores = 15° per hora  ➔  15° × 2 hores = &lt;strong&gt;30 graus&lt;/strong&gt;.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud8-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud8-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud8-5" data-unit="ud8" data-title="Geodinàmica Terrestre" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #4f46e5;">UD8 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Fenòmens de la Dinàmica Terrestre</h3>
      </div>
      <p class="pdi-instruction">Toca cada targeta per a veure la causa científica de cada gran procés planetari:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌋</span>
                <h4>Tectònica de Plaques</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Corrents de Convecció al Mantell</h5>
                <p>La litosfera està fragmentada en plaques tectòniques que es mouen uns pocs centímetres a l'any, causant terratrèmols, volcans i la creació de serralades.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌑</span>
                <h4>Eclipsi Solar vs Eclipsi Lunar</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Sol - Lluna - Terra vs Sol - Terra - Lluna</h5>
                <p>En l'eclipsi solar, la Lluna s'interposa entre el Sol i la Terra projectant la seua ombra. En el lunar, és la Terra qui fa ombra sobre la Lluna plena.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌊</span>
                <h4>Marea Viva i Marea Morta</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Atracció Gravitatòria de Lluna i Sol</h5>
                <p>Quan la Lluna i el Sol estan alineats (Lluna nova o plena), les seues forces gravitatòries se sumen creant marees vives de màxim desnivell.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔄</span>
                <h4>Cicle Integral de l'Aigua</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Evaporació ➔ Condensació ➔ Precipitació</h5>
                <p>L'energia solar evapora l'aigua superficial, es condensa en núvols, precipita en forma de pluja o neu i torna als oceans per infiltració i rius.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
        </div>
      </div>
    </div>
    <!-- act-ud9-1 (category) -->
    <div class="pdi-activity-card" id="act-ud9-1" data-unit="ud9" data-title="Tipus de Riscos de Taller" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R1 · Classificació 8 Riscos</span>
        <h3>⚠️ Prevenció de Riscos Laborals (PRL): Mecànics, Elèctrics o Químics (8 Casos)</h3>
      </div>
      <p class="pdi-instruction">Classifica cadascuna de les 8 situacions de risc del taller en la seua categoria oficial de PRL:</p>
      <div class="pdi-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="mec">
          <div class="box-head"><span class="box-icon">🚜</span><h4>⚙️ Risc Mecànic</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="elec">
          <div class="box-head"><span class="box-icon">🔌</span><h4>⚡ Risc Elèctric</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="quim">
          <div class="box-head"><span class="box-icon">🧪</span><h4>☣️ Risc Químic / Ambiental</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="mec"><span class="item-handle">☰</span> Enganxada de roba a l'eix giratori d'un torn o trepant</div>
        <div class="pdi-item" draggable="true" data-cat="elec"><span class="item-handle">☰</span> Contacte directe amb un cable pelat sense aïllament</div>
        <div class="pdi-item" draggable="true" data-cat="quim"><span class="item-handle">☰</span> Inhalació de vapors de dissolvent en netejar peces</div>
        <div class="pdi-item" draggable="true" data-cat="mec"><span class="item-handle">☰</span> Projecció de ferritja o encenalls als ulls en esmolar</div>
        <div class="pdi-item" draggable="true" data-cat="elec"><span class="item-handle">☰</span> Sobreescalfament d'una base d'endolls sobrecarregada</div>
        <div class="pdi-item" draggable="true" data-cat="quim"><span class="item-handle">☰</span> Esquitxada d'àcid sulfúric d'una bateria de plom</div>
        <div class="pdi-item" draggable="true" data-cat="mec"><span class="item-handle">☰</span> Tall amb la fulla d'una serra de cinta sense protecció</div>
        <div class="pdi-item" draggable="true" data-cat="quim"><span class="item-handle">☰</span> Treballar en presència de pols de sílice sense mascareta FFP2</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud9-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud9-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud9-2" data-unit="ud9" data-title="Salut i Primers Auxilis V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R2 · Speed Quiz (5 Preguntes)</span>
        <h3>⚡ Speed Quiz: Ronda de 5 Preguntes sobre Primers Auxilis i Salut Laboral</h3>
      </div>
      <p class="pdi-instruction">Demostra que coneixes com actuar en una emergència responent VERITAT o FALS:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;En cas d&#x27;una &lt;strong&gt;hemorràgia greu externa&lt;/strong&gt;, cal retirar les gases xopades de sang abans de col·locar-ne una de nova.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; MAI es retira la primera gasa o drap, perquè s&#x27;eliminaria el coàgul natural en formació! Es col·loquen noves gases a sobre i es continua pressionant.&quot;}, {&quot;q&quot;: &quot;El ritme de compressió toràcica recomanat en una &lt;strong&gt;Reanimació Cardiopulmonar (RCP)&lt;/strong&gt; és d&#x27;entre &lt;strong&gt;100 i 120 compressions per minut&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquest és el ritme òptim recomanat pel Consell Europeu de Ressuscitació (ERC), al ritme de cançons com &#x27;Stayin&#x27; Alive&#x27;.&quot;}, {&quot;q&quot;: &quot;Les bateries de plom usades i els pots d&#x27;oli mineral es poden llençar al &lt;strong&gt;contenidor gris o verd convencional&lt;/strong&gt; d&#x27;escombraries.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són &lt;strong&gt;residus perillosos tòxics&lt;/strong&gt; i s&#x27;han d&#x27;entregar obligatòriament a un gestor de residus autoritzat o al Punt Net del municipi!&quot;}, {&quot;q&quot;: &quot;Adoptar una &lt;strong&gt;postura ergonòmica inadequada&lt;/strong&gt; de forma repetida (com carregar pesos ajupint l&#x27;esquena en lloc de flexionar els genolls) pot provocar hèrnies discals cròniques.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El pes s&#x27;ha d&#x27;alçar sempre flexionant les cames, mantenint l&#x27;esquena recta i la càrrega pegada al cos.&quot;}, {&quot;q&quot;: &quot;El número de telèfon gratuït i únic per a totes les emergències a qualsevol país de la Unió Europea és el &lt;strong&gt;112&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El 112 coordina ambulàncies, bombers, policia i protecció civil a tota la UE.&quot;}]">
        <div class="sq-top-status">
          <span class="sq-round-badge">Pregunta: <strong class="sq-current-round">1</strong> / <span class="sq-total-rounds">5</span></span>
          <span class="sq-streak-badge">🔥 Ratxa: <strong class="sq-streak-val">0</strong></span>
          <span class="sq-score-badge">⭐ Encerts: <strong class="sq-score-val">0</strong> / 5</span>
        </div>
        <div class="sq-main-play-area">
          <div class="sq-statement-box">
            <span class="sq-quote-icon">⚡</span>
            <p class="sq-statement-text">Carregant enunciat...</p>
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
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud9-2')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud9-2')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud9-3 (intrus) -->
    <div class="pdi-activity-card" id="act-ud9-3" data-unit="ud9" data-title="Senyals de Seguretat i Cos" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R3 · Troba l'Intrús (2 Rondes)</span>
        <h3>🕵️ Troba l'Intrús: Senyalització de Seguretat i Sistemes Biològics</h3>
      </div>
      <p class="pdi-instruction">Descobreix l'element discordant en cada cas:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Senyals d&#x27;Advertència de Perill&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests senyals de taller són d&#x27;ADVERTÈNCIA DE PERILL (triangulars amb fons groc), però un és d&#x27;OBLIGACIÓ. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Triangle groc amb llamp negre (Perill elèctric)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Senyal d&#x27;advertència&quot;}, {&quot;text&quot;: &quot;Triangle groc amb flama negra (Perill inflamable)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Senyal d&#x27;advertència&quot;}, {&quot;text&quot;: &quot;Cercle blau amb ulleres blanques (Ús obligatori d&#x27;ulleres de protecció)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Els senyals blaus circulars indiquen OBLIGACIÓ, no pas advertència de perill!&quot;}, {&quot;text&quot;: &quot;Triangle groc amb signe d&#x27;admiració (Perill indefinit)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Senyal d&#x27;advertència&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aparells de la Funció de Nutrició&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests aparells col·laboren directament en la FUNCIÓ DE NUTRICIÓ cel·lular, però un pertany a la FUNCIÓ DE RELACIÓ. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aparell Digestiu (Aporta nutrients a la sang)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Nutrició&quot;}, {&quot;text&quot;: &quot;Aparell Respiratori (Aporta oxigen O₂ i elimina CO₂)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Nutrició&quot;}, {&quot;text&quot;: &quot;Aparell Locomotor / Musculoesquelètic (Músculs i ossos per al moviment)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;aparell locomotor s&#x27;encarrega de la funció de RELACIÓ (resposta motora), no de la nutrició cel·lular!&quot;}, {&quot;text&quot;: &quot;Aparell Circulatori (Transporta nutrients i oxigen)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Nutrició&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud9-3')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud9-4 (keypad) -->
    <div class="pdi-activity-card" id="act-ud9-4" data-unit="ud9" data-title="Càlculs de Salut i PRL" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R4 · Càlcul Tàctil (3 Problemes)</span>
        <h3>🔢 Teclat Mental: Dades Numèriques de RCP, Hidratació i Decibels</h3>
      </div>
      <p class="pdi-instruction">Resol els 3 càlculs d'aplicació pràctica i tecleja el resultat final:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;El protocol de RCP per a adults indica un cicle altern de &lt;strong&gt;30 compressions toràciques i 2 insuflacions&lt;/strong&gt; (30:2). Quantes compressions hauràs realitzat després de completar &lt;strong&gt;4 cicles complets&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;120&quot;, &quot;steps&quot;: &quot;30 compressions × 4 cicles = &lt;strong&gt;120 compressions&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;L&#x27;OMS recomana una hidratació diària bàsica d&#x27;uns &lt;strong&gt;35 mL d&#x27;aigua per cada kg&lt;/strong&gt; de pes corporal. Quants &lt;strong&gt;mil·lilitres (mL) d&#x27;aigua&lt;/strong&gt; deu beure com a mínim un treballador que pesa &lt;strong&gt;70 kg&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;2450&quot;, &quot;steps&quot;: &quot;35 mL/kg × 70 kg = &lt;strong&gt;2450 mL&lt;/strong&gt; (2,45 litres d&#x27;aigua al dia).&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Segons la normativa laboral europea de prevenció del soroll (R.D. 286/2006), a partir de quin nivell de soroll continu en &lt;strong&gt;decibels (dB)&lt;/strong&gt; és estrictament OBLIGATORI l&#x27;ús d&#x27;EPI auditiu (auriculars o taps)?&quot;, &quot;expected&quot;: &quot;85&quot;, &quot;steps&quot;: &quot;A 80 dB és recomanable i l&#x27;empresa els ha d&#x27;oferir; a partir de &lt;strong&gt;85 dB&lt;/strong&gt; és OBLIGATORI per llei.&quot;}]">
        <div class="kp-top-status">
          <span class="kp-prob-badge">Problema: <strong class="kp-cur-prob">1</strong> / <span class="kp-total-probs">3</span></span>
        </div>
        <div class="kp-problem-box">
          <span class="kp-prob-icon">🧮</span>
          <p class="kp-prob-text">Carregant problema...</p>
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
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud9-4')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud9-5 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud9-5" data-unit="ud9" data-title="Normativa i Protocols" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #15803d;">UD9 · R5 · Targetes 3D Tècniques</span>
        <h3>🪞 Targetes Giratòries 3D: Protocols Vitals de Seguretat i Salut</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a revisar els 4 protocols indispensables abans d'entrar al taller:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛡️</span>
                <h4>Protocol P.A.S. en Accidents</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>1. PROTEGIR ➔ 2. AVISAR ➔ 3. SOCÓRRER</h5>
                <p>Abans de tocar la víctima, protegeix la zona per a no accidentar-te tu (apagar màquines, tallar corrent). Després truca al 112 i finalment socorre.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">❤️</span>
                <h4>Desfibril·lador Extern Automàtic (DEA)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Analitza el ritme cardíac i dóna instruccions de veu</h5>
                <p>Només descarrega si detecta fibril·lació ventricular. Mai descarrega sobre un cor amb ritme normal. Cal continuar fent compressions quan el DEA ho indique.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚠️</span>
                <h4>Pictogrames de Perill Químic (SGA)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Rombes blancs amb vora roja</h5>
                <p>Corrosiu (tub sobre mà), Tòxic agut (calavera), Inflamable (flama), Perill ambiental (peix i arbre mort). Llegir sempre la Fitxa de Dades de Seguretat (FDS)!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🦺</span>
                <h4>Equips de Protecció Individual (EPI)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Última barrera de protecció del treballador</h5>
                <p>Ulleres/pantalla, botes amb puntera reforçada, guants segons risc (mecànic, químic, calor), protectors auditius i mascareta FFP2/3 homologats amb marcatge CE.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fc-instructions-bar">
          <span>💡 Toca qualsevol targeta per a girar-la en 3D i veure la fórmula o aplicació al taller. Toca-la una altra vegada per a retornar.</span>
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

/* DASHBOARD */
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

/* PANTALLA DE JOC */
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

/* 1. DRAG & DROP */
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

/* 2. SPEED QUIZ */
.pdi-speedquiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
.sq-top-status {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.sq-round-badge {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
}
.sq-streak-badge {
  background: #fef3c7;
  border: 1px solid #fde68a;
  color: #b45309;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
}
.sq-score-badge {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #065f46;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
}
.sq-main-play-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
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
  font-size: 1.55rem;
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
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
.btn-sq-next {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  align-self: flex-end;
  box-shadow: 0 4px 10px rgba(37,99,235,0.3);
  transition: all 0.2s;
}
.btn-sq-next:hover {
  background: #1d4ed8;
  transform: translateX(4px);
}
.sq-summary-box {
  background: #ffffff;
  border: 3px solid #cbd5e1;
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
  width: 100%;
  box-sizing: border-box;
}
.sq-summary-trophy {
  font-size: 4rem;
}
.sq-summary-title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
}
.sq-summary-score {
  font-size: 1.3rem;
  color: #334155;
  margin: 0;
}
.btn-sq-restart {
  background: #10b981;
  color: #ffffff;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(16,185,129,0.3);
}
.btn-sq-restart:hover {
  background: #059669;
  transform: translateY(-2px);
}

/* 3. TROBA L'INTRÚS */
.pdi-intrus-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
.intrus-top-status {
  display: flex;
  justify-content: flex-start;
}
.intrus-round-badge {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
}
.intrus-question-box {
  background: #f8fafc;
  border: 2px solid #cbd5e1;
  border-radius: 14px;
  padding: 0.9rem 1.4rem;
}
.intrus-question-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
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
  font-size: 1.15rem;
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
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
.btn-intrus-next {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  align-self: flex-end;
  box-shadow: 0 4px 10px rgba(37,99,235,0.3);
  transition: all 0.2s;
}
.btn-intrus-next:hover {
  background: #1d4ed8;
  transform: translateX(4px);
}

/* 4. TECLAT MENTAL TÀCTIL */
.pdi-keypad-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  gap: 0.9rem;
  max-width: 850px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
.kp-top-status {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
.kp-prob-badge {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
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
  font-size: 1.3rem;
  margin: 0;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.4;
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
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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
.btn-kp-next {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  align-self: flex-end;
  box-shadow: 0 4px 10px rgba(37,99,235,0.3);
  transition: all 0.2s;
}
.btn-kp-next:hover {
  background: #1d4ed8;
  transform: translateX(4px);
}

/* 5. TARGETES GIRATÒRIES 3D */
.pdi-flipcards-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}
.flipcards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  perspective: 1200px;
}
.flipcard-scene {
  height: 290px;
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
  padding: 1.5rem;
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
  font-size: 3.2rem;
  margin-bottom: 0.6rem;
}
.flipcard-front h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
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
  margin: 0 0 0.6rem 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #38bdf8;
}
.flipcard-back p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.45;
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

<!-- INCLUSIÓ DEL MOTOR JAVASCRIPT EXTERN -->
<script src="{{ 'pissarra-interactiva.js' | relative_url }}?v=3"></script>
<script src="pissarra-interactiva.js?v=3"></script>
