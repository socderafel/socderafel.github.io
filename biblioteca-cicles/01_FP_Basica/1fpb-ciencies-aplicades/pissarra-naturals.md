---
layout: default
title: "Pissarra Digital Interactiva — Ciències Naturals"
course_root: "."
badge: "Pissarra Digital (PDI) · Ciències Naturals · 1r FPB"
---

<div class="pdi-app-wrapper">

<!-- ==========================================
     VISTA 1: TAULER DE REPTES (DASHBOARD)
     ========================================== -->
<div id="pdi-dashboard" class="pdi-dashboard-view">
  <div class="pdi-dash-header" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.22)); border-color: #10b981;">
    <div class="dash-title-wrap">
      <h2>🔬 Tauler de Reptes Interactius · Ciències Naturals (PDI)</h2>
      <p>Ciències Aplicades I (1r FPB) · 61 Reptes Pràctics i Trencaclosques Tècnics de Física, Química, Geologia i Biologia adaptats a la pissarra digital de classe o tauletes.</p>
    </div>
    <div class="dash-quick-tools">
      <a class="btn-pdi-tool" href="./laboratori-visual.html" style="text-decoration:none !important; color:inherit; display:inline-flex; align-items:center; gap:6px; background:#0284c7; color:#fff !important; font-weight:800; border-color:#0284c7;">🧩 Laboratori Visual (Trencaclosques)</a>
      <button class="btn-pdi-tool" id="btn-sound-toggle" onclick="togglePDISound()"><span id="sound-icon">🔊</span> <span id="sound-text">So Activat</span></button>
      <button class="btn-pdi-tool" id="btn-fs-toggle" onclick="togglePDIFullscreen()">🖥️ Pantalla Completa</button>
    </div>
  </div>

  <div class="pdi-units-grid">
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #059669;">
      <div class="card-head">
        <span class="disc-badge" style="background: #059669;">Ciències Naturals</span>
        <span class="count-badge">7 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧪</span> <h3>UD2 · La Matèria</h3></div>
      <p class="card-desc">Propietats de la matèria, estats físics, canvis d'estat, substàncies pures, taula periòdica, mescles i tècniques de separació.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat02-1" onclick="launchGameActivity('act-nat02-1')">
          <span class="act-idx">🧩 Pures vs Mescles</span>
          <span class="act-name">R1 · Classificació Matèria</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat02-2" onclick="launchGameActivity('act-nat02-2')">
          <span class="act-idx">⚡ Propietats i Estats</span>
          <span class="act-name">R2 · Speed Quiz Matèria</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat02-3" onclick="launchGameActivity('act-nat02-3')">
          <span class="act-idx">🕵️ Metalls i Canvis</span>
          <span class="act-name">R3 · Troba l'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat02-4" onclick="launchGameActivity('act-nat02-4')">
          <span class="act-idx">🔢 Densitat en Taller</span>
          <span class="act-name">R4 · Càlcul de Densitat</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat02-5" onclick="launchGameActivity('act-nat02-5')">
          <span class="act-idx">🔗 Mètodes Separació</span>
          <span class="act-name">R5 · Connecta Tècniques</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat02-6" onclick="launchGameActivity('act-nat02-6')">
          <span class="act-idx">🧩 Canvis d'Estat</span>
          <span class="act-name">R6 · Seqüència Tèrmica</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat02-7" onclick="launchGameActivity('act-nat02-7')">
          <span class="act-idx">🛠️ Residus i Taller</span>
          <span class="act-name">R7 · Cas Pràctic Matèria</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(14, 165, 233, 0.18)); border: 2px solid #0284c7; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=destil">
          <span class="act-idx">🧩 Muntatge de Vidre</span>
          <span class="act-name">R8 · Trencaclosques Destil·lació</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(14, 165, 233, 0.18)); border: 2px solid #0284c7; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=atom">
          <span class="act-idx">⚛️ Capes Electròniques</span>
          <span class="act-name">R9 · Trencaclosques Àtom de Bohr</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(14, 165, 233, 0.18)); border: 2px solid #0284c7; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=filtracio">
          <span class="act-idx">🧪 Mescles i Embut</span>
          <span class="act-name">R10 · Trencaclosques Filtració Gravetat</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(14, 165, 233, 0.18)); border: 2px solid #0284c7; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=metalls-taula">
          <span class="act-idx">🔩 Metalls de Taller</span>
          <span class="act-name">R11 · Trencaclosques Taula Periòdica</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #b45309;">
      <div class="card-head">
        <span class="disc-badge" style="background: #b45309;">Ciències Naturals</span>
        <span class="count-badge">6 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🌋</span> <h3>UD3 · Energia Interna del Planeta</h3></div>
      <p class="card-desc">Calor intern terrestre, capes de la geosfera, tectònica de plaques, formació de relleu, volcans i terratrèmols.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat03-1" onclick="launchGameActivity('act-nat03-1')">
          <span class="act-idx">🧩 Capes Geosfera</span>
          <span class="act-name">R1 · Ordre Capes Terrestres</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat03-2" onclick="launchGameActivity('act-nat03-2')">
          <span class="act-idx">⚡ Tectònica i Sismes</span>
          <span class="act-name">R2 · Speed Quiz Dinàmica</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat03-3" onclick="launchGameActivity('act-nat03-3')">
          <span class="act-idx">🕵️ Volcans i Ones</span>
          <span class="act-name">R3 · Troba l'Intrús Geològic</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat03-4" onclick="launchGameActivity('act-nat03-4')">
          <span class="act-idx">🔢 Magnitud i Escales</span>
          <span class="act-name">R4 · Càlcul Sísmic</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat03-5" onclick="launchGameActivity('act-nat03-5')">
          <span class="act-idx">🔗 Fenòmens Geològics</span>
          <span class="act-name">R5 · Connecta Estructures</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat03-6" onclick="launchGameActivity('act-nat03-6')">
          <span class="act-idx">🛠️ Sismorresistència</span>
          <span class="act-name">R6 · Cas Prevenció Sísmica</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(16, 185, 129, 0.18)); border: 2px solid #059669; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=volca">
          <span class="act-idx">🌋 Dinàmica Interna</span>
          <span class="act-name">R7 · Trencaclosques Volcà Actiu</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(16, 185, 129, 0.18)); border: 2px solid #059669; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=terra">
          <span class="act-idx">🌍 Escorça a Nucli</span>
          <span class="act-name">R8 · Trencaclosques Geosfera</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(16, 185, 129, 0.18)); border: 2px solid #059669; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=falles">
          <span class="act-idx">🪨 Falla Tectònica</span>
          <span class="act-name">R9 · Trencaclosques Falla i Sismes</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #2563eb;">
      <div class="card-head">
        <span class="disc-badge" style="background: #2563eb;">Ciències Naturals</span>
        <span class="count-badge">6 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">⚡</span> <h3>UD4 · L'Energia</h3></div>
      <p class="card-desc">Tipus i formes d'energia, principis de conservació i degradació, fonts renovables vs no renovables i eficiència.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat04-1" onclick="launchGameActivity('act-nat04-1')">
          <span class="act-idx">🧩 Fonts d'Energia</span>
          <span class="act-name">R1 · Renovables vs Fòssils</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat04-2" onclick="launchGameActivity('act-nat04-2')">
          <span class="act-idx">⚡ Formes i Lleis</span>
          <span class="act-name">R2 · Speed Quiz Energia</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat04-3" onclick="launchGameActivity('act-nat04-3')">
          <span class="act-idx">🕵️ Transformacions</span>
          <span class="act-name">R3 · Troba l'Intrús Energètic</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat04-4" onclick="launchGameActivity('act-nat04-4')">
          <span class="act-idx">🔢 Consum Elèctric</span>
          <span class="act-name">R4 · Càlcul de kWh en Taller</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat04-5" onclick="launchGameActivity('act-nat04-5')">
          <span class="act-idx">🔗 Màquines i Energia</span>
          <span class="act-name">R5 · Connecta Conversió</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat04-6" onclick="launchGameActivity('act-nat04-6')">
          <span class="act-idx">🛠️ Eficiència en PIME</span>
          <span class="act-name">R6 · Cas Estalvi Energètic</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(16, 185, 129, 0.18)); border: 2px solid #059669; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=central">
          <span class="act-idx">⚡ Cadena Energètica</span>
          <span class="act-name">R7 · Trencaclosques Central Hidràulica</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(16, 185, 129, 0.18)); border: 2px solid #059669; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=eolica">
          <span class="act-idx">🌬️ Força del Vent</span>
          <span class="act-name">R8 · Trencaclosques Aerogenerador</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(16, 185, 129, 0.18)); border: 2px solid #059669; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=solar">
          <span class="act-idx">☀️ Radiació Solar</span>
          <span class="act-name">R9 · Trencaclosques Circuit Fotovoltaic</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #dc2626;">
      <div class="card-head">
        <span class="disc-badge" style="background: #dc2626;">Ciències Naturals</span>
        <span class="count-badge">6 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔥</span> <h3>UD5 · El Calor i la Temperatura</h3></div>
      <p class="card-desc">Calor vs temperatura, escales termomètriques, conducció, convecció i radiació, aïllants i dilatació en taller.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat05-1" onclick="launchGameActivity('act-nat05-1')">
          <span class="act-idx">🧩 Conductors i Aïllants</span>
          <span class="act-name">R1 · Classificació Tèrmica</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat05-2" onclick="launchGameActivity('act-nat05-2')">
          <span class="act-idx">⚡ Calor i Propagació</span>
          <span class="act-name">R2 · Speed Quiz Calor</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat05-3" onclick="launchGameActivity('act-nat05-3')">
          <span class="act-idx">🕵️ Transmissió Tèrmica</span>
          <span class="act-name">R3 · Troba l'Intrús</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat05-4" onclick="launchGameActivity('act-nat05-4')">
          <span class="act-idx">🔢 Escales i Dilatació</span>
          <span class="act-name">R4 · Càlcul Kelvin i Dilatació</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat05-5" onclick="launchGameActivity('act-nat05-5')">
          <span class="act-idx">🔗 Aplicacions Taller</span>
          <span class="act-name">R5 · Connecta Fenòmens Tèrmics</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat05-6" onclick="launchGameActivity('act-nat05-6')">
          <span class="act-idx">🛠️ Estrés Tèrmic Laboral</span>
          <span class="act-name">R6 · Cas Prevenció Calor</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(14, 165, 233, 0.18)); border: 2px solid #0284c7; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=calor">
          <span class="act-idx">🚗 Circuit Tèrmic</span>
          <span class="act-name">R7 · Trencaclosques Refrigeració Motor</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(14, 165, 233, 0.18)); border: 2px solid #0284c7; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=motor-4t">
          <span class="act-idx">🏎️ Pistó i Biela</span>
          <span class="act-name">R8 · Trencaclosques Motor de 4 Temps</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #7c3aed;">
      <div class="card-head">
        <span class="disc-badge" style="background: #7c3aed;">Ciències Naturals</span>
        <span class="count-badge">6 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🏥</span> <h3>UD6 · La Salut</h3></div>
      <p class="card-desc">Concepte de salut de l'OMS, malalties infeccioses i no infeccioses, patògens, sistema immunitari, vacunes i antibiòtics.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat06-1" onclick="launchGameActivity('act-nat06-1')">
          <span class="act-idx">🧩 Tipus de Malalties</span>
          <span class="act-name">R1 · Infeccioses vs No Infecc.</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat06-2" onclick="launchGameActivity('act-nat06-2')">
          <span class="act-idx">⚡ Patògens i Immunitat</span>
          <span class="act-name">R2 · Speed Quiz Salut</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat06-3" onclick="launchGameActivity('act-nat06-3')">
          <span class="act-idx">🕵️ Defenses Corporals</span>
          <span class="act-name">R3 · Troba l'Intrús Immunitari</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat06-4" onclick="launchGameActivity('act-nat06-4')">
          <span class="act-idx">🔢 Dosi i Prevenció</span>
          <span class="act-name">R4 · Càlcul Farmacològic</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat06-5" onclick="launchGameActivity('act-nat06-5')">
          <span class="act-idx">🔗 Fàrmacs i Tractament</span>
          <span class="act-name">R5 · Connecta Teràpies</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat06-6" onclick="launchGameActivity('act-nat06-6')">
          <span class="act-idx">🛠️ Primers Auxilis</span>
          <span class="act-name">R6 · Cas Accident de Taller</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=celula">
          <span class="act-idx">🔬 Orgànuls Vitals</span>
          <span class="act-name">R7 · Trencaclosques Cèl·lula Humana</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=immunitat">
          <span class="act-idx">🛡️ Glòbuls i Anticossos</span>
          <span class="act-name">R8 · Trencaclosques Sistema Immunitari</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0891b2;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0891b2;">Ciències Naturals</span>
        <span class="count-badge">8 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🍎</span> <h3>UD7 · La Nutrició Humana</h3></div>
      <p class="card-desc">Alimentació i dieta equilibrada, processos dels aparells digestiu, respiratori, circulatori i excretor.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat07-1" onclick="launchGameActivity('act-nat07-1')">
          <span class="act-idx">🧩 Tub Digestiu</span>
          <span class="act-name">R1 · Ordre Seqüència Digestiva</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-2" onclick="launchGameActivity('act-nat07-2')">
          <span class="act-idx">⚡ Nutrients i Respiració</span>
          <span class="act-name">R2 · Speed Quiz Nutrició</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-3" onclick="launchGameActivity('act-nat07-3')">
          <span class="act-idx">🕵️ Aparells Corporals</span>
          <span class="act-name">R3 · Troba l'Intrús Fisiològic</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-4" onclick="launchGameActivity('act-nat07-4')">
          <span class="act-idx">🔢 Despesa Energètica</span>
          <span class="act-name">R4 · Càlcul Calòric de Taller</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-5" onclick="launchGameActivity('act-nat07-5')">
          <span class="act-idx">🔗 Òrgans i Fisiologia</span>
          <span class="act-name">R5 · Connecta Aparells</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-6" onclick="launchGameActivity('act-nat07-6')">
          <span class="act-idx">🧩 Circuit Sanguini</span>
          <span class="act-name">R6 · Recorregut de la Sang</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-7" onclick="launchGameActivity('act-nat07-7')">
          <span class="act-idx">🧩 Roda dels Aliments</span>
          <span class="act-name">R7 · Classificació Nutricional</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat07-8" onclick="launchGameActivity('act-nat07-8')">
          <span class="act-idx">🛠️ Suport Vital RCP</span>
          <span class="act-name">R8 · Cas Reanimació Bàsica</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=torso">
          <span class="act-idx">🫀 Òrgans del Tronc</span>
          <span class="act-name">R9 · Trencaclosques Torso Anatòmic</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=cor-cavitats">
          <span class="act-idx">🫀 Cambres Cardíaques</span>
          <span class="act-name">R10 · Trencaclosques 4 Cavitats del Cor</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=alveol">
          <span class="act-idx">🫁 Intercanvi O₂ / CO₂</span>
          <span class="act-name">R11 · Trencaclosques Alvèol Pulmonar</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #ea580c;">
      <div class="card-head">
        <span class="disc-badge" style="background: #ea580c;">Ciències Naturals</span>
        <span class="count-badge">6 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧠</span> <h3>UD8 · La Relació Humana</h3></div>
      <p class="card-desc">Receptors sensorials, sistema nerviós central i perifèric, neurones, aparell locomotor i sistema endocrí.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat08-1" onclick="launchGameActivity('act-nat08-1')">
          <span class="act-idx">🧩 Circuit Reflex</span>
          <span class="act-name">R1 · Seqüència Arc Reflex</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat08-2" onclick="launchGameActivity('act-nat08-2')">
          <span class="act-idx">⚡ Sentits i Nervis</span>
          <span class="act-name">R2 · Speed Quiz Relació</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat08-3" onclick="launchGameActivity('act-nat08-3')">
          <span class="act-idx">🕵️ Cervell i Medul·la</span>
          <span class="act-name">R3 · Troba l'Intrús Nerviós</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat08-4" onclick="launchGameActivity('act-nat08-4')">
          <span class="act-idx">🔢 Temps de Reacció</span>
          <span class="act-name">R4 · Càlcul Distància Frenada</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat08-5" onclick="launchGameActivity('act-nat08-5')">
          <span class="act-idx">🔗 Hormones i Glàndules</span>
          <span class="act-name">R5 · Connecta Sistema Endocrí</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat08-6" onclick="launchGameActivity('act-nat08-6')">
          <span class="act-idx">🛠️ Ergonomia en Taller</span>
          <span class="act-name">R6 · Cas Prevenció Lesions</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=esquelet">
          <span class="act-idx">💀 Estructura Òssia</span>
          <span class="act-name">R7 · Trencaclosques Esquelet Humà</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=ull">
          <span class="act-idx">👁️ Òrgan de la Visió</span>
          <span class="act-name">R8 · Trencaclosques Ull Humà</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=neurona">
          <span class="act-idx">⚡ Transmissió Sinàptica</span>
          <span class="act-name">R9 · Trencaclosques La Neurona</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=orella">
          <span class="act-idx">👂 Òrgan de l'Oïda</span>
          <span class="act-name">R10 · Trencaclosques Orella Humana</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #db2777;">
      <div class="card-head">
        <span class="disc-badge" style="background: #db2777;">Ciències Naturals</span>
        <span class="count-badge">6 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧬</span> <h3>UD9 · La Reproducció Humana</h3></div>
      <p class="card-desc">Caràcters sexuals, anatomia reproductora masculina i femenina, cicle menstrual, planificació familiar i prevenció d'ITS.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-nat09-1" onclick="launchGameActivity('act-nat09-1')">
          <span class="act-idx">🧩 Anticonceptius</span>
          <span class="act-name">R1 · Barrera, Químics, Cirurgia</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat09-2" onclick="launchGameActivity('act-nat09-2')">
          <span class="act-idx">⚡ Anatomia i Gamets</span>
          <span class="act-name">R2 · Speed Quiz Reproducció</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat09-3" onclick="launchGameActivity('act-nat09-3')">
          <span class="act-idx">🕵️ Aparells i Hormones</span>
          <span class="act-name">R3 · Troba l'Intrús Reproductiu</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat09-4" onclick="launchGameActivity('act-nat09-4')">
          <span class="act-idx">🔢 Cicle Menstrual</span>
          <span class="act-name">R4 · Càlcul de Fases del Cicle</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat09-5" onclick="launchGameActivity('act-nat09-5')">
          <span class="act-idx">🔗 Prevenció d'ITS</span>
          <span class="act-name">R5 · Connecta Patògens i ITS</span>
          <span class="act-arrow">➔</span>
        </button>
        <button class="btn-launch-act" data-act-id="act-nat09-6" onclick="launchGameActivity('act-nat09-6')">
          <span class="act-idx">🛠️ Salut Afectivosexual</span>
          <span class="act-name">R6 · Cas Consulta Jove</span>
          <span class="act-arrow">➔</span>
        </button>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=reproductor">
          <span class="act-idx">🧬 Masculí i Femení</span>
          <span class="act-name">R7 · Trencaclosques Aparell Reproductor</span>
          <span class="act-arrow">➔</span>
        </a>
        <a class="btn-launch-act" style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.12), rgba(244, 63, 94, 0.18)); border: 2px solid #e11d48; text-decoration: none !important; color: inherit;" href="./laboratori-visual.html?challenge=fecundacio">
          <span class="act-idx">🤰 Del Gàmeta al Fetus</span>
          <span class="act-name">R8 · Trencaclosques Fecundació i Gestació</span>
          <span class="act-arrow">➔</span>
        </a>
      </div>
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
      <span class="game-unit-badge" id="game-unit-badge" style="background: #059669;">UD2</span>
      <span class="game-act-title" id="game-act-title">Repte 1</span>
    </div>

    <div class="game-nav-arrows">
      <button class="btn-game-nav" id="btn-prev-act" onclick="navRelativeActivity(-1)" title="Repte Anterior">◀ Anterior</button>
      <span class="game-counter" id="game-counter">1 / 7</span>
      <button class="btn-game-nav" id="btn-next-act" onclick="navRelativeActivity(1)" title="Repte Següent">Següent ▶</button>
    </div>

    <div class="game-top-tools">
      <button class="btn-tool-icon" onclick="resetCurrentPDIActivity()" title="Reiniciar repte per al següent alumne">🔄 Reiniciar</button>
      <button class="btn-tool-icon" id="game-sound-btn" onclick="togglePDISound()" title="Activar/Silenciar so">🔊</button>
      <button class="btn-tool-icon" id="game-fs-btn" onclick="togglePDIFullscreen()" title="Pantalla Completa">🖥️</button>
    </div>
  </div>

  <div class="pdi-game-stage">

    <!-- act-nat02-1 (category) -->
    <div class="pdi-activity-card" id="act-nat02-1" data-unit="nat02" data-title="Classificació Matèria" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R1 · Substàncies Pures vs Mescles</span>
        <h3>🧪 Classificació de la Matèria en Laboratori i Taller</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada material a la seua categoria: Substància Pura, Mescla Homogènia (Dissolució) o Mescla Heterogènia:</p>
      <div class="pdi-cat-wrapper">
        <div class="pdi-cat-bucket" data-category="pura">
          <div class="bucket-header" style="background: #059669; color: #fff;"><h4>Substància Pura (Element o Compost)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="homo">
          <div class="bucket-header" style="background: #0284c7; color: #fff;"><h4>Mescla Homogènia (Dissolució)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="hetero">
          <div class="bucket-header" style="background: #d97706; color: #fff;"><h4>Mescla Heterogènia</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-source-pool">
          <div class="pdi-cat-card" draggable="true" data-cat="pura">Ferro metàl·lic (Fe) pur</div>
          <div class="pdi-cat-card" draggable="true" data-cat="pura">Aigua destil·lada pura (H₂O)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="pura">Gas Oxigen pur (O₂)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="homo">Dissolució d'alcohol sanitari al 70%</div>
          <div class="pdi-cat-card" draggable="true" data-cat="homo">Aire atmosfèric filtrat</div>
          <div class="pdi-cat-card" draggable="true" data-cat="homo">Aigua amb sal completament dissolta</div>
          <div class="pdi-cat-card" draggable="true" data-cat="hetero">Aigua amb oli en emulsió</div>
          <div class="pdi-cat-card" draggable="true" data-cat="hetero">Morter de ciment, aigua i arena</div>
          <div class="pdi-cat-card" draggable="true" data-cat="hetero">Ferralla metàl·lica amb serradures de fusta</div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkCategoryActivity('act-nat02-1')">Comprovar Classificació</button>
        <div class="act-feedback-msg" id="fb-act-nat02-1"></div>
      </div>
    </div>
    


    <!-- act-nat02-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat02-2" data-unit="nat02" data-title="Speed Quiz Matèria" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R2 · Conceptes Clau de la Matèria</span>
        <h3>⚡ Speed Quiz · Propietats, Estats i Canvis Físics</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Quina d&#39;aquestes propietats de la matèria és una propietat ESPECÍFICA o característica que permet identificar una substància?", "opts": ["La massa total", "El volum ocupat", "La densitat", "La longitud"], "ans": 2, "exp": "La densitat és una propietat específica perquè és constant per a cada substància a la mateixa temperatura."}, {"q": "Com s&#39;anomena el canvi d&#39;estat directe de SÒLID a GAS sense passar per líquid?", "opts": ["Condensació", "Sublimació", "Fusió", "Vaporització"], "ans": 1, "exp": "La sublimació és el pas directe de sòlid a gas, com en el gel sec o la naftalina."}, {"q": "A la taula periòdica, quin grup d&#39;elements es caracteritza per ser bons conductors de la calor i de l&#39;electricitat?", "opts": ["Els metalls", "Els gasos nobles", "Els no-metalls", "Els halògens"], "ans": 0, "exp": "Els metalls (Cu, Fe, Al) condueixen molt bé la calor i l&#39;electricitat."}, {"q": "Quin estat de la matèria té FORMA VARIABLE adaptada al recipient però VOLUM CONSTANT?", "opts": ["Estat sòlid", "Estat líquid", "Estat gasós", "Plasma"], "ans": 1, "exp": "L&#39;estat líquid s&#39;adapta a la forma del recipient però conserva el seu volum."}, {"q": "Quin és el mètode idoni per a separar dos líquids miscibles amb diferent punt d&#39;ebullició (aigua i alcohol)?", "opts": ["Filtració", "Destil·lació", "Decantació", "Imantació"], "ans": 1, "exp": "La destil·lació separa per diferència de punts d&#39;ebullició mitjançant evaporació i condensació."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat02-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat02-3" data-unit="nat02" data-title="Troba l'Intrús" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R3 · Troba l'Intrús Químic</span>
        <h3>🕵️ Detecta l'Element o Fenomen Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Elements Químics que són METALLS de Taller", "cards": [{"t": "Coure (Cu)", "intrus": false, "why": "Metall utilitzat en cables i canonades."}, {"t": "Alumini (Al)", "intrus": false, "why": "Metall lleuger per a perfileria."}, {"t": "Sulfre / Sofre (S)", "intrus": true, "why": "INTRÚS! El sofre és un NO-METALL groc no conductor."}, {"t": "Ferro (Fe)", "intrus": false, "why": "Metall clau en estructures d&#39;acer."}]}, {"theme": "Canvis d&#39;Estat que ABSORBEIXEN calor (Endotèrmics)", "cards": [{"t": "Fusió (Sòlid a Líquid)", "intrus": false, "why": "Requereix calor per fondre."}, {"t": "Vaporització (Líquid a Gas)", "intrus": false, "why": "Requereix calor d&#39;ebullició."}, {"t": "Solidificació (Líquid a Sòlid)", "intrus": true, "why": "INTRÚS! La solidificació ALLIBERA calor en refredar-se."}, {"t": "Sublimació (Sòlid a Gas)", "intrus": false, "why": "Absorbeix calor directe."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que NO pertany al criteri químic del grup:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat02-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat02-4" data-unit="nat02" data-title="Càlcul de Densitat" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R4 · Càlcul Tècnic de Densitat</span>
        <h3>🔢 Determinació de Densitat i Volum en Taller</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "Una peça d&#39;alumini té una massa m = 54 grams i un volum V = 20 cm³. Quina és la seua densitat en g/cm³? (d = m / V)", "solution": "2.7", "unit": "g/cm³", "tolerance": 0.05, "exp": "d = 54 / 20 = 2.7 g/cm³."}, {"problem": "Un recipient conté 150 cm³ d&#39;oli de motor amb massa m = 135 g. Quina és la densitat de l&#39;oli en g/cm³?", "solution": "0.9", "unit": "g/cm³", "tolerance": 0.05, "exp": "d = 135 / 150 = 0.9 g/cm³."}, {"problem": "Un bloc de ferro té una densitat de 7.8 g/cm³ i massa de 390 g. Quin volum en cm³ ocupa? (V = m / d)", "solution": "50", "unit": "cm³", "tolerance": 0.5, "exp": "V = 390 / 7.8 = 50 cm³."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat02-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat02-5" data-unit="nat02" data-title="Connecta Tècniques" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R5 · Mètodes de Separació</span>
        <h3>🔗 Connecta la Tècnica amb la seua Aplicació</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Filtració amb paper de filtre", "right": "Separar sòlid insoluble de líquid (arena i aigua)"}, {"left": "Decantació amb embut", "right": "Separar dos líquids de diferent densitat (oli i aigua)"}, {"left": "Separació magnètica (Imant)", "right": "Separar metalls ferromagnètics (ferro de serradures)"}, {"left": "Cristal·lització per evaporació", "right": "Recuperar sòlid dissolt en líquid (sal dissolta en aigua)"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca la tècnica a l'esquerra i la seua aplicació a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat02-6 (order) -->
    <div class="pdi-activity-card" id="act-nat02-6" data-unit="nat02" data-title="Seqüència Tèrmica" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R6 · Canvis d'Estat de l'Aigua</span>
        <h3>🧩 Ordre de Menor a Major Temperatura dels Estats de l'Aigua</h3>
      </div>
      <p class="pdi-instruction">Arrossega els estats i canvis de fase des de la temperatura més freda fins a la més calenta:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r Gel sòlid rígid (T < 0 °C)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Punt de Fusió: Gel es converteix en Aigua líquida (0 °C)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Aigua líquida escalfant-se (entre 0 °C i 100 °C)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t Punt d'Ebullició: Vaporització tumultuosa (100 °C)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è Vapor d'aigua sobreescalfat (T > 100 °C)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1 (Més fred)</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5 (Més calent)</span></div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkOrderActivity('act-nat02-6')">Comprovar Ordre Tèrmic</button>
        <div class="act-feedback-msg" id="fb-act-nat02-6"></div>
      </div>
    </div>
    


    <!-- act-nat02-7 (case) -->
    <div class="pdi-activity-card" id="act-nat02-7" data-unit="nat02" data-title="Cas Pràctic Matèria" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #059669;">UD2 · R7 · Segregació de Residus Industrials</span>
        <h3>🛠️ Cas Pràctic · Gestió de Mescles i Metalls en Taller</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "A l&#39;àrea de mecanitzat s&#39;han barrejat encenalls de ferro, serradures de plàstic (PVC) i restes de taladrina líquida.", "question": "Quin és el primer mètode net per separar el ferro?", "options": [{"text": "Abocar àcid clorhídric concentrat", "correct": false, "exp": "Provocaria vapors àcids perillosos."}, {"text": "Passar un imant potent o separador magnètic", "correct": true, "exp": "Correcte! La separació magnètica retira netament el ferro."}, {"text": "Cremar la mescla sencera", "correct": false, "exp": "Està prohibit per normativa ambiental."}]}, {"context": "Un cop extret el ferro, queda el plàstic sòlid surant en el líquid de tall.", "question": "Com separem els sòlids de plàstic del líquid?", "options": [{"text": "Mitjançant filtració amb una malla o tamís", "correct": true, "exp": "Molt bé! La filtració separa el sòlid del líquid."}, {"text": "Bullint el líquid a 300 graus", "correct": false, "exp": "Fondria el plàstic i consumiria energia inútilment."}, {"text": "Afegint sal de cuina", "correct": false, "exp": "No separa la mescla heterogènia."}]}, {"context": "El líquid restant conté restes d&#39;olis i lubricants industrials.", "question": "Com s&#39;ha de gestionar aquest residu tòxic?", "options": [{"text": "Emmagatzemar-lo en un bidó estanc i lliurar-lo a un gestor de residus perillosos autoritzat", "correct": true, "exp": "Exacte! Exigeix tractament mediambiental segur."}, {"text": "Abocar-lo a la claveguera de la via pública", "correct": false, "exp": "Constitueix un delicte ecològic greu."}, {"text": "Llençar-lo al fem convencional", "correct": false, "exp": "Prohibit taxativament."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Protocol Ambiental</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Protocol Completat!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat03-1 (order) -->
    <div class="pdi-activity-card" id="act-nat03-1" data-unit="nat03" data-title="Ordre Capes Terrestres" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #b45309;">UD3 · R1 · Estructura de la Terra</span>
        <h3>🧩 Capes de la Geosfera des de la Superfície al Centre</h3>
      </div>
      <p class="pdi-instruction">Arrossega les capes terrestres des de l'exterior habitable fins al nucli més profund:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r Escorça Terrestre (continental i oceànica)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Mantell Superior (litosfera i astenosfera plàstica)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Mantell Inferior (mesosfera rocosa d'alta pressió)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t Nucli Extern Líquid (ferro i níquel fosos generadors del camp magnètic)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è Nucli Intern Sòlid Metàl·lic (6000 °C a pressió colossal)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Superfície</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Profunditat Mitjana</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Mantell Profund</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Nucli Líquid</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Centre del Planeta</span></div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkOrderActivity('act-nat03-1')">Comprovar Capes</button>
        <div class="act-feedback-msg" id="fb-act-nat03-1"></div>
      </div>
    </div>
    


    <!-- act-nat03-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat03-2" data-unit="nat03" data-title="Speed Quiz Dinàmica" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #b45309;">UD3 · R2 · Dinàmica Interna</span>
        <h3>⚡ Speed Quiz · Tectònica de Plaques, Volcans i Sismes</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Què mou les plaques tectòniques damunt del mantell terrestre?", "opts": ["Els corrents de convecció tèrmica del mantell", "L&#39;atracció de la Lluna", "La rotació de l&#39;atmosfera", "L&#39;onatge dels oceans"], "ans": 0, "exp": "La calor interna del mantell genera corrents de convecció que desplacen les plaques."}, {"q": "Com s&#39;anomena el punt subterrani exacte on s&#39;origina la ruptura o fractura d&#39;un terratrèmol?", "opts": ["Epicentre", "Hipocentre o focus", "Falla de salt", "Cràter"], "ans": 1, "exp": "L&#39;hipocentre o focus és l&#39;origen subterrani; l&#39;epicentre és la seua projecció vertical a la superfície."}, {"q": "Quina diferència hi ha entre MAGMA i LAVA?", "opts": ["El magma és líquid i la lava sòlida", "El magma és roca fosa sota terra i la lava és roca fosa que surt a la superfície", "Són substàncies químiques oposades", "La lava és aigua calenta"], "ans": 1, "exp": "S&#39;anomena magma mentre està a l&#39;interior terrestre; en emergir a l&#39;exterior s&#39;anomena lava."}, {"q": "En quin tipus de límit de plaques una placa s&#39;enfonsa sota una altra cap al mantell?", "opts": ["Límit convergent o de subducció", "Límit divergent o dorsal", "Falla transformant", "Punt calent"], "ans": 0, "exp": "A les zones de subducció (límit convergent), la placa més densa s&#39;enfonsa sota la més lleugera."}, {"q": "Quin instrument científic registra la vibració del terra produïda per les ones sísmiques?", "opts": ["Baròmetre", "Sismògraf", "Anemòmetre", "Higròmetre"], "ans": 1, "exp": "El sismògraf registra el sismograma amb les ones P, S i superficials."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat03-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat03-3" data-unit="nat03" data-title="Troba l'Intrús Geològic" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #b45309;">UD3 · R3 · Troba l'Intrús Geològic</span>
        <h3>🕵️ Detecta el Concepte que No Pertany al Fenomen</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Materials Piroclàstics sòlids expulsats en erupcions volcàniques", "cards": [{"t": "Cendra volcànica", "intrus": false, "why": "Partícules fines de pols de vidre volcànic."}, {"t": "Lapil·li (grava volcànica)", "intrus": false, "why": "Fragments sòlids de la mida de pèsols o pedretes."}, {"t": "Marbre metamòrfic compacte", "intrus": true, "why": "INTRÚS! El marbre és una roca metamòrfica que no s&#39;expulsa com a piroclast."}, {"t": "Bombes volcàniques", "intrus": false, "why": "Blocs de roca de mida superior a 64 mm modelats en l&#39;aire."}]}, {"theme": "Tipus d&#39;Ones Símiques Terrestres", "cards": [{"t": "Ones P (Primàries o longitudinals)", "intrus": false, "why": "Són les més ràpides i comprimeixen el terreny."}, {"t": "Ones S (Secundàries o transversals)", "intrus": false, "why": "Només viatgen per sòlids i sacsegen transversalment."}, {"t": "Ones de Ràdio FM", "intrus": true, "why": "INTRÚS! Són ones electromagnètiques de telecomunicació, no sísmiques."}, {"t": "Ones superficials de Rayleigh i Love", "intrus": false, "why": "Viatgen per la superfície i causen els majors danys."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no pertany al fenomen geològic:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat03-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat03-4" data-unit="nat03" data-title="Càlcul Sísmic" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #b45309;">UD3 · R4 · Càlculs Geològics</span>
        <h3>🔢 Magnitud, Distància i Velocitat Sísmica</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "Les ones sísmiques P viatgen a una velocitat mitjana v = 6 km/s. Si un sismògraf situat a d = 180 km detecta el sisme, quants segons tarda l&#39;ona a arribar? (Aplica t = d / v)", "solution": "30", "unit": "segons", "tolerance": 0.5, "exp": "t = 180 km / 6 km/s = 30 segons."}, {"problem": "A l&#39;escala de Richter, cada grau de magnitud multiplica l&#39;energia alliberada per aproximadament 32. Si un sisme passa de magnitud 4 a magnitud 5, per quant es multiplica l&#39;energia alliberada?", "solution": "32", "unit": "vegades", "tolerance": 0.5, "exp": "Per 32 vegades més energia alliberada per cada unitat de magnitud."}, {"problem": "La velocitat d&#39;extensió d&#39;una dorsal oceànica és de 2.5 cm a l&#39;any. Quants centímetres s&#39;haurà obert la dorsal al cap de 40 anys?", "solution": "100", "unit": "cm", "tolerance": 1.0, "exp": "d = 2.5 cm/any * 40 anys = 100 cm (1 metre)."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat03-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat03-5" data-unit="nat03" data-title="Connecta Estructures" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #b45309;">UD3 · R5 · Estructures Tectòniques</span>
        <h3>🔗 Connecta el Fenomen amb la seua Descripció</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Dorsal oceànica submarina", "right": "Serralada volcànica on es crea nova escorça per divergència"}, {"left": "Zona de subducció i fosa marina", "right": "Límit convergent on es destrueix escorça enfonsant-se al mantell"}, {"left": "Falla de transformació (Sant Andreu)", "right": "Fractura on dues plaques llisquen lateralment sense crear ni destruir relleu"}, {"left": "Punt calent intraplaca (Hawaii)", "right": "Plomall tèrmic fix que perfora l&#39;escorça formant volcans aïllats"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca l'estructura geològica a l'esquerra i la seua descripció a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat03-6 (case) -->
    <div class="pdi-activity-card" id="act-nat03-6" data-unit="nat03" data-title="Cas Prevenció Sísmica" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #b45309;">UD3 · R6 · Autoprotecció davant Sismes</span>
        <h3>🛠️ Cas Pràctic · Protocol de Seguretat Sísmica en Taller</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "Estàs a l&#39;interior d&#39;un edifici o nau de taller quan es produeix un terratrèmol d&#39;intensitat forta que sacseja bigues i maquinària.", "question": "Quina és l&#39;acció immediata correcta de seguretat personal?", "options": [{"text": "Córrer ràpidament cap a l&#39;ascensor per baixar pisos", "correct": false, "exp": "Mai s&#39;ha d&#39;agafar l&#39;ascensor en un sisme per risc de tall elèctric."}, {"text": "Ajupir-se sota una taula robusta o banc de treball ferm i protegir el cap amb els braços", "correct": true, "exp": "Correcte! La regla d&#39;or és &#39;Ajupir-se, Cobrir-se i Agafar-se&#39;."}, {"text": "Pujar a la teulada a mirar el terratrèmol", "correct": false, "exp": "Comporta un perill extrem de caiguda."}]}, {"context": "Cessen les sacsejades principals i cal evacuar el taller cap a una zona segura exterior.", "question": "Què s&#39;ha de fer abans d&#39;abandonar l&#39;edifici ordenadament?", "options": [{"text": "Tallar la clau general de gas i l&#39;interruptor general d&#39;electricitat", "correct": true, "exp": "Molt bé! Evita fuites de gas, explosions o incendis per curtcircuits."}, {"text": "Deixar les màquines enceses per si torna la llum", "correct": false, "exp": "És un greu perill d&#39;incendi."}, {"text": "Recollir totes les eines personals", "correct": false, "exp": "Prioritza sempre la vida per damunt dels objectes materials."}]}, {"context": "A l&#39;exterior, a quina zona s&#39;ha de dirigir el personal concentrat?", "question": "Quin és l&#39;espai exterior més segur davant de possibles rèpliques?", "options": [{"text": "Un descampat o punt de trobada obert, allunyat de façanes, cornises i cables elèctrics", "correct": true, "exp": "Exacte! La majoria de ferits es produeixen per caiguda d&#39;elements de façanes."}, {"text": "Just sota els balcons dels edificis contigus", "correct": false, "exp": "És el lloc més perillós per despreniments."}, {"text": "Al costat d&#39;un transformador elèctric", "correct": false, "exp": "Risc de descàrrega elèctrica."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Protocol d'Emergència</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Protocol Completat!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat04-1 (category) -->
    <div class="pdi-activity-card" id="act-nat04-1" data-unit="nat04" data-title="Renovables vs Fòssils" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD4 · R1 · Classificació Energètica</span>
        <h3>⚡ Fonts d'Energia Renovables vs No Renovables</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada font d'energia a la seua categoria corresponent:</p>
      <div class="pdi-cat-wrapper">
        <div class="pdi-cat-bucket" data-category="renovables">
          <div class="bucket-header" style="background: #16a34a; color: #fff;"><h4>Fonts d'Energia Renovables (Inesgotables / Netejes)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="norenovables">
          <div class="bucket-header" style="background: #dc2626; color: #fff;"><h4>Fonts No Renovables (Esgotables / Emissores)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-source-pool">
          <div class="pdi-cat-card" draggable="true" data-cat="renovables">Radiació solar fotovoltaica</div>
          <div class="pdi-cat-card" draggable="true" data-cat="renovables">Energia eòlica dels aerogeneradors</div>
          <div class="pdi-cat-card" draggable="true" data-cat="renovables">Energia hidràulica de preses</div>
          <div class="pdi-cat-card" draggable="true" data-cat="renovables">Biomassa forestal i agrícola</div>
          <div class="pdi-cat-card" draggable="true" data-cat="renovables">Energia geotèrmica del subsòl</div>
          <div class="pdi-cat-card" draggable="true" data-cat="norenovables">Combustible petroli i derivats (gasoil, gasolina)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="norenovables">Carbó mineral d'hulla o antracita</div>
          <div class="pdi-cat-card" draggable="true" data-cat="norenovables">Gas natural metà (CH₄)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="norenovables">Urani radioactiu per a fissió nuclear</div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkCategoryActivity('act-nat04-1')">Comprovar Fonts d'Energia</button>
        <div class="act-feedback-msg" id="fb-act-nat04-1"></div>
      </div>
    </div>
    


    <!-- act-nat04-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat04-2" data-unit="nat04" data-title="Speed Quiz Energia" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD4 · R2 · Principis de l'Energia</span>
        <h3>⚡ Speed Quiz · Formes, Propietats i Eficiència</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Quina és la unitat d&#39;energia en el Sistema Internacional (SI)?", "opts": ["El Watt (W)", "El Joule o Jul (J)", "L&#39;Amperi (A)", "El Volt (V)"], "ans": 1, "exp": "El Joule (J) és la unitat oficial d&#39;energia i treball en el SI. El Watt és de potència."}, {"q": "Què enuncia el Principi Fonamental de Conservació de l&#39;Energia?", "opts": ["L&#39;energia es crea en encendre màquines", "L&#39;energia ni es crea ni es destrueix, només es transforma", "L&#39;energia desapareix en forma de fum", "L&#39;energia solar és infinita i no es transforma"], "ans": 1, "exp": "L&#39;energia total d&#39;un sistema aïllat roman constant: només canvia de forma."}, {"q": "Com s&#39;anomena l&#39;energia que posseeix un cos en virtut de la seua VELOCITAT?", "opts": ["Energia potencial gravitatòria", "Energia cinètica", "Energia química", "Energia nuclear"], "ans": 1, "exp": "L&#39;energia cinètica depèn de la massa i de la velocitat del cos (Ec = 1/2 m·v²)."}, {"q": "Quan s&#39;afirma que l&#39;energia &#39;es degrada&#39;, a què ens referim científicament?", "opts": ["Que s&#39;oxida", "Que part de l&#39;energia útil es dissipa en calor no aprofitable", "Que es destrueix matèria", "Que perd voltatge"], "ans": 1, "exp": "En qualsevol transformació real, part de l&#39;energia es dissipa en calor de baixa temperatura i ja no pot fer treball útil."}, {"q": "Quina d&#39;aquestes mesures afavoreix directament l&#39;EFICIÈNCIA ENERGÈTICA en un taller industrial?", "opts": ["Deixar llums encesos tota la nit", "Substituir tubs fluorescents antics per lluminàries LED d&#39;alta eficiència", "Pintar les parets de color fosc", "Treballar sempre amb les portes obertes a l&#39;hivern"], "ans": 1, "exp": "La il·luminació LED redueix el consum elèctric entre un 60% i un 80% per al mateix flux lumínic."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat04-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat04-3" data-unit="nat04" data-title="Troba l'Intrús Energètic" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD4 · R3 · Troba l'Intrús Energètic</span>
        <h3>🕵️ Detecta la Màquina o Font Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Màquines que transformen ENERGIA ELÈCTRICA en ENERGIA MECÀNICA de rotació", "cards": [{"t": "Trepant elèctric de columna", "intrus": false, "why": "El motor fa girar la broca."}, {"t": "Serra circular de disc", "intrus": false, "why": "Fa girar el disc de tall metàl·lic."}, {"t": "Calefactor d&#39;aire resistiu", "intrus": true, "why": "INTRÚS! Transforma electricitat principalment en CALOR per efecte Joule."}, {"t": "Torn paral·lel de mecanitzat", "intrus": false, "why": "Fa girar el plat de subjecció de la peça."}]}, {"theme": "Formes d&#39;Energia No Contaminants en fase de generació", "cards": [{"t": "Parc solar fotovoltaic", "intrus": false, "why": "No emet CO₂ durant la producció elèctrica."}, {"t": "Parc eòlic marí (offshore)", "intrus": false, "why": "Aprofita la força del vent lliure d&#39;emissions."}, {"t": "Central tèrmica de carbó", "intrus": true, "why": "INTRÚS! Emet milers de tones de CO₂, sutja i òxids de sofre a l&#39;atmosfera."}, {"t": "Central hidroelèctrica reversible", "intrus": false, "why": "Aprofita l&#39;energia potencial de l&#39;aigua."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no compleix el criteri energètic:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat04-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat04-4" data-unit="nat04" data-title="Càlcul de kWh en Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD4 · R4 · Càlcul de Consum Elèctric</span>
        <h3>🔢 Potència, Temps i Factura Elèctrica en Taller</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "Un compressor d&#39;aire té una potència P = 2 kW (2000 W) i està funcionant durant t = 4 hores. Quanta energia elèctrica consumeix en kWh? (Aplica E = P · t)", "solution": "8", "unit": "kWh", "tolerance": 0.1, "exp": "E = 2 kW * 4 h = 8 kWh."}, {"problem": "Si el preu de l&#39;electricitat en hora punta és de 0.25 € per cada kWh, quant costa tenir encesa una serra de 3 kW durant 4 hores (Consum = 12 kWh)?", "solution": "3", "unit": "euros", "tolerance": 0.05, "exp": "Cost = 12 kWh * 0.25 €/kWh = 3.00 €."}, {"problem": "Un panell solar produeix 400 W (0.4 kW) durant 5 hores de sol efectiu. Quants kWh d&#39;energia neta ha generat en aqueixa jornada?", "solution": "2", "unit": "kWh", "tolerance": 0.05, "exp": "E = 0.4 kW * 5 h = 2 kWh."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat04-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat04-5" data-unit="nat04" data-title="Connecta Conversió" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD4 · R5 · Conversió Energètica</span>
        <h3>🔗 Connecta el Dispositiu amb la seua Transformació</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Panell solar fotovoltaic", "right": "Transforma radiació lumínica en corrent continu elèctric"}, {"left": "Aerogenerador eòlic", "right": "Transforma energia cinètica de l&#39;aire en energia elèctrica"}, {"left": "Bateria d&#39;ió de liti recarregable", "right": "Acumula energia química i la lliura com a energia elèctrica"}, {"left": "Motor elèctric d&#39;inducció", "right": "Transforma energia elèctrica en treball mecànic de gir"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca el dispositiu a l'esquerra i la seua transformació a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat04-6 (case) -->
    <div class="pdi-activity-card" id="act-nat04-6" data-unit="nat04" data-title="Cas Estalvi Energètic" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD4 · R6 · Eficiència Energètica</span>
        <h3>🛠️ Cas Pràctic · Auditoria Energètica en Taller Mecànic</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "El gerent d&#39;un taller de carrosseria i pintura vol reduir un 30% la factura elèctrica mensual que s&#39;ha disparat.", "question": "Quina és la mesura d&#39;estalvi immediata i sense cost econòmic?", "options": [{"text": "Apagar màquines en stand-by i compressors fora de l&#39;horari de feina i aprofitar la llum natural de les claraboies", "correct": true, "exp": "Exacte! El consum fantasma de màquines enceses sense ús suposa fins a un 15% del total."}, {"text": "Treballar a les fosques", "correct": false, "exp": "Genera riscos d&#39;accident greu."}, {"text": "Connectar-se il·legalment a l&#39;enllumenat públic", "correct": false, "exp": "És un delicte penal fraudulent."}]}, {"context": "La cabina de pintura utilitza un cremador de gasoil antic que malgasta molt combustible.", "question": "Quina inversió tecnològica sostenible seria la més eficient?", "options": [{"text": "Instal·lar panells solars tèrmics i bomba de calor d&#39;alta eficiència per al preescalfament de l&#39;aire", "correct": true, "exp": "Molt bé! La tecnologia solar i bomba de calor amortitza la inversió en pocs anys."}, {"text": "Cremar residus de pneumàtics a la nau", "correct": false, "exp": "Extremadament contaminant i tòxic."}, {"text": "No assecar les peces de pintura", "correct": false, "exp": "Arruïna l&#39;acabat professional dels vehicles."}]}, {"context": "Per a les eines manuals (trepants, radials), s&#39;ha de decidir entre continuar amb cable o passar a bateries d&#39;alta eficiència.", "question": "Quin avantatge d&#39;eficiència i seguretat aporta una gestió moderna de càrrega?", "options": [{"text": "Utilitzar carregadors intel·ligents amb tall automàtic i bateries de liti sense efecte memòria", "correct": true, "exp": "Correcte! Assegura una vida útil prolongada i elimina despesa inútil d&#39;energia."}, {"text": "Deixar les bateries endollades permanentment tot el cap de setmana", "correct": false, "exp": "Degrada les bateries i augmenta risc de sobreescalfament."}, {"text": "Buidar les bateries al congelador", "correct": false, "exp": "No té base científica."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Auditoria Energètica</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Auditoria Finalitzada!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat05-1 (category) -->
    <div class="pdi-activity-card" id="act-nat05-1" data-unit="nat05" data-title="Classificació Tèrmica" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #dc2626;">UD5 · R1 · Conductivitat Tèrmica</span>
        <h3>🔥 Materials Conductors Tèrmics vs Aïllants Tèrmics</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada material segons transmeta la calor amb facilitat o siga un aïllant:</p>
      <div class="pdi-cat-wrapper">
        <div class="pdi-cat-bucket" data-category="conductors">
          <div class="bucket-header" style="background: #dc2626; color: #fff;"><h4>Bons Conductors Tèrmics (Transmeten ràpid la calor)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="aillants">
          <div class="bucket-header" style="background: #0284c7; color: #fff;"><h4>Aïllants Tèrmics (Frenen el pas de la calor)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-source-pool">
          <div class="pdi-cat-card" draggable="true" data-cat="conductors">Xapa de coure metàl·lic</div>
          <div class="pdi-cat-card" draggable="true" data-cat="conductors">Dissipador d'alumini ranurat</div>
          <div class="pdi-cat-card" draggable="true" data-cat="conductors">Barra d'acer al carboni</div>
          <div class="pdi-cat-card" draggable="true" data-cat="conductors">Làmina de llautó</div>
          <div class="pdi-cat-card" draggable="true" data-cat="aillants">Panell de llana de roca volcànica</div>
          <div class="pdi-cat-card" draggable="true" data-cat="aillants">Placa de poliestirè expandit (porexpan)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="aillants">Planxa de suro natural comprimit</div>
          <div class="pdi-cat-card" draggable="true" data-cat="aillants">Mànec de fusta de faig</div>
          <div class="pdi-cat-card" draggable="true" data-cat="aillants">Guants de fibra de vidre per a forn</div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkCategoryActivity('act-nat05-1')">Comprovar Classificació Tèrmica</button>
        <div class="act-feedback-msg" id="fb-act-nat05-1"></div>
      </div>
    </div>
    


    <!-- act-nat05-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat05-2" data-unit="nat05" data-title="Speed Quiz Calor" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #dc2626;">UD5 · R2 · Principis Tèrmics</span>
        <h3>⚡ Speed Quiz · Calor, Temperatura i Propagació</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Quina diferència fonamental hi ha entre CALOR i TEMPERATURA?", "opts": ["Són exactament la mateixa magnitud física", "La calor és energia tèrmica en trànsit i la temperatura mesura l&#39;agitació tèrmica mitjana de les partícules", "La temperatura és energia i la calor és volum", "La calor es mesura en graus i la temperatura en Joules"], "ans": 1, "exp": "La temperatura indica el grau d&#39;agitació microscòpica (en °C o K); la calor és l&#39;energia que flueix del cos calent al fred."}, {"q": "Quin és el mecanisme de transferència de calor predominant en els SÒLIDS (com una barra metàl·lica)?", "opts": ["Conducció", "Convecció", "Radiació", "Sublimació"], "ans": 0, "exp": "En els sòlids, la calor es transmet per conducció mitjançant xocs entre àtoms veïns sense transport de matèria."}, {"q": "Com es transmet la calor a través del buit espacial des del Sol fins a la Terra?", "opts": ["Per conducció", "Per convecció d&#39;aire", "Per radiació mitjançant ones electromagnètiques infraroges", "Per contacte directe"], "ans": 2, "exp": "La radiació tèrmica no necessita cap medi material i es propaga a la velocitat de la llum en el buit."}, {"q": "A quina temperatura equivalen 0 °C en l&#39;Escala Absoluta Kelvin (K)?", "opts": ["0 K", "100 K", "273 K", "-273 K"], "ans": 2, "exp": "T(K) = T(°C) + 273. Per tant, 0 °C = 273 K (punt de fusió del gel)."}, {"q": "Per què es deixen petites separacions (juntes de dilatació) entre trams de rails de tren o en ponts d&#39;obra?", "opts": ["Per estalviar metall", "Perquè el metall es dilata (creix en volum) en estiu en pujar la temperatura i així no es deforma", "Perquè circule l&#39;aigua de pluja", "Per motius estètics"], "ans": 1, "exp": "Tots els materials es dilaten amb l&#39;augment de temperatura; la junta evita deformacions estructurals per expansió."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat05-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat05-3" data-unit="nat05" data-title="Troba l'Intrús" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #dc2626;">UD5 · R3 · Troba l'Intrús Tèrmic</span>
        <h3>🕵️ Detecta el Fenomen o Efecte Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Situacions on la calor es transmet per CONVECCIÓ (moviment de fluids líquids o gasos)", "cards": [{"t": "Aire calent que ascendeix sobre un radiador de calefacció", "intrus": false, "why": "Corrent de convecció per diferència de densitat de l&#39;aire."}, {"t": "Aigua que bull en una olla remenant-se en cercles", "intrus": false, "why": "L&#39;aigua calenta del fons puja i la freda baixa."}, {"t": "Escalfament d&#39;una cullera metàl·lica submergida en sopa", "intrus": true, "why": "INTRÚS! És un sòlid, per tant es transmet per CONDUCCIÓ entre àtoms metàl·lics."}, {"t": "Formació de la brisa marina entre el mar i la costa", "intrus": false, "why": "Moviment convectiu de masses d&#39;aire calent i fred."}]}, {"theme": "Efectes físics provocats per l&#39;APORTACIÓ de calor a un cos", "cards": [{"t": "Augment de la temperatura del cos", "intrus": false, "why": "Les partícules s&#39;agiten més de pressa."}, {"t": "Dilatació tèrmica (augment de volum)", "intrus": false, "why": "Les partícules se separen augmentant la mida."}, {"t": "Contracció sobtada de volum", "intrus": true, "why": "INTRÚS! La contracció es produeix quan es refreda (excepte l&#39;anomalia de l&#39;aigua líquida a 4°C)."}, {"t": "Canvi d&#39;estat de sòlid a líquid (fusió)", "intrus": false, "why": "Requereix calor latent de fusió."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no compleix la propietat tèrmica:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat05-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat05-4" data-unit="nat05" data-title="Càlcul Kelvin i Dilatació" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #dc2626;">UD5 · R4 · Càlculs de Temperatura</span>
        <h3>🔢 Escala Kelvin i Dilatació Tèrmica en Taller</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "El termòmetre d&#39;un forn de tractament tèrmic marca 127 °C. Quina és la temperatura en l&#39;escala Kelvin? (Aplica K = °C + 273)", "solution": "400", "unit": "K", "tolerance": 0.5, "exp": "K = 127 + 273 = 400 K."}, {"problem": "Una peça de motor comença la jornada a Ti = 20 °C i assoleix una temperatura final Tf = 85 °C. Quin ha estat el seu increment de temperatura ΔT en °C? (ΔT = Tf - Ti)", "solution": "65", "unit": "°C", "tolerance": 0.5, "exp": "ΔT = 85 - 20 = 65 °C."}, {"problem": "Una barra d&#39;acer mesura 10 metres. Si per cada grau d&#39;augment de temperatura es dilata 0.1 mm, quants mil·límetres s&#39;allargarà si la temperatura augmenta 30 °C?", "solution": "3", "unit": "mm", "tolerance": 0.1, "exp": "Dilatació = 0.1 mm/°C * 30 °C = 3.0 mm."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat05-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat05-5" data-unit="nat05" data-title="Connecta Fenòmens Tèrmics" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #dc2626;">UD5 · R5 · Fenòmens Tèrmics</span>
        <h3>🔗 Connecta el Mecanisme amb la seua Aplicació</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Conducció tèrmica en metall", "right": "Flux d&#39;energia per contacte sòlid (soldador escalfant coure)"}, {"left": "Convecció en fluids", "right": "Circulació de líquid refrigerant pel radiador del motor"}, {"left": "Radiació tèrmica infraroja", "right": "Escalfament per llums infraroges d&#39;assecatge de pintura"}, {"left": "Aïllant tèrmic de llana de roca", "right": "Recobriment de calderes per evitar pèrdues de calor"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca el mecanisme a l'esquerra i la seua aplicació a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat05-6 (case) -->
    <div class="pdi-activity-card" id="act-nat05-6" data-unit="nat05" data-title="Cas Prevenció Calor" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #dc2626;">UD5 · R6 · Seguretat i Prevenció Tèrmica</span>
        <h3>🛠️ Cas Pràctic · Prevenció d'Estrés Tèrmic i Cremades en Taller</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "En un taller de caldereria durant el mes de juliol s&#39;arriba a 38 °C a l&#39;interior i s&#39;han de soldar peces estructurals pesades.", "question": "Quina mesura preventiva organitzativa és obligatòria per evitar l&#39;estrés tèrmic?", "options": [{"text": "Establir pauses freqüents d&#39;hidratació en zones ventilades i ombrejades i flexibilitzar l&#39;horari cap a hores més fresques", "correct": true, "exp": "Correcte! La hidratació constant i el descans tèrmic prevenen el colp de calor potencialment mortal."}, {"text": "Prohibir beure aigua per no perdre temps", "correct": false, "exp": "Provocaria deshidratació i síncope ràpidament."}, {"text": "Posar estufes per acostumar el cos a la calor", "correct": false, "exp": "Absurd i perillós per a la salut."}]}, {"context": "Un operari que manipula peces acabades de soldar comença a marejar-se, té la pell molt calenta, vermella i deixa de suar.", "question": "Són símptomes greus de cop de calor. Quina és la primera actuació d&#39;auxili?", "options": [{"text": "Traslladar-lo a un lloc fresc, afluixar la roba, aplicar draps humits i trucar immediatament al 112", "correct": true, "exp": "Molt bé! El colp de calor és una urgència mèdica que requereix baixar la temperatura corporal i atenció sanitària."}, {"text": "Donar-li cafè ben calent", "correct": false, "exp": "Pujaria més la pressió i la deshidratació."}, {"text": "Obligar-lo a continuar treballant", "correct": false, "exp": "Pot provocar aturada multiorgànica."}]}, {"context": "Per evitar cremades greus per contacte amb metalls acabats de tallar o soldar a més de 400 °C:", "question": "Quin EPI i senyalització s&#39;ha d&#39;utilitzar?", "options": [{"text": "Guants de cuir tèrmics resistents a la calor i senyalitzar les peces com a &#39;Material Calent&#39;", "correct": true, "exp": "Exacte! Els guants ignífugs homologats i la senyalització eviten agafar peces a alta temperatura per error."}, {"text": "Guants de làtex d&#39;un sol ús", "correct": false, "exp": "Es fondrien a la pell causant cremades pitjors."}, {"text": "Tocar el metall ràpidament amb el dit per veure si crema", "correct": false, "exp": "Pràctica temerària inadmissible."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Prevenció Tèrmica</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Protocol Finalitzat!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat06-1 (category) -->
    <div class="pdi-activity-card" id="act-nat06-1" data-unit="nat06" data-title="Infeccioses vs No Infecc." data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD6 · R1 · Classificació de Malalties</span>
        <h3>🏥 Malalties Infeccioses (Transmissibles) vs No Infeccioses</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada patologia a la seua categoria mèdica correcta:</p>
      <div class="pdi-cat-wrapper">
        <div class="pdi-cat-bucket" data-category="infecciosa">
          <div class="bucket-header" style="background: #7c3aed; color: #fff;"><h4>Malalties Infeccioses (Causades per Patògens)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="noinfecciosa">
          <div class="bucket-header" style="background: #0284c7; color: #fff;"><h4>Malalties No Infeccioses (Degeneratives / Hàbits / Genètiques)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-source-pool">
          <div class="pdi-cat-card" draggable="true" data-cat="infecciosa">Grip estacional (Virus de la Influenza)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="infecciosa">Tètanus per ferida rovellada (Clostridium tetani)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="infecciosa">COVID-19 (Coronavirus SARS-CoV-2)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="infecciosa">Tuberculosi pulmonar (Bacil de Koch)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="infecciosa">Peu d'atleta (Infecció per fongs dermatòfits)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="noinfecciosa">Diabetis mellitus tipus 2</div>
          <div class="pdi-cat-card" draggable="true" data-cat="noinfecciosa">Hipertensió arterial crònica</div>
          <div class="pdi-cat-card" draggable="true" data-cat="noinfecciosa">Artrosi articular degenerativa de genoll</div>
          <div class="pdi-cat-card" draggable="true" data-cat="noinfecciosa">Infart agut de miocardi per tabaquisme</div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkCategoryActivity('act-nat06-1')">Comprovar Malalties</button>
        <div class="act-feedback-msg" id="fb-act-nat06-1"></div>
      </div>
    </div>
    


    <!-- act-nat06-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat06-2" data-unit="nat06" data-title="Speed Quiz Salut" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD6 · R2 · Sistema Immunitari</span>
        <h3>⚡ Speed Quiz · Patògens, Defenses i Vacunes</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Com defineix l&#39;Organització Mundial de la Salut (OMS) el concepte de SALUT?", "opts": ["Només com l&#39;absència de febre o malaltia física", "Com un estat complet de benestar físic, mental i social", "Com la capacitat de no cansar-se en treballar", "Com tenir una analítica perfecta"], "ans": 1, "exp": "La salut és integral: comprèn dimensions físiques, mentals i d&#39;integració social."}, {"q": "Quin tipus de microorganisme patogen NO té estructura cel·lular i necessita parasitar una cèl·lula viva per reproduir-se?", "opts": ["Els bacteris", "Els virus", "Els fongs", "Els protozous"], "ans": 1, "exp": "Els virus són entitats acel·lulars consistents en material genètic protegit per càpsida."}, {"q": "Què són els ANTICOSSOS sintetitzats pels limfòcits B del nostre sistema immunitari?", "opts": ["Glòbuls vermells que transporten oxigen", "Proteïnes específiques que reconeixen i neutralitzen antígens invasors", "Enzims que digereixen carn a l&#39;estómac", "Cèl·lules grasses"], "ans": 1, "exp": "Els anticossos o immunoglobulines neutralitzen de forma clau-pany els antígens estranys."}, {"q": "Per què els ANTIBIÒTICS només són efectius contra bacteris i mai contra virus com el refredat o la grip?", "opts": ["Perquè els virus tenen paret cel·lular de quitina", "Perquè els antibiòtics ataquen estructures bacterianes específiques que els virus no tenen", "Perquè caduquen molt de pressa", "Perquè els virus viuen a l&#39;aigua"], "ans": 1, "exp": "Els antibiòtics bloquegen la paret o ribosomes bacterians; prendre&#39;ls per a la grip no cura i crea superbacteris resistents."}, {"q": "Com funciona una VACUNA en el nostre organisme per protegir-nos d&#39;una malaltia infecciosa?", "opts": ["Mata directament tots els bacteris del cos amb verí", "Introdueix l&#39;agent debilitat o fragments per entrenar el sistema immunitari i crear memòria", "És un calmant del dolor", "És una vitamina injectable"], "ans": 1, "exp": "La vacuna genera limfòcits B i T de memòria sense provocar la malaltia greu."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat06-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat06-3" data-unit="nat06" data-title="Troba l'Intrús Immunitari" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD6 · R3 · Troba l'Intrús Defensiu</span>
        <h3>🕵️ Detecta la Barrera o Hàbit Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Barreres Primàries Externes de defensa del cos humà", "cards": [{"t": "Pell intacta i queratinitzada", "intrus": false, "why": "Barrera física impermeable a la majoria de microorganismes."}, {"t": "Lisozim de la saliva i llàgrimes", "intrus": false, "why": "Enzim químic que trenca la paret de bacteris."}, {"t": "Anticossos circulants a la sang", "intrus": true, "why": "INTRÚS! Els anticossos pertanyen a la immunitat específica interna (3a línia de defensa)."}, {"t": "Mucus i cilis de les vies respiratòries", "intrus": false, "why": "Atrapen partícules i les expulsen cap a la faringe."}]}, {"theme": "Factors de Risc que afavoreixen Malalties Cardiovasculars No Infeccioses", "cards": [{"t": "Consum de tabac habitual", "intrus": false, "why": "Danya l&#39;endoteli arterial i augmenta la pressió."}, {"t": "Sedentarisme prolongat", "intrus": false, "why": "Disminueix la capacitat cardíaca i augmenta el colesterol."}, {"t": "Dieta equilibrada rica en fruita i verdura", "intrus": true, "why": "INTRÚS! És un factor PROTECTOR clau per a la salut vascular."}, {"t": "Obesitat i excés de greixos saturats", "intrus": false, "why": "Genera plaques d&#39;ateroma a les artèries coronàries."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no compleix el criteri biològic:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat06-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat06-4" data-unit="nat06" data-title="Càlcul Farmacològic" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD6 · R4 · Càlcul Farmacològic</span>
        <h3>🔢 Dosificació de Fàrmacs i Cobertura de Salut</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "Un metge recepta amoxicil·lina a una dosi de 25 mg per cada kg de pes al dia. Si un pacient jove pesa 60 kg, quants mil·ligrams (mg) totals ha de rebre en 24 hores?", "solution": "1500", "unit": "mg", "tolerance": 5.0, "exp": "Dosi = 25 mg/kg * 60 kg = 1500 mg (1.5 grams/dia dividits en 3 preses de 500 mg)."}, {"problem": "En un centre educatiu hi ha 400 alumnes i 360 estan correctament vacunats contra el tètanus. Quin és el percentatge de cobertura vacunal (%)?", "solution": "90", "unit": "%", "tolerance": 0.5, "exp": "% = (360 / 400) * 100 = 90%."}, {"problem": "Per preparar un desinfectant hidroalcohòlic al 70%, es mesclen 70 ml d&#39;alcohol pur amb 30 ml d&#39;aigua destil·lada. Quants mil·lilitres d&#39;alcohol pur calen per fer 500 ml de solució?", "solution": "350", "unit": "ml", "tolerance": 1.0, "exp": "Volum alcohol = 500 ml * 0.70 = 350 ml."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat06-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat06-5" data-unit="nat06" data-title="Connecta Teràpies" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD6 · R5 · Teràpies Mèdiques</span>
        <h3>🔗 Connecta el Tipus d'Infecció amb el Tractament Correcte</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Infecció bacteriana per estreptococ", "right": "Tractament amb antibiòtic específic receptat pel metge"}, {"left": "Infecció vírica per grip estacional", "right": "Repòs, hidratació i analgèsics / antitèrmics (mai antibiòtics)"}, {"left": "Micosis o infecció per fongs (candidiasi)", "right": "Aplicació de pomada o fàrmac antifúngic"}, {"left": "Ferida greu amb xapa rovellada", "right": "Dosi de record de vacuna i sèrum antitetànic"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca la infecció a l'esquerra i el tractament mèdic a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat06-6 (case) -->
    <div class="pdi-activity-card" id="act-nat06-6" data-unit="nat06" data-title="Cas Accident de Taller" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD6 · R6 · Primers Auxilis Laborals</span>
        <h3>🛠️ Cas Pràctic · Protocol davant d'un Accident amb Ferida en Taller</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "En un taller de mecanitzat, un company es fa un tall profund a la mà amb una fresadora i sanga abundantment de color vermell viu.", "question": "Quina és la primera mesura de contenció de l&#39;hemorràgia?", "options": [{"text": "Pressionar directament sobre la ferida amb una gasa o drap net i elevar la mà per damunt del cor", "correct": true, "exp": "Correcte! La compressió directa i elevació frena l&#39;hemorràgia sense danyar teixits."}, {"text": "Posar-li un torniquet rígid al coll", "correct": false, "exp": "Completament absurd i letal."}, {"text": "Fregar la ferida amb serradures de fusta", "correct": false, "exp": "Contaminaria greument la ferida provocant infecció."}]}, {"context": "L&#39;hemorràgia s&#39;ha estabilitzat però la ferida requereix punts de sutura a urgències.", "question": "Quina dada mèdica és imprescindible verificar immediatament pel tipus de material de taller?", "options": [{"text": "L&#39;estat de vacunació antitetànica de l&#39;accidentat", "correct": true, "exp": "Molt bé! El bacil del tètanus és freqüent en metalls i sòl i requereix immunització activa."}, {"text": "La marca de la fresadora", "correct": false, "exp": "Irrellevant per a la salut del pacient."}, {"text": "El número de calçat del ferit", "correct": false, "exp": "No té relació mèdica."}]}, {"context": "Com s&#39;ha de procedir per comunicar l&#39;accident laboral i registrar-lo?", "question": "Quin protocol legal i de prevenció s&#39;ha d&#39;activar?", "options": [{"text": "Avisar el responsable de prevenció del centre, traslladar el treballador a la mútua i emplenar el comunicat d&#39;accident", "correct": true, "exp": "Exacte! Garanteix la cobertura sanitària de la mútua laboral i la investigació de causes."}, {"text": "Amagar l&#39;accident per no tenir inspeccions", "correct": false, "exp": "Il·legal i deixa desprotegit el treballador."}, {"text": "Enviar-lo a casa sense anar al metge", "correct": false, "exp": "Negligència greu."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Primers Auxilis</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Atenció Correcta!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat07-1 (order) -->
    <div class="pdi-activity-card" id="act-nat07-1" data-unit="nat07" data-title="Ordre Seqüència Digestiva" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R1 · Aparell Digestiu</span>
        <h3>🧩 Recorregut Anatòmic dels Aliments pel Tub Digestiu</h3>
      </div>
      <p class="pdi-instruction">Arrossega els òrgans en l'ordre cronològic del trànsit dels aliments:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r Cavitat bucal (masticació i insalivació: bol alimentari)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Faringe i Esòfag (deglució i moviments peristàltics)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Estómac (suc gàstric clorhídric i pepsina: quim)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t Intestí Prim (duodè, jejú i ili: digestió química i absorció de nutrients)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è Intestí Gros i Recte (absorció d'aigua, flora bacteriana i expulsió de femtes)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Entrada</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Trànsit</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Digestió Gàstrica</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Absorció Nutrients</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Eliminació</span></div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkOrderActivity('act-nat07-1')">Comprovar Tub Digestiu</button>
        <div class="act-feedback-msg" id="fb-act-nat07-1"></div>
      </div>
    </div>
    


    <!-- act-nat07-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat07-2" data-unit="nat07" data-title="Speed Quiz Nutrició" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R2 · Fisiologia de la Nutrició</span>
        <h3>⚡ Speed Quiz · Digestiu, Respiratori, Circulatori i Excretor</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Quina és la funció biològica principal dels GLÚCIDS (hidrats de carboni)?", "opts": ["Construir músculs", "Aportar energia immediata a les cèl·lules", "Actuar com a aïllant elèctric", "Transportar l&#39;orina"], "ans": 1, "exp": "La glucosa és el combustible cel·lular per excel·lència (4 kcal/g)."}, {"q": "A quina estructura pulmonar microscòpica es produeix l&#39;intercanvi de gasos (O₂ i CO₂) amb els capil·lars sanguinis?", "opts": ["Als bronquis principals", "A la tràquea", "Als alvèols pulmonars", "A la laringe"], "ans": 2, "exp": "Els alvèols tenen una paret ultraprima envoltat de capil·lars on l&#39;O₂ passa a la sang i el CO₂ a l&#39;aire."}, {"q": "Quin tipus de cèl·lules sanguínies contenen HEMOGLOBINA per transportar oxigen dels pulmons als teixits?", "opts": ["Els glòbuls blancs o leucòcits", "Les plaquetes", "Els glòbuls vermells o eritròcits", "El plasma líquid"], "ans": 2, "exp": "Els eritròcits porten l&#39;oxigen gràcies a l&#39;àtom de ferro de l&#39;hemoglobina."}, {"q": "Quina és la unitat funcional microscòpica del ronyó encarregada de filtrar la sang i formar l&#39;orina?", "opts": ["L&#39;urèter", "La nefrona", "La bufeta urinària", "La uretra"], "ans": 1, "exp": "Cada ronyó conté aproximadament 1 milió de nefrones que filtren i reabsorbeixen aigua i sals."}, {"q": "Quina vitamina hidrosoluble essencial es troba en abundància als cítrics (taronges, llimones) i prevé l&#39;escorbut?", "opts": ["Vitamina D", "Vitamina C (àcid ascòrbic)", "Vitamina A", "Vitamina K"], "ans": 1, "exp": "La vitamina C és clau per al col·lagen, el sistema immunitari i la cicatrització."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat07-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat07-3" data-unit="nat07" data-title="Troba l'Intrús Fisiològic" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R3 · Troba l'Intrús Fisiològic</span>
        <h3>🕵️ Detecta l'Òrgan o Component Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Òrgans que formen part de l&#39;Aparell EXCRETOR o urinari", "cards": [{"t": "Ronyons (dret i esquerre)", "intrus": false, "why": "Filtren el plasma formant l&#39;orina."}, {"t": "Urèters", "intrus": false, "why": "Condueixen l&#39;orina des dels ronyons fins a la bufeta."}, {"t": "Estómac", "intrus": true, "why": "INTRÚS! Pertany a l&#39;aparell DIGESTIU, no a l&#39;excretor."}, {"t": "Bufeta urinària i uretra", "intrus": false, "why": "Emmagatzemen i evacuen l&#39;orina a l&#39;exterior."}]}, {"theme": "Components cel·lulars i líquids de la SANG", "cards": [{"t": "Glòbuls vermells (Eritròcits)", "intrus": false, "why": "Transporten oxigen i diòxid de carboni."}, {"t": "Glòbuls blancs (Leucòcits)", "intrus": false, "why": "Defensen el cos d&#39;infeccions."}, {"t": "Bilis hepàtica", "intrus": true, "why": "INTRÚS! La bilis és una secreció digestiva del fetge, no un component de la sang."}, {"t": "Plaquetes (Trombòcits)", "intrus": false, "why": "Intervenen en la coagulació sanguínia."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no pertany a l'aparell corresponent:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat07-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat07-4" data-unit="nat07" data-title="Càlcul Calòric de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R4 · Balanç Energètic i Nutricional</span>
        <h3>🔢 Càlcul de Calories, Nutrients i Hidratació</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "Cada gram de glúcids aporta 4 kcal d&#39;energia i cada gram de greixos aporta 9 kcal. Quantes kilocalories totals aporten 50 g de glúcids i 20 g de greixos? (50·4 + 20·9)", "solution": "380", "unit": "kcal", "tolerance": 2.0, "exp": "Energia = (50*4) + (20*9) = 200 + 180 = 380 kcal."}, {"problem": "Un jove actiu de 16 anys que fa feina física de taller necessita unes 2600 kcal al dia. Si en el dinar consumeix el 40% de les calories diàries, quantes kcal conté el dinar?", "solution": "1040", "unit": "kcal", "tolerance": 5.0, "exp": "Dinar = 2600 * 0.40 = 1040 kcal."}, {"problem": "El cos humà necessita ingerir aproximadament 2.5 litres d&#39;aigua al dia entre begudes i aliments. Si consumeix 4 gots de 250 ml d&#39;aigua pura (1 litre), quants litres li falten per assolir la meta diària?", "solution": "1.5", "unit": "litres", "tolerance": 0.05, "exp": "Falten = 2.5 - 1.0 = 1.5 litres."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat07-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat07-5" data-unit="nat07" data-title="Connecta Aparells" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R5 · Òrgans de la Nutrició</span>
        <h3>🔗 Connecta l'Òrgan amb la seua Funció Fisiològica</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Intestí Prim (microvellositats)", "right": "Absorció de nutrients (aminoàcids, glucosa, àcids grassos)"}, {"left": "Alvèols Pulmonars", "right": "Difusió d&#39;oxigen cap a la sang i recollida de CO₂"}, {"left": "Cor (Ventrícle esquerre)", "right": "Impuls de sang oxigenada a pressió cap a tot el cos per l&#39;artèria aorta"}, {"left": "Nefrones Renals", "right": "Filtració de productes de rebuig (urea, àcid úric) per formar orina"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca l'òrgan a l'esquerra i la seua funció a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat07-6 (order) -->
    <div class="pdi-activity-card" id="act-nat07-6" data-unit="nat07" data-title="Recorregut de la Sang" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R6 · Circulació Cardíaca Doble</span>
        <h3>🧩 Recorregut de la Sang en la Circulació Pulmonar i Sistèmica</h3>
      </div>
      <p class="pdi-instruction">Arrossega els passos del cicle cardíac començant per l'arribada de sang desoxigenada al cor:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r La sang desoxigenada del cos entra a l'Aurícula Dreta per les venes caves</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Passa al Ventrícle Dret i s'impulsa cap als Pulmons per l'artèria pulmonar</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Als pulmons la sang s'oxigena i allibera el CO₂ (hematosi alveolar)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t La sang oxigenada torna a l'Aurícula Esquerra per les venes pulmonars</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è El Ventrícle Esquerre la bomba amb força per l'Aorta cap a tots els músculs i teixits</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Entrada Venosa</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Cap als Pulmons</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Oxigenació</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Retorn Oxigenat</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Distribució General</span></div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkOrderActivity('act-nat07-6')">Comprovar Circuit Cardíac</button>
        <div class="act-feedback-msg" id="fb-act-nat07-6"></div>
      </div>
    </div>
    


    <!-- act-nat07-7 (category) -->
    <div class="pdi-activity-card" id="act-nat07-7" data-unit="nat07" data-title="Classificació Nutricional" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R7 · Roda dels Aliments</span>
        <h3>🍎 Aliments Energètics, Plàstics (Estructurals) i Reguladors</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada aliment segons la seua funció nutritiva dominant:</p>
      <div class="pdi-cat-wrapper">
        <div class="pdi-cat-bucket" data-category="energetic">
          <div class="bucket-header" style="background: #d97706; color: #fff;"><h4>Aliments Energètics (Glúcids i Greixos)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="plastic">
          <div class="bucket-header" style="background: #dc2626; color: #fff;"><h4>Aliments Plàstics o Formadors (Proteïnes)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="regulador">
          <div class="bucket-header" style="background: #16a34a; color: #fff;"><h4>Aliments Reguladors (Vitamines i Minerals)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-source-pool">
          <div class="pdi-cat-card" draggable="true" data-cat="energetic">Pasta de blat i arròs</div>
          <div class="pdi-cat-card" draggable="true" data-cat="energetic">Oli d'oliva verge extra</div>
          <div class="pdi-cat-card" draggable="true" data-cat="energetic">Pa de fleca i creïlles</div>
          <div class="pdi-cat-card" draggable="true" data-cat="plastic">Pit de pollastre i carn magra</div>
          <div class="pdi-cat-card" draggable="true" data-cat="plastic">Peix blau (salmó, sardina)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="plastic">Ous i llegums (llenties)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="regulador">Espinacs i bledes fresques</div>
          <div class="pdi-cat-card" draggable="true" data-cat="regulador">Taronges i kiwis</div>
          <div class="pdi-cat-card" draggable="true" data-cat="regulador">Tomaca madura d'horta</div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkCategoryActivity('act-nat07-7')">Comprovar Grups Nutricionals</button>
        <div class="act-feedback-msg" id="fb-act-nat07-7"></div>
      </div>
    </div>
    


    <!-- act-nat07-8 (case) -->
    <div class="pdi-activity-card" id="act-nat07-8" data-unit="nat07" data-title="Cas Reanimació Bàsica" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0891b2;">UD7 · R8 · Suport Vital Bàsic</span>
        <h3>🛠️ Cas Pràctic · Protocol de Reanimació Cardiopulmonar (RCP) i DEA</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "Un operari cau a terra inconscient al mig del taller. T&#39;hi apropes, li toques les espatlles cridant i no reacciona; obres la via aèria (manobra front-mentó) i veus que no respira amb normalitat (fes el &#39;veure, escoltar i sentir&#39;).", "question": "Quin és el primer pas imprescindible abans de començar maniobres?", "options": [{"text": "Demanar ajuda, ordenar trucar immediatament al 112 i sol·licitar que porten el Desfibril·lador (DEA)", "correct": true, "exp": "Correcte! La ràpida trucada als serveis d&#39;emergència i la recerca del DEA és el primer anell de supervivència."}, {"text": "Anar a buscar una tassa de cafè calent", "correct": false, "exp": "Retardaria l&#39;atenció i una aturada cardíaca és qüestió de minuts."}, {"text": "Pujar-lo a un vehicle particular sense avisar", "correct": false, "exp": "Molt perillós i desaconsellat."}]}, {"context": "Mentre arriba el DEA, l&#39;afectat continua en aturada cardiorespiratòria.", "question": "Com s&#39;han de fer les compressions toràciques (RCP bàsica)?", "options": [{"text": "Col·locar les mans entrellaçades al centre del pit i comprimir fort i ràpid (100-120 cpm) a un ritme de 30 compressions seguides de 2 insuflacions", "correct": true, "exp": "Molt bé! El protocol estàndard de suport vital és de 30 compressions i 2 ventilacions a un ritme constant."}, {"text": "Pressionar molt suau a l&#39;abdomen", "correct": false, "exp": "Pot trencar òrgans interns i no bomba sang al cervell."}, {"text": "Picar bufetades a la cara", "correct": false, "exp": "Completament inútil i lesiu."}]}, {"context": "Arriba el desfibril·lador extern automàtic (DEA) a l&#39;espai de treball.", "question": "Com s&#39;utilitza el DEA de forma segura seguint les instruccions de veu?", "options": [{"text": "Obrir el DEA, apegar els elèctrodes adhesius al pit nu del pacient seguint el dibuix i assegurar-se que ningú no el toca quan el dispositiu analitza o descarrega", "correct": true, "exp": "Exacte! El DEA és totalment autònom, només descarrega si detecta fibril·lació ventricular i cal no tocar el pacient durant la descàrrega."}, {"text": "Tocar el pit del pacient mentre es fa la descàrrega elèctrica", "correct": false, "exp": "Transmetria la descàrrega a la persona auxiliar provocant un accident."}, {"text": "Apegar els elèctrodes damunt de la roba d&#39;hivern", "correct": false, "exp": "No transmetria el corrent terapèutic."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Cadena de Supervivència</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Protocol d'Emergència Executat!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat08-1 (order) -->
    <div class="pdi-activity-card" id="act-nat08-1" data-unit="nat08" data-title="Seqüència Arc Reflex" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD8 · R1 · Circuit de la Relació</span>
        <h3>🧠 Seqüència de l'Arc Reflex davant d'un Estímul Dolorós</h3>
      </div>
      <p class="pdi-instruction">Arrossega els elements del circuit nerviós des que es produeix l'estímul fins a la retirada del membre:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r Estímul tèrmic o mecànic perillós (punxada o metall calent)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Receptor sensorial de la pell (nociceptor o termoreceptor)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Nervi sensitiu aferent (condueix l'impuls elèctric cap al centre)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t Centre de coordinació a la Medul·la Espinal (neurona d'associació)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è Nervi motor eferent i Múscul efector (retirada involuntària instantània)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Estímul</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Captació</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Transmissió Sensitiva</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Processament Medul·lar</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Resposta Motora</span></div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkOrderActivity('act-nat08-1')">Comprovar Circuit Reflex</button>
        <div class="act-feedback-msg" id="fb-act-nat08-1"></div>
      </div>
    </div>
    


    <!-- act-nat08-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat08-2" data-unit="nat08" data-title="Speed Quiz Relació" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD8 · R2 · Coordinació i Sentits</span>
        <h3>⚡ Speed Quiz · Sistema Nerviós, Locomotor i Endocrí</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "Com es comuniquen dues neurones a través de la SINAPSI sense tocar-se físicament?", "opts": ["Mitjançant descàrregues d&#39;aigua", "Mitjançant missatgers químics anomenats neurotransmissors", "A través de vasos sanguinis", "Mitjançant ones de ràdio"], "ans": 1, "exp": "La sinapsi allibera neurotransmissors (com dopamina o acetilcolina) que creuen l&#39;espai sinàptic."}, {"q": "Quina part del Sistema Nerviós Central s&#39;encarrega de funcions vitals automàtiques com el ritme cardíac i la respiració?", "opts": ["L&#39;escorça cerebral", "El bulb raquidi", "El cerebel", "La medul·la òssia"], "ans": 1, "exp": "El tronc encefàlic i bulb raquidi regulen les funcions vegetatives involuntàries."}, {"q": "Què uneix un MÚSCUL a un OS per transmetre la força de contracció?", "opts": ["Un lligament", "Un tendó", "Un cartílag articular", "Una neurona motora"], "ans": 1, "exp": "Els tendons uneixen músculs a ossos; els lligaments uneixen os amb os a les articulacions."}, {"q": "Quina glàndula endocrina segrega INSULINA per regular el nivell de glucosa a la sang?", "opts": ["El tiroide", "La hipòfisi", "El pàncrees", "Les càpsules suprarenals"], "ans": 2, "exp": "Els illots pancreàtics fabriquen insulina quan puja la glucèmia després de menjar."}, {"q": "Quin òrgan dels sentits conté FOTORECEPTORS (cons i bastons) sensibles a la llum?", "opts": ["L&#39;oïda interna", "La retina de l&#39;ull", "La pituïtària nasal", "Les papil·les linguals"], "ans": 1, "exp": "A la retina, els bastons detecten llum tènue i els cons permeten la visió dels colors."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat08-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat08-3" data-unit="nat08" data-title="Troba l'Intrús Nerviós" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD8 · R3 · Troba l'Intrús Anatòmic</span>
        <h3>🕵️ Detecta l'Os o Element Nerviós Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Estructures que formen part del SISTEMA NERVIÓS CENTRAL (SNC)", "cards": [{"t": "Cervell i hemisferis cerebrals", "intrus": false, "why": "Part principal de l&#39;encèfal."}, {"t": "Cerebel (coordinació motora)", "intrus": false, "why": "Regula l&#39;equilibri i la precisió motora."}, {"t": "Nervi ciàtic de la cama", "intrus": true, "why": "INTRÚS! Pertany al Sistema Nerviós PERIFÈRIC (SNP), no al Central."}, {"t": "Medul·la espinal (canal vertebral)", "intrus": false, "why": "Condueix els reflexos i connecta amb l&#39;encèfal."}]}, {"theme": "Ossos que formen part de l&#39;esquelet de les EXTREMITATS", "cards": [{"t": "Fèmur (cuixa)", "intrus": false, "why": "L&#39;os més llarg i resistent de l&#39;extremitat inferior."}, {"t": "Húmer (braç)", "intrus": false, "why": "Os llarg de l&#39;extremitat superior."}, {"t": "Estèrnum (pit)", "intrus": true, "why": "INTRÚS! L&#39;estèrnum és un os de l&#39;esquelet AXIAL del tòrax, no de les extremitats."}, {"t": "Tíbia i peroné (cama)", "intrus": false, "why": "Ossos de la cama inferior."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no pertany al criteri anatòmic del grup:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat08-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat08-4" data-unit="nat08" data-title="Càlcul Distància Frenada" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD8 · R4 · Temps de Reacció Humà</span>
        <h3>🔢 Biomecànica i Temps de Resposta Motora</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "El temps de reacció d&#39;un treballador davant un avís és de t = 0.8 segons. Si un vehicle de magatzem circula a v = 5 m/s, quants metres recorre el vehicle durant el temps de reacció abans de frenar? (d = v · t)", "solution": "4", "unit": "metres", "tolerance": 0.1, "exp": "d = 5 m/s * 0.8 s = 4.0 metres."}, {"problem": "L&#39;impuls nerviós en una neurona motora mielínica viatja a v = 100 m/s. Quants mil·lisegons tarda a recórrer 1 metre de distància des de la medul·la fins al peu? (1 m / 100 m/s = 0.010 s)", "solution": "10", "unit": "ms", "tolerance": 0.5, "exp": "t = 1 / 100 = 0.01 s = 10 mil·lisegons."}, {"problem": "El cos humà adult compta amb 206 ossos. Si la columna vertebral està formada per 33 vèrtebres, quants ossos resten a la resta de l&#39;esquelet?", "solution": "173", "unit": "ossos", "tolerance": 0.5, "exp": "Resten = 206 - 33 = 173 ossos."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat08-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat08-5" data-unit="nat08" data-title="Connecta Sistema Endocrí" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD8 · R5 · Hormones i Glàndules</span>
        <h3>🔗 Connecta la Glàndula amb la seua Hormona Principal</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "Pàncrees endocrí (Illots)", "right": "Insulina (fa baixar la glucosa en sang)"}, {"left": "Glàndules Suprarrenals", "right": "Adrenalina (activa resposta d&#39;alerta i esforç ràpid)"}, {"left": "Tiroide (coll)", "right": "Tiroxina (regula el ritme metabòlic general)"}, {"left": "Hipòfisi o pituïtària (base cervell)", "right": "Hormona del creixement (GH) i control d&#39;altres glàndules"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca la glàndula endocrina a l'esquerra i la seua hormona a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat08-6 (case) -->
    <div class="pdi-activity-card" id="act-nat08-6" data-unit="nat08" data-title="Cas Prevenció Lesions" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD8 · R6 · Ergonomia i Salut Musculoesquelètica</span>
        <h3>🛠️ Cas Pràctic · Prevenció de Lesions i Ergonomia en Taller</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "En un magatzem logístic cal descarregar caixes pesants de peces de recanvi de 20 kg des de palets cap a prestatgeries.", "question": "Quina és la tècnica ergonòmica correcta per aixecar una caixa pesant des de terra?", "options": [{"text": "Flexionar els genolls, mantenir l&#39;esquena recta i subjectar la càrrega ben apegada al tronc fent força amb les cames", "correct": true, "exp": "Correcte! Els quàdriceps de les cames són músculs potents i protegeixen els discos lumbars de la columna vertebral."}, {"text": "Mantenir les cames rectes i corbar l&#39;esquena al màxim cap avant", "correct": false, "exp": "Provoca hèrnies discals i lumbàlgies greus per sobrecàrrega vertebral."}, {"text": "Aixecar la caixa girant ràpidament el tronc de costat", "correct": false, "exp": "La torsió de columna amb càrrega és la principal causa de lesions musculars."}]}, {"context": "Si una caixa supera els 25 kg de pes màxim recomanat per a un treballador adult sa:", "question": "Què s&#39;ha de fer segons la normativa de prevenció de riscos laborals?", "options": [{"text": "Sol·licitar l&#39;ajuda d&#39;un company per fer un aixecament compartit o emprar un mitjà mecànic (carretilla o transpalet)", "correct": true, "exp": "Molt bé! Superar els límits recomanats requereix auxili mecànic o manipulació en parella."}, {"text": "Obligar-se a aixecar-la sol fent un esforç suprem", "correct": false, "exp": "Risc imminent de trencament fibril·lar."}, {"text": "Xafar la caixa per reduir volum", "correct": false, "exp": "Danyaria el material."}]}, {"context": "Per a tasques repetitives de muntatge manual continuat durant 3 hores:", "question": "Quina mesura preventiva evita tendinitis i trastorns musculoesquelètics?", "options": [{"text": "Alternar postures, fer estiraments i micro-pauses periòdiques regulades", "correct": true, "exp": "Exacte! La rotació de tasques i estiraments relaxa tendons i articulacions."}, {"text": "Prendre begudes estimulants sense parar de treballar", "correct": false, "exp": "Camufla la fatiga física i augmenta els errors."}, {"text": "Fixar les articulacions amb cinta americana", "correct": false, "exp": "Inadmissible."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Ergonomia Laboral</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Pautes Ergonòmiques Assolides!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat09-1 (category) -->
    <div class="pdi-activity-card" id="act-nat09-1" data-unit="nat09" data-title="Barrera, Químics, Cirurgia" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #db2777;">UD9 · R1 · Planificació Familiar</span>
        <h3>🧬 Classificació de Mètodes Anticonceptius</h3>
      </div>
      <p class="pdi-instruction">Arrossega cada mètode anticonceptiu al seu grup segons el seu mecanisme:</p>
      <div class="pdi-cat-wrapper">
        <div class="pdi-cat-bucket" data-category="barrera">
          <div class="bucket-header" style="background: #0284c7; color: #fff;"><h4>Mètodes de Barrera (Bloqueig Físic)</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="hormonal">
          <div class="bucket-header" style="background: #db2777; color: #fff;"><h4>Mètodes Químics / Hormonals</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-bucket" data-category="quirurgic">
          <div class="bucket-header" style="background: #7c3aed; color: #fff;"><h4>Mètodes Quirúrgics Definitius</h4></div>
          <div class="bucket-drop-zone"></div>
        </div>
        <div class="pdi-cat-source-pool">
          <div class="pdi-cat-card" draggable="true" data-cat="barrera">Preservatiu masculí de làtex (condó)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="barrera">Preservatiu femení de poliuretà</div>
          <div class="pdi-cat-card" draggable="true" data-cat="barrera">Diafragma vaginal de silicona</div>
          <div class="pdi-cat-card" draggable="true" data-cat="hormonal">Píndola anticonceptiva oral diària</div>
          <div class="pdi-cat-card" draggable="true" data-cat="hormonal">Pegat transdèrmic hormonal setmanal</div>
          <div class="pdi-cat-card" draggable="true" data-cat="hormonal">Anell vaginal mensual d'estrògens</div>
          <div class="pdi-cat-card" draggable="true" data-cat="quirurgic">Vasectomia masculina (secció de conductes deferents)</div>
          <div class="pdi-cat-card" draggable="true" data-cat="quirurgic">Lligadura de trompes de Fal·lopi femenina</div>
        </div>
      </div>
      <div class="pdi-act-footer">
        <button class="btn-check-act" onclick="checkCategoryActivity('act-nat09-1')">Comprovar Anticonceptius</button>
        <div class="act-feedback-msg" id="fb-act-nat09-1"></div>
      </div>
    </div>
    


    <!-- act-nat09-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-nat09-2" data-unit="nat09" data-title="Speed Quiz Reproducció" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #db2777;">UD9 · R2 · Fisiologia Reproductiva</span>
        <h3>⚡ Speed Quiz · Gamets, Fecundació i Salut Sexual</h3>
      </div>
      <div class="pdi-speedquiz-container" data-questions='[{"q": "On es produeixen els ESPERMATOZOIDES i la testosterona a l&#39;aparell reproductor masculí?", "opts": ["A la pròstata", "Als testicles", "A la bufeta urinària", "Al penis"], "ans": 1, "exp": "Els testicles allotgen els tubs seminífers on té lloc l&#39;espermatogènesi."}, {"q": "On es produeix habitualment la FECUNDACIÓ (unió de l&#39;òvul amb l&#39;espermatozoide)?", "opts": ["A la vagina", "A les trompes de Fal·lopi", "A la bufeta", "Als ovaris"], "ans": 1, "exp": "La fecundació té lloc al terç superior de les trompes de Fal·lopi."}, {"q": "Com s&#39;anomena la capa vascular interna de l&#39;úter que es desprèn durant la MENSTRUACIÓ si no hi ha implantació?", "opts": ["Miometri", "Endometri", "Cèrvix", "Peritoneu"], "ans": 1, "exp": "L&#39;endometri prolifera per acollir l&#39;embrió; si no hi ha fecundació es descama originant la regla."}, {"q": "Quin és l&#39;ÚNIC mètode anticonceptiu que protegeix eficaçment alhora d&#39;embarassos no planificats i d&#39;Infeccions de Transmissió Sexual (ITS)?", "opts": ["La píndola hormonal", "El preservatiu (masculí o femení)", "El DIU de coure", "La marxa enrere (coit interromput)"], "ans": 1, "exp": "El preservatiu actua com a barrera física impenetrable per a fluids i patògens."}, {"q": "Quin virus és el causant de la sida (Síndrome d&#39;Immunodeficiència Adquirida)?", "opts": ["El Virus de la Grip A", "El VIH (Virus de la Immunodeficiència Humana)", "El Virus de la Varicel·la", "El Papil·lomavirus VPH"], "ans": 1, "exp": "El VIH ataca els limfòcits T CD4+ debilitant les defenses del cos humà."}]'>
        <div class="sq-hud-bar">
          <span class="sq-score-pill">Puntuació: <strong class="sq-score-val">0</strong></span>
          <span class="sq-round-pill">Pregunta <span class="sq-cur-round">1</span>/5</span>
          <span class="sq-streak-pill">Ratxa: <strong class="sq-streak-val">🔥 0</strong></span>
        </div>
        <div class="sq-timer-track"><div class="sq-timer-bar"></div></div>
        <div class="sq-main-play-area">
          <div class="sq-question-box"><h4 class="sq-question-text">Carregant pregunta...</h4></div>
          <div class="sq-options-grid"></div>
        </div>
        <div class="sq-feedback-row" style="display: none;">
          <p class="sq-explanation-text"></p>
          <button class="sq-btn-next" onclick="nextSpeedQuizQuestion(this.closest('.pdi-activity-card'))">Següent Pregunta ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <h4>🎉 Repte Finalitzat!</h4>
          <p class="sq-final-score"></p>
          <button class="sq-btn-restart" onclick="restartSpeedQuiz(this.closest('.pdi-activity-card'))">🔄 Tornar a Jugar</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat09-3 (intrus) -->
    <div class="pdi-activity-card" id="act-nat09-3" data-unit="nat09" data-title="Troba l'Intrús Reproductiu" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #db2777;">UD9 · R3 · Troba l'Intrús Reproductiu</span>
        <h3>🕵️ Detecta l'Òrgan o Infecció Discordant</h3>
      </div>
      <div class="pdi-intrus-container" data-rounds='[{"theme": "Òrgans i estructures de l&#39;Aparell Reproductor FEMENÍ", "cards": [{"t": "Ovaris (gònades femenines)", "intrus": false, "why": "Produeixen òvuls, estrògens i progesterona."}, {"t": "Úter o matriu", "intrus": false, "why": "Òrgan muscular on es desenvolupa el fetus."}, {"t": "Pròstata i vesícules seminals", "intrus": true, "why": "INTRÚS! Són glàndules de l&#39;aparell reproductor MASCULÍ que formen el líquid seminal."}, {"t": "Trompes de Fal·lopi", "intrus": false, "why": "Conductes que comuniquen els ovaris amb l&#39;úter."}]}, {"theme": "Infeccions de Transmissió Sexual (ITS) transmissibles per relacions sense protecció", "cards": [{"t": "Clamídia (infecció bacteriana)", "intrus": false, "why": "ITS molt freqüent sovint asimptomàtica."}, {"t": "Sífilis (Treponema pallidum)", "intrus": false, "why": "ITS bacteriana amb lesions ulceroses."}, {"t": "Varicel·la infantil comuna", "intrus": true, "why": "INTRÚS! Es transmet per via aèria respiratòria, no és una ITS."}, {"t": "Gonorrea o gonocòccia", "intrus": false, "why": "ITS bacteriana amb secreció purulenta."}]}]'>
        <div class="intrus-hud">
          <span class="intrus-round-badge">Ronda <span class="intrus-cur-round">1</span>/2</span>
          <span class="intrus-theme-badge">Grup: <strong class="intrus-theme-title">Carregant...</strong></span>
        </div>
        <p class="intrus-inst">Toca la targeta que no compleix el criteri del grup:</p>
        <div class="intrus-grid"></div>
        <div class="intrus-fb-panel" style="display: none;">
          <div class="intrus-fb-text"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound(this.closest('.pdi-activity-card'))">Següent Ronda ➔</button>
        </div>
      </div>
    </div>
    


    <!-- act-nat09-4 (keypad) -->
    <div class="pdi-activity-card" id="act-nat09-4" data-unit="nat09" data-title="Càlcul de Fases del Cicle" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #db2777;">UD9 · R4 · Cronologia del Cicle Menstrual</span>
        <h3>🔢 Fases del Cicle Ovaric i Gestació</h3>
      </div>
      <div class="pdi-keypad-container" data-problems='[{"problem": "En un cicle menstrual regular estàndard de 28 dies, el dia 1 comença la menstruació. En quin dia del cicle es produeix habitualment l&#39;OVULACIÓ (alliberament de l&#39;òvul)?", "solution": "14", "unit": "dia", "tolerance": 0.5, "exp": "En un cicle de 28 dies, l&#39;ovulació té lloc al voltant del dia 14."}, {"problem": "Els espermatozoides poden sobreviure dins l&#39;aparell genital femení fins a 72 hores (3 dies) i l&#39;òvul viu unes 24 hores (1 dia). Quants dies dura la finestra de fertilitat màxima al voltant de l&#39;ovulació (3 dies abans + dia de l&#39;ovulació + 1 dia després)?", "solution": "5", "unit": "dies", "tolerance": 0.5, "exp": "La finestra fèrtil s&#39;estén aproximadament 5 dies al voltant de la meitat del cicle."}, {"problem": "L&#39;embaràs humà a terme té una durada mitjana de 40 setmanes de gestació. Quants mesos complets de gestació equivalen aproximadament aquestes 40 setmanes?", "solution": "9", "unit": "mesos", "tolerance": 0.5, "exp": "40 setmanes equivalen a aproximadament 9 mesos de calendari (280 dies)."}]'>
        <div class="keypad-layout">
          <div class="keypad-problem-panel">
            <div class="keypad-prob-header"><span class="prob-num">Problema <span class="cur-prob-num">1</span>/3</span></div>
            <div class="prob-statement-box"><p class="prob-statement"></p></div>
            <div class="keypad-display-wrapper">
              <div class="keypad-display"><span class="display-val">0</span> <span class="display-unit"></span></div>
              <button class="btn-kp-clear" onclick="pressKeypad(this, 'C')">C</button>
              <button class="btn-kp-back" onclick="pressKeypad(this, 'DEL')">⌫</button>
            </div>
            <div class="keypad-solution-feedback" style="display: none;"></div>
          </div>
          <div class="keypad-numpad-panel">
            <div class="pdi-numpad-grid">
              <button class="btn-numpad" onclick="pressKeypad(this, '7')">7</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '8')">8</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '9')">9</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '4')">4</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '5')">5</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '6')">6</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '1')">1</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '2')">2</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '3')">3</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '0')">0</button>
              <button class="btn-numpad" onclick="pressKeypad(this, '.')">.</button>
              <button class="btn-numpad btn-kp-enter" onclick="checkKeypad(this.closest('.pdi-activity-card'))">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <!-- act-nat09-5 (connect) -->
    <div class="pdi-activity-card" id="act-nat09-5" data-unit="nat09" data-title="Connecta Patògens i ITS" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #db2777;">UD9 · R5 · Infeccions de Transmissió Sexual</span>
        <h3>🔗 Connecta el Patogen amb la seua ITS Corresponent</h3>
      </div>
      <div class="pdi-connect-container" data-pairs='[{"left": "VIH (Virus Immunodeficiència Humana)", "right": "Sida (destrucció progressiva de les defenses immunitàries)"}, {"left": "VPH (Virus del Papil·loma Humà)", "right": "Berrugues genitals i risc de càncer de coll d&#39;úter (previngut per vacuna)"}, {"left": "Bacteri Treponema pallidum", "right": "Sífilis (xancres inicials i lesions sistèmiques)"}, {"left": "Fong Candida albicans", "right": "Candidiasi genital (picor intensa i flux blanquinós grumós)"}]'>
        <div class="connect-hud">
          <span class="connect-score">Parelles: <strong class="connect-score-val">0 / 4</strong></span>
          <button class="btn-restart-connect" onclick="restartConnectActivity(this.closest('.pdi-activity-card'))">🔄 Reiniciar</button>
        </div>
        <p class="connect-inst">Toca el patogen a l'esquerra i la seua infecció ITS a la dreta:</p>
        <div class="connect-grid-wrapper">
          <div class="connect-column col-left"></div>
          <div class="connect-column col-right"></div>
        </div>
        <div class="connect-final-feedback" style="display: none;"></div>
      </div>
    </div>
    


    <!-- act-nat09-6 (case) -->
    <div class="pdi-activity-card" id="act-nat09-6" data-unit="nat09" data-title="Cas Consulta Jove" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #db2777;">UD9 · R6 · Salut Afectivosexual</span>
        <h3>🛠️ Cas Pràctic · Responsabilitat, Consentiment i Prevenció d'ITS</h3>
      </div>
      <div class="pdi-case-container" data-scenarios='[{"context": "Un grup de joves debat sobre mètodes de protecció per a les relacions afectivosexuals. Un d&#39;ells afirma erròniament que la píndola anticonceptiva o &#39;marxa enrere&#39; protegeixen contra malalties.", "question": "Com s&#39;ha d&#39;aclarir amb rigor científic la realitat preventiva?", "options": [{"text": "Explicar que només el preservatiu ofereix &#39;doble protecció&#39;: evita embarassos no planificats i protegeix contra totes les ITS", "correct": true, "exp": "Correcte! La píndola només regula hormones per evitar ovulació però no atura cap virus ni bacteri."}, {"text": "Dir que cap mètode funciona", "correct": false, "exp": "Fals: el preservatiu té més del 98% d&#39;eficàcia amb ús correcte."}, {"text": "Recomanar rentar-se amb sabó després", "correct": false, "exp": "Inútil per prevenir ITS."}]}, {"context": "Davant d&#39;una fallada del preservatiu (trencament durant la relació) i per prevenir un embaràs no desitjat:", "question": "Quina solució sanitària d&#39;urgència existeix i com s&#39;ha de prendre?", "options": [{"text": "Prendre la píndola d&#39;anticoncepció d&#39;urgència (del dia després) el més aviat possible (abans de 72 h) acudint al centre de salut o farmàcia", "correct": true, "exp": "Molt bé! Retarda l&#39;ovulació i la seua eficàcia és màxima en les primeres 24 hores (és un recurs d&#39;urgència, no d&#39;ús habitual)."}, {"text": "Esperar tres setmanes a veure si baixa la regla", "correct": false, "exp": "Perdria completament l&#39;efectivitat de l&#39;anticoncepció d&#39;urgència."}, {"text": "Prendre un refresc amb llimona", "correct": false, "exp": "Mite absurd sense base mèdica."}]}, {"context": "Si una persona jove té dubtes o sospita que ha estat exposada a una possible ITS (coïssor, secreció estranya):", "question": "A quin recurs sanitari públic confidencial i gratuït pot acudir?", "options": [{"text": "Al Centre de Salut d&#39;Atenció Primària o a la Unitat de Salut Sexual i Reproductiva (Centres Joves de Salut)", "correct": true, "exp": "Exacte! L&#39;atenció és confidencial, professional, gratuïta i inclou proves diagnòstiques i tractament."}, {"text": "Comprar medicaments desconeguts per internet", "correct": false, "exp": "Perillós per a la salut i sense diagnòstic."}, {"text": "Demanar consell a xarxes socials i no anar al metge", "correct": false, "exp": "Propaga desinformació greu."}]}]'>
        <div class="case-header">
          <span class="case-step-pill">Decisió <span class="case-cur-step">1</span>/3</span>
          <span class="case-title-badge">Salut Jove</span>
        </div>
        <div class="case-body-area">
          <div class="case-situation-box"><p class="case-context-text"></p></div>
          <div class="case-challenge-box"><h4 class="case-question-text"></h4><div class="case-options-list"></div></div>
        </div>
        <div class="case-feedback-panel" style="display: none;">
          <div class="case-fb-message"></div>
          <button class="btn-case-next" onclick="nextCaseScenario(this.closest('.pdi-activity-card'))">Següent Decisió ➔</button>
        </div>
        <div class="case-final-summary" style="display: none;">
          <h4>🏆 Assessorament Sanitari Correcte!</h4>
          <p class="case-summary-score"></p>
          <button class="btn-case-restart" onclick="restartCaseActivity(this.closest('.pdi-activity-card'))">🔄 Repetir Cas</button>
        </div>
      </div>
    </div>
    
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

/* ==========================================================================
   ESTILS ESPECÍFICS PER A REPTES DE CIÈNCIES NATURALS (PDI)
   ========================================================================== */

/* 1. CLASSIFICACIÓ PER CATEGORIES (BUCKETS) */
.pdi-cat-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}
@media (min-width: 768px) {
  .pdi-cat-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .pdi-cat-source-pool {
    grid-column: span 3;
  }
}
.pdi-cat-bucket {
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  transition: all 0.2s ease;
}
.pdi-cat-bucket.drag-over {
  border-color: #059669;
  background: #ecfdf5;
}
.pdi-cat-bucket .bucket-header {
  padding: 0.75rem 1rem;
  text-align: center;
}
.pdi-cat-bucket .bucket-header h4 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
}
.bucket-drop-zone {
  flex: 1;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 140px;
}
.pdi-cat-source-pool {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  min-height: 80px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
}
.pdi-cat-card {
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 10px;
  padding: 0.55rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  cursor: grab;
  box-shadow: 0 2px 5px rgba(0,0,0,0.04);
  transition: all 0.15s ease;
  user-select: none;
}
.pdi-cat-card:active {
  cursor: grabbing;
}
.pdi-cat-card.cat-selected {
  outline: 3px solid #2563eb;
  border-color: #2563eb;
  transform: scale(1.03);
}
.pdi-cat-card.cat-success {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #065f46 !important;
}
.pdi-cat-card.cat-error {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #991b1b !important;
}
.pdi-act-footer {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.btn-check-act {
  background: #059669;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
  transition: all 0.2s ease;
}
.btn-check-act:hover {
  background: #047857;
  transform: translateY(-2px);
}
.act-feedback-msg {
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  font-size: 0.95rem;
  text-align: center;
  width: 100%;
  max-width: 600px;
  display: none;
}
.act-feedback-msg.correct {
  display: block;
  background: #ecfdf5;
  border: 1px solid #10b981;
  color: #065f46;
}
.act-feedback-msg.error {
  display: block;
  background: #fef2f2;
  border: 1px solid #ef4444;
  color: #991b1b;
}
.act-feedback-msg.warning {
  display: block;
  background: #fffbeb;
  border: 1px solid #f59e0b;
  color: #92400e;
}

/* 2. SPEED QUIZ (4 OPCIONS) */
.sq-hud-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
}
.sq-score-pill, .sq-round-pill, .sq-streak-pill {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
}
.sq-timer-track {
  height: 6px;
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  overflow: hidden;
}
.sq-timer-bar {
  height: 100%;
  background: #10b981;
  width: 0%;
  transition: width 0.3s ease;
}
.sq-question-box {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.25rem;
}
.sq-question-text {
  margin: 0;
  font-size: 1.2rem;
  color: #0f172a;
  line-height: 1.45;
}
.sq-options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}
@media (min-width: 640px) {
  .sq-options-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.sq-btn-opt {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #1e293b;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}
.sq-btn-opt:hover:not(:disabled) {
  border-color: #059669;
  background: #f0fdf4;
  transform: translateY(-2px);
}
.sq-btn-opt .opt-badge {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  font-weight: 800;
  padding: 0.3rem 0.65rem;
  border-radius: 8px;
  font-size: 0.9rem;
}
.sq-btn-opt.correct {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #065f46 !important;
}
.sq-btn-opt.wrong {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #991b1b !important;
}
.sq-feedback-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-top: 1.25rem;
}
.sq-explanation-text {
  margin: 0;
  font-size: 0.95rem;
  color: #334155;
  flex: 1;
}
.sq-btn-next {
  background: #059669;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.65rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
}
.sq-summary-box {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 16px;
  padding: 2.5rem 1.5rem;
  text-align: center;
}
.sq-btn-restart {
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.75rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
}

/* 3. TROBA L'INTRÚS */
.intrus-hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.intrus-round-badge, .intrus-theme-badge {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
}
.intrus-inst {
  font-size: 0.95rem;
  color: #64748b;
  margin-bottom: 1rem;
}
.intrus-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
}
@media (min-width: 640px) {
  .intrus-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.intrus-card-btn {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.15rem 1.25rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}
.intrus-card-btn:hover {
  border-color: #059669;
  background: #f0fdf4;
  transform: translateY(-2px);
}
.intrus-card-btn.intrus-hit {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
}
.intrus-card-btn.intrus-miss {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  animation: pdi-shake 0.4s ease;
}
.intrus-fb-panel {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-top: 1.25rem;
}
.btn-intrus-next {
  align-self: flex-start;
  background: #059669;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.65rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
}

/* 4. CÀLCUL TÀCTIL (KEYPAD) */
.keypad-layout {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
@media (min-width: 768px) {
  .keypad-layout {
    flex-direction: row;
    align-items: flex-start;
  }
  .keypad-problem-panel {
    flex: 1;
  }
  .keypad-numpad-panel {
    width: 270px;
  }
}
.keypad-prob-header {
  margin-bottom: 0.65rem;
}
.prob-num {
  font-weight: 700;
  color: #059669;
  font-size: 0.95rem;
}
.prob-statement-box {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: #1e293b;
  line-height: 1.45;
}
.prob-statement {
  margin: 0;
}
.keypad-display-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.keypad-display {
  flex: 1;
  background: #0f172a;
  color: #38bdf8;
  font-family: monospace;
  font-size: 1.6rem;
  font-weight: 800;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  text-align: right;
  letter-spacing: 0.05em;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.4);
}
.display-unit {
  font-size: 1rem;
  color: #94a3b8;
  margin-left: 0.4rem;
}
.btn-kp-clear, .btn-kp-back {
  background: #e2e8f0;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0.85rem 1.1rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-kp-clear:hover, .btn-kp-back:hover {
  background: #cbd5e1;
}
.pdi-numpad-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.btn-numpad {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 1rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;
  cursor: pointer;
  transition: all 0.15s ease;
}
.btn-numpad:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}
.btn-numpad:active {
  transform: scale(0.96);
}
.btn-kp-enter {
  background: #10b981 !important;
  color: #ffffff !important;
  border-color: #059669 !important;
}
.btn-kp-enter:hover {
  background: #059669 !important;
}
.keypad-solution-feedback {
  padding: 0.85rem 1.1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  margin-top: 1rem;
}
.keypad-solution-feedback.correct {
  background: #ecfdf5;
  border: 1px solid #10b981;
  color: #065f46;
}
.keypad-solution-feedback.wrong {
  background: #fef2f2;
  border: 1px solid #ef4444;
  color: #991b1b;
}

/* 5. CONNECTA PARELLES */
.connect-hud {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
}
.connect-score {
  font-weight: 700;
  font-size: 1rem;
  color: #334155;
}
.btn-restart-connect {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.4rem 0.85rem;
  font-weight: 600;
  cursor: pointer;
}
.connect-inst {
  font-size: 0.95rem;
  color: #64748b;
  margin-bottom: 1rem;
}
.connect-grid-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) {
  .connect-grid-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
.connect-column {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.connect-tile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.9rem 1.1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}
.connect-tile:hover:not(.matched) {
  border-color: #059669;
  background: #f0fdf4;
}
.connect-tile.selected {
  border-color: #2563eb !important;
  background: #eff6ff !important;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.25);
}
.connect-tile.matched {
  border-color: #10b981 !important;
  background: #ecfdf5 !important;
  color: #065f46 !important;
  opacity: 0.75;
  pointer-events: none;
}
.connect-tile.wrong {
  border-color: #ef4444 !important;
  background: #fef2f2 !important;
  color: #991b1b !important;
  animation: pdi-shake 0.4s ease;
}
.connect-final-feedback {
  background: #ecfdf5;
  border: 1px solid #10b981;
  color: #065f46;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 1.25rem;
  text-align: center;
}

/* 6. CASOS PRÀCTICS (CASE) */
.case-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.case-step-pill {
  background: #059669;
  color: #ffffff;
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 800;
}
.case-title-badge {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  padding: 0.3rem 0.85rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}
.case-body-area {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.case-situation-box {
  background: #f8fafc;
  border-left: 4px solid #059669;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #334155;
  line-height: 1.5;
}
.case-challenge-box h4 {
  margin: 0 0 0.85rem 0;
  font-size: 1.15rem;
  color: #0f172a;
}
.case-options-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.btn-case-opt {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.9rem 1.15rem;
  font-size: 1rem;
  color: #1e293b;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}
.btn-case-opt:hover {
  border-color: #059669;
  background: #f0fdf4;
}
.case-opt-letter {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
}
.btn-case-opt.correct {
  background: #ecfdf5 !important;
  border-color: #10b981 !important;
  color: #065f46 !important;
}
.btn-case-opt.wrong {
  background: #fef2f2 !important;
  border-color: #ef4444 !important;
  color: #991b1b !important;
}
.case-feedback-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-top: 1rem;
}
.case-fb-message {
  flex: 1;
  font-size: 0.95rem;
  color: #334155;
}
.btn-case-next {
  background: #059669;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.65rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
}
.case-final-summary {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  text-align: center;
  margin-top: 1rem;
}
.btn-case-restart {
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1.75rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 0.75rem;
}

@keyframes pdi-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  75% { transform: translateX(6px); }
}

</style>

<!-- INCLUSIÓ DEL MOTOR JAVASCRIPT EXTERN -->

<script src="{{ 'pissarra-naturals.js' | relative_url }}?v=1"></script>

<!-- INCLUSIÓ DEL MOTOR JAVASCRIPT EXTERN -->
<script src="./pissarra-naturals.js?v=3"></script>
