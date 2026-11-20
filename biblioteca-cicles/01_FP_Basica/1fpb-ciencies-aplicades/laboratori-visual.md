---
layout: default
title: "Laboratori Visual i Trencaclosques Tècnics — PDI"
course_root: "."
badge: "Pissarra Digital (PDI) · Trencaclosques Anatòmics i Laboratori · 1r FPB"
---

<div class="pdi-app-wrapper">

<!-- ==========================================
     VISTA 1: TAULER DE REPTES VISUALS
     ========================================== -->
<div id="pdi-dashboard" class="pdi-dashboard-view">
  <div class="pdi-dash-header" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(2, 132, 199, 0.25)); border-color: #0284c7;">
    <div class="dash-title-wrap">
      <h2>🧩 Laboratori Visual i Trencaclosques Tècnics (PDI)</h2>
      <p>Ciències Aplicades I (1r FPB) · Reptes visuals d'anatomia, física, geologia i mecànica: arrossega cada peça o òrgan al seu lloc exacte a la pissarra digital.</p>
    </div>
    <div class="dash-quick-tools">
      <button class="btn-pdi-tool" id="btn-sound-toggle" onclick="togglePDISound()"><span id="sound-icon">🔊</span> <span id="sound-text">So Activat</span></button>
      <button class="btn-pdi-tool" onclick="togglePDIFullscreen()">🖥️ Pantalla Completa</button>
    </div>
  </div>

  <!-- FILTRES PER TEMÀTICA -->
  <div class="pdi-filter-bar">
    <button class="filter-chip active" onclick="filterChallenges('all', this)">🌟 Tots els Reptes (<span id="count-all">14</span>)</button>
    <button class="filter-chip" onclick="filterChallenges('anatomia', this)">🫀 Anatomia i Cos Humà</button>
    <button class="filter-chip" onclick="filterChallenges('quimica', this)">🧪 Física, Química i Laboratori</button>
    <button class="filter-chip" onclick="filterChallenges('geologia', this)">🌍 Terra i Energia</button>
    <button class="filter-chip" onclick="filterChallenges('mates', this)">📐 Matemàtiques de Taller</button>
  </div>

  <!-- QUADRÍCULA DE TARGETES DE REPTES -->
  <div class="pdi-challenges-grid" id="challenges-grid">
    <!-- Es genera dinàmicament per JS -->
  </div>
</div>

<!-- ==========================================
     VISTA 2: ARENA INTERACTIVA DE MUNTATGE
     ========================================== -->
<div id="pdi-game-view" class="pdi-game-view" style="display: none;">
  <!-- BARRA SUPERIOR DE CONTROL -->
  <div class="pdi-game-topbar">
    <button class="btn-back-dash" onclick="showPDIDashboard()" title="Tornar al Tauler de Reptes">
      <span>⬅️ Menú de Reptes</span>
    </button>
    
    <div class="game-meta-info" id="game-meta-info">
      <span class="game-unit-badge" id="game-unit-badge">UD7</span>
      <span class="game-act-title" id="game-act-title">Torso Anatòmic Humà</span>
    </div>

    <div class="game-progress-hud">
      <span class="hud-pill">Peces: <strong id="hud-placed">0</strong> / <span id="hud-total">8</span></span>
      <span class="hud-pill">⏱️ <strong id="hud-timer">00:00</strong></span>
    </div>

    <div class="game-top-tools">
      <button class="btn-tool-icon" onclick="resetCurrentChallenge()" title="Reiniciar repte per al següent alumne">🔄 Reiniciar</button>
      <button class="btn-tool-icon" id="game-sound-btn" onclick="togglePDISound()" title="Activar/Silenciar so">🔊</button>
      <button class="btn-tool-icon" id="game-fs-btn" onclick="togglePDIFullscreen()" title="Pantalla Completa">🖥️</button>
    </div>
  </div>

  <!-- ARENA CENTRAL DEL TRENCACLOSQUES -->
  <div class="pdi-arena-layout">
    
    <!-- ÀREA DEL PLÀNOL / ESQUELET (TARGET CANVAS) -->
    <div class="pdi-canvas-container" id="canvas-container">
      <div class="pdi-blueprint-overlay" id="blueprint-area">
        <!-- SVG interactiu injectat pel motor JS -->
      </div>
      
      <!-- FITXA TÈCNICA EMERGENT EN ENCERTAR -->
      <div class="pdi-organ-tooltip" id="organ-tooltip" style="display: none;">
        <span class="tooltip-icon" id="tooltip-icon">🫀</span>
        <div class="tooltip-body">
          <h4 id="tooltip-title">Cor Humà</h4>
          <p id="tooltip-text">Bomba muscular de 4 cavitats.</p>
        </div>
      </div>
    </div>

    <!-- SAFATA LATERAL / INFERIOR DE PECES PER ACOBLAR -->
    <div class="pdi-parts-dock" id="parts-dock">
      <div class="dock-header">
        <h4>📦 Banc de Peces Soltes</h4>
        <span class="dock-hint">Toca o arrossega cada peça al seu lloc anatòmic o mecànic exacte</span>
      </div>
      <div class="dock-items-wrapper" id="dock-items-wrapper">
        <!-- Peces soltes injectades per JS -->
      </div>
    </div>

  </div>

  <!-- MODAL / BANNER DE VICTÒRIA -->
  <div class="pdi-victory-modal" id="victory-modal" style="display: none;">
    <div class="victory-card">
      <div class="victory-badge">🏆 REPTE COMPLETAT!</div>
      <h3 id="victory-title">Enhorabona! Has muntat el model correctament.</h3>
      <p id="victory-stats">Has acoblat totes les peces en un temps de <strong id="vic-time">01:15</strong>.</p>
      <div class="victory-actions">
        <button class="btn-vic-restart" onclick="resetCurrentChallenge()">🔄 Repetir Repte</button>
        <button class="btn-vic-next" onclick="nextChallenge()">Següent Repte ➔</button>
        <button class="btn-vic-menu" onclick="showPDIDashboard()">⬅️ Menú Principal</button>
      </div>
    </div>
  </div>

</div>

<!-- CANVAS DE CONFETI -->
<canvas id="pdi-confetti-canvas" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:9999;"></canvas>

</div>

<style>
/* Reset i variables del Laboratori Visual */
.pdi-app-wrapper {
  --pdi-font: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --pdi-bg: #f8fafc;
  --pdi-card-bg: #ffffff;
  --pdi-border: #e2e8f0;
  --pdi-text: #0f172a;
  --pdi-primary: #0284c7;
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

/* TAULER DE REPTES */
.pdi-dash-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid var(--pdi-border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  margin-bottom: 1.5rem;
}
.dash-title-wrap h2 {
  margin: 0 0 0.4rem 0;
  font-size: 1.65rem;
}
.dash-title-wrap p {
  margin: 0;
  font-size: 0.95rem;
  color: #475569;
}
.dash-quick-tools {
  display: flex;
  gap: 0.75rem;
}
.btn-pdi-tool {
  background: #ffffff;
  border: 1px solid var(--pdi-border);
  padding: 0.6rem 1.1rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.03);
  transition: all 0.15s ease;
}
.btn-pdi-tool:hover {
  background: #f1f5f9;
}

/* FILTRES */
.pdi-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.filter-chip {
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
  cursor: pointer;
  transition: all 0.15s ease;
}
.filter-chip:hover {
  border-color: #0284c7;
  color: #0284c7;
}
.filter-chip.active {
  background: #0284c7;
  border-color: #0284c7;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
}

/* QUADRÍCULA DE REPTES */
.pdi-challenges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}
.pdi-challenge-card {
  background: #ffffff;
  border: 1px solid var(--pdi-border);
  border-radius: 16px;
  padding: 1.35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.pdi-challenge-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  border-color: #38bdf8;
}
.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.card-unit-badge {
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  color: #ffffff;
}
.card-diff-badge {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
}
.pdi-challenge-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #0f172a;
}
.pdi-challenge-card p {
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.45;
  flex: 1;
}
.card-parts-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}
.part-pill-mini {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.2rem 0.55rem;
  font-size: 0.75rem;
  color: #334155;
  font-weight: 600;
}
.btn-launch-challenge {
  background: #0284c7;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.15s ease;
}
.btn-launch-challenge:hover {
  background: #0369a1;
}

/* ARENA DE JOC */
.pdi-game-view {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  min-height: 700px;
  background: #ffffff;
  border: 1px solid var(--pdi-border);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  overflow: hidden;
}
.pdi-game-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.5rem;
  background: #f8fafc;
  border-bottom: 1px solid var(--pdi-border);
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn-back-dash {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}
.game-meta-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.game-unit-badge {
  background: #0284c7;
  color: #ffffff;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-size: 0.85rem;
}
.game-act-title {
  font-weight: 700;
  font-size: 1.15rem;
  color: #0f172a;
}
.game-progress-hud {
  display: flex;
  gap: 0.75rem;
}
.hud-pill {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
}
.hud-pill strong {
  color: #0284c7;
}

/* LAYOUT DE L'ARENA: CANVAS + DOCK */
.pdi-arena-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
@media (min-width: 900px) {
  .pdi-arena-layout {
    flex-direction: row;
  }
}

/* CANVAS DE DIBUIX / BLUEPRINT */
.pdi-canvas-container {
  flex: 1;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 1rem;
}
.pdi-blueprint-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pdi-blueprint-overlay svg {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

/* DOCK DE PECES */
.pdi-parts-dock {
  background: #f1f5f9;
  border-top: 1px solid var(--pdi-border);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 250px;
  overflow-y: auto;
}
@media (min-width: 900px) {
  .pdi-parts-dock {
    width: 340px;
    border-top: none;
    border-left: 1px solid var(--pdi-border);
    max-height: 100%;
  }
}
.dock-header h4 {
  margin: 0 0 0.2rem 0;
  font-size: 1rem;
  color: #1e293b;
}
.dock-hint {
  font-size: 0.8rem;
  color: #64748b;
  display: block;
}
.dock-items-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-content: flex-start;
  flex: 1;
}

/* TARGETA D'UNA PEÇA SOLTA AL BANC */
.pdi-part-item {
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: grab;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  transition: all 0.15s ease;
  user-select: none;
  touch-action: none;
  font-weight: 700;
  font-size: 0.95rem;
  color: #1e293b;
  width: 100%;
}
.pdi-part-item:hover {
  border-color: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(2, 132, 199, 0.15);
}
.pdi-part-item:active, .pdi-part-item.dragging {
  cursor: grabbing;
  opacity: 0.6;
  transform: scale(1.05);
}
.pdi-part-item.placed {
  opacity: 0.35;
  pointer-events: none;
  border-color: #10b981;
  background: #ecfdf5;
}
.pdi-part-item.selected {
  border-color: #0284c7 !important;
  background: #e0f2fe !important;
  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.4) !important;
  transform: translateY(-2px) scale(1.02);
}
.drop-target-group {
  cursor: pointer;
  transition: all 0.2s ease;
}
.drop-target-group:hover circle.target-halo {
  stroke-width: 3.5;
  fill: rgba(14, 165, 233, 0.12);
}
.highlight-zone circle.target-halo {
  stroke: #0284c7 !important;
  stroke-width: 4 !important;
  fill: rgba(14, 165, 233, 0.22) !important;
  animation: pulse-halo 0.9s infinite alternate;
}
@keyframes pulse-halo {
  from { stroke-width: 2.5; fill: rgba(14, 165, 233, 0.12); }
  to { stroke-width: 5; fill: rgba(14, 165, 233, 0.32); }
}
.part-icon-box {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* FITXA TÈCNICA EMERGENT */
.pdi-organ-tooltip {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(8px);
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 14px;
  padding: 0.9rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  z-index: 50;
  max-width: 90%;
  animation: pdi-fade-up 0.3s ease;
}
.tooltip-icon {
  font-size: 2rem;
}
.tooltip-body h4 {
  margin: 0 0 0.2rem 0;
  color: #38bdf8;
  font-size: 1.1rem;
}
.tooltip-body p {
  margin: 0;
  font-size: 0.9rem;
  color: #cbd5e1;
}

/* MODAL DE VICTÒRIA */
.pdi-victory-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 1.5rem;
}
.victory-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 520px;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  animation: pdi-pop 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.victory-badge {
  display: inline-block;
  background: #ecfdf5;
  color: #059669;
  border: 1px solid #10b981;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.victory-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.5rem;
  color: #0f172a;
}
.victory-card p {
  margin: 0 0 1.75rem 0;
  font-size: 1rem;
  color: #475569;
}
.victory-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.btn-vic-restart {
  background: #0284c7;
  color: #ffffff;
  border: none;
  padding: 0.85rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
}
.btn-vic-next {
  background: #10b981;
  color: #ffffff;
  border: none;
  padding: 0.85rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
}
.btn-vic-menu {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #cbd5e1;
  padding: 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
}

@keyframes pdi-fade-up {
  from { opacity: 0; transform: translate(-50%, 15px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
@keyframes pdi-pop {
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<!-- INCLUSIÓ DEL MOTOR JAVASCRIPT DEL LABORATORI VISUAL -->
<script src="./laboratori-visual.js?v=1"></script>
