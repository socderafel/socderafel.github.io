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
      <p>Ciències Aplicades I (1r FPB) · 90 Reptes Pràctics i Aplicacions de Taller per a la pissarra digital de classe o tauleta.</p>
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
          <span class="act-idx">🔗 Connecta de Taller</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-6" onclick="launchGameActivity('act-ud1-6')">
          <span class="act-idx">🧩 Jerarquia PEMDAS</span>
          <span class="act-name">R6 · Jerarquia Combinada</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-7" onclick="launchGameActivity('act-ud1-7')">
          <span class="act-idx">⚡ Lleis de Potències</span>
          <span class="act-name">R7 · Speed Quiz Potències</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-8" onclick="launchGameActivity('act-ud1-8')">
          <span class="act-idx">🕵️ Errors de Càlcul</span>
          <span class="act-name">R8 · Càlculs Errònis</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-9" onclick="launchGameActivity('act-ud1-9')">
          <span class="act-idx">🔢 Factura Taller</span>
          <span class="act-name">R9 · Pressupost Taller</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-10" onclick="launchGameActivity('act-ud1-10')">
          <span class="act-idx">🛠️ Cas Pràctic Taller</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #16a34a;">
      <div class="card-head">
        <span class="disc-badge" style="background: #16a34a;">Biologia</span>
        <span class="count-badge">10 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">🧬</span> <h3>UD2 · Organització de la Matèria i la Nutrició</h3></div>
      <p class="card-desc">Nivells cel·lulars, funció de nutrició, digestiu, respiratori, circulatori i excretor.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud2-1" onclick="launchGameActivity('act-ud2-1')">
          <span class="act-idx">🧩 Nivells Biològics</span>
          <span class="act-name">R1 · Nivells d'Organització</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-2" onclick="launchGameActivity('act-ud2-2')">
          <span class="act-idx">⚡ Nutrició i Digestió</span>
          <span class="act-name">R2 · Speed Quiz Nutrició</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-3" onclick="launchGameActivity('act-ud2-3')">
          <span class="act-idx">🕵️ Òrgans i Nutrients</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-4" onclick="launchGameActivity('act-ud2-4')">
          <span class="act-idx">🔢 Càlcul Energètic</span>
          <span class="act-name">R4 · Càlcul Calòric (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-5" onclick="launchGameActivity('act-ud2-5')">
          <span class="act-idx">🔗 Òrgans i Funcions</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-6" onclick="launchGameActivity('act-ud2-6')">
          <span class="act-idx">🧩 Viatge dels Aliments</span>
          <span class="act-name">R6 · El Tub Digestiu</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-7" onclick="launchGameActivity('act-ud2-7')">
          <span class="act-idx">⚡ Cor i Sang</span>
          <span class="act-name">R7 · Speed Quiz Circulatori</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-8" onclick="launchGameActivity('act-ud2-8')">
          <span class="act-idx">🕵️ Cèl·lules Sanguínies</span>
          <span class="act-name">R8 · Components Sanguinis</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-9" onclick="launchGameActivity('act-ud2-9')">
          <span class="act-idx">🔢 Consum Hídric</span>
          <span class="act-name">R9 · Càlcul de Nutrició</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-10" onclick="launchGameActivity('act-ud2-10')">
          <span class="act-idx">🛠️ Salut Laboral i Auxilis</span>
          <span class="act-name">R10 · Primers Auxilis</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #d97706;">
      <div class="card-head">
        <span class="disc-badge" style="background: #d97706;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Pràctics</span>
      </div>
      <div class="card-title"><span class="unit-icon">➕➖</span> <h3>UD3 · Els Nombres Enters</h3></div>
      <p class="card-desc">Recta numèrica, regla dels signes, temperatures, deutes i càlcul combinat.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud3-1" onclick="launchGameActivity('act-ud3-1')">
          <span class="act-idx">🧩 Ordre Recta Enters</span>
          <span class="act-name">R1 · Recta Numèrica</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-2" onclick="launchGameActivity('act-ud3-2')">
          <span class="act-idx">⚡ Regla dels Signes</span>
          <span class="act-name">R2 · Speed Quiz Signes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-3" onclick="launchGameActivity('act-ud3-3')">
          <span class="act-idx">🕵️ Operacions d'Enters</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-4" onclick="launchGameActivity('act-ud3-4')">
          <span class="act-idx">🔢 Càlculs amb Enters</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-5" onclick="launchGameActivity('act-ud3-5')">
          <span class="act-idx">🔗 Balanços i Temperatures</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-6" onclick="launchGameActivity('act-ud3-6')">
          <span class="act-idx">🧩 Jerarquia amb Claudàtors</span>
          <span class="act-name">R6 · Resolució Jeràrquica</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-7" onclick="launchGameActivity('act-ud3-7')">
          <span class="act-idx">⚡ Signes de Potències</span>
          <span class="act-name">R7 · Potències Enters</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-8" onclick="launchGameActivity('act-ud3-8')">
          <span class="act-idx">🕵️ Resultats d'Enters</span>
          <span class="act-name">R8 · Potències d'Enters</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-9" onclick="launchGameActivity('act-ud3-9')">
          <span class="act-idx">🔢 Desnivell i Deutes</span>
          <span class="act-name">R9 · Càlcul d'Altitud</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-10" onclick="launchGameActivity('act-ud3-10')">
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
          <span class="act-idx">🔗 Engranatges i Mides</span>
          <span class="act-name">R5 · Connecta Parelles</span>
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
          <span class="act-idx">🛠️ Tall de Cables i Màquines</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #7c3aed;">
      <div class="card-head">
        <span class="disc-badge" style="background: #7c3aed;">Matemàtiques</span>
        <span class="count-badge">10 Reptes Pràctics</span>
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
          <span class="act-idx">🔗 Proporcions de Taller</span>
          <span class="act-name">R5 · Connecta Parelles</span>
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
          <span class="act-idx">🛠️ Dosificació i Producció</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0d9488;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0d9488;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Pràctics</span>
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
          <span class="act-idx">🔗 Telescopis i Distàncies</span>
          <span class="act-name">R5 · Connecta Parelles</span>
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
          <span class="act-idx">🛠️ Satèl·lits i Telecom</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #ea580c;">
      <div class="card-head">
        <span class="disc-badge" style="background: #ea580c;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Pràctics</span>
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
          <span class="act-idx">🔗 Fenòmens Geotècnics</span>
          <span class="act-name">R5 · Connecta Parelles</span>
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
          <span class="act-idx">🛠️ Sismorresistència i Sol</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0284c7;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0284c7;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Pràctics</span>
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
          <span class="act-idx">🔗 EPIs i Gasos</span>
          <span class="act-name">R5 · Connecta Parelles</span>
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
          <span class="act-idx">🛠️ Ventilació i Gasos</span>
          <span class="act-name">R10 · Cas de Taller</span>
          <span class="act-arrow">➔</span>
        </button>      </div>
    </div>
    <div class="pdi-unit-dash-card" style="border-top: 5px solid #0d9488;">
      <div class="card-head">
        <span class="disc-badge" style="background: #0d9488;">Biologia i Geologia</span>
        <span class="count-badge">10 Reptes Pràctics</span>
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
          <span class="act-idx">🔗 Tractaments d'Aigua</span>
          <span class="act-name">R5 · Connecta Parelles</span>
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
          <span class="act-idx">🛠️ Gestió Residus i Estalvi</span>
          <span class="act-name">R10 · Cas de Taller</span>
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Quadrats Perfectes&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nombres són quadrats perfectes d&#x27;un natural, però un no ho és. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;49 (perquè 7² = 49)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És quadrat de 7&quot;}, {&quot;text&quot;: &quot;64 (perquè 8² = 64)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És quadrat de 8&quot;}, {&quot;text&quot;: &quot;72 (no hi ha cap natural n tal que n² = 72)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 8² = 64 i 9² = 81. El 72 no és quadrat perfecte!&quot;}, {&quot;text&quot;: &quot;121 (perquè 11² = 121)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;És quadrat de 11&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Potències de Base 10&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests valors estan correctament expressats en potència de 10, però un té un error en els zeros. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;10.000 = 10⁴ (4 zeros)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte, 4 zeros&quot;}, {&quot;text&quot;: &quot;100.000 = 10⁵ (5 zeros)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte, 5 zeros&quot;}, {&quot;text&quot;: &quot;1.000.000 = 10⁷ (té 6 zeros, no 7!)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Un milió té 6 zeros, per tant és 10⁶, no 10⁷!&quot;}, {&quot;text&quot;: &quot;100 = 10² (2 zeros)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte, 2 zeros&quot;}]}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quant és: &lt;strong&gt;√144 + 5 × 6&lt;/strong&gt; ?&quot;, &quot;expected&quot;: &quot;42&quot;, &quot;steps&quot;: &quot;√144 = 12  ➔  5 × 6 = 30  ➔  12 + 30 = &lt;strong&gt;42&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Quant és: &lt;strong&gt;3⁴ - 2³ × 10&lt;/strong&gt; ?&quot;, &quot;expected&quot;: &quot;1&quot;, &quot;steps&quot;: &quot;3⁴ = 81  ➔  2³ = 8  ➔  8 × 10 = 80  ➔  81 - 80 = &lt;strong&gt;1&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una caixa conté 15 paquets de 8 tornavisos cadascun. Si venem 35 tornavisos, quants en queden a la caixa (15 × 8 - 35)?&quot;, &quot;expected&quot;: &quot;85&quot;, &quot;steps&quot;: &quot;15 × 8 = 120 tornavisos totals  ➔  120 - 35 = &lt;strong&gt;85&lt;/strong&gt; tornavisos restants.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-5" data-unit="ud1" data-title="Connecta de Taller" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Pressupostos i Mesures de Taller</h3>
      </div>
      <p class="pdi-instruction">Toca un encàrrec de l'esquerra i després la seua solució de la dreta per a emparellar-los:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Comanda&quot;, &quot;left&quot;: &quot;12 tornavisos d&#x27;electricista a 3 €/u&quot;, &quot;badge_right&quot;: &quot;Total&quot;, &quot;right&quot;: &quot;Cost total: 36 € (12 × 3 €)&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Capacitat&quot;, &quot;left&quot;: &quot;5 llandes d&#x27;oli lubricant de 4 litres&quot;, &quot;badge_right&quot;: &quot;Volum&quot;, &quot;right&quot;: &quot;Volum total: 20 litres (5 × 4 L)&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Mecanitzat&quot;, &quot;left&quot;: &quot;Barra de 250 mm retallada 75 mm&quot;, &quot;badge_right&quot;: &quot;Longitud&quot;, &quot;right&quot;: &quot;Longitud restant: 175 mm (250 - 75)&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Potència&quot;, &quot;left&quot;: &quot;2 focus de 100 W i 4 làmpades de 50 W&quot;, &quot;badge_right&quot;: &quot;Consum&quot;, &quot;right&quot;: &quot;Potència total: 400 W (200 + 200)&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-7" data-unit="ud1" data-title="Lleis de Potències" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R7 · Speed Quiz Potències</span>
        <h3>⚡ Speed Quiz: Propietats de les Potències de Naturals</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Qualsevol nombre natural elevat a l&#x27;exponent 0 és igual a 1 (a⁰ = 1).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Excepte 0⁰ que és una indeterminació, tot natural elevat a 0 és 1.&quot;}, {&quot;q&quot;: &quot;El producte de potències de la mateixa base es calcula multiplicant els exponents (a² × a³ = a⁶).&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Es &lt;strong&gt;sumen&lt;/strong&gt; els exponents: a² × a³ = a²⁺³ = a⁵!&quot;}, {&quot;q&quot;: &quot;La potència d&#x27;una potència es calcula multiplicant els exponents: (a²)³ = a⁶.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (a²)³ = a² × a² × a² = a²ˣ³ = a⁶.&quot;}, {&quot;q&quot;: &quot;En la divisió de potències de la mateixa base es resten els exponents: a⁷ / a⁴ = a³.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a⁷ / a⁴ = a⁷⁻⁴ = a³.&quot;}, {&quot;q&quot;: &quot;La potència d&#x27;un producte és igual a la suma de les potències: (a × b)² = a² + b².&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És el producte de les potències: (a × b)² = &lt;strong&gt;a² × b²&lt;/strong&gt;!&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-8" data-unit="ud1" data-title="Errors de Càlcul" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R8 · Càlculs Errònis</span>
        <h3>🕵️ Troba l'Intrús: Detecció d'Operacions Incorrectes</h3>
      </div>
      <p class="pdi-instruction">En cada ronda hi ha 3 operacions ben calculades i UNA amb un error garrafal. Descobreix-la!</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Jerarquia d&#x27;Operacions&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes quatre operacions està MAL resolta per no respectar la jerarquia?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;10 + 2 × 5 = 20&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 2×5=10 ➔ 10+10=20&quot;}, {&quot;text&quot;: &quot;18 - 6 / 2 = 6 (error: ha restat 18-6=12 i després 12/2=6!)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La divisió va primer: 6/2=3 ➔ 18-3=15, no 6!&quot;}, {&quot;text&quot;: &quot;4 × 3² = 36&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: 3²=9 ➔ 4×9=36&quot;}, {&quot;text&quot;: &quot;(8 + 4) / 3 = 4&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte: (12)/3=4&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Càlcul d&#x27;Arrels i Potències&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes afirmacions té un error de càlcul numèric?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;√81 = 9 (perquè 9² = 81)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte&quot;}, {&quot;text&quot;: &quot;2⁵ = 32 (perquè 2×2×2×2×2 = 32)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte&quot;}, {&quot;text&quot;: &quot;√49 + √25 = 12 (7 + 5 = 12)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Correcte&quot;}, {&quot;text&quot;: &quot;5³ = 15 (ha multiplicat 5 × 3 en lloc de 5 × 5 × 5!)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! 5³ = 5 × 5 × 5 = 125, no 15!&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud1-9" data-unit="ud1" data-title="Factura Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R9 · Pressupost Taller</span>
        <h3>🔢 Teclat Mental: Problemes Pràctics de Taller Mecànic</h3>
      </div>
      <p class="pdi-instruction">Resol el problema de taller i tecleja el resultat final:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un mecànic repara 4 furgonetes. A cadascuna li canvia 5 bugies a 8 € cadascuna i un filtre d&#x27;aire a 20 €. Quant costa el material total (4 × (5×8 + 20))?&quot;, &quot;expected&quot;: &quot;240&quot;, &quot;steps&quot;: &quot;Per furgoneta: 5×8 = 40 € + 20 € = 60 €  ➔  4 furgonetes: 4 × 60 = &lt;strong&gt;240 €&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En un magatzem hi ha 500 metres de cable elèctric. Se&#x27;n tallen 12 trossos de 25 metres cadascun. Quants metres de cable queden al rotllo (500 - 12×25)?&quot;, &quot;expected&quot;: &quot;200&quot;, &quot;steps&quot;: &quot;12 × 25 = 300 m tallats  ➔  500 - 300 = &lt;strong&gt;200 metres&lt;/strong&gt; restants.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una nau industrial té 8 fileres amb 8 panells solars cadascuna (8² = 64 panells). Si cada panell genera 5 kWh en un dia assolellat, quants kWh produeix la nau al dia?&quot;, &quot;expected&quot;: &quot;320&quot;, &quot;steps&quot;: &quot;8 × 8 = 64 panells  ➔  64 × 5 = &lt;strong&gt;320 kWh&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud1-10" data-unit="ud1" data-title="Cas Pràctic Taller" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Gestió de Magatzem i Facturació</h3>
      </div>
      <p class="pdi-instruction">Llig atentament cada situació real de treball i tria la decisió tècnica correcta:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Factura de Peces d&#x27;un Vehicle&quot;, &quot;context&quot;: &quot;Com a tècnic/a de taller prepares la factura per a un client: s&#x27;han instal·lat &lt;strong&gt;8 filtres d&#x27;oli a 15 € cadascun&lt;/strong&gt; i &lt;strong&gt;4 jocs de pastilles de fre a 45 € cadascun&lt;/strong&gt;. A més, s&#x27;aplica una promoció amb un &lt;strong&gt;descompte directe de 50 €&lt;/strong&gt; sobre el total de peces.&quot;, &quot;question&quot;: &quot;Quin és l&#x27;import correcte que cal cobrar per les peces abans d&#x27;impostos?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;250 € (8×15 = 120 €; 4×45 = 180 €; Total: 300 € - 50 € = 250 €)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Càlcul impecable: (120 € + 180 €) - 50 € = 250 €.&quot;}, {&quot;text&quot;: &quot;300 € (sense restar el descompte de 50 €)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Has oblidat aplicar el descompte de 50 € que promet el pressupost!&quot;}, {&quot;text&quot;: &quot;270 € (sumant erròniament les pastilles)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Revisa les operacions: 4 jocs de pastilles a 45 € sumen 180 €, no 150 €.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Organització del Magatzem&quot;, &quot;context&quot;: &quot;Arriba un enviament de &lt;strong&gt;360 caragols especials&lt;/strong&gt; per a carrosseria. L&#x27;encarregat ens demana emmagatzemar-los en caixes metàl·liques que admeten exactament &lt;strong&gt;24 caragols per caixa&lt;/strong&gt;, sense barrejar peces.&quot;, &quot;question&quot;: &quot;Quantes caixes completes necessitarem preparar per a guardar tots els caragols?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;15 caixes completes (360 / 24 = 15)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Exacte! 360 / 24 = 15 caixes. Així queda el material perfectament classificat.&quot;}, {&quot;text&quot;: &quot;12 caixes completes&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Amb 12 caixes només guardaries 288 caragols (12 × 24) i en sobrarien 72 per terra.&quot;}, {&quot;text&quot;: &quot;18 caixes completes&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;18 caixes permetrien guardar 432 caragols. En necessites menys.&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Nivells Biològics" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R1 · Nivells d'Organització</span>
        <h3>🧬 Nivells d'Organització de la Matèria Viva</h3>
      </div>
      <p class="pdi-instruction">Arrossega els nivells biològics del més simple (microscòpic) al més complex (organisme):</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Nivell Cel·lular (La cèl·lula com a unitat funcional de vida)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Nivell de Teixit (Agrupació de cèl·lules similars com l'epitelial o muscular)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Nivell d'Òrgan (Estructures amb funció pròpia com el cor o l'estómac)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Nivell d'Aparell o Sistema (Conjunt d'òrgans coordinats com el digestiu)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Nivell d'Organisme Pluricel·lular (L'ésser humà complet com a individu viu)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: cèl·lula</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: teixit</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: òrgan</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: aparell</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: individu</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="Nutrició i Digestió" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R2 · Speed Quiz Nutrició</span>
        <h3>⚡ Speed Quiz: Nutrició Cel·lular i Digestió dels Aliments</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació de biologia humana és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Alimentar-se i nutrir-se són exactament el mateix procés biològic.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;alimentació és un acte voluntari de menjar; la &lt;strong&gt;nutrició&lt;/strong&gt; és el conjunt de processos involuntaris que fan les cèl·lules amb els nutrients.&quot;}, {&quot;q&quot;: &quot;La digestió química dels glúcids com el midó comença a la boca gràcies a l&#x27;enzim amilasa de la saliva.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La saliva conté ptialina (amilasa) que comença a degradar carbohidrats.&quot;}, {&quot;q&quot;: &quot;La bilis és fabricada pel fetge i emmagatzemada a la vesícula biliar per a emulsionar els greixos a l&#x27;intestí prim.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Actua com un detergent que trenca les gotes de lípids facilitant l&#x27;acció de les lipases.&quot;}, {&quot;q&quot;: &quot;L&#x27;absorció de la immensa majoria dels nutrients té lloc a l&#x27;estómac.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;estómac digereix parcialment el quim. L&#x27;absorció ocorre a les &lt;strong&gt;vellositats de l&#x27;intestí prim&lt;/strong&gt;.&quot;}, {&quot;q&quot;: &quot;La femta es forma a l&#x27;intestí gros mitjançant l&#x27;absorció d&#x27;aigua i l&#x27;acció de la microbiota bacteriana.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El còlon recupera aigua i sals minerals compactant les desfetes no digeribles.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Òrgans i Nutrients" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Aparells del Cos Humà i Nutrients</h3>
      </div>
      <p class="pdi-instruction">Tria l'element intrús que no encaixa en la categoria científica:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Aparell Digestiu Humà&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests òrgans formen part del tub digestiu o les seues glàndules annexes, però un és del respiratori. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Esòfag (tub que condueix el bol)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Pertany al tub digestiu&quot;}, {&quot;text&quot;: &quot;Tràquea (tub cartilaginós amb anells)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La tràquea és de l&#x27;aparell respiratori que porta aire als pulmons!&quot;}, {&quot;text&quot;: &quot;Pàncrees (glàndula que secreta insulina i sucs)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glàndula annexa digestiva&quot;}, {&quot;text&quot;: &quot;Intestí prim (duodè, jejú i ili)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Òrgan principal d&#x27;absorció&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Nutrients Energètics i Estructurals&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests compostos aporten calories (energia) en cremar-se a les cèl·lules, però un NO aporta cap caloria. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Glúcids o hidrats de carboni (4 kcal/g)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Nutrient energètic&quot;}, {&quot;text&quot;: &quot;Proteïnes (4 kcal/g)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Nutrient estructural i energètic&quot;}, {&quot;text&quot;: &quot;Aigua i sals minerals (0 kcal/g)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;aigua i les sals són vitals per a les reaccions, però tenen 0 kcal d&#x27;energia!&quot;}, {&quot;text&quot;: &quot;Lípids o greixos (9 kcal/g)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Nutrient altament energètic&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud2-4" data-unit="ud2" data-title="Càlcul Energètic" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R4 · Càlcul Calòric (3P)</span>
        <h3>🔢 Teclat Mental: Càlcul Calòric de la Dieta i Freqüència Cardíaca</h3>
      </div>
      <p class="pdi-instruction">Resol els càlculs fisiològics i introdueix el nombre exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un plat d&#x27;arròs aporta 60 g de glúcids (a 4 kcal/g) i 10 g de proteïnes (a 4 kcal/g). Quantes kcal totals aporta aquest plat (60×4 + 10×4)?&quot;, &quot;expected&quot;: &quot;280&quot;, &quot;steps&quot;: &quot;60 × 4 = 240 kcal  ➔  10 × 4 = 40 kcal  ➔  240 + 40 = &lt;strong&gt;280 kcal&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En repòs el cor batega a 70 pulsacions per minut. Quants batecs fa el cor en 1 hora (60 minuts)?&quot;, &quot;expected&quot;: &quot;4200&quot;, &quot;steps&quot;: &quot;70 batecs/min × 60 minuts = &lt;strong&gt;4200 batecs&lt;/strong&gt; per hora.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;1 gram de glúcids aporta 4 kcal, 1 gram de proteïnes 4 kcal i 1 gram de lípids 9 kcal. Quantes kcal aporten &lt;strong&gt;10 g de greixos (lípids)&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;90&quot;, &quot;steps&quot;: &quot;10 g × 9 kcal/g = &lt;strong&gt;90 kcal&lt;/strong&gt;.&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud2-4', '0')">0</button>
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
    <!-- act-ud2-5 (connect) -->
    <div class="pdi-activity-card" id="act-ud2-5" data-unit="ud2" data-title="Òrgans i Funcions" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Òrgans i Funcions Vitals en Salut</h3>
      </div>
      <p class="pdi-instruction">Toca un òrgan o aparell de l'esquerra i la seua funció vital de la dreta per a relacionar-los:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Respiració&quot;, &quot;left&quot;: &quot;Pulmons i Alvèols&quot;, &quot;badge_right&quot;: &quot;Gasos&quot;, &quot;right&quot;: &quot;Intercanvi de gasos: oxigena la sang i expulsa el CO₂ respiratori&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Digestió&quot;, &quot;left&quot;: &quot;Intestí Prim (Vellositats)&quot;, &quot;badge_right&quot;: &quot;Nutrients&quot;, &quot;right&quot;: &quot;Absorció dels nutrients (glucosa, aminoàcids) cap al torrent sanguini&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Excreció&quot;, &quot;left&quot;: &quot;Ronyons i Nefrones&quot;, &quot;badge_right&quot;: &quot;Filtre&quot;, &quot;right&quot;: &quot;Filtració contínua de sang: elimina urea i tòxics en forma d&#x27;orina&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Circulació&quot;, &quot;left&quot;: &quot;Cor (Musculatura Miocàrdica)&quot;, &quot;badge_right&quot;: &quot;Bomba&quot;, &quot;right&quot;: &quot;Bomba de doble circuit que impulsa la sang oxigenada a tot el cos&quot;}]">
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
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud2-5')">🔄 Tornar a Jugar</button>
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
    <div class="pdi-activity-card" id="act-ud2-7" data-unit="ud2" data-title="Cor i Sang" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R7 · Speed Quiz Circulatori</span>
        <h3>⚡ Speed Quiz: Aparells Circulatori, Respiratori i Excretor</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les preguntes d'anatomia i fisiologia:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les artèries transporten la sang que ix del cor cap als òrgans a alta pressió, mentre que les venes la retornen al cor.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Les artèries tenen parets elàstiques gruixudes per a suportar la pressió sistòlica.&quot;}, {&quot;q&quot;: &quot;La circulació humana és simple i incompleta perquè la sang oxigenada es barreja amb la desoxigenada al cor.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La circulació humana és &lt;strong&gt;doble i completa&lt;/strong&gt; (hi ha dos circuits i mai es barreja la sang arterial i venosa).&quot;}, {&quot;q&quot;: &quot;Els glòbuls rojos (hematies) contenen hemoglobina i transporten oxigen, mentre que els glòbuls blancs defensen el cos.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Les plaquetes s&#x27;encarreguen a més de la coagulació.&quot;}, {&quot;q&quot;: &quot;El diafragma és el múscul principal de la respiració que baixa en inspirar per a fer entrar aire als pulmons.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; En contraure&#x27;s i baixar augmenta el volum de la caixa toràcica creant pressió negativa.&quot;}, {&quot;q&quot;: &quot;L&#x27;orina es forma a la bufeta urinària i després passa als ronyons.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Es forma als &lt;strong&gt;ronyons (nefrones)&lt;/strong&gt;, baixa pels urèters i s&#x27;emmagatzema a la bufeta abans d&#x27;eixir per la uretra.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-8" data-unit="ud2" data-title="Cèl·lules Sanguínies" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R8 · Components Sanguinis</span>
        <h3>🕵️ Troba l'Intrús: La Sang i Malalties de Nutrició</h3>
      </div>
      <p class="pdi-instruction">Detecta l'element que desentona en cada grup biològic:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Components Formes de la Sang&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són cèl·lules o fragments cel·lulars de la sang, però un és un òrgan. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Eritròcits o glòbuls rojos&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Cèl·lula sanguínia&quot;}, {&quot;text&quot;: &quot;Leucòcits o glòbuls blancs&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Cèl·lula sanguínia immunitària&quot;}, {&quot;text&quot;: &quot;Melsa (òrgan limfàtic)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La melsa és un òrgan del sistema limfàtic, no una cèl·lula de la sang!&quot;}, {&quot;text&quot;: &quot;Trombòcits o plaquetes&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fragments cel·lulars coagulants&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Hàbits Saludables Cardiovasculars&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests comportaments protegeixen la salut del cor i artèries, però un és un factor de risc cardiovascular greu. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Pràctica regular d&#x27;exercici físic aeròbic&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Hàbit saludable&quot;}, {&quot;text&quot;: &quot;Consum habitual de tabac i greixos saturats trans&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Fumar i menjar greixos trans obstrueix les artèries (arterioesclerosi) i duplica el risc d&#x27;infart!&quot;}, {&quot;text&quot;: &quot;Dieta mediterrània rica en fruites, verdures i oli d&#x27;oliva&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Hàbit saludable&quot;}, {&quot;text&quot;: &quot;Beure aigua suficient i moderar el consum de sal&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Hàbit saludable&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud2-9" data-unit="ud2" data-title="Consum Hídric" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R9 · Càlcul de Nutrició</span>
        <h3>🔢 Teclat Mental: Balanç Hídric i Ingesta Diària</h3>
      </div>
      <p class="pdi-instruction">Resol el càlcul d'hàbits saludables i tecleja la quantitat exacta:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un jove esportista necessita 2.500 ml d&#x27;aigua diaris. Si amb els aliments ja ingereix 700 ml, quants mil·lilitres d&#x27;aigua líquida ha de beure (2.500 - 700)?&quot;, &quot;expected&quot;: &quot;1800&quot;, &quot;steps&quot;: &quot;2.500 ml - 700 ml = &lt;strong&gt;1800 ml&lt;/strong&gt; (1,8 litres d&#x27;aigua en gots o ampolla).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una dieta equilibrada diària de 2.000 kcal recomana que el 50% de l&#x27;energia provinga de carbohidrats. Quantes kcal de carbohidrats cal consumir al dia?&quot;, &quot;expected&quot;: &quot;1000&quot;, &quot;steps&quot;: &quot;50% de 2.000 kcal = 2.000 × 0,50 = &lt;strong&gt;1000 kcal&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;En cada batec el ventricle esquerre impulsa uns 70 ml de sang (volum sistòlic). Si el cor batega a 70 pulsacions per minut, quants ml de sang bomba per minut (despesa cardíaca aproximada)?&quot;, &quot;expected&quot;: &quot;4900&quot;, &quot;steps&quot;: &quot;70 batecs/min × 70 ml/batec = &lt;strong&gt;4900 ml/min&lt;/strong&gt; (quasi 5 litres per minut!).&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud2-9', '0')">0</button>
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
    <!-- act-ud2-10 (case) -->
    <div class="pdi-activity-card" id="act-ud2-10" data-unit="ud2" data-title="Salut Laboral i Auxilis" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R10 · Primers Auxilis</span>
        <h3>🛠️ Cas Pràctic de Taller: Salut Laboral, Dieta i Primers Auxilis</h3>
      </div>
      <p class="pdi-instruction">Analitza cada emergència o situació de salut laboral i tria la intervenció correcta:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Operari amb Mareig i Rampes en Estiu&quot;, &quot;context&quot;: &quot;En un taller mecànic a ple mes de juliol a 34 °C, un operari fa tasques de càrrega pesant durant 5 hores. Ha begut només dos cafès i begudes energètiques ensucrades. De sobte comença a patir rampes doloroses a les cames, pell freda i mareig intens.&quot;, &quot;question&quot;: &quot;Com a tècnic/a de riscos laborals i primer intervinent, quina és l&#x27;actuació correcta immediata?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Deshidratació amb pèrdua de sals: portar-lo a l&#x27;ombra/fresc, donar-li aigua fresca amb sals d&#x27;hidratació i afluixar-li la roba&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Correctíssim! El col·lapse és per pèrdua d&#x27;aigua i electròlits per suor intensa. Cal hidratar amb sals minerals i reposar.&quot;}, {&quot;text&quot;: &quot;Donar-li un entrepà gras i un altre café calent per a activar la pressió&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Totalment contraindicat! El café és diürètic i agreujarà la deshidratació perillosa.&quot;}, {&quot;text&quot;: &quot;Fer-lo continuar treballant sense parar perquè no se li refreden els músculs&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Molt perillós! Podria patir un colp de calor potencialment mortal.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Ennuegament a l&#x27;Hora d&#x27;Esmorzar&quot;, &quot;context&quot;: &quot;Durant la pausa de descans al menjador del taller, un company s&#x27;ennuega amb un tros sòlid d&#x27;aliment. S&#x27;emporta les dues mans al coll (senyal universal d&#x27;asfíxia), té els ulls espantats, no pot tossir amb força ni parlar i comença a posar-se blavós.&quot;, &quot;question&quot;: &quot;Quina maniobra de suport vital bàsic s&#x27;ha d&#x27;aplicar de manera immediata?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Maniobra de Heimlich: situar-se darrere, col·locar el puny entre melic i estèrnum i fer compressions ràpides cap endins i amunt&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Actuació salvavides! La maniobra augmenta la pressió intratoràcica i expulsa el cos estrany com un tap.&quot;}, {&quot;text&quot;: &quot;Ficar-li la mà a la boca a cegues per a intentar agafar el tros&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Error greu! Intentar agafar-lo a cegues pot espentar l&#x27;objecte encara més endins de la glotis.&quot;}, {&quot;text&quot;: &quot;Oferir-li un got d&#x27;aigua gran per a ajudar-lo a empassar&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Molt perillós! L&#x27;aigua podria passar directament a la tràquea agreujant l&#x27;ofegament.&quot;}]}]">
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
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud2-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud2-10')">🔄 Tornar a Practicar</button>
        </div>
      </div>
    </div>
    <!-- act-ud3-1 (order) -->
    <div class="pdi-activity-card" id="act-ud3-1" data-unit="ud3" data-title="Ordre Recta Enters" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R1 · Recta Numèrica</span>
        <h3>➕➖ Ordenar Enters de Menor a Major sobre la Recta</h3>
      </div>
      <p class="pdi-instruction">Arrossega els següents nombres enters ordenant-los de MENOR valor a MAJOR valor (d'esquerra a dreta a la recta real):</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> -15 (el més allunyat a l'esquerra del zero)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> -9 (negatiu intermedi)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> -2 (el negatiu més proper al zero)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 0 (origen de la recta)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> +4 (positiu intermedi)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> +11 (el més gran a la dreta del zero)</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: menor de tots</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: negatiu</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: just abans del 0</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: zero</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: positiu</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span><span class="slot-hint">6è: major de tots</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Regla dels Signes" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R2 · Speed Quiz Signes</span>
        <h3>⚡ Speed Quiz: Signes en Sumes, Restes, Multiplicacions i Divisions</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació amb enters és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La suma de dos nombres negatius sempre dóna com a resultat un altre nombre negatiu: (-4) + (-6) = -10.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Dos deutes acumulats sumen un deute major: -4 - 6 = -10.&quot;}, {&quot;q&quot;: &quot;La multiplicació de dos nombres negatius dóna negatiu: (-3) × (-5) = -15.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Regla dels signes del producte: &lt;strong&gt;menys per menys és MÉS&lt;/strong&gt; ➔ (-3) × (-5) = &lt;strong&gt;+15&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;En restar un nombre negatiu, el signe menys davant del parèntesi es converteix en suma: 8 - (-5) = 8 + 5 = 13.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Restar un negatiu equival a sumar el seu oposat: a - (-b) = a + b.&quot;}, {&quot;q&quot;: &quot;El valor absolut d&#x27;un nombre enter negatiu és sempre un nombre negatiu: |-8| = -8.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El valor absolut és la distància al zero i és sempre &lt;strong&gt;positiu o zero&lt;/strong&gt;: |-8| = &lt;strong&gt;+8&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;La divisió d&#x27;un nombre negatiu entre un de positiu dóna negatiu: (-24) / (+6) = -4.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Signes diferents en producte o divisió donen sempre resultat negatiu.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Operacions d'Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Càlculs amb Enters i Desigualtats</h3>
      </div>
      <p class="pdi-instruction">Detecta quina operació té un resultat diferent o erroni respecte a les altres:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Operacions que donen -12&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes operacions donen exactament com a resultat -12, però una dóna un altre resultat. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-4) × (+3) = -12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -12&quot;}, {&quot;text&quot;: &quot;(-20) + (+8) = -12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -12&quot;}, {&quot;text&quot;: &quot;(-6) - (-6) = 0 (no dóna -12!)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! (-6) - (-6) = -6 + 6 = 0, no pas -12!&quot;}, {&quot;text&quot;: &quot;(+36) / (-3) = -12&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -12&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Comparació de Nombres Enters&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes quatre desigualtats és FALSA?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;-8 &lt; -3 (correcte, -8 està més a l&#x27;esquerra)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Desigualtat correcta&quot;}, {&quot;text&quot;: &quot;-15 &gt; 0 (fals! un nombre negatiu mai és més gran que zero)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! -15 és molt menor que 0 (-15 &lt; 0)!&quot;}, {&quot;text&quot;: &quot;-1 &lt; +1 (correcte)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Desigualtat correcta&quot;}, {&quot;text&quot;: &quot;-20 &lt; -10 (correcte)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Desigualtat correcta&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud3-4" data-unit="ud3" data-title="Càlculs amb Enters" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R4 · Càlcul Tàctil (3P)</span>
        <h3>🔢 Teclat Mental: Jerarquia d'Operacions amb Enters</h3>
      </div>
      <p class="pdi-instruction">Calcula l'enter exacte (positiu o negatiu) i escriu-lo:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quant és: &lt;strong&gt;(-5) × (+4) + (-12) / (-3)&lt;/strong&gt; ?&quot;, &quot;expected&quot;: &quot;-16&quot;, &quot;steps&quot;: &quot;(-5) × 4 = -20  ➔  (-12) / (-3) = +4  ➔  -20 + 4 = &lt;strong&gt;-16&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Quant és: &lt;strong&gt;10 - 3 × [4 - (-2)]&lt;/strong&gt; ?&quot;, &quot;expected&quot;: &quot;-8&quot;, &quot;steps&quot;: &quot;Parèntesi intern: 4 - (-2) = 4 + 2 = 6  ➔  3 × 6 = 18  ➔  10 - 18 = &lt;strong&gt;-8&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un congelador industrial està a -18 °C. Si s&#x27;espatlla i la temperatura puja 25 °C, a quants graus se situa (+25 - 18)?&quot;, &quot;expected&quot;: &quot;7&quot;, &quot;steps&quot;: &quot;-18 + 25 = &lt;strong&gt;7 °C&lt;/strong&gt; (positius).&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-5" data-unit="ud3" data-title="Balanços i Temperatures" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Balanços i Temperatures en la Indústria</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada situació industrial de l'esquerra amb el seu valor numèric a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Frigorífic&quot;, &quot;left&quot;: &quot;Càmera a -18 °C que augmenta 25 °C per avaria&quot;, &quot;badge_right&quot;: &quot;Final&quot;, &quot;right&quot;: &quot;Temperatura final: +7 °C (-18 + 25)&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Finances&quot;, &quot;left&quot;: &quot;Saldo bancari de -450 € en rebre un ingrés de 1.200 €&quot;, &quot;badge_right&quot;: &quot;Superàvit&quot;, &quot;right&quot;: &quot;Saldo positiu: +750 € (-450 + 1200)&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Sondeig&quot;, &quot;left&quot;: &quot;Canonada a -40 m de cota que descendeix 30 m més&quot;, &quot;badge_right&quot;: &quot;Profunditat&quot;, &quot;right&quot;: &quot;Cota final: -70 m (-40 - 30)&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Pèrdues&quot;, &quot;left&quot;: &quot;Deute de taller de 3 factures idèntiques de 150 €&quot;, &quot;badge_right&quot;: &quot;Total&quot;, &quot;right&quot;: &quot;Balanç negatiu: -450 € (3 × -150)&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-6" data-unit="ud3" data-title="Jerarquia amb Claudàtors" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R6 · Resolució Jeràrquica</span>
        <h3>➕➖ Resolució Pas a Pas: -4 × [12 - (-3) × (-2)] - (-10)</h3>
      </div>
      <p class="pdi-instruction">Ordena els passos en la seqüència estricta de càlcul aritmètic:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> 1r: Multiplicar els enters interns del claudàtor: (-3) × (-2) = +6</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> 2n: Resoldre la resta dins del claudàtor: [12 - (+6)] = 12 - 6 = 6</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> 3r: Multiplicar el factor extern pel contingut: -4 × 6 = -24</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> 4t: Eliminar el parèntesi final: -(-10) = +10</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> 5è: Sumar els dos termes finals: -24 + 10 = -14</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span><span class="slot-hint">1r: producte intern</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span><span class="slot-hint">2n: claudàtor</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span><span class="slot-hint">3r: multiplicació externa</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span><span class="slot-hint">4t: canvi de signe</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span><span class="slot-hint">5è: resultat final</span></div>
        </div>
      </div>
      <div class="pdi-footer-feedback">
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud3-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud3-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud3-7" data-unit="ud3" data-title="Signes de Potències" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R7 · Potències Enters</span>
        <h3>⚡ Speed Quiz: Potències de Base Negativa i Parèntesis</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Un nombre negatiu elevat a un exponent parell dóna sempre un resultat positiu: (-3)² = +9.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (-3) × (-3) = +9 (menys per menys dóna més).&quot;}, {&quot;q&quot;: &quot;Un nombre negatiu elevat a un exponent imparell dóna sempre negatiu: (-2)³ = -8.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; (-2) × (-2) × (-2) = +4 × (-2) = -8.&quot;}, {&quot;q&quot;: &quot;L&#x27;expressió -5² és exactament igual a (-5)².&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; En -5² l&#x27;exponent només afecta al 5 ➔ -(5×5) = &lt;strong&gt;-25&lt;/strong&gt;, mentre que (-5)² = &lt;strong&gt;+25&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Qualsevol nombre enter elevat a 1 és igual a si mateix: (-7)¹ = -7.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; a¹ = a per a qualsevol nombre enter.&quot;}, {&quot;q&quot;: &quot;(-1)¹⁰⁰ és igual a -1 perquè la base és negativa.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Com que l&#x27;exponent 100 és &lt;strong&gt;parell&lt;/strong&gt;, (-1)¹⁰⁰ = &lt;strong&gt;+1&lt;/strong&gt;!&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-8" data-unit="ud3" data-title="Resultats d'Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R8 · Potències d'Enters</span>
        <h3>🕵️ Troba l'Intrús: Potències Positives vs Negatives</h3>
      </div>
      <p class="pdi-instruction">Descobreix quina expressió no té el mateix valor o signe que les companyes:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Expressions que donen +16&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes expressions donen exactament +16, però una dóna -16. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-4)² = +16&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Exponent parell: dóna +16&quot;}, {&quot;text&quot;: &quot;(+2)⁴ = +16&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna +16&quot;}, {&quot;text&quot;: &quot;-4² (sense parèntesi, el signe menys no està al quadrat: dóna -16)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! -4² = -(4×4) = -16, no +16!&quot;}, {&quot;text&quot;: &quot;(-2)⁴ = +16&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Exponent parell: dóna +16&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Càlculs amb Resultat -1&quot;, &quot;question&quot;: &quot;Quina d&#x27;aquestes expressions no és igual a -1?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;(-1)⁴⁵ (exponent imparell)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -1&quot;}, {&quot;text&quot;: &quot;(-1)⁰ (qualsevol nombre elevat a 0 és +1, no -1!)&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! (-1)⁰ = +1, no -1!&quot;}, {&quot;text&quot;: &quot;-(1²⁰)&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -1&quot;}, {&quot;text&quot;: &quot;(-1)¹&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Dóna -1&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud3-9" data-unit="ud3" data-title="Desnivell i Deutes" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R9 · Càlcul d'Altitud</span>
        <h3>🔢 Teclat Mental: Problemes d'Altitud, Balanç i Temperatures</h3>
      </div>
      <p class="pdi-instruction">Calcula la dada i introdueix el nombre enter (usa la tecla '+/-' per a posar signe negatiu si cal):</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un submarí d&#x27;investigació navega a &lt;strong&gt;-150 m&lt;/strong&gt; de profunditat. Puja 80 m i després baixa 20 m. A quina cota de profunditat es troba ara (-150 + 80 - 20)?&quot;, &quot;expected&quot;: &quot;-90&quot;, &quot;steps&quot;: &quot;-150 + 80 = -70 m  ➔  -70 - 20 = &lt;strong&gt;-90 metres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Un miner es troba a la planta -4 d&#x27;una galeria a 12 m sota terra per planta (-48 m). Puja en ascensor 3 plantes. A quants metres sota terra està ara (-48 + 3×12)?&quot;, &quot;expected&quot;: &quot;-12&quot;, &quot;steps&quot;: &quot;Planta -4 + 3 = planta -1  ➔  -1 × 12 = &lt;strong&gt;-12 metres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;A Terol s&#x27;ha registrat una temperatura mínima de &lt;strong&gt;-6 °C&lt;/strong&gt; i una màxima de &lt;strong&gt;+14 °C&lt;/strong&gt;. Quin ha estat el contrast tèrmic o variació de temperatura (14 - (-6))?&quot;, &quot;expected&quot;: &quot;20&quot;, &quot;steps&quot;: &quot;14 - (-6) = 14 + 6 = &lt;strong&gt;20 °C&lt;/strong&gt; d&#x27;amplitud tèrmica.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud3-10" data-unit="ud3" data-title="Climatització i Finances" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R10 · Gestió Tècnica</span>
        <h3>🛠️ Cas Pràctic de Taller: Registres Tèrmics i Control de Tresoreria</h3>
      </div>
      <p class="pdi-instruction">Avalua la situació tècnica i selecciona la decisió o resultat correcte:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Test de Climatització d&#x27;Automoció&quot;, &quot;context&quot;: &quot;En un taller electromecànic es comprova el compressor de climatització d&#x27;un vehicle. L&#x27;habitacle està inicialment a &lt;strong&gt;+32 °C&lt;/strong&gt;. En 10 minuts el sistema refreda &lt;strong&gt;15 °C&lt;/strong&gt;, però després d&#x27;una parada de motor per revisió el bloc tèrmic s&#x27;escalfa i la temperatura puja &lt;strong&gt;6 °C&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quina temperatura marca el termòmetre digital de diagnosi (+32 - 15 + 6)?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;+23 °C (32 - 15 = 17 °C; 17 + 6 = 23 °C)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Càlcul perfecte: 32 - 15 = 17 °C, i sumant els 6 °C de reescalfament obtenim exactament +23 °C.&quot;}, {&quot;text&quot;: &quot;+21 °C&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Revisa la suma final: 17 + 6 dóna 23, no 21.&quot;}, {&quot;text&quot;: &quot;+25 °C&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Has sumat massa graus. Revisa pas a pas.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Control Financer i Compte del Taller&quot;, &quot;context&quot;: &quot;El taller comença el mes amb un balanç en números rojos de &lt;strong&gt;-600 €&lt;/strong&gt; al compte corrent. Durant la primera setmana cobra una reparació d&#x27;un client de &lt;strong&gt;+1.500 €&lt;/strong&gt;, però ha d&#x27;abonar immediatament una factura de recanvis de &lt;strong&gt;-800 €&lt;/strong&gt; i la revisió anual de maquinària de &lt;strong&gt;-350 €&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quin és l&#x27;estat financer del compte bancari després de tots els moviments?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;-250 € (saldo negatiu de 250 €: -600 + 1500 - 800 - 350 = -250 €)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Molt bé! El taller continua en números rojos de 250 € i caldrà ajornar altres pagaments.&quot;}, {&quot;text&quot;: &quot;+150 € (saldo positiu)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Has oblidat el saldo negatiu inicial de -600 €!&quot;}, {&quot;text&quot;: &quot;0 € (compte a zero)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;La suma total no dóna zero. Revisa: 900 - 800 - 350 = -250 €.&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud4-5" data-unit="ud4" data-title="Engranatges i Mides" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Engranatges i Agrupaments Industrials</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada problema de taller de l'esquerra amb la seua resolució per MCD o MCM a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Engranatges&quot;, &quot;left&quot;: &quot;Engranatges de 12 i 18 dents connectats&quot;, &quot;badge_right&quot;: &quot;MCM&quot;, &quot;right&quot;: &quot;MCM(12, 18) = 36 dents per a coincidir de nou&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Tall de Barres&quot;, &quot;left&quot;: &quot;Tallar barres de 24 m i 36 m en trossos iguals màxims&quot;, &quot;badge_right&quot;: &quot;MCD&quot;, &quot;right&quot;: &quot;MCD(24, 36) = fragments de 12 metres de llarg&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Manteniment&quot;, &quot;left&quot;: &quot;Revisió de màquines cada 15 i 20 dies&quot;, &quot;badge_right&quot;: &quot;Coincidència&quot;, &quot;right&quot;: &quot;MCM(15, 20) = revisió conjunta cada 60 dies&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Magatzem&quot;, &quot;left&quot;: &quot;Lots de 30 caragols i 45 femelles repartits iguals&quot;, &quot;badge_right&quot;: &quot;Agrupament&quot;, &quot;right&quot;: &quot;MCD(30, 45) = màxim 15 caixes iguals sense sobres&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud4-10" data-unit="ud4" data-title="Tall de Cables i Màquines" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Tall de Material i Cicles de Producció</h3>
      </div>
      <p class="pdi-instruction">Analitza les situacions de treball i tria la solució tècnica de taller:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Tall de Rotllos de Cable Elèctric&quot;, &quot;context&quot;: &quot;Un electricista té dos rotllos de cable de coure de &lt;strong&gt;48 metres&lt;/strong&gt; i &lt;strong&gt;72 metres&lt;/strong&gt;. Ha de tallar tots dos rotllos en trossos exactament iguals, de la màxima llargària possible i sense que sobre ni un sol centímetre de cable sobrant.&quot;, &quot;question&quot;: &quot;Quina llargària haurà de tindre cada fragment de cable?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;24 metres (MCD de 48 i 72 = 24 m)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Perfecte! MCD(48, 72) = 24 m. Obtindrà 2 trossos del primer rotllo i 3 trossos del segon, aprofitant el 100% del coure.&quot;}, {&quot;text&quot;: &quot;12 metres&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;12 m és un divisor comú, però no és el màxim possible (24 és el doble i aprofita millor el material).&quot;}, {&quot;text&quot;: &quot;16 metres&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;16 divideix 48, però 72 / 16 = 4,5 (no és divisió exacta, sobraria cable!).&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Sincronització de Manteniment en Línia&quot;, &quot;context&quot;: &quot;En una planta industrial d&#x27;envasat, la màquina A neteja automàticament els seus filtres cada &lt;strong&gt;6 minuts&lt;/strong&gt; i la màquina B fa un calibratge cada &lt;strong&gt;8 minuts&lt;/strong&gt;. A les 08:00 h han començat el torn coincidint les dues al mateix temps.&quot;, &quot;question&quot;: &quot;A quina hora tornaran a coincidir exactament en la parada de neteja?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;A les 08:24 h (MCM de 6 i 8 = 24 minuts)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Exacte! MCM(6, 8) = 24 minuts. Coincidiran a les 08:24 h, 08:48 h, etc.&quot;}, {&quot;text&quot;: &quot;A les 08:48 h&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;A les 08:48 h també coincidiran, però la primera coincidència serà abans, als 24 minuts.&quot;}, {&quot;text&quot;: &quot;A les 08:14 h&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;14 no és múltiple de 6 ni de 8. No poden coincidir als 14 minuts.&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud5-5" data-unit="ud5" data-title="Proporcions de Taller" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Proporcions i Mescles de Taller</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada fracció aplicada a taller amb el seu percentatge o valor equivalent:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Morter&quot;, &quot;left&quot;: &quot;Mescla de morter amb 1/4 part de ciment&quot;, &quot;badge_right&quot;: &quot;Percentatge&quot;, &quot;right&quot;: &quot;Equival al 25% de la massa total de mescla&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Dipòsit&quot;, &quot;left&quot;: &quot;Dipòsit de combustible a 3/4 de capacitat&quot;, &quot;badge_right&quot;: &quot;Nivell&quot;, &quot;right&quot;: &quot;Equival al 75% del volum (només falta 1/4)&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Rebaixa&quot;, &quot;left&quot;: &quot;Descompte directe de 1/5 en una peça mecànica&quot;, &quot;badge_right&quot;: &quot;Estalvi&quot;, &quot;right&quot;: &quot;Equival a un 20% de descompte comercial&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Jornada&quot;, &quot;left&quot;: &quot;Treball a 1/2 jornada laboral en torn de 8h&quot;, &quot;badge_right&quot;: &quot;Temps&quot;, &quot;right&quot;: &quot;Equival al 50% de la jornada (4 hores)&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud5-10" data-unit="ud5" data-title="Dosificació i Producció" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Mescles de Pintura i Planificació</h3>
      </div>
      <p class="pdi-instruction">Llig el procediment tècnic i selecciona la dosificació o proporció exacta:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Dosificació de Pintura Bicomponent&quot;, &quot;context&quot;: &quot;En el taller de pintura d&#x27;automoció cal preparar &lt;strong&gt;600 ml&lt;/strong&gt; d&#x27;una imprimació especial. La fitxa tècnica indica una proporció de &lt;strong&gt;2/3 de pintura base&lt;/strong&gt; i &lt;strong&gt;1/3 de catalitzador enduridor&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quants mil·lilitres de cada component s&#x27;han de mesurar a la proveta?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;400 ml de pintura base i 200 ml de catalitzador (2/3 de 600 = 400; 1/3 de 600 = 200)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Mesura exacta! 600 × 2 / 3 = 400 ml de base i 600 × 1 / 3 = 200 ml de catalitzador. La mescla polimeritzarà perfectament.&quot;}, {&quot;text&quot;: &quot;300 ml de cadascun (50% i 50%)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;La proporció 50/50 arruïnaria la pintura! El fabricant exigeix 2/3 de base.&quot;}, {&quot;text&quot;: &quot;450 ml de base i 150 ml de catalitzador&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Això seria una proporció 3/4 i 1/4 (75% i 25%), no pas 2/3 i 1/3.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Control de Producció en Fusteria&quot;, &quot;context&quot;: &quot;Un taller de fusteria ha de fabricar un lot de &lt;strong&gt;12 portes&lt;/strong&gt;. El dilluns fabriquen &lt;strong&gt;1/2&lt;/strong&gt; del total de portes, i el dimarts en fabriquen &lt;strong&gt;1/3&lt;/strong&gt; del total.&quot;, &quot;question&quot;: &quot;Quina fracció del lot han completat entre els dos dies i quantes portes queden per acabar?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Han completat 5/6 del lot (falta 1/6, és a dir, 2 portes)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Brillant! 1/2 + 1/3 = 3/6 + 2/6 = 5/6 fetes. Falta 1/6 de 12 portes = 2 portes pendents.&quot;}, {&quot;text&quot;: &quot;Han completat 2/5 del lot i falten 7 portes&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Error clàssic! Les fraccions amb diferent denominador no es sumen en línia recta (1+1)/(2+3). Cal fer el mcm!&quot;}, {&quot;text&quot;: &quot;Ja han completat el 100% del treball&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;1/2 + 1/3 no dóna 1 sencer (dóna 5/6). Encara queden portes per fer.&quot;}]}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud6-4', '0')">0</button>
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
    <!-- act-ud6-5 (connect) -->
    <div class="pdi-activity-card" id="act-ud6-5" data-unit="ud6" data-title="Telescopis i Distàncies" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Telescopis i Distàncies a l'Espai</h3>
      </div>
      <p class="pdi-instruction">Emparella cada concepte astronòmic amb la seua equivalència o aplicació tècnica:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Distància&quot;, &quot;left&quot;: &quot;1 Any Llum (camí de la llum en 1 any)&quot;, &quot;badge_right&quot;: &quot;Equivalència&quot;, &quot;right&quot;: &quot;Aproximadament 9,46 bilions de quilòmetres&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Velocitat&quot;, &quot;left&quot;: &quot;Velocitat de la llum en el buit còsmic&quot;, &quot;badge_right&quot;: &quot;Límit Físic&quot;, &quot;right&quot;: &quot;300.000 quilòmetres per segon&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Infraroig&quot;, &quot;left&quot;: &quot;Telescopi espacial James Webb&quot;, &quot;badge_right&quot;: &quot;Objectiu&quot;, &quot;right&quot;: &quot;Observació de les primeres galàxies de l&#x27;univers&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Ràdio&quot;, &quot;left&quot;: &quot;Radiotelescopis terrestres parabòlics&quot;, &quot;badge_right&quot;: &quot;Senyals&quot;, &quot;right&quot;: &quot;Captació d&#x27;ones de ràdio de púlsars i forats negres&quot;}]">
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
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud6-5')">🔄 Tornar a Jugar</button>
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

            <button class="kp-key" onclick="pressKeypad('act-ud6-9', '0')">0</button>
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
    <!-- act-ud6-10 (case) -->
    <div class="pdi-activity-card" id="act-ud6-10" data-unit="ud6" data-title="Satèl·lits i Telecom" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Comunicacions Espacials i Satèl·lits GPS</h3>
      </div>
      <p class="pdi-instruction">Resol el cas de telecomunicacions espacials i tecnologia aplicada:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Temps de Senyal del Sistema GPS&quot;, &quot;context&quot;: &quot;Una constel·lació de satèl·lits GPS orbita a una altitud de &lt;strong&gt;20.000 km&lt;/strong&gt; respecte a la superfície terrestre. El satèl·lit emet senyals de ràdio electromagnètiques que viatgen a la velocitat de la llum (&lt;strong&gt;300.000 km/s&lt;/strong&gt;) fins al receptor GPS d&#x27;un vehicle o maquinària agrícola.&quot;, &quot;question&quot;: &quot;Quant de temps tarda aproximadament el senyal en arribar a l&#x27;antena receptora?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aproximadament 0,067 segons (67 mil·lisegons) (20.000 / 300.000 s)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Exacte! 20.000 / 300.000 ≈ 0,067 segons (67 ms). Per això calen rellotges atòmics d&#x27;alta precisió per a triangular la posició al mil·límetre.&quot;}, {&quot;text&quot;: &quot;Unes 2 hores senceres&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Les ones de ràdio viatgen a la velocitat de la llum, no tarden hores!&quot;}, {&quot;text&quot;: &quot;Arriba de manera absolutament instantània (0,000 s)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;La velocitat de la llum és finita (300.000 km/s), per tant sempre hi ha un xicotet retard mesurable.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Ordre d&#x27;Emergència a un Robot Marcià&quot;, &quot;context&quot;: &quot;Des del centre de control de l&#x27;estació terrestre s&#x27;ha d&#x27;enviar una ordre crítica d&#x27;aturada a un vehicle explorador que opera a Mart quan la distància entre tots dos planetes és de &lt;strong&gt;150 milions de km&lt;/strong&gt;. El senyal de ràdio viatja a 300.000 km/s.&quot;, &quot;question&quot;: &quot;Quants minuts tardarà l&#x27;ordre des de la Terra en ser rebuda a Mart (150.000.000 / 300.000 s)?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Uns 8,3 minuts (500 segons de retard)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Brillant! 150.000.000 km / 300.000 km/s = 500 segons = 8 minuts i 20 segons. Per aquesta raó el robot ha de ser autònom per a no xocar.&quot;}, {&quot;text&quot;: &quot;1 minut just&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;En 1 minut la llum només recorre 18 milions de km, molt lluny dels 150 milions.&quot;}, {&quot;text&quot;: &quot;30 segons&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Massa poc de temps per a cobrir la distància interplanetària.&quot;}]}]">
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
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud6-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud6-10')">🔄 Tornar a Practicar</button>
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
      <div class="pdi-speedquiz-container" data-questions="[{&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La distància al Sol varia molt poc. Les estacions es deuen a la &lt;strong&gt;inclinació de 23,5° de l&#x27;eix terrestre&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;Les 4 estacions de l&#x27;any es deuen a que la Terra està més a prop del Sol a l&#x27;estiu i més lluny a l&#x27;hivern.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els rajos solars incideixen perpendicularment sobre el Tròpic de Càncer.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;En el solstici d&#x27;estiu a l&#x27;hemisferi nord (21 de juny), tenim el dia més llarg de tot l&#x27;any i la nit més curta.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La rotació d&#x27;oest a est origina la successió del dia i la nit.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;El moviment de rotació dura exactament 24 hores i es fa en sentit d&#x27;oest a est, per això veiem eixir el Sol per l&#x27;est.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els rajos solars cauen verticals sobre la línia de l&#x27;Equador terrestre.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;En els equinoccis de primavera i tardor, el dia i la nit tenen exactament la mateixa durada (12 hores) en tot el planeta.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El genera el &lt;strong&gt;nucli extern líquid&lt;/strong&gt; de ferro fos en moviment per efecte dinamo.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;El camp magnètic terrestre es genera per les roques imantades de l&#x27;escorça de les muntanyes.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;options&quot;: [{&quot;hint&quot;: &quot;Fase regular del cicle lunar&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Lluna Nova&quot;}, {&quot;hint&quot;: &quot;Fase regular del cicle lunar&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Quart Creixent&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! Un eclipsi és una alineació puntual extraordinària, no una fase lunar ordinària!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Eclipsi Total de Sol&quot;}, {&quot;hint&quot;: &quot;Fase regular del cicle lunar&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Lluna Plena&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests elements són fases periòdiques del cicle lunar de 28 dies, però un és un fenomen astronòmic puntual. Quin és l&#x27;intrús?&quot;, &quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Fases Ordinàries del Cicle Lunar&quot;}, {&quot;options&quot;: [{&quot;hint&quot;: &quot;Capa geoquímica més superficial&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Escorça terrestre&quot;}, {&quot;hint&quot;: &quot;Capa geoquímica intermèdia de peridotites&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Mantell terrestre&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! La litosfera és una capa mecànica rígida formada per l&#x27;escorça i el mantell superior rígid!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Litosfera&quot;}, {&quot;hint&quot;: &quot;Capa geoquímica central de ferro i níquel&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Nucli terrestre&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests elements són capes geoquímiques pures de la Terra, però un és una unitat dinàmica-mecànica. Quin és l&#x27;intrús?&quot;, &quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Capes Geoquímiques de la Geosfera&quot;}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;expected&quot;: &quot;24&quot;, &quot;p_num&quot;: 1, &quot;steps&quot;: &quot;4 anys × 6 hores/any = &lt;strong&gt;24&lt;/strong&gt; hores (un dia sencer).&quot;, &quot;text&quot;: &quot;La translació terrestre dura 365 dies i &lt;strong&gt;6 hores&lt;/strong&gt;. Quantes hores de desfasament s&#x27;acumulen en 4 anys per a afegir el dia 29 de febrer (any de traspàs)?&quot;}, {&quot;expected&quot;: &quot;14&quot;, &quot;p_num&quot;: 2, &quot;steps&quot;: &quot;Mitja volta a l&#x27;òrbita lunar = 28 / 2 = &lt;strong&gt;14&lt;/strong&gt; dies.&quot;, &quot;text&quot;: &quot;El cicle complet de les fases lunars dura aproximadament 28 dies. Quants dies passen aproximadament des de la Lluna Nova fins a la Lluna Plena?&quot;}, {&quot;expected&quot;: &quot;6336&quot;, &quot;p_num&quot;: 3, &quot;steps&quot;: &quot;6.371 km - 35 km = &lt;strong&gt;6336&lt;/strong&gt; km.&quot;, &quot;text&quot;: &quot;Si l&#x27;escorça terrestre té un gruix mitjà d&#x27;uns 35 km i el radi total de la Terra fins al centre és de 6.371 km, quants km ocupen el mantell i el nucli junts (6.371 - 35)?&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud7-4', '0')">0</button>
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
    <!-- act-ud7-5 (connect) -->
    <div class="pdi-activity-card" id="act-ud7-5" data-unit="ud7" data-title="Fenòmens Geotècnics" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Fenòmens Geotècnics i Riscos</h3>
      </div>
      <p class="pdi-instruction">Emparella cada dinàmica geològica de l'esquerra amb la seua conseqüència física a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;badge_left&quot;: &quot;Falla&quot;, &quot;badge_right&quot;: &quot;Sismes&quot;, &quot;id&quot;: 1, &quot;left&quot;: &quot;Fricció en falles de transformació&quot;, &quot;right&quot;: &quot;Acumula energia elàstica que allibera sismes forts&quot;}, {&quot;badge_left&quot;: &quot;Mantell&quot;, &quot;badge_right&quot;: &quot;Plaques&quot;, &quot;id&quot;: 2, &quot;left&quot;: &quot;Convecció tèrmica de magma a l&#x27;astenosfera&quot;, &quot;right&quot;: &quot;Motor intern que arrossega les plaques litosfèriques&quot;}, {&quot;badge_left&quot;: &quot;Volcans&quot;, &quot;badge_right&quot;: &quot;Explosió&quot;, &quot;id&quot;: 3, &quot;left&quot;: &quot;Magma viscós ric en gasos i sílice&quot;, &quot;right&quot;: &quot;Erupcions volcàniques explosives i piroclasts&quot;}, {&quot;badge_left&quot;: &quot;Subducció&quot;, &quot;badge_right&quot;: &quot;Destrucció&quot;, &quot;id&quot;: 4, &quot;left&quot;: &quot;Fossa oceànica en límit convergent&quot;, &quot;right&quot;: &quot;Destrucció de litosfera oceànica que s&#x27;enfonsa al mantell&quot;}]">
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
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud7-5')">🔄 Tornar a Jugar</button>
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
      <div class="pdi-speedquiz-container" data-questions="[{&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La fossa de les Marianes (11.000 m) s&#x27;origina per subducció litosfèrica.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;Les fosses oceàniques més fondes del món es formen en zones de subducció on una placa s&#x27;enfonsa davall d&#x27;una altra.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És un límit transformant o passiu on les plaques llisquen lateralment.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;La falla de San Andrés a Califòrnia és un límit divergent on les plaques se separen per a crear nou fons marí.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El punt intern és l&#x27;&lt;strong&gt;hipocentre&lt;/strong&gt;; l&#x27;epicentre és el punt de la superfície verticalment damunt.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;L&#x27;epicentre és el punt exacte de l&#x27;interior terrestre on es trenca la roca i s&#x27;inicia el terratrèmol.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Està formada principalment per basalts foscos i pesants.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;L&#x27;escorça oceànica és molt més prima (5-10 km) i densa que l&#x27;escorça continental (30-70 km).&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La desaparició de les ones S a 2.900 km va demostrar la liquiditat del nucli extern.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;Les ones sísmiques S (secundàries) no es transmeten a través de líquids, evidenciant que el nucli extern és fluid.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;options&quot;: [{&quot;hint&quot;: &quot;Límit convergent continental&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Serralada de l&#x27;Himàlaia (xoc continental Índia-Euràsia)&quot;}, {&quot;hint&quot;: &quot;Límit convergent de subducció&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Fossa de les Marianes (subducció oceànica)&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! La dorsal és un límit divergent on les plaques se separen!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Dorsal Centroatlàntica&quot;}, {&quot;hint&quot;: &quot;Límit convergent&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Serralada dels Andes (subducció oceànica sota Amèrica)&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquestes estructures s&#x27;originen pel xoc o subducció de plaques (convergència), però una és d&#x27;un límit divergent. Quina és?&quot;, &quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Límits Convergents (Xoc de Plaques)&quot;}, {&quot;options&quot;: [{&quot;hint&quot;: &quot;Condició essencial de la hidrosfera&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Aigua líquida abundant en superfície&quot;}, {&quot;hint&quot;: &quot;Efecte hivernacle natural temperat&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Temperatura mitjana superficial de 15 °C&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! Això és una condició extrema d&#x27;un planeta gegant gasós, no de la Terra!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Rotació violenta de 8 hores amb vents de 600 km/h&quot;}, {&quot;hint&quot;: &quot;Escuts defensius essencials&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Capa d&#x27;ozó i camp magnètic protectors contra radiació&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquestes condicions fan possible la vida a la Terra, però una és hostil o aliena. Quina és l&#x27;intrús?&quot;, &quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Condicions Exclusives de la Terra per a la Vida&quot;}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;expected&quot;: &quot;250&quot;, &quot;p_num&quot;: 1, &quot;steps&quot;: &quot;2,5 cm/any × 100 anys = &lt;strong&gt;250&lt;/strong&gt; cm (2,5 metres).&quot;, &quot;text&quot;: &quot;La dorsal de l&#x27;oceà Atlàntic s&#x27;obri separant Amèrica i Europa a un ritme de &lt;strong&gt;2,5 cm per any&lt;/strong&gt;. Quants centímetres s&#x27;hauran separat al cap de 100 anys?&quot;}, {&quot;expected&quot;: &quot;1024&quot;, &quot;p_num&quot;: 2, &quot;steps&quot;: &quot;32 × 32 = &lt;strong&gt;1024&lt;/strong&gt; vegades més energia.&quot;, &quot;text&quot;: &quot;En l&#x27;escala sísmica, cada grau de magnitud allibera unes 32 vegades més energia. Si un sisme passa de magnitud 4 a 6 (dos graus), quantes vegades s&#x27;amplifica l&#x27;energia alliberada (32 × 32)?&quot;}, {&quot;expected&quot;: &quot;24&quot;, &quot;p_num&quot;: 3, &quot;steps&quot;: &quot;40.080 / 1.670 = &lt;strong&gt;24&lt;/strong&gt; hores.&quot;, &quot;text&quot;: &quot;La circumferència equatorial de la Terra és d&#x27;uns 40.080 km. Si gira a 1.670 km/h a l&#x27;Equador, quantes hores tarda a fer un gir de 360° (40.080 / 1.670)?&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud7-9', '0')">0</button>
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
    <!-- act-ud7-10 (case) -->
    <div class="pdi-activity-card" id="act-ud7-10" data-unit="ud7" data-title="Sismorresistència i Sol" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #ea580c;">UD7 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Construcció Sismorresistent i Panells Solars</h3>
      </div>
      <p class="pdi-instruction">Avalua el repte tècnic d'obra o instal·lació i tria la solució correcta:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;context&quot;: &quot;En un projecte de reforma d&#x27;una nau de taller a la comarca del Baix Segura (zona d&#x27;alta activitat sísmica), ens demanen revisar les mesures de seguretat estructural per a resistir sismes.&quot;, &quot;options&quot;: [{&quot;exp&quot;: &quot;Molt bé! Els aïlladors i les juntes absorbeixen l&#x27;energia sísmica evitant l&#x27;esfondrament de la nau.&quot;, &quot;is_correct&quot;: true, &quot;text&quot;: &quot;Estructures de formigó armat amb juntes de dilatació flexibles i aïlladors sísmics de base&quot;}, {&quot;exp&quot;: &quot;La rajola rígida sense armar s&#x27;esquerda i col·lapsa immediatament davant d&#x27;ones de cisalla S.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Paredes rígides de rajola pesant sense cap reforç de ferro&quot;}, {&quot;exp&quot;: &quot;El guix no té resistència estructural per a càrregues dinàmiques.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Substituir les bigues d&#x27;acer per bigues de guix sense fixacions&quot;}], &quot;question&quot;: &quot;Quin criteri tècnic de construcció sismorresistent és l&#x27;adequat?&quot;, &quot;title&quot;: &quot;📋 Cas 1: Criteris de Construcció Sismorresistent&quot;}, {&quot;case_num&quot;: 2, &quot;context&quot;: &quot;Un equip de muntadors ha d&#x27;instal·lar panells solars fotovoltaics a la coberta d&#x27;un taller a València per a aprofitar el màxim de radiació solar durant les quatre estacions de l&#x27;any.&quot;, &quot;options&quot;: [{&quot;exp&quot;: &quot;Perfecte! A l&#x27;hemisferi nord el Sol fa el seu arc cap al Sud; 35° optimitza la mitjana anual entre solsticis i equinoccis.&quot;, &quot;is_correct&quot;: true, &quot;text&quot;: &quot;Orientats exactament cap al Sud amb una inclinació de 30° a 35° respecte a l&#x27;horitzontal&quot;}, {&quot;exp&quot;: &quot;Al Nord perdrien gran part de la radiació directa i acumularien pols i fulles.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Orientats cap al Nord en pla horitzontal (0°)&quot;}, {&quot;exp&quot;: &quot;A 90° només rebrien llum a l&#x27;alba i quasi res la resta del dia.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Orientats cap a l&#x27;Est a 90° verticals&quot;}], &quot;question&quot;: &quot;Cap a quina orientació i amb quina inclinació s&#x27;han de col·locar els mòduls?&quot;, &quot;title&quot;: &quot;📋 Cas 2: Orientació i Inclinació de Panells Solars&quot;}]">
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
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud7-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud7-10')">🔄 Tornar a Practicar</button>
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
      <div class="pdi-speedquiz-container" data-questions="[{&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El més abundant és el &lt;strong&gt;nitrogen (N2) amb un 78%&lt;/strong&gt;; l&#x27;oxigen representa el 21%.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;El gas més abundant de l&#x27;atmosfera terrestre és l&#x27;oxigen amb un 78% del volum total de l&#x27;aire.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquest és el valor de referència estàndard mesurat per Torricelli.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;La pressió atmosfèrica normal a nivell del mar equival a 1 atmosfera o 1.013 hectopascals (hPa).&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La pressió &lt;strong&gt;disminueix amb l&#x27;altitud&lt;/strong&gt; perquè hi ha menys columna d&#x27;aire damunt nostre.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;A mesura que pugem a dalt d&#x27;una muntanya alta, la pressió atmosfèrica augmenta perquè l&#x27;aire pesa més.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;ozó (O3) actua com un filtre solar imprescindible per a la vida terrestre.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;La capa d&#x27;ozó es troba a l&#x27;estratosfera i absorbeix la radiació ultraviolada d&#x27;alta energia procedent del Sol.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Sense aquest efecte natural dels gasos com el CO2 i vapor d&#x27;aigua, la Terra estaria congelada a -18 °C.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;L&#x27;efecte d&#x27;hivernacle natural és un fenomen beneficiós que manté la Terra a una temperatura mitjana temperada de 15 °C.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;options&quot;: [{&quot;hint&quot;: &quot;Gas natural majoritari&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Nitrogen (N2 - 78%)&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! El CO és un contaminant verinós de combustions incompletes, no un gas de l&#x27;aire net!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Monòxid de carboni (CO)&quot;}, {&quot;hint&quot;: &quot;Gas natural respirable&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Oxigen (O2 - 21%)&quot;}, {&quot;hint&quot;: &quot;Gas noble natural&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Argó (Ar - 0,93%)&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests gasos són components naturals de l&#x27;aire sec, però un és un contaminant tòxic de combustió. Quin és l&#x27;intrús?&quot;, &quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Gasos Naturals de l&#x27;Aire Net&quot;}, {&quot;options&quot;: [{&quot;hint&quot;: &quot;Aparell meteorològic clau&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Baròmetre (mesura la pressió en hPa)&quot;}, {&quot;hint&quot;: &quot;Aparell meteorològic clau&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Anemòmetre (mesura la velocitat del vent)&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! El calibre és una eina de mesura de taller mecànic, no d&#x27;una estació meteorològica!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Calibre o peu de rei&quot;}, {&quot;hint&quot;: &quot;Aparell meteorològic clau&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Higròmetre (mesura la humitat de l&#x27;aire)&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests aparells mesuren variables del clima i l&#x27;atmosfera, però un és d&#x27;un altre àmbit. Quin és l&#x27;intrús?&quot;, &quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aparells d&#x27;Estació Meteorològica&quot;}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;expected&quot;: &quot;99&quot;, &quot;p_num&quot;: 1, &quot;steps&quot;: &quot;78% + 21% = &lt;strong&gt;99&lt;/strong&gt;% del volum total de l&#x27;aire.&quot;, &quot;text&quot;: &quot;L&#x27;aire sec conté un 78% de nitrogen i un 21% d&#x27;oxigen. Quin percentatge sumen aquests dos gasos vitals en conjunt?&quot;}, {&quot;expected&quot;: &quot;200&quot;, &quot;p_num&quot;: 2, &quot;steps&quot;: &quot;1.013 hPa - 813 hPa = &lt;strong&gt;200&lt;/strong&gt; hPa de descens.&quot;, &quot;text&quot;: &quot;La pressió a nivell de mar és de 1.013 hPa. Si a dalt d&#x27;una serra la pressió baixa fins a 813 hPa, quants hPa ha caigut la pressió (1.013 - 813)?&quot;}, {&quot;expected&quot;: &quot;12&quot;, &quot;p_num&quot;: 3, &quot;steps&quot;: &quot;24 °C - (2 × 6 °C) = 24 - 12 = &lt;strong&gt;12&lt;/strong&gt; °C.&quot;, &quot;text&quot;: &quot;A la troposfera la temperatura disminueix uns 6 °C per cada 1.000 m d&#x27;alçada. Si a nivell del mar fa 24 °C, quants graus farà a un pic de 2.000 m (24 - 2×6)?&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud8-4', '0')">0</button>
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
    <!-- act-ud8-5 (connect) -->
    <div class="pdi-activity-card" id="act-ud8-5" data-unit="ud8" data-title="EPIs i Gasos" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Equips de Protecció i Gasos Atmosfèrics</h3>
      </div>
      <p class="pdi-instruction">Emparella cada contaminant o gas amb el seu efecte en salut o l'EPI necessari:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;badge_left&quot;: &quot;Motor&quot;, &quot;badge_right&quot;: &quot;Intoxicació&quot;, &quot;id&quot;: 1, &quot;left&quot;: &quot;Monòxid de carboni (CO) d&#x27;escapaments&quot;, &quot;right&quot;: &quot;Asfíxia cel·lular greu per bloqueig d&#x27;oxigen a l&#x27;hemoglobina&quot;}, {&quot;badge_left&quot;: &quot;Dissolvents&quot;, &quot;badge_right&quot;: &quot;EPI Químic&quot;, &quot;id&quot;: 2, &quot;left&quot;: &quot;Pintures al dissolvent i vapors COV&quot;, &quot;right&quot;: &quot;Obligació d&#x27;ús de mascareta amb filtre de carbó actiu A1 o A2&quot;}, {&quot;badge_left&quot;: &quot;Partícules&quot;, &quot;badge_right&quot;: &quot;EPI Pols&quot;, &quot;id&quot;: 3, &quot;left&quot;: &quot;Pols fina de poliment i partícules PM2.5&quot;, &quot;right&quot;: &quot;Protecció respiratòria amb mascareta autofiltrant FFP2 o FFP3&quot;}, {&quot;badge_left&quot;: &quot;Ozó&quot;, &quot;badge_right&quot;: &quot;Escut&quot;, &quot;id&quot;: 4, &quot;left&quot;: &quot;Ozó estratosfèric natural (capa d&#x27;O3)&quot;, &quot;right&quot;: &quot;Escut indispensable contra cremades i mutacions per radiació UV&quot;}]">
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
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud8-5')">🔄 Tornar a Jugar</button>
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
      <div class="pdi-speedquiz-container" data-questions="[{&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El metà (CH4), l&#x27;òxid nitrós (N2O) i els gasos fluorats també són gasos d&#x27;hivernacle molt potents.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;El diòxid de carboni (CO2) és l&#x27;únic gas responsable de l&#x27;efecte d&#x27;hivernacle causat per la humanitat.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquestes partícules travessen les defenses respiratòries i passen a la sang.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;Les partícules en suspensió PM2.5 són especialment perilloses perquè la seua mida microscòpica els permet entrar directament als alvèols pulmonars.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són problemes diferents: l&#x27;ozó filtrava rajos UV; l&#x27;escalfament es deu a la retenció de calor per gasos d&#x27;hivernacle.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;El forat de la capa d&#x27;ozó és el responsable directe de l&#x27;augment de temperatura global del canvi climàtic.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Va aconseguir frenar la destrucció de l&#x27;ozó substituint els refrigerants antics.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;El Protocol de Mont-real va ser un èxit internacional que va prohibir els gasos CFC per a permetre la recuperació de la capa d&#x27;ozó.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Origina ozó troposfèric nociu i partícules irritants per als ulls i pulmons.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;La boira fotoquímica (smog) a les ciutats es produeix per la reacció de gasos de cotxes amb la llum solar intensa.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;options&quot;: [{&quot;hint&quot;: &quot;Potent gas d&#x27;hivernacle&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Metà (CH4)&quot;}, {&quot;hint&quot;: &quot;Principal gas d&#x27;hivernacle de combustió&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Diòxid de carboni (CO2)&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;oxigen molecular no té estructura per a absorbir radiació infraroja tèrmica!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Oxigen pur (O2)&quot;}, {&quot;hint&quot;: &quot;Gas natural d&#x27;efecte hivernacle&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Vapor d&#x27;aigua (H2O)&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests gasos atrapen calor infraroja provocant efecte hivernacle, però un no. Quin és?&quot;, &quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Gasos d&#x27;Efecte d&#x27;Hivernacle (GEH)&quot;}, {&quot;options&quot;: [{&quot;hint&quot;: &quot;Precipitació líquida&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Pluja líquida&quot;}, {&quot;hint&quot;: &quot;Precipitació sòlida&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Calamarsa o pedra&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! La boira és condensació de vapor d&#x27;aigua en suspensió arran de terra, no una precipitació que cau!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Boira a terra&quot;}, {&quot;hint&quot;: &quot;Precipitació sòlida&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Neu en flocs&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests elements són precipitacions aquoses que cauen dels núvols, però un no cau. Quin és?&quot;, &quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Tipus de Precipitació Atmosfèrica&quot;}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;expected&quot;: &quot;3000&quot;, &quot;p_num&quot;: 1, &quot;steps&quot;: &quot;150 g/km × 20 km = &lt;strong&gt;3000&lt;/strong&gt; grams (3 kg de CO2).&quot;, &quot;text&quot;: &quot;Un vehicle de taller emet 150 grams de CO2 per cada km recorregut. Quants grams de CO2 emetrà en un recorregut de &lt;strong&gt;20 km&lt;/strong&gt;?&quot;}, {&quot;expected&quot;: &quot;3&quot;, &quot;p_num&quot;: 2, &quot;steps&quot;: &quot;45 / 15 = &lt;strong&gt;3&lt;/strong&gt; vegades per damunt del llindar de salut.&quot;, &quot;text&quot;: &quot;L&#x27;OMS fixa el límit diari recomanat de PM2.5 en 15 µg/m³. Si en un carrer cèntric el sensor marca 45 µg/m³, quantes vegades s&#x27;està superant el límit (45 / 15)?&quot;}, {&quot;expected&quot;: &quot;40&quot;, &quot;p_num&quot;: 3, &quot;steps&quot;: &quot;(8 / 20) × 100 = 0,40 × 100 = &lt;strong&gt;40&lt;/strong&gt;% d&#x27;humitat relativa.&quot;, &quot;text&quot;: &quot;L&#x27;aire admet un màxim de 20 g d&#x27;aigua per m³ a 23 °C. Si ara conté 8 g/m³, quin és el % d&#x27;humitat relativa (8 / 20 × 100)?&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud8-9', '0')">0</button>
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
    <!-- act-ud8-10 (case) -->
    <div class="pdi-activity-card" id="act-ud8-10" data-unit="ud8" data-title="Ventilació i Gasos" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD8 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Ventilació, Gasos Tòxics i Seguretat Laboral</h3>
      </div>
      <p class="pdi-instruction">Avalua l'incident de seguretat laboral al taller i tria el protocol d'emergència:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;context&quot;: &quot;En un taller mecànic es manté un vehicle dièsel encés sobre el banc de potència sense connectar la mànega d&#x27;extracció d&#x27;escapament. Als 15 minuts, dos operaris noten mal de cap sobtat, batecs accelerats i mareig intens.&quot;, &quot;options&quot;: [{&quot;exp&quot;: &quot;Actuació perfecta! El CO és inodor i incolor però letal. Cal eixir immediatament a respirar aire net.&quot;, &quot;is_correct&quot;: true, &quot;text&quot;: &quot;Intoxicació per Monòxid de Carboni (CO); cal aturar el motor, ventilar obrint portes de bat a bat i evacuar tothom a l&#x27;aire lliure&quot;}, {&quot;exp&quot;: &quot;Perill mortal! Tancar la porta concentraria encara més el CO podent provocar pèrdua de consciència.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;És una baixada de pressió sense risc; cal tancar la porta perquè no entre fred&quot;}, {&quot;exp&quot;: &quot;L&#x27;analgèsic no resol la manca d&#x27;oxigen en sang causada pel verí del monòxid.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Prendre un analgèsic i continuar treballant&quot;}], &quot;question&quot;: &quot;Quin gas tòxic està actuant i quina és l&#x27;actuació d&#x27;urgència immediata?&quot;, &quot;title&quot;: &quot;📋 Cas 1: Motor Encés en Recinte Tancat&quot;}, {&quot;case_num&quot;: 2, &quot;context&quot;: &quot;Mentre un pintor polvoritza un capó amb pintura d&#x27;acabat, el sistema d&#x27;extracció i filtratge de la cabina falla per col·lapse dels filtres saturats de pigments secs.&quot;, &quot;options&quot;: [{&quot;exp&quot;: &quot;Correctíssim! Sense extracció els vapors inflamables s&#x27;acumulen superant el límit d&#x27;explosivitat i danyant la salut.&quot;, &quot;is_correct&quot;: true, &quot;text&quot;: &quot;Detindre la pistola immediatament, desconnectar l&#x27;equip i sortir de la cabina fins a renovar els filtres&quot;}, {&quot;exp&quot;: &quot;Greu imprudència! Inhalaria vapors orgànics tòxics directament als pulmons.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Llevar-se la mascareta per a veure-hi millor i afanyar-se a acabar&quot;}, {&quot;exp&quot;: &quot;Això ompliria tot el taller de vapors tòxics i pols per a la resta de companys.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Obrir la porta de la cabina cap a la zona comuna del taller&quot;}], &quot;question&quot;: &quot;Quina és la decisió tècnica correcta del pintor?&quot;, &quot;title&quot;: &quot;📋 Cas 2: Avaria en la Cabina de Pintura&quot;}]">
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
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud8-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud8-10')">🔄 Tornar a Practicar</button>
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
      <div class="pdi-speedquiz-container" data-questions="[{&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Només el 3% restant és aigua dolça.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;L&#x27;aigua salada dels oceans i mars representa aproximadament el 97% de tota l&#x27;aigua que hi ha a la Terra.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Està atrapada en forma de gel a les &lt;strong&gt;glaceres i casquets polars&lt;/strong&gt;.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;La major part de l&#x27;aigua dolça del planeta (més del 68%) es troba fàcilment accessible en rius i llacs.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Són la principal reserva d&#x27;aigua dolça líquida del món.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;Els aqüífers subterranis concentren quasi el 30% del total de l&#x27;aigua dolça de tot el planeta.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El clorur sòdic (sal comuna) n&#x27;és el component majoritari.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;La salinitat mitjana dels oceans és d&#x27;uns 35 grams de sals dissoltes per cada litre d&#x27;aigua marina (3,5%).&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;aigua de boca necessita &lt;strong&gt;sals minerals&lt;/strong&gt; essencials per a no alterar l&#x27;equilibri cel·lular.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;L&#x27;aigua destil·lada pura és la més aconsellable per al consum diari de les persones perquè no té cap mineral.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;options&quot;: [{&quot;hint&quot;: &quot;Tret típic de muntanya&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Pendent molt pronunciada i aigües ràpides&quot;}, {&quot;hint&quot;: &quot;Erosió forta de curs alt&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Gran erosió vertical formant valls en &#x27;V&#x27;&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! Els meandres es formen en el curs mitjà i baix amb terreny pla, no a la muntanya!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Grans meandres sinuosos sobre planes d&#x27;inundació&quot;}, {&quot;hint&quot;: &quot;Paisatge de curs alt&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Presència de cascades, congosts i ràpids&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests trets són propis del curs alt o capçalera d&#x27;un riu de muntanya, però un correspon a una altra zona. Quin és?&quot;, &quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Característiques del Curs Alt d&#x27;un Riu&quot;}, {&quot;options&quot;: [{&quot;hint&quot;: &quot;Tractament primari físic de l&#x27;EDAR&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Desbast amb reixes per a retirar sòlids voluminosos&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! La captació d&#x27;embassament és l&#x27;origen de l&#x27;aigua potable per a l&#x27;ETAP, no una fase d&#x27;aigües residuals a l&#x27;EDAR!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Captació directa d&#x27;aigua d&#x27;un embassament de pluja&quot;}, {&quot;hint&quot;: &quot;Tractament de l&#x27;EDAR&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Decantació primària per a sedimentar fangs pesants&quot;}, {&quot;hint&quot;: &quot;Tractament secundari biològic de l&#x27;EDAR&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Digestió biològica amb bacteris aerobis en reactor&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests processos es fan a una depuradora d&#x27;aigües residuals (EDAR), però un és de potabilització (ETAP). Quin és?&quot;, &quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Fases d&#x27;una Estació Depuradora (EDAR)&quot;}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;expected&quot;: &quot;3&quot;, &quot;p_num&quot;: 1, &quot;steps&quot;: &quot;100% - 97% = &lt;strong&gt;3&lt;/strong&gt;% d&#x27;aigua dolça total.&quot;, &quot;text&quot;: &quot;De tota l&#x27;aigua del planeta Terra, el 97% és aigua salada. Quin percentatge d&#x27;aigua dolça queda per a tot el planeta (100 - 97)?&quot;}, {&quot;expected&quot;: &quot;120&quot;, &quot;p_num&quot;: 2, &quot;steps&quot;: &quot;5 litres/hora × 24 hores = &lt;strong&gt;120&lt;/strong&gt; litres d&#x27;aigua malbaratats.&quot;, &quot;text&quot;: &quot;Una aixeta que degota al taller perd 5 litres d&#x27;aigua potable cada hora. Quants litres es perden inútilment en un dia sencer (24 hores)?&quot;}, {&quot;expected&quot;: &quot;150&quot;, &quot;p_num&quot;: 3, &quot;steps&quot;: &quot;200 L - 50 L = &lt;strong&gt;150&lt;/strong&gt; litres d&#x27;estalvi per persona.&quot;, &quot;text&quot;: &quot;Una dutxa de 5 minuts gasta 50 L d&#x27;aigua, mentre que omplir la banyera en gasta 200 L. Quants litres s&#x27;estalvien en triar la dutxa (200 - 50)?&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud9-4', '0')">0</button>
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
    <!-- act-ud9-5 (connect) -->
    <div class="pdi-activity-card" id="act-ud9-5" data-unit="ud9" data-title="Tractaments d'Aigua" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Tractaments d'Aigua i Paràmetres de Taller</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada paràmetre o procés hídric amb la seua funció o valor exacte:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;badge_left&quot;: &quot;Acidesa&quot;, &quot;badge_right&quot;: &quot;Neutralitat&quot;, &quot;id&quot;: 1, &quot;left&quot;: &quot;Mesura de pH de l&#x27;aigua (escala 0 a 14)&quot;, &quot;right&quot;: &quot;pH 7 és neutre; &lt;7 és àcid i &gt;7 és bàsic o alcalí&quot;}, {&quot;badge_left&quot;: &quot;Potabilització&quot;, &quot;badge_right&quot;: &quot;Salubritat&quot;, &quot;id&quot;: 2, &quot;left&quot;: &quot;Cloració de desinfecció a l&#x27;ETAP&quot;, &quot;right&quot;: &quot;Elimina bacteris patògens evitant malalties com el còlera&quot;}, {&quot;badge_left&quot;: &quot;Depuració&quot;, &quot;badge_right&quot;: &quot;Bacteris&quot;, &quot;id&quot;: 3, &quot;left&quot;: &quot;Reactor biològic de llots actius a l&#x27;EDAR&quot;, &quot;right&quot;: &quot;Microorganismes aerobis que digereixen la matèria orgànica&quot;}, {&quot;badge_left&quot;: &quot;Taller&quot;, &quot;badge_right&quot;: &quot;Contenció&quot;, &quot;id&quot;: 4, &quot;left&quot;: &quot;Arqueta separadora de greixos i hidrocarburs&quot;, &quot;right&quot;: &quot;Separació per flotació evitant abocar olis a la xarxa urbana&quot;}]">
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
          <button class="btn-connect-restart" onclick="restartConnectActivity('act-ud9-5')">🔄 Tornar a Jugar</button>
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
      <div class="pdi-speedquiz-container" data-questions="[{&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Les algues cobreixen la superfície i en morir consumeixen tot l&#x27;oxigen de l&#x27;aigua.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;L&#x27;eutrofització és una contaminació per excés d&#x27;adobs (nitrats i fosfats) que provoca una proliferació d&#x27;algues i asfíxia dels peixos.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El clor s&#x27;afig com a &lt;strong&gt;desinfectant&lt;/strong&gt; imprescindible per a eliminar bacteris patògens.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;A l&#x27;ETAP s&#x27;afig clor a l&#x27;aigua perquè aporte sabor fresc i gas a la beguda.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;oli crea una pel·lícula impermeable a la superfície que impedeix l&#x27;oxigenació de l&#x27;aigua.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;Un sol litre d&#x27;oli de cuina usat abocat per l&#x27;aigüera pot arribar a contaminar fins a 1.000 litres d&#x27;aigua neta.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són partícules de &lt;strong&gt;menys de 5 mil·límetres&lt;/strong&gt; que s&#x27;acumulen a la cadena tròfica.&quot;, &quot;is_true&quot;: false, &quot;q&quot;: &quot;Els microplàstics són partícules de més de 10 centímetres que suraven a les costes.&quot;}, {&quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Permet obtindre aigua dolça del mar tot i que consumeix molta electricitat.&quot;, &quot;is_true&quot;: true, &quot;q&quot;: &quot;La dessalinització per osmosi inversa utilitza membranes semipermeables a alta pressió per a separar l&#x27;aigua dolça de la sal.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;options&quot;: [{&quot;hint&quot;: &quot;Tractament primari de l&#x27;EDAR&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Desarenat i desgreixat per flotació física&quot;}, {&quot;hint&quot;: &quot;Tractament secundari clau&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Tractament biològic amb llots actius i airejament&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! Això és un procés de fàbrica de refrescos industrials, no d&#x27;una depuradora pública!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Gasificació amb bombolles de sucre per a embotellar&quot;}, {&quot;hint&quot;: &quot;Fase final de separació&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Decantació secundària per a separar fangs clarificats&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests passos formen part del tractament d&#x27;una EDAR, però un no es fa a la depuradora. Quin és?&quot;, &quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Processos de l&#x27;EDAR (Depuradora)&quot;}, {&quot;options&quot;: [{&quot;hint&quot;: &quot;Aigua dolça superficial&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Rius i afluents d&#x27;alta muntanya&quot;}, {&quot;hint&quot;: &quot;Aigua dolça superficial&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Llacs i llacunes naturals&quot;}, {&quot;hint&quot;: &quot;INTRÚS TROBAT! La Mar Mediterrània és una massa d&#x27;aigua salada oceànica, no aigua continental!&quot;, &quot;is_intrus&quot;: true, &quot;text&quot;: &quot;Mar Mediterrània&quot;}, {&quot;hint&quot;: &quot;Aigua dolça superficial retinguda&quot;, &quot;is_intrus&quot;: false, &quot;text&quot;: &quot;Embassaments artificials de conca&quot;}], &quot;question&quot;: &quot;Tres d&#x27;aquests cossos d&#x27;aigua són aigües dolces superficials de terra endins, però un és marí d&#x27;aigua salada. Quin és?&quot;, &quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aigües Dolces Superficials Continentals&quot;}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;expected&quot;: &quot;10000&quot;, &quot;p_num&quot;: 1, &quot;steps&quot;: &quot;2.500 L × 4 = &lt;strong&gt;10000&lt;/strong&gt; litres d&#x27;aigua consumits.&quot;, &quot;text&quot;: &quot;Per a fabricar una sola samarreta de cotó es consumeixen uns 2.500 litres d&#x27;aigua. Quants litres d&#x27;aigua es necessiten per a produir un lot de &lt;strong&gt;4 samarretes&lt;/strong&gt;?&quot;}, {&quot;expected&quot;: &quot;12&quot;, &quot;p_num&quot;: 2, &quot;steps&quot;: &quot;1.200 L / 100 L/hora = &lt;strong&gt;12&lt;/strong&gt; hores.&quot;, &quot;text&quot;: &quot;El dipòsit d&#x27;aigua potable d&#x27;un refugi de muntanya conté 1.200 litres. Si es produeix una fuita constant de 100 litres per hora, quantes hores tardarà a buidar-se completament?&quot;}, {&quot;expected&quot;: &quot;180&quot;, &quot;p_num&quot;: 3, &quot;steps&quot;: &quot;200 kg × 0,90 = &lt;strong&gt;180&lt;/strong&gt; kg de residus retinguts.&quot;, &quot;text&quot;: &quot;Una depuradora comarcal rep 200 kg de sòlids en suspensió cada hora i aconsegueix retirar-ne el 90% als decantadors. Quants kg de fang sòlid aconsegueix retenir (200 × 0,90)?&quot;}]">
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

            <button class="kp-key" onclick="pressKeypad('act-ud9-9', '0')">0</button>
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
    <!-- act-ud9-10 (case) -->
    <div class="pdi-activity-card" id="act-ud9-10" data-unit="ud9" data-title="Gestió Residus i Estalvi" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD9 · R10 · Cas de Taller</span>
        <h3>🛠️ Cas Pràctic de Taller: Gestió de Residus Líquids i Eficiència Hídrica</h3>
      </div>
      <p class="pdi-instruction">Resol cada situació ambiental i de consum d'aigua al lloc de treball:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;context&quot;: &quot;En buidar el càrter d&#x27;un vehicle, una garrafa bolca i es vessen &lt;strong&gt;4 litres d&#x27;oli mineral usat&lt;/strong&gt; a terra al costat d&#x27;un embornal de pluvials del pati exterior del taller.&quot;, &quot;options&quot;: [{&quot;exp&quot;: &quot;Exacte! L&#x27;oli és un residu tòxic perillós. Mai s&#x27;ha de netejar amb mànega d&#x27;aigua cap al desguàs.&quot;, &quot;is_correct&quot;: true, &quot;text&quot;: &quot;Escampar immediatament sepiolita o arena absorbent de taller, recollir amb pala en bidó de residus perillosos i no usar aigua cap a l&#x27;embornal&quot;}, {&quot;exp&quot;: &quot;Delicte ambiental molt greu! Un sol litre d&#x27;oli pot contaminar 1.000 litres d&#x27;aigua al riu o mar.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Agafar la mànega d&#x27;aigua a pressió i enviar ràpidament l&#x27;oli cap a l&#x27;embornal&quot;}, {&quot;exp&quot;: &quot;Crearia una mescla encara més tòxica i perillosa per al sòl i els treballadors.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;Tirar lleixiu o dissolvent per damunt per a &#x27;cremar&#x27; l&#x27;oli&quot;}], &quot;question&quot;: &quot;Com a professionals de manteniment, quina és l&#x27;actuació ambiental correcta?&quot;, &quot;title&quot;: &quot;📋 Cas 1: Vessament Accidental d&#x27;Oli Mineral&quot;}, {&quot;case_num&quot;: 2, &quot;context&quot;: &quot;A la zona de neteja d&#x27;un taller o restaurant es detecta que la màquina gasta &lt;strong&gt;80 litres d&#x27;aigua per cicle&lt;/strong&gt; per descalibratge d&#x27;electrovàlvula. El tècnic la substitueix per una vàlvula eficient que gasta només &lt;strong&gt;20 litres per cicle&lt;/strong&gt;. Es fan &lt;strong&gt;10 cicles de rentat al dia&lt;/strong&gt;.&quot;, &quot;options&quot;: [{&quot;exp&quot;: &quot;Estalvi formidable! 60 litres × 10 = 600 litres d&#x27;aigua al dia (18.000 litres al mes d&#x27;estalvi ecològic i econòmic).&quot;, &quot;is_correct&quot;: true, &quot;text&quot;: &quot;600 litres d&#x27;aigua estalviats al dia (60 L d&#x27;estalvi per cicle × 10 cicles)&quot;}, {&quot;exp&quot;: &quot;Aquest seria el consum del model nou (20 × 10), no pas l&#x27;estalvi aconseguit.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;200 litres al dia&quot;}, {&quot;exp&quot;: &quot;Aquest era el malbaratament total inicial, no la diferència.&quot;, &quot;is_correct&quot;: false, &quot;text&quot;: &quot;800 litres al dia&quot;}], &quot;question&quot;: &quot;Quants litres d&#x27;aigua potable s&#x27;estalviaran cada dia amb la reparació ((80 - 20) × 10)?&quot;, &quot;title&quot;: &quot;📋 Cas 2: Estalvi d&#x27;Aigua en Maquinària de Rentat&quot;}]">
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
          <button class="btn-case-next" onclick="nextCaseScenario('act-ud9-10')" style="display: none;">Següent Cas Pràctic ➔</button>
        </div>
        <div class="case-summary-box" style="display: none;">
          <div class="case-summary-trophy">🏆</div>
          <h4>Casos Pràctics de Taller Completats amb Èxit!</h4>
          <button class="btn-case-restart" onclick="restartCaseActivity('act-ud9-10')">🔄 Tornar a Practicar</button>
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
<script src="{{ 'pissarra-interactiva.js' | relative_url }}?v=5"></script>
<script src="pissarra-interactiva.js?v=5"></script>
