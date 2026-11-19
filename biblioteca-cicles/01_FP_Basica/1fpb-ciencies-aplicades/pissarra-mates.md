---
layout: default
title: "Pissarra Digital Interactiva — Matemàtiques Aplicades I"
course_root: "."
badge: "Pissarra Digital (PDI) · Matemàtiques · 1r FPB"
---

<div class="pdi-app-wrapper">

<!-- ==========================================
     VISTA 1: TAULER DE REPTES (DASHBOARD)
     ========================================== -->
<div id="pdi-dashboard" class="pdi-dashboard-view">
  <div class="pdi-dash-header">
    <div class="dash-title-wrap">
      <h2>🎯 Tauler de Reptes Interactius · Matemàtiques Aplicades (PDI)</h2>
      <p>Ciències Aplicades I (1r FPB) · 40 Reptes Pràctics de Càlcul, Jerarquia, Fraccions i Taller per a pissarra digital de classe o tauleta.</p>
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
        <span class="count-badge">10 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔢</span> <h3>MAT 1 · Els Nombres Naturals</h3></div>
      <p class="card-desc">Sistema de numeració decimal, operacions bàsiques, jerarquia, potències i arrels.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-mat1-1" onclick="launchGameActivity('act-mat1-1')">
          <span class="act-idx">🧩 Descomposició Decimal</span>
          <span class="act-name">R1 · Valor Posicional</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-2" onclick="launchGameActivity('act-mat1-2')">
          <span class="act-idx">⚡ Propietats i Càlcul</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-3" onclick="launchGameActivity('act-mat1-3')">
          <span class="act-idx">🕵️ Tipus de Nombres</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-4" onclick="launchGameActivity('act-mat1-4')">
          <span class="act-idx">🔢 Operacions i Arrels</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-5" onclick="launchGameActivity('act-mat1-5')">
          <span class="act-idx">🔗 Càlculs de Taller</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-6" onclick="launchGameActivity('act-mat1-6')">
          <span class="act-idx">🧩 Ordre de Jerarquia</span>
          <span class="act-name">R6 · Prioritat PEMDAS</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-7" onclick="launchGameActivity('act-mat1-7')">
          <span class="act-idx">⚡ Lleis de Potències</span>
          <span class="act-name">R7 · Speed Quiz Potències</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-8" onclick="launchGameActivity('act-mat1-8')">
          <span class="act-idx">🕵️ Errors de Càlcul</span>
          <span class="act-name">R8 · Càlculs Errònis</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-9" onclick="launchGameActivity('act-mat1-9')">
          <span class="act-idx">🔢 Pressupost de Taller</span>
          <span class="act-name">R9 · Càlcul de Taller</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat1-10" onclick="launchGameActivity('act-mat1-10')">
          <span class="act-idx">🛠️ Magatzem i Factura</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
<div class="pdi-unit-dash-card" style="border-top: 5px solid #d97706;">
      <div class="card-head">
        <span class="disc-badge" style="background: #d97706;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">➕➖</span> <h3>MAT 2 · Els Nombres Enters</h3></div>
      <p class="card-desc">Recta numèrica, valors absoluts, operacions amb enters, regla dels signes i temperatures de taller.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-mat2-1" onclick="launchGameActivity('act-mat2-1')">
          <span class="act-idx">🧩 Ordre Recta Enters</span>
          <span class="act-name">R1 · Recta Numèrica</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-2" onclick="launchGameActivity('act-mat2-2')">
          <span class="act-idx">⚡ Regla dels Signes</span>
          <span class="act-name">R2 · Speed Quiz Signes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-3" onclick="launchGameActivity('act-mat2-3')">
          <span class="act-idx">🕵️ Operacions d'Enters</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-4" onclick="launchGameActivity('act-mat2-4')">
          <span class="act-idx">🔢 Càlculs amb Enters</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-5" onclick="launchGameActivity('act-mat2-5')">
          <span class="act-idx">🔗 Balanços Industrials</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-6" onclick="launchGameActivity('act-mat2-6')">
          <span class="act-idx">🧩 Jerarquia Aritmètica</span>
          <span class="act-name">R6 · Resolució Pas a Pas</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-7" onclick="launchGameActivity('act-mat2-7')">
          <span class="act-idx">⚡ Signes de Potències</span>
          <span class="act-name">R7 · Potències Enters</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-8" onclick="launchGameActivity('act-mat2-8')">
          <span class="act-idx">🕵️ Resultats d'Enters</span>
          <span class="act-name">R8 · Potències d'Enters</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-9" onclick="launchGameActivity('act-mat2-9')">
          <span class="act-idx">🔢 Desnivell i Deutes</span>
          <span class="act-name">R9 · Càlcul d'Altitud</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat2-10" onclick="launchGameActivity('act-mat2-10')">
          <span class="act-idx">🛠️ Climatització i Finances</span>
          <span class="act-name">R10 · Gestió Tècnica</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
<div class="pdi-unit-dash-card" style="border-top: 5px solid #0284c7;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0284c7;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">⚖️</span> <h3>MAT 3 · Divisibilitat, MCM i MCD</h3></div>
      <p class="card-desc">Múltiples, divisors, criteris de divisibilitat, nombres primers, descomposició factorial, càlcul d'MCD i MCM en engranatges.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-mat3-1" onclick="launchGameActivity('act-mat3-1')">
          <span class="act-idx">🧩 Criteris 2, 3, 5</span>
          <span class="act-name">R1 · Criteris Divisibilitat</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-2" onclick="launchGameActivity('act-mat3-2')">
          <span class="act-idx">⚡ Primers i Divisors</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-3" onclick="launchGameActivity('act-mat3-3')">
          <span class="act-idx">🕵️ Primers i Factors</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-4" onclick="launchGameActivity('act-mat3-4')">
          <span class="act-idx">🔢 Càlcul d'MCD i MCM</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-5" onclick="launchGameActivity('act-mat3-5')">
          <span class="act-idx">🔗 Engranatges i Mides</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-6" onclick="launchGameActivity('act-mat3-6')">
          <span class="act-idx">🧩 Passos MCD i MCM</span>
          <span class="act-name">R6 · Algorisme de Càlcul</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-7" onclick="launchGameActivity('act-mat3-7')">
          <span class="act-idx">⚡ MCD vs MCM</span>
          <span class="act-name">R7 · Speed Quiz Problemes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-8" onclick="launchGameActivity('act-mat3-8')">
          <span class="act-idx">🕵️ Divisors i Múltiples</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-9" onclick="launchGameActivity('act-mat3-9')">
          <span class="act-idx">🔢 Logística de Taller</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat3-10" onclick="launchGameActivity('act-mat3-10')">
          <span class="act-idx">🛠️ Tall de Cables i Cicles</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
<div class="pdi-unit-dash-card" style="border-top: 5px solid #7c3aed;">
      <div class="card-head">
        <span class="disc-badge" style="background: #7c3aed;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🥧</span> <h3>MAT 4 · Les Fraccions i Operacions</h3></div>
      <p class="card-desc">Concepte de fracció, equivalència, simplificació, suma, resta, multiplicació, divisió i barreges de taller.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-mat4-1" onclick="launchGameActivity('act-mat4-1')">
          <span class="act-idx">🧩 Pròpies, Impròpies o Unitat</span>
          <span class="act-name">R1 · Classificació Fraccions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-2" onclick="launchGameActivity('act-mat4-2')">
          <span class="act-idx">⚡ Conceptes de Fraccions</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-3" onclick="launchGameActivity('act-mat4-3')">
          <span class="act-idx">🕵️ Equivalència i Simplificació</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-4" onclick="launchGameActivity('act-mat4-4')">
          <span class="act-idx">🔢 Fracció d'una Quantitat</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-5" onclick="launchGameActivity('act-mat4-5')">
          <span class="act-idx">🔗 Proporcions de Taller</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-6" onclick="launchGameActivity('act-mat4-6')">
          <span class="act-idx">🧩 Algorisme Suma Fraccions</span>
          <span class="act-name">R6 · Suma amb m.c.m.</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-7" onclick="launchGameActivity('act-mat4-7')">
          <span class="act-idx">⚡ Producte i Quocient</span>
          <span class="act-name">R7 · Speed Quiz Operacions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-8" onclick="launchGameActivity('act-mat4-8')">
          <span class="act-idx">🕵️ Operacions Discordants</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-9" onclick="launchGameActivity('act-mat4-9')">
          <span class="act-idx">🔢 Taller amb Fraccions</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-mat4-10" onclick="launchGameActivity('act-mat4-10')">
          <span class="act-idx">🛠️ Dosificació i Producció</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
  </div>
</div>

<!-- ==========================================
     VISTA 2: PANTALLA DE JOC INDIVIDUAL
     ========================================== -->
<div id="pdi-game-view" class="pdi-game-view" style="display: none;">
  <div class="pdi-game-topbar">
    <button class="btn-back-dash" onclick="showPDIDashboard()" title="Tornar al Tauler de Reptes">
      <span>⬅️ Menú de Reptes</span>
    </button>
    
    <div class="game-meta-info" id="game-meta-info">
      <span class="game-unit-badge" id="game-unit-badge" style="background: #2563eb;">MAT 1</span>
      <span class="game-act-title" id="game-act-title">Repte 1</span>
    </div>

    <div class="game-nav-arrows">
      <button class="btn-game-nav" id="btn-prev-act" onclick="navRelativeActivity(-1)" title="Repte Anterior">◀ Anterior</button>
      <span class="game-counter" id="game-counter">1 / 10</span>
      <button class="btn-game-nav" id="btn-next-act" onclick="navRelativeActivity(1)" title="Repte Següent">Següent ▶</button>
    </div>

    <div class="game-top-tools">
      <button class="btn-tool-icon" onclick="resetCurrentPDIActivity()" title="Reiniciar repte per al següent alumne">🔄 Reiniciar</button>
      <button class="btn-tool-icon" id="game-sound-btn" onclick="togglePDISound()" title="Activar/Silenciar so">🔊</button>
      <button class="btn-tool-icon" id="game-fs-btn" onclick="togglePDIFullscreen()" title="Pantalla Completa">🖥️</button>
    </div>
  </div>

  <div class="pdi-game-stage">
<div class="pdi-activity-card" id="act-mat1-1" data-unit="mat1" data-title="Descomposició Decimal" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R1 · Valor Posicional</span>
        <h3>🔢 Descomposició en Ordres d'Unitats: El Nombre 472.583</h3>
      </div>
      <p class="pdi-instruction">Arrossega els ordres d'unitats de major a menor valor posicional per a descompondre el nombre:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Centenes de Milers (CM)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Desenes de Milers (DM)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Unitats de Milers (UM)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Centenes simples (C)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Desenes simples (D)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Unitats simples (U)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud1-2 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat1-2" data-unit="mat1" data-title="Propietats i Càlcul" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Propietats dels Naturals i Operacions Bàsiques</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La propietat commutativa és vàlida per a la suma i la multiplicació, però mai per a la resta ni la divisió de naturals.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 15 - 4 ≠ 4 - 15 i 20 / 4 ≠ 4 / 20.&quot;}, {&quot;q&quot;: &quot;L&#x27;element neutre de la multiplicació de nombres naturals és el nombre 0.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;element neutre del producte és l&#x27;&lt;strong&gt;1&lt;/strong&gt; (a × 1 = a). El 0 és l&#x27;element absorbent (a × 0 = 0)!&quot;}, {&quot;q&quot;: &quot;En tota divisió entera, el residu és obligatòriament menor estricte que el divisor (r &lt; d).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Si el residu fóra igual o major que el divisor, es podria continuar dividint.&quot;}, {&quot;q&quot;: &quot;L&#x27;arrel quadrada exacta d&#x27;un nombre és igual a dividir eixe nombre entre 2.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És trobar un nombre que multiplicat &lt;strong&gt;per si mateix&lt;/strong&gt; done el primer: √36 = 6 (perquè 6² = 36), no pas 36 / 2 = 18!&quot;}, {&quot;q&quot;: &quot;Si en una divisió exacta el dividend és 144 i el quocient és 12, el divisor és obligatòriament 12.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Com que D = d × c, 144 = 12 × 12.&quot;}]">
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

<div class="pdi-activity-card" id="act-mat1-3" data-unit="mat1" data-title="Tipus de Nombres" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Quadrats Perfectes i Notació Decimal</h3>
      </div>
      <p class="pdi-instruction">Detecta quin nombre no compleix la mateixa condició matemàtica que els altres tres:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Quadrats Perfectes&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són quadrats perfectes de nombres naturals, però un NO ho és. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;49&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;49 és quadrat perfecte de 7 (7² = 49).&quot;}, {&quot;text&quot;: &quot;64&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;64 és quadrat perfecte de 8 (8² = 64).&quot;}, {&quot;text&quot;: &quot;72&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 8² = 64 i 9² = 81. El 72 no és quadrat perfecte!&quot;}, {&quot;text&quot;: &quot;121&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;121 és quadrat perfecte d&#x27;11 (11² = 121).&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Potències de Base 10&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes equivalències en potències de 10 són exactes, però una conté un error en el nombre de zeros. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;10.000 = 10⁴&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Té 4 zeros: 10⁴.&quot;}, {&quot;text&quot;: &quot;100.000 = 10⁵&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Té 5 zeros: 10⁵.&quot;}, {&quot;text&quot;: &quot;1.000.000 = 10⁷&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Un milió té 6 zeros, per tant és 10⁶, no 10⁷!&quot;}, {&quot;text&quot;: &quot;100 = 10²&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Té 2 zeros: 10².&quot;}]}]">
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

<div class="pdi-activity-card" id="act-mat1-4" data-unit="mat1" data-title="Operacions i Arrels" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Jerarquia Numèrica i Arrels Quadrades</h3>
      </div>
      <p class="pdi-instruction">Resol cada operació combinada i introdueix el resultat exacte amb el teclat numèric:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Calcula el resultat exacte de: &lt;strong&gt;√144 + 5 × 6 - 2³&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;34&quot;, &quot;steps&quot;: &quot;√144 = 12  ➔  5 × 6 = 30  ➔  2³ = 8  ➔  12 + 30 - 8 = &lt;strong&gt;34&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Calcula el resultat exacte de: &lt;strong&gt;3⁴ - 2³ × 9 + √49&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;16&quot;, &quot;steps&quot;: &quot;3⁴ = 81  ➔  2³ = 8  ➔  8 × 9 = 72  ➔  √49 = 7  ➔  81 - 72 + 7 = &lt;strong&gt;16&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un magatzem de recanvis té 15 caixes amb 8 filtres d&#x27;oli cadascuna. Durant la setmana els mecànics n&#x27;utilitzen 35 filtres per a revisions. Quants filtres queden a l&#x27;estoc?&quot;, &quot;expected&quot;: &quot;85&quot;, &quot;steps&quot;: &quot;15 × 8 = 120 filtres totals  ➔  120 - 35 = &lt;strong&gt;85 filtres&lt;/strong&gt; restants.&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud1-4', '0')">0</button>
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
    <!-- act-ud1-5 (connect) -->

<div class="pdi-activity-card" id="act-mat1-5" data-unit="mat1" data-title="Càlculs de Taller" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Pressupostos i Mesures Industrials</h3>
      </div>
      <p class="pdi-instruction">Calcula mentalment el resultat de cada situació de l'esquerra i emparella'l amb la seua xifra a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;left&quot;: &quot;12 tornavisos d&#x27;aïllament a 3 €/u més 1 caixa d&#x27;eines de 14 €&quot;, &quot;right&quot;: &quot;50 € de cost total de la comanda&quot;}, {&quot;id&quot;: 2, &quot;left&quot;: &quot;6 llandes de lubricant industrial de 5 litres cadascuna&quot;, &quot;right&quot;: &quot;30 litres de volum total d&#x27;oli&quot;}, {&quot;id&quot;: 3, &quot;left&quot;: &quot;Perfil tubular d&#x27;acer de 320 mm al qual es retallen 145 mm&quot;, &quot;right&quot;: &quot;175 mm de longitud útil restant&quot;}, {&quot;id&quot;: 4, &quot;left&quot;: &quot;Consum elèctric: 3 focus de 150 W més 2 projectors de 250 W&quot;, &quot;right&quot;: &quot;950 W de potència combinada total&quot;}]">
        <div class="connect-top-status">
          <span class="connect-score-badge">🔗 Parelles connectades: <strong class="connect-matched-count">0</strong> / <span class="connect-total-count">4</span></span>
        </div>
        <div class="connect-columns-grid">
          <div class="connect-col-left"></div>
          <div class="connect-col-right"></div>
        </div>
        <div class="connect-win-banner" style="display: none;">
          <div class="connect-win-trophy">🎉</div>
          <h4>Totes les parelles connectades correctament!</h4>
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud1-5')">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-6 (order) -->

<div class="pdi-activity-card" id="act-mat1-6" data-unit="mat1" data-title="Ordre de Jerarquia" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R6 · Prioritat PEMDAS</span>
        <h3>🔢 Jerarquia d'Operacions: Ordre Estricte de Resolució</h3>
      </div>
      <p class="pdi-instruction">Arrossega les regles de prioritat en l'ordre matemàtic obligatori (de màxima a mínima prioritat):</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Parèntesis i claudàtors (des de l'interior cap a l'exterior)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Potències i arrels quadrades</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Multiplicacions i divisions d'esquerra a dreta</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Sumes i restes d'esquerra a dreta</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud1-7 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat1-7" data-unit="mat1" data-title="Lleis de Potències" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R7 · Speed Quiz Potències</span>
        <h3>⚡ Speed Quiz: Propietats i Lleis de les Potències</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada propietat de potències és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Qualsevol nombre natural no nul elevat a l&#x27;exponent 0 és igual a 1 (a⁰ = 1).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Per definició de quocient de potències iguals: aⁿ / aⁿ = a⁰ = 1.&quot;}, {&quot;q&quot;: &quot;En multiplicar dues potències de la mateixa base, els exponents es multipliquen (a² × a³ = a⁶).&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Es &lt;strong&gt;sumen&lt;/strong&gt; els exponents: a² × a³ = a²⁺³ = a⁵!&quot;}, {&quot;q&quot;: &quot;La potència d&#x27;una potència es calcula multiplicant els exponents: (a²)³ = a⁶.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (a²)³ = a²ˣ³ = a⁶.&quot;}, {&quot;q&quot;: &quot;En la divisió de potències de la mateixa base es resten els exponents: a⁷ / a⁴ = a³.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a⁷ / a⁴ = a⁷⁻⁴ = a³.&quot;}, {&quot;q&quot;: &quot;La potència d&#x27;una suma és igual a la suma de les potències individuals: (a + b)² = a² + b².&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Error típic! (a + b)² = a² + 2ab + b², mai a² + b²!&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud1-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud1-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud1-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud1-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-8 (intrus) -->

<div class="pdi-activity-card" id="act-mat1-8" data-unit="mat1" data-title="Errors de Càlcul" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R8 · Càlculs Errònis</span>
        <h3>🕵️ Troba l'Intrús: Detecció d'Operacions Incorrectes</h3>
      </div>
      <p class="pdi-instruction">En cada ronda hi ha 3 operacions ben resoltes i UNA amb un error de càlcul o jerarquia. Detecta l'errònia!</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Jerarquia d&#x27;Operacions&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes quatre operacions aritmètiques està MAL resolta?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;10 + 2 × 5 = 20&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 2×5=10 ➔ 10+10=20.&quot;}, {&quot;text&quot;: &quot;18 - 6 / 2 = 6&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La divisió va primer: 6/2=3 ➔ 18-3=15, no pas 6!&quot;}, {&quot;text&quot;: &quot;4 × 3² = 36&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 3²=9 ➔ 4×9=36.&quot;}, {&quot;text&quot;: &quot;(8 + 4) / 3 = 4&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 12/3=4.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Càlcul de Potències i Arrels&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes expressions matemàtiques té un resultat fals?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;√81 = 9&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 9² = 81.&quot;}, {&quot;text&quot;: &quot;2⁵ = 32&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 2×2×2×2×2 = 32.&quot;}, {&quot;text&quot;: &quot;√49 + √25 = 12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 7 + 5 = 12.&quot;}, {&quot;text&quot;: &quot;5³ = 15&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 5³ = 5 × 5 × 5 = 125, no 15!&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud1-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-9 (keypad) -->

<div class="pdi-activity-card" id="act-mat1-9" data-unit="mat1" data-title="Pressupost de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R9 · Càlcul de Taller</span>
        <h3>🔢 Teclat Mental: Problemes Reals d'Instal·lacions i Manteniment</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor final requerit i introdueix el nombre exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un mecànic repara 4 furgonetes iguals. En cadascuna instal·la 5 bugies noves a 8 € la unitat i 1 filtre d&#x27;aire de 20 €. Quin és el cost total de les peces per a les 4 furgonetes?&quot;, &quot;expected&quot;: &quot;240&quot;, &quot;steps&quot;: &quot;Per vehicle: 5×8 = 40 € + 20 € = 60 €  ➔  4 furgonetes: 4 × 60 = &lt;strong&gt;240 €&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una bobina conté 500 metres de cable elèctric de 2,5 mm². Un instal·lador en talla 14 trams idèntics de 25 metres cadascun per a l&#x27;enllumenat d&#x27;una nau industrial. Quants metres de cable queden a la bobina?&quot;, &quot;expected&quot;: &quot;150&quot;, &quot;steps&quot;: &quot;14 × 25 = 350 m tallats  ➔  500 - 350 = &lt;strong&gt;150 metres&lt;/strong&gt; restants.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una teulada solar disposa de 12 fileres amb 6 panells fotovoltaics en cada filera. Si cada panell genera 4 kWh d&#x27;energia en una jornada de sol, quants kWh produeix la instal·lació en un dia?&quot;, &quot;expected&quot;: &quot;288&quot;, &quot;steps&quot;: &quot;12 × 6 = 72 panells totals  ➔  72 × 4 = &lt;strong&gt;288 kWh&lt;/strong&gt;.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud1-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud1-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud1-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud1-9', '-')">+/-</button>

            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud1-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud1-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud1-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud1-10 (case) -->

<div class="pdi-activity-card" id="act-mat1-10" data-unit="mat1" data-title="Magatzem i Factura" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 1 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Gestió de Magatzem i Facturació</h3>
      </div>
      <p class="pdi-instruction">Llig atentament cada situació real de treball i tria la decisió tècnica correcta:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Facturació de Peces d&#x27;un Vehicle&quot;, &quot;context&quot;: &quot;Com a tècnic/a de taller prepares la factura d&#x27;un vehicle: s&#x27;han instal·lat &lt;strong&gt;8 filtres d&#x27;oli a 15 € cadascun&lt;/strong&gt; i &lt;strong&gt;4 jocs de pastilles de fre a 45 € cadascun&lt;/strong&gt;. A més, s&#x27;aplica una promoció comercial amb un &lt;strong&gt;descompte directe de 50 €&lt;/strong&gt; sobre el total de peces.&quot;, &quot;question&quot;: &quot;Quin és l&#x27;import final correcte que cal cobrar per les peces abans d&#x27;impostos?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;250 €&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Càlcul exacte: (8 × 15 €) + (4 × 45 €) = 120 € + 180 € = 300 €; restant el descompte de 50 € obtenim exactament 250 €.&quot;}, {&quot;text&quot;: &quot;300 €&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Has oblidat aplicar el descompte de 50 € que promet el pressupost!&quot;}, {&quot;text&quot;: &quot;270 €&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Revisa les operacions: 4 jocs de pastilles a 45 € sumen 180 €, no 150 €.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Classificació de Peces al Magatzem&quot;, &quot;context&quot;: &quot;Arriba un enviament de &lt;strong&gt;360 caragols de carrosseria especials&lt;/strong&gt;. L&#x27;encarregat demana emmagatzemar-los en caixes metàl·liques amb capacitat per a exactament &lt;strong&gt;24 caragols per caixa&lt;/strong&gt;, sense barrejar peces ni deixar caixes a mitges.&quot;, &quot;question&quot;: &quot;Quantes caixes completes necessitarem preparar per a classificar tot el material?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;15 caixes&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Exacte! 360 / 24 = 15 caixes. Així queda el material perfectament organitzat sense sobres.&quot;}, {&quot;text&quot;: &quot;12 caixes&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Amb 12 caixes només guardaries 288 caragols (12 × 24) i en sobrarien 72 per terra.&quot;}, {&quot;text&quot;: &quot;18 caixes&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;18 caixes permetrien guardar 432 caragols, en necessites menys.&quot;}]}]">
        <div class="case-top-status">
          <span class="case-badge">🛠️ Cas Pràctic: <strong class="case-cur-num">1</strong> / <span class="case-total-num">2</span></span>
        </div>
        <div class="case-main-box">
          <div class="case-header-bar">
            <span class="case-icon">📋</span>
            <h4 class="case-title-text">Carregant cas pràctic...</h4>
          </div>
          <div class="case-context-box">
            <p class="case-context-text"></p>
          </div>
          <div class="case-question-box">
            <span class="case-q-icon">❓</span>
            <p class="case-question-text"></p>
          </div>
          <div class="case-options-grid"></div>
        </div>
        <div class="case-feedback-box" style="display: none;">
          <div class="case-feedback-content"></div>
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud1-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud1-10')">🔄 Tornar a Practicar</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-1 (order) -->

<div class="pdi-activity-card" id="act-mat2-1" data-unit="mat2" data-title="Ordre Recta Enters" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R1 · Recta Numèrica</span>
        <h3>➕➖ Ordenar Nombres Enters de Menor a Major sobre la Recta</h3>
      </div>
      <p class="pdi-instruction">Arrossega els següents nombres enters ordenant-los de menor valor a major valor (d'esquerra a dreta a la recta):</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> -24</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> -11</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> -3</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 0</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> +7</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> +19</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-2 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat2-2" data-unit="mat2" data-title="Regla dels Signes" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R2 · Speed Quiz Signes</span>
        <h3>⚡ Speed Quiz: Signes en Sumes, Restes, Multiplicacions i Divisions</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació amb enters és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La suma de dos nombres negatius sempre dóna com a resultat un altre nombre negatiu: (-4) + (-6) = -10.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Dos deutes acumulats sumen un deute major: -4 - 6 = -10.&quot;}, {&quot;q&quot;: &quot;La multiplicació de dos nombres negatius dóna com a resultat un nombre negatiu: (-3) × (-5) = -15.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Regla dels signes del producte: &lt;strong&gt;menys per menys dóna MÉS&lt;/strong&gt; ➔ (-3) × (-5) = &lt;strong&gt;+15&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Restar un nombre enter negatiu equival a sumar el seu oposat positiu: 8 - (-5) = 8 + 5 = 13.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a - (-b) = a + b.&quot;}, {&quot;q&quot;: &quot;El valor absolut d&#x27;un nombre enter negatiu és sempre un altre nombre negatiu: |-8| = -8.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El valor absolut mesura la distància a l&#x27;origen sobre la recta i és sempre &lt;strong&gt;positiu o zero&lt;/strong&gt;: |-8| = &lt;strong&gt;+8&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;La divisió exacta d&#x27;un enter negatiu entre un de positiu dóna sempre un quocient negatiu: (-24) / (+6) = -4.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Signes diferents en producte o divisió donen sempre signe negatiu.&quot;}]">
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

<div class="pdi-activity-card" id="act-mat2-3" data-unit="mat2" data-title="Operacions d'Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Càlculs amb Enters i Desigualtats</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor de cada opció i detecta quina té un resultat discordant:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Operacions amb Enters&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen com a resultat exacte -12, però una dóna un valor diferent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-4) × (+3)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna exactament -12.&quot;}, {&quot;text&quot;: &quot;(-20) + (+8)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna exactament -12.&quot;}, {&quot;text&quot;: &quot;(-6) - (-6)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! (-6) - (-6) = -6 + 6 = 0, no pas -12!&quot;}, {&quot;text&quot;: &quot;(+36) / (-3)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna exactament -12.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Comparació d&#x27;Enters sobre la Recta&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes quatre desigualtats matemàtiques és FALSA?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;-8 &lt; -3&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte, -8 està més a l&#x27;esquerra del zero que -3.&quot;}, {&quot;text&quot;: &quot;-15 &gt; 0&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Tot nombre enter negatiu és estrictament menor que zero (-15 &lt; 0)!&quot;}, {&quot;text&quot;: &quot;-1 &lt; +1&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte, un negatiu sempre és menor que un positiu.&quot;}, {&quot;text&quot;: &quot;-20 &lt; -10&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte, -20 està més allunyat cap a l&#x27;esquerra.&quot;}]}]">
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

<div class="pdi-activity-card" id="act-mat2-4" data-unit="mat2" data-title="Càlculs amb Enters" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Jerarquia d'Operacions amb Enters</h3>
      </div>
      <p class="pdi-instruction">Calcula l'enter exacte (positiu o negatiu) i escriu-lo amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Calcula el resultat exacte de: &lt;strong&gt;(-6) × (+5) + (-28) / (-4)&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;-23&quot;, &quot;steps&quot;: &quot;(-6) × (+5) = -30  ➔  (-28) / (-4) = +7  ➔  -30 + 7 = &lt;strong&gt;-23&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Calcula el resultat exacte de: &lt;strong&gt;15 - 4 × [6 - (-3)]&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;-21&quot;, &quot;steps&quot;: &quot;Claudàtor: 6 - (-3) = 6 + 3 = 9  ➔  4 × 9 = 36  ➔  15 - 36 = &lt;strong&gt;-21&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;La boca d&#x27;un pou de sondeig es troba a +85 m d&#x27;altitud respecte al nivell del mar i la perforació arriba fins a una cota de -115 m. Quants metres de fondària total té la perforació?&quot;, &quot;expected&quot;: &quot;200&quot;, &quot;steps&quot;: &quot;+85 - (-115) = 85 + 115 = &lt;strong&gt;200 metres&lt;/strong&gt; de fondària total.&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud3-4', '0')">0</button>
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
    <!-- act-ud3-5 (connect) -->

<div class="pdi-activity-card" id="act-mat2-5" data-unit="mat2" data-title="Balanços Industrials" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Balanços Tèrmics i Desnivells de Treball</h3>
      </div>
      <p class="pdi-instruction">Calcula mentalment el resultat enter de cada situació i emparella'l amb la seua cota a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;left&quot;: &quot;Càmera frigorífica a -22 °C que s&#x27;escalfa 30 °C per aturada del compressor&quot;, &quot;right&quot;: &quot;+8 °C de temperatura final positiva&quot;}, {&quot;id&quot;: 2, &quot;left&quot;: &quot;Saldo d&#x27;un compte de taller de -520 € en rebre un abonament de +1.400 €&quot;, &quot;right&quot;: &quot;+880 € de saldo positiu a favor&quot;}, {&quot;id&quot;: 3, &quot;left&quot;: &quot;Canonada a -35 m de fondària que descendeix 45 m addicionals cap al col·lector&quot;, &quot;right&quot;: &quot;-80 m de cota subterrània final&quot;}, {&quot;id&quot;: 4, &quot;left&quot;: &quot;Despeses de taller per 4 recanvis idèntics de 125 € cadascun&quot;, &quot;right&quot;: &quot;-500 € de balanç econòmic de despesa&quot;}]">
        <div class="connect-top-status">
          <span class="connect-score-badge">🔗 Parelles connectades: <strong class="connect-matched-count">0</strong> / <span class="connect-total-count">4</span></span>
        </div>
        <div class="connect-columns-grid">
          <div class="connect-col-left"></div>
          <div class="connect-col-right"></div>
        </div>
        <div class="connect-win-banner" style="display: none;">
          <div class="connect-win-trophy">🎉</div>
          <h4>Totes les parelles connectades correctament!</h4>
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud3-5')">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-6 (order) -->

<div class="pdi-activity-card" id="act-mat2-6" data-unit="mat2" data-title="Jerarquia Aritmètica" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R6 · Resolució Pas a Pas</span>
        <h3>➕➖ Resolució Pas a Pas de: -4 × [12 - (-3) × (-2)] - (-10)</h3>
      </div>
      <p class="pdi-instruction">Arrossega els passos en l'ordre estricte de resolució matemàtica:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Multiplicar els enters interns del claudàtor: (-3) × (-2) = +6</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Resoldre la resta dins del claudàtor: [12 - 6] = 6</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Multiplicar el factor extern pel contingut: -4 × 6 = -24</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Canviar el signe de la resta final: -(-10) = +10</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Efectuar la suma dels dos enters finals: -24 + 10 = -14</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-7 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat2-7" data-unit="mat2" data-title="Signes de Potències" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R7 · Potències Enters</span>
        <h3>⚡ Speed Quiz: Potències de Base Negativa i Parèntesis</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Un nombre enter negatiu elevat a un exponent parell dóna sempre un resultat positiu: (-3)² = +9.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Menys per menys dóna més: (-3) × (-3) = +9.&quot;}, {&quot;q&quot;: &quot;Un nombre enter negatiu elevat a un exponent imparell dóna sempre un resultat negatiu: (-2)³ = -8.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (-2) × (-2) × (-2) = +4 × (-2) = -8.&quot;}, {&quot;q&quot;: &quot;L&#x27;expressió -5² és matemàticament idèntica a l&#x27;expressió (-5)².&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; En -5² el quadrat només afecta al 5 ➔ -(5×5) = &lt;strong&gt;-25&lt;/strong&gt;, mentre que en (-5)² la base és -5 ➔ (-5)×(-5) = &lt;strong&gt;+25&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Qualsevol nombre enter elevat a 1 és igual a si mateix: (-7)¹ = -7.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a¹ = a per a qualsevol valor de la recta numèrica.&quot;}, {&quot;q&quot;: &quot;L&#x27;expressió (-1)¹⁰⁰ és igual a -1 perquè la base és negativa.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Com que l&#x27;exponent 100 és &lt;strong&gt;parell&lt;/strong&gt;, (-1)¹⁰⁰ = &lt;strong&gt;+1&lt;/strong&gt;!&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud3-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud3-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud3-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud3-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-8 (intrus) -->

<div class="pdi-activity-card" id="act-mat2-8" data-unit="mat2" data-title="Resultats d'Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R8 · Potències d'Enters</span>
        <h3>🕵️ Troba l'Intrús: Signes i Valors en Potències d'Enters</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric i el signe de cada expressió per a trobar l'element discordant:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Expressions amb Resultat +16&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes expressions donen exactament +16, però una dóna -16. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-4)²&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Base negativa amb exponent parell: (-4)×(-4) = +16.&quot;}, {&quot;text&quot;: &quot;(+2)⁴&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;2×2×2×2 = +16.&quot;}, {&quot;text&quot;: &quot;-4²&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Sense parèntesi, el signe menys no està al quadrat: -4² = -(4×4) = -16, no +16!&quot;}, {&quot;text&quot;: &quot;(-2)⁴&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Base negativa amb exponent parell: +16.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Expressions que Valen -1&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes quatre expressions NO és igual a -1?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-1)⁴⁵&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Exponent imparell: val -1.&quot;}, {&quot;text&quot;: &quot;(-1)⁰&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Qualsevol nombre no nul elevat a zero és +1, no -1!&quot;}, {&quot;text&quot;: &quot;-(1²⁰)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;1²⁰ = 1 ➔ -(1) = -1.&quot;}, {&quot;text&quot;: &quot;(-1)¹&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val -1.&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud3-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-9 (keypad) -->

<div class="pdi-activity-card" id="act-mat2-9" data-unit="mat2" data-title="Desnivell i Deutes" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R9 · Càlcul d'Altitud</span>
        <h3>🔢 Teclat Mental: Desnivells Submarins, Mines i Amplitud Tèrmica</h3>
      </div>
      <p class="pdi-instruction">Resol el càlcul d'enters i escriu el valor (usa la tecla '+/-' per al signe negatiu si cal):</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un submarí d&#x27;investigació oceanogràfica navega a -180 m de profunditat. Puja 95 m cap a la superfície i després torna a baixar 35 m. A quina cota de fondària se situa?&quot;, &quot;expected&quot;: &quot;-120&quot;, &quot;steps&quot;: &quot;-180 + 95 = -85 m  ➔  -85 - 35 = &lt;strong&gt;-120 metres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En una mina subterrània, la galeria principal està a -60 m sota terra (planta -5 a 12 m per planta). Si l&#x27;ascensor puja 4 plantes, a quants metres sota terra se situa ara?&quot;, &quot;expected&quot;: &quot;-12&quot;, &quot;steps&quot;: &quot;Planta -5 + 4 = planta -1  ➔  -1 × 12 = &lt;strong&gt;-12 metres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;En una zona de muntanya s&#x27;ha registrat una temperatura mínima nocturna de -8 °C i una màxima diürna de +15 °C. Quina ha estat l&#x27;amplitud tèrmica o variació de temperatura?&quot;, &quot;expected&quot;: &quot;23&quot;, &quot;steps&quot;: &quot;+15 - (-8) = 15 + 8 = &lt;strong&gt;23 °C&lt;/strong&gt; de contrast tèrmic.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud3-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud3-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud3-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud3-9', '-')">+/-</button>

            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud3-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud3-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud3-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-10 (case) -->

<div class="pdi-activity-card" id="act-mat2-10" data-unit="mat2" data-title="Climatització i Finances" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 2 · R10 · Gestió Tècnica</span>
        <h3>🛠️ Cas Pràctic de Taller: Registres Tèrmics i Control de Tresoreria</h3>
      </div>
      <p class="pdi-instruction">Avalua la situació tècnica i selecciona la decisió o resultat correcte:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Test de Climatització d&#x27;Automoció&quot;, &quot;context&quot;: &quot;En un taller electromecànic es comprova el compressor de climatització d&#x27;un vehicle. L&#x27;habitacle està inicialment a &lt;strong&gt;+32 °C&lt;/strong&gt;. En 10 minuts el sistema refreda &lt;strong&gt;15 °C&lt;/strong&gt;, però després d&#x27;una parada de motor per revisió el bloc tèrmic s&#x27;escalfa i la temperatura puja &lt;strong&gt;6 °C&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quina temperatura marca el termòmetre digital de diagnosi?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;+23 °C&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Càlcul perfecte: 32 - 15 = 17 °C, i sumant els 6 °C de reescalfament obtenim exactament +23 °C.&quot;}, {&quot;text&quot;: &quot;+17 °C&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Aquesta era la temperatura abans del reescalfament del bloc del motor (+6 °C).&quot;}, {&quot;text&quot;: &quot;+26 °C&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Revisa les operacions: 32 - 15 + 6 dóna 23, no 26.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Control Financer i Compte del Taller&quot;, &quot;context&quot;: &quot;El taller comença el mes amb un balanç en números rojos de &lt;strong&gt;-600 €&lt;/strong&gt; al compte corrent. Durant la primera setmana cobra una reparació d&#x27;un client de &lt;strong&gt;+1.500 €&lt;/strong&gt;, però ha d&#x27;abonar immediatament una factura de recanvis de &lt;strong&gt;-800 €&lt;/strong&gt; i la revisió anual de maquinària de &lt;strong&gt;-350 €&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quin és l&#x27;estat financer del compte bancari després de tots els moviments?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;-250 €&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Molt bé! -600 + 1.500 - 800 - 350 = -250 €. El taller continua en números rojos de 250 € i caldrà ajornar altres pagaments.&quot;}, {&quot;text&quot;: &quot;+150 €&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Has oblidat el saldo negatiu inicial de -600 €!&quot;}, {&quot;text&quot;: &quot;-100 €&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;La suma total no dóna -100 €. Revisa: 900 - 800 - 350 = -250 €.&quot;}]}]">
        <div class="case-top-status">
          <span class="case-badge">🛠️ Cas Pràctic: <strong class="case-cur-num">1</strong> / <span class="case-total-num">2</span></span>
        </div>
        <div class="case-main-box">
          <div class="case-header-bar">
            <span class="case-icon">📋</span>
            <h4 class="case-title-text">Carregant cas pràctic...</h4>
          </div>
          <div class="case-context-box">
            <p class="case-context-text"></p>
          </div>
          <div class="case-question-box">
            <span class="case-q-icon">❓</span>
            <p class="case-question-text"></p>
          </div>
          <div class="case-options-grid"></div>
        </div>
        <div class="case-feedback-box" style="display: none;">
          <div class="case-feedback-content"></div>
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud3-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud3-10')">🔄 Tornar a Practicar</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-1 (category) -->

<div class="pdi-activity-card" id="act-mat3-1" data-unit="mat3" data-title="Criteris 2, 3, 5" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R1 · Criteris Divisibilitat</span>
        <h3>⚖️ Classificació per Criteris de Divisibilitat (8 Nombres)</h3>
      </div>
      <p class="pdi-instruction">Classifica cada nombre segons el seu criteri de divisibilitat exacte:</p>
      <div class="pdi-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="div2">
          <div class="box-head"><span class="box-icon">2️⃣</span><h4>🔵 Divisible per 2</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="div3">
          <div class="box-head"><span class="box-icon">3️⃣</span><h4>🟢 Divisible per 3</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="div5">
          <div class="box-head"><span class="box-icon">5️⃣</span><h4>🟡 Divisible per 5</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="div2"><span class="item-handle">☰</span> 148</div>
        <div class="pdi-item" draggable="true" data-cat="div3"><span class="item-handle">☰</span> 123</div>
        <div class="pdi-item" draggable="true" data-cat="div5"><span class="item-handle">☰</span> 275</div>
        <div class="pdi-item" draggable="true" data-cat="div2"><span class="item-handle">☰</span> 512</div>
        <div class="pdi-item" draggable="true" data-cat="div3"><span class="item-handle">☰</span> 342</div>
        <div class="pdi-item" draggable="true" data-cat="div5"><span class="item-handle">☰</span> 895</div>
        <div class="pdi-item" draggable="true" data-cat="div3"><span class="item-handle">☰</span> 618</div>
        <div class="pdi-item" draggable="true" data-cat="div2"><span class="item-handle">☰</span> 934</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud4-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud4-2 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat3-2" data-unit="mat3" data-title="Primers i Divisors" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Múltiples, Divisors i Nombres Primers</h3>
      </div>
      <p class="pdi-instruction">Respon si cada afirmació matemàtica és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Un nombre primer és aquell que només té exactament dos divisors diferents: l&#x27;1 i ell mateix.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Exemples: 2, 3, 5, 7, 11, 13...&quot;}, {&quot;q&quot;: &quot;El nombre 1 es considera el primer nombre primer de la successió.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;1 NO és nombre primer perquè només té 1 únic divisor. El primer nombre primer és el &lt;strong&gt;2&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;El nombre 0 és múltiple de qualsevol nombre natural.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a × 0 = 0 per a qualsevol nombre natural a.&quot;}, {&quot;q&quot;: &quot;Si un nombre natural acaba en 0, és divisible simultàniament per 2, per 5 i per 10.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Compleix els criteris del 2 (acaba en xifra parell/zero), del 5 (acaba en zero) i del 10.&quot;}, {&quot;q&quot;: &quot;El nombre 2 és l&#x27;únic nombre parell que és primer.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Qualsevol altre nombre parell és divisible per 2 i per tant és compost.&quot;}]">
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

<div class="pdi-activity-card" id="act-mat3-3" data-unit="mat3" data-title="Primers i Factors" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Nombres Compostos i Factoritzacions</h3>
      </div>
      <p class="pdi-instruction">Descobreix el nombre o la factorització discordant en cada ronda:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Nombres Primers menors de 40&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són PRIMERS, però un és COMPOST. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;23&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;23 és primer (només divisible per 1 i 23).&quot;}, {&quot;text&quot;: &quot;31&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;31 és primer (només divisible per 1 i 31).&quot;}, {&quot;text&quot;: &quot;27&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 27 és divisible per 1, 3, 9 i 27 (27 = 3³), per tant és compost!&quot;}, {&quot;text&quot;: &quot;37&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;37 és primer (només divisible per 1 i 37).&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Descomposició Factorial en Primers de 60&quot;, &quot;question&quot;: &quot;Tres expressions són vàlides o equivalents, però una NO és una descomposició en factors primers. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;2² × 3 × 5&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Descomposició en factors primers canònica de 60.&quot;}, {&quot;text&quot;: &quot;2 × 2 × 3 × 5&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Producte de factors primers que dona 60.&quot;}, {&quot;text&quot;: &quot;4 × 15&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Encara que 4 × 15 = 60, ni el 4 ni el 15 són nombres primers!&quot;}, {&quot;text&quot;: &quot;3 × 4 × 5&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Conté el 4 com a compost, però 4 × 15 és l&#x27;intrús clàssic de factors no primers.&quot;}]}]">
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

<div class="pdi-activity-card" id="act-mat3-4" data-unit="mat3" data-title="Càlcul d'MCD i MCM" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Càlcul Directe d'MCD i MCM</h3>
      </div>
      <p class="pdi-instruction">Calcula el resultat exacte i introdueix-lo amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quin és el &lt;strong&gt;Màxim Comú Divisor (MCD)&lt;/strong&gt; de &lt;strong&gt;48 i 72&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;24&quot;, &quot;steps&quot;: &quot;48 = 2⁴ × 3  |  72 = 2³ × 3²  ➔  Factors comuns amb menor exponent: 2³ × 3 = 8 × 3 = &lt;strong&gt;24&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Quin és el &lt;strong&gt;Mínim Comú Múltiple (MCM)&lt;/strong&gt; de &lt;strong&gt;12 i 18&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;36&quot;, &quot;steps&quot;: &quot;12 = 2² × 3  |  18 = 2 × 3²  ➔  Comuns i no comuns amb major exponent: 2² × 3² = 4 × 9 = &lt;strong&gt;36&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Quin és el &lt;strong&gt;MCD&lt;/strong&gt; de dos nombres primers entre si com &lt;strong&gt;7 i 15&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;1&quot;, &quot;steps&quot;: &quot;Com que no comparteixen cap divisor comú excepte la unitat, el seu MCD és &lt;strong&gt;1&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud4-4', '0')">0</button>
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
    <!-- act-ud4-5 (connect) -->

<div class="pdi-activity-card" id="act-mat3-5" data-unit="mat3" data-title="Engranatges i Mides" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Aplicacions Industrials d'MCD i MCM</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada situació tècnica de l'esquerra amb la seua resolució a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Engranatges&quot;, &quot;left&quot;: &quot;Engranatges de 12 i 18 dents en contacte&quot;, &quot;badge_right&quot;: &quot;MCM&quot;, &quot;right&quot;: &quot;Coincideixen de nou en la mateixa posició cada 36 dents&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Tall de Perfils&quot;, &quot;left&quot;: &quot;Tallar tubs d&#x27;acer de 48 m i 72 m en trams iguals màxims&quot;, &quot;badge_right&quot;: &quot;MCD&quot;, &quot;right&quot;: &quot;Seccions màximes de 24 metres sense malbaratar metall&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Manteniment&quot;, &quot;left&quot;: &quot;Revisió preventiva de dos equips cada 15 i 20 dies&quot;, &quot;badge_right&quot;: &quot;Periodicitat&quot;, &quot;right&quot;: &quot;Coincidència de manteniment conjunt cada 60 dies&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Classificació&quot;, &quot;left&quot;: &quot;Envasar 30 caragols i 45 femelles en bosses màximes iguals&quot;, &quot;badge_right&quot;: &quot;Agrupament&quot;, &quot;right&quot;: &quot;Agrupament màxim de 15 unitats per bossa sense residu&quot;}]">
        <div class="connect-top-status">
          <span class="connect-score-badge">🔗 Parelles connectades: <strong class="connect-matched-count">0</strong> / <span class="connect-total-count">4</span></span>
        </div>
        <div class="connect-columns-grid">
          <div class="connect-col-left"></div>
          <div class="connect-col-right"></div>
        </div>
        <div class="connect-win-banner" style="display: none;">
          <div class="connect-win-trophy">🎉</div>
          <h4>Totes les parelles connectades correctament!</h4>
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud4-5')">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-6 (order) -->

<div class="pdi-activity-card" id="act-mat3-6" data-unit="mat3" data-title="Passos MCD i MCM" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R6 · Algorisme de Càlcul</span>
        <h3>⚖️ Algorisme per al Càlcul d'MCD i MCM per Factors Primers</h3>
      </div>
      <p class="pdi-instruction">Ordena els 4 passos de l'algorisme en la seqüència matemàtica rigorosa:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Descompondre cadascun dels nombres en producte de factors primers</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Expressar les descomposicions en forma de potències de bases primeres</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Per a l'MCD: seleccionar només els factors comuns elevats al menor exponent</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Per a l'MCM: seleccionar tots els factors comuns i no comuns elevats al major exponent</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud4-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud4-7 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat3-7" data-unit="mat3" data-title="MCD vs MCM" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R7 · Speed Quiz Problemes</span>
        <h3>⚡ Speed Quiz: Identificació d'MCD o MCM en Casos Reals</h3>
      </div>
      <p class="pdi-instruction">Identifica si l'afirmació sobre l'estratègia de resolució és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Si volem tallar dues bobines de cable de 60 m i 80 m en trossos iguals el més llargs possible sense residu, cal aplicar el Màxim Comú Divisor.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Dividir o fragmentar en parts iguals de màxima mida requereix l&#x27;MCD (MCD = 20 m).&quot;}, {&quot;q&quot;: &quot;Si dues màquines fan una neteja automàtica cada 6 minuts i cada 8 minuts respectivament, la propera coincidència es calcula amb l&#x27;MCD.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Les coincidències periòdiques d&#x27;esdeveniments es calculen amb l&#x27;&lt;strong&gt;MCM&lt;/strong&gt; (MCM(6,8) = 24 minuts)!&quot;}, {&quot;q&quot;: &quot;El producte de dos nombres naturals és igual al producte del seu MCD pel seu MCM: a × b = MCD(a,b) × MCM(a,b).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Teorema fonamental de la relació entre MCD i MCM.&quot;}, {&quot;q&quot;: &quot;Per a empaquetar 40 claus i 50 caragols en bosses idèntiques amb el màxim nombre de peces sense barrejar-los cal calcular l&#x27;MCM.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Envasar o agrupar sense sobrant requereix l&#x27;&lt;strong&gt;MCD&lt;/strong&gt; (MCD(40,50) = 10 unitats)!&quot;}, {&quot;q&quot;: &quot;L&#x27;MCD de dos nombres mai pot ser superior al menor d&#x27;aquests nombres.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Un divisor comú no pot superar el valor del propi nombre dividit.&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud4-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud4-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud4-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud4-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-8 (intrus) -->

<div class="pdi-activity-card" id="act-mat3-8" data-unit="mat3" data-title="Divisors i Múltiples" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Divisors de 36 i Múltiples de 8</h3>
      </div>
      <p class="pdi-instruction">Descobreix quin valor no compleix la propietat matemàtica indicada:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Divisors de 36&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són DIVISORS de 36, però un NO ho és. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;4&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;36 ÷ 4 = 9 (divisió exacta).&quot;}, {&quot;text&quot;: &quot;9&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;36 ÷ 9 = 4 (divisió exacta).&quot;}, {&quot;text&quot;: &quot;8&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 36 ÷ 8 = 4 amb residu 4, per tant no és divisió exacta i 8 no és divisor de 36!&quot;}, {&quot;text&quot;: &quot;12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;36 ÷ 12 = 3 (divisió exacta).&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Múltiples de 8&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són MÚLTIPLES de 8, però un NO ho és. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;32&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;8 × 4 = 32.&quot;}, {&quot;text&quot;: &quot;48&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;8 × 6 = 48.&quot;}, {&quot;text&quot;: &quot;54&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Els múltiples contigus són 48 (8×6) i 56 (8×7). El 54 no és múltiple de 8!&quot;}, {&quot;text&quot;: &quot;72&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;8 × 9 = 72.&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud4-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-9 (keypad) -->

<div class="pdi-activity-card" id="act-mat3-9" data-unit="mat3" data-title="Logística de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Problemes d'Organització de Taller i Fabricació</h3>
      </div>
      <p class="pdi-instruction">Resol cada problema tècnic i introdueix la xifra exacta:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Tenim dos llistons d&#x27;alumini de 45 cm i 60 cm. Volem tallar-los en trams iguals de la màxima longitud possible sense cap residu de metall. Quant mesurarà cada tram en cm?&quot;, &quot;expected&quot;: &quot;15&quot;, &quot;steps&quot;: &quot;MCD(45, 60): 45 = 3² × 5, 60 = 2² × 3 × 5  ➔  MCD = 3 × 5 = &lt;strong&gt;15 cm&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Un compressor d&#x27;aire purga el calderí cada 12 minuts i un assecador frigorífic neteja els filtres cada 15 minuts. Si han començat el torn alhora a les 08:00 h, al cap de quants minuts tornaran a coincidir junts en la parada de manteniment?&quot;, &quot;expected&quot;: &quot;60&quot;, &quot;steps&quot;: &quot;MCM(12, 15): 12 = 2² × 3, 15 = 3 × 5  ➔  MCM = 2² × 3 × 5 = &lt;strong&gt;60 minuts&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Hem d&#x27;empaquetar 30 caragols M6 i 45 femelles M6 en bosses idèntiques amb el màxim nombre de peces sense barrejar-les. Quantes bosses de material s&#x27;obtindran en total?&quot;, &quot;expected&quot;: &quot;5&quot;, &quot;steps&quot;: &quot;MCD(30, 45) = 15 peces/bossa  ➔  30/15 = 2 bosses de caragols + 45/15 = 3 bosses de femelles = &lt;strong&gt;5 bosses en total&lt;/strong&gt;.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud4-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud4-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud4-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud4-9', '-')">+/-</button>

            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud4-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud4-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud4-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud4-10 (case) -->

<div class="pdi-activity-card" id="act-mat3-10" data-unit="mat3" data-title="Tall de Cables i Cicles" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 3 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Tall de Material i Sincronització de Línia</h3>
      </div>
      <p class="pdi-instruction">Avalua la situació laboral i selecciona la solució tècnica òptima:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Tall de Rotllos de Cable de Coure&quot;, &quot;context&quot;: &quot;Un instal·lador elèctric disposa de dos rotllos de cable unipolar de &lt;strong&gt;48 metres&lt;/strong&gt; i &lt;strong&gt;72 metres&lt;/strong&gt;. Ha de tallar tots dos rotllos en trams d&#x27;exacta longitud, el més llargs possible i sense cap residu de coure.&quot;, &quot;question&quot;: &quot;Quina longitud haurà de tindre cada tram de cable tallat?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;24 metres&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Solució exacta! MCD(48, 72) = 24 metres. Obtindrà 2 trams del primer rotllo i 3 del segon aprofitant el 100% del material.&quot;}, {&quot;text&quot;: &quot;12 metres&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;12 m és divisor comú, però no és el màxim possible (24 és el doble i optimitza el treball).&quot;}, {&quot;text&quot;: &quot;16 metres&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;16 divideix 48 però no divideix exactament 72 (72/16 = 4,5), per tant sobraria cable.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Sincronització de Manteniment en Línia&quot;, &quot;context&quot;: &quot;En una línia de muntatge automàtica, la màquina A neteja injectors cada &lt;strong&gt;6 minuts&lt;/strong&gt; i la màquina B calibra sensors cada &lt;strong&gt;8 minuts&lt;/strong&gt;. A les 08:00 h han començat el torn coincidint en la parada al mateix instant.&quot;, &quot;question&quot;: &quot;A quina hora tornaran a coincidir exactament per primera vegada en la parada?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;A les 08:24 h&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Brillant! MCM(6, 8) = 24 minuts. La coincidència es produeix a les 08:24 h.&quot;}, {&quot;text&quot;: &quot;A les 08:48 h&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;A les 08:48 h serà la segona coincidència (als 48 minuts), la primera ocorre als 24 minuts.&quot;}, {&quot;text&quot;: &quot;A les 08:14 h&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;14 no és múltiple comú de 6 ni de 8.&quot;}]}]">
        <div class="case-top-status">
          <span class="case-badge">🛠️ Cas Pràctic: <strong class="case-cur-num">1</strong> / <span class="case-total-num">2</span></span>
        </div>
        <div class="case-main-box">
          <div class="case-header-bar">
            <span class="case-icon">📋</span>
            <h4 class="case-title-text">Carregant cas pràctic...</h4>
          </div>
          <div class="case-context-box">
            <p class="case-context-text"></p>
          </div>
          <div class="case-question-box">
            <span class="case-q-icon">❓</span>
            <p class="case-question-text"></p>
          </div>
          <div class="case-options-grid"></div>
        </div>
        <div class="case-feedback-box" style="display: none;">
          <div class="case-feedback-content"></div>
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud4-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud4-10')">🔄 Tornar a Practicar</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-1 (category) -->

<div class="pdi-activity-card" id="act-mat4-1" data-unit="mat4" data-title="Pròpies, Impròpies o Unitat" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R1 · Classificació Fraccions</span>
        <h3>🥧 Tipus de Fraccions Respecte a la Unitat (8 Fraccions)</h3>
      </div>
      <p class="pdi-instruction">Classifica cada fracció segons si és menor que 1 (pròpia), major que 1 (impròpia) o igual a la unitat:</p>
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
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 2/3</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 7/4</div>
        <div class="pdi-item" draggable="true" data-cat="unit"><span class="item-handle">☰</span> 5/5</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 3/8</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 9/2</div>
        <div class="pdi-item" draggable="true" data-cat="unit"><span class="item-handle">☰</span> 10/10</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 8/3</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 1/6</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud5-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud5-2 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat4-2" data-unit="mat4" data-title="Conceptes de Fraccions" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Conceptes Fonamentals de Fraccions</h3>
      </div>
      <p class="pdi-instruction">Prem VERITAT o FALS a la pissarra digital:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El denominador d&#x27;una fracció indica en quantes parts iguals es divideix la unitat.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; I el numerador indica quantes d&#x27;aquestes parts iguals es consideren.&quot;}, {&quot;q&quot;: &quot;Dues fraccions a/b i c/d són equivalents si els seus productes creuats són iguals (a × d = b × c).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Regla bàsica d&#x27;equivalència (ex: 2/3 = 4/6 perquè 2 × 6 = 3 × 4 = 12).&quot;}, {&quot;q&quot;: &quot;Per a simplificar una fracció es multipliquen el numerador i el denominador pel mateix nombre enter.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Per a simplificar es &lt;strong&gt;DIVIDEIX&lt;/strong&gt; pel mateix factor comú; multiplicar és amplificar!&quot;}, {&quot;q&quot;: &quot;La fracció 3/4 equival exactament al valor decimal 0,75 i al 75%.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 3 dividit entre 4 dona exactament 0,75 (75%).&quot;}, {&quot;q&quot;: &quot;En sumar dues fraccions amb el mateix denominador, se sumen tant els numeradors com els denominadors.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Es manté el mateix denominador i només se sumen els numeradors: 1/5 + 2/5 = &lt;strong&gt;3/5&lt;/strong&gt;, mai 3/10!&quot;}]">
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

<div class="pdi-activity-card" id="act-mat4-3" data-unit="mat4" data-title="Equivalència i Simplificació" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Equivalència i Fraccions Irreducibles</h3>
      </div>
      <p class="pdi-instruction">Troba la fracció que no compleix la regla matemàtica de la ronda:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Equivalents a 2/5&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes fraccions són equivalents a 2/5, però una és discordant. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;4/10&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;4/10 simplificat entre 2 és 2/5.&quot;}, {&quot;text&quot;: &quot;6/15&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;6/15 simplificat entre 3 és 2/5.&quot;}, {&quot;text&quot;: &quot;8/25&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 8/25 = 0,32, mentre que 2/5 = 0,40!&quot;}, {&quot;text&quot;: &quot;20/50&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;20/50 simplificat entre 10 és 2/5.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Fraccions Irreducibles&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes fraccions són IRREDUCIBLES (primeres entre si), però una es pot simplificar. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;3/7&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;3 i 7 són primers entre si.&quot;}, {&quot;text&quot;: &quot;5/9&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;5 i 9 són primers entre si.&quot;}, {&quot;text&quot;: &quot;9/15&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 9/15 es pot simplificar dividint numerador i denominador entre 3, donant 3/5!&quot;}, {&quot;text&quot;: &quot;11/13&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;11 i 13 són primers entre si.&quot;}]}]">
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

<div class="pdi-activity-card" id="act-mat4-4" data-unit="mat4" data-title="Fracció d'una Quantitat" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Fracció d'una Quantitat en Problemes Reals</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric final requerit i introdueix-lo:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un dipòsit de refrigerant de maquinària té una capacitat de 200 litres. Si el sensor indica que s&#x27;han consumit exactament els &lt;strong&gt;3/5 del dipòsit&lt;/strong&gt;, quants litres s&#x27;han consumit?&quot;, &quot;expected&quot;: &quot;120&quot;, &quot;steps&quot;: &quot;(200 × 3) / 5 = 600 / 5 = &lt;strong&gt;120 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Un tècnic percep un sou brut mensual de 1.500 €. Si la seua retenció d&#x27;IRPF i Seguretat Social equival a &lt;strong&gt;1/5 del total&lt;/strong&gt;, quants euros se li retenen a la nòmina?&quot;, &quot;expected&quot;: &quot;300&quot;, &quot;steps&quot;: &quot;1.500 / 5 = &lt;strong&gt;300 €&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;En un lot de 48 xapes perforades, el control de qualitat descarta per tolerància defectuosa &lt;strong&gt;1/4 del total&lt;/strong&gt;. Quantes xapes han superat el control com a peces vàlides?&quot;, &quot;expected&quot;: &quot;36&quot;, &quot;steps&quot;: &quot;Defectuoses: 48 / 4 = 12 xapes  ➔  Vàlides: 48 - 12 = &lt;strong&gt;36 xapes&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud5-4', '0')">0</button>
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
    <!-- act-ud5-5 (connect) -->

<div class="pdi-activity-card" id="act-mat4-5" data-unit="mat4" data-title="Proporcions de Taller" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Proporcions i Mescles de Taller</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada expressió fraccionària de taller amb el seu valor o percentatge equivalent:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Morter&quot;, &quot;left&quot;: &quot;Mescla de morter amb 1/4 part de ciment&quot;, &quot;badge_right&quot;: &quot;Percentatge&quot;, &quot;right&quot;: &quot;25% de la massa total de la mescla&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Dipòsit&quot;, &quot;left&quot;: &quot;Dipòsit de combustible a 3/4 de capacitat&quot;, &quot;badge_right&quot;: &quot;Nivell&quot;, &quot;right&quot;: &quot;75% del volum útil total&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Comercial&quot;, &quot;left&quot;: &quot;Rebaixa comercial d&#x27;1/5 en una comanda&quot;, &quot;badge_right&quot;: &quot;Estalvi&quot;, &quot;right&quot;: &quot;20% de descompte sobre l&#x27;import base&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Jornada&quot;, &quot;left&quot;: &quot;Treball a 1/2 jornada en torn de 8 hores&quot;, &quot;badge_right&quot;: &quot;Temps&quot;, &quot;right&quot;: &quot;50% de dedicació (4 hores efectives)&quot;}]">
        <div class="connect-top-status">
          <span class="connect-score-badge">🔗 Parelles connectades: <strong class="connect-matched-count">0</strong> / <span class="connect-total-count">4</span></span>
        </div>
        <div class="connect-columns-grid">
          <div class="connect-col-left"></div>
          <div class="connect-col-right"></div>
        </div>
        <div class="connect-win-banner" style="display: none;">
          <div class="connect-win-trophy">🎉</div>
          <h4>Totes les parelles connectades correctament!</h4>
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud5-5')">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-6 (order) -->

<div class="pdi-activity-card" id="act-mat4-6" data-unit="mat4" data-title="Algorisme Suma Fraccions" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R6 · Suma amb m.c.m.</span>
        <h3>🥧 Algorisme per a Sumar Fraccions amb Diferent Denominador</h3>
      </div>
      <p class="pdi-instruction">Ordena els 4 passos matemàtics en la seqüència estricta de resolució:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Trobar el comú denominador calculant el mínim comú múltiple dels denominadors</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Calcular els nous numeradors dividint el comú denominador pel denominador antic i multiplicant pel numerador</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Escriure les noves fraccions equivalents amb el mateix denominador comú</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Sumar els numeradors mantenint invariable el denominador comú obtingut</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud5-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud5-7 (speedquiz) -->

<div class="pdi-activity-card" id="act-mat4-7" data-unit="mat4" data-title="Producte i Quocient" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R7 · Speed Quiz Operacions</span>
        <h3>⚡ Speed Quiz: Multiplicació i Divisió de Fraccions</h3>
      </div>
      <p class="pdi-instruction">Respon si cada regla d'operació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Per a multiplicar dues fraccions es multipliquen els numeradors entre si i els denominadors entre si en línia recta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (a/b) × (c/d) = (a×c) / (b×d). Exemple: 2/3 × 4/5 = 8/15.&quot;}, {&quot;q&quot;: &quot;Per a multiplicar dues fraccions cal obtindre primer el m.c.m. dels seus denominadors.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El m.c.m. només s&#x27;utilitza per a &lt;strong&gt;SUMAR I RESTAR&lt;/strong&gt; fraccions amb diferent denominador; mai en multiplicar!&quot;}, {&quot;q&quot;: &quot;Per a dividir dues fraccions es multipliquen els seus termes en creu: (a/b) ÷ (c/d) = (a×d) / (b×c).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; O multiplicar la primera fracció per la inversa de la segona.&quot;}, {&quot;q&quot;: &quot;Qualsevol nombre enter es pot expressar com una fracció afegint un 1 com a denominador.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Exemple: 6 = 6/1. Així 6 × 2/3 = 12/3 = 4.&quot;}, {&quot;q&quot;: &quot;La meitat de la meitat d&#x27;una quantitat equival a multiplicar per 1/2 i resulta en 1/2.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La meitat d&#x27;un mig és 1/2 × 1/2 = &lt;strong&gt;1/4 (un quart)&lt;/strong&gt;!&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud5-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud5-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud5-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud5-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-8 (intrus) -->

<div class="pdi-activity-card" id="act-mat4-8" data-unit="mat4" data-title="Operacions Discordants" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Càlculs Combinats Discordants</h3>
      </div>
      <p class="pdi-instruction">Executa les operacions i detecta quina expressió dona un resultat diferent:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Valor Objectiu 1/2&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen exactament 1/2, però una dona un valor diferent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;1/4 + 1/4&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;2/4 = 1/2.&quot;}, {&quot;text&quot;: &quot;1 - 1/2&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;1 - 1/2 = 1/2.&quot;}, {&quot;text&quot;: &quot;2/3 × 3/4&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;6/12 = 1/2.&quot;}, {&quot;text&quot;: &quot;1/2 ÷ 2&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 1/2 ÷ 2 = 1/4, no pas 1/2!&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Valor Objectiu 1&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes expressions són iguals a la unitat (1), però una no hi arriba. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;3/5 + 2/5&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;5/5 = 1.&quot;}, {&quot;text&quot;: &quot;4/7 × 7/4&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Producte per la fracció inversa = 28/28 = 1.&quot;}, {&quot;text&quot;: &quot;5/6 ÷ 5/6&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Qualsevol nombre dividit per si mateix és 1.&quot;}, {&quot;text&quot;: &quot;1/2 + 1/3&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 1/2 + 1/3 = 3/6 + 2/6 = 5/6 (aproximadament 0,833), no arriba a 1!&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud5-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-9 (keypad) -->

<div class="pdi-activity-card" id="act-mat4-9" data-unit="mat4" data-title="Taller amb Fraccions" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Problemes Pràctics amb Fraccions al Taller</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor requerit i tecleja el resultat (usa el punt per als decimals):</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;D&#x27;un rotllo de tub corrugat de &lt;strong&gt;120 metres&lt;/strong&gt; s&#x27;instal·len &lt;strong&gt;2/3&lt;/strong&gt; en una canalització elèctrica. Quants metres de tub queden al rotllo?&quot;, &quot;expected&quot;: &quot;40&quot;, &quot;steps&quot;: &quot;Instal·lat: (120 × 2)/3 = 80 m  ➔  Resta: 120 - 80 = &lt;strong&gt;40 metres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una proveta conté &lt;strong&gt;3/4 de litre&lt;/strong&gt; d&#x27;oli de tall i una segona proveta en conté &lt;strong&gt;1/2 litre&lt;/strong&gt;. Quin és el volum total en litres expressat en format decimal (usa el punt)?&quot;, &quot;expected&quot;: &quot;1.25&quot;, &quot;steps&quot;: &quot;3/4 = 0,75 L  ➔  1/2 = 0,50 L  ➔  0,75 + 0,50 = &lt;strong&gt;1.25 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Calcula el resultat exacte en nombre enter de: &lt;strong&gt;(3/4 × 8) + 4&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;10&quot;, &quot;steps&quot;: &quot;3/4 de 8 = (3×8)/4 = 24/4 = 6  ➔  6 + 4 = &lt;strong&gt;10&lt;/strong&gt;.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud5-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud5-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud5-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud5-9', '-')">+/-</button>

            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud5-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud5-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud5-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud5-10 (case) -->

<div class="pdi-activity-card" id="act-mat4-10" data-unit="mat4" data-title="Dosificació i Producció" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: var(--pdi-primary);">MAT 4 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Mescles de Pintura i Control de Producció</h3>
      </div>
      <p class="pdi-instruction">Llig les condicions tècniques i tria la decisió industrial correcta:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Dosificació de Pintura Bicomponent&quot;, &quot;context&quot;: &quot;Al taller de pintura d&#x27;automoció cal preparar &lt;strong&gt;600 ml&lt;/strong&gt; d&#x27;imprimació bicomponent. La fitxa de seguretat química estableix una proporció estricta de &lt;strong&gt;2/3 de resina base&lt;/strong&gt; i &lt;strong&gt;1/3 d&#x27;enduridor catalitzador&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quants mil·lilitres de cada component s&#x27;han de dosificar a la proveta?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;400 ml de resina base i 200 ml d&#x27;enduridor&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Dosificació exacta! 600 × 2 / 3 = 400 ml de base i 600 × 1 / 3 = 200 ml d&#x27;enduridor. Polimerització química perfecta.&quot;}, {&quot;text&quot;: &quot;300 ml de resina base i 300 ml d&#x27;enduridor&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Proporció al 50% errònia; arruïnaria la barreja en excés de catalitzador.&quot;}, {&quot;text&quot;: &quot;450 ml de resina base i 150 ml d&#x27;enduridor&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Això respondria a una proporció de 3/4 i 1/4 (75% i 25%), no pas 2/3 i 1/3.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Control de Comanda de Serralleria&quot;, &quot;context&quot;: &quot;Un taller de serralleria ha de fabricar una comanda de &lt;strong&gt;24 reixes metàl·liques&lt;/strong&gt;. Dilluns completen &lt;strong&gt;1/2&lt;/strong&gt; del total i dimarts n&#x27;elaboren &lt;strong&gt;1/3&lt;/strong&gt; del total.&quot;, &quot;question&quot;: &quot;Quina part de la comanda queda pendent i quantes reixes falten?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Falta 1/6 de la comanda (4 reixes pendents)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Brillant! 1/2 + 1/3 = 3/6 + 2/6 = 5/6 fabricades. Resta pendent 1/6 de 24 = 4 reixes.&quot;}, {&quot;text&quot;: &quot;Falta 1/4 de la comanda (6 reixes pendents)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;1/2 + 1/3 dona 5/6, no pas 3/4.&quot;}, {&quot;text&quot;: &quot;Falta 2/5 de la comanda (10 reixes pendents)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Error clàssic de sumar denominadors en línia recta (1+1)/(2+3). Cal obtindre el comú denominador!&quot;}]}]">
        <div class="case-top-status">
          <span class="case-badge">🛠️ Cas Pràctic: <strong class="case-cur-num">1</strong> / <span class="case-total-num">2</span></span>
        </div>
        <div class="case-main-box">
          <div class="case-header-bar">
            <span class="case-icon">📋</span>
            <h4 class="case-title-text">Carregant cas pràctic...</h4>
          </div>
          <div class="case-context-box">
            <p class="case-context-text"></p>
          </div>
          <div class="case-question-box">
            <span class="case-q-icon">❓</span>
            <p class="case-question-text"></p>
          </div>
          <div class="case-options-grid"></div>
        </div>
        <div class="case-feedback-box" style="display: none;">
          <div class="case-feedback-content"></div>
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud5-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud5-10')">🔄 Tornar a Practicar</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-1 (order) -->
  </div>
</div>

<canvas id="pdi-confetti-canvas" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999; display: none;"></canvas>

</div>

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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
}
.pdi-dash-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid var(--pdi-border);
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.dash-title-wrap h2 {
  margin: 0 0 0.3rem 0;
  font-size: 1.6rem;
  color: #1e293b;
}
.dash-title-wrap p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--pdi-text-muted);
}
.dash-quick-tools {
  display: flex;
  gap: 0.75rem;
}
.btn-pdi-tool {
  background: #f1f5f9;
  border: 1px solid var(--pdi-border);
  padding: 0.6rem 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s;
}
.btn-pdi-tool:hover {
  background: #e2e8f0;
  transform: translateY(-1px);
}

.pdi-units-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
}
.pdi-unit-dash-card {
  background: #ffffff;
  border: 1px solid var(--pdi-border);
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
  transition: transform 0.2s;
}
.pdi-unit-dash-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
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
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
}
.count-badge {
  background: #f1f5f9;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}
.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.card-title .unit-icon {
  font-size: 1.8rem;
}
.card-title h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #1e293b;
}
.card-desc {
  font-size: 0.88rem;
  line-height: 1.4;
  color: var(--pdi-text-muted);
  margin: 0 0 1rem 0;
  flex-grow: 1;
}
.card-acts-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
}
@media (max-width: 640px) {
  .card-acts-list {
    grid-template-columns: 1fr;
  }
}
.btn-launch-act {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.5rem 0.7rem;
  border-radius: 9px;
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
  transform: translateX(2px);
}
.act-idx {
  font-weight: 800;
  color: #1e293b;
  font-size: 0.82rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.act-name {
  display: none;
}
.act-arrow {
  color: #94a3b8;
  font-weight: 800;
  margin-left: 0.25rem;
}

/* VISTA DE JOC */
.pdi-game-view {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  min-height: 600px;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid var(--pdi-border);
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  overflow: hidden;
}
.pdi-game-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: #ffffff;
  border-bottom: 2px solid #e2e8f0;
  flex-shrink: 0;
  gap: 0.75rem;
}
.btn-back-dash {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #334155;
}
.btn-back-dash:hover {
  background: #e2e8f0;
  transform: translateX(-2px);
}
.game-meta-info {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.game-unit-badge {
  background: #2563eb;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}
.game-act-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1e293b;
}
.game-nav-arrows {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-game-nav {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 0.45rem 0.8rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
}
.btn-game-nav:hover {
  background: #e2e8f0;
}
.game-counter {
  font-weight: 800;
  font-size: 0.95rem;
  color: #64748b;
  min-width: 55px;
  text-align: center;
}
.game-top-tools {
  display: flex;
  gap: 0.4rem;
}
.btn-tool-icon {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}
.btn-tool-icon:hover {
  background: #e2e8f0;
}

.pdi-game-stage {
  flex-grow: 1;
  display: flex;
  position: relative;
  overflow-y: auto;
  padding: 1.25rem 1.5rem;
  background: var(--pdi-bg);
}
.pdi-activity-card {
  display: none;
  width: 100%;
  flex-direction: column;
}
.pdi-activity-card.active {
  display: flex;
}
.pdi-act-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
}
.pdi-act-title .act-num {
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}
.pdi-act-title h3 {
  margin: 0;
  font-size: 1.35rem;
  color: #1e293b;
}
.pdi-instruction {
  font-size: 1.05rem;
  color: #475569;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

/* DRAG & DROP ESTILS */
.pdi-order-wrapper {
  display: flex;
  gap: 1.5rem;
  flex-grow: 1;
}
.pdi-source-pool {
  flex: 1;
  background: #ffffff;
  border: 2px dashed #cbd5e1;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-height: 200px;
}
.pdi-slots-column {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.pdi-slot {
  background: #f1f5f9;
  border: 2px dashed #94a3b8;
  border-radius: 12px;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  gap: 0.75rem;
  box-sizing: border-box;
}
.pdi-slot.drag-over {
  border-color: #2563eb;
  background: #dbeafe;
}
.slot-badge {
  background: #64748b;
  color: #ffffff;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  white-space: nowrap;
}
.slot-hint {
  font-size: 0.85rem;
  color: #94a3b8;
  font-style: italic;
}
.pdi-item {
  background: #ffffff;
  border: 2px solid #94a3b8;
  border-radius: 10px;
  padding: 0.65rem 0.9rem;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: grab;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.pdi-item.dragging {
  opacity: 0.4;
}
.item-handle {
  color: #94a3b8;
  font-size: 1.1rem;
}
.pdi-footer-feedback {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.btn-pdi-check {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 10px rgba(37,99,235,0.3);
}
.btn-pdi-check:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}
.pdi-status-msg {
  font-weight: 800;
  font-size: 1.1rem;
}
.pdi-status-msg.correct { color: #10b981; }
.pdi-status-msg.error { color: #ef4444; }

/* CATEGORY GRID */
.pdi-boxes-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}
.pdi-boxes-grid.grid-2 { grid-template-columns: 1fr 1fr; }
.pdi-boxes-grid.grid-3 { grid-template-columns: 1fr 1fr 1fr; }
.pdi-drop-box {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 180px;
}
.pdi-drop-box.drag-over {
  border-color: #2563eb;
  background: #eff6ff;
}
.box-head {
  background: #f1f5f9;
  padding: 0.6rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #cbd5e1;
}
.box-head h4 {
  margin: 0;
  font-size: 1rem;
  color: #1e293b;
}
.box-content {
  flex-grow: 1;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* SPEED QUIZ */
.pdi-speedquiz-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
.sq-top-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
  font-weight: 700;
}
.sq-streak-badge {
  color: #ea580c;
}
.sq-main-play-area {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.sq-statement-box {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.sq-statement-text {
  font-size: 1.45rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
  line-height: 1.4;
}
.sq-buttons-row {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
.btn-sq {
  flex: 1;
  max-width: 320px;
  min-height: 85px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: #ffffff;
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
  transition: all 0.2s;
}
.btn-sq:hover {
  transform: translateY(-3px) scale(1.02);
}
.btn-sq-true {
  background: linear-gradient(135deg, #10b981, #059669);
}
.btn-sq-false {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}
.sq-btn-icon {
  font-size: 2.2rem;
  font-weight: 900;
}
.sq-btn-label {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.05em;
}
.sq-feedback-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  animation: fadeIn 0.3s ease;
}
.sq-feedback-box.correct {
  border: 2px solid #10b981;
  background: #ecfdf5;
  color: #065f46;
}
.sq-feedback-box.incorrect {
  border: 2px solid #ef4444;
  background: #fef2f2;
  color: #991b1b;
}
.btn-sq-next {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
}
.sq-summary-box {
  background: #ffffff;
  border: 2px solid #10b981;
  border-radius: 18px;
  padding: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: fadeIn 0.4s ease;
}
.sq-summary-trophy {
  font-size: 4rem;
}
.sq-summary-title {
  margin: 0;
  font-size: 1.6rem;
  color: #065f46;
}
.btn-sq-restart {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.75rem 1.75rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
}

/* INTRUS */
.pdi-intrus-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
.intrus-question-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
}
.intrus-question-text {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #1e293b;
}
.intrus-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.intrus-card {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 16px;
  padding: 1.5rem;
  min-height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  transition: all 0.2s;
  font-size: 1.15rem;
  font-weight: 700;
  color: #334155;
}
.intrus-card:hover {
  border-color: #2563eb;
  transform: translateY(-2px);
}
.intrus-card.is-correct-intrus {
  border-color: #10b981 !important;
  background: #ecfdf5 !important;
  color: #065f46 !important;
}
.intrus-card.is-wrong-pick {
  border-color: #ef4444 !important;
  background: #fef2f2 !important;
  color: #991b1b !important;
  animation: shake 0.4s ease;
}
.intrus-feedback-box {
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.intrus-feedback-box.correct {
  background: #ecfdf5;
  border: 2px solid #10b981;
  color: #065f46;
}
.btn-intrus-next {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.4rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
}

/* KEYPAD */
.pdi-keypad-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}
.kp-problem-box {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  padding: 1.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.kp-prob-icon { font-size: 2.2rem; }
.kp-prob-text {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 800;
  color: #1e293b;
}
.kp-calc-wrapper {
  display: flex;
  gap: 1.5rem;
}
.kp-display-wrap {
  flex: 1;
  background: #0f172a;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kp-display-label {
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.kp-display-screen {
  color: #38bdf8;
  font-family: monospace;
  font-size: 2.8rem;
  font-weight: 900;
  text-align: right;
  letter-spacing: 0.08em;
}
.kp-keys-grid {
  flex: 1.2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
}
.kp-key {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  min-height: 55px;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.04);
  transition: all 0.15s;
}
.kp-key:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
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
}
.kp-feedback-box {
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.kp-feedback-box.correct {
  background: #ecfdf5;
  border: 2px solid #10b981;
  color: #065f46;
}
.kp-feedback-box.incorrect {
  background: #fef2f2;
  border: 2px solid #ef4444;
  color: #991b1b;
}
.btn-kp-next {
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 0.65rem 1.4rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  align-self: flex-end;
}

/* 5. CONNECTA PARELLES DE TALLER (MATCHING) */
.pdi-connect-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
.connect-top-status {
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 0.5rem;
}
.connect-score-badge {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  color: #334155;
}
.connect-columns-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
}
.connect-col-left, .connect-col-right {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.connect-item {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 75px;
  box-sizing: border-box;
}
.connect-item:hover {
  border-color: #3b82f6;
  background: #f8fafc;
  transform: translateY(-2px);
}
.connect-item.selected {
  border-color: #2563eb;
  background: #eff6ff;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.2);
  transform: scale(1.02);
}
.connect-item.matched {
  border-color: #10b981;
  background: #ecfdf5;
  color: #065f46;
  cursor: default;
  transform: none;
}
.connect-item.matched .item-tag {
  background: #a7f3d0;
  color: #065f46;
}
.connect-bullet {
  color: #94a3b8;
  font-size: 1.2rem;
}
.connect-item.selected .connect-bullet {
  color: #2563eb;
}
.connect-item.matched .connect-bullet {
  display: none;
}
.connect-check {
  background: #10b981;
  color: #ffffff;
  font-weight: 900;
  border-radius: 999px;
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-left: auto;
}
.item-tag {
  background: #e2e8f0;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;
}
.connect-content {
  flex-grow: 1;
  font-size: 1.05rem;
  line-height: 1.35;
}
.connect-win-banner {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border: 2px solid #6ee7b7;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  animation: fadeIn 0.4s ease;
}
.connect-win-trophy { font-size: 3rem; }
.connect-win-banner h4 {
  margin: 0;
  font-size: 1.3rem;
  color: #065f46;
}
.btn-connect-restart {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.65rem 1.5rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-connect-restart:hover {
  background: #059669;
}

/* 6. CAS PRÀCTIC DE TALLER I DIAGNOSI */
.pdi-case-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.25rem;
  max-width: 1050px;
  margin: 0 auto;
  width: 100%;
}
.case-top-status {
  display: flex;
  justify-content: flex-end;
}
.case-badge {
  background: #fef3c7;
  border: 1px solid #fde68a;
  color: #92400e;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
}
.case-main-box {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.case-header-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.case-icon { font-size: 1.8rem; }
.case-title-text {
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 800;
}
.case-context-box {
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  padding: 1rem 1.25rem;
  border-radius: 0 10px 10px 0;
  font-size: 1.05rem;
  line-height: 1.5;
  color: #334155;
}
.case-question-box {
  background: #fffbeb;
  border: 1px solid #fef3c7;
  border-radius: 10px;
  padding: 0.85rem 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.case-q-icon { font-size: 1.3rem; }
.case-question-text {
  margin: 0;
  font-weight: 800;
  color: #b45309;
  font-size: 1.1rem;
}
.case-options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}
.btn-case-opt {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  text-align: left;
  font-size: 1.05rem;
  line-height: 1.35;
  color: #1e293b;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  transition: all 0.2s;
}
.btn-case-opt:hover {
  border-color: #2563eb;
  background: #f8fafc;
  transform: translateX(4px);
}
.opt-letter {
  background: #e2e8f0;
  color: #475569;
  font-weight: 900;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.btn-case-opt.correct {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #065f46 !important;
}
.btn-case-opt.correct .opt-letter {
  background: #10b981;
  color: #ffffff;
}
.btn-case-opt.incorrect {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #991b1b !important;
  animation: shake 0.4s ease;
}
.btn-case-opt.incorrect .opt-letter {
  background: #ef4444;
  color: #ffffff;
}
.case-feedback-box {
  border-radius: 12px;
  padding: 1rem 1.4rem;
  font-size: 1.05rem;
  line-height: 1.45;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: fadeIn 0.3s ease;
}
.case-feedback-box.correct {
  background: #ecfdf5;
  border: 2px solid #a7f3d0;
  color: #065f46;
}
.case-feedback-box.incorrect {
  background: #fef2f2;
  border: 2px solid #fecaca;
  color: #991b1b;
}
.btn-case-next {
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
.btn-case-next:hover {
  background: #1d4ed8;
  transform: translateX(4px);
}
.case-summary-box {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border: 2px solid #6ee7b7;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  animation: fadeIn 0.4s ease;
}
.case-summary-trophy { font-size: 3rem; }
.case-summary-box h4 {
  margin: 0;
  font-size: 1.3rem;
  color: #065f46;
}
.btn-case-restart {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.65rem 1.5rem;
  border-radius: 10px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-case-restart:hover {
  background: #059669;
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
  .connect-columns-grid { grid-template-columns: 1fr; }
}
</style>

<!-- INCLUSIÓ DEL MOTOR JAVASCRIPT EXTERN -->

<script src="{{ 'pissarra-mates.js' | relative_url }}?v=1"></script>

<!-- INCLUSIÓ DEL MOTOR JAVASCRIPT EXTERN -->
<script src="./pissarra-mates.js?v=3"></script>
