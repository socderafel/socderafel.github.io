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
  <span class="pdi-nav-label">2. Tria l'Activitat Manipulativa:</span>
  <div class="pdi-subpills" id="pdi-subpills-container">
    <!-- Es genera dinàmicament per JS segons la unitat activa -->
  </div>
</div>

<!-- CONTENIDORS D'ACTIVITATS -->
<div class="pdi-board-container" id="pdi-board-container">

  <!-- ========================================================
       UD1: ELS NOMBRES NATURALS (MATEMÀTIQUES)
       ======================================================== -->
  <!-- UD1 - Repte 1: Jerarquia -->
  <div class="pdi-activity-card active" id="act-ud1-1" data-unit="ud1" data-title="Repte 1: Jerarquia d'Operacions">
    <div class="pdi-act-title">
      <span class="act-num">UD1 · Repte 1</span>
      <h3>🔢 Ordena el Viatge de la Jerarquia d'Operacions</h3>
    </div>
    <p class="pdi-instruction">Arrossega (o toca per a seleccionar) els passos en l'ordre matemàtic correcte per a resoldre: <strong>3 + 2 × (5 - 1)²</strong></p>
    
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

  <!-- UD1 - Repte 2: Potències -->
  <div class="pdi-activity-card" id="act-ud1-2" data-unit="ud1" data-title="Repte 2: Càlcul de Potències">
    <div class="pdi-act-title">
      <span class="act-num">UD1 · Repte 2</span>
      <h3>⚡ Emparella cada Potència amb el seu Resultat</h3>
    </div>
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
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud1-2')">Comprovar Potències 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD1 - Repte 3: Descomposició Polinòmica -->
  <div class="pdi-activity-card" id="act-ud1-3" data-unit="ud1" data-title="Repte 3: Ordres d'Unitats">
    <div class="pdi-act-title">
      <span class="act-num">UD1 · Repte 3</span>
      <h3>🧱 Descomposició en Ordres d'Unitats: 45.827</h3>
    </div>
    <p class="pdi-instruction">Arrossega el valor posicional de cada xifra del nombre <strong>45.827</strong> a la seua posició:</p>
    
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-cat="dm">40.000</div>
        <div class="pdi-item num-item" draggable="true" data-cat="um">5.000</div>
        <div class="pdi-item num-item" draggable="true" data-cat="c">800</div>
        <div class="pdi-item num-item" draggable="true" data-cat="d">20</div>
        <div class="pdi-item num-item" draggable="true" data-cat="u">7</div>
      </div>
      <div class="pdi-drop-boxes-grid">
        <div class="pdi-drop-box" data-cat="dm"><div class="box-header"><span class="box-icon">🟣</span> 4 Desenes de Miler</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="um"><div class="box-header"><span class="box-icon">🔵</span> 5 Unitats de Miler</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="c"><div class="box-header"><span class="box-icon">🟢</span> 8 Centenes</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="d"><div class="box-header"><span class="box-icon">🟡</span> 2 Desenes</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="u"><div class="box-header"><span class="box-icon">🔴</span> 7 Unitats</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud1-3')">Comprovar Descomposició 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD2: ORGANITZACIÓ I NUTRICIÓ (BIOLOGIA)
       ======================================================== -->
  <!-- UD2 - Repte 1: Òrgans i Aparells -->
  <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Repte 1: Classificar Òrgans">
    <div class="pdi-act-title">
      <span class="act-num">UD2 · Repte 1</span>
      <h3>🫀 Classifica els Òrgans en el seu Aparell corresponent</h3>
    </div>
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

      <div class="pdi-drop-boxes-grid">
        <div class="pdi-drop-box" data-cat="digestiu"><div class="box-header"><span class="box-icon">🍏</span> Aparell Digestiu</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="respiratori"><div class="box-header"><span class="box-icon">🫁</span> Aparell Respiratori</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="circulatori"><div class="box-header"><span class="box-icon">🫀</span> Aparell Circulatori</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="excretor"><div class="box-header"><span class="box-icon">💧</span> Aparell Excretor</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud2-1')">Comprovar Classificació 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD2 - Repte 2: El Viatge dels Aliments -->
  <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="Repte 2: Viatge dels Aliments">
    <div class="pdi-act-title">
      <span class="act-num">UD2 · Repte 2</span>
      <h3>🥖 Ordena el Viatge dels Aliments pel Tub Digestiu</h3>
    </div>
    <p class="pdi-instruction">Arrossega els òrgans en l'ordre consecutiu que segueix el menjar des de l'entrada fins a l'expulsió:</p>
    
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Estómac (suc gàstric i quim)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Boca (masticació i saliva)</div>
        <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Intestí gros (absorció d'aigua i excrements)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Faringe (deglució)</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Intestí prim (absorció de nutrients)</div>
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Esòfag (moviments peristàltics)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Etapa 1</span><span class="slot-hint">Inici: masticació</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Etapa 2</span><span class="slot-hint">Pas comú: faringe</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Etapa 3</span><span class="slot-hint">Tub muscular de baixada</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Etapa 4</span><span class="slot-hint">Òrgan amb àcid clorhídric</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">Etapa 5</span><span class="slot-hint">Absorció a la sang</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">Etapa 6</span><span class="slot-hint">Formació de femtes</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-2')">Comprovar Tub Digestiu 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD2 - Repte 3: Components de la Sang -->
  <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Repte 3: La Sang i els Vasos">
    <div class="pdi-act-title">
      <span class="act-num">UD2 · Repte 3</span>
      <h3>🩸 Components de la Sang i Vasos Sanguinis</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada element a la seua funció vital:</p>
    
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="oxigen">Glòbuls Roigs (Eritròcits)</div>
        <div class="pdi-item" draggable="true" data-cat="defenses">Glòbuls Blancs (Leucòcits)</div>
        <div class="pdi-item" draggable="true" data-cat="taps">Plaquetes (Trombòcits)</div>
        <div class="pdi-item" draggable="true" data-cat="sortida">Artèries</div>
        <div class="pdi-item" draggable="true" data-cat="retorn">Venes</div>
      </div>
      <div class="pdi-drop-boxes-grid">
        <div class="pdi-drop-box" data-cat="oxigen"><div class="box-header"><span class="box-icon">🔴</span> Transport d'Oxigen (Hemoglobina)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="defenses"><div class="box-header"><span class="box-icon">🛡️</span> Defenses i Immunitat</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="taps"><div class="box-header"><span class="box-icon">🩹</span> Coagulació i Tancament de Ferides</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="sortida"><div class="box-header"><span class="box-icon">💨</span> Condueixen sang des del cor als òrgans</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="retorn"><div class="box-header"><span class="box-icon">🔄</span> Retornen la sang dels òrgans cap al cor</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud2-3')">Comprovar Sang i Vasos 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD3: ELS NOMBRES ENTERS (MATEMÀTIQUES)
       ======================================================== -->
  <!-- UD3 - Repte 1: Positius vs Negatius -->
  <div class="pdi-activity-card" id="act-ud3-1" data-unit="ud3" data-title="Repte 1: Positius o Negatius">
    <div class="pdi-act-title">
      <span class="act-num">UD3 · Repte 1</span>
      <h3>➕➖ Nombres Enters a la Vida Real: Positius o Negatius?</h3>
    </div>
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
        <div class="pdi-drop-box box-positiu" data-cat="positiu"><div class="box-header"><span class="box-icon">🟢</span> Nombres Positius (+)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box box-negatiu" data-cat="negatiu"><div class="box-header"><span class="box-icon">🔴</span> Nombres Negatius (-)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3-1')">Comprovar Situacions 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD3 - Repte 2: Recta Numèrica -->
  <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Repte 2: Ordenar la Recta Numèrica">
    <div class="pdi-act-title">
      <span class="act-num">UD3 · Repte 2</span>
      <h3>📏 Ordena els Nombres Enters de Menor a Major</h3>
    </div>
    <p class="pdi-instruction">Arrossega els enters ordenant-los estrictament de menor (més negatiu a l'esquerra) a major (positius a la dreta):</p>
    
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item num-item" draggable="true" data-order="5">+3</div>
        <div class="pdi-item num-item" draggable="true" data-order="1">-9</div>
        <div class="pdi-item num-item" draggable="true" data-order="6">+8</div>
        <div class="pdi-item num-item" draggable="true" data-order="3">-2</div>
        <div class="pdi-item num-item" draggable="true" data-order="2">-5</div>
        <div class="pdi-item num-item" draggable="true" data-order="4">0</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Més petit</span><span class="slot-hint">Cota més negativa</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2n</span><span class="slot-hint">Negatiu intermedi</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3r</span><span class="slot-hint">Negatiu pròxim a zero</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4t</span><span class="slot-hint">Punt d'origen central</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5è</span><span class="slot-hint">Positiu xicotet</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">Més gran</span><span class="slot-hint">Major nombre positiu</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-2')">Comprovar Recta Numèrica 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD3 - Repte 3: Regla dels Signes -->
  <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Repte 3: Regla dels Signes">
    <div class="pdi-act-title">
      <span class="act-num">UD3 · Repte 3</span>
      <h3>✖️➗ La Regla dels Signes en Multiplicació i Divisió</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada operació al seu resultat exacte tenint en compte que <em>menys per menys és més</em>:</p>
    
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
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3-3')">Comprovar Signes 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD4: DIVISIBILITAT, PRIMERS I COMPOSTOS (MATEMÀTIQUES)
       ======================================================== -->
  <!-- UD4 - Repte 1: Primers vs Compostos -->
  <div class="pdi-activity-card" id="act-ud4-1" data-unit="ud4" data-title="Repte 1: Primers vs Compostos">
    <div class="pdi-act-title">
      <span class="act-num">UD4 · Repte 1</span>
      <h3>⭐ Nombres Primers vs Nombres Compostos</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada nombre a la seua categoria: <strong>Primers</strong> (només 2 divisors) o <strong>Compostos</strong> (> 2 divisors):</p>

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
        <div class="pdi-drop-box box-primer" data-cat="primer"><div class="box-header"><span class="box-icon">⭐</span> Nombres Primers (2 divisors)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box box-compost" data-cat="compost"><div class="box-header"><span class="box-icon">📦</span> Nombres Compostos (&gt; 2 divisors)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-1')">Comprovar Primers i Compostos 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD4 - Repte 2: Criteris de Divisibilitat -->
  <div class="pdi-activity-card" id="act-ud4-2" data-unit="ud4" data-title="Repte 2: Criteris de Divisibilitat">
    <div class="pdi-act-title">
      <span class="act-num">UD4 · Repte 2</span>
      <h3>🎯 Criteris de Divisibilitat: Per 2, per 3 o per 5?</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada nombre a la caixa del criteri que compleix de manera més directa:</p>
    
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
        <div class="pdi-drop-box" data-cat="div2"><div class="box-header"><span class="box-icon">2️⃣</span> Divisible per 2 (Acaba en parell)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="div3"><div class="box-header"><span class="box-icon">3️⃣</span> Divisible per 3 (Suma de xifres)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="div5"><div class="box-header"><span class="box-icon">5️⃣</span> Divisible per 5 (Acaba en 0 o 5)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4-2')">Comprovar Criteris 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD5: LES FRACCIONS (MATEMÀTIQUES)
       ======================================================== -->
  <!-- UD5 - Repte 1: Tipus de Fraccions -->
  <div class="pdi-activity-card" id="act-ud5-1" data-unit="ud5" data-title="Repte 1: Tipus de Fraccions">
    <div class="pdi-act-title">
      <span class="act-num">UD5 · Repte 1</span>
      <h3>🍰 Tipus de Fraccions: Pròpies, Impròpies o Iguals a 1</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada fracció al seu calaix segons si és menor que 1, major que 1 o igual a 1:</p>

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
        <div class="pdi-drop-box" data-cat="propia"><div class="box-header"><span class="box-icon">🍰</span> Fraccions Pròpies (&lt; 1)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="impropia"><div class="box-header"><span class="box-icon">🍕</span> Fraccions Impròpies (&gt; 1)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="unitat"><div class="box-header"><span class="box-icon">🎯</span> Igual a la Unitat (= 1)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5-1')">Comprovar Fraccions 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD5 - Repte 2: Fraccions Equivalents -->
  <div class="pdi-activity-card" id="act-ud5-2" data-unit="ud5" data-title="Repte 2: Fraccions Equivalents">
    <div class="pdi-act-title">
      <span class="act-num">UD5 · Repte 2</span>
      <h3>🪞 Emparella Fraccions Equivalents</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada fracció simplificada amb la seua fracció equivalent ampliada:</p>
    
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item frac-item" draggable="true" data-cat="f12"><sup>1</sup>/<sub>2</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f23"><sup>2</sup>/<sub>3</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f34"><sup>3</sup>/<sub>4</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="f25"><sup>2</sup>/<sub>5</sub></div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="f12"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>3</sup>/<sub>6</sub> (o <sup>5</sup>/<sub>10</sub>)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f23"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>4</sup>/<sub>6</sub> (o <sup>6</sup>/<sub>9</sub>)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f34"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>6</sup>/<sub>8</sub> (o <sup>9</sup>/<sub>12</sub>)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="f25"><div class="box-header"><span class="box-icon">⚖️</span> Equivalent a <sup>4</sup>/<sub>10</sub> (o <sup>6</sup>/<sub>15</sub>)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5-2')">Comprovar Equivalències 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD6: L'UNIVERS I EL SISTEMA SOLAR (BIOLOGIA I GEOLOGIA)
       ======================================================== -->
  <!-- UD6 - Repte 1: Planetes Rocosos vs Gasosos -->
  <div class="pdi-activity-card" id="act-ud6-1" data-unit="ud6" data-title="Repte 1: Rocosos vs Gasosos">
    <div class="pdi-act-title">
      <span class="act-num">UD6 · Repte 1</span>
      <h3>🪐 Planetes Rocosos vs Planetes Gasosos</h3>
    </div>
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
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud6-1')">Comprovar Planetes 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD6 - Repte 2: Distància al Sol -->
  <div class="pdi-activity-card" id="act-ud6-2" data-unit="ud6" data-title="Repte 2: Ordenar des del Sol">
    <div class="pdi-act-title">
      <span class="act-num">UD6 · Repte 2</span>
      <h3>☀️ Ordena els Planetes des del Sol cap a l'Exterior</h3>
    </div>
    <p class="pdi-instruction">Arrossega els planetes en l'ordre consecutiu des del més pròxim al Sol fins al més llunyà:</p>
    
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
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">1r Planeta</span><span class="slot-hint">Més proper al Sol</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2n Planeta</span><span class="slot-hint">El més calent (efecte hivernacle)</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3r Planeta</span><span class="slot-hint">Planeta blau amb vida</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4t Planeta</span><span class="slot-hint">Planeta roig</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5è Planeta</span><span class="slot-hint">Gegant amb Gran Taca Roja</span></div>
        <div class="pdi-slot" data-slot="6"><span class="slot-badge">6è Planeta</span><span class="slot-hint">Planeta amb anells espectaculars</span></div>
        <div class="pdi-slot" data-slot="7"><span class="slot-badge">7è Planeta</span><span class="slot-hint">Gegant de gel inclinat</span></div>
        <div class="pdi-slot" data-slot="8"><span class="slot-badge">8è Planeta</span><span class="slot-hint">El més allunyat del Sol</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-2')">Comprovar Sistema Solar 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD7: EL PLANETA TERRA: GEOSFERA I MOVIMENTS (GEOLOGIA)
       ======================================================== -->
  <!-- UD7 - Repte 1: Capes de la Geosfera -->
  <div class="pdi-activity-card" id="act-ud7-1" data-unit="ud7" data-title="Repte 1: Capes de la Terra">
    <div class="pdi-act-title">
      <span class="act-num">UD7 · Repte 1</span>
      <h3>🌍 Les 4 Capes Internes de la Geosfera</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada descripció a la capa correcta de l'interior de la Terra:</p>

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
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7-1')">Comprovar Capes de la Terra 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD7 - Repte 2: Rotació vs Traslació -->
  <div class="pdi-activity-card" id="act-ud7-2" data-unit="ud7" data-title="Repte 2: Rotació vs Traslació">
    <div class="pdi-act-title">
      <span class="act-num">UD7 · Repte 2</span>
      <h3>🔄 Moviments de la Terra: Rotació vs Traslació</h3>
    </div>
    <p class="pdi-instruction">Classifica les característiques i conseqüències segons el moviment de la Terra:</p>
    
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="rotacio">Gira sobre el seu propi eix</div>
        <div class="pdi-item" draggable="true" data-cat="traslacio">Òrbita al voltant del Sol</div>
        <div class="pdi-item" draggable="true" data-cat="rotacio">Dura 24 hores (1 dia solar)</div>
        <div class="pdi-item" draggable="true" data-cat="traslacio">Dura 365 dies i 6 hores (1 any)</div>
        <div class="pdi-item" draggable="true" data-cat="rotacio">Origina el Dia i la Nit</div>
        <div class="pdi-item" draggable="true" data-cat="traslacio">Origina les 4 Estacions de l'any</div>
      </div>
      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="rotacio"><div class="box-header"><span class="box-icon">🌍</span> Moviment de Rotació (Eix propi)</div><div class="box-items"></div></div>
        <div class="pdi-drop-box" data-cat="traslacio"><div class="box-header"><span class="box-icon">☀️</span> Moviment de Traslació (Al voltant del Sol)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7-2')">Comprovar Moviments 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD8: L'ATMOSFERA TERRESTRE (BIOLOGIA I GEOLOGIA)
       ======================================================== -->
  <!-- UD8 - Repte 1: Ordenar Capes de l'Atmosfera -->
  <div class="pdi-activity-card" id="act-ud8-1" data-unit="ud8" data-title="Repte 1: Capes Atmosfèriques">
    <div class="pdi-act-title">
      <span class="act-num">UD8 · Repte 1</span>
      <h3>🌤️ Ordena les Capes de l'Atmosfera des de Baix cap a Dalt</h3>
    </div>
    <p class="pdi-instruction">Arrossega les capes començant per la més pròxima al terra (superfície) fins a l'espai exterior:</p>
    
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Mesosfera (on es desintegren els meteorits)</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Troposfera (on vivim, amb l'aire i els núvols)</div>
        <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Exosfera (límit exterior amb l'espai)</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Estratosfera (conté la capa d'ozó)</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Termosfera (on es produeixen les aurores)</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">1a Capa (Terra)</span><span class="slot-hint">Contacte amb nosaltres</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2a Capa</span><span class="slot-hint">Capa amb l'Ozó</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3a Capa</span><span class="slot-hint">Capa intermèdia</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4a Capa</span><span class="slot-hint">Aurores i satèl·lits</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5a Capa (Espai)</span><span class="slot-hint">Límit exterior</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8-1')">Comprovar Ordre Atmosfèric 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD8 - Repte 2: Aparells Meteorològics -->
  <div class="pdi-activity-card" id="act-ud8-2" data-unit="ud8" data-title="Repte 2: Aparells Meteorològics">
    <div class="pdi-act-title">
      <span class="act-num">UD8 · Repte 2</span>
      <h3>🌡️ Aparells de la Caseta Meteorològica</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada instrument meteorològic a la magnitud que mesura:</p>
    
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
        <div class="pdi-drop-box" data-cat="pluja"><div class="box-header"><span class="box-icon">🌧️</span> Quantitat de Precipitació (L/m²)</div><div class="box-items"></div></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud8-2')">Comprovar Instruments 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ========================================================
       UD9: LA HIDROSFERA TERRESTRE (BIOLOGIA I GEOLOGIA)
       ======================================================== -->
  <!-- UD9 - Repte 1: Etapes del Cicle de l'Aigua -->
  <div class="pdi-activity-card" id="act-ud9-1" data-unit="ud9" data-title="Repte 1: Cicle de l'Aigua">
    <div class="pdi-act-title">
      <span class="act-num">UD9 · Repte 1</span>
      <h3>💧 Ordena les 4 Etapes del Cicle de l'Aigua</h3>
    </div>
    <p class="pdi-instruction">Arrossega les etapes del cicle hidrològic en la seua seqüència natural:</p>
    
    <div class="pdi-order-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Precipitació: L'aigua dels núvols cau en pluja, neu o calamarsa</div>
        <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Evaporació: El Sol calfa l'aigua superficial i puja com a vapor</div>
        <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Infiltració i Escorrentia: L'aigua torna per rius i aqüífers cap al mar</div>
        <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Condensació: El vapor es refreda en altura formant els núvols</div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Etapa 1</span><span class="slot-hint">El Sol calfa l'aigua</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Etapa 2</span><span class="slot-hint">Formació de núvols</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Etapa 3</span><span class="slot-hint">Caiguda de pluja</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Etapa 4</span><span class="slot-hint">Retorn als mars</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9-1')">Comprovar Cicle Hidrològic 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD9 - Repte 2: Aigua Dolça vs Aigua Salada -->
  <div class="pdi-activity-card" id="act-ud9-2" data-unit="ud9" data-title="Repte 2: Aigua Dolça vs Salada">
    <div class="pdi-act-title">
      <span class="act-num">UD9 · Repte 2</span>
      <h3>🌊 Aigua Dolça (3%) vs Aigua Salada (97%)</h3>
    </div>
    <p class="pdi-instruction">Classifica les masses d'aigua de la Terra segons la seua salinitat:</p>
    
    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="salada">Oceans (Atlàntic, Pacífic, Índic...)</div>
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
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud9-2')">Comprovar Salinitat 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- UD9 - Repte 3: Canvis d'Estat de l'Aigua -->
  <div class="pdi-activity-card" id="act-ud9-3" data-unit="ud9" data-title="Repte 3: Canvis d'Estat">
    <div class="pdi-act-title">
      <span class="act-num">UD9 · Repte 3</span>
      <h3>🧊♨️ Els Canvis d'Estat: Guanyen o Perden Calor?</h3>
    </div>
    <p class="pdi-instruction">Classifica cada canvi d'estat de la matèria segons si necessita escalfar-se (guanyar calor) o refredar-se (perdre calor):</p>
    
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
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud9-3')">Comprovar Canvis d'Estat 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

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

/* MODE PISSARRA COMPLETA (PDI FULLSCREEN) */
body.pdi-fullscreen-mode {
  font-size: 1.25rem;
}
body.pdi-fullscreen-mode aside.sidebar {
  display: none !important;
}
body.pdi-fullscreen-mode main.content {
  max-width: 98vw !important;
  width: 98vw !important;
  padding: 10px 24px !important;
}
body.pdi-fullscreen-mode .pdi-item {
  font-size: 1.35rem !important;
  padding: 16px 24px !important;
}
body.pdi-fullscreen-mode .box-header {
  font-size: 1.35rem !important;
}
body.pdi-fullscreen-mode .btn-pdi-check {
  font-size: 1.35rem !important;
  padding: 16px 32px !important;
}
body.pdi-fullscreen-mode .pdi-drop-box {
  min-height: 240px !important;
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

function togglePDIFullscreen() {
  document.body.classList.toggle('pdi-fullscreen-mode');
  const btn = document.getElementById('btn-fullscreen-toggle');
  if (document.body.classList.contains('pdi-fullscreen-mode')) {
    btn.querySelector('.tool-icon').textContent = '🪟';
    btn.querySelector('.tool-text').textContent = 'Eixir de Pissarra Completa';
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  } else {
    btn.querySelector('.tool-icon').textContent = '🖥️';
    btn.querySelector('.tool-text').textContent = 'Mode Pissarra Completa';
    if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

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
  selectPDIUnit('ud1');
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
