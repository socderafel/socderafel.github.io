---
layout: default
title: "Pissarra Digital Interactiva — Ciències Aplicades I"
course_root: "."
badge: "Pissarra Digital (PDI) · 1r FPB"
---

# 🎯 Pissarra Digital Interactiva: Arrastrar i Soltar (PDI)

<div class="pdi-intro-card">
  <div class="pdi-intro-header">
    <span class="pdi-badge">PDI & Tauletes</span>
    <span class="pdi-badge-pwa">📱 App Autònoma CA1</span>
    <span class="pdi-badge-count" style="background:#0284c7;color:#fff;font-weight:800;font-size:0.8rem;padding:4px 12px;border-radius:50px;">45 Reptes Interactius</span>
  </div>
  <p>Espai d'activitats tàctils i manipulatives dissenyat exclusivament per a <strong>Ciències Aplicades I (1r FPB)</strong>. Pensat per a <strong>treballar a la pissarra digital de l'aula</strong> amb tot el grup o des de <strong>tauletes i mòbils</strong>. Tria la unitat i el repte, arrossega amb el dit o toca per a seleccionar i col·locar!</p>
  
  <div class="pdi-toolbar">
    <button class="btn-pdi-tool" id="btn-fullscreen-toggle" onclick="togglePDIFullscreen()">
      <span class="tool-icon">🖥️</span>
      <span class="tool-text">Mode Pissarra Completa</span>
    </button>
    <button class="btn-pdi-tool" id="btn-sound-toggle" onclick="togglePDISound()">
      <span class="tool-icon" id="sound-icon">🔊</span>
      <span class="tool-text" id="sound-text">So Activat</span>
    </button>
    <button class="btn-pdi-tool" id="btn-scale-toggle" onclick="cyclePDIScale()" title="Ajustar mida dels elements a la pantalla">
      <span class="tool-icon">🔍</span>
      <span class="tool-text" id="scale-text">Mida: Auto</span>
    </button>
    <button class="btn-pdi-tool btn-pdi-reset" onclick="resetCurrentPDIActivity()">
      <span class="tool-icon">🔄</span>
      <span class="tool-text">Següent Alumne / Barallar</span>
    </button>
  </div>
</div>

<!-- Selector d'Unitats PDI -->
<div class="pdi-unit-nav-wrap">
  <span class="pdi-nav-label">1. Tria la Unitat Didàctica:</span>
  <div class="pdi-unit-pills">
    <button class="pdi-pill active" onclick="selectPDIUnit('ud1')">UD1 Naturals</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud2')">UD2 Nutrició</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud3')">UD3 Enters</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud4')">UD4 Divisibilitat</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud5')">UD5 Fraccions</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud6')">UD6 Univers</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud7')">UD7 Geosfera</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud8')">UD8 Atmosfera</button>
    <button class="pdi-pill" onclick="selectPDIUnit('ud9')">UD9 Hidrosfera</button>
  </div>
</div>

<!-- Selector de Sub-Reptes per a la Unitat Seleccionada -->
<div class="pdi-subnav-wrap">
  <span class="pdi-nav-label">2. Tria l'Activitat Manipulativa (5 per unitat):</span>
  <div class="pdi-subpills" id="pdi-subpills-container">
    <!-- Es genera dinàmicament per JS segons la unitat activa -->
  </div>
</div>

<!-- CONTENIDORS D'ACTIVITATS -->
<div class="pdi-board-container" id="pdi-board-container">
  <div class="pdi-activity-card" id="act-ud1-1" data-unit="ud1" data-title="Repte 1: Jerarquia">
    <div class="pdi-act-title"><span class="act-num">UD1 · Repte 1</span><h3>🔢 Ordena el Viatge de la Jerarquia d'Operacions</h3></div>
    <p class="pdi-instruction">Arrossega els passos en l'ordre matemàtic correcte per a calcular: <strong>3 + 2 × (5 - 1)²</strong></p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Multiplicar: 2 × 16 = 32</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Resoldre el parèntesi: (5 - 1) = 4</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Sumar al final: 3 + 32 = 35</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Elevar la potència: 4² = 16</div>
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

  <div class="pdi-activity-card" id="act-ud1-2" data-unit="ud1" data-title="Repte 2: Potències">
    <div class="pdi-act-title"><span class="act-num">UD1 · Repte 2</span><h3>⚡ Emparella cada Potència amb el seu Resultat</h3></div>
    <p class="pdi-instruction">Arrossega cada potència a la caixa del seu resultat exacte:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="8">2³</div>
        <div class="pdi-item num-item" draggable="true" data-cat="25">5²</div>
        <div class="pdi-item num-item" draggable="true" data-cat="81">3⁴</div>
        <div class="pdi-item num-item" draggable="true" data-cat="1000">10³</div>
        <div class="pdi-item num-item" draggable="true" data-cat="49">7²</div>
        <div class="pdi-item num-item" draggable="true" data-cat="64">4³</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="8"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 8</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="25"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 25</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="81"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 81</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="1000"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 1.000</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="49"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 49</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="64"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 64</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud1-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud1-3" data-unit="ud1" data-title="Repte 3: Ordres Unitats">
    <div class="pdi-act-title"><span class="act-num">UD1 · Repte 3</span><h3>🧱 Descomposició en Ordres d'Unitats: 45.827</h3></div>
    <p class="pdi-instruction">Arrossega el valor posicional de cada xifra a la seua posició:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="dm">40.000</div>
        <div class="pdi-item num-item" draggable="true" data-cat="um">5.000</div>
        <div class="pdi-item num-item" draggable="true" data-cat="c">800</div>
        <div class="pdi-item num-item" draggable="true" data-cat="d">20</div>
        <div class="pdi-item num-item" draggable="true" data-cat="u">7</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="dm"><div class="box-header"><span class="box-icon">🟣</span> 4 Desenes de Miler (DM)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="um"><div class="box-header"><span class="box-icon">🔵</span> 5 Unitats de Miler (UM)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="c"><div class="box-header"><span class="box-icon">🟢</span> 8 Centenes (C)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="d"><div class="box-header"><span class="box-icon">🟡</span> 2 Desenes (D)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="u"><div class="box-header"><span class="box-icon">🔴</span> 7 Unitats (U)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud1-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud1-4" data-unit="ud1" data-title="Repte 4: Propietats">
    <div class="pdi-act-title"><span class="act-num">UD1 · Repte 4</span><h3>📐 Propietats de les Operacions Matemàtiques</h3></div>
    <p class="pdi-instruction">Classifica cada exemple algebraic segons la propietat que representa:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="com">5 + 8 = 8 + 5</div>
        <div class="pdi-item" draggable="true" data-cat="com">4 · 7 = 7 · 4</div>
        <div class="pdi-item" draggable="true" data-cat="ass">(2 + 3) + 6 = 2 + (3 + 6)</div>
        <div class="pdi-item" draggable="true" data-cat="ass">(5 · 2) · 4 = 5 · (2 · 4)</div>
        <div class="pdi-item" draggable="true" data-cat="dist">3 · (4 + 5) = 3·4 + 3·5</div>
        <div class="pdi-item" draggable="true" data-cat="neut">9 + 0 = 9 (Suma)</div>
        <div class="pdi-item" draggable="true" data-cat="neut">12 · 1 = 12 (Multiplicació)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="com"><div class="box-header"><span class="box-icon">🔄</span> Propietat Commutativa (L'ordre no altera el resultat)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="ass"><div class="box-header"><span class="box-icon">🔗</span> Propietat Associativa (Agrupació lliure de termes)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="dist"><div class="box-header"><span class="box-icon">✨</span> Propietat Distributiva respecte a la suma</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="neut"><div class="box-header"><span class="box-icon">⚪</span> Element Neutre (El zero en suma, l'u en producte)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud1-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud1-5" data-unit="ud1" data-title="Repte 5: Arrels">
    <div class="pdi-act-title"><span class="act-num">UD1 · Repte 5</span><h3>√ Arrels Quadrades Exactes</h3></div>
    <p class="pdi-instruction">Arrossega cada arrel quadrada exacta al seu valor resolt:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="4">√16</div>
        <div class="pdi-item num-item" draggable="true" data-cat="6">√36</div>
        <div class="pdi-item num-item" draggable="true" data-cat="8">√64</div>
        <div class="pdi-item num-item" draggable="true" data-cat="9">√81</div>
        <div class="pdi-item num-item" draggable="true" data-cat="10">√100</div>
        <div class="pdi-item num-item" draggable="true" data-cat="12">√144</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="4"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 4</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="6"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 6</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="8"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 8</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="9"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 9</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="10"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 10</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="12"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 12</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud1-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Repte 1: Classificar Òrgans">
    <div class="pdi-act-title"><span class="act-num">UD2 · Repte 1</span><h3>🫀 Classifica els Òrgans en el seu Aparell corresponent</h3></div>
    <p class="pdi-instruction">Arrossega cada òrgan a la caixa de l'aparell humà al qual pertany:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="digestiu">Estómac</div>
        <div class="pdi-item" draggable="true" data-cat="respiratori">Pulmons</div>
        <div class="pdi-item" draggable="true" data-cat="circulatori">Cor</div>
        <div class="pdi-item" draggable="true" data-cat="excretor">Ronyons</div>
        <div class="pdi-item" draggable="true" data-cat="digestiu">Intestí prim</div>
        <div class="pdi-item" draggable="true" data-cat="respiratori">Tràquea</div>
        <div class="pdi-item" draggable="true" data-cat="circulatori">Artèries</div>
        <div class="pdi-item" draggable="true" data-cat="excretor">Bufeta urinària</div>
        <div class="pdi-item" draggable="true" data-cat="digestiu">Fetge</div>
        <div class="pdi-item" draggable="true" data-cat="respiratori">Alvèols</div>
        <div class="pdi-item" draggable="true" data-cat="circulatori">Venes</div>
        <div class="pdi-item" draggable="true" data-cat="excretor">Urèters</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="digestiu"><div class="box-header"><span class="box-icon">🍏</span> Aparell Digestiu</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="respiratori"><div class="box-header"><span class="box-icon">🫁</span> Aparell Respiratori</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="circulatori"><div class="box-header"><span class="box-icon">🫀</span> Aparell Circulatori</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="excretor"><div class="box-header"><span class="box-icon">💧</span> Aparell Excretor</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud2-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="Repte 2: Viatge Aliments">
    <div class="pdi-act-title"><span class="act-num">UD2 · Repte 2</span><h3>🥖 Ordena el Viatge dels Aliments pel Tub Digestiu</h3></div>
    <p class="pdi-instruction">Arrossega els òrgans en l'ordre consecutiu que segueix el menjar:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Estómac (suc gàstric i quim)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Boca (masticació i saliva)</div>
        <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Intestí gros (absorció d'aigua i femtes)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Faringe (deglució)</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Intestí prim (absorció de nutrients)</div>
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Esòfag (moviments peristàltics)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Etapa 1</span><span class="slot-hint">Inici: masticació</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Etapa 2</span><span class="slot-hint">Pas comú: faringe</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Etapa 3</span><span class="slot-hint">Tub de baixada</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Etapa 4</span><span class="slot-hint">Quim gàstric</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">Etapa 5</span><span class="slot-hint">Absorció de nutrients</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">Etapa 6</span><span class="slot-hint">Extracció d'aigua i residus</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Repte 3: La Sang i Vasos">
    <div class="pdi-act-title"><span class="act-num">UD2 · Repte 3</span><h3>🩸 Components de la Sang i Vasos Sanguinis</h3></div>
    <p class="pdi-instruction">Arrossega cada element a la seua funció vital:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="oxigen">Glòbuls Roigs (Eritròcits)</div>
        <div class="pdi-item" draggable="true" data-cat="defenses">Glòbuls Blancs (Leucòcits)</div>
        <div class="pdi-item" draggable="true" data-cat="taps">Plaquetes (Trombòcits)</div>
        <div class="pdi-item" draggable="true" data-cat="sortida">Artèries</div>
        <div class="pdi-item" draggable="true" data-cat="retorn">Venes</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="oxigen"><div class="box-header"><span class="box-icon">🔴</span> Transport d'Oxigen (Hemoglobina)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="defenses"><div class="box-header"><span class="box-icon">🛡️</span> Defenses i Immunitat</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="taps"><div class="box-header"><span class="box-icon">🩹</span> Coagulació i Tancament de Ferides</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="sortida"><div class="box-header"><span class="box-icon">💨</span> Condueixen sang des del cor als òrgans</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="retorn"><div class="box-header"><span class="box-icon">🔄</span> Retornen la sang dels òrgans al cor</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud2-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud2-4" data-unit="ud2" data-title="Repte 4: Nivells de Vida">
    <div class="pdi-act-title"><span class="act-num">UD2 · Repte 4</span><h3>🔬 Ordena els Nivells d'Organització Biològica</h3></div>
    <p class="pdi-instruction">Arrossega els nivells ordenant-los des del més senzill fins al més complex:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Cèl·lula (unitat viva fonamental)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Àtom (partícula química bàsica)</div>
        <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Organisme humà complet</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Teixit (grup de cèl·lules iguals)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Molècula (aigua, glucosa, proteïna)</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Òrgan (cor, estómac, ronyó)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Nivell 1</span><span class="slot-hint">Nivell químic subatòmic</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Nivell 2</span><span class="slot-hint">Unió d'àtoms</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Nivell 3</span><span class="slot-hint">1r nivell amb vida pròpia</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Nivell 4</span><span class="slot-hint">Conjunt especialitzat</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">Nivell 5</span><span class="slot-hint">Estructura amb funció concreta</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">Nivell 6</span><span class="slot-hint">Ésser viu complet</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud2-5" data-unit="ud2" data-title="Repte 5: Nutrients">
    <div class="pdi-act-title"><span class="act-num">UD2 · Repte 5</span><h3>🥗 Els Nutrients i la seua Funció a la Dieta</h3></div>
    <p class="pdi-instruction">Classifica cada aliment o substància en el seu grup de nutrients principal:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="glu">Pasta, arròs i pa</div>
        <div class="pdi-item" draggable="true" data-cat="lip">Oli d'oliva i mantega</div>
        <div class="pdi-item" draggable="true" data-cat="pro">Ous, pollastre i llegums</div>
        <div class="pdi-item" draggable="true" data-cat="vit">Taronja i fruites fresques</div>
        <div class="pdi-item" draggable="true" data-cat="glu">Sucre i mel (Glucosa)</div>
        <div class="pdi-item" draggable="true" data-cat="pro">Peix blau i formatge fresc</div>
        <div class="pdi-item" draggable="true" data-cat="vit">Espinacs i verdures de fulla</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="glu"><div class="box-header"><span class="box-icon">⚡</span> Glúcids (Energia ràpida per a treballar)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="lip"><div class="box-header"><span class="box-icon">🥑</span> Lípids (Reserva d'energia i aïllant tèrmic)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="pro"><div class="box-header"><span class="box-icon">💪</span> Proteïnes (Construcció de múscul i reparació)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="vit"><div class="box-header"><span class="box-icon">🥕</span> Vitamines i Minerals (Regulació i salut)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud2-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud3-1" data-unit="ud3" data-title="Repte 1: Positiu o Negatiu">
    <div class="pdi-act-title"><span class="act-num">UD3 · Repte 1</span><h3>➕➖ Nombres Enters a la Vida Real: Positius o Negatius?</h3></div>
    <p class="pdi-instruction">Arrossega cada situació quotidiana al contenidor corresponent:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="positiu">Pujar al 3r pis de l'institut (+3)</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Baixar al soterrani -2 del pàrquing (-2)</div>
        <div class="pdi-item" draggable="true" data-cat="positiu">Ingressar 50 € a la llibreta (+50)</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Deure 20 € a un amic (-20)</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Temperatura de 5 °C sota zero (-5)</div>
        <div class="pdi-item" draggable="true" data-cat="positiu">Cim d'una muntanya a 850 m (+850)</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Submarí a 60 m sota el mar (-60)</div>
        <div class="pdi-item" draggable="true" data-cat="positiu">Pujar 15 graus la calefacció (+15)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="positiu"><div class="box-header"><span class="box-icon">🟢</span> Nombres Positius (+)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="negatiu"><div class="box-header"><span class="box-icon">🔴</span> Nombres Negatius (-)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Repte 2: Recta Numèrica">
    <div class="pdi-act-title"><span class="act-num">UD3 · Repte 2</span><h3>📏 Ordena els Nombres Enters de Menor a Major</h3></div>
    <p class="pdi-instruction">Arrossega ordenant estrictament de menor a major:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-order="5"><span class="item-handle">☰</span> +3</div>
        <div class="pdi-item num-item" draggable="true" data-order="1"><span class="item-handle">☰</span> -9</div>
        <div class="pdi-item num-item" draggable="true" data-order="6"><span class="item-handle">☰</span> +8</div>
        <div class="pdi-item num-item" draggable="true" data-order="3"><span class="item-handle">☰</span> -2</div>
        <div class="pdi-item num-item" draggable="true" data-order="2"><span class="item-handle">☰</span> -5</div>
        <div class="pdi-item num-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 0</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Més petit</span><span class="slot-hint">Cota més negativa</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2n</span><span class="slot-hint">Negatiu intermedi</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3r</span><span class="slot-hint">Negatiu pròxim a zero</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4t</span><span class="slot-hint">Zero</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5è</span><span class="slot-hint">Positiu xicotet</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">Més gran</span><span class="slot-hint">Major nombre positiu</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Repte 3: Regla Signes">
    <div class="pdi-act-title"><span class="act-num">UD3 · Repte 3</span><h3>✖️➗ La Regla dels Signes en Multiplicació i Divisió</h3></div>
    <p class="pdi-instruction">Arrossega cada operació al seu resultat exacte:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="p12">(-3) · (-4)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="m12">(+6) · (-2)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="m5">(-15) : (+3)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="p5">(-20) : (-4)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="p12"><div class="box-header"><span class="box-icon">🟢</span> Resultat: +12</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="m12"><div class="box-header"><span class="box-icon">🔴</span> Resultat: -12</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="p5"><div class="box-header"><span class="box-icon">🟢</span> Resultat: +5</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="m5"><div class="box-header"><span class="box-icon">🔴</span> Resultat: -5</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud3-4" data-unit="ud3" data-title="Repte 4: Suma i Resta">
    <div class="pdi-act-title"><span class="act-num">UD3 · Repte 4</span><h3>🧮 Sumes i Restes de Nombres Enters</h3></div>
    <p class="pdi-instruction">Resol mentalment i emparella cada càlcul amb el seu valor final:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="p4">(-6) + (+10)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="m4">(+2) - (+6)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="m7">(-3) - (+4)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="p7">(+12) + (-5)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="p4"><div class="box-header"><span class="box-icon">🎯</span> Resultat: +4</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="m4"><div class="box-header"><span class="box-icon">🎯</span> Resultat: -4</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="p7"><div class="box-header"><span class="box-icon">🎯</span> Resultat: +7</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="m7"><div class="box-header"><span class="box-icon">🎯</span> Resultat: -7</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud3-5" data-unit="ud3" data-title="Repte 5: Valor Absolut">
    <div class="pdi-act-title"><span class="act-num">UD3 · Repte 5</span><h3>📐 Valor Absolut |x| i Nombre Oposat</h3></div>
    <p class="pdi-instruction">Classifica segons si el resultat és 6 o és 9:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="v6">|-6|</div>
        <div class="pdi-item num-item" draggable="true" data-cat="v6">|+6|</div>
        <div class="pdi-item num-item" draggable="true" data-cat="v6">Oposat de (-6)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="v9">|-9|</div>
        <div class="pdi-item num-item" draggable="true" data-cat="v9">|+9|</div>
        <div class="pdi-item num-item" draggable="true" data-cat="v9">Oposat de (-9)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="v6"><div class="box-header"><span class="box-icon">🔵</span> Dóna com a valor final 6</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="v9"><div class="box-header"><span class="box-icon">🟣</span> Dóna com a valor final 9</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud4-1" data-unit="ud4" data-title="Repte 1: Primers / Compostos">
    <div class="pdi-act-title"><span class="act-num">UD4 · Repte 1</span><h3>⭐ Nombres Primers vs Nombres Compostos</h3></div>
    <p class="pdi-instruction">Arrossega cada nombre a la seua categoria:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="primer">2</div>
        <div class="pdi-item num-item" draggable="true" data-cat="compost">4</div>
        <div class="pdi-item num-item" draggable="true" data-cat="primer">5</div>
        <div class="pdi-item num-item" draggable="true" data-cat="compost">6</div>
        <div class="pdi-item num-item" draggable="true" data-cat="primer">7</div>
        <div class="pdi-item num-item" draggable="true" data-cat="compost">9</div>
        <div class="pdi-item num-item" draggable="true" data-cat="primer">11</div>
        <div class="pdi-item num-item" draggable="true" data-cat="compost">12</div>
        <div class="pdi-item num-item" draggable="true" data-cat="primer">13</div>
        <div class="pdi-item num-item" draggable="true" data-cat="compost">15</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="primer"><div class="box-header"><span class="box-icon">⭐</span> Nombres Primers (Només 2 divisors: l'1 i ell mateix)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="compost"><div class="box-header"><span class="box-icon">📦</span> Nombres Compostos (Tenen més de 2 divisors)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud4-2" data-unit="ud4" data-title="Repte 2: Criteris Divisibilitat">
    <div class="pdi-act-title"><span class="act-num">UD4 · Repte 2</span><h3>🎯 Criteris de Divisibilitat: Per 2, per 3 o per 5?</h3></div>
    <p class="pdi-instruction">Arrossega cada nombre a la caixa del criteri que compleix:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="div2">18</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div3">27</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div5">35</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div2">44</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div3">51</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div5">75</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="div2"><div class="box-header"><span class="box-icon">2️⃣</span> Divisible per 2 (Acaba en xifra parell)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="div3"><div class="box-header"><span class="box-icon">3️⃣</span> Divisible per 3 (La suma de xifres és múltiple de 3)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="div5"><div class="box-header"><span class="box-icon">5️⃣</span> Divisible per 5 (Acaba en 0 o en 5)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud4-3" data-unit="ud4" data-title="Repte 3: Múltiples vs Divisors">
    <div class="pdi-act-title"><span class="act-num">UD4 · Repte 3</span><h3>🔄 Múltiples vs Divisors del Nombre 12</h3></div>
    <p class="pdi-instruction">Classifica aquests nombres segons la seua relació amb el 12:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="mult">24 (12 · 2)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div">3 (12 : 3 = 4)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="mult">36 (12 · 3)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div">4 (12 : 4 = 3)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="mult">60 (12 · 5)</div>
        <div class="pdi-item num-item" draggable="true" data-cat="div">6 (12 : 6 = 2)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="mult"><div class="box-header"><span class="box-icon">📈</span> Múltiples de 12 (Resultat de multiplicar 12 per un enter)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="div"><div class="box-header"><span class="box-icon">📉</span> Divisors de 12 (Divideixen exactament a 12 sense residu)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud4-4" data-unit="ud4" data-title="Repte 4: Factors Primers">
    <div class="pdi-act-title"><span class="act-num">UD4 · Repte 4</span><h3>🧩 Descomposició Factorial en Factors Primers</h3></div>
    <p class="pdi-instruction">Emparella cada nombre amb el seu producte de factors primers:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="n12">2² · 3</div>
        <div class="pdi-item num-item" draggable="true" data-cat="n18">2 · 3²</div>
        <div class="pdi-item num-item" draggable="true" data-cat="n20">2² · 5</div>
        <div class="pdi-item num-item" draggable="true" data-cat="n50">2 · 5²</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="n12"><div class="box-header"><span class="box-icon">🎯</span> És la descomposició de: 12</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="n18"><div class="box-header"><span class="box-icon">🎯</span> És la descomposició de: 18</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="n20"><div class="box-header"><span class="box-icon">🎯</span> És la descomposició de: 20</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="n50"><div class="box-header"><span class="box-icon">🎯</span> És la descomposició de: 50</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud4-5" data-unit="ud4" data-title="Repte 5: MCD o MCM?">
    <div class="pdi-act-title"><span class="act-num">UD4 · Repte 5</span><h3>🤔 En quin Problema usem MCD o MCM?</h3></div>
    <p class="pdi-instruction">Classifica cada situació problemàtica segons quina eina cal aplicar per a resoldre-la:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="mcd">Tallar dues cordes de 18 m i 24 m en trossos iguals el més llargs possible</div>
        <div class="pdi-item" draggable="true" data-cat="mcm">Dos autobusos ixen a la vegada i passen cada 15 min i cada 20 min. Quan tornaran a coincidir?</div>
        <div class="pdi-item" draggable="true" data-cat="mcd">Fer paquets iguals de caramels sense que en sobre cap</div>
        <div class="pdi-item" draggable="true" data-cat="mcm">Dos fars marítims parpellegen cada 6 segons i cada 8 segons. Quan s'encendran alhora?</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="mcd"><div class="box-header"><span class="box-icon">✂️</span> Màxim Comú Divisor (MCD) — Repartir / tallar en màxima mida</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="mcm"><div class="box-header"><span class="box-icon">⏰</span> Mínim Comú Múltiple (MCM) — Coincidència de temps o cicles</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud5-1" data-unit="ud5" data-title="Repte 1: Tipus Fraccions">
    <div class="pdi-act-title"><span class="act-num">UD5 · Repte 1</span><h3>🍰 Tipus de Fraccions: Pròpies, Impròpies o Iguals a 1</h3></div>
    <p class="pdi-instruction">Arrossega cada fracció al seu calaix segons el seu valor respecte a la unitat:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item frac-item" draggable="true" data-cat="propia"><sup>1</sup>/<sub>2</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="impropia"><sup>5</sup>/<sub>3</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="unitat"><sup>4</sup>/<sub>4</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="propia"><sup>3</sup>/<sub>5</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="impropia"><sup>7</sup>/<sub>4</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="unitat"><sup>9</sup>/<sub>9</sub></div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="propia"><div class="box-header"><span class="box-icon">🍰</span> Fraccions Pròpies (< 1)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="impropia"><div class="box-header"><span class="box-icon">🍕</span> Fraccions Impròpies (> 1)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="unitat"><div class="box-header"><span class="box-icon">🎯</span> Iguals a la Unitat (= 1)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud5-2" data-unit="ud5" data-title="Repte 2: Equivalències">
    <div class="pdi-act-title"><span class="act-num">UD5 · Repte 2</span><h3>🪞 Emparella Fraccions Equivalents</h3></div>
    <p class="pdi-instruction">Arrossega cada fracció simplificada amb la seua ampliació equivalent:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item frac-item" draggable="true" data-cat="f12"><sup>1</sup>/<sub>2</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f23"><sup>2</sup>/<sub>3</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f34"><sup>3</sup>/<sub>4</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f25"><sup>2</sup>/<sub>5</sub></div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="f12"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>3</sup>/<sub>6</sub> (Multiplicat per 3)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f23"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>4</sup>/<sub>6</sub> (Multiplicat per 2)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f34"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>6</sup>/<sub>8</sub> (Multiplicat per 2)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f25"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>4</sup>/<sub>10</sub> (Multiplicat per 2)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud5-3" data-unit="ud5" data-title="Repte 3: Ordenar Fraccions">
    <div class="pdi-act-title"><span class="act-num">UD5 · Repte 3</span><h3>📏 Ordena Fraccions de Menor a Major (Denominador 8)</h3></div>
    <p class="pdi-instruction">Com que tenen el mateix denominador, ordena-les segons el seu numerador:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item frac-item" draggable="true" data-order="3"><span class="item-handle">☰</span> <sup>5</sup>/<sub>8</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-order="1"><span class="item-handle">☰</span> <sup>1</sup>/<sub>8</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-order="4"><span class="item-handle">☰</span> <sup>7</sup>/<sub>8</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-order="2"><span class="item-handle">☰</span> <sup>3</sup>/<sub>8</sub></div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Més xicoteta</span><span class="slot-hint">Només 1 part de 8</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2a</span><span class="slot-hint">3 parts de 8</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3a</span><span class="slot-hint">Més de la meitat (5 parts)</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Més gran</span><span class="slot-hint">Quasi la unitat sencera (7 parts)</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud5-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud5-4" data-unit="ud5" data-title="Repte 4: Fracció Quantitat">
    <div class="pdi-act-title"><span class="act-num">UD5 · Repte 4</span><h3>💰 Càlcul de la Fracció d'una Quantitat</h3></div>
    <p class="pdi-instruction">Calcula dividint pel denominador i multiplicant pel numerador:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="r30">1/2 de 60 €</div>
        <div class="pdi-item" draggable="true" data-cat="r75">3/4 de 100 kg</div>
        <div class="pdi-item" draggable="true" data-cat="r20">2/5 de 50 alumnes</div>
        <div class="pdi-item" draggable="true" data-cat="r30">1/3 de 90 litres</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="r30"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 30</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="r75"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 75</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="r20"><div class="box-header"><span class="box-icon">🎯</span> Resultat: 20</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud5-5" data-unit="ud5" data-title="Repte 5: Suma / Resta">
    <div class="pdi-act-title"><span class="act-num">UD5 · Repte 5</span><h3>➕➖ Suma i Resta de Fraccions amb Mateix Denominador</h3></div>
    <p class="pdi-instruction">Opera els numeradors mantenint intacte el denominador comú:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item frac-item" draggable="true" data-cat="f57"><sup>3</sup>/<sub>7</sub> + <sup>2</sup>/<sub>7</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f39"><sup>8</sup>/<sub>9</sub> - <sup>5</sup>/<sub>9</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f45"><sup>1</sup>/<sub>5</sub> + <sup>3</sup>/<sub>5</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f310"><sup>7</sup>/<sub>10</sub> - <sup>4</sup>/<sub>10</sub></div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="f57"><div class="box-header"><span class="box-icon">🎯</span> Resultat: <sup>5</sup>/<sub>7</sub></div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f39"><div class="box-header"><span class="box-icon">🎯</span> Resultat: <sup>3</sup>/<sub>9</sub></div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f45"><div class="box-header"><span class="box-icon">🎯</span> Resultat: <sup>4</sup>/<sub>5</sub></div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f310"><div class="box-header"><span class="box-icon">🎯</span> Resultat: <sup>3</sup>/<sub>10</sub></div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud6-1" data-unit="ud6" data-title="Repte 1: Rocosos vs Gasosos">
    <div class="pdi-act-title"><span class="act-num">UD6 · Repte 1</span><h3>🪐 Planetes Rocosos vs Planetes Gasosos</h3></div>
    <p class="pdi-instruction">Arrossega els 8 planetes del Sistema Solar al seu grup:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="rocos">Mercuri</div>
        <div class="pdi-item" draggable="true" data-cat="gasos">Júpiter</div>
        <div class="pdi-item" draggable="true" data-cat="rocos">Venus</div>
        <div class="pdi-item" draggable="true" data-cat="gasos">Saturn</div>
        <div class="pdi-item" draggable="true" data-cat="rocos">Terra</div>
        <div class="pdi-item" draggable="true" data-cat="gasos">Urà</div>
        <div class="pdi-item" draggable="true" data-cat="rocos">Mart</div>
        <div class="pdi-item" draggable="true" data-cat="gasos">Neptú</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="rocos"><div class="box-header"><span class="box-icon">🪨</span> Planetes Rocosos / Interiors</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="gasos"><div class="box-header"><span class="box-icon">🪐</span> Planetes Gasosos / Exteriors</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud6-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud6-2" data-unit="ud6" data-title="Repte 2: Distància al Sol">
    <div class="pdi-act-title"><span class="act-num">UD6 · Repte 2</span><h3>☀️ Ordena els Planetes des del Sol cap a l'Exterior</h3></div>
    <p class="pdi-instruction">Arrossega en l'ordre consecutiu de proximitat al Sol:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Júpiter</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Mercuri</div>
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Terra</div>
        <div class="pdi-item" draggable="true" data-order="7"><span class="item-handle">☰</span> Urà</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Venus</div>
        <div class="pdi-item" draggable="true" data-order="8"><span class="item-handle">☰</span> Neptú</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Mart</div>
        <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Saturn</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">1r</span><span class="slot-hint">Mercuri</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2n</span><span class="slot-hint">Venus</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3r</span><span class="slot-hint">Terra</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4t</span><span class="slot-hint">Mart</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5è</span><span class="slot-hint">Júpiter</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">6è</span><span class="slot-hint">Saturn</span></div>
        <div class="pdi-slot" data-slot="7"><span class="slot-badge">7è</span><span class="slot-hint">Urà</span></div>
        <div class="pdi-slot" data-slot="8"><span class="slot-badge">8è</span><span class="slot-hint">Neptú</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud6-3" data-unit="ud6" data-title="Repte 3: Escala Còsmica">
    <div class="pdi-act-title"><span class="act-num">UD6 · Repte 3</span><h3>🌌 Ordena l'Univers d'Escala Menor a Còsmica</h3></div>
    <p class="pdi-instruction">Arrossega les estructures començant per la més xicoteta fins a la més gegantina:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Sistema Solar (el Sol i planetes)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Planeta Terra</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Univers Observable complet</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Estrella Sol</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Galàxia Via Làctia (200.000 milions d'estrelles)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Escala 1</span><span class="slot-hint">Planeta individual</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Escala 2</span><span class="slot-hint">Estrella central</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Escala 3</span><span class="slot-hint">Família planetària</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Escala 4</span><span class="slot-hint">Espirals d'estrelles</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">Escala 5</span><span class="slot-hint">El Tot còsmic</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud6-4" data-unit="ud6" data-title="Repte 4: Tipus d'Astres">
    <div class="pdi-act-title"><span class="act-num">UD6 · Repte 4</span><h3>🔭 Classifica els Cossos de l'Univers</h3></div>
    <p class="pdi-instruction">Arrossega cada cos celeste a la seua definició astronòmica:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="est">El Sol</div>
        <div class="pdi-item" draggable="true" data-cat="pla">Mart</div>
        <div class="pdi-item" draggable="true" data-cat="sat">La Lluna</div>
        <div class="pdi-item" draggable="true" data-cat="est">Sirius</div>
        <div class="pdi-item" draggable="true" data-cat="com">Cometa Halley</div>
        <div class="pdi-item" draggable="true" data-cat="sat">Ganimedes (de Júpiter)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="est"><div class="box-header"><span class="box-icon">⭐</span> Estrella (Cos massiu que emet llum pròpia)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="pla"><div class="box-header"><span class="box-icon">🪐</span> Planeta (Òrbita al voltant d'una estrella)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="sat"><div class="box-header"><span class="box-icon">🌙</span> Satèl·lit (Òrbita al voltant d'un planeta)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="com"><div class="box-header"><span class="box-icon">☄️</span> Cometa (Cos de gel i pols amb cua brillant)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud6-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud6-5" data-unit="ud6" data-title="Repte 5: Roques Espacials">
    <div class="pdi-act-title"><span class="act-num">UD6 · Repte 5</span><h3>🪨 Meteoroide, Meteor o Meteorit?</h3></div>
    <p class="pdi-instruction">Identifica on es troba el fragment rocallós:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="oide">Roca que flota a l'espai abans d'entrar a la Terra</div>
        <div class="pdi-item" draggable="true" data-cat="or">Estel fugaç que brilla per fricció a l'atmosfera</div>
        <div class="pdi-item" draggable="true" data-cat="it">Roca que sobreviu i impacta al terra creant un cràter</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="oide"><div class="box-header"><span class="box-icon">🛰️</span> Meteoroide (A l'espai buit)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="or"><div class="box-header"><span class="box-icon">🌠</span> Meteor (Estel fugaç a la mesosfera)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="it"><div class="box-header"><span class="box-icon">💥</span> Meteorit (Ha tocat la superfície terrestre)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud6-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud7-1" data-unit="ud7" data-title="Repte 1: Capes Geosfera">
    <div class="pdi-act-title"><span class="act-num">UD7 · Repte 1</span><h3>🌍 Les 4 Capes Internes de la Geosfera</h3></div>
    <p class="pdi-instruction">Arrossega cada característica a la capa correcta de la Terra:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="escorca">Capa sòlida prima exterior on vivim</div>
        <div class="pdi-item" draggable="true" data-cat="mantell">Format per magma i roques calentes en moviment continu</div>
        <div class="pdi-item" draggable="true" data-cat="nucli-ext">Capa líquida de ferro que genera el camp magnètic</div>
        <div class="pdi-item" draggable="true" data-cat="nucli-int">Esfera metàl·lica sòlida al centre a altíssima temperatura</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="escorca"><div class="box-header"><span class="box-icon">⛰️</span> Escorça Terrestre</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="mantell"><div class="box-header"><span class="box-icon">🌋</span> Mantell Terrestre</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="nucli-ext"><div class="box-header"><span class="box-icon">🧲</span> Nucli Extern (Líquid)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="nucli-int"><div class="box-header"><span class="box-icon">⚪</span> Nucli Intern (Sòlid)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud7-2" data-unit="ud7" data-title="Repte 2: Rotació / Traslació">
    <div class="pdi-act-title"><span class="act-num">UD7 · Repte 2</span><h3>🔄 Moviments de la Terra: Rotació vs Traslació</h3></div>
    <p class="pdi-instruction">Classifica característiques i conseqüències segons el moviment:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="rotacio">Gira sobre el seu propi eix</div>
        <div class="pdi-item" draggable="true" data-cat="traslacio">Òrbita el·líptica al voltant del Sol</div>
        <div class="pdi-item" draggable="true" data-cat="rotacio">Dura 24 hores (1 dia solar)</div>
        <div class="pdi-item" draggable="true" data-cat="traslacio">Dura 365 dies i 6 hores (1 any)</div>
        <div class="pdi-item" draggable="true" data-cat="rotacio">Origina la successió de Dia i Nit</div>
        <div class="pdi-item" draggable="true" data-cat="traslacio">Origina les 4 Estacions de l'any</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="rotacio"><div class="box-header"><span class="box-icon">🌍</span> Moviment de Rotació (Eix propi)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="traslacio"><div class="box-header"><span class="box-icon">☀️</span> Moviment de Traslació (Voltant del Sol)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud7-3" data-unit="ud7" data-title="Repte 3: Fases de la Lluna">
    <div class="pdi-act-title"><span class="act-num">UD7 · Repte 3</span><h3>🌙 Ordena el Cicle de les 4 Fases de la Lluna</h3></div>
    <p class="pdi-instruction">Ordena el cicle lunar consecutivament començant per la fase fosca:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Lluna Plena (cara il·luminada al 100%)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Lluna Nova (no és visible des de la Terra)</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Quart Minvant (forma de 'C' decreixent)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Quart Creixent (forma de 'D' creixent)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Fase 1</span><span class="slot-hint">Lluna fosca d'inici</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Fase 2</span><span class="slot-hint">Forma de lletra D</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Fase 3</span><span class="slot-hint">Disc blanc complet</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Fase 4</span><span class="slot-hint">Forma de lletra C</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud7-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud7-4" data-unit="ud7" data-title="Repte 4: Tipus de Roques">
    <div class="pdi-act-title"><span class="act-num">UD7 · Repte 4</span><h3>🪨 Els Tres Grans Grups de Roques</h3></div>
    <p class="pdi-instruction">Classifica cada roca segons el seu origen geològic:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="mag">Granit (refredament lent subterrani)</div>
        <div class="pdi-item" draggable="true" data-cat="sed">Calcària (acumulació de closques marines)</div>
        <div class="pdi-item" draggable="true" data-cat="met">Marbre (calcària transformada per calor/pressió)</div>
        <div class="pdi-item" draggable="true" data-cat="mag">Basalt (lava volcànica refredada)</div>
        <div class="pdi-item" draggable="true" data-cat="sed">Argila i gres (compactació d'arenes)</div>
        <div class="pdi-item" draggable="true" data-cat="met">Pissarra (argila transformada en làmines)</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="mag"><div class="box-header"><span class="box-icon">🌋</span> Roques Magmàtiques (Solidificació de magma)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="sed"><div class="box-header"><span class="box-icon">🏖️</span> Roques Sedimentàries (Sediments acumulats en capes)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="met"><div class="box-header"><span class="box-icon">🔥</span> Roques Metamòrfiques (Transformades per pressió)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud7-5" data-unit="ud7" data-title="Repte 5: Tipus d'Eclipsi">
    <div class="pdi-act-title"><span class="act-num">UD7 · Repte 5</span><h3>🌑 Eclipsi de Sol vs Eclipsi de Lluna</h3></div>
    <p class="pdi-instruction">Classifica qui s'interposa enmig i quina ombra es genera:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="sol">Alineació: Sol - Lluna - Terra</div>
        <div class="pdi-item" draggable="true" data-cat="lluna">Alineació: Sol - Terra - Lluna</div>
        <div class="pdi-item" draggable="true" data-cat="sol">La Lluna tapa la llum del Sol en ple dia</div>
        <div class="pdi-item" draggable="true" data-cat="lluna">L'ombra de la Terra enfosqueix la Lluna de nit</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="sol"><div class="box-header"><span class="box-icon">☀️</span> Eclipsi de Sol (La Lluna enmig)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="lluna"><div class="box-header"><span class="box-icon">🌕</span> Eclipsi de Lluna (La Terra enmig)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud8-1" data-unit="ud8" data-title="Repte 1: Capes Atmosfera">
    <div class="pdi-act-title"><span class="act-num">UD8 · Repte 1</span><h3>🌤️ Ordena les Capes de l'Atmosfera de Baix cap a Dalt</h3></div>
    <p class="pdi-instruction">Arrossega les capes des del terra fins a l'espai exterior:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Mesosfera (on es desintegren meteorits)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Troposfera (on vivim, amb l'aire i núvols)</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Exosfera (límit exterior amb l'espai)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Estratosfera (conté la capa d'ozó)</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Termosfera (aurores i satèl·lits)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">1a Capa</span><span class="slot-hint">Contacte amb la superfície</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2a Capa</span><span class="slot-hint">Capa amb l'Ozó protector</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3a Capa</span><span class="slot-hint">Capa freda intermèdia</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4a Capa</span><span class="slot-hint">Aurores polars</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5a Capa</span><span class="slot-hint">Límit exterior amb l'espai</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud8-2" data-unit="ud8" data-title="Repte 2: Aparells Meteorològics">
    <div class="pdi-act-title"><span class="act-num">UD8 · Repte 2</span><h3>🌡️ Aparells de la Caseta Meteorològica</h3></div>
    <p class="pdi-instruction">Arrossega cada instrument a la magnitud meteorològica que mesura:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="temp">Termòmetre</div>
        <div class="pdi-item" draggable="true" data-cat="pressio">Baròmetre</div>
        <div class="pdi-item" draggable="true" data-cat="vent">Anemòmetre</div>
        <div class="pdi-item" draggable="true" data-cat="pluja">Pluviòmetre</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="temp"><div class="box-header"><span class="box-icon">🌡️</span> Temperatura de l'Aire (°C)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="pressio"><div class="box-header"><span class="box-icon">⏱️</span> Pressió Atmosfèrica (hPa / mb)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="vent"><div class="box-header"><span class="box-icon">💨</span> Velocitat del Vent (km/h)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="pluja"><div class="box-header"><span class="box-icon">🌧️</span> Precipitació caiguda (L/m² o mm)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud8-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud8-3" data-unit="ud8" data-title="Repte 3: Gasos de l'Aire">
    <div class="pdi-act-title"><span class="act-num">UD8 · Repte 3</span><h3>💨 La Composició de l'Aire Net</h3></div>
    <p class="pdi-instruction">Classifica cada gas segons el seu percentatge en l'aire que respirem:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="n2">Nitrogen (N₂)</div>
        <div class="pdi-item" draggable="true" data-cat="o2">Oxigen (O₂)</div>
        <div class="pdi-item" draggable="true" data-cat="res">Argó (Gas noble)</div>
        <div class="pdi-item" draggable="true" data-cat="res">Diòxid de carboni (CO₂)</div>
        <div class="pdi-item" draggable="true" data-cat="res">Vapor d'aigua</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="n2"><div class="box-header"><span class="box-icon">🟢</span> ~78% (El gas més abundant de l'aire)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="o2"><div class="box-header"><span class="box-icon">🔵</span> ~21% (El gas que necessitem per respirar)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="res"><div class="box-header"><span class="box-icon">🟡</span> ~1% (La resta de gasos minoritaris)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud8-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud8-4" data-unit="ud8" data-title="Repte 4: Contaminació Aire">
    <div class="pdi-act-title"><span class="act-num">UD8 · Repte 4</span><h3>🏭 Contaminants Naturals vs Artificials</h3></div>
    <p class="pdi-instruction">Classifica l'origen de la contaminació atmosfèrica:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="nat">Cendres d'una erupció volcànica</div>
        <div class="pdi-item" draggable="true" data-cat="art">Fums de tubs d'escapament de cotxes dièsel</div>
        <div class="pdi-item" draggable="true" data-cat="nat">Tempesta de pols i arena del Sàhara</div>
        <div class="pdi-item" draggable="true" data-cat="art">Emissions de centrals tèrmiques de carbó</div>
        <div class="pdi-item" draggable="true" data-cat="nat">Grans de pol·len a la primavera</div>
        <div class="pdi-item" draggable="true" data-cat="art">Gasos contaminants CFC dels aires condicionats</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="nat"><div class="box-header"><span class="box-icon">🌋</span> Contaminació d'Origen Natural</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="art"><div class="box-header"><span class="box-icon">🏭</span> Contaminació d'Origen Artificial (Humana)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud8-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud8-5" data-unit="ud8" data-title="Repte 5: Tipus de Precipitació">
    <div class="pdi-act-title"><span class="act-num">UD8 · Repte 5</span><h3>🌧️ Formes de Precipitació i Hidrometeors</h3></div>
    <p class="pdi-instruction">Emparella cada fenomen amb el seu estat físic:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="liq">Pluja i plugim</div>
        <div class="pdi-item" draggable="true" data-cat="sol">Neu (cristalls hexagonals de gel)</div>
        <div class="pdi-item" draggable="true" data-cat="sol">Calamarsa (pedres esfèriques de gel)</div>
        <div class="pdi-item" draggable="true" data-cat="liq">Rosada sobre l'herba de matí</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="liq"><div class="box-header"><span class="box-icon">💧</span> Precipitació o condensació Líquida</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="sol"><div class="box-header"><span class="box-icon">❄️</span> Precipitació Sòlida (Aigua congelada)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud8-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud9-1" data-unit="ud9" data-title="Repte 1: Cicle Hidrològic">
    <div class="pdi-act-title"><span class="act-num">UD9 · Repte 1</span><h3>💧 Ordena les 4 Etapes del Cicle de l'Aigua</h3></div>
    <p class="pdi-instruction">Arrossega les etapes en la seua seqüència natural:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Precipitació: L'aigua cau com a pluja o neu</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Evaporació: El Sol calfa l'aigua i puja com a vapor</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Infiltració i Escorrentia: Torna per rius al mar</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Condensació: Es refreda formant els núvols</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Etapa 1</span><span class="slot-hint">El Sol calfa l'aigua</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Etapa 2</span><span class="slot-hint">Formació de núvols</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Etapa 3</span><span class="slot-hint">Caiguda de pluja</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Etapa 4</span><span class="slot-hint">Retorn als mars</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9-1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud9-2" data-unit="ud9" data-title="Repte 2: Aigua Dolça vs Salada">
    <div class="pdi-act-title"><span class="act-num">UD9 · Repte 2</span><h3>🌊 Aigua Dolça (3%) vs Aigua Salada (97%)</h3></div>
    <p class="pdi-instruction">Classifica les masses d'aigua segons la seua salinitat i volum global:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="salada">Oceans (Pacífic, Atlàntic, Índic...)</div>
        <div class="pdi-item" draggable="true" data-cat="dolca">Glaceres i Casquets Polars (70% del dolç)</div>
        <div class="pdi-item" draggable="true" data-cat="salada">Mars (Mediterrani, Cantàbric, Roig...)</div>
        <div class="pdi-item" draggable="true" data-cat="dolca">Aqüífers i Aigües Subterrànies</div>
        <div class="pdi-item" draggable="true" data-cat="dolca">Rius i Torrents de muntanya</div>
        <div class="pdi-item" draggable="true" data-cat="dolca">Llacs d'aigua dolça</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="dolca"><div class="box-header"><span class="box-icon">💧</span> Aigua Dolça (~3% del Total del Planeta)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="salada"><div class="box-header"><span class="box-icon">🌊</span> Aigua Salada (~97% del Total del Planeta)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud9-2')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud9-3" data-unit="ud9" data-title="Repte 3: Canvis d'Estat">
    <div class="pdi-act-title"><span class="act-num">UD9 · Repte 3</span><h3>🧊♨️ Els Canvis d'Estat: Guanyen o Perden Calor?</h3></div>
    <p class="pdi-instruction">Classifica cada canvi d'estat de l'aigua:</p>
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="calor">Fusió: De Gel sòlid a Aigua líquida</div>
        <div class="pdi-item" draggable="true" data-cat="fred">Solidificació: D'Aigua líquida a Gel sòlid</div>
        <div class="pdi-item" draggable="true" data-cat="calor">Vaporització / Ebullició: De Líquid a Vapor</div>
        <div class="pdi-item" draggable="true" data-cat="fred">Condensació: De Vapor de gas a Gotes líquides</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="calor"><div class="box-header"><span class="box-icon">🔥</span> Guanyen Calor (S'escalfen)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="fred"><div class="box-header"><span class="box-icon">❄️</span> Perden Calor (Es refreden)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud9-3')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud9-4" data-unit="ud9" data-title="Repte 4: Trams d'un Riu">
    <div class="pdi-act-title"><span class="act-num">UD9 · Repte 4</span><h3>🏞️ Ordena els Tres Trams d'un Riu des del Naixement</h3></div>
    <p class="pdi-instruction">Arrossega els trams del riu en el sentit en què baixa l'aigua:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Curs Mitjà (pendent moderat, meandres i transport de materials)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Curs Alt (fort pendent en muntanya, cascades i gran erosió)</div>
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Curs Baix (terreny pla, sedimentació, desembocadura i deltes)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Tram 1 (Naixement)</span><span class="slot-hint">Aiguabarreigs i gorges de muntanya</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Tram 2 (Intermedi)</span><span class="slot-hint">Valls amples i corbes sinuoses</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Tram 3 (Desembocadura)</span><span class="slot-hint">Arribada a la mar o un altre riu</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9-4')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <div class="pdi-activity-card" id="act-ud9-5" data-unit="ud9" data-title="Repte 5: Cicle Urbà Aigua">
    <div class="pdi-act-title"><span class="act-num">UD9 · Repte 5</span><h3>🚰 El Cicle Urbà de l'Aigua a la Nostra Ciutat</h3></div>
    <p class="pdi-instruction">Ordena el camí complet de l'aigua des que l'agafem de la natura fins que la retornem neta:</p>
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Clavegueram (recollida d'aigües residuals brutes)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Captació (embassaments, rius o pous subterranis)</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Depuració a l'EDAR (eliminació de residus i bacteris)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Potabilització a l'ETAP (tractament i cloració)</div>
        <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Retorn al medi natural (rius o mar) sense contaminar</div>
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Xarxa de distribució i consum a les llars</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">Obtenció de l'aigua bruta</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">Fer-la potable per a beure</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">Aixetes de cases i indústries</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">Aigües brutes que marxen</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">Neteja a la depuradora</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">Retorn net a la natura</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9-5')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>
</div>

<div class="pdi-exit-floating-btn" onclick="togglePDIFullscreen()" title="Eixir de la pantalla completa (o prem Esc)">
  <span>🪟 Eixir de Pantalla Completa</span>
  <span style="font-size:0.75rem; opacity:0.8; background:rgba(255,255,255,0.2); padding:2px 6px; border-radius:4px;">Esc</span>
</div>

<!-- ESTILS DE LA PISSARRA DIGITAL -->
<style>
.pdi-intro-card {
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(37, 99, 235, 0.12));
  border: 2px solid rgba(16, 185, 129, 0.35);
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 24px;
}
.pdi-intro-header {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}
.pdi-badge {
  background: #059669;
  color: #fff;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 50px;
  text-transform: uppercase;
}
.pdi-badge-pwa {
  background: #2563eb;
  color: #fff;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 50px;
}
.pdi-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}
.btn-pdi-tool {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  background: var(--bg-card, #ffffff);
  border: 1.5px solid var(--border, #cbd5e1);
  color: var(--text, #1e293b);
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}
.btn-pdi-tool:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  transform: translateY(-2px);
}
.btn-pdi-reset {
  background: #f59e0b !important;
  color: #ffffff !important;
  border-color: #d97706 !important;
}
.btn-pdi-reset:hover {
  background: #d97706 !important;
}

/* Selector d'Unitats PDI */
.pdi-unit-nav-wrap {
  margin: 18px 0 14px 0;
}
.pdi-subnav-wrap {
  margin: 12px 0 24px 0;
  background: rgba(16, 185, 129, 0.05);
  border: 1.5px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
}
.pdi-nav-label {
  display: block;
  font-weight: 800;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--text-muted, #64748b);
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.pdi-unit-pills, .pdi-subpills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pdi-pill {
  padding: 8px 14px;
  border-radius: 8px;
  border: 1.5px solid var(--border, #cbd5e1);
  background: var(--bg-card, #ffffff);
  color: var(--text, #1e293b);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}
.pdi-pill:hover {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.08);
}
.pdi-pill.active {
  background: #059669;
  color: #ffffff;
  border-color: #059669;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
}

.pdi-subpill {
  padding: 7px 14px;
  border-radius: 6px;
  border: 1px solid var(--border, #cbd5e1);
  background: var(--bg-card, #ffffff);
  color: var(--text, #1e293b);
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
}
.pdi-subpill:hover {
  border-color: #0284c7;
  background: rgba(2, 132, 199, 0.08);
}
.pdi-subpill.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
  box-shadow: 0 3px 10px rgba(2, 132, 199, 0.3);
}

/* Contenidors de Targetes */
.pdi-activity-card {
  display: none;
  background: var(--bg-card, #ffffff);
  border: 2px solid var(--border, #e2e8f0);
  border-radius: 20px;
  padding: 26px 28px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  margin-bottom: 30px;
  animation: fadeInPDI 0.3s ease;
}
.pdi-activity-card.active {
  display: block;
}
@keyframes fadeInPDI {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.pdi-act-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.pdi-act-title .act-num {
  background: #059669;
  color: #fff;
  font-weight: 900;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
}
.pdi-act-title h3 {
  margin: 0;
  font-size: 1.35rem;
  color: var(--text, #0f172a);
}
.pdi-instruction {
  font-size: 1.05rem;
  color: var(--text-muted, #475569);
  margin-bottom: 22px;
}

/* Àrea d'Arrossegament */
.pdi-categories-wrapper, .pdi-order-wrapper {
  margin-bottom: 24px;
}
.pdi-source-pool {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background: rgba(100, 116, 139, 0.06);
  border: 2px dashed rgba(100, 116, 139, 0.3);
  border-radius: 14px;
  min-height: 70px;
  margin-bottom: 20px;
  align-items: center;
}

.pdi-item {
  background: var(--bg-card, #ffffff);
  color: var(--text, #0f172a);
  border: 2px solid var(--border, #cbd5e1);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  border-radius: 12px;
  padding: 12px 18px;
  font-size: 1.05rem;
  font-weight: 750;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.pdi-item:hover, .pdi-item:active {
  border-color: #059669;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 16px rgba(5, 150, 105, 0.2);
}
.pdi-item.dragging {
  opacity: 0.4;
  cursor: grabbing;
}
.pdi-item.selected-tap {
  border-color: #2563eb !important;
  background: rgba(37, 99, 235, 0.15) !important;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.3) !important;
  animation: pulseTap 1s infinite alternate;
}
@keyframes pulseTap {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.num-item {
  font-size: 1.3rem !important;
  padding: 10px 22px !important;
  font-family: 'JetBrains Mono', monospace;
}
.frac-item {
  font-size: 1.25rem !important;
  padding: 10px 20px !important;
}

.pdi-drop-boxes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.pdi-drop-boxes-grid.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
.pdi-drop-boxes-grid.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.pdi-drop-boxes-grid.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.pdi-drop-box {
  background: var(--bg-body, #f8fafc);
  border: 2.5px dashed var(--border, #cbd5e1);
  border-radius: 16px;
  padding: 16px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}
.pdi-drop-box.drag-over, .pdi-drop-box.waiting-tap-target {
  border-color: #059669;
  background: rgba(16, 185, 129, 0.08);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
  transform: scale(1.01);
}
.pdi-drop-box .box-header {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--text, #0f172a);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(100, 116, 139, 0.15);
  display: flex;
  align-items: center;
  gap: 8px;
}
.pdi-drop-box .box-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.pdi-slots-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pdi-slot {
  background: var(--bg-body, #f8fafc);
  border: 2.5px dashed var(--border, #cbd5e1);
  border-radius: 14px;
  padding: 12px 18px;
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: all 0.2s ease;
}
.pdi-slot.drag-over, .pdi-slot.waiting-tap-target {
  border-color: #059669;
  background: rgba(16, 185, 129, 0.08);
}
.pdi-slot .slot-badge {
  background: #334155;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
}
.pdi-slot .slot-hint {
  color: var(--text-muted, #94a3b8);
  font-size: 0.95rem;
  font-style: italic;
}
.pdi-slot .pdi-item {
  margin: 0;
  width: 100%;
}

.pdi-footer-feedback {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1.5px solid var(--border, #e2e8f0);
}
.btn-pdi-check {
  background: linear-gradient(135deg, #059669, #0d9488);
  color: #ffffff !important;
  font-weight: 800;
  font-size: 1.1rem;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
  transition: all 0.2s ease;
}
.btn-pdi-check:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(5, 150, 105, 0.45);
}
.pdi-status-msg {
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 8px;
  padding: 8px 16px;
}
.pdi-status-msg.correct {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
  border: 1.5px solid #10b981;
}
.pdi-status-msg.incorrect {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
  border: 1.5px solid #ef4444;
}

/* MODE PISSARRA COMPLETA (PDI FULLSCREEN) — AJUST AL 100% DE LA PANTALLA */
html.pdi-fullscreen-locked,
body.pdi-fullscreen-mode {
  height: 100vh !important;
  max-height: 100vh !important;
  overflow: hidden !important;
  margin: 0 !important;
  padding: 0 !important;
}

body.pdi-fullscreen-mode {
  font-size: clamp(0.95rem, 1.2vw, 1.25rem);
}

/* Ocultar elements innecessaris en pantalla completa per guanyar el 100% d'espai vertical */
body.pdi-fullscreen-mode h1:first-of-type,
body.pdi-fullscreen-mode aside.sidebar,
body.pdi-fullscreen-mode .top-act-jump-wrap,
body.pdi-fullscreen-mode #floating-activities-pill,
body.pdi-fullscreen-mode .pdi-intro-header,
body.pdi-fullscreen-mode .pdi-intro-card p,
body.pdi-fullscreen-mode .pdi-nav-label {
  display: none !important;
}

/* Ocultar / autoamagar menú superior de navegació */
body.pdi-fullscreen-mode header.md-header {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(-100%);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
}
body.pdi-fullscreen-mode header.md-header:hover,
body.pdi-fullscreen-mode header.md-header:focus-within {
  transform: translateY(0);
}

/* Contenidor principal ajustat exactament a la pantalla sense scroll de pàgina */
body.pdi-fullscreen-mode .layout {
  height: 100vh !important;
  max-height: 100vh !important;
  padding: 8px 16px !important;
  margin: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
}

body.pdi-fullscreen-mode main.content {
  height: 100% !important;
  max-height: 100% !important;
  max-width: 100vw !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
}

/* Barra superior ultra-compacta en mode pissarra */
body.pdi-fullscreen-mode .pdi-intro-card {
  padding: 6px 14px !important;
  margin-bottom: 4px !important;
  border-radius: 10px !important;
  border-width: 1px !important;
}
body.pdi-fullscreen-mode .pdi-toolbar {
  margin-top: 0 !important;
  gap: 8px !important;
}
body.pdi-fullscreen-mode .btn-pdi-tool {
  padding: 6px 12px !important;
  font-size: 0.85rem !important;
}

/* Selectors compactes en una línia */
body.pdi-fullscreen-mode .pdi-unit-nav-wrap {
  margin: 2px 0 4px 0 !important;
}
body.pdi-fullscreen-mode .pdi-unit-pills {
  gap: 6px !important;
}
body.pdi-fullscreen-mode .pdi-pill {
  padding: 4px 10px !important;
  font-size: 0.8rem !important;
}

body.pdi-fullscreen-mode .pdi-subnav-wrap {
  margin: 2px 0 6px 0 !important;
  padding: 4px 10px !important;
  border-radius: 8px !important;
}
body.pdi-fullscreen-mode .pdi-subpills {
  gap: 6px !important;
}
body.pdi-fullscreen-mode .pdi-subpill {
  padding: 4px 10px !important;
  font-size: 0.8rem !important;
}

/* Contenidor de l'activitat activa: ocupa tot l'espai restant de la pantalla */
body.pdi-fullscreen-mode .pdi-board-container {
  flex: 1 1 auto !important;
  min-height: 0 !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
}

body.pdi-fullscreen-mode .pdi-activity-card.active {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 1 auto !important;
  min-height: 0 !important;
  height: 100% !important;
  padding: 12px 18px !important;
  margin-bottom: 0 !important;
  border-radius: 14px !important;
  justify-content: space-between !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
}

body.pdi-fullscreen-mode .pdi-act-title {
  margin-bottom: 4px !important;
}
body.pdi-fullscreen-mode .pdi-act-title h3 {
  font-size: clamp(1rem, 1.3vw, 1.25rem) !important;
}
body.pdi-fullscreen-mode .pdi-act-title .act-num {
  font-size: 0.75rem !important;
  padding: 2px 8px !important;
}
body.pdi-fullscreen-mode .pdi-instruction {
  font-size: clamp(0.85rem, 1vw, 1rem) !important;
  margin-bottom: 8px !important;
}

/* Zona manipulativa adaptable a l'alt de pantalla */
body.pdi-fullscreen-mode .pdi-categories-wrapper,
body.pdi-fullscreen-mode .pdi-order-wrapper {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 1 auto !important;
  min-height: 0 !important;
  gap: 8px !important;
  margin-bottom: 4px !important;
  overflow: hidden !important;
}

/* Bústia d'elements inicials */
body.pdi-fullscreen-mode .pdi-source-pool {
  flex: 0 0 auto !important;
  max-height: 26vh !important;
  overflow-y: auto !important;
  padding: 8px 12px !important;
  margin-bottom: 4px !important;
  gap: 8px !important;
  border-radius: 10px !important;
  min-height: 48px !important;
}

/* Graella de caixes de destí */
body.pdi-fullscreen-mode .pdi-drop-boxes-grid {
  flex: 1 1 auto !important;
  min-height: 0 !important;
  overflow-y: auto !important;
  gap: 8px !important;
}
body.pdi-fullscreen-mode .pdi-drop-box {
  min-height: 0 !important;
  flex: 1 1 auto !important;
  padding: 8px 12px !important;
  border-radius: 12px !important;
}
body.pdi-fullscreen-mode .pdi-drop-box .box-header {
  font-size: clamp(0.85rem, 1.1vw, 1.05rem) !important;
  margin-bottom: 6px !important;
  padding-bottom: 4px !important;
}
body.pdi-fullscreen-mode .pdi-drop-box .box-items {
  overflow-y: auto !important;
  gap: 4px !important;
}

/* Columnes d'ordre seqüencial */
body.pdi-fullscreen-mode .pdi-slots-column {
  flex: 1 1 auto !important;
  min-height: 0 !important;
  overflow-y: auto !important;
  gap: 6px !important;
}
body.pdi-fullscreen-mode .pdi-slot {
  min-height: 40px !important;
  padding: 4px 12px !important;
  gap: 8px !important;
  border-radius: 10px !important;
}
body.pdi-fullscreen-mode .pdi-slot .slot-badge {
  font-size: 0.75rem !important;
  padding: 2px 6px !important;
}
body.pdi-fullscreen-mode .pdi-slot .slot-hint {
  font-size: 0.82rem !important;
}

/* Elements arrossegables adaptats */
body.pdi-fullscreen-mode .pdi-item {
  padding: clamp(6px, 0.8vw, 10px) clamp(10px, 1.2vw, 16px) !important;
  font-size: clamp(0.88rem, 1.15vw, 1.15rem) !important;
  border-radius: 8px !important;
}
body.pdi-fullscreen-mode .num-item {
  font-size: clamp(1.05rem, 1.4vw, 1.35rem) !important;
  padding: 6px 14px !important;
}
body.pdi-fullscreen-mode .frac-item {
  font-size: clamp(1rem, 1.3vw, 1.25rem) !important;
  padding: 6px 12px !important;
}

/* Peu de comprovació sempre visible a la part inferior */
body.pdi-fullscreen-mode .pdi-footer-feedback {
  flex: 0 0 auto !important;
  margin-top: 4px !important;
  padding-top: 6px !important;
}
body.pdi-fullscreen-mode .btn-pdi-check {
  font-size: clamp(0.9rem, 1.15vw, 1.1rem) !important;
  padding: 8px 20px !important;
  border-radius: 10px !important;
}
body.pdi-fullscreen-mode .pdi-status-msg {
  font-size: clamp(0.9rem, 1.15vw, 1.1rem) !important;
  padding: 6px 12px !important;
}

/* Escales Manuals (Zoom) per a pantalles amb diferents resolucions */
body[data-pdi-scale="compact"] {
  font-size: 0.9rem !important;
}
body[data-pdi-scale="compact"] .pdi-item {
  padding: 4px 10px !important;
  font-size: 0.88rem !important;
}
body[data-pdi-scale="large"] {
  font-size: 1.3rem !important;
}
body[data-pdi-scale="large"] .pdi-item {
  padding: 12px 20px !important;
  font-size: 1.25rem !important;
}
/* Botó flotant d'eixida discreta en pantalla completa */
.pdi-exit-floating-btn {
  display: none;
  position: fixed;
  top: 16px;
  right: 18px;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.85);
  color: #ffffff !important;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 750;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  transition: all 0.2s ease;
  user-select: none;
}
.pdi-exit-floating-btn:hover {
  background: #dc2626;
  border-color: #ef4444;
  transform: scale(1.04);
}
body.pdi-fullscreen-mode .pdi-exit-floating-btn {
  display: inline-flex;
}
</style>

<!-- LÒGICA DE LA PISSARRA INTERACTIVA I SONS SYNTH -->
<script>
let pdiSoundEnabled = true;
let selectedTapItem = null;
let currentActiveUnit = 'ud1';

function playPDISound(type) {
  if (!pdiSoundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'drop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(196, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    }
  } catch (e) {
    console.warn('Audio no permès pel navegador:', e);
  }
}

function togglePDISound() {
  pdiSoundEnabled = !pdiSoundEnabled;
  const icon = document.getElementById('sound-icon');
  const text = document.getElementById('sound-text');
  if (pdiSoundEnabled) {
    icon.textContent = '🔊';
    text.textContent = 'So Activat';
    playPDISound('drop');
  } else {
    icon.textContent = '🔇';
    text.textContent = 'So Silenciat';
  }
}


let pdiScaleModes = ['auto', 'compact', 'large'];
let currentScaleIdx = 0;

function cyclePDIScale() {
  currentScaleIdx = (currentScaleIdx + 1) % pdiScaleModes.length;
  const mode = pdiScaleModes[currentScaleIdx];
  const textEl = document.getElementById('scale-text');
  
  if (mode === 'auto') {
    document.body.removeAttribute('data-pdi-scale');
    if (textEl) textEl.textContent = 'Mida: Auto';
  } else if (mode === 'compact') {
    document.body.setAttribute('data-pdi-scale', 'compact');
    if (textEl) textEl.textContent = 'Mida: Compacta';
  } else if (mode === 'large') {
    document.body.setAttribute('data-pdi-scale', 'large');
    if (textEl) textEl.textContent = 'Mida: Gran';
  }
}

function togglePDIFullscreen(explicitState) {
  if (typeof explicitState === 'boolean') {
    if (explicitState) document.body.classList.add('pdi-fullscreen-mode');
    else document.body.classList.remove('pdi-fullscreen-mode');
  document.documentElement.classList.toggle('pdi-fullscreen-locked', document.body.classList.contains('pdi-fullscreen-mode'));
  } else {
    document.body.classList.toggle('pdi-fullscreen-mode');
  document.documentElement.classList.toggle('pdi-fullscreen-locked', document.body.classList.contains('pdi-fullscreen-mode'));
  }

  const isFull = document.body.classList.contains('pdi-fullscreen-mode');
  const btn = document.getElementById('btn-fullscreen-toggle');
  if (btn) {
    if (isFull) {
      btn.querySelector('.tool-icon').textContent = '🪟';
      btn.querySelector('.tool-text').textContent = 'Eixir de Pissarra Completa';
    } else {
      btn.querySelector('.tool-icon').textContent = '🖥️';
      btn.querySelector('.tool-text').textContent = 'Mode Pissarra Completa';
    }
  }

  if (isFull) {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  } else {
    if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

document.addEventListener('fullscreenchange', () => {
  const isDocFull = !!document.fullscreenElement;
  if (!isDocFull && document.body.classList.contains('pdi-fullscreen-mode')) {
    togglePDIFullscreen(false);
  }
});

function selectPDIUnit(unitKey) {
  currentActiveUnit = unitKey;
  document.querySelectorAll('.pdi-pill').forEach(b => {
    if (b.getAttribute('onclick').includes(`'${unitKey}'`)) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  const cardsOfUnit = Array.from(document.querySelectorAll(`.pdi-activity-card[data-unit="${unitKey}"]`));
  const subContainer = document.getElementById('pdi-subpills-container');
  subContainer.innerHTML = '';

  cardsOfUnit.forEach((card, index) => {
    const btn = document.createElement('button');
    btn.className = 'pdi-subpill' + (index === 0 ? ' active' : '');
    btn.textContent = card.dataset.title || `Repte ${index + 1}`;
    btn.onclick = () => showPDICard(card.id);
    subContainer.appendChild(btn);
  });

  if (cardsOfUnit.length > 0) {
    showPDICard(cardsOfUnit[0].id);
  }
}

function showPDICard(cardId) {
  document.querySelectorAll('.pdi-activity-card').forEach(c => c.classList.remove('active'));
  const target = document.getElementById(cardId);
  if (target) {
    target.classList.add('active');
    resetPDIActivity(cardId);
  }
  document.querySelectorAll('.pdi-subpill').forEach(btn => {
    if (btn.textContent === (target ? target.dataset.title : '')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function resetCurrentPDIActivity() {
  const activeCard = document.querySelector('.pdi-activity-card.active');
  if (activeCard) resetPDIActivity(activeCard.id);
}

function resetPDIActivity(actId) {
  const card = document.getElementById(actId);
  if (!card) return;

  const pool = card.querySelector('.pdi-source-pool');
  const items = Array.from(card.querySelectorAll('.pdi-item'));

  items.sort(() => Math.random() - 0.5);
  items.forEach(item => {
    item.classList.remove('selected-tap', 'dragging');
    item.style.borderColor = '';
    pool.appendChild(item);
  });

  const slots = card.querySelectorAll('.pdi-slot');
  slots.forEach(slot => {
    const hint = slot.querySelector('.slot-hint');
    if (hint) hint.style.display = 'inline';
  });

  const msg = card.querySelector('.pdi-status-msg');
  if (msg) {
    msg.className = 'pdi-status-msg';
    msg.textContent = '';
  }
  selectedTapItem = null;
}

document.addEventListener('DOMContentLoaded', () => {
  const targetUnit = localStorage.getItem('pdi-target-unit') || 'ud1';
  localStorage.removeItem('pdi-target-unit');
  selectPDIUnit(targetUnit);
  initPDIDragAndDrop();
});

function initPDIDragAndDrop() {
  const items = document.querySelectorAll('.pdi-item');

  items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
      item.classList.add('dragging');
      e.dataTransfer.setData('text/plain', item.id || '');
      window.currentDraggedPDI = item;
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      window.currentDraggedPDI = null;
    });

    item.addEventListener('click', (e) => {
      e.stopPropagation();
      if (selectedTapItem === item) {
        item.classList.remove('selected-tap');
        selectedTapItem = null;
        document.querySelectorAll('.pdi-drop-box, .pdi-slot').forEach(b => b.classList.remove('waiting-tap-target'));
      } else {
        if (selectedTapItem) selectedTapItem.classList.remove('selected-tap');
        selectedTapItem = item;
        item.classList.add('selected-tap');
        playPDISound('drop');
        document.querySelectorAll('.pdi-drop-box, .pdi-slot').forEach(b => b.classList.add('waiting-tap-target'));
      }
    });
  });

  document.querySelectorAll('.pdi-drop-box, .pdi-slot, .pdi-source-pool').forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const item = window.currentDraggedPDI;
      if (item) {
        placeItemInZone(item, zone);
      }
    });

    zone.addEventListener('click', () => {
      if (selectedTapItem) {
        placeItemInZone(selectedTapItem, zone);
        selectedTapItem.classList.remove('selected-tap');
        selectedTapItem = null;
        document.querySelectorAll('.pdi-drop-box, .pdi-slot').forEach(b => b.classList.remove('waiting-tap-target'));
      }
    });
  });
}

function placeItemInZone(item, zone) {
  if (zone.classList.contains('pdi-slot')) {
    const hint = zone.querySelector('.slot-hint');
    if (hint) hint.style.display = 'none';
    const oldItem = zone.querySelector('.pdi-item');
    if (oldItem && oldItem !== item) {
      const card = zone.closest('.pdi-activity-card');
      const pool = card.querySelector('.pdi-source-pool');
      pool.appendChild(oldItem);
    }
    zone.appendChild(item);
  } else if (zone.classList.contains('pdi-drop-box')) {
    const container = zone.querySelector('.box-items') || zone;
    container.appendChild(item);
  } else if (zone.classList.contains('pdi-source-pool')) {
    zone.appendChild(item);
  }
  playPDISound('drop');
}

function checkOrderActivity(actId) {
  const card = document.getElementById(actId);
  const slots = card.querySelectorAll('.pdi-slot');
  let allPlaced = true;
  let allCorrect = true;

  slots.forEach((slot, idx) => {
    const item = slot.querySelector('.pdi-item');
    if (!item) {
      allPlaced = false;
    } else {
      const targetOrder = (idx + 1).toString();
      if (item.getAttribute('data-order') !== targetOrder) {
        allCorrect = false;
      }
    }
  });

  const msg = card.querySelector('.pdi-status-msg');
  if (!allPlaced) {
    msg.className = 'pdi-status-msg incorrect';
    msg.textContent = '⚠️ Encara queden caselles buides! Col·loca tots els passos abans de comprovar.';
    playPDISound('error');
    return;
  }

  if (allCorrect) {
    msg.className = 'pdi-status-msg correct';
    msg.textContent = '🎉 Excel·lent! Has ordenat tots els passos perfectament!';
    playPDISound('correct');
  } else {
    msg.className = 'pdi-status-msg incorrect';
    msg.textContent = '❌ Hi ha algun pas desordenat. Revisa la seqüència i torna-ho a provar!';
    playPDISound('error');
  }
}

function checkCategoriesActivity(actId) {
  const card = document.getElementById(actId);
  const boxes = card.querySelectorAll('.pdi-drop-box');
  const pool = card.querySelector('.pdi-source-pool');
  const remainingInPool = pool.querySelectorAll('.pdi-item').length;

  const msg = card.querySelector('.pdi-status-msg');
  if (remainingInPool > 0) {
    msg.className = 'pdi-status-msg incorrect';
    msg.textContent = `⚠️ Encara queden ${remainingInPool} elements per classificar!`;
    playPDISound('error');
    return;
  }

  let totalItems = 0;
  let correctItems = 0;

  boxes.forEach(box => {
    const boxCat = box.getAttribute('data-cat');
    const items = box.querySelectorAll('.pdi-item');
    items.forEach(item => {
      totalItems++;
      if (item.getAttribute('data-cat') === boxCat) {
        correctItems++;
        item.style.borderColor = '#10b981';
      } else {
        item.style.borderColor = '#ef4444';
      }
    });
  });

  if (correctItems === totalItems) {
    msg.className = 'pdi-status-msg correct';
    msg.textContent = `🎉 Extraordinari! Has classificat els ${totalItems}/${totalItems} elements correctament!`;
    playPDISound('correct');
  } else {
    msg.className = 'pdi-status-msg incorrect';
    msg.textContent = `Has encertat ${correctItems} de ${totalItems}. Els requadres en roig estan a la caixa equivocada!`;
    playPDISound('error');
  }
}
</script>
