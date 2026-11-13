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
      <p>Ciències Aplicades I (1r FPB) · 90 Reptes Interactius multijoc per a la pissarra digital de classe o tauleta.</p>
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
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔢</span> <h3>UD1 · Els Nombres Naturals</h3></div>
      <p class="card-desc">Sistema de numeració decimal, operacions bàsiques, jerarquia, potències i arrels.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud1-1" onclick="launchGameActivity('act-ud1-1')">
          <span class="act-idx">🧩 Descomposició Decimal</span>
          <span class="act-name">R1 · Valor Posicional</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-2" onclick="launchGameActivity('act-ud1-2')">
          <span class="act-idx">⚡ Propietats i Càlcul</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-3" onclick="launchGameActivity('act-ud1-3')">
          <span class="act-idx">🕵️ Tipus de Nombres</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-4" onclick="launchGameActivity('act-ud1-4')">
          <span class="act-idx">🔢 Operacions i Arrels</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-5" onclick="launchGameActivity('act-ud1-5')">
          <span class="act-idx">🪞 Fonaments Naturals</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-6" onclick="launchGameActivity('act-ud1-6')">
          <span class="act-idx">🧩 Jerarquia PEMDAS</span>
          <span class="act-name">R6 · Jerarquia Combinada</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-7" onclick="launchGameActivity('act-ud1-7')">
          <span class="act-idx">⚡ Potències Base 10</span>
          <span class="act-name">R7 · Speed Quiz Potències</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-8" onclick="launchGameActivity('act-ud1-8')">
          <span class="act-idx">🕵️ Potències Equivalents</span>
          <span class="act-name">R8 · Troba l'Intrús Potències</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-9" onclick="launchGameActivity('act-ud1-9')">
          <span class="act-idx">🔢 Pressupost de Taller</span>
          <span class="act-name">R9 · Càlcul de Taller</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-10" onclick="launchGameActivity('act-ud1-10')">
          <span class="act-idx">🪞 Càlcul Mental Ràpid</span>
          <span class="act-name">R10 · Trucs de Càlcul</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #16a34a;">
      <div class="card-head">
        <span class="disc-badge" style="background: #16a34a;">Biologia</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧬</span> <h3>UD2 · Organització de la Matèria i la Nutrició</h3></div>
      <p class="card-desc">Nivells d'organització, la cèl·lula i els 4 aparells de la nutrició: digestiu, respiratori, circulatori i excretor.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud2-1" onclick="launchGameActivity('act-ud2-1')">
          <span class="act-idx">🧩 Nivells d'Organització</span>
          <span class="act-name">R1 · Nivells Biològics</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-2" onclick="launchGameActivity('act-ud2-2')">
          <span class="act-idx">⚡ La Cèl·lula i Nutrició</span>
          <span class="act-name">R2 · Speed Quiz Cèl·lula</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-3" onclick="launchGameActivity('act-ud2-3')">
          <span class="act-idx">🕵️ Orgànuls i Teixits</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-4" onclick="launchGameActivity('act-ud2-4')">
          <span class="act-idx">🔢 Biologia Numèrica</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-5" onclick="launchGameActivity('act-ud2-5')">
          <span class="act-idx">🪞 Els 4 Aparells Nutrició</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-6" onclick="launchGameActivity('act-ud2-6')">
          <span class="act-idx">🧩 Viatge dels Aliments</span>
          <span class="act-name">R6 · El Tub Digestiu</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-7" onclick="launchGameActivity('act-ud2-7')">
          <span class="act-idx">⚡ Respiratori i Sang</span>
          <span class="act-name">R7 · Speed Quiz Circulatori</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-8" onclick="launchGameActivity('act-ud2-8')">
          <span class="act-idx">🕵️ Glàndules i Vasos</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-9" onclick="launchGameActivity('act-ud2-9')">
          <span class="act-idx">🔢 Càlcul Nutricional</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-10" onclick="launchGameActivity('act-ud2-10')">
          <span class="act-idx">🪞 Dieta i Salut</span>
          <span class="act-name">R10 · Hàbits Saludables</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #d97706;">
      <div class="card-head">
        <span class="disc-badge" style="background: #d97706;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">➕➖</span> <h3>UD3 · Els Nombres Enters</h3></div>
      <p class="card-desc">El conjunt Z, recta numèrica, oposat, valor absolut, operacions amb regla de signes i parèntesis.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud3-1" onclick="launchGameActivity('act-ud3-1')">
          <span class="act-idx">🧩 Positius vs Negatius</span>
          <span class="act-name">R1 · Balança 8 Casos</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-2" onclick="launchGameActivity('act-ud3-2')">
          <span class="act-idx">⚡ Signes i Operacions</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-3" onclick="launchGameActivity('act-ud3-3')">
          <span class="act-idx">🕵️ Operacions amb Enters</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-4" onclick="launchGameActivity('act-ud3-4')">
          <span class="act-idx">🔢 Saldos i Temperatures</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-5" onclick="launchGameActivity('act-ud3-5')">
          <span class="act-idx">🪞 Conceptes Recta Z</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-6" onclick="launchGameActivity('act-ud3-6')">
          <span class="act-idx">🧩 Jerarquia Enters</span>
          <span class="act-name">R6 · Jerarquia Z</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-7" onclick="launchGameActivity('act-ud3-7')">
          <span class="act-idx">⚡ Potències Negatives</span>
          <span class="act-name">R7 · Speed Quiz Potències Z</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-8" onclick="launchGameActivity('act-ud3-8')">
          <span class="act-idx">🕵️ Quadrants Cartesians</span>
          <span class="act-name">R8 · Troba l'Intrús Quadrants</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-9" onclick="launchGameActivity('act-ud3-9')">
          <span class="act-idx">🔢 Operacions Combinades Z</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-10" onclick="launchGameActivity('act-ud3-10')">
          <span class="act-idx">🪞 Resum Visual Enters</span>
          <span class="act-name">R10 · Regles de Signes</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0284c7;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0284c7;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">⚖️</span> <h3>UD4 · Divisibilitat, MCD i MCM</h3></div>
      <p class="card-desc">Múltiples, divisors, criteris de divisibilitat, nombres primers, factorització, MCD i MCM en problemes reals.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud4-1" onclick="launchGameActivity('act-ud4-1')">
          <span class="act-idx">🧩 Criteris 2, 3, 5, 10</span>
          <span class="act-name">R1 · Criteris Divisibilitat</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-2" onclick="launchGameActivity('act-ud4-2')">
          <span class="act-idx">⚡ Primers i Divisors V/F</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-3" onclick="launchGameActivity('act-ud4-3')">
          <span class="act-idx">🕵️ Primers i Factors</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-4" onclick="launchGameActivity('act-ud4-4')">
          <span class="act-idx">🔢 Càlcul d'MCD i MCM</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-5" onclick="launchGameActivity('act-ud4-5')">
          <span class="act-idx">🪞 Conceptes de Divisibilitat</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-6" onclick="launchGameActivity('act-ud4-6')">
          <span class="act-idx">🧩 Algorisme MCD i MCM</span>
          <span class="act-name">R6 · Passos per a MCD i MCM</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-7" onclick="launchGameActivity('act-ud4-7')">
          <span class="act-idx">⚡ MCD vs MCM en Problemes</span>
          <span class="act-name">R7 · Speed Quiz Problemes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-8" onclick="launchGameActivity('act-ud4-8')">
          <span class="act-idx">🕵️ Múltiples i Divisors</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-9" onclick="launchGameActivity('act-ud4-9')">
          <span class="act-idx">🔢 Problemes Reals MCD/MCM</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-10" onclick="launchGameActivity('act-ud4-10')">
          <span class="act-idx">🪞 Estratègies MCD i MCM</span>
          <span class="act-name">R10 · Guia Pràctica</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #7c3aed;">
      <div class="card-head">
        <span class="disc-badge" style="background: #7c3aed;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🥧</span> <h3>UD5 · Les Fraccions</h3></div>
      <p class="card-desc">Concepte, fraccions equivalents, reducció a comú denominador (m.c.m.), operacions bàsiques i jerarquia.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud5-1" onclick="launchGameActivity('act-ud5-1')">
          <span class="act-idx">🧩 Pròpies, Impròpies o Unitat</span>
          <span class="act-name">R1 · Classificació 8 Fraccions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-2" onclick="launchGameActivity('act-ud5-2')">
          <span class="act-idx">⚡ Equivalències i Propietats</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-3" onclick="launchGameActivity('act-ud5-3')">
          <span class="act-idx">🕵️ Fraccions no Equivalents</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-4" onclick="launchGameActivity('act-ud5-4')">
          <span class="act-idx">🔢 Fracció d'una Quantitat</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-5" onclick="launchGameActivity('act-ud5-5')">
          <span class="act-idx">🪞 Significats de la Fracció</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-6" onclick="launchGameActivity('act-ud5-6')">
          <span class="act-idx">🧩 Suma Diferent Denominador</span>
          <span class="act-name">R6 · Suma amb m.c.m.</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-7" onclick="launchGameActivity('act-ud5-7')">
          <span class="act-idx">⚡ Multiplicar i Dividir</span>
          <span class="act-name">R7 · Speed Quiz Producte/Divisió</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-8" onclick="launchGameActivity('act-ud5-8')">
          <span class="act-idx">🕵️ Operacions amb Fraccions</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-9" onclick="launchGameActivity('act-ud5-9')">
          <span class="act-idx">🔢 Taller amb Fraccions</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-10" onclick="launchGameActivity('act-ud5-10')">
          <span class="act-idx">🪞 Resum d'Operacions</span>
          <span class="act-name">R10 · Algorismes Fraccions</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0d9488;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0d9488;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🔭</span> <h3>UD6 · La Terra i l'Univers</h3></div>
      <p class="card-desc">Origen de l'univers, galàxies, distàncies còsmiques, el Sistema Solar, planetes, cometes i exploració espacial.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud6-1" onclick="launchGameActivity('act-ud6-1')">
          <span class="act-idx">🧩 De Menor a Major</span>
          <span class="act-name">R1 · Escala Còsmica</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-2" onclick="launchGameActivity('act-ud6-2')">
          <span class="act-idx">⚡ Big Bang i Distàncies</span>
          <span class="act-name">R2 · Speed Quiz Còsmic</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-3" onclick="launchGameActivity('act-ud6-3')">
          <span class="act-idx">🕵️ Tipus de Planetes</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-4" onclick="launchGameActivity('act-ud6-4')">
          <span class="act-idx">🔢 Astronomia Numèrica</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-5" onclick="launchGameActivity('act-ud6-5')">
          <span class="act-idx">🪞 Components Còsmics</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-6" onclick="launchGameActivity('act-ud6-6')">
          <span class="act-idx">🧩 Planetes des del Sol</span>
          <span class="act-name">R6 · Els 8 Planetes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-7" onclick="launchGameActivity('act-ud6-7')">
          <span class="act-idx">⚡ Cometes i Meteorits</span>
          <span class="act-name">R7 · Speed Quiz Cossos Menors</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-8" onclick="launchGameActivity('act-ud6-8')">
          <span class="act-idx">🕵️ Satèl·lits vs Planetes Nans</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-9" onclick="launchGameActivity('act-ud6-9')">
          <span class="act-idx">🔢 Dades del Sistema Solar</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-10" onclick="launchGameActivity('act-ud6-10')">
          <span class="act-idx">🪞 Tecnologia Espacial</span>
          <span class="act-name">R10 · Exploració Espacial</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #ea580c;">
      <div class="card-head">
        <span class="disc-badge" style="background: #ea580c;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">🌍</span> <h3>UD7 · El Planeta Terra: Geosfera i Moviments</h3></div>
      <p class="card-desc">Característiques per a la vida, rotació i translació, estacions, la Lluna i marees, capes de la geosfera i tectònica.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud7-1" onclick="launchGameActivity('act-ud7-1')">
          <span class="act-idx">🧩 Capes Geosfera</span>
          <span class="act-name">R1 · Capes de la Geosfera</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-2" onclick="launchGameActivity('act-ud7-2')">
          <span class="act-idx">⚡ Moviments i Estacions</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-3" onclick="launchGameActivity('act-ud7-3')">
          <span class="act-idx">🕵️ Fases i Capes</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-4" onclick="launchGameActivity('act-ud7-4')">
          <span class="act-idx">🔢 Càlculs Geosfera</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-5" onclick="launchGameActivity('act-ud7-5')">
          <span class="act-idx">🪞 Geodinàmica Clau</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-6" onclick="launchGameActivity('act-ud7-6')">
          <span class="act-idx">🌙 Ordre Fases Lunars</span>
          <span class="act-name">R6 · Cicle Lunar</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-7" onclick="launchGameActivity('act-ud7-7')">
          <span class="act-idx">⚡ Plaques i Volcans</span>
          <span class="act-name">R7 · Tectònica i Sismes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-8" onclick="launchGameActivity('act-ud7-8')">
          <span class="act-idx">🕵️ Límits Plaques</span>
          <span class="act-name">R8 · Límits i Condicions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-9" onclick="launchGameActivity('act-ud7-9')">
          <span class="act-idx">🔢 Magnituds Sísmiques</span>
          <span class="act-name">R9 · Càlcul Tectònic (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud7-10" onclick="launchGameActivity('act-ud7-10')">
          <span class="act-idx">🪞 Relleu i Fenòmens</span>
          <span class="act-name">R10 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0284c7;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0284c7;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">💨</span> <h3>UD8 · L'Atmosfera Terrestre</h3></div>
      <p class="card-desc">Composició de l'aire, capes atmosfèriques (troposfera a exosfera), meteorologia, pressió, vent i contaminació.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud8-1" onclick="launchGameActivity('act-ud8-1')">
          <span class="act-idx">🧩 Capes Atmosfera</span>
          <span class="act-name">R1 · Capes Atmosfèriques</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-2" onclick="launchGameActivity('act-ud8-2')">
          <span class="act-idx">⚡ Aire i Pressió</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-3" onclick="launchGameActivity('act-ud8-3')">
          <span class="act-idx">🕵️ Instruments i Gasos</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-4" onclick="launchGameActivity('act-ud8-4')">
          <span class="act-idx">🔢 Càlculs Atmosfèrics</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-5" onclick="launchGameActivity('act-ud8-5')">
          <span class="act-idx">🪞 Fenòmens Atmosfèrics</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-6" onclick="launchGameActivity('act-ud8-6')">
          <span class="act-idx">🌧️ Cicle Precipitació</span>
          <span class="act-name">R6 · Formació Precipitació</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-7" onclick="launchGameActivity('act-ud8-7')">
          <span class="act-idx">⚡ Canvi Climàtic</span>
          <span class="act-name">R7 · Contaminació i Canvi</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-8" onclick="launchGameActivity('act-ud8-8')">
          <span class="act-idx">🕵️ Gasos Hivernacle</span>
          <span class="act-name">R8 · Gasos i Meteors</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-9" onclick="launchGameActivity('act-ud8-9')">
          <span class="act-idx">🔢 Emissions CO2</span>
          <span class="act-name">R9 · Càlcul Ambiental (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud8-10" onclick="launchGameActivity('act-ud8-10')">
          <span class="act-idx">🪞 Meteorologia Avançada</span>
          <span class="act-name">R10 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0d9488;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0d9488;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Multijoc</span>
      </div>
      <div class="card-title"><span class="unit-icon">💧</span> <h3>UD9 · La Hidrosfera Terrestre</h3></div>
      <p class="card-desc">Distribució de l'aigua dolça i salada, aigües marines i continentals, cicle hidrològic, i cicle urbà (ETAP i EDAR).</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud9-1" onclick="launchGameActivity('act-ud9-1')">
          <span class="act-idx">🧩 Cicle Natural Aigua</span>
          <span class="act-name">R1 · Cicle Hidrològic</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-2" onclick="launchGameActivity('act-ud9-2')">
          <span class="act-idx">⚡ Distribució Aigua</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-3" onclick="launchGameActivity('act-ud9-3')">
          <span class="act-idx">🕵️ Rius i Depuradores</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-4" onclick="launchGameActivity('act-ud9-4')">
          <span class="act-idx">🔢 Càlculs Hídrics</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-5" onclick="launchGameActivity('act-ud9-5')">
          <span class="act-idx">🪞 Sistemes Hídrics</span>
          <span class="act-name">R5 · Targetes 3D</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-6" onclick="launchGameActivity('act-ud9-6')">
          <span class="act-idx">🚰 Cicle Urbà Aigua</span>
          <span class="act-name">R6 · Cicle Urbà Aigua</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-7" onclick="launchGameActivity('act-ud9-7')">
          <span class="act-idx">⚡ Eutrofització i Residus</span>
          <span class="act-name">R7 · Contaminació Hídrica</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-8" onclick="launchGameActivity('act-ud9-8')">
          <span class="act-idx">🕵️ Tractaments EDAR</span>
          <span class="act-name">R8 · Tractaments i Aigües</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-9" onclick="launchGameActivity('act-ud9-9')">
          <span class="act-idx">🔢 Càlcul de Petjada</span>
          <span class="act-name">R9 · Càlcul de Petjada (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud9-10" onclick="launchGameActivity('act-ud9-10')">
          <span class="act-idx">🪞 Ecosistemes Hídrics</span>
          <span class="act-name">R10 · Targetes 3D</span>
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
    <div class="pdi-activity-card" id="act-ud1-1" data-unit="ud1" data-title="Descomposició Decimal" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R1 · Valor Posicional</span>
        <h3>🔢 Descomposició en Ordres d'Unitats: El Nombre 472.583</h3>
      </div>
      <p class="pdi-instruction">Arrossega els ordres d'unitats de major a menor valor posicional per a descompondre el nombre 472.583:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 4 Centenes de Milers (4 CM = 400.000)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 7 Desenes de Milers (7 DM = 70.000)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 2 Unitats de Milers (2 UM = 2.000)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 5 Centenes simples (5 C = 500)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 8 Desenes simples (8 D = 80)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 3 Unitats simples (3 U = 3)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r ordre: CM</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n ordre: DM</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r ordre: UM</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t ordre: C</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è ordre: D</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">6è ordre: U</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud1-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud1-2" data-unit="ud1" data-title="Propietats i Càlcul" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Propietats dels Naturals i Operacions Bàsiques</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La propietat commutativa afirma que l&#x27;ordre dels sumands no canvia la suma (a + b = b + a).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 15 + 23 = 23 + 15 = 38.&quot;}, {&quot;q&quot;: &quot;L&#x27;element neutre de la multiplicació de nombres naturals és el nombre 0.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;element neutre del producte és l&#x27;&lt;strong&gt;1&lt;/strong&gt; (a × 1 = a). El 0 és l&#x27;element absorbent (a × 0 = 0)!&quot;}, {&quot;q&quot;: &quot;En la divisió exacta, el dividend és igual al divisor multiplicat pel quocient (D = d × c).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Prova de la divisió exacta: Dividend = Divisor × Quocient.&quot;}, {&quot;q&quot;: &quot;L&#x27;arrel quadrada d&#x27;un nombre és trobar un altre nombre que multiplicat per 2 done el primer.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És trobar un nombre que multiplicat &lt;strong&gt;per si mateix&lt;/strong&gt; (al quadrat) done el primer (√36 = 6 perquè 6 × 6 = 36, no pas 18 × 2)!&quot;}, {&quot;q&quot;: &quot;La resta de nombres naturals NO compleix la propietat commutativa (7 - 4 no és igual a 4 - 7).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 7 - 4 = 3, però 4 - 7 no és un nombre natural (és -3).&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-3" data-unit="ud1" data-title="Tipus de Nombres" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Quadrats Perfectes i Descomposicions</h3>
      </div>
      <p class="pdi-instruction">Detecta quin nombre no compleix la mateixa condició matemàtica:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Quadrats Perfectes&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són quadrats perfectes d&#x27;un natural, però un no ho és. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;49 (perquè 7² = 49)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És quadrat de 7&quot;}, {&quot;text&quot;: &quot;64 (perquè 8² = 64)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És quadrat de 8&quot;}, {&quot;text&quot;: &quot;72 (no hi ha cap natural n tal que n² = 72)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 8² = 64 i 9² = 81. El 72 no és quadrat perfecte!&quot;}, {&quot;text&quot;: &quot;121 (perquè 11² = 121)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És quadrat de 11&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Descomposició Polinòmica de 3.500&quot;, &quot;question&quot;: &quot;Tres expressions equivalen exactament a 3.500, però una dóna un valor diferent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;3 × 10³ + 5 × 10²&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;3000 + 500 = 3500&quot;}, {&quot;text&quot;: &quot;35 × 10²&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;35 × 100 = 3500&quot;}, {&quot;text&quot;: &quot;3 × 10⁴ + 5 × 10²&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 3 × 10⁴ = 30.000, per tant dóna 30.500, no pas 3.500!&quot;}, {&quot;text&quot;: &quot;350 × 10¹&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;350 × 10 = 3500&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud1-4" data-unit="ud1" data-title="Operacions i Arrels" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Càlcul Ràpid de Naturals</h3>
      </div>
      <p class="pdi-instruction">Calcula el resultat exacte i introdueix-lo amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quant és: &lt;strong&gt;√144 + 5 × 6&lt;/strong&gt; ?&quot;, &quot;expected&quot;: &quot;42&quot;, &quot;steps&quot;: &quot;√144 = 12  ➔  5 × 6 = 30  ➔  12 + 30 = &lt;strong&gt;42&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Al magatzem tenim &lt;strong&gt;12 paquets amb 15 interruptors&lt;/strong&gt; cadascun. Quants interruptors tenim en total?&quot;, &quot;expected&quot;: &quot;180&quot;, &quot;steps&quot;: &quot;12 × 15 = &lt;strong&gt;180 interruptors&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Repartim &lt;strong&gt;250 cargols en caixes de 20 unitats&lt;/strong&gt;. Quants cargols SOBREN (residu de la divisió)?&quot;, &quot;expected&quot;: &quot;10&quot;, &quot;steps&quot;: &quot;250 ÷ 20 = 12 caixes plenes (240 cargols)  ➔  Sobren 250 - 240 = &lt;strong&gt;10 cargols&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-5" data-unit="ud1" data-title="Fonaments Naturals" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Propietats dels Naturals</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a girar-les en 3D i revisar conceptes clau:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔢</span>
                <h4>Sistema Decimal Posicional</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Base 10 i Xifres 0 a 9</h5>
                <p>El valor de cada xifra depèn de la seua posició: el 5 a 52 val 50 (desenes), però a 520 val 500 (centenes).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚡</span>
                <h4>Potència: Base i Exponent</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>aⁿ = a × a × ... (n vegades)</h5>
                <p>La base és el factor que es repeteix, i l'exponent indica quantes vegades es multiplica per si mateix.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔄</span>
                <h4>Propietat Distributiva</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>a × (b + c) = a×b + a×c</h5>
                <p>El producte es distribueix respecte a la suma. Permet multiplicar sumands separadament o treure factor comú.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📐</span>
                <h4>Arrel Quadrada Exacta</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>√b = a ➔ a² = b</h5>
                <p>És l'operació inversa d'elevar al quadrat. Exemples: √1 = 1, √4 = 2, √9 = 3, √16 = 4, √25 = 5, √100 = 10.</p>
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
    <!-- act-ud1-6 (order) -->
    <div class="pdi-activity-card" id="act-ud1-6" data-unit="ud1" data-title="Jerarquia PEMDAS" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R6 · Jerarquia Combinada</span>
        <h3>🔢 Jerarquia d'Operacions: [(4 + 2×3) - 2³] × (15 - √25)</h3>
      </div>
      <p class="pdi-instruction">Arrossega els passos en l'ordre estricte de prioritat matemàtica:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Resoldre el producte intern del parèntesi: 2 × 3 = 6 ➔ (4 + 6) = 10</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Calcular les potències i arrels: 2³ = 8  i  √25 = 5</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Resoldre el claudàtor esquerre: [10 - 8] = 2</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Resoldre el parèntesi dret: (15 - 5) = 10</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Multiplicar els resultats finals: 2 × 10 = 20</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: parèntesi intern</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: potència i arrel</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: claudàtor esquerre</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: parèntesi dret</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: producte final</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud1-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud1-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud1-7" data-unit="ud1" data-title="Potències Base 10" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R7 · Speed Quiz Potències</span>
        <h3>⚡ Speed Quiz: Potències de Base 10 i Lleis dels Exponents</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament VERITAT o FALS sobre les potències:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La potència &lt;strong&gt;10⁴&lt;/strong&gt; és igual a &lt;strong&gt;10.000&lt;/strong&gt;.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 10⁴ és un 1 seguit de 4 zeros (deu mil).&quot;}, {&quot;q&quot;: &quot;El producte de potències de la mateixa base &lt;strong&gt;2³ × 2⁴&lt;/strong&gt; dóna &lt;strong&gt;2¹²&lt;/strong&gt; perquè es multipliquen els exponents.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; En multiplicar potències d&#x27;igual base es SUMEN els exponents: 3 + 4 = 7 ➔ &lt;strong&gt;2⁷&lt;/strong&gt; (no pas 2¹²)!&quot;}, {&quot;q&quot;: &quot;Qualsevol nombre elevat a 1 dóna el mateix nombre (a¹ = a).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 8¹ = 8, 45¹ = 45.&quot;}, {&quot;q&quot;: &quot;En dividir potències d&#x27;igual base (a⁶ ÷ a²), es resten els exponents donant a⁴.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 6 - 2 = 4.&quot;}, {&quot;q&quot;: &quot;La potència (3²)³ és igual a 3⁵.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; En potència d&#x27;una potència es MULTIPLIQUEN els exponents: 2 × 3 = 6 ➔ &lt;strong&gt;3⁶&lt;/strong&gt;!&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-8" data-unit="ud1" data-title="Potències Equivalents" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R8 · Troba l'Intrús Potències</span>
        <h3>🕵️ Troba l'Intrús: Càlculs de Potències</h3>
      </div>
      <p class="pdi-instruction">Descobreix quina opció no equival a la resta:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Potències de Valor 64&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes expressions donen exactament 64, però una no. Quina és la intrusa?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;8² (8 × 8 = 64)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 64&quot;}, {&quot;text&quot;: &quot;4³ (4 × 4 × 4 = 64)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 64&quot;}, {&quot;text&quot;: &quot;2⁶ (2 multiplicat 6 vegades = 64)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 64&quot;}, {&quot;text&quot;: &quot;2³ × 2² (2⁵ = 32)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 2³ × 2² = 2⁵ = 32, no 64!&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Descomposició Polinòmica&quot;, &quot;question&quot;: &quot;Tres expressions sumen exactament 50.400, però una no. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;5 × 10⁴ + 4 × 10²&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;50.000 + 400 = 50.400&quot;}, {&quot;text&quot;: &quot;504 × 10²&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;504 × 100 = 50.400&quot;}, {&quot;text&quot;: &quot;5 × 10³ + 4 × 10²&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Dóna 5.400, no 50.400!&quot;}, {&quot;text&quot;: &quot;50 × 10³ + 40 × 10¹&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;50.000 + 400 = 50.400&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud1-9" data-unit="ud1" data-title="Pressupost de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R9 · Càlcul de Taller</span>
        <h3>🔢 Teclat Mental: Problemes Reals d'Inventari i Pressupost</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric i escriu-lo amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Al taller hem rebut &lt;strong&gt;8 caixes de 25 cargols&lt;/strong&gt; cadascuna. Si en revisar-les retirem &lt;strong&gt;35 cargols defectuosos&lt;/strong&gt;, quants cargols útils queden?&quot;, &quot;expected&quot;: &quot;165&quot;, &quot;steps&quot;: &quot;8 × 25 = 200  ➔  200 - 35 = &lt;strong&gt;165 cargols&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Calcula el resultat de l&#x27;operació combinada: &lt;strong&gt;√81 × 2³ - 12&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;60&quot;, &quot;steps&quot;: &quot;9 × 8 - 12 = 72 - 12 = &lt;strong&gt;60&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un mecànic fa una reparació de &lt;strong&gt;4 hores a 22 €/h&lt;/strong&gt; més &lt;strong&gt;45 € en peces&lt;/strong&gt;. Preu total en €?&quot;, &quot;expected&quot;: &quot;133&quot;, &quot;steps&quot;: &quot;4 × 22 = 88  ➔  88 + 45 = &lt;strong&gt;133 €&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud1-9', '0')">0</button>
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
    <!-- act-ud1-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud1-10" data-unit="ud1" data-title="Càlcul Mental Ràpid" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R10 · Trucs de Càlcul</span>
        <h3>🪞 Targetes Giratòries 3D: Estratègies de Càlcul Mental</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a aprendre trucs per a calcular a vista d'ocell:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️</span>
                <h4>Multiplicar per 5</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Multiplicar per 10 i dividir entre 2</h5>
                <p>Exemple: 48 × 5 ➔ 48 × 10 = 480 ➔ 480 / 2 = 240. Molt més còmode i sense calculadora!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚡</span>
                <h4>Multiplicar per 11 (2 xifres)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Obrir xifres i sumar al mig</h5>
                <p>Exemple: 35 × 11 ➔ sumes 3 + 5 = 8 ➔ fiques el 8 entre el 3 i el 5: 385!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🎯</span>
                <h4>Arrodoniment a la Centena</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Fixar-se en la desena</h5>
                <p>Si la desena és 5 o més, s'arrodoneix cap amunt (374 ➔ 400). Si és menor de 5, cap avall (342 ➔ 300).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📏</span>
                <h4>Elevar al quadrat un nombre acabat en 5</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Multiplicar per la següent i afegir 25</h5>
                <p>Exemple: 35² ➔ 3 × 4 = 12 ➔ s'afegeix 25 al final: 1225! Per a 65²: 6 × 7 = 42 ➔ 4225.</p>
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
    <!-- act-ud2-1 (order) -->
    <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Nivells d'Organització" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R1 · Nivells Biològics</span>
        <h3>🧬 Nivells d'Organització de la Matèria Viva: De Menor a Major Complexitat</h3>
      </div>
      <p class="pdi-instruction">Ordena els 6 nivells biològics des del més simple fins al més complex:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r Nivell Subatòmic i Atòmic (Protons, electrons, àtoms de C, H, O, N)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n Nivell Molecular (Biomolècules: aigua, sals, proteïnes, glúcids, lípids)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r Nivell Cel·lular (Unitat bàsica de la vida: membrana, citoplasma, nucli)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t Nivell de Teixits (Conjunt de cèl·lules especialitzades: epitelial, muscular...)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è Nivell d'Òrgans (Estructures amb funció concreta: estómac, cor, ronyó...)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6è Nivell d'Aparells i Sistemes (Conjunt d'òrgans coordinats: digestiu, circulatori...)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: àtoms</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: molècules</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: cèl·lules</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: teixits</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: òrgans</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">6è: aparells</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="La Cèl·lula i Nutrició" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R2 · Speed Quiz Cèl·lula</span>
        <h3>⚡ Speed Quiz: Estructura Cel·lular i Funció de Nutrició</h3>
      </div>
      <p class="pdi-instruction">Respon si cada afirmació biològica és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La cèl·lula és la unitat estructural, funcional i genètica més petita de tots els éssers vius.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Teoria cel·lular fonamental.&quot;}, {&quot;q&quot;: &quot;Els mitocondris són els orgànuls responsables de fer la fotosíntesi a les cèl·lules animals.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Els mitocondris fan la &lt;strong&gt;respiració cel·lular&lt;/strong&gt; per a produir energia (ATP). Les cèl·lules animals NO fan fotosíntesi (la fan els cloroplasts vegetals)!&quot;}, {&quot;q&quot;: &quot;La nutrició humana és heteròtrofa perquè necessitem incorporar matèria orgànica d&#x27;altres éssers vius.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; No som capaços de fabricar matèria orgànica a partir de llum com les plantes.&quot;}, {&quot;q&quot;: &quot;L&#x27;aparell digestiu és l&#x27;únic aparell que intervé en la funció de nutrició del cos humà.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Hi intervenen &lt;strong&gt;4 aparells coordinats&lt;/strong&gt;: Digestiu (nutrients), Respiratori (oxigen), Circulatori (transport) i Excretor (residus)!&quot;}, {&quot;q&quot;: &quot;El nucli cel·lular conté el material genètic (ADN) amb les instruccions de funcionament cel·lular.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; A les cèl·lules eucariotes l&#x27;ADN està protegit per l&#x27;embolcall nuclear.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Orgànuls i Teixits" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Estructures Cel·lulars i Teixits Fonamentals</h3>
      </div>
      <p class="pdi-instruction">Identifica l'element que no pertany a la mateixa categoria biològica:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Teixits Fonamentals Humans&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests noms són TEIXITS fonamentals del cos humà, però un és un ÒRGAN. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Teixit Epitelial (Revestiment i pell)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Teixit fonamental&quot;}, {&quot;text&quot;: &quot;Teixit Muscular (Fibres contràctils)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Teixit fonamental&quot;}, {&quot;text&quot;: &quot;Estómac (Òrgan format per diversos teixits)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;estómac és un ÒRGAN compost per teixit epitelial, muscular i connectiu, no un teixit!&quot;}, {&quot;text&quot;: &quot;Teixit Connectiu (Ossos, cartílags, sang)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Teixit fonamental&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Orgànuls Cel·lulars&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són ORGÀNULS de l&#x27;interior cel·lular, però un és un òrgan del cos. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Ribosoma (Fabrica proteïnes)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Orgànul cel·lular&quot;}, {&quot;text&quot;: &quot;Aparell de Golgi (Empaqueta substàncies)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Orgànul cel·lular&quot;}, {&quot;text&quot;: &quot;Ronyó (Filtra la sang i produeix orina)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS DETECTAT! El ronyó és un òrgan de l&#x27;aparell excretor, no pas un orgànul cel·lular!&quot;}, {&quot;text&quot;: &quot;Reticle Endoplasmàtic (Transport intern)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Orgànul cel·lular&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud2-4" data-unit="ud2" data-title="Biologia Numèrica" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Dades Fisiològiques del Cos Humà</h3>
      </div>
      <p class="pdi-instruction">Fes els càlculs biològics i escriu el valor exacte amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un adult en repòs té una freqüència de &lt;strong&gt;15 respiracions per minut&lt;/strong&gt;. Si en cada respiració inhala &lt;strong&gt;0,5 litres d&#x27;aire&lt;/strong&gt;, quants litres d&#x27;aire ventila en &lt;strong&gt;10 minuts&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;75&quot;, &quot;steps&quot;: &quot;15 resp/min × 0,5 L = 7,5 L/min  ➔  7,5 × 10 min = &lt;strong&gt;75 litres d&#x27;aire&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El cor bombeja de mitjana uns &lt;strong&gt;70 mL de sang en cada batec&lt;/strong&gt;. A un ritme de &lt;strong&gt;70 pulsacions per minut&lt;/strong&gt;, quants mL de sang bombeja en un minut?&quot;, &quot;expected&quot;: &quot;4900&quot;, &quot;steps&quot;: &quot;70 batecs × 70 mL = &lt;strong&gt;4900 mL&lt;/strong&gt; (gairebé 5 litres de sang!).&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;1 gram de glúcids aporta 4 kcal, 1 gram de proteïnes 4 kcal i 1 gram de lípids 9 kcal. Quantes kcal aporten &lt;strong&gt;10 g de greixos (lípids)&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;90&quot;, &quot;steps&quot;: &quot;10 g × 9 kcal/g = &lt;strong&gt;90 kcal&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-5" data-unit="ud2" data-title="Els 4 Aparells Nutrició" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: La Coordinació dels 4 Aparells</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a veure la missió essencial de cada aparell nutricional:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🍎</span>
                <h4>Aparell Digestiu</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Digestió i Absorció de Nutrients</h5>
                <p>Transforma els aliments complexos en nutrients senzills (glucosa, aminoàcids, àcids grassos) que passen a la sang a les vellositats intestinals.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🫁</span>
                <h4>Aparell Respiratori</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Captar O₂ i Expulsar CO₂</h5>
                <p>Intercanvia gasos als alvèols pulmonars: l'oxigen de l'aire passa a la sang i el diòxid de carboni residual s'expulsa a l'exterior.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">❤️</span>
                <h4>Aparell Circulatori</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Transport Integral per la Sang</h5>
                <p>El cor bombeja la sang per artèries, venes i capil·lars distribuint nutrients i oxigen a cada cèl·lula i recollint els productes de desfeta.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🫘</span>
                <h4>Aparell Excretor (Urinari)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Filtració de Desfetes Cel·lulars</h5>
                <p>Els ronyons filtren contínuament la sang eliminant substàncies tòxiques (urea, àcid úric) i excés d'aigua en forma d'orina per les nefrones.</p>
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
    <!-- act-ud2-6 (order) -->
    <div class="pdi-activity-card" id="act-ud2-6" data-unit="ud2" data-title="Viatge dels Aliments" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R6 · El Tub Digestiu</span>
        <h3>🍎 El Viatge dels Aliments al Llarg del Tub Digestiu</h3>
      </div>
      <p class="pdi-instruction">Ordena els 6 òrgans del tub digestiu en el sentit del trànsit alimentari:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Boca (Mastegació, insalivació amb amilasa i formació del bol alimentari)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Faringe (Cruïlla digestiva i respiratòria amb la vàlvula epiglotis)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Esòfag (Tub muscular que condueix el bol amb moviments peristàltics)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Estómac (Digestió àcida amb sucs gàstrics i formació del quim)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Intestí Prim (Acció de bilis i suc pancreàtic, absorció de nutrients pel quil)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6è: Intestí Gros i Anus (Absorció d'aigua, formació i expulsió de la femta)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: boca</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: faringe</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: esòfag</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: estómac</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: intestí prim</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">6è: intestí gros</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-7" data-unit="ud2" data-title="Respiratori i Sang" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R7 · Speed Quiz Circulatori</span>
        <h3>⚡ Speed Quiz: Respiració, Cor i Vasos Sanguinis</h3>
      </div>
      <p class="pdi-instruction">Toca VERITAT o FALS sobre l'aparell respiratori i circulatori:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les artèries són els vasos sanguinis que trauen la sang del cor cap als òrgans a alta pressió.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Les venes, en canvi, retornen la sang cap al cor i tenen vàlvules per a evitar el retrocés.&quot;}, {&quot;q&quot;: &quot;Els glòbuls blancs (leucòcits) tenen com a missió principal transportar l&#x27;oxigen amb l&#x27;hemoglobina.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Qui transporta l&#x27;oxigen són els &lt;strong&gt;glòbuls rojos (hematies)&lt;/strong&gt;. Els glòbuls blancs són les cèl·lules de defensa del sistema immunitari!&quot;}, {&quot;q&quot;: &quot;Als alvèols pulmonars l&#x27;oxigen passa a la sang i el diòxid de carboni passa a l&#x27;aire alveolar per difusió.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquest procés vital s&#x27;anomena hematosi.&quot;}, {&quot;q&quot;: &quot;Les plaquetes són cèl·lules completes gegants que fabriquen anticossos.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Les plaquetes són fragments cel·lulars que intervenen en la &lt;strong&gt;coagulació de la sang&lt;/strong&gt; per a taponar ferides!&quot;}, {&quot;q&quot;: &quot;L&#x27;aurícula esquerra rep sang oxigenada procedent dels pulmons a través de les venes pulmonars.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Circuit de circulació menor o pulmonar.&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud2-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud2-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud2-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud2-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-8 (intrus) -->
    <div class="pdi-activity-card" id="act-ud2-8" data-unit="ud2" data-title="Glàndules i Vasos" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Glàndules Annexes i Vasos Sanguinis</h3>
      </div>
      <p class="pdi-instruction">Detecta quin element trenca la relació anatòmica:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Glàndules Annexes de la Digestió&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests òrgans són GLÀNDULES ANNEXES que aboquen sucs al tub digestiu, però un és part del tub. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Fetge (Fabrica la bilis per a emulsionar greixos)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glàndula annexa&quot;}, {&quot;text&quot;: &quot;Pàncrees (Segrega suc pancreàtic i insulina)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glàndula annexa&quot;}, {&quot;text&quot;: &quot;Esòfag (Tub de pas muscular)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;esòfag és un tram del tub digestiu per on passa el menjar, no una glàndula annexa!&quot;}, {&quot;text&quot;: &quot;Glàndules Salivals (Fabriquen saliva)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glàndula annexa&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Components de l&#x27;Aparell Excretor Urinari&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests òrgans formen les vies urinàries de l&#x27;aparell excretor, però un és respiratori. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Urèters (Conductes ronyó-bufeta)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Via urinària&quot;}, {&quot;text&quot;: &quot;Bufeta de l&#x27;orina (Dipòsit elàstic)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Via urinària&quot;}, {&quot;text&quot;: &quot;Tràquea (Conducte cartilaginós d&#x27;aire)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La tràquea condueix l&#x27;aire als bronquis a l&#x27;aparell respiratori, no té res a veure amb l&#x27;excreció urinària!&quot;}, {&quot;text&quot;: &quot;Uretra (Conducte d&#x27;expulsió final)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Via urinària&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud2-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-9 (keypad) -->
    <div class="pdi-activity-card" id="act-ud2-9" data-unit="ud2" data-title="Càlcul Nutricional" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Valor Energètic dels Aliments i IMC</h3>
      </div>
      <p class="pdi-instruction">Calcula el resultat exacte i escriu-lo amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un entrepà conté &lt;strong&gt;50 g de glúcids&lt;/strong&gt; (4 kcal/g) i &lt;strong&gt;10 g de greixos&lt;/strong&gt; (9 kcal/g). Quantes kcal totals aporta?&quot;, &quot;expected&quot;: &quot;290&quot;, &quot;steps&quot;: &quot;50 × 4 = 200 kcal  ➔  10 × 9 = 90 kcal  ➔  200 + 90 = &lt;strong&gt;290 kcal&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Els ronyons d&#x27;un adult filtren aproximadament &lt;strong&gt;180 litres de sang al dia&lt;/strong&gt;, però només eliminen &lt;strong&gt;1,5 litres d&#x27;orina&lt;/strong&gt;. Quants litres de líquid es REABSORBEIXEN i tornen a la sang?&quot;, &quot;expected&quot;: &quot;178.5&quot;, &quot;steps&quot;: &quot;180 - 1,5 = &lt;strong&gt;178.5 litres reabsorbits&lt;/strong&gt; per les nefrones!&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una persona té una massa de &lt;strong&gt;80 kg&lt;/strong&gt; i mesura &lt;strong&gt;2 metres d&#x27;alçada&lt;/strong&gt;. Quin és el seu Índex de Massa Corporal (IMC = pes / alçada²)?&quot;, &quot;expected&quot;: &quot;20&quot;, &quot;steps&quot;: &quot;IMC = 80 / (2²) = 80 / 4 = &lt;strong&gt;20 kg/m²&lt;/strong&gt; (pes normal saludable).&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud2-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud2-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud2-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud2-9', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud2-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud2-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud2-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud2-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud2-10" data-unit="ud2" data-title="Dieta i Salut" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R10 · Hàbits Saludables</span>
        <h3>🪞 Targetes Giratòries 3D: Pautes de Salut Nutricional</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a revisar pautes científiques de salut i prevenció:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🥗</span>
                <h4>La Dieta Mediterrània</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Patró Saludable Reconegut</h5>
                <p>Rica en oli d'oliva verge, fruites, verdures, llegums, peix blau i cereals integrals. Redueix el colesterol dolç (LDL) i protegeix el cor.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">💧</span>
                <h4>Hidratació dels Ronyons</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Mínim 1,5 a 2 litres al dia</h5>
                <p>Beure prou aigua ajuda a diluir l'orina i prevé la formació de càlculs renals (pedres de sals minerals com l'oxalat de calci).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🚬</span>
                <h4>Prevenció Cardiovascular</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Evitar Tabac, Sedentarisme i Sal</h5>
                <p>El tabac danya l'endoteli arterial, la sal excessiva puja la tensió arterial (hipertensió) i l'exercici aeròbic enforteix el miocardi.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🦠</span>
                <h4>Microbiota Intestinal (Flora)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Bacteris Simbiòtics a l'Intestí</h5>
                <p>Milions de bacteris beneficiosos que sintetitzen vitamines (K, B12), ajuden a digerir la fibra i protegeixen contra patògens estranys.</p>
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
    <div class="pdi-activity-card" id="act-ud3-1" data-unit="ud3" data-title="Positius vs Negatius" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R1 · Balança 8 Casos</span>
        <h3>⚖️ Els Nombres Enters a la Vida Real (8 Situacions)</h3>
      </div>
      <p class="pdi-instruction">Classifica cada situació com a enter Positiu (+) o Negatiu (-):</p>
      <div class="pdi-boxes-grid grid-2">
        <div class="pdi-drop-box" data-cat="pos">
          <div class="box-head"><span class="box-icon">📈</span><h4>➕ Enters Positius (+)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="neg">
          <div class="box-head"><span class="box-icon">📉</span><h4>➖ Enters Negatius (-)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Ingressar una paga extra de 500 €</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Tindre un deute de 85 € amb el taller</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Pujar a la cinquena planta d'un edifici (+5)</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Aparcar al tercer soterrani (-3)</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Temperatura de 7 graus sota zero (-7°C)</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Cim d'una muntanya a 850 m d'alçada</div>
        <div class="pdi-item" draggable="true" data-cat="neg"><span class="item-handle">☰</span> Submarí navegant a 120 m sota el mar</div>
        <div class="pdi-item" draggable="true" data-cat="pos"><span class="item-handle">☰</span> Guanyar 4 posicions en una cursa</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud3-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Signes i Operacions" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Suma, Resta i Regla de Signes dels Enters</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La suma de dos nombres negatius dóna sempre com a resultat un altre nombre negatiu: (-4) + (-6) = -10.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Si acumules deutes, el deute total és major.&quot;}, {&quot;q&quot;: &quot;El producte de (-5) × (-3) és igual a -15 perquè els dos factors són negatius.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Menys per menys és &lt;strong&gt;MÉS (+15)&lt;/strong&gt;! Només dóna negatiu si multipliques signes diferents.&quot;}, {&quot;q&quot;: &quot;El nombre -8 és més gran que -2 perquè el valor absolut 8 és major que 2.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; A la recta numèrica, com més a la dreta estigues més gran ets: &lt;strong&gt;-2 &gt; -8&lt;/strong&gt; (és millor deure 2 € que deure 8 €)!&quot;}, {&quot;q&quot;: &quot;El valor absolut d&#x27;un nombre és la seua distància al zero i mai pot ser negatiu: |-9| = +9.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El valor absolut prescindeix del signe.&quot;}, {&quot;q&quot;: &quot;Un signe menys davant d&#x27;un parèntesi canvia el signe de tot el contingut interior: -(3 - 5) = -3 + 5 = 2.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; -(3 - 5) = -(-2) = +2.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Operacions amb Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Càlculs amb Resultats Trampa</h3>
      </div>
      <p class="pdi-instruction">Fes les operacions i troba el resultat discordant:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Resultat Objectiu -15&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen -15, però una dóna un resultat diferent. Quina és la intrusa?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-3) × (+5) ➔ Dóna -15&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -15&quot;}, {&quot;text&quot;: &quot;-20 - (-5) ➔ Dóna -15&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;-20 + 5 = -15&quot;}, {&quot;text&quot;: &quot;(-45) ÷ (-3) ➔ Dóna +15&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Menys entre menys és MÉS (+15), mentre que totes les altres donen -15!&quot;}, {&quot;text&quot;: &quot;-8 - 7 ➔ Dóna -15&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -15&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Parèntesis i Prioritat&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen exactament +8, però una dóna un altre valor. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;2 - (-6) ➔ 2 + 6 = 8&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +8&quot;}, {&quot;text&quot;: &quot;(-4) × (-2) ➔ Dóna 8&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +8&quot;}, {&quot;text&quot;: &quot;16 ÷ (-2) ➔ Dóna -8&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Positiu entre negatiu dóna -8 (negatiu), no +8!&quot;}, {&quot;text&quot;: &quot;10 + (-2) ➔ 10 - 2 = 8&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +8&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud3-4" data-unit="ud3" data-title="Saldos i Temperatures" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Càlculs amb Enters Negatius</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric i escriu-lo (recorda el botó '+/-' per al signe negatiu):</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Al compte teníem &lt;strong&gt;150 €&lt;/strong&gt;. Hem pagat un rebut de &lt;strong&gt;210 €&lt;/strong&gt; i després hem ingressat &lt;strong&gt;25 €&lt;/strong&gt;. Quin és el saldo final en €?&quot;, &quot;expected&quot;: &quot;-35&quot;, &quot;steps&quot;: &quot;150 - 210 = -60 €  ➔  -60 + 25 = &lt;strong&gt;-35 €&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El termòmetre marcava &lt;strong&gt;-6°C&lt;/strong&gt; a la matinada i al migdia puja fins als &lt;strong&gt;+14°C&lt;/strong&gt;. Quants graus ha pujat la temperatura (salt tèrmic)?&quot;, &quot;expected&quot;: &quot;20&quot;, &quot;steps&quot;: &quot;14 - (-6) = 14 + 6 = &lt;strong&gt;20 graus d&#x27;augment&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Calcula el resultat exacte: &lt;strong&gt;20 - 3 × (-4)&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;32&quot;, &quot;steps&quot;: &quot;Primer el producte: 3 × (-4) = -12  ➔  20 - (-12) = 20 + 12 = &lt;strong&gt;32&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-5" data-unit="ud3" data-title="Conceptes Recta Z" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: L'Estructura dels Nombres Enters</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a dominar la recta Z:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📏</span>
                <h4>La Recta Numèrica Z</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>El Zero com a Origen</h5>
                <p>Els positius creixen cap a la dreta (1, 2, 3...) i els negatius cap a l'esquerra (-1, -2, -3...). Qualsevol nombre és menor que el que està a la seua dreta.</p>
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
                <h5>Op(a) = -a</h5>
                <p>És el nombre que està a la mateixa distància del zero però amb signe contrari: Op(+7) = -7, Op(-9) = +9. La suma d'un nombre i el seu oposat sempre és 0.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📐</span>
                <h4>Valor Absolut |x|</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Magnitud sense signe</h5>
                <p>Representa el mòdul o distància a l'origen: |+15| = 15 i |-15| = 15. Sempre és un nombre major o igual que zero.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚖️</span>
                <h4>Criteri d'Ordenació</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Tot positiu > 0 > tot negatiu</h5>
                <p>Entre dos positius, és més gran el de major valor absolut. Entre dos negatius, és més gran el de MENOR valor absolut (-3 > -10).</p>
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
    <!-- act-ud3-6 (order) -->
    <div class="pdi-activity-card" id="act-ud3-6" data-unit="ud3" data-title="Jerarquia Enters" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R6 · Jerarquia Z</span>
        <h3>🔢 Jerarquia amb Enters: -12 + 3 × (-4) - (-10) ÷ 2</h3>
      </div>
      <p class="pdi-instruction">Arrossega els passos en l'ordre estricte d'operacions:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Resoldre la multiplicació: 3 × (-4) = -12</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Resoldre la divisió: (-10) ÷ 2 = -5</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Reescribir l'expressió amb els signes: -12 + (-12) - (-5)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Eliminar parèntesis dobles: -12 - 12 + 5</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Sumar i restar d'esquerra a dreta: -24 + 5 = -19</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: producte</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: divisió</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: plantejament</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: simplificació de signes</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: resultat final</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud3-7" data-unit="ud3" data-title="Potències Negatives" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R7 · Speed Quiz Potències Z</span>
        <h3>⚡ Speed Quiz: Potències d'Enters i Arrels</h3>
      </div>
      <p class="pdi-instruction">Prem VERITAT o FALS ràpidament:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La potència (-3)² és igual a +9.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Base negativa i exponent parell dóna sempre POSITIU: (-3) × (-3) = +9.&quot;}, {&quot;q&quot;: &quot;La potència (-2)³ és igual a +8.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Base negativa i exponent senar dóna NEGATIU: (-2) × (-2) × (-2) = &lt;strong&gt;-8&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;L&#x27;expressió -5² (sense parèntesi) dóna com a resultat -25.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;exponent només afecta al 5, no al signe menys: -(5 × 5) = -25.&quot;}, {&quot;q&quot;: &quot;L&#x27;arrel quadrada d&#x27;un nombre negatiu com √(-16) és igual a -4.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; En el conjunt dels nombres reals NO existeix l&#x27;arrel d&#x27;un nombre negatiu, perquè cap nombre elevat al quadrat dóna negatiu (-4 × -4 = +16, no -16)!&quot;}, {&quot;q&quot;: &quot;(-1)¹⁰⁰ és igual a +1.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Com que 100 és un exponent parell, el resultat és +1.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-8" data-unit="ud3" data-title="Quadrants Cartesians" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R8 · Troba l'Intrús Quadrants</span>
        <h3>🕵️ Troba l'Intrús: Coordenades Cartesianes (x, y)</h3>
      </div>
      <p class="pdi-instruction">Descobreix el punt que està en un quadrant diferent:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Segon Quadrant (x negativa, y positiva)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests punts estan al 2n Quadrant (-x, +y), però un està al 3r Quadrant (-x, -y). Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Punt A (-3, +4)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;2n Quadrant&quot;}, {&quot;text&quot;: &quot;Punt B (-5, +2)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;2n Quadrant&quot;}, {&quot;text&quot;: &quot;Punt C (-4, -6)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El punt C té la y negativa (-6), per tant està al 3r Quadrant, no al 2n!&quot;}, {&quot;text&quot;: &quot;Punt D (-1, +8)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;2n Quadrant&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Signes de Potències&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes potències donen resultat POSITIU (+), però una dóna NEGATIU (-). Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-4)⁴ (Exponent parell ➔ Positiu)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +256&quot;}, {&quot;text&quot;: &quot;(+2)⁵ (Base positiva ➔ Positiu)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +32&quot;}, {&quot;text&quot;: &quot;(-3)⁵ (Base negativa, exponent senar ➔ Negatiu)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS DETECTAT! (-3)⁵ = -243 (negatiu), mentre que totes les altres donen positiu!&quot;}, {&quot;text&quot;: &quot;(-1)¹⁴ (Exponent parell ➔ Positiu)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +1&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud3-9" data-unit="ud3" data-title="Operacions Combinades Z" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Problemes d'Enters al Taller</h3>
      </div>
      <p class="pdi-instruction">Calcula i escriu el valor numèric final:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un ascensor de càrrega puja &lt;strong&gt;4 plantes&lt;/strong&gt; (+4), baixa &lt;strong&gt;7 plantes&lt;/strong&gt; (-7) i després torna a pujar &lt;strong&gt;2 plantes&lt;/strong&gt; (+2). En quina planta queda respecte de la inicial?&quot;, &quot;expected&quot;: &quot;-1&quot;, &quot;steps&quot;: &quot;4 - 7 + 2 = -3 + 2 = &lt;strong&gt;-1 (primer soterrani)&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una cambra frigorífica baixa la temperatura a raó de &lt;strong&gt;3 graus cada hora&lt;/strong&gt;. Si comença a &lt;strong&gt;+5°C&lt;/strong&gt;, quina temperatura tindrà al cap de &lt;strong&gt;4 hores&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;-7&quot;, &quot;steps&quot;: &quot;Baixada: 4 × (-3) = -12°C  ➔  5 - 12 = &lt;strong&gt;-7°C&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Resol l&#x27;operació amb parèntesis: &lt;strong&gt;(-8) × [ 5 - (-3) ]&lt;/strong&gt;&quot;, &quot;expected&quot;: &quot;-64&quot;, &quot;steps&quot;: &quot;Claudàtor: 5 - (-3) = 5 + 3 = 8  ➔  (-8) × 8 = &lt;strong&gt;-64&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud3-9', '0')">0</button>
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
    <!-- act-ud3-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud3-10" data-unit="ud3" data-title="Resum Visual Enters" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R10 · Regles de Signes</span>
        <h3>🪞 Targetes Giratòries 3D: Guia Ràpida per a Operar amb Signes</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a revisar les 4 lleis d'or d'operació:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➕</span>
                <h4>Signes Iguals en Suma</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Es sumen i es deixa el signe</h5>
                <p>(+4) + (+8) = +12  |  (-5) + (-7) = -12. Mai es multipliquen signes quan s'està sumant!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➖</span>
                <h4>Signes Diferents en Suma</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Es resten i manen els valors majors</h5>
                <p>(-15) + (+6) = -9 (com que 15 > 6, es fa 15 - 6 = 9 i guanya el signe negatiu del 15).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️</span>
                <h4>Producte i Quocient</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>+·+ = + | -·- = + | +·- = -</h5>
                <p>MATEIX SIGNE ➔ POSITIU (+). SIGNE DIFERENT ➔ NEGATIU (-). Serveix exactament igual per a dividir!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛡️</span>
                <h4>Prioritat amb Claudàtors</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>De dins cap a fora</h5>
                <p>1r els parèntesis interns (), 2n els claudàtors [], 3r potències i arrels, 4t productes i divisions, 5è sumes i restes.</p>
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
    <div class="pdi-activity-card" id="act-ud4-1" data-unit="ud4" data-title="Criteris 2, 3, 5, 10" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R1 · Criteris Divisibilitat</span>
        <h3>⚖️ Classificació per Criteris de Divisibilitat (8 Nombres)</h3>
      </div>
      <p class="pdi-instruction">Classifica cada nombre segons el seu criteri de divisibilitat principal:</p>
      <div class="pdi-boxes-grid grid-3">
        <div class="pdi-drop-box" data-cat="div2">
          <div class="box-head"><span class="box-icon">2️⃣</span><h4>🔵 Divisible per 2 (Acabat en parell)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="div3">
          <div class="box-head"><span class="box-icon">3️⃣</span><h4>🟢 Divisible per 3 (Suma de xifres múltiple de 3)</h4></div>
          <div class="box-content"></div>
        </div>
        <div class="pdi-drop-box" data-cat="div5">
          <div class="box-head"><span class="box-icon">5️⃣</span><h4>🟡 Divisible per 5 (Acabat en 5 o 0)</h4></div>
          <div class="box-content"></div>
        </div>
      </div>
      <div class="pdi-source-pool">
        <div class="pdi-item" draggable="true" data-cat="div2"><span class="item-handle">☰</span> 148 (Acaba en xifra parell 8)</div>
        <div class="pdi-item" draggable="true" data-cat="div3"><span class="item-handle">☰</span> 123 (1 + 2 + 3 = 6, múltiple de 3)</div>
        <div class="pdi-item" draggable="true" data-cat="div5"><span class="item-handle">☰</span> 275 (Acaba en 5)</div>
        <div class="pdi-item" draggable="true" data-cat="div2"><span class="item-handle">☰</span> 512 (Acaba en xifra parell 2)</div>
        <div class="pdi-item" draggable="true" data-cat="div3"><span class="item-handle">☰</span> 342 (3 + 4 + 2 = 9, múltiple de 3)</div>
        <div class="pdi-item" draggable="true" data-cat="div5"><span class="item-handle">☰</span> 895 (Acaba en 5)</div>
        <div class="pdi-item" draggable="true" data-cat="div3"><span class="item-handle">☰</span> 618 (6 + 1 + 8 = 15, múltiple de 3)</div>
        <div class="pdi-item" draggable="true" data-cat="div2"><span class="item-handle">☰</span> 934 (Acaba en xifra parell 4)</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud4-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud4-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud4-2" data-unit="ud4" data-title="Primers i Divisors V/F" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Múltiples, Divisors i Nombres Primers</h3>
      </div>
      <p class="pdi-instruction">Respon si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Un nombre primer és aquell que només té dos divisors: l&#x27;1 i ell mateix.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Exemples: 2, 3, 5, 7, 11, 13...&quot;}, {&quot;q&quot;: &quot;El nombre 1 es considera el primer nombre primer de la llista.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;1 NO és considerat nombre primer (per conveni matemàtic, perquè només té 1 únic divisor). El primer nombre primer és el &lt;strong&gt;2&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;El nombre 0 és múltiple de qualsevol nombre natural.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a × 0 = 0 per a qualsevol nombre a.&quot;}, {&quot;q&quot;: &quot;Si un nombre acaba en 0, és divisible tant per 2, com per 5, com per 10.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Compleix els tres criteris simultàniament (ex: 20, 50, 100).&quot;}, {&quot;q&quot;: &quot;El nombre 2 és l&#x27;únic nombre parell que és primer.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Tots els altres parells són divisibles per 2 i per tant són compostos.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud4-3" data-unit="ud4" data-title="Primers i Factors" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Nombres Compostos i Factoritzacions</h3>
      </div>
      <p class="pdi-instruction">Descobreix el nombre o factorització que no encaixa:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Nombres Primers menors de 40&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són PRIMERS, però un és COMPOST. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;23 (Només divisible per 1 i 23)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És primer&quot;}, {&quot;text&quot;: &quot;31 (Només divisible per 1 i 31)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És primer&quot;}, {&quot;text&quot;: &quot;27 (Divisible per 1, 3, 9, 27)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 27 = 3³, per tant és compost!&quot;}, {&quot;text&quot;: &quot;37 (Només divisible per 1 i 37)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És primer&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Descomposició Factorial de 60&quot;, &quot;question&quot;: &quot;Tres expressions representen correctament 60, però una NO és la seua factorització en primers. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;2² × 3 × 5&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;4 × 3 × 5 = 60 (factors primers)&quot;}, {&quot;text&quot;: &quot;2 × 2 × 3 × 5&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;60 en factors primers&quot;}, {&quot;text&quot;: &quot;4 × 15&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Encara que 4 × 15 = 60, el 4 i el 15 NO són nombres primers!&quot;}, {&quot;text&quot;: &quot;3 × 20 (No són primers)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna 60&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud4-4" data-unit="ud4" data-title="Càlcul d'MCD i MCM" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Càlcul Directe d'MCD i MCM</h3>
      </div>
      <p class="pdi-instruction">Calcula el Màxim Comú Divisor o Mínim Comú Múltiple i tecleja el resultat:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quin és el &lt;strong&gt;Màxim Comú Divisor (MCD)&lt;/strong&gt; de &lt;strong&gt;24 i 36&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;12&quot;, &quot;steps&quot;: &quot;24 = 2³ × 3  |  36 = 2² × 3²  ➔  Factors comuns amb menor exponent: 2² × 3 = 4 × 3 = &lt;strong&gt;12&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Quin és el &lt;strong&gt;Mínim Comú Múltiple (MCM)&lt;/strong&gt; de &lt;strong&gt;12 i 18&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;36&quot;, &quot;steps&quot;: &quot;12 = 2² × 3  |  18 = 2 × 3²  ➔  Comuns i no comuns amb major exponent: 2² × 3² = 4 × 9 = &lt;strong&gt;36&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Quin és el &lt;strong&gt;MCD&lt;/strong&gt; de dos nombres primers entre si com &lt;strong&gt;7 i 15&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;1&quot;, &quot;steps&quot;: &quot;Com que no comparteixen cap divisor comú excepte l&#x27;1, el MCD és &lt;strong&gt;1&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud4-5" data-unit="ud4" data-title="Conceptes de Divisibilitat" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Lleis de Divisibilitat</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a revisar conceptes teòrics:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➗</span>
                <h4>Concepte de Divisor</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>La divisió és exacta (residu 0)</h5>
                <p>Un nombre b és divisor de a si la divisió a ÷ b no deixa residu. Exemple: els divisors de 12 són 1, 2, 3, 4, 6 i 12.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️</span>
                <h4>Concepte de Múltiple</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Resultat de multiplicar per un natural</h5>
                <p>Els múltiples d'un nombre s'obtenen multiplicant-lo per 0, 1, 2, 3... Són infinits! Els múltiples de 5 són 0, 5, 10, 15, 20...</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛡️</span>
                <h4>MCD (Màxim Comú Divisor)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Comuns amb el MENOR exponent</h5>
                <p>El divisor comú més gran entre diversos nombres. Serveix per a fer lots iguals el més grans possible sense que sobre res.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔁</span>
                <h4>MCM (Mínim Comú Múltiple)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Comuns i NO comuns amb el MAJOR exponent</h5>
                <p>El múltiple comú més petit (diferent de zero). Serveix per a calcular coincidències temporals de fenòmens periòdics.</p>
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
    <!-- act-ud4-6 (order) -->
    <div class="pdi-activity-card" id="act-ud4-6" data-unit="ud4" data-title="Algorisme MCD i MCM" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R6 · Passos per a MCD i MCM</span>
        <h3>⚖️ Algorisme de Càlcul d'MCD i MCM per Descomposició Factorial</h3>
      </div>
      <p class="pdi-instruction">Ordena els 4 passos per a calcular el MCD i MCM de dos o més nombres:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Descompondre cadascun dels nombres en producte de factors primers</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Expressar les descomposicions en forma de potències de bases primeres</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Per a l'MCD: seleccionar NOMÉS els factors comuns elevats al MENOR exponent</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Per a l'MCM: seleccionar TOTS els factors (comuns i no comuns) elevats al MAJOR exponent</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: factoritzar</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: escriure potències</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: triar factors MCD</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: triar factors MCM</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud4-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud4-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud4-7" data-unit="ud4" data-title="MCD vs MCM en Problemes" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R7 · Speed Quiz Problemes</span>
        <h3>⚡ Speed Quiz: Saber Tria si el Problema és d'MCD o d'MCM</h3>
      </div>
      <p class="pdi-instruction">Identifica ràpidament quin operador resol cada situació real:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Si volem tallar dos cables de 60 m i 80 m en trossos iguals el més llargs possible sense que sobre res, cal calcular l&#x27;MCD.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Repartir, dividir o tallar en parts iguals màximes és un problema típic d&#x27;MCD (MCD = 20 m).&quot;}, {&quot;q&quot;: &quot;Si dues màquines fan manteniment cada 6 dies i cada 8 dies respectivament, la propera coincidència es calcula amb l&#x27;MCD.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Les coincidències de cicles temporals es calculen amb l&#x27;&lt;strong&gt;MCM&lt;/strong&gt; (MCM(6,8) = 24 dies)!&quot;}, {&quot;q&quot;: &quot;El producte de dos nombres és igual al seu MCD multiplicat pel seu MCM: a × b = MCD(a,b) × MCM(a,b).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Propietat matemàtica fonamental de la divisibilitat.&quot;}, {&quot;q&quot;: &quot;Per a empaquetar 40 xocolatines i 50 caramels en bosses idèntiques amb el màxim contingut cal calcular l&#x27;MCM.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Envasar o agrupar sense que sobre res és un problema d&#x27;&lt;strong&gt;MCD&lt;/strong&gt; (MCD(40,50) = 10 bosses)!&quot;}, {&quot;q&quot;: &quot;L&#x27;MCD de dos nombres mai pot ser més gran que el més petit dels nombres.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Un divisor mai pot ser més gran que el propi nombre.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud4-8" data-unit="ud4" data-title="Múltiples i Divisors" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Divisors de 36 i Múltiples de 8</h3>
      </div>
      <p class="pdi-instruction">Detecta quin nombre no compleix la condició de la ronda:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Divisors de 36&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són DIVISORS de 36, però un NO ho és. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;4 (perquè 36 ÷ 4 = 9)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És divisor de 36&quot;}, {&quot;text&quot;: &quot;9 (perquè 36 ÷ 9 = 4)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És divisor de 36&quot;}, {&quot;text&quot;: &quot;8 (perquè 36 ÷ 8 = 4,5)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 36 dividit entre 8 no dóna divisió exacta (residu 4), per tant el 8 no és divisor de 36!&quot;}, {&quot;text&quot;: &quot;12 (perquè 36 ÷ 12 = 3)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És divisor de 36&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Múltiples de 8&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són MÚLTIPLES de 8, però un NO ho és. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;32 (8 × 4 = 32)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És múltiple de 8&quot;}, {&quot;text&quot;: &quot;48 (8 × 6 = 48)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És múltiple de 8&quot;}, {&quot;text&quot;: &quot;54 (54 ÷ 8 = 6,75)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Els múltiples propers són 48 (8×6) i 56 (8×7). El 54 no és múltiple de 8!&quot;}, {&quot;text&quot;: &quot;72 (8 × 9 = 72)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És múltiple de 8&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud4-9" data-unit="ud4" data-title="Problemes Reals MCD/MCM" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Problemes d'Organització de Taller</h3>
      </div>
      <p class="pdi-instruction">Resol els problemes i tecleja la solució exacta:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Tenim dos llistons de fusta de &lt;strong&gt;45 cm i 60 cm&lt;/strong&gt;. Volem tallar-los en trossos iguals de la &lt;strong&gt;màxima longitud possible sense que sobre res&lt;/strong&gt;. Quant deu mesurar cada tros (MCD) en cm?&quot;, &quot;expected&quot;: &quot;15&quot;, &quot;steps&quot;: &quot;MCD(45, 60): 45 = 3² × 5, 60 = 2² × 3 × 5  ➔  MCD = 3 × 5 = &lt;strong&gt;15 cm&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Un autobús de línia A passa cada &lt;strong&gt;12 minuts&lt;/strong&gt; i el de la línia B cada &lt;strong&gt;15 minuts&lt;/strong&gt;. Si han coincidit a les 8:00 h, al cap de quants minuts tornaran a coincidir junts a la parada (MCM)?&quot;, &quot;expected&quot;: &quot;60&quot;, &quot;steps&quot;: &quot;MCM(12, 15): 12 = 2² × 3, 15 = 3 × 5  ➔  MCM = 2² × 3 × 5 = &lt;strong&gt;60 minuts (1 hora)&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Volem empaquetar &lt;strong&gt;30 claus i 45 cargols&lt;/strong&gt; en bosses idèntiques amb el màxim nombre de peces sense barrejar-los. Quantes bosses necessitem fer en total?&quot;, &quot;expected&quot;: &quot;5&quot;, &quot;steps&quot;: &quot;MCD(30, 45) = 15 peces per bossa  ➔  30/15 = 2 bosses de claus + 45/15 = 3 bosses de cargols = &lt;strong&gt;5 bosses en total&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud4-9', '0')">0</button>
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
    <!-- act-ud4-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud4-10" data-unit="ud4" data-title="Estratègies MCD i MCM" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R10 · Guia Pràctica</span>
        <h3>🪞 Targetes Giratòries 3D: Estratègies per a Problemes Reals</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a dominar la resolució d'exercicis pràctics:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✂️</span>
                <h4>Senyals de Problema d'MCD</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Tallar, repartir, màxima mida</h5>
                <p>Paraules clau: 'el tros més gran possible', 'sense que sobre res', 'envasar en recipients màxims', 'dividir una superfície en rajoles quadrades'.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⏰</span>
                <h4>Senyals de Problema d'MCM</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Coincidir, trobar-se, repetir cicles</h5>
                <p>Paraules clau: 'quan tornaran a coincidir?', 'al cap de quant de temps?', 'el menor nombre de caixes per a tindre la mateixa quantitat'.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔢</span>
                <h4>Criteri de Divisibilitat per 9</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Suma de xifres múltiple de 9</h5>
                <p>Molt útil per a simplificar ràpidament. Exemple: 738 ➔ 7 + 3 + 8 = 18 (com que 18 és múltiple de 9, 738 es pot dividir exactament entre 9).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚡</span>
                <h4>Criteri de Divisibilitat per 11</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Diferència de posicions parelles i senars</h5>
                <p>Se sumen les xifres de posició imparell i les de posició parell i es resten. Si dóna 0 o múltiple d'11, el nombre és divisible per 11. Exemple: 121 ➔ (1+1) - 2 = 0.</p>
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
    <!-- act-ud5-1 (category) -->
    <div class="pdi-activity-card" id="act-ud5-1" data-unit="ud5" data-title="Pròpies, Impròpies o Unitat" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R1 · Classificació 8 Fraccions</span>
        <h3>🥧 Tipus de Fraccions Respecte a la Unitat (8 Fraccions)</h3>
      </div>
      <p class="pdi-instruction">Classifica cada fracció segons si és menor que 1 (pròpia), major que 1 (impròpia) o igual a 1:</p>
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
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 2/3 (Dos terços = 0,66...)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 7/4 (Set quarts = 1,75)</div>
        <div class="pdi-item" draggable="true" data-cat="unit"><span class="item-handle">☰</span> 5/5 (Cinc cinquens = 1,0)</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 3/8 (Tres vuitens = 0,375)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 9/2 (Nou mitjos = 4,5)</div>
        <div class="pdi-item" draggable="true" data-cat="unit"><span class="item-handle">☰</span> 10/10 (Deu dècims = 1,0)</div>
        <div class="pdi-item" draggable="true" data-cat="improp"><span class="item-handle">☰</span> 8/3 (Vuit terços = 2,66...)</div>
        <div class="pdi-item" draggable="true" data-cat="prop"><span class="item-handle">☰</span> 1/6 (Un sisè = 0,166...)</div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkCategoryActivity('act-ud5-1')">Comprovar Classificació 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud5-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud5-2" data-unit="ud5" data-title="Equivalències i Propietats" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Conceptes Bàsics de Fraccions</h3>
      </div>
      <p class="pdi-instruction">Prem VERITAT o FALS a la pissarra digital:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El denominador indica en quantes parts iguals es divideix la unitat.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; I el numerador indica quantes d&#x27;aquestes parts es prenen.&quot;}, {&quot;q&quot;: &quot;Dues fraccions a/b i c/d són equivalents si els seus productes creuats són iguals (a × d = b × c).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Regla bàsica d&#x27;equivalència (ex: 2/3 = 4/6 perquè 2 × 6 = 3 × 4 = 12).&quot;}, {&quot;q&quot;: &quot;Per a simplificar una fracció es multiplica el numerador i el denominador pel mateix nombre.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Per a simplificar es &lt;strong&gt;DIVIDEIX&lt;/strong&gt; pel mateix nombre (divisor comú)! Multiplicar és amplificar!&quot;}, {&quot;q&quot;: &quot;La fracció 3/4 equival exactament a 0,75 i al 75%.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; 3 dividit entre 4 és 0,75 = 75%.&quot;}, {&quot;q&quot;: &quot;En sumar dues fraccions amb el mateix denominador, se sumen els numeradors i també els denominadors.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Els denominadors NO se sumen mai: es manté el mateix denominador i només se sumen els numeradors (ex: 1/5 + 2/5 = &lt;strong&gt;3/5&lt;/strong&gt;, no pas 3/10)!&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud5-3" data-unit="ud5" data-title="Fraccions no Equivalents" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Equivalència i Fraccions Irreducibles</h3>
      </div>
      <p class="pdi-instruction">Troba la fracció que no compleix la regla comuna:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Equivalents a 2/5 (0,40)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes fraccions equivalen a 2/5 (0,40), però una és diferent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;4/10 (Simplificat dividint per 2 = 2/5)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 2/5&quot;}, {&quot;text&quot;: &quot;6/15 (Simplificat dividint per 3 = 2/5)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 2/5&quot;}, {&quot;text&quot;: &quot;8/25 (Dóna 0,32)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 8/25 dóna 0,32, mentre que les altres tres equivalen a 2/5 = 0,40!&quot;}, {&quot;text&quot;: &quot;20/50 (Simplificat dividint per 10 = 2/5)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 2/5&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Fraccions Irreducibles&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes fraccions són IRREDUCIBLES (no es poden simplificar més), però una és reductible. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;3/7 (3 i 7 són primers entre si)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Irreducible&quot;}, {&quot;text&quot;: &quot;5/9 (5 i 9 són primers entre si)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Irreducible&quot;}, {&quot;text&quot;: &quot;9/15 (Es pot dividir entre 3 = 3/5)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 9/15 es pot simplificar dividint numerador i denominador entre 3, donant 3/5!&quot;}, {&quot;text&quot;: &quot;11/13 (11 i 13 són primers entre si)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Irreducible&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud5-4" data-unit="ud5" data-title="Fracció d'una Quantitat" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Fracció d'una Quantitat en Problemes Reals</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor numèric exacte i escriu-lo:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un taller comanda un bidó de &lt;strong&gt;200 litres d&#x27;oli&lt;/strong&gt;. Si ja s&#x27;han gastat &lt;strong&gt;3/5 del bidó&lt;/strong&gt;, quants litres s&#x27;han gastat?&quot;, &quot;expected&quot;: &quot;120&quot;, &quot;steps&quot;: &quot;(200 × 3) / 5 = 600 / 5 = &lt;strong&gt;120 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Un treballador té un sou brut de &lt;strong&gt;1.500 €&lt;/strong&gt;. Si destina &lt;strong&gt;1/3 del seu sou&lt;/strong&gt; a pagar el lloguer, quant paga en €?&quot;, &quot;expected&quot;: &quot;500&quot;, &quot;steps&quot;: &quot;1500 / 3 = &lt;strong&gt;500 €&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;En una caixa hi ha &lt;strong&gt;48 peces metàl·liques&lt;/strong&gt;. Si &lt;strong&gt;3/4&lt;/strong&gt; són cargols d&#x27;acer, quants cargols hi ha?&quot;, &quot;expected&quot;: &quot;36&quot;, &quot;steps&quot;: &quot;(48 × 3) / 4 = 144 / 4 = &lt;strong&gt;36 cargols&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud5-5" data-unit="ud5" data-title="Significats de la Fracció" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Els Tres Significats de la Fracció</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a revisar com s'interpreta una fracció:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🍰</span>
                <h4>Fracció com a Part d'un Tot</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Repartiment d'una unitat</h5>
                <p>La unitat es divideix en parts iguals (denominador) i se'n prenen unes quantes (numerador). Exemple: 3 trossos d'una pizza de 8 (3/8).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➗</span>
                <h4>Fracció com a Quocient</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Una divisió indicada</h5>
                <p>Representa el resultat de dividir el numerador entre el denominador. Exemple: 3/4 = 3 ÷ 4 = 0,75. 7/2 = 3,5.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">⚙️</span>
                <h4>Fracció com a Operador</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Fracció d'una quantitat C</h5>
                <p>Multiplica la quantitat pel numerador i divideix pel denominador: (a/b) de C = (C × a) / b.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔄</span>
                <h4>Fracció Inversa</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Invertir numerador i denominador</h5>
                <p>La fracció inversa de a/b és b/a. El producte d'una fracció per la seua inversa sempre és 1: (3/5) × (5/3) = 15/15 = 1.</p>
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
    <!-- act-ud5-6 (order) -->
    <div class="pdi-activity-card" id="act-ud5-6" data-unit="ud5" data-title="Suma Diferent Denominador" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R6 · Suma amb m.c.m.</span>
        <h3>🥧 Algorisme per a Sumar Fraccions amb Diferent Denominador: 1/2 + 2/3</h3>
      </div>
      <p class="pdi-instruction">Ordena els 4 passos matemàtics per a calcular 1/2 + 2/3:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Trobar el comú denominador calculant el mínim comú múltiple: m.c.m.(2, 3) = 6</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Calcular els nous numeradors dividint el comú denominador pel vell i multiplicant: 6÷2×1=3  i  6÷3×2=4</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Escriure les fraccions amb el mateix denominador: 3/6 + 4/6</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Sumar els numeradors mantenint el denominador 6: 3/6 + 4/6 = 7/6</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: calcular mcm</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: transformar numeradors</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: plantejar suma comú</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: resultat final</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud5-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud5-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud5-7" data-unit="ud5" data-title="Multiplicar i Dividir" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R7 · Speed Quiz Producte/Divisió</span>
        <h3>⚡ Speed Quiz: Multiplicació i Divisió de Fraccions</h3>
      </div>
      <p class="pdi-instruction">Respon si cada regla d'operació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Per a multiplicar dues fraccions es multipliquen en línia recta: numerador per numerador i denominador per denominador.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (a/b) × (c/d) = (a×c) / (b×d). Exemple: 2/3 × 4/5 = 8/15.&quot;}, {&quot;q&quot;: &quot;Per a multiplicar fraccions cal calcular primer el m.c.m. dels denominadors.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El m.c.m. només es fa per a SUMAR i RESTAR! En multiplicar es fa directament en línia recta!&quot;}, {&quot;q&quot;: &quot;Per a dividir dues fraccions es multipliquen els termes en creu: (a/b) ÷ (c/d) = (a×d) / (b×c).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; O multiplicar per la fracció inversa: 2/3 ÷ 4/5 = 10/12 = 5/6.&quot;}, {&quot;q&quot;: &quot;Qualsevol nombre enter es pot expressar com una fracció posant-li un 1 com a denominador (ex: 5 = 5/1).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Per això 5 × 2/3 = 5/1 × 2/3 = 10/3.&quot;}, {&quot;q&quot;: &quot;La meitat de la meitat d&#x27;una quantitat equival a multiplicar per 1/2 i torna a donar 1/2.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La meitat d&#x27;un mig és 1/2 × 1/2 = &lt;strong&gt;1/4 (un quart)&lt;/strong&gt;!&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud5-8" data-unit="ud5" data-title="Operacions amb Fraccions" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Operacions amb Resultats Discordants</h3>
      </div>
      <p class="pdi-instruction">Fes els càlculs i detecta quina operació dóna un resultat diferent:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Resultat Objectiu 1/2&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen exactament 1/2 (un mig), però una dóna un valor diferent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;1/4 + 1/4 (2/4 = 1/2)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna 1/2&quot;}, {&quot;text&quot;: &quot;1 - 1/2 (Dóna 1/2)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna 1/2&quot;}, {&quot;text&quot;: &quot;2/3 × 3/4 (6/12 = 1/2)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna 1/2&quot;}, {&quot;text&quot;: &quot;1/2 ÷ 2 (Dóna 1/4)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Dividir 1/2 entre 2 dóna 1/4 (un quart), no 1/2!&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Fraccions Iguals a 1&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes expressions donen exactament 1, però una no. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;3/5 + 2/5 (5/5 = 1)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 1&quot;}, {&quot;text&quot;: &quot;4/7 × 7/4 (Producte per inversa = 1)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 1&quot;}, {&quot;text&quot;: &quot;5/6 ÷ 5/6 (Divisió d&#x27;un nombre per si mateix = 1)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Val 1&quot;}, {&quot;text&quot;: &quot;1/2 + 1/3 (5/6)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 1/2 + 1/3 = 5/6 (aproximadament 0,833), no arriba a la unitat 1!&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud5-9" data-unit="ud5" data-title="Taller amb Fraccions" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Problemes Pràctics amb Fraccions al Taller</h3>
      </div>
      <p class="pdi-instruction">Calcula el resultat exacte i introdueix-lo (utilitza el punt per als decimals):</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;D&#x27;un rotllo de cable de &lt;strong&gt;120 metres&lt;/strong&gt; s&#x27;han utilitzat &lt;strong&gt;2/3&lt;/strong&gt; en una instal·lació elèctrica. Quants metres de cable QUEDEN al rotllo?&quot;, &quot;expected&quot;: &quot;40&quot;, &quot;steps&quot;: &quot;Gastat: (120 × 2)/3 = 80 m  ➔  Queden: 120 - 80 = &lt;strong&gt;40 metres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Un pot conté &lt;strong&gt;3/4 de litre&lt;/strong&gt; d&#x27;oli hidràulic i un altre conté &lt;strong&gt;1/2 litre&lt;/strong&gt;. Quants litres tenim en total expressat en format decimal (usa el punt)?&quot;, &quot;expected&quot;: &quot;1.25&quot;, &quot;steps&quot;: &quot;3/4 = 0,75 L  ➔  1/2 = 0,50 L  ➔  0,75 + 0,50 = &lt;strong&gt;1.25 litres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Quant és el resultat en nombre enter de: &lt;strong&gt;(3/4 × 8) + 4&lt;/strong&gt; ?&quot;, &quot;expected&quot;: &quot;10&quot;, &quot;steps&quot;: &quot;3/4 de 8 = (3×8)/4 = 24/4 = 6  ➔  6 + 4 = &lt;strong&gt;10&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud5-9', '0')">0</button>
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
    <!-- act-ud5-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud5-10" data-unit="ud5" data-title="Resum d'Operacions" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R10 · Algorismes Fraccions</span>
        <h3>🪞 Targetes Giratòries 3D: Resum Operatiu amb Fraccions</h3>
      </div>
      <p class="pdi-instruction">Gira les targetes per a recordar els 4 algorismes d'operació:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➕</span>
                <h4>Suma i Resta</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>m.c.m. de denominadors</h5>
                <p>Si els denominadors són iguals, només s'operen els numeradors. Si són diferents, cal reduir a comú denominador pel mínim comú múltiple.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✖️</span>
                <h4>Multiplicació</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>En línia recta</h5>
                <p>Numerador × Numerador i Denominador × Denominador. No cal buscar comú denominador mai!</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">➗</span>
                <h4>Divisió</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Producte en creu</h5>
                <p>Numerador1 × Denominador2 va a dalt; Denominador1 × Numerador2 va a baix: (a/b) ÷ (c/d) = (a·d) / (b·c).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">✂️</span>
                <h4>Fracció Irreducible</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Dividir pel MCD</h5>
                <p>Quan el numerador i el denominador ja no tenen cap divisor comú excepte l'1, la fracció no es pot simplificar més i és irreducible.</p>
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
    <div class="pdi-activity-card" id="act-ud6-1" data-unit="ud6" data-title="De Menor a Major" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R1 · Escala Còsmica</span>
        <h3>🔭 L'Escala Còsmica: Dels Cossos Menors a l'Univers</h3>
      </div>
      <p class="pdi-instruction">Ordena les 6 estructures còsmiques des de la més petita fins a la més gegantina:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Asteroide o Meteorit (Cossos rocallosos menors de metres a kilòmetres)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Planeta (Cos rocós o gasós en òrbita al voltant d'una estrella: Terra, Júpiter)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Estrella (Esfera de plasma amb fusió nuclear d'hidrogen: el Sol)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Sistema Planetari (Conjunt del Sol i tots els astres que orbiten al seu voltant)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Galàxia (Conjunt gegantí de centenars de milers de milions d'estrelles: la Via Làctia)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6è: L'Univers Sencer (Tot l'espai, el temps, la matèria i l'energia existents)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: asteroide</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: planeta</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: estrella</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: sistema solar</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: galàxia</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">6è: univers</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud6-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud6-2" data-unit="ud6" data-title="Big Bang i Distàncies" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R2 · Speed Quiz Còsmic</span>
        <h3>⚡ Speed Quiz: L'Origen de l'Univers i les Distàncies a l'Espai</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les qüestions d'astronomia:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La teoria científica més acceptada sobre l&#x27;origen de l&#x27;Univers és la del Big Bang fa uns 13.800 milions d&#x27;anys.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;Univers va començar a expandir-se des d&#x27;un estat d&#x27;alta densitat i temperatura.&quot;}, {&quot;q&quot;: &quot;Un any llum és una mesura de temps que indica quants anys triga la Terra a fer una volta.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;any llum és una unitat de &lt;strong&gt;DISTÀNCIA&lt;/strong&gt;! És la distància que recorre la llum en un any a 300.000 km/s (uns 9,46 bilions de km)!&quot;}, {&quot;q&quot;: &quot;El Sol és una estrella de mida mitjana situada en un braç espiral de la galàxia Via Làctia.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Estem al Braç d&#x27;Orió de la Via Làctia.&quot;}, {&quot;q&quot;: &quot;La Unitat Astronòmica (UA) és la distància mitjana entre la Terra i la Lluna.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La UA és la distància mitjana entre la &lt;strong&gt;Terra i el SOL&lt;/strong&gt; (aproximadament 150 milions de km)!&quot;}, {&quot;q&quot;: &quot;La llum viatja en el buit a una velocitat aproximada de 300.000 quilòmetres per segon.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Res a l&#x27;Univers pot viatjar més ràpid que la llum.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud6-3" data-unit="ud6" data-title="Tipus de Planetes" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Planetes Rocosos vs Gasosos i Astres</h3>
      </div>
      <p class="pdi-instruction">Detecta quin astre no pertany al grup:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Planetes Rocosos o Interiors (Tel·lúrics)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests planetes són ROCOSOS i estan a l&#x27;interior del cinturó d&#x27;asteroides, però un és un GEGANT GASÓS. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Mercuri (Rocós)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Interior&quot;}, {&quot;text&quot;: &quot;Mart (Rocós)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Interior&quot;}, {&quot;text&quot;: &quot;Saturn (Gegant gasós amb anells)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Saturn és un planeta exterior gasós gegant, no és rocós com Mercuri, Venus, Terra i Mart!&quot;}, {&quot;text&quot;: &quot;Venus (Rocós)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Interior&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Cossos Lluminosos vs No Lluminosos&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests astres NO tenen llum pròpia i només reflecteixen la llum solar, però un és una estrella amb llum pròpia. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;La Lluna (Satèl·lit que reflecteix llum)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;No té llum pròpia&quot;}, {&quot;text&quot;: &quot;Mart (Planeta que reflecteix llum)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;No té llum pròpia&quot;}, {&quot;text&quot;: &quot;El Sol (Estrella amb fusió nuclear que emet llum)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El Sol té llum i energia pròpies gràcies a la fusió de l&#x27;hidrogen!&quot;}, {&quot;text&quot;: &quot;Un cometa (Cos de gel i pols)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;No té llum pròpia&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud6-4" data-unit="ud6" data-title="Astronomia Numèrica" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Càlculs de Distàncies i Temps Còsmic</h3>
      </div>
      <p class="pdi-instruction">Fes els càlculs astronòmics i escriu el valor exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La llum viatja a &lt;strong&gt;300.000 km/s&lt;/strong&gt; i el Sol està a &lt;strong&gt;150.000.000 km&lt;/strong&gt; de la Terra. Quants segons triga la llum del Sol a arribar-nos?&quot;, &quot;expected&quot;: &quot;500&quot;, &quot;steps&quot;: &quot;150.000.000 ÷ 300.000 = &lt;strong&gt;500 segons&lt;/strong&gt; (8 minuts i 20 segons).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Júpiter està a unes &lt;strong&gt;5 Unitats Astronòmiques (UA)&lt;/strong&gt; del Sol. Si 1 UA són 150 milions de km, a quants milions de km està Júpiter?&quot;, &quot;expected&quot;: &quot;750&quot;, &quot;steps&quot;: &quot;5 × 150 = &lt;strong&gt;750 milions de km&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un any llum són uns 9,5 bilions de km. Si l&#x27;estrella Pròxima Centauri està a &lt;strong&gt;4 anys llum&lt;/strong&gt;, quants anys triga la seua llum a arribar a la Terra?&quot;, &quot;expected&quot;: &quot;4&quot;, &quot;steps&quot;: &quot;Com que està a 4 anys llum, la seua llum triga exactament &lt;strong&gt;4 anys&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud6-5" data-unit="ud6" data-title="Components Còsmics" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Grans Estructures de l'Univers</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a conèixer els components de l'espai:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌌</span>
                <h4>La Via Làctia</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Galàxia Espiral Barrada</h5>
                <p>La nostra galàxia conté entre 100.000 i 400.000 milions d'estrelles i fa uns 100.000 anys llum de diàmetre. Al seu centre hi ha un forat negre supermassiu (Sagitari A*).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">☁️</span>
                <h4>Nebulosa</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Bressol d'Estrelles</h5>
                <p>Immenses acumulacions de gas (sobretot hidrogen i heli) i pols còsmica on la gravetat condensa la matèria per a fer nàixer noves estrelles.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🕳️</span>
                <h4>Forat Negre</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Gravetat Infinita</h5>
                <p>Regió de l'espai on la concentració de matèria és tan enorme que ni tan sols la llum pot escapar de la seua atracció gravitatòria.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📏</span>
                <h4>Unitat Astronòmica (UA)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>150.000.000 km</h5>
                <p>Unitat emprada per a mesurar distàncies dins del nostre Sistema Solar, definida com la distància mitjana que separa el centre de la Terra del Sol.</p>
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
    <!-- act-ud6-6 (order) -->
    <div class="pdi-activity-card" id="act-ud6-6" data-unit="ud6" data-title="Planetes des del Sol" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R6 · Els 8 Planetes</span>
        <h3>🪐 Els 8 Planetes del Sistema Solar en Ordre des del Sol</h3>
      </div>
      <p class="pdi-instruction">Ordena els planetes des del més proper al Sol fins al més allunyat:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Mercuri (Planeta rocós més xicotet i proper al Sol)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Venus (Planeta més calent per efecte d'hivernacle extrem)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Terra (El nostre planeta blau amb aigua líquida i vida)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Mart (El planeta roig, ric en òxid de ferro)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Júpiter (El gegant de gas més massiu de tots)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6è: Saturn (Gegant gasós famós pels seus impressionants anells de gel)</div>
          <div class="pdi-item" draggable="true" data-order="7"><span class="item-handle">☰</span> 7è: Urà (Gegant de gel que gira tombat sobre el seu eix)</div>
          <div class="pdi-item" draggable="true" data-order="8"><span class="item-handle">☰</span> 8è: Neptú (El planeta més llunyà i ventós del Sistema Solar)</div>
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
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud6-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud6-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud6-7" data-unit="ud6" data-title="Cometes i Meteorits" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R7 · Speed Quiz Cossos Menors</span>
        <h3>⚡ Speed Quiz: Asteroides, Cometes i Estels Fugaços</h3>
      </div>
      <p class="pdi-instruction">Toca VERITAT o FALS ràpidament:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Els cometes són cossos fets de gel, pols i roca que desenvolupen una cua brillant quan s&#x27;acosten al Sol.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La calor solar sublima el gel i el vent solar espenta la cua en direcció contrària al Sol.&quot;}, {&quot;q&quot;: &quot;Un estel fugaç és una estrella de veritat que cau del cel i xoca contra la Terra.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Els estels fugaços són &lt;strong&gt;METEORS&lt;/strong&gt;: fragments minúsculs de pols o roca que es desintegren per fricció amb l&#x27;atmosfera terrestre brillants!&quot;}, {&quot;q&quot;: &quot;El cinturó principal d&#x27;asteroides es troba situat entre les òrbites de Mart i de Júpiter.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Separa els planetes rocosos interiors dels gegants exteriors.&quot;}, {&quot;q&quot;: &quot;Si un meteoroid travessa l&#x27;atmosfera sense desintegrar-se del tot i impacta a terra, s&#x27;anomena meteorit.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Meteoroid (a l&#x27;espai) ➔ Meteor (fugaç a l&#x27;aire) ➔ Meteorit (impactat al sòl).&quot;}, {&quot;q&quot;: &quot;Plutó continua sent considerat oficialment el nové planeta del Sistema Solar.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Des de 2006, la Unió Astronòmica Internacional va reclassificar Plutó com a &lt;strong&gt;planeta nan&lt;/strong&gt;.&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud6-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud6-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud6-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud6-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-8 (intrus) -->
    <div class="pdi-activity-card" id="act-ud6-8" data-unit="ud6" data-title="Satèl·lits vs Planetes Nans" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Satèl·lits Naturals i Planetes Nans</h3>
      </div>
      <p class="pdi-instruction">Identifica l'element discordant en cada cas:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Satèl·lits Naturals del Sistema Solar&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests cossos són SATÈL·LITS que orbiten planetes, però un és un PLANETA NAN. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;La Lluna (Satèl·lit de la Terra)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit&quot;}, {&quot;text&quot;: &quot;Tità (Satèl·lit gegant de Saturn)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit&quot;}, {&quot;text&quot;: &quot;Plutó (Planeta nan del cinturó de Kuiper)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Plutó no orbita cap planeta, orbita directament el Sol com a planeta nan!&quot;}, {&quot;text&quot;: &quot;Ganimedes (Satèl·lit més gran de Júpiter)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Planetes Gasosos Exteriors&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests planetes són GEGANTS GASOSOS/GELATS, però un és rocós. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Júpiter (Gasós)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gegant exterior&quot;}, {&quot;text&quot;: &quot;Urà (Gegant de gel)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gegant exterior&quot;}, {&quot;text&quot;: &quot;Mart (Planeta rocós interior)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Mart és un planeta rocós tel·lúric, no pas un gegant gasós!&quot;}, {&quot;text&quot;: &quot;Neptú (Gegant de gel)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gegant exterior&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud6-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-9 (keypad) -->
    <div class="pdi-activity-card" id="act-ud6-9" data-unit="ud6" data-title="Dades del Sistema Solar" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R9 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Dades Numèriques dels Planetes</h3>
      </div>
      <p class="pdi-instruction">Escriu la resposta numèrica exacta amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quants planetes principals té en total el nostre Sistema Solar (sense comptar els planetes nans com Plutó)?&quot;, &quot;expected&quot;: &quot;8&quot;, &quot;steps&quot;: &quot;Mercuri, Venus, Terra, Mart, Júpiter, Saturn, Urà i Neptú = &lt;strong&gt;8 planetes&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Júpiter té un diàmetre aproximat d&#x27;uns 140.000 km, mentre que la Terra fa uns 12.742 km. Quantes Terres cabrien aproximadament en línia recta al diàmetre de Júpiter (arrodoneix a enter)?&quot;, &quot;expected&quot;: &quot;11&quot;, &quot;steps&quot;: &quot;140.000 ÷ 12.742 ≈ &lt;strong&gt;11 Terres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;L&#x27;any 1969 l&#x27;ésser humà va xafar per primera vegada la superfície de la Lluna amb la missió Apollo 11. Quants anys van passar des de 1969 fins a l&#x27;any 2024?&quot;, &quot;expected&quot;: &quot;55&quot;, &quot;steps&quot;: &quot;2024 - 1969 = &lt;strong&gt;55 anys&lt;/strong&gt;.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud6-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud6-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud6-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud6-9', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud6-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud6-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud6-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud6-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud6-10" data-unit="ud6" data-title="Tecnologia Espacial" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R10 · Exploració Espacial</span>
        <h3>🪞 Targetes Giratòries 3D: Grans Fites de l'Exploració Espacial</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a descobrir els instruments de conquesta espacial:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🚀</span>
                <h4>Estació Espacial Internacional (ISS)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Laboratori en Òrbita a 400 km</h5>
                <p>Habitatge permanent d'astronautes des de l'any 2000. Gira al voltant de la Terra a 27.600 km/h (fa una volta sencera cada 90 minuts!).</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🔭</span>
                <h4>Telescopi Espacial James Webb</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Mirant l'Univers Primitiu</h5>
                <p>Telescopi infraroig d'alta resolució situat a 1,5 milions de km de la Terra (punt Lagrange L2) per a estudiar les primeres galàxies formades després del Big Bang.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛰️</span>
                <h4>Satèl·lits de Comunicacions</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Òrbita Geoestacionària (36.000 km)</h5>
                <p>Giren al mateix ritme que la Terra (24 hores) i semblen immòbils al cel, permetent emetre senyals de GPS, televisió, meteorologia i telefonia mòbil.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛸</span>
                <h4>Sondes Interplanetàries Voyager</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Més enllà del Sistema Solar</h5>
                <p>Llançades en 1977, la Voyager 1 i 2 són els objectes fabricats per l'home més allunyats de la Terra, viatjant per l'espai interestel·lar amb el disc d'or de la humanitat.</p>
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
    <!-- act-ud7-1 (order) -->
    <div class="pdi-activity-card" id="act-ud7-1" data-unit="ud7" data-title="Capes Geosfera" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R1 · Capes de la Geosfera</span>
        <h3>🌍 Capes de la Geosfera Terrestre en Profunditat</h3>
      </div>
      <p class="pdi-instruction">Arrossega les capes de l'interior terrestre des de la superfície exterior fins al centre del planeta:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Escorça continental i oceànica (0 a 70 km de gruix)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Mantell superior i astenosfera dúctil (fins a 670 km)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Mantell inferior dens i rígid (fins a 2.900 km)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Nucli extern líquid de ferro fos (fins a 5.150 km)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Nucli intern sòlid de ferro i níquel (fins a 6.371 km)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r nivell: superfície sòlida</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n nivell: corrents convectius</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r nivell: discontinuïtat de Gutenberg</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t nivell: genera camp magnètic</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è nivell: centre del planeta</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud7-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud7-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud7-2" data-unit="ud7" data-title="Moviments i Estacions" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Els Moviments de la Terra i les Estacions</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació astronòmica és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les 4 estacions de l&#x27;any es deuen a que la Terra està més a prop del Sol a l&#x27;estiu i més lluny a l&#x27;hivern.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La distància al Sol varia molt poc. Les estacions es deuen a la &lt;strong&gt;inclinació de 23,5° de l&#x27;eix terrestre&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;En el solstici d&#x27;estiu a l&#x27;hemisferi nord (21 de juny), tenim el dia més llarg de tot l&#x27;any i la nit més curta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els rajos solars incideixen perpendicularment sobre el Tròpic de Càncer.&quot;}, {&quot;q&quot;: &quot;El moviment de rotació dura exactament 24 hores i es fa en sentit d&#x27;oest a est, per això veiem eixir el Sol per l&#x27;est.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La rotació d&#x27;oest a est origina la successió del dia i la nit.&quot;}, {&quot;q&quot;: &quot;En els equinoccis de primavera i tardor, el dia i la nit tenen exactament la mateixa durada (12 hores) en tot el planeta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els rajos solars cauen verticals sobre la línia de l&#x27;Equador terrestre.&quot;}, {&quot;q&quot;: &quot;El camp magnètic terrestre es genera per les roques imantades de l&#x27;escorça de les muntanyes.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El genera el &lt;strong&gt;nucli extern líquid&lt;/strong&gt; de ferro fos en moviment per efecte dinamo.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud7-3" data-unit="ud7" data-title="Fases i Capes" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Fases Lunars i Estructura Terrestre</h3>
      </div>
      <p class="pdi-instruction">Descobreix quin element no compleix el criteri de la categoria:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Fases Ordinàries del Cicle Lunar&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són fases periòdiques del cicle lunar de 28 dies, però un és un fenomen astronòmic puntual. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Lluna Nova&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase regular del cicle lunar&quot;}, {&quot;text&quot;: &quot;Quart Creixent&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase regular del cicle lunar&quot;}, {&quot;text&quot;: &quot;Eclipsi Total de Sol&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Un eclipsi és una alineació puntual extraordinària, no una fase lunar ordinària!&quot;}, {&quot;text&quot;: &quot;Lluna Plena&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase regular del cicle lunar&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Capes Geoquímiques de la Geosfera&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són capes geoquímiques pures de la Terra, però un és una unitat dinàmica-mecànica. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Escorça terrestre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa geoquímica més superficial&quot;}, {&quot;text&quot;: &quot;Mantell terrestre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa geoquímica intermèdia de peridotites&quot;}, {&quot;text&quot;: &quot;Litosfera&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La litosfera és una capa mecànica rígida formada per l&#x27;escorça i el mantell superior rígid!&quot;}, {&quot;text&quot;: &quot;Nucli terrestre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa geoquímica central de ferro i níquel&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud7-4" data-unit="ud7" data-title="Càlculs Geosfera" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Dades Geofísiques de la Terra</h3>
      </div>
      <p class="pdi-instruction">Calcula la dada numèrica i tecleja-la a la pissarra digital:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La translació terrestre dura 365 dies i &lt;strong&gt;6 hores&lt;/strong&gt;. Quantes hores de desfasament s&#x27;acumulen en 4 anys per a afegir el dia 29 de febrer (any de traspàs)?&quot;, &quot;expected&quot;: &quot;24&quot;, &quot;steps&quot;: &quot;4 anys × 6 hores/any = &lt;strong&gt;24&lt;/strong&gt; hores (un dia sencer).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El cicle complet de les fases lunars dura aproximadament 28 dies. Quants dies passen aproximadament des de la Lluna Nova fins a la Lluna Plena?&quot;, &quot;expected&quot;: &quot;14&quot;, &quot;steps&quot;: &quot;Mitja volta a l&#x27;òrbita lunar = 28 / 2 = &lt;strong&gt;14&lt;/strong&gt; dies.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Si l&#x27;escorça terrestre té un gruix mitjà d&#x27;uns 35 km i el radi total de la Terra fins al centre és de 6.371 km, quants km ocupen el mantell i el nucli junts (6.371 - 35)?&quot;, &quot;expected&quot;: &quot;6336&quot;, &quot;steps&quot;: &quot;6.371 km - 35 km = &lt;strong&gt;6336&lt;/strong&gt; km.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud7-5" data-unit="ud7" data-title="Geodinàmica Clau" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Geodinàmica i Moviments</h3>
      </div>
      <p class="pdi-instruction">Toca cada targeta per a girar-la en 3D i descobrir el fenomen geològic:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🧭</span>
                <h4>Inclinació de l'Eix (23,5°)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Motor de les Estacions</h5>
                <p>La inclinació fa que l'angle d'incidència de la llum solar canvie al llarg de l'any, regulant el clima i la durada del dia.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌊</span>
                <h4>Marees Vives i Mortes</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Atracció Lluna + Sol</h5>
                <p>Les marees vives ocorren en Lluna Plena i Nova (Sol i Lluna alineats sumen forces). Les mortes ocorren en quarts creixent i minvant.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌑</span>
                <h4>Eclipsi de Sol vs Lluna</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Joc d'Ombres Còsmiques</h5>
                <p>En l'eclipsi de Sol, la Lluna s'interposa entre el Sol i la Terra. En el de Lluna, la Terra fa ombra sobre la Lluna Plena.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🧲</span>
                <h4>Camp Magnètic Terrestre</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Escut de la Magnetosfera</h5>
                <p>Generat pel ferro líquid del nucli extern. Desvia les partícules letals del vent solar i fa funcionar les brúixoles.</p>
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
    <!-- act-ud7-6 (order) -->
    <div class="pdi-activity-card" id="act-ud7-6" data-unit="ud7" data-title="Ordre Fases Lunars" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R6 · Cicle Lunar</span>
        <h3>🌙 Les Fases de la Lluna en Ordre Cronològic (28 Dies)</h3>
      </div>
      <p class="pdi-instruction">Ordena les fases lunars des de la posició inicial del cicle fins a completar la volta:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Lluna Nova (la Lluna està entre el Sol i la Terra, cara fosca visible)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Lluna Creixent (falç en forma de lletra 'D' visible al capvespre)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Quart Creixent (la meitat dreta del disc lunar està il·luminada)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Lluna Plena (la cara visible està completament il·luminada)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Quart Minvant (la meitat esquerra il·luminada, forma de lletra 'C')</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Lluna Minvant (fina falç abans de tornar a començar el cicle)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">Pas 1: dia 0</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">Pas 2: creixent inicial</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">Pas 3: dia 7 aproximadament</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">Pas 4: dia 14 - oposició</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">Pas 5: dia 21 aproximadament</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">Pas 6: final de cicle</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud7-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud7-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud7-7" data-unit="ud7" data-title="Plaques i Volcans" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R7 · Tectònica i Sismes</span>
        <h3>⚡ Speed Quiz: Tectònica de Plaques, Terratrèmols i Volcans</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les preguntes sobre geodinàmica interna:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les fosses oceàniques més fondes del món es formen en zones de subducció on una placa s&#x27;enfonsa davall d&#x27;una altra.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La fossa de les Marianes (11.000 m) s&#x27;origina per subducció litosfèrica.&quot;}, {&quot;q&quot;: &quot;La falla de San Andrés a Califòrnia és un límit divergent on les plaques se separen per a crear nou fons marí.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És un límit transformant o passiu on les plaques llisquen lateralment.&quot;}, {&quot;q&quot;: &quot;L&#x27;epicentre és el punt exacte de l&#x27;interior terrestre on es trenca la roca i s&#x27;inicia el terratrèmol.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El punt intern és l&#x27;&lt;strong&gt;hipocentre&lt;/strong&gt;; l&#x27;epicentre és el punt de la superfície verticalment damunt.&quot;}, {&quot;q&quot;: &quot;L&#x27;escorça oceànica és molt més prima (5-10 km) i densa que l&#x27;escorça continental (30-70 km).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Està formada principalment per basalts foscos i pesants.&quot;}, {&quot;q&quot;: &quot;Les ones sísmiques S (secundàries) no es transmeten a través de líquids, evidenciant que el nucli extern és fluid.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La desaparició de les ones S a 2.900 km va demostrar la liquiditat del nucli extern.&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud7-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud7-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud7-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud7-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud7-8 (intrus) -->
    <div class="pdi-activity-card" id="act-ud7-8" data-unit="ud7" data-title="Límits Plaques" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R8 · Límits i Condicions</span>
        <h3>🕵️ Troba l'Intrús: Límits Tectònics i Vida a la Terra</h3>
      </div>
      <p class="pdi-instruction">Identifica l'element que desentona en cada grup geològic:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Límits Convergents (Xoc de Plaques)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes estructures s&#x27;originen pel xoc o subducció de plaques (convergència), però una és d&#x27;un límit divergent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Serralada de l&#x27;Himàlaia (xoc continental Índia-Euràsia)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Límit convergent continental&quot;}, {&quot;text&quot;: &quot;Fossa de les Marianes (subducció oceànica)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Límit convergent de subducció&quot;}, {&quot;text&quot;: &quot;Dorsal Centroatlàntica&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La dorsal és un límit divergent on les plaques se separen!&quot;}, {&quot;text&quot;: &quot;Serralada dels Andes (subducció oceànica sota Amèrica)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Límit convergent&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Condicions Exclusives de la Terra per a la Vida&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes condicions fan possible la vida a la Terra, però una és hostil o aliena. Quina és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aigua líquida abundant en superfície&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Condició essencial de la hidrosfera&quot;}, {&quot;text&quot;: &quot;Temperatura mitjana superficial de 15 °C&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Efecte hivernacle natural temperat&quot;}, {&quot;text&quot;: &quot;Rotació violenta de 8 hores amb vents de 600 km/h&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Això és una condició extrema d&#x27;un planeta gegant gasós, no de la Terra!&quot;}, {&quot;text&quot;: &quot;Capa d&#x27;ozó i camp magnètic protectors contra radiació&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Escuts defensius essencials&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud7-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud7-9 (keypad) -->
    <div class="pdi-activity-card" id="act-ud7-9" data-unit="ud7" data-title="Magnituds Sísmiques" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R9 · Càlcul Tectònic (3P)</span>
        <h3>🔢 Teclat Mental: Càlculs Tectònics i Moviment de Plaques</h3>
      </div>
      <p class="pdi-instruction">Resol els càlculs i escriu el valor numèric exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La dorsal de l&#x27;oceà Atlàntic s&#x27;obri separant Amèrica i Europa a un ritme de &lt;strong&gt;2,5 cm per any&lt;/strong&gt;. Quants centímetres s&#x27;hauran separat al cap de 100 anys?&quot;, &quot;expected&quot;: &quot;250&quot;, &quot;steps&quot;: &quot;2,5 cm/any × 100 anys = &lt;strong&gt;250&lt;/strong&gt; cm (2,5 metres).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En l&#x27;escala sísmica, cada grau de magnitud allibera unes 32 vegades més energia. Si un sisme passa de magnitud 4 a 6 (dos graus), quantes vegades s&#x27;amplifica l&#x27;energia alliberada (32 × 32)?&quot;, &quot;expected&quot;: &quot;1024&quot;, &quot;steps&quot;: &quot;32 × 32 = &lt;strong&gt;1024&lt;/strong&gt; vegades més energia.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;La circumferència equatorial de la Terra és d&#x27;uns 40.080 km. Si gira a 1.670 km/h a l&#x27;Equador, quantes hores tarda a fer un gir de 360° (40.080 / 1.670)?&quot;, &quot;expected&quot;: &quot;24&quot;, &quot;steps&quot;: &quot;40.080 / 1.670 = &lt;strong&gt;24&lt;/strong&gt; hores.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud7-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud7-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud7-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud7-9', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud7-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud7-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud7-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud7-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud7-10" data-unit="ud7" data-title="Relleu i Fenòmens" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R10 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Relleu i Dinàmica Terrestre</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a revisar conceptes de relleu i estructures de la Terra:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌋</span>
                <h4>Cinturó de Foc del Pacífic</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Límit d'Alta Activitat</h5>
                <p>Zona de subducció que concentra més del 75% dels volcans actius i el 90% dels terratrèmols més destructius del món.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🏔️</span>
                <h4>Orogènesi (Formació de Muntanyes)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Plec i Fractura de Roques</h5>
                <p>La col·lisió de plaques comprimeix sediments provocant plecs, falles i l'elevació de grans serralades com els Pirineus.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">💥</span>
                <h4>Ones P i Ones S</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Diagnòstic de l'Interior</h5>
                <p>Les ones P (primàries) viatgen per sòlids i líquids; les ones S (secundàries) només per sòlids, permetent escanejar el planeta.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🏝️</span>
                <h4>Punts Calents (Hotspots)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Volcans Intraplaca</h5>
                <p>Plomalls de magma profund que travessen la placa en moviment, creant cadenes d'illes volcàniques com les Canàries o Hawaii.</p>
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
    <div class="pdi-activity-card" id="act-ud8-1" data-unit="ud8" data-title="Capes Atmosfera" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R1 · Capes Atmosfèriques</span>
        <h3>💨 Les 5 Capes de l'Atmosfera des de la Terra a l'Espai</h3>
      </div>
      <p class="pdi-instruction">Arrossega les capes atmosfèriques en ordre ascendent des de la superfície del sòl fins a l'espai exterior:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Troposfera (0 a 12 km: on ocorre el temps meteorològic i el 80% de l'aire)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Estratosfera (12 a 50 km: conté la capa d'ozó O3 que filtra rajos UV)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Mesosfera (50 a 85 km: capa freda a -90 °C on es cremen els meteors)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Termosfera o Ionosfera (85 a 600 km: aurores polars i Estació Espacial)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Exosfera (> 600 km: límit difús de transició cap a l'espai buit)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1a capa: vida i núvols</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2a capa: capa d'ozó</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3a capa: estels fugaços</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4a capa: gasos ionitzats</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5a capa: satèl·lits exteriors</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud8-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud8-2" data-unit="ud8" data-title="Aire i Pressió" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Composició de l'Aire i Pressió Atmosfèrica</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació sobre l'atmosfera és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El gas més abundant de l&#x27;atmosfera terrestre és l&#x27;oxigen amb un 78% del volum total de l&#x27;aire.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El més abundant és el &lt;strong&gt;nitrogen (N2) amb un 78%&lt;/strong&gt;; l&#x27;oxigen representa el 21%.&quot;}, {&quot;q&quot;: &quot;La pressió atmosfèrica normal a nivell del mar equival a 1 atmosfera o 1.013 hectopascals (hPa).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquest és el valor de referència estàndard mesurat per Torricelli.&quot;}, {&quot;q&quot;: &quot;A mesura que pugem a dalt d&#x27;una muntanya alta, la pressió atmosfèrica augmenta perquè l&#x27;aire pesa més.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La pressió &lt;strong&gt;disminueix amb l&#x27;altitud&lt;/strong&gt; perquè hi ha menys columna d&#x27;aire damunt nostre.&quot;}, {&quot;q&quot;: &quot;La capa d&#x27;ozó es troba a l&#x27;estratosfera i absorbeix la radiació ultraviolada d&#x27;alta energia procedent del Sol.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;ozó (O3) actua com un filtre solar imprescindible per a la vida terrestre.&quot;}, {&quot;q&quot;: &quot;L&#x27;efecte d&#x27;hivernacle natural és un fenomen beneficiós que manté la Terra a una temperatura mitjana temperada de 15 °C.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Sense aquest efecte natural dels gasos com el CO2 i vapor d&#x27;aigua, la Terra estaria congelada a -18 °C.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud8-3" data-unit="ud8" data-title="Instruments i Gasos" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Aparells Meteorològics i Gasos Atmosfèrics</h3>
      </div>
      <p class="pdi-instruction">Tria l'element intrús que no encaixa en la definició del grup:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Gasos Naturals de l&#x27;Aire Net&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests gasos són components naturals de l&#x27;aire sec, però un és un contaminant tòxic de combustió. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Nitrogen (N2 - 78%)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas natural majoritari&quot;}, {&quot;text&quot;: &quot;Monòxid de carboni (CO)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El CO és un contaminant verinós de combustions incompletes, no un gas de l&#x27;aire net!&quot;}, {&quot;text&quot;: &quot;Oxigen (O2 - 21%)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas natural respirable&quot;}, {&quot;text&quot;: &quot;Argó (Ar - 0,93%)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas noble natural&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aparells d&#x27;Estació Meteorològica&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests aparells mesuren variables del clima i l&#x27;atmosfera, però un és d&#x27;un altre àmbit. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Baròmetre (mesura la pressió en hPa)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aparell meteorològic clau&quot;}, {&quot;text&quot;: &quot;Anemòmetre (mesura la velocitat del vent)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aparell meteorològic clau&quot;}, {&quot;text&quot;: &quot;Calibre o peu de rei&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El calibre és una eina de mesura de taller mecànic, no d&#x27;una estació meteorològica!&quot;}, {&quot;text&quot;: &quot;Higròmetre (mesura la humitat de l&#x27;aire)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aparell meteorològic clau&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud8-4" data-unit="ud8" data-title="Càlculs Atmosfèrics" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Dades de Pressió i Temperatura</h3>
      </div>
      <p class="pdi-instruction">Calcula el valor exacte i introdueix-lo a la pantalla numèrica:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;L&#x27;aire sec conté un 78% de nitrogen i un 21% d&#x27;oxigen. Quin percentatge sumen aquests dos gasos vitals en conjunt?&quot;, &quot;expected&quot;: &quot;99&quot;, &quot;steps&quot;: &quot;78% + 21% = &lt;strong&gt;99&lt;/strong&gt;% del volum total de l&#x27;aire.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;La pressió a nivell de mar és de 1.013 hPa. Si a dalt d&#x27;una serra la pressió baixa fins a 813 hPa, quants hPa ha caigut la pressió (1.013 - 813)?&quot;, &quot;expected&quot;: &quot;200&quot;, &quot;steps&quot;: &quot;1.013 hPa - 813 hPa = &lt;strong&gt;200&lt;/strong&gt; hPa de descens.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;A la troposfera la temperatura disminueix uns 6 °C per cada 1.000 m d&#x27;alçada. Si a nivell del mar fa 24 °C, quants graus farà a un pic de 2.000 m (24 - 2×6)?&quot;, &quot;expected&quot;: &quot;12&quot;, &quot;steps&quot;: &quot;24 °C - (2 × 6 °C) = 24 - 12 = &lt;strong&gt;12&lt;/strong&gt; °C.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud8-5" data-unit="ud8" data-title="Fenòmens Atmosfèrics" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Pressió, Vents i Clima</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a girar-les en 3D i estudiar conceptes meteorològics:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">☀️</span>
                <h4>Anticicló (Alta Pressió)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Pressió > 1.013 hPa</h5>
                <p>Massa d'aire dens que descendeix. Impedeix la formació de núvols, produint temps sec, assolellat i estable.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌧️</span>
                <h4>Borrasca (Baixa Pressió)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Pressió < 1.013 hPa</h5>
                <p>L'aire calent i humit puja, es refreda i condensa. Genera nuvolositat densa, vents forts i precipitacions.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌬️</span>
                <h4>Origen del Vent</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>D'Alta a Baixa Pressió</h5>
                <p>El vent és aire en moviment horitzontal que viatja sempre des dels anticiclons cap a les borrasques per a equilibrar pressions.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🧪</span>
                <h4>Pluja Àcida</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>SO2 i NOx d'Indústries</h5>
                <p>Els gasos de combustió de carbó i petroli reaccionen amb el vapor d'aigua formant àcid sulfúric i nítric que corroeix boscos i edificis.</p>
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
    <!-- act-ud8-6 (order) -->
    <div class="pdi-activity-card" id="act-ud8-6" data-unit="ud8" data-title="Cicle Precipitació" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R6 · Formació Precipitació</span>
        <h3>🌧️ El Cicle de Formació del Vent i la Precipitació</h3>
      </div>
      <p class="pdi-instruction">Arrossega les fases en ordre físic des que el Sol calfa la terra fins a la pluja:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. La radiació solar calfa la superfície terrestre i l'aire en contacte amb el sòl</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. L'aire calent es dilata, es torna menys dens i ascendeix (baixa pressió)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. L'aire més fred de l'entorn es desplaça horitzontalment (formació del vent)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. En pujar, el vapor d'aigua es refreda i es condensa en gotetes formant núvols</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Les gotetes s'agrupen, augmenten de massa i cauen per gravetat com a precipitació</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">Pas 1: energia tèrmica</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">Pas 2: ascens tèrmic</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">Pas 3: corrent de vent</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">Pas 4: condensació</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">Pas 5: pluja o neu</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud8-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud8-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud8-7" data-unit="ud8" data-title="Canvi Climàtic" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R7 · Contaminació i Canvi</span>
        <h3>⚡ Speed Quiz: Contaminació Atmosfèrica i Canvi Climàtic</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les preguntes d'impacte ambiental:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El diòxid de carboni (CO2) és l&#x27;únic gas responsable de l&#x27;efecte d&#x27;hivernacle causat per la humanitat.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El metà (CH4), l&#x27;òxid nitrós (N2O) i els gasos fluorats també són gasos d&#x27;hivernacle molt potents.&quot;}, {&quot;q&quot;: &quot;Les partícules en suspensió PM2.5 són especialment perilloses perquè la seua mida microscòpica els permet entrar directament als alvèols pulmonars.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquestes partícules travessen les defenses respiratòries i passen a la sang.&quot;}, {&quot;q&quot;: &quot;El forat de la capa d&#x27;ozó és el responsable directe de l&#x27;augment de temperatura global del canvi climàtic.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són problemes diferents: l&#x27;ozó filtrava rajos UV; l&#x27;escalfament es deu a la retenció de calor per gasos d&#x27;hivernacle.&quot;}, {&quot;q&quot;: &quot;El Protocol de Mont-real va ser un èxit internacional que va prohibir els gasos CFC per a permetre la recuperació de la capa d&#x27;ozó.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Va aconseguir frenar la destrucció de l&#x27;ozó substituint els refrigerants antics.&quot;}, {&quot;q&quot;: &quot;La boira fotoquímica (smog) a les ciutats es produeix per la reacció de gasos de cotxes amb la llum solar intensa.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Origina ozó troposfèric nociu i partícules irritants per als ulls i pulmons.&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud8-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud8-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud8-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud8-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud8-8 (intrus) -->
    <div class="pdi-activity-card" id="act-ud8-8" data-unit="ud8" data-title="Gasos Hivernacle" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R8 · Gasos i Meteors</span>
        <h3>🕵️ Troba l'Intrús: Gasos d'Hivernacle i Precipitacions</h3>
      </div>
      <p class="pdi-instruction">Troba l'element que no compleix la propietat comuna del grup:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Gasos d&#x27;Efecte d&#x27;Hivernacle (GEH)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests gasos atrapen calor infraroja provocant efecte hivernacle, però un no. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Metà (CH4)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Potent gas d&#x27;hivernacle&quot;}, {&quot;text&quot;: &quot;Diòxid de carboni (CO2)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Principal gas d&#x27;hivernacle de combustió&quot;}, {&quot;text&quot;: &quot;Oxigen pur (O2)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;oxigen molecular no té estructura per a absorbir radiació infraroja tèrmica!&quot;}, {&quot;text&quot;: &quot;Vapor d&#x27;aigua (H2O)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas natural d&#x27;efecte hivernacle&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Tipus de Precipitació Atmosfèrica&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són precipitacions aquoses que cauen dels núvols, però un no cau. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Pluja líquida&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Precipitació líquida&quot;}, {&quot;text&quot;: &quot;Calamarsa o pedra&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Precipitació sòlida&quot;}, {&quot;text&quot;: &quot;Boira a terra&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La boira és condensació de vapor d&#x27;aigua en suspensió arran de terra, no una precipitació que cau!&quot;}, {&quot;text&quot;: &quot;Neu en flocs&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Precipitació sòlida&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud8-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud8-9 (keypad) -->
    <div class="pdi-activity-card" id="act-ud8-9" data-unit="ud8" data-title="Emissions CO2" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R9 · Càlcul Ambiental (3P)</span>
        <h3>🔢 Teclat Mental: Càlcul d'Emissions i Qualitat de l'Aire</h3>
      </div>
      <p class="pdi-instruction">Calcula el resultat numèric del problema ambiental:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un vehicle de taller emet 150 grams de CO2 per cada km recorregut. Quants grams de CO2 emetrà en un recorregut de &lt;strong&gt;20 km&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;3000&quot;, &quot;steps&quot;: &quot;150 g/km × 20 km = &lt;strong&gt;3000&lt;/strong&gt; grams (3 kg de CO2).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;L&#x27;OMS fixa el límit diari recomanat de PM2.5 en 15 µg/m³. Si en un carrer cèntric el sensor marca 45 µg/m³, quantes vegades s&#x27;està superant el límit (45 / 15)?&quot;, &quot;expected&quot;: &quot;3&quot;, &quot;steps&quot;: &quot;45 / 15 = &lt;strong&gt;3&lt;/strong&gt; vegades per damunt del llindar de salut.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;L&#x27;aire admet un màxim de 20 g d&#x27;aigua per m³ a 23 °C. Si ara conté 8 g/m³, quin és el % d&#x27;humitat relativa (8 / 20 × 100)?&quot;, &quot;expected&quot;: &quot;40&quot;, &quot;steps&quot;: &quot;(8 / 20) × 100 = 0,40 × 100 = &lt;strong&gt;40&lt;/strong&gt;% d&#x27;humitat relativa.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud8-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud8-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud8-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud8-9', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud8-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud8-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud8-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud8-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud8-10" data-unit="ud8" data-title="Meteorologia Avançada" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R10 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Dinàmica Atmosfèrica i Salut</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a conéixer conceptes avançats d'atmosfera:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌫️</span>
                <h4>Inversió Tèrmica</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Trampa de Fums Urbans</h5>
                <p>Fenomen on una capa d'aire calent queda damunt de l'aire fred de terra, impedint que els fums de cotxes i calderes es dispersen.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌀</span>
                <h4>Efecte Coriolis</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Gir de Borrasques</h5>
                <p>La rotació terrestre desvia el vent cap a la dreta a l'hemisferi nord, fent que les borrasques giren en sentit antihorari.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🫁</span>
                <h4>Ozó Troposfèric vs Estratosfèric</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Bo a dalt, Dolent a baix</h5>
                <p>L'ozó a l'estratosfera protegeix de la radiació UV; però a la troposfera (arran de terra) és un contaminant molt tòxic.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">📡</span>
                <h4>Ionosfera i Comunicacions</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Espill d'Ones de Ràdio</h5>
                <p>Les partícules ionitzades per la radiació solar reflecteixen les ones de ràdio d'ona curta, permetent comunicacions a llarga distància.</p>
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
    <!-- act-ud9-1 (order) -->
    <div class="pdi-activity-card" id="act-ud9-1" data-unit="ud9" data-title="Cicle Natural Aigua" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R1 · Cicle Hidrològic</span>
        <h3>💧 El Cicle Hidrològic Natural de l'Aigua Pas a Pas</h3>
      </div>
      <p class="pdi-instruction">Arrossega les etapes del cicle de l'aigua en el seu ordre de transformació natural:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Evaporació de l'aigua superficial de mars, llacs i sòls per l'acció tèrmica del Sol</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Evapotranspiració dels éssers vius (especialment la transpiració dels boscos)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Condensació del vapor d'aigua en refredar-se en altura per a formar núvols</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Precipitació en forma de pluja, rosada, calamarsa o neu sobre el relleu</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Infiltració d'una part de l'aigua en el subsòl alimentant els aqüífers</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Escorrentia superficial per rius i torrents que retornen l'aigua cap al mar</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">Pas 1: canvi a gas</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">Pas 2: aportació biològica</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">Pas 3: formació de núvols</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">Pas 4: caiguda d'aigua</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">Pas 5: aigua subterrània</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">Pas 6: tancament del cicle</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud9-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud9-2" data-unit="ud9" data-title="Distribució Aigua" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R2 · Speed Quiz (5P)</span>
        <h3>⚡ Speed Quiz: Distribució de l'Aigua al Planeta</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació sobre la hidrosfera és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;L&#x27;aigua salada dels oceans i mars representa aproximadament el 97% de tota l&#x27;aigua que hi ha a la Terra.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Només el 3% restant és aigua dolça.&quot;}, {&quot;q&quot;: &quot;La major part de l&#x27;aigua dolça del planeta (més del 68%) es troba fàcilment accessible en rius i llacs.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Està atrapada en forma de gel a les &lt;strong&gt;glaceres i casquets polars&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;Els aqüífers subterranis concentren quasi el 30% del total de l&#x27;aigua dolça de tot el planeta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Són la principal reserva d&#x27;aigua dolça líquida del món.&quot;}, {&quot;q&quot;: &quot;La salinitat mitjana dels oceans és d&#x27;uns 35 grams de sals dissoltes per cada litre d&#x27;aigua marina (3,5%).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El clorur sòdic (sal comuna) n&#x27;és el component majoritari.&quot;}, {&quot;q&quot;: &quot;L&#x27;aigua destil·lada pura és la més aconsellable per al consum diari de les persones perquè no té cap mineral.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;aigua de boca necessita &lt;strong&gt;sals minerals&lt;/strong&gt; essencials per a no alterar l&#x27;equilibri cel·lular.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud9-3" data-unit="ud9" data-title="Rius i Depuradores" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Trams Fluvials i Depuració d'Aigües</h3>
      </div>
      <p class="pdi-instruction">Detecta quin element no pertany al grup per les seues característiques:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Característiques del Curs Alt d&#x27;un Riu&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests trets són propis del curs alt o capçalera d&#x27;un riu de muntanya, però un correspon a una altra zona. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Pendent molt pronunciada i aigües ràpides&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tret típic de muntanya&quot;}, {&quot;text&quot;: &quot;Gran erosió vertical formant valls en &#x27;V&#x27;&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Erosió forta de curs alt&quot;}, {&quot;text&quot;: &quot;Grans meandres sinuosos sobre planes d&#x27;inundació&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Els meandres es formen en el curs mitjà i baix amb terreny pla, no a la muntanya!&quot;}, {&quot;text&quot;: &quot;Presència de cascades, congosts i ràpids&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Paisatge de curs alt&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Fases d&#x27;una Estació Depuradora (EDAR)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests processos es fan a una depuradora d&#x27;aigües residuals (EDAR), però un és de potabilització (ETAP). Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Desbast amb reixes per a retirar sòlids voluminosos&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament primari físic de l&#x27;EDAR&quot;}, {&quot;text&quot;: &quot;Captació directa d&#x27;aigua d&#x27;un embassament de pluja&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La captació d&#x27;embassament és l&#x27;origen de l&#x27;aigua potable per a l&#x27;ETAP, no una fase d&#x27;aigües residuals a l&#x27;EDAR!&quot;}, {&quot;text&quot;: &quot;Decantació primària per a sedimentar fangs pesants&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament de l&#x27;EDAR&quot;}, {&quot;text&quot;: &quot;Digestió biològica amb bacteris aerobis en reactor&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament secundari biològic de l&#x27;EDAR&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud9-4" data-unit="ud9" data-title="Càlculs Hídrics" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Reserves d'Aigua i Estalvi Domèstic</h3>
      </div>
      <p class="pdi-instruction">Resol els càlculs d'estalvi hídric i tecleja la solució:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;De tota l&#x27;aigua del planeta Terra, el 97% és aigua salada. Quin percentatge d&#x27;aigua dolça queda per a tot el planeta (100 - 97)?&quot;, &quot;expected&quot;: &quot;3&quot;, &quot;steps&quot;: &quot;100% - 97% = &lt;strong&gt;3&lt;/strong&gt;% d&#x27;aigua dolça total.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una aixeta que degota al taller perd 5 litres d&#x27;aigua potable cada hora. Quants litres es perden inútilment en un dia sencer (24 hores)?&quot;, &quot;expected&quot;: &quot;120&quot;, &quot;steps&quot;: &quot;5 litres/hora × 24 hores = &lt;strong&gt;120&lt;/strong&gt; litres d&#x27;aigua malbaratats.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una dutxa de 5 minuts gasta 50 L d&#x27;aigua, mentre que omplir la banyera en gasta 200 L. Quants litres s&#x27;estalvien en triar la dutxa (200 - 50)?&quot;, &quot;expected&quot;: &quot;150&quot;, &quot;steps&quot;: &quot;200 L - 50 L = &lt;strong&gt;150&lt;/strong&gt; litres d&#x27;estalvi per persona.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud9-5" data-unit="ud9" data-title="Sistemes Hídrics" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R5 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Rius, Aqüífers i Tractament</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a girar-les en 3D i descobrir conceptes hídrics:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🏞️</span>
                <h4>Trams d'un Riu (Alt, Mitjà, Baix)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Erosió, Transport, Sedimentació</h5>
                <p>Curs alt: domina l'erosió de la vall en 'V'. Curs mitjà: domina el transport amb meandres. Curs baix: domina la sedimentació i deltes.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🚰</span>
                <h4>ETAP vs EDAR</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Potabilitzar vs Depurar</h5>
                <p>ETAP: tracta aigua de riu per a fer-la potable a l'aixeta. EDAR: depura l'aigua bruta de les clavegueres abans de tornar-la al riu.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🕳️</span>
                <h4>Aqüífer i Nivell Freàtic</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Reserves d'Aigua Sòl</h5>
                <p>L'aqüífer és una formació geològica permeable que emmagatzema aigua. El nivell freàtic és la fondària on comença la zona saturada.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">👕</span>
                <h4>La Petjada Hídrica</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Aigua Virtual Oculta</h5>
                <p>És el volum total d'aigua gastada directament i indirectament per a fabricar un producte (ex: 2.500 L per a 1 samarreta de cotó).</p>
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
    <!-- act-ud9-6 (order) -->
    <div class="pdi-activity-card" id="act-ud9-6" data-unit="ud9" data-title="Cicle Urbà Aigua" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R6 · Cicle Urbà Aigua</span>
        <h3>🚰 El Cicle Urbà de l'Aigua: De la Font a l'Aixeta i Retorn</h3>
      </div>
      <p class="pdi-instruction">Arrossega les fases del cicle de gestió de l'aigua urbana en el seu ordre correcte:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1. Captació d'aigua natural des d'un riu, embassament o pou d'aqüífer</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2. Tractament de potabilització a l'ETAP (filtració, decantació i cloració)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3. Emmagatzematge en dipòsits municipals i xarxa de distribució per canonades</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4. Consum humà, domèstic i industrial a cases, hospitals i tallers</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5. Recollida d'aigües residuals a través de la xarxa de clavegueram</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> 6. Depuració a l'EDAR (eliminació de residus físics i bacterians)</div>
          <div class="pdi-item" draggable="true" data-order="7"><span class="item-handle">☰</span> 7. Retorn de l'aigua neta al riu o mar, o regeneració per a reg agrícola</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">Pas 1: extracció</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">Pas 2: fer-la potable</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">Pas 3: xarxa d'aigua</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">Pas 4: ús quotidià</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">Pas 5: evacuació</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">Pas 6: neteja d'aigua</span></div>
          <div class="pdi-slot" data-slot="7"><span class="slot-badge">Pas 7</span><span class="slot-hint">Pas 7: devolució ecològica</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud9-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud9-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud9-7" data-unit="ud9" data-title="Eutrofització i Residus" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R7 · Contaminació Hídrica</span>
        <h3>⚡ Speed Quiz: Contaminació de l'Aigua i Impacte Ambiental</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les preguntes de contaminació aquàtica:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;L&#x27;eutrofització és una contaminació per excés d&#x27;adobs (nitrats i fosfats) que provoca una proliferació d&#x27;algues i asfíxia dels peixos.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Les algues cobreixen la superfície i en morir consumeixen tot l&#x27;oxigen de l&#x27;aigua.&quot;}, {&quot;q&quot;: &quot;A l&#x27;ETAP s&#x27;afig clor a l&#x27;aigua perquè aporte sabor fresc i gas a la beguda.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El clor s&#x27;afig com a &lt;strong&gt;desinfectant&lt;/strong&gt; imprescindible per a eliminar bacteris patògens.&quot;}, {&quot;q&quot;: &quot;Un sol litre d&#x27;oli de cuina usat abocat per l&#x27;aigüera pot arribar a contaminar fins a 1.000 litres d&#x27;aigua neta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;oli crea una pel·lícula impermeable a la superfície que impedeix l&#x27;oxigenació de l&#x27;aigua.&quot;}, {&quot;q&quot;: &quot;Els microplàstics són partícules de més de 10 centímetres que suraven a les costes.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són partícules de &lt;strong&gt;menys de 5 mil·límetres&lt;/strong&gt; que s&#x27;acumulen a la cadena tròfica.&quot;}, {&quot;q&quot;: &quot;La dessalinització per osmosi inversa utilitza membranes semipermeables a alta pressió per a separar l&#x27;aigua dolça de la sal.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Permet obtindre aigua dolça del mar tot i que consumeix molta electricitat.&quot;}]">
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
            <button class="btn-sq btn-sq-true" onclick="answerSpeedQuiz('act-ud9-7', true)">
              <span class="sq-btn-icon">✓</span>
              <span class="sq-btn-label">VERITAT</span>
            </button>
            <button class="btn-sq btn-sq-false" onclick="answerSpeedQuiz('act-ud9-7', false)">
              <span class="sq-btn-icon">✗</span>
              <span class="sq-btn-label">FALS</span>
            </button>
          </div>
        </div>
        <div class="sq-feedback-box" style="display: none;">
          <div class="sq-feedback-content"></div>
          <button class="btn-sq-next" onclick="nextSpeedQuizQuestion('act-ud9-7')">Següent Pregunta (2/5) ➔</button>
        </div>
        <div class="sq-summary-box" style="display: none;">
          <div class="sq-summary-trophy">🏆</div>
          <h4 class="sq-summary-title">Ronda de 5 Preguntes Completada!</h4>
          <p class="sq-summary-score">Has encertat <strong class="sq-final-correct">0</strong> de <span class="sq-final-total">5</span> preguntes.</p>
          <button class="btn-sq-restart" onclick="restartSpeedQuiz('act-ud9-7')">🔄 Tornar a Jugar la Ronda</button>
        </div>
      </div>
    </div>
    <!-- act-ud9-8 (intrus) -->
    <div class="pdi-activity-card" id="act-ud9-8" data-unit="ud9" data-title="Tractaments EDAR" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R8 · Tractaments i Aigües</span>
        <h3>🕵️ Troba l'Intrús: Fases de Depuració i Massos d'Aigua</h3>
      </div>
      <p class="pdi-instruction">Tria l'element intrús que no pertany a la categoria assenyalada:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Processos de l&#x27;EDAR (Depuradora)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests passos formen part del tractament d&#x27;una EDAR, però un no es fa a la depuradora. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Desarenat i desgreixat per flotació física&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament primari de l&#x27;EDAR&quot;}, {&quot;text&quot;: &quot;Tractament biològic amb llots actius i airejament&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament secundari clau&quot;}, {&quot;text&quot;: &quot;Gasificació amb bombolles de sucre per a embotellar&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Això és un procés de fàbrica de refrescos industrials, no d&#x27;una depuradora pública!&quot;}, {&quot;text&quot;: &quot;Decantació secundària per a separar fangs clarificats&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase final de separació&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aigües Dolces Superficials Continentals&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests cossos d&#x27;aigua són aigües dolces superficials de terra endins, però un és marí d&#x27;aigua salada. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Rius i afluents d&#x27;alta muntanya&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aigua dolça superficial&quot;}, {&quot;text&quot;: &quot;Llacs i llacunes naturals&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aigua dolça superficial&quot;}, {&quot;text&quot;: &quot;Mar Mediterrània&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La Mar Mediterrània és una massa d&#x27;aigua salada oceànica, no aigua continental!&quot;}, {&quot;text&quot;: &quot;Embassaments artificials de conca&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aigua dolça superficial retinguda&quot;}]}]">
        <div class="intrus-top-status">
          <span class="intrus-round-badge">Ronda: <strong class="intrus-cur-round">1</strong> / <span class="intrus-total-rounds">2</span></span>
        </div>
        <div class="intrus-question-box">
          <p class="intrus-question-text">Carregant repte de l'intrús...</p>
        </div>
        <div class="intrus-cards-grid"></div>
        <div class="intrus-feedback-box" style="display: none;">
          <div class="intrus-feedback-content"></div>
          <button class="btn-intrus-next" onclick="nextIntrusRound('act-ud9-8')" style="display: none;">Segona Ronda: Següent Intrús! ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud9-9 (keypad) -->
    <div class="pdi-activity-card" id="act-ud9-9" data-unit="ud9" data-title="Càlcul de Petjada" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R9 · Càlcul de Petjada (3P)</span>
        <h3>🔢 Teclat Mental: Càlcul de Petjada Hídrica i Rendiment</h3>
      </div>
      <p class="pdi-instruction">Calcula el consum o rendiment hídric exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Per a fabricar una sola samarreta de cotó es consumeixen uns 2.500 litres d&#x27;aigua. Quants litres d&#x27;aigua es necessiten per a produir un lot de &lt;strong&gt;4 samarretes&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;10000&quot;, &quot;steps&quot;: &quot;2.500 L × 4 = &lt;strong&gt;10000&lt;/strong&gt; litres d&#x27;aigua consumits.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El dipòsit d&#x27;aigua potable d&#x27;un refugi de muntanya conté 1.200 litres. Si es produeix una fuita constant de 100 litres per hora, quantes hores tardarà a buidar-se completament?&quot;, &quot;expected&quot;: &quot;12&quot;, &quot;steps&quot;: &quot;1.200 L / 100 L/hora = &lt;strong&gt;12&lt;/strong&gt; hores.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una depuradora comarcal rep 200 kg de sòlids en suspensió cada hora i aconsegueix retirar-ne el 90% als decantadors. Quants kg de fang sòlid aconsegueix retenir (200 × 0,90)?&quot;, &quot;expected&quot;: &quot;180&quot;, &quot;steps&quot;: &quot;200 kg × 0,90 = &lt;strong&gt;180&lt;/strong&gt; kg de residus retinguts.&quot;}]">
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
            <div class="kp-display-screen" id="kp-screen-act-ud9-9">--</div>
          </div>
          <div class="kp-keys-grid">
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '7')">7</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '8')">8</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '9')">9</button>
            <button class="kp-key kp-key-del" onclick="pressKeypad('act-ud9-9', 'DEL')">⌫</button>

            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '4')">4</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '5')">5</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '6')">6</button>
            <button class="kp-key kp-key-clear" onclick="pressKeypad('act-ud9-9', 'C')">C</button>

            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '1')">1</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '2')">2</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '3')">3</button>
            <button class="kp-key kp-key-minus" onclick="pressKeypad('act-ud9-9', '-')">+/-</button>

            <button class="kp-key kp-key-zero" onclick="pressKeypad('act-ud9-9', '0')">0</button>
            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '.')">.</button>
            <button class="kp-key kp-key-check" onclick="checkKeypad('act-ud9-9')">✔ Comprovar</button>
          </div>
        </div>
        <div class="kp-feedback-box" style="display: none;">
          <div class="kp-feedback-content"></div>
          <button class="btn-kp-next" onclick="nextKeypadProblem('act-ud9-9')" style="display: none;">Següent Problema ➔</button>
        </div>
      </div>
    </div>
    <!-- act-ud9-10 (flipcard) -->
    <div class="pdi-activity-card" id="act-ud9-10" data-unit="ud9" data-title="Ecosistemes Hídrics" data-format="flipcard">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R10 · Targetes 3D</span>
        <h3>🪞 Targetes Giratòries 3D: Gestió Sostenible de l'Aigua</h3>
      </div>
      <p class="pdi-instruction">Toca les targetes per a revisar pràctiques sostenibles i ecosistemes fluvials:</p>
      <div class="pdi-flipcards-container">
        <div class="flipcards-grid">
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🌳</span>
                <h4>Bosc de Ribera (Galeria)</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Filtre Ecològic Fluvial</h5>
                <p>La vegetació de ribera (xops, salzes, oms) fixa els marges del riu, frena les avingudes d'aigua i filtra els sediments i contaminants.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🛢️</span>
                <h4>Sobreeplotació d'Aqüífers</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Perill de Salinització</h5>
                <p>Extraure més aigua dels pous de la que recarrega la pluja fa baixar el nivell freàtic i provoca la intrusió d'aigua marina a la costa.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">♻️</span>
                <h4>Reutilització d'Aigua Terciària</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Economia Circular Hídrica</h5>
                <p>L'aigua sotmesa a un tractament terciari amb ozó o llum UV a l'EDAR es reutilitza per al reg de parcs públics o agricultura de regadiu.</p>
                <span class="fc-check-badge">✓ Entès!</span>
              </div>
            </div>
          </div>
          <div class="flipcard-scene" onclick="flipCard(this)">
            <div class="flipcard-inner">
              <div class="flipcard-front">
                <span class="fc-icon">🧂</span>
                <h4>Salmorra de Dessaladores</h4>
                <span class="fc-hint">🔄 Toca per a girar</span>
              </div>
              <div class="flipcard-back">
                <h5>Impacte sobre la Posidònia</h5>
                <p>El rebuig d'aigua molt salada de les dessaladores s'ha de dispersar mar endins perquè pot danyar les praderies de Posidonia oceanica.</p>
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
<script src="{{ 'pissarra-interactiva.js' | relative_url }}?v=4"></script>
<script src="pissarra-interactiva.js?v=4"></script>
