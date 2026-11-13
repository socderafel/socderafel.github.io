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
    <span class="pdi-badge-pwa">📱 PWA Instal·lable</span>
  </div>
  <p>Espai d'activitats tàctils i manipulatives dissenyat especialment per a <strong>treballar a la pissarra digital de l'aula</strong> amb el grup o per a repassar de forma interactiva des de <strong>tauletes i mòbils</strong>. Arrossega els elements amb el dit o el ratolí, o toca per a seleccionar i col·locar!</p>
  
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
      <span class="tool-text">Següent Alumne / Reiniciar</span>
    </button>
  </div>
</div>

<!-- Selector de Reptes per Unitats -->
<div class="pdi-unit-nav-wrap">
  <span class="pdi-nav-label">Tria el Repte de la Pissarra:</span>
  <div class="pdi-unit-pills">
    <button class="pdi-pill active" onclick="switchPDIActivity('act-ud1')">UD1 Jerarquia</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud2')">UD2 Cos Humà</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud3')">UD3 Nombres Enters</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud4')">UD4 Primers / Compostos</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud5')">UD5 Fraccions</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud6')">UD6 Planetes</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud7')">UD7 Geosfera</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud8')">UD8 Atmosfera</button>
    <button class="pdi-pill" onclick="switchPDIActivity('act-ud9')">UD9 Cicle Aigua</button>
  </div>
</div>

<!-- CONTENIDORS D'ACTIVITATS -->
<div class="pdi-board-container" id="pdi-board-container">

  <!-- ==================== ACTIVITAT 1: UD1 JERARQUIA ==================== -->
  <div class="pdi-activity-card active" id="act-ud1">
    <div class="pdi-act-title">
      <span class="act-num">UD1</span>
      <h3>🔢 Ordena el Viatge de la Jerarquia d'Operacions</h3>
    </div>
    <p class="pdi-instruction">Arrossega (o toca per a seleccionar) els passos en l'ordre matemàtic correcte de resolució per a calcular: <strong>3 + 2 × (5 - 1)²</strong></p>
    
    <div class="pdi-order-wrapper" data-correct-order="item-u1-1,item-u1-2,item-u1-3,item-u1-4">
      <div class="pdi-source-pool" id="pool-ud1">
        <div class="pdi-item" draggable="true" id="item-u1-3" data-order="3">
          <span class="item-handle">☰</span> Multiplicar: 2 × 16 = 32
        </div>
        <div class="pdi-item" draggable="true" id="item-u1-1" data-order="1">
          <span class="item-handle">☰</span> Resoldre el parèntesi: (5 - 1) = 4
        </div>
        <div class="pdi-item" draggable="true" id="item-u1-4" data-order="4">
          <span class="item-handle">☰</span> Sumar al final: 3 + 32 = 35
        </div>
        <div class="pdi-item" draggable="true" id="item-u1-2" data-order="2">
          <span class="item-handle">☰</span> Elevar la potència: 4² = 16
        </div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">Arrossega ací el 1r pas</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">Arrossega ací el 2n pas</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">Arrossega ací el 3r pas</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">Arrossega ací el 4t pas</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1')">Comprovar Resposta 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 2: UD2 COS HUMÀ ==================== -->
  <div class="pdi-activity-card" id="act-ud2">
    <div class="pdi-act-title">
      <span class="act-num">UD2</span>
      <h3>🫀 Classifica els Òrgans en el seu Aparell corresponent</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada òrgan a la caixa de l'aparell humà al qual pertany:</p>

    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool" id="pool-ud2">
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
        <div class="pdi-drop-box" data-cat="digestiu">
          <div class="box-header"><span class="box-icon">🍏</span> Aparell Digestiu</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="respiratori">
          <div class="box-header"><span class="box-icon">🫁</span> Aparell Respiratori</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="circulatori">
          <div class="box-header"><span class="box-icon">🫀</span> Aparell Circulatori</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="excretor">
          <div class="box-header"><span class="box-icon">💧</span> Aparell Excretor</div>
          <div class="box-items"></div>
        </div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud2')">Comprovar Classificació 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 3: UD3 NOMBRES ENTERS ==================== -->
  <div class="pdi-activity-card" id="act-ud3">
    <div class="pdi-act-title">
      <span class="act-num">UD3</span>
      <h3>➕➖ Nombres Enters a la Vida Real: Positius o Negatius?</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada situació quotidiana al contenidor de <strong>Nombres Positius (+)</strong> o <strong>Nombres Negatius (-)</strong>:</p>

    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool" id="pool-ud3">
        <div class="pdi-item" draggable="true" data-cat="positiu">Pujar al 3r pis de l'institut</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Baixar al soterrani -2 del pàrquing</div>
        <div class="pdi-item" draggable="true" data-cat="positiu">Ingressar 50 € a la llibreta</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Deure 20 € a un amic</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Temperatura de 5 °C sota zero</div>
        <div class="pdi-item" draggable="true" data-cat="positiu">Cim d'una muntanya a 850 m d'altitud</div>
        <div class="pdi-item" draggable="true" data-cat="negatiu">Submarí navegant a 60 m sota el mar</div>
        <div class="pdi-item" draggable="true" data-cat="positiu">Pujar 15 graus la calefacció</div>
      </div>

      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box box-positiu" data-cat="positiu">
          <div class="box-header"><span class="box-icon">🟢</span> Nombres Positius (+)</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box box-negatiu" data-cat="negatiu">
          <div class="box-header"><span class="box-icon">🔴</span> Nombres Negatius (-)</div>
          <div class="box-items"></div>
        </div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud3')">Comprovar Classificació 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 4: UD4 PRIMERS I COMPOSTOS ==================== -->
  <div class="pdi-activity-card" id="act-ud4">
    <div class="pdi-act-title">
      <span class="act-num">UD4</span>
      <h3>⭐ Nombres Primers vs Nombres Compostos</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada nombre a la seua categoria: <strong>Primers</strong> (només tenen 2 divisors: l'1 i ells mateixos) o <strong>Compostos</strong> (tenen més de 2 divisors):</p>

    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool" id="pool-ud4">
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
        <div class="pdi-item num-item" draggable="true" data-cat="primer">17</div>
        <div class="pdi-item num-item" draggable="true" data-cat="compost">21</div>
      </div>

      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box box-primer" data-cat="primer">
          <div class="box-header"><span class="box-icon">⭐</span> Nombres Primers (2 divisors)</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box box-compost" data-cat="compost">
          <div class="box-header"><span class="box-icon">📦</span> Nombres Compostos (> 2 divisors)</div>
          <div class="box-items"></div>
        </div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud4')">Comprovar Nombres 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 5: UD5 FRACCIONS ==================== -->
  <div class="pdi-activity-card" id="act-ud5">
    <div class="pdi-act-title">
      <span class="act-num">UD5</span>
      <h3>🍰 Tipus de Fraccions: Pròpies, Impròpies o Iguals a 1</h3>
    </div>
    <p class="pdi-instruction">Arrossega cada fracció al calaix que li correspon segons si és menor que 1 (Pròpia), major que 1 (Impròpia) o exactament 1:</p>

    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool" id="pool-ud5">
        <div class="pdi-item frac-item" draggable="true" data-cat="propia"><sup>1</sup>/<sub>2</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="impropia"><sup>5</sup>/<sub>3</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="unitat"><sup>4</sup>/<sub>4</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="propia"><sup>3</sup>/<sub>5</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="impropia"><sup>7</sup>/<sub>4</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="unitat"><sup>9</sup>/<sub>9</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="propia"><sup>2</sup>/<sub>7</sub></div>
        <div class="pdi-item frac-item" draggable="true" data-cat="impropia"><sup>8</sup>/<sub>5</sub></div>
      </div>

      <div class="pdi-drop-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="propia">
          <div class="box-header"><span class="box-icon">🍰</span> Fraccions Pròpies (&lt; 1)</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="impropia">
          <div class="box-header"><span class="box-icon">🍕</span> Fraccions Impròpies (&gt; 1)</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="unitat">
          <div class="box-header"><span class="box-icon">🎯</span> Igual a la Unitat (= 1)</div>
          <div class="box-items"></div>
        </div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud5')">Comprovar Fraccions 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 6: UD6 PLANETES ==================== -->
  <div class="pdi-activity-card" id="act-ud6">
    <div class="pdi-act-title">
      <span class="act-num">UD6</span>
      <h3>🪐 Els Planetes del Sistema Solar: Rocosos vs Gasosos</h3>
    </div>
    <p class="pdi-instruction">Arrossega els 8 planetes del Sistema Solar al seu grup: <strong>Planetes Rocosos (Interiors)</strong> o <strong>Planetes Gasosos / Gegants (Exteriors)</strong>:</p>

    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool" id="pool-ud6">
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
        <div class="pdi-drop-box" data-cat="rocos">
          <div class="box-header"><span class="box-icon">🪨</span> Planetes Rocosos / Interiors</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="gasos">
          <div class="box-header"><span class="box-icon">🪐</span> Planetes Gasosos / Exteriors</div>
          <div class="box-items"></div>
        </div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud6')">Comprovar Planetes 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 7: UD7 GEOSFERA ==================== -->
  <div class="pdi-activity-card" id="act-ud7">
    <div class="pdi-act-title">
      <span class="act-num">UD7</span>
      <h3>🌍 Les Capes de la Terra i les seues Característiques</h3>
    </div>
    <p class="pdi-instruction">Arrossega la definició o tret principal a la capa de la Geosfera que li correspon:</p>

    <div class="pdi-categories-wrapper">
      <div class="pdi-source-pool" id="pool-ud7">
        <div class="pdi-item" draggable="true" data-cat="escorca">Capa sòlida més superficial i prima on vivim</div>
        <div class="pdi-item" draggable="true" data-cat="mantell">Format per roques calentes i magma en moviment continu</div>
        <div class="pdi-item" draggable="true" data-cat="nucli-ext">Capa líquida de ferro i níquel que genera el camp magnètic</div>
        <div class="pdi-item" draggable="true" data-cat="nucli-int">Esfera metàl·lica sòlida sotmesa a pressions extremes al centre</div>
      </div>

      <div class="pdi-drop-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="escorca">
          <div class="box-header"><span class="box-icon">⛰️</span> Escorça Terrestre</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="mantell">
          <div class="box-header"><span class="box-icon">🌋</span> Mantell Terrestre</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="nucli-ext">
          <div class="box-header"><span class="box-icon">🧲</span> Nucli Extern (Líquid)</div>
          <div class="box-items"></div>
        </div>
        <div class="pdi-drop-box" data-cat="nucli-int">
          <div class="box-header"><span class="box-icon">⚪</span> Nucli Intern (Sòlid)</div>
          <div class="box-items"></div>
        </div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkCategoriesActivity('act-ud7')">Comprovar Capes 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 8: UD8 ATMOSFERA ==================== -->
  <div class="pdi-activity-card" id="act-ud8">
    <div class="pdi-act-title">
      <span class="act-num">UD8</span>
      <h3>🌤️ Ordena les Capes de l'Atmosfera des del Terra cap a l'Espai</h3>
    </div>
    <p class="pdi-instruction">Arrossega les capes atmosfèriques començant des de la més pròxima al terra (superfície) fins a la més exterior (espai):</p>
    
    <div class="pdi-order-wrapper" data-correct-order="item-at-1,item-at-2,item-at-3,item-at-4,item-at-5">
      <div class="pdi-source-pool" id="pool-ud8">
        <div class="pdi-item" draggable="true" id="item-at-3" data-order="3">
          <span class="item-handle">☰</span> Mesosfera (on es desintegren els meteorits)
        </div>
        <div class="pdi-item" draggable="true" id="item-at-1" data-order="1">
          <span class="item-handle">☰</span> Troposfera (on vivim, amb l'aire que respirem i els núvols)
        </div>
        <div class="pdi-item" draggable="true" id="item-at-5" data-order="5">
          <span class="item-handle">☰</span> Exosfera (límit exterior en contacte amb l'espai)
        </div>
        <div class="pdi-item" draggable="true" id="item-at-2" data-order="2">
          <span class="item-handle">☰</span> Estratosfera (conté la capa d'ozó protectora)
        </div>
        <div class="pdi-item" draggable="true" id="item-at-4" data-order="4">
          <span class="item-handle">☰</span> Termosfera (on es produeixen les aurores polars)
        </div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">1a Capa (Terra)</span><span class="slot-hint">Capa en contacte amb nosaltres</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">2a Capa</span><span class="slot-hint">Capa amb l'Ozó</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">3a Capa</span><span class="slot-hint">Capa intermèdia freda</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">4a Capa</span><span class="slot-hint">Capa calenta d'aurores</span></div>
        <div class="pdi-slot" data-slot="5"><span class="slot-badge">5a Capa (Espai)</span><span class="slot-hint">Capa més externa</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8')">Comprovar Ordre Atmosfèric 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

  <!-- ==================== ACTIVITAT 9: UD9 CICLE DE L'AIGUA ==================== -->
  <div class="pdi-activity-card" id="act-ud9">
    <div class="pdi-act-title">
      <span class="act-num">UD9</span>
      <h3>💧 Ordena les Etapes del Cicle de l'Aigua</h3>
    </div>
    <p class="pdi-instruction">Arrossega les 4 grans fases del cicle hidrològic en l'ordre natural en què tenen lloc:</p>
    
    <div class="pdi-order-wrapper" data-correct-order="item-aq-1,item-aq-2,item-aq-3,item-aq-4">
      <div class="pdi-source-pool" id="pool-ud9">
        <div class="pdi-item" draggable="true" id="item-aq-3" data-order="3">
          <span class="item-handle">☰</span> 3. Precipitació: L'aigua dels núvols cau en forma de pluja, neu o calamarsa
        </div>
        <div class="pdi-item" draggable="true" id="item-aq-1" data-order="1">
          <span class="item-handle">☰</span> 1. Evaporació: El Sol calfa l'aigua superficial i puja en vapor invisible
        </div>
        <div class="pdi-item" draggable="true" id="item-aq-4" data-order="4">
          <span class="item-handle">☰</span> 4. Infiltració i Escorrentia: L'aigua flueix per rius i aqüífers tornant al mar
        </div>
        <div class="pdi-item" draggable="true" id="item-aq-2" data-order="2">
          <span class="item-handle">☰</span> 2. Condensació: El vapor es refreda en altura formant els núvols
        </div>
      </div>
      <div class="pdi-slots-column">
        <div class="pdi-slot" data-slot="1"><span class="slot-badge">Etapa 1</span><span class="slot-hint">Arrossega el començament amb el Sol</span></div>
        <div class="pdi-slot" data-slot="2"><span class="slot-badge">Etapa 2</span><span class="slot-hint">Arrossega la formació de núvols</span></div>
        <div class="pdi-slot" data-slot="3"><span class="slot-badge">Etapa 3</span><span class="slot-hint">Arrossega la caiguda d'aigua</span></div>
        <div class="pdi-slot" data-slot="4"><span class="slot-badge">Etapa 4</span><span class="slot-hint">Arrossega el retorn als rius i mars</span></div>
      </div>
    </div>
    <div class="pdi-footer-feedback">
      <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9')">Comprovar Cicle de l'Aigua 🚀</button>
      <div class="pdi-status-msg"></div>
    </div>
  </div>

</div>

<!-- ESTILS DE LA PISSARRA DIGITAL -->
<style>
/* Disseny PDI d'alta visibilitat per a l'aula */
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
  margin: 20px 0 24px 0;
}
.pdi-nav-label {
  display: block;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--text-muted, #64748b);
  margin-bottom: 10px;
}
.pdi-unit-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pdi-pill {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1.5px solid var(--border, #cbd5e1);
  background: var(--bg-card, #ffffff);
  color: var(--text, #1e293b);
  font-size: 0.9rem;
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

/* Àrea d'Arrossegament (Elements i Destinacions) */
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

/* Targeta manipulativa (Arrossegable) */
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

/* Graella de Caixes de Destinació */
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

/* Disseny d'Ordre Seqüencial (Slots) */
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

/* Peu de Feedback i Comprovació */
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

// Síntesi d'efectes sonors mitjançant Web Audio API (sense arxius mp3 externs)
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
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
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

function switchPDIActivity(actId) {
  document.querySelectorAll('.pdi-pill').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pdi-activity-card').forEach(c => c.classList.remove('active'));
  
  const targetCard = document.getElementById(actId);
  if (targetCard) targetCard.classList.add('active');

  const btn = Array.from(document.querySelectorAll('.pdi-pill')).find(b => b.getAttribute('onclick').includes(actId));
  if (btn) btn.classList.add('active');

  resetPDIActivity(actId);
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

  // Desordenar elements de manera aleatòria per al següent alumne
  items.sort(() => Math.random() - 0.5);
  items.forEach(item => {
    item.classList.remove('selected-tap', 'dragging');
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

// INICIALITZACIÓ D'ARROSSEGAMENT TÀCTIL I RATOLÍ
document.addEventListener('DOMContentLoaded', () => {
  initPDIDragAndDrop();
});

function initPDIDragAndDrop() {
  const items = document.querySelectorAll('.pdi-item');
  const dropBoxes = document.querySelectorAll('.pdi-drop-box .box-items, .pdi-slot, .pdi-source-pool');

  items.forEach(item => {
    // Ratolí tradicional
    item.addEventListener('dragstart', (e) => {
      item.classList.add('dragging');
      e.dataTransfer.setData('text/plain', item.id || '');
      window.currentDraggedPDI = item;
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      window.currentDraggedPDI = null;
    });

    // Pissarra Digital i Tàctil: Tocar per a seleccionar / moure
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

  // Zones de caiguda (Drop targets)
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

    // Clic per a col·locar l'element seleccionat
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

// COMPROVACIÓ D'ORDRE (ACTIVITATS SEQÜENCIALS)
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

// COMPROVACIÓ DE CATEGORIES (CAIXES CLASSIFICATÒRIES)
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
