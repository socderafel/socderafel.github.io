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
          <span class="act-idx">🔗 Càlculs de Taller</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-6" onclick="launchGameActivity('act-ud1-6')">
          <span class="act-idx">🧩 Ordre de Jerarquia</span>
          <span class="act-name">R6 · Prioritat PEMDAS</span>
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
          <span class="act-idx">🔢 Pressupost de Taller</span>
          <span class="act-name">R9 · Càlcul de Taller</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud1-10" onclick="launchGameActivity('act-ud1-10')">
          <span class="act-idx">🛠️ Magatzem i Factura</span>
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
          <span class="act-idx">🧩 Complexitat Biològica</span>
          <span class="act-name">R1 · Nivells Biològics</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-2" onclick="launchGameActivity('act-ud2-2')">
          <span class="act-idx">⚡ Digestió i Nutrients</span>
          <span class="act-name">R2 · Speed Quiz Nutrició</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-3" onclick="launchGameActivity('act-ud2-3')">
          <span class="act-idx">🕵️ Aparells i Nutrients</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-4" onclick="launchGameActivity('act-ud2-4')">
          <span class="act-idx">🔢 Càlcul Energètic</span>
          <span class="act-name">R4 · Càlcul Calòric (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-5" onclick="launchGameActivity('act-ud2-5')">
          <span class="act-idx">🔗 Òrgans i Fisiologia</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-6" onclick="launchGameActivity('act-ud2-6')">
          <span class="act-idx">🧩 Seqüència Digestiva</span>
          <span class="act-name">R6 · Trànsit Digestiu</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-7" onclick="launchGameActivity('act-ud2-7')">
          <span class="act-idx">⚡ Aparells de Suport</span>
          <span class="act-name">R7 · Speed Quiz Circulatori</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-8" onclick="launchGameActivity('act-ud2-8')">
          <span class="act-idx">🕵️ Hematologia i Hàbits</span>
          <span class="act-name">R8 · Sang i Salut</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud2-9" onclick="launchGameActivity('act-ud2-9')">
          <span class="act-idx">🔢 Balanç Hídric i Sang</span>
          <span class="act-name">R9 · Fisiologia i Treball</span>
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
          <span class="act-idx">🔗 Balanços Industrials</span>
          <span class="act-name">R5 · Connecta Parelles</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud3-6" onclick="launchGameActivity('act-ud3-6')">
          <span class="act-idx">🧩 Jerarquia Aritmètica</span>
          <span class="act-name">R6 · Resolució Pas a Pas</span>
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
          <span class="act-idx">🧩 Criteris 2, 3, 5</span>
          <span class="act-name">R1 · Criteris Divisibilitat</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-2" onclick="launchGameActivity('act-ud4-2')">
          <span class="act-idx">⚡ Primers i Divisors</span>
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
          <span class="act-idx">🧩 Passos MCD i MCM</span>
          <span class="act-name">R6 · Algorisme de Càlcul</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-7" onclick="launchGameActivity('act-ud4-7')">
          <span class="act-idx">⚡ MCD vs MCM</span>
          <span class="act-name">R7 · Speed Quiz Problemes</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-8" onclick="launchGameActivity('act-ud4-8')">
          <span class="act-idx">🕵️ Divisors i Múltiples</span>
          <span class="act-name">R8 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-9" onclick="launchGameActivity('act-ud4-9')">
          <span class="act-idx">🔢 Logística de Taller</span>
          <span class="act-name">R9 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud4-10" onclick="launchGameActivity('act-ud4-10')">
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
      <div class="card-title"><span class="unit-icon">🥧</span> <h3>UD5 · Les Fraccions</h3></div>
      <p class="card-desc">Concepte, fraccions equivalents, reducció a comú denominador (m.c.m.), operacions bàsiques i jerarquia.</p>
      <div class="card-acts-list">
        <button class="btn-launch-act" data-act-id="act-ud5-1" onclick="launchGameActivity('act-ud5-1')">
          <span class="act-idx">🧩 Pròpies, Impròpies o Unitat</span>
          <span class="act-name">R1 · Classificació Fraccions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-2" onclick="launchGameActivity('act-ud5-2')">
          <span class="act-idx">⚡ Conceptes de Fraccions</span>
          <span class="act-name">R2 · Speed Quiz (5P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-3" onclick="launchGameActivity('act-ud5-3')">
          <span class="act-idx">🕵️ Equivalència i Simplificació</span>
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
          <span class="act-idx">🧩 Algorisme Suma Fraccions</span>
          <span class="act-name">R6 · Suma amb m.c.m.</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-7" onclick="launchGameActivity('act-ud5-7')">
          <span class="act-idx">⚡ Producte i Quocient</span>
          <span class="act-name">R7 · Speed Quiz Operacions</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud5-8" onclick="launchGameActivity('act-ud5-8')">
          <span class="act-idx">🕵️ Operacions Discordants</span>
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
          <span class="act-idx">🕵️ Tipus de Planetes i Cossos</span>
          <span class="act-name">R3 · Troba l'Intrús (2R)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-4" onclick="launchGameActivity('act-ud6-4')">
          <span class="act-idx">🔢 Astronomia Numèrica</span>
          <span class="act-name">R4 · Càlcul Tàctil (3P)</span>
          <span class="act-arrow">➔</span>
        </button>        <button class="btn-launch-act" data-act-id="act-ud6-5" onclick="launchGameActivity('act-ud6-5')">
          <span class="act-idx">🔗 Tecnologia Còsmica</span>
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
          <span class="act-idx">🕵️ Satèl·lits i Nans</span>
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
    <div class="pdi-activity-card" id="act-ud1-2" data-unit="ud1" data-title="Propietats i Càlcul" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R2 · Speed Quiz (5P)</span>
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
    <div class="pdi-activity-card" id="act-ud1-3" data-unit="ud1" data-title="Tipus de Nombres" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R3 · Troba l'Intrús (2R)</span>
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
    <div class="pdi-activity-card" id="act-ud1-4" data-unit="ud1" data-title="Operacions i Arrels" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R4 · Càlcul Tàctil (3P)</span>
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
    <div class="pdi-activity-card" id="act-ud1-5" data-unit="ud1" data-title="Càlculs de Taller" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R5 · Connecta Parelles</span>
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
    <div class="pdi-activity-card" id="act-ud1-6" data-unit="ud1" data-title="Ordre de Jerarquia" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R6 · Prioritat PEMDAS</span>
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
    <div class="pdi-activity-card" id="act-ud1-7" data-unit="ud1" data-title="Lleis de Potències" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R7 · Speed Quiz Potències</span>
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
    <div class="pdi-activity-card" id="act-ud1-8" data-unit="ud1" data-title="Errors de Càlcul" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R8 · Càlculs Errònis</span>
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
    <div class="pdi-activity-card" id="act-ud1-9" data-unit="ud1" data-title="Pressupost de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R9 · Càlcul de Taller</span>
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
    <div class="pdi-activity-card" id="act-ud1-10" data-unit="ud1" data-title="Magatzem i Factura" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #2563eb;">UD1 · R10 · Cas de Taller</span>
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
    <div class="pdi-activity-card" id="act-ud2-1" data-unit="ud2" data-title="Complexitat Biològica" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R1 · Nivells Biològics</span>
        <h3>🧬 Nivells d'Organització de la Matèria Viva</h3>
      </div>
      <p class="pdi-instruction">Arrossega els nivells biològics des del més simple (microscòpic) al més complex (organisme integrat):</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Nivell Cel·lular (unitat morfològica i funcional autònoma)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Nivell de Teixit (agrupació de cèl·lules similars amb una funció comuna)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Nivell d'Òrgan (estructura anatòmica integrada com el cor o l'estómac)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Nivell d'Aparell o Sistema (conjunt d'òrgans coordinats per a una funció vital)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Nivell d'Organisme Pluricel·lular (l'ésser viu complet com a individu autònom)</div>
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
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-1')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-2 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-2" data-unit="ud2" data-title="Digestió i Nutrients" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R2 · Speed Quiz Nutrició</span>
        <h3>⚡ Speed Quiz: Nutrició Cel·lular i Fisiologia Digestiva</h3>
      </div>
      <p class="pdi-instruction">Respon ràpidament si cada afirmació de biologia humana és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Alimentar-se i nutrir-se són processos biològicament diferents: alimentar-se és un acte voluntari i conscient, mentre que la nutrició és involuntària i cel·lular.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La nutrició inclou la digestió, respiració, circulació i excreció a nivell cel·lular.&quot;}, {&quot;q&quot;: &quot;La digestió química dels glúcids com el midó comença a la boca gràcies a l&#x27;enzim amilasa salival.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La saliva conté ptialina (amilasa) que trenca els enllaços dels polisacàrids.&quot;}, {&quot;q&quot;: &quot;La bilis conté enzims que destrueixen completament les proteïnes a l&#x27;estómac.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La bilis és fabricada pel fetge, no conté enzims digestius i serveix per a &lt;strong&gt;emulsionar els greixos&lt;/strong&gt; a l&#x27;intestí prim.&quot;}, {&quot;q&quot;: &quot;La major part de l&#x27;absorció dels nutrients cap a la sang té lloc a l&#x27;estómac.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;absorció ocorre a les &lt;strong&gt;vellositats de l&#x27;intestí prim&lt;/strong&gt;. L&#x27;estómac fa digestió mecànica i química del quim.&quot;}, {&quot;q&quot;: &quot;L&#x27;intestí gros recupera la major part de l&#x27;aigua i sals minerals dels residus no digeribles abans de formar la femta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Evita la pèrdua descontrolada d&#x27;aigua de l&#x27;organisme.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-3" data-unit="ud2" data-title="Aparells i Nutrients" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Aparells del Cos Humà i Balanç Nutricional</h3>
      </div>
      <p class="pdi-instruction">Tria l'element intrús que no pertany a la categoria científica assenyalada:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Aparell Digestiu Humà&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements formen part de l&#x27;aparell digestiu humà, però un pertany al sistema respiratori. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Esòfag&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tub muscular que condueix el bol alimentari a l&#x27;estómac.&quot;}, {&quot;text&quot;: &quot;Tràquea&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La tràquea és una via respiratòria cartilaginosa que porta aire als pulmons!&quot;}, {&quot;text&quot;: &quot;Pàncrees&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glàndula annexa digestiva que secreta suc pancreàtic.&quot;}, {&quot;text&quot;: &quot;Intestí prim&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Òrgan principal d&#x27;absorció de nutrients.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Nutrients que Aporten Energia Calòrica&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests nutrients aporten calories en ser metabolitzats per les cèl·lules, però un NO aporta energia. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Glúcids&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aporten aproximadament 4 kcal/g.&quot;}, {&quot;text&quot;: &quot;Proteïnes&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aporten aproximadament 4 kcal/g.&quot;}, {&quot;text&quot;: &quot;Aigua i sals minerals&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;aigua i les sals són nutrients reguladors imprescindibles, però tenen 0 kcal d&#x27;energia!&quot;}, {&quot;text&quot;: &quot;Lípids&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aporten aproximadament 9 kcal/g.&quot;}]}]">
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
        <h3>🔢 Teclat Mental: Valor Calòric i Fisiologia Cardiovascular</h3>
      </div>
      <p class="pdi-instruction">Calcula la quantitat requerida i escriu-la amb el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un àpat de taller aporta 75 g de glúcids (a 4 kcal/g), 25 g de proteïnes (a 4 kcal/g) i 10 g de greixos lípids (a 9 kcal/g). Quantes kcal totals aporta aquest menú?&quot;, &quot;expected&quot;: &quot;490&quot;, &quot;steps&quot;: &quot;75×4 = 300 kcal  ➔  25×4 = 100 kcal  ➔  10×9 = 90 kcal  ➔  300 + 100 + 90 = &lt;strong&gt;490 kcal&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En repòs el cor batega a 72 pulsacions per minut. Quants batecs efectua el miocardi al cap de 30 minuts de descans?&quot;, &quot;expected&quot;: &quot;2160&quot;, &quot;steps&quot;: &quot;72 batecs/min × 30 minuts = &lt;strong&gt;2160 batecs&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un treballador requereix una dieta de 2.400 kcal diàries per la seua despesa física. Si es recomana que el 15% d&#x27;aquestes calories provinguen de proteïnes, quantes kcal de proteïna ha d&#x27;ingerir al dia?&quot;, &quot;expected&quot;: &quot;360&quot;, &quot;steps&quot;: &quot;2.400 kcal × 0,15 = &lt;strong&gt;360 kcal&lt;/strong&gt; de proteïna.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-5" data-unit="ud2" data-title="Òrgans i Fisiologia" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Òrgans de la Nutrició i Missió Cel·lular</h3>
      </div>
      <p class="pdi-instruction">Relaciona cada òrgan o aparell de l'esquerra amb la seua funció vital a la dreta:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;left&quot;: &quot;Pulmons i Alvèols&quot;, &quot;right&quot;: &quot;Intercanvi de gasos: oxigenació de la sang i expulsió de CO₂&quot;}, {&quot;id&quot;: 2, &quot;left&quot;: &quot;Vellositats de l&#x27;Intestí Prim&quot;, &quot;right&quot;: &quot;Absorció activa de nutrients (glucosa i aminoàcids) cap a la sang&quot;}, {&quot;id&quot;: 3, &quot;left&quot;: &quot;Ronyons i Nefrones&quot;, &quot;right&quot;: &quot;Filtració de sang per a separar urea i tòxics en forma d&#x27;orina&quot;}, {&quot;id&quot;: 4, &quot;left&quot;: &quot;Miocardi del Cor&quot;, &quot;right&quot;: &quot;Impuls de sang a doble circuit per tota la xarxa vascular&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-6" data-unit="ud2" data-title="Seqüència Digestiva" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R6 · Trànsit Digestiu</span>
        <h3>🍎 Seqüència Anatòmica del Tub Digestiu Humà</h3>
      </div>
      <p class="pdi-instruction">Arrossega els òrgans en l'ordre estricte de trànsit del bol alimentari des de la ingestió fins a l'evacuació:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Boca i Glàndules Salivals (trituració mecànica i insalivació)</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Faringe i Vàlvula Epiglotis (deglució i protecció de la via aèria)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Esòfag (propulsió activa per ones peristàltiques)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Estómac (acció de l'àcid clorhídric i pepsina per a formar el quim)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Intestí Prim (acció de bilis i sucs pancreàtics, absorció de quil)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Intestí Gros i Recte (recuperació d'aigua, flora i expulsió de femta)</div>
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
        <button class="btn-pdi-check" onclick="checkOrderActivity('act-ud2-6')">Comprovar Resposta 🚀</button>
        <div class="pdi-status-msg"></div>
      </div>
    </div>
    <!-- act-ud2-7 (speedquiz) -->
    <div class="pdi-activity-card" id="act-ud2-7" data-unit="ud2" data-title="Aparells de Suport" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R7 · Speed Quiz Circulatori</span>
        <h3>⚡ Speed Quiz: Circulació, Respiració i Excreció</h3>
      </div>
      <p class="pdi-instruction">Respon VERITAT o FALS a les qüestions anatòmiques i fisiològiques:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les artèries transporten la sang que ix dels ventricles cap als òrgans a alta pressió, mentre que les venes la retornen al cor.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Les artèries posseeixen parets elàstiques i musculars reforçades.&quot;}, {&quot;q&quot;: &quot;La circulació humana és simple i incompleta perquè la sang oxigenada es barreja amb la venosa a l&#x27;interior del cor.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La circulació humana és &lt;strong&gt;doble i completa&lt;/strong&gt; (la sang oxigenada i la desoxigenada mai es barregen).&quot;}, {&quot;q&quot;: &quot;Els glòbuls rojos contenen hemoglobina per al transport d&#x27;oxigen, mentre que els glòbuls blancs s&#x27;encarreguen de la defensa immunitària.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; A més, les plaquetes activen la coagulació davant de ferides.&quot;}, {&quot;q&quot;: &quot;El diafragma és el múscul respiratori principal que descendeix en contraure&#x27;s durant la inspiració, augmentant el volum toràcic.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Això genera pressió negativa que succiona l&#x27;aire cap als pulmons.&quot;}, {&quot;q&quot;: &quot;L&#x27;orina es forma a la bufeta urinària i després és enviada als ronyons per a la seua purificació.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;orina es forma als &lt;strong&gt;ronyons (nefrones)&lt;/strong&gt; i la bufeta només és un dipòsit muscular d&#x27;emmagatzematge temporal.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud2-8" data-unit="ud2" data-title="Hematologia i Hàbits" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R8 · Sang i Salut</span>
        <h3>🕵️ Troba l'Intrús: Components Sanguinis i Salut Cardiovascular</h3>
      </div>
      <p class="pdi-instruction">Identifica quin element no encaixa en la categoria proposada:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Elements Formes de la Sang&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són cèl·lules o fragments cel·lulars presents a la sang circulant, però un és un òrgan limfàtic. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Eritròcits&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glòbuls rojos encarregats del transport d&#x27;O₂.&quot;}, {&quot;text&quot;: &quot;Leucòcits&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Glòbuls blancs de defensa immunitària.&quot;}, {&quot;text&quot;: &quot;Melsa&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La melsa és un òrgan del sistema limfàtic, no una cèl·lula sanguínia!&quot;}, {&quot;text&quot;: &quot;Trombòcits&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Plaquetes encarregades de la coagulació.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Prevenció Cardiovascular&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests hàbits protegeixen el sistema cardíac i arterial, però un és un factor de risc greu d&#x27;arteriosclerosi. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Exercici aeròbic regular moderat&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Enforteix el miocardi i millora la circulació.&quot;}, {&quot;text&quot;: &quot;Consum habitual de greixos trans i tabac&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El tabac i els greixos trans obstrueixen les artèries coronàries i eleven la pressió arterial!&quot;}, {&quot;text&quot;: &quot;Dieta mediterrània rica en fibra i àcids insaturats&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Ajuda a regular el colesterol LDL.&quot;}, {&quot;text&quot;: &quot;Control de la pressió arterial i ingesta hídrica&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Hàbit preventiu fonamental.&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud2-9" data-unit="ud2" data-title="Balanç Hídric i Sang" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #16a34a;">UD2 · R9 · Fisiologia i Treball</span>
        <h3>🔢 Teclat Mental: Balanç Hídric i Paràmetres Fisiològics</h3>
      </div>
      <p class="pdi-instruction">Resol cada càlcul fisiològic i escriu el valor numèric exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un operari sotmés a esforç físic té unes pèrdues hídriques diàries de 2.800 ml. Si amb la dieta sòlida en recupera 850 ml, quants mil·lilitres d&#x27;aigua líquida ha de beure per a mantindre el balanç neutre?&quot;, &quot;expected&quot;: &quot;1950&quot;, &quot;steps&quot;: &quot;2.800 ml - 850 ml = &lt;strong&gt;1950 ml&lt;/strong&gt; (quasi 2 litres d&#x27;aigua).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En condicions de treball intens, el cor d&#x27;un treballador batega a 120 pulsacions per minut. Si en cada batec injecta 75 ml de sang, quants mil·lilitres de sang bomba el miocardi en 1 sol minut?&quot;, &quot;expected&quot;: &quot;9000&quot;, &quot;steps&quot;: &quot;120 batecs/min × 75 ml/batec = &lt;strong&gt;9000 ml/min&lt;/strong&gt; (9 litres per minut!).&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una persona adulta té un volum sanguini de 5.000 ml de sang. Si el plasma líquid representa el 55% d&#x27;aquest volum, quants mil·lilitres de plasma té?&quot;, &quot;expected&quot;: &quot;2750&quot;, &quot;steps&quot;: &quot;5.000 ml × 0,55 = &lt;strong&gt;2750 ml&lt;/strong&gt; de plasma sanguini.&quot;}]">
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
      <p class="pdi-instruction">Analitza cada emergència laboral i tria el protocol d'actuació correcte:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Operari amb Mareig i Rampes en Estiu&quot;, &quot;context&quot;: &quot;En un taller mecànic a ple mes de juliol a 34 °C, un operari fa tasques de càrrega pesant durant 5 hores. Ha begut només dos cafès i begudes energètiques ensucrades. De sobte comença a patir rampes doloroses a les cames, pell freda i mareig intens.&quot;, &quot;question&quot;: &quot;Com a tècnic/a de riscos laborals i primer intervinent, quina és l&#x27;actuació correcta immediata?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Desplaçar a lloc fresc, afluixar la roba i administrar aigua fresca amb sals d&#x27;hidratació oral&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Correctíssim! El quadre és de deshidratació per suor profusa amb pèrdua d&#x27;electròlits. Cal reposar aigua i sals immediatament.&quot;}, {&quot;text&quot;: &quot;Subministrar un entrepà gras i un altre café calent&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Molt perillós! La cafeïna té efecte diürètic i agreujarà la pèrdua d&#x27;aigua corporal.&quot;}, {&quot;text&quot;: &quot;Obligar-lo a continuar el treball per a evitar que se li refreden els músculs&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Negligència greu! Podria desencadenar un colp de calor potencialment mortal.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Ennuegament a l&#x27;Hora d&#x27;Esmorzar&quot;, &quot;context&quot;: &quot;Durant la pausa de descans al menjador del taller, un company s&#x27;ennuega amb un tros sòlid d&#x27;aliment. S&#x27;emporta les dues mans al coll (senyal universal d&#x27;asfíxia), té els ulls espantats, no pot tossir amb força ni parlar i comença a posar-se blavós.&quot;, &quot;question&quot;: &quot;Quina maniobra de suport vital bàsic s&#x27;ha d&#x27;aplicar de manera immediata?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aplicar compressions abdominals ràpides cap endins i cap amunt (Maniobra de Heimlich)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Actuació salvavides! Augmenta la pressió intratoràcica i expulsa el cos estrany de la via aèria com un tap.&quot;}, {&quot;text&quot;: &quot;Ficar els dits a cegues a l&#x27;interior de la boca per a intentar traure l&#x27;objecte&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Molt perillós! Ficar els dits a cegues pot espentar el cos estrany encara més avall cap a la glotis.&quot;}, {&quot;text&quot;: &quot;Oferir-li un got d&#x27;aigua gran perquè s&#x27;ho empasse ràpidament&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Totalment contraindicat! L&#x27;aigua podria inundar la tràquea obstruïda agreujant l&#x27;ofegament.&quot;}]}]">
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
    <div class="pdi-activity-card" id="act-ud3-2" data-unit="ud3" data-title="Regla dels Signes" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R2 · Speed Quiz Signes</span>
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
    <div class="pdi-activity-card" id="act-ud3-3" data-unit="ud3" data-title="Operacions d'Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R3 · Troba l'Intrús (2R)</span>
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
    <div class="pdi-activity-card" id="act-ud3-4" data-unit="ud3" data-title="Càlculs amb Enters" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R4 · Càlcul Tàctil (3P)</span>
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
    <div class="pdi-activity-card" id="act-ud3-5" data-unit="ud3" data-title="Balanços Industrials" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R5 · Connecta Parelles</span>
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
    <div class="pdi-activity-card" id="act-ud3-6" data-unit="ud3" data-title="Jerarquia Aritmètica" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R6 · Resolució Pas a Pas</span>
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
    <div class="pdi-activity-card" id="act-ud3-7" data-unit="ud3" data-title="Signes de Potències" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R7 · Potències Enters</span>
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
    <div class="pdi-activity-card" id="act-ud3-8" data-unit="ud3" data-title="Resultats d'Enters" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R8 · Potències d'Enters</span>
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
    <div class="pdi-activity-card" id="act-ud3-9" data-unit="ud3" data-title="Desnivell i Deutes" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R9 · Càlcul d'Altitud</span>
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
    <div class="pdi-activity-card" id="act-ud3-10" data-unit="ud3" data-title="Climatització i Finances" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #d97706;">UD3 · R10 · Gestió Tècnica</span>
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
    <div class="pdi-activity-card" id="act-ud4-1" data-unit="ud4" data-title="Criteris 2, 3, 5" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R1 · Criteris Divisibilitat</span>
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
    <div class="pdi-activity-card" id="act-ud4-2" data-unit="ud4" data-title="Primers i Divisors" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R2 · Speed Quiz (5P)</span>
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
    <div class="pdi-activity-card" id="act-ud4-3" data-unit="ud4" data-title="Primers i Factors" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R3 · Troba l'Intrús (2R)</span>
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
    <div class="pdi-activity-card" id="act-ud4-4" data-unit="ud4" data-title="Càlcul d'MCD i MCM" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R4 · Càlcul Tàctil (3P)</span>
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
    <div class="pdi-activity-card" id="act-ud4-5" data-unit="ud4" data-title="Engranatges i Mides" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R5 · Connecta Parelles</span>
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
    <div class="pdi-activity-card" id="act-ud4-6" data-unit="ud4" data-title="Passos MCD i MCM" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R6 · Algorisme de Càlcul</span>
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
    <div class="pdi-activity-card" id="act-ud4-7" data-unit="ud4" data-title="MCD vs MCM" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R7 · Speed Quiz Problemes</span>
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
    <div class="pdi-activity-card" id="act-ud4-8" data-unit="ud4" data-title="Divisors i Múltiples" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R8 · Troba l'Intrús (2R)</span>
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
    <div class="pdi-activity-card" id="act-ud4-9" data-unit="ud4" data-title="Logística de Taller" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R9 · Càlcul Tàctil (3P)</span>
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
    <div class="pdi-activity-card" id="act-ud4-10" data-unit="ud4" data-title="Tall de Cables i Cicles" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0284c7;">UD4 · R10 · Cas de Taller</span>
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
    <div class="pdi-activity-card" id="act-ud5-1" data-unit="ud5" data-title="Pròpies, Impròpies o Unitat" data-format="category">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R1 · Classificació Fraccions</span>
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
    <div class="pdi-activity-card" id="act-ud5-2" data-unit="ud5" data-title="Conceptes de Fraccions" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R2 · Speed Quiz (5P)</span>
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
    <div class="pdi-activity-card" id="act-ud5-3" data-unit="ud5" data-title="Equivalència i Simplificació" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R3 · Troba l'Intrús (2R)</span>
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
    <div class="pdi-activity-card" id="act-ud5-4" data-unit="ud5" data-title="Fracció d'una Quantitat" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R4 · Càlcul Tàctil (3P)</span>
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
    <div class="pdi-activity-card" id="act-ud5-5" data-unit="ud5" data-title="Proporcions de Taller" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R5 · Connecta Parelles</span>
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
    <div class="pdi-activity-card" id="act-ud5-6" data-unit="ud5" data-title="Algorisme Suma Fraccions" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R6 · Suma amb m.c.m.</span>
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
    <div class="pdi-activity-card" id="act-ud5-7" data-unit="ud5" data-title="Producte i Quocient" data-format="speedquiz">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R7 · Speed Quiz Operacions</span>
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
    <div class="pdi-activity-card" id="act-ud5-8" data-unit="ud5" data-title="Operacions Discordants" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R8 · Troba l'Intrús (2R)</span>
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
    <div class="pdi-activity-card" id="act-ud5-9" data-unit="ud5" data-title="Taller amb Fraccions" data-format="keypad">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R9 · Càlcul Tàctil (3P)</span>
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
    <div class="pdi-activity-card" id="act-ud5-10" data-unit="ud5" data-title="Dosificació i Producció" data-format="case">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #7c3aed;">UD5 · R10 · Cas de Taller</span>
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
    <div class="pdi-activity-card" id="act-ud6-1" data-unit="ud6" data-title="De Menor a Major" data-format="order">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R1 · Escala Còsmica</span>
        <h3>🔭 L'Escala Còsmica: Dels Cossos Menors a l'Univers</h3>
      </div>
      <p class="pdi-instruction">Ordena les 6 estructures còsmiques des de la menor escala física fins a la més gegantina:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Asteroide o meteoroid rocós</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Planeta rocós o gasós</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Estrella (Sol)</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Sistema planetari (Sistema Solar)</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Galàxia (Via Làctia)</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Univers observable</div>
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
      <p class="pdi-instruction">Respon si cada qüestió d'astronomia és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;La teoria científica més sòlida sobre l&#x27;origen de l&#x27;Univers és la del Big Bang fa aproximadament 13.800 milions d&#x27;anys.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;Univers va començar a expandir-se des d&#x27;un estat d&#x27;alta densitat i temperatura inicials.&quot;}, {&quot;q&quot;: &quot;Un any llum és una mesura de temps que indica quants anys triga la Terra a orbitar el Sol.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;any llum és una unitat de &lt;strong&gt;DISTÀNCIA&lt;/strong&gt;: el camí que recorre la llum en un any a 300.000 km/s (uns 9,46 bilions de km)!&quot;}, {&quot;q&quot;: &quot;El Sol és una estrella de mida mitjana situada en un braç espiral de la galàxia Via Làctia.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El Sistema Solar es troba al Braç d&#x27;Orió.&quot;}, {&quot;q&quot;: &quot;La Unitat Astronòmica (UA) és la distància mitjana existent entre la Terra i la Lluna.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La UA és la distància mitjana entre la &lt;strong&gt;Terra i el SOL&lt;/strong&gt; (uns 150 milions de quilòmetres)!&quot;}, {&quot;q&quot;: &quot;La velocitat de la llum en el buit és una constant universal propera als 300.000 quilòmetres per segon.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Cap partícula amb massa pot igualar o superar aquest límit físic.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud6-3" data-unit="ud6" data-title="Tipus de Planetes i Cossos" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R3 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Classificació dels Cossos Celestes</h3>
      </div>
      <p class="pdi-instruction">Detecta quin astre no pertany a la categoria en cada ronda:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Planetes Rocosos Interiors (Tel·lúrics)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests planetes són ROCOSOS i estan a l&#x27;interior del cinturó d&#x27;asteroides, però un és un GEGANT GASÓS. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Mercuri&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Mercuri és rocós.&quot;}, {&quot;text&quot;: &quot;Mart&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Mart és rocós.&quot;}, {&quot;text&quot;: &quot;Saturn&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Saturn és un planeta exterior gegant gasós, no és rocós!&quot;}, {&quot;text&quot;: &quot;Venus&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Venus és rocós.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Cossos Lluminosos vs Cossos Il·luminats&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests astres NO tenen llum pròpia i només reflecteixen la radiació solar, però un té llum pròpia per fusió nuclear. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;La Lluna&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit rocós sense llum pròpia.&quot;}, {&quot;text&quot;: &quot;Mart&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Planeta que reflecteix llum solar.&quot;}, {&quot;text&quot;: &quot;El Sol&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El Sol és una estrella que produeix energia i llum pròpia per fusió nuclear d&#x27;hidrogen!&quot;}, {&quot;text&quot;: &quot;Cometa Halley&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Cos de gel i pols que reflecteix llum.&quot;}]}]">
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
        <h3>🔢 Teclat Mental: Càlculs de Distàncies i Temps Còsmics</h3>
      </div>
      <p class="pdi-instruction">Resol els càlculs astronòmics i introdueix el valor exacte:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La llum viatja en el buit a &lt;strong&gt;300.000 km/s&lt;/strong&gt; i la distància mitjana de la Terra al Sol és de &lt;strong&gt;150.000.000 km&lt;/strong&gt;. Quants segons tarda la radiació solar a arribar a la superfície de la Terra?&quot;, &quot;expected&quot;: &quot;500&quot;, &quot;steps&quot;: &quot;150.000.000 / 300.000 = &lt;strong&gt;500 segons&lt;/strong&gt; (8 minuts i 20 segons).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Júpiter orbita a una distància mitjana de &lt;strong&gt;5 Unitats Astronòmiques (UA)&lt;/strong&gt; del Sol. Si 1 UA equival a 150 milions de km, a quants milions de quilòmetres se situa l&#x27;òrbita de Júpiter respecte al Sol?&quot;, &quot;expected&quot;: &quot;750&quot;, &quot;steps&quot;: &quot;5 × 150 = &lt;strong&gt;750 milions de quilòmetres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;L&#x27;estrella Pròxima Centauri es troba a una distància de &lt;strong&gt;4 anys llum&lt;/strong&gt; de la Terra. Quants anys tarda el feix de llum d&#x27;aquesta estrella en arribar al nostre telescopi?&quot;, &quot;expected&quot;: &quot;4&quot;, &quot;steps&quot;: &quot;Per definició d&#x27;any llum, la radiació tarda exactament &lt;strong&gt;4 anys&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud6-5" data-unit="ud6" data-title="Tecnologia Còsmica" data-format="connect">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R5 · Connecta Parelles</span>
        <h3>🔗 Connecta Parelles: Telescopis i Distàncies a l'Espai</h3>
      </div>
      <p class="pdi-instruction">Emparella cada concepte o instrument amb la seua funció o valor físic:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Distància&quot;, &quot;left&quot;: &quot;1 Any Llum&quot;, &quot;badge_right&quot;: &quot;Equivalència&quot;, &quot;right&quot;: &quot;Aproximadament 9,46 bilions de quilòmetres&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Velocitat&quot;, &quot;left&quot;: &quot;Velocitat de la llum en el buit&quot;, &quot;badge_right&quot;: &quot;Constant&quot;, &quot;right&quot;: &quot;300.000 quilòmetres per segon&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Infraroig&quot;, &quot;left&quot;: &quot;Telescopi espacial James Webb&quot;, &quot;badge_right&quot;: &quot;Observació&quot;, &quot;right&quot;: &quot;Detecció de les primeres galàxies formades a l&#x27;univers&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Ràdio&quot;, &quot;left&quot;: &quot;Radiotelescopis terrestres parabòlics&quot;, &quot;badge_right&quot;: &quot;Recepció&quot;, &quot;right&quot;: &quot;Captació d&#x27;ones electromagnètiques de púlsars i forats negres&quot;}]">
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
        <h3>🪐 Els 8 Planetes del Sistema Solar en Ordre de Proximitat al Sol</h3>
      </div>
      <p class="pdi-instruction">Ordena els planetes des del més proper al Sol fins al més distant:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Mercuri</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Venus</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Terra</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Mart</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Júpiter</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Saturn</div>
          <div class="pdi-item" draggable="true" data-order="7"><span class="item-handle">☰</span> Urà</div>
          <div class="pdi-item" draggable="true" data-order="8"><span class="item-handle">☰</span> Neptú</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span></div>
          <div class="pdi-slot" data-slot="7"><span class="slot-badge">Pas 7</span></div>
          <div class="pdi-slot" data-slot="8"><span class="slot-badge">Pas 8</span></div>
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
      <p class="pdi-instruction">Respon VERITAT o FALS a les preguntes d'astronomia del sistema solar:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Els cometes són cossos fets de gel, pols i roca que desenvolupen una cua brillant quan s&#x27;acosten al Sol.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La radiació solar sublima el gel i el vent solar projecta la cua en direcció oposada al Sol.&quot;}, {&quot;q&quot;: &quot;Un estel fugaç és una estrella autèntica que cau ràpidament i xoca contra la Terra.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són &lt;strong&gt;METEORS&lt;/strong&gt;: fragments mil·limètrics de roca o pols que es desintegren per fricció tèrmica amb l&#x27;atmosfera!&quot;}, {&quot;q&quot;: &quot;El cinturó principal d&#x27;asteroides es troba situat entre les òrbites de Mart i de Júpiter.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Fa de frontera natural entre els planetes terrestres interiors i els gegants gasosos exteriors.&quot;}, {&quot;q&quot;: &quot;Si un meteoroid resisteix la fricció atmosfèrica sense volatilitzar-se i colpeja el terra, s&#x27;anomena meteorit.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Seqüència física: Meteoroid (espai) ➔ Meteor (fugaç a l&#x27;aire) ➔ Meteorit (impactat al sòl).&quot;}, {&quot;q&quot;: &quot;Plutó manté actualment la consideració oficial de nové planeta clàssic del Sistema Solar.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Des de la resolució de la UAI el 2006, Plutó està catalogat com a &lt;strong&gt;planeta nan&lt;/strong&gt;.&quot;}]">
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
    <div class="pdi-activity-card" id="act-ud6-8" data-unit="ud6" data-title="Satèl·lits i Nans" data-format="intrus">
      <div class="pdi-act-title">
        <span class="act-num" style="background: #0d9488;">UD6 · R8 · Troba l'Intrús (2R)</span>
        <h3>🕵️ Troba l'Intrús: Satèl·lits Naturals i Planetes Nans</h3>
      </div>
      <p class="pdi-instruction">Descobreix l'astre que no correspon a la categoria proposada:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Satèl·lits Naturals&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests cossos són SATÈL·LITS que orbiten planetes, però un és un PLANETA NAN que orbita el Sol. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;La Lluna&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit de la Terra.&quot;}, {&quot;text&quot;: &quot;Tità&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit gegant de Saturn.&quot;}, {&quot;text&quot;: &quot;Plutó&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Plutó orbita directament el Sol com a planeta nan al cinturó de Kuiper, no orbita cap planeta!&quot;}, {&quot;text&quot;: &quot;Ganimedes&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Satèl·lit més gran de Júpiter.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Planetes Gasosos Exteriors&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests planetes són GEGANTS GASOSOS o GELATS, però un és un planeta rocós. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Júpiter&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gegant gasós exterior.&quot;}, {&quot;text&quot;: &quot;Urà&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gegant gelat exterior.&quot;}, {&quot;text&quot;: &quot;Mart&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Mart és un planeta rocós tel·lúric interior, no un gegant exterior!&quot;}, {&quot;text&quot;: &quot;Neptú&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gegant gelat exterior.&quot;}]}]">
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
      <p class="pdi-instruction">Introdueix la resposta numèrica exacta mitjançant el teclat virtual:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Quants planetes principals componen el nostre Sistema Solar segons la catalogació vigent de la Unió Astronòmica Internacional?&quot;, &quot;expected&quot;: &quot;8&quot;, &quot;steps&quot;: &quot;Mercuri, Venus, Terra, Mart, Júpiter, Saturn, Urà i Neptú = &lt;strong&gt;8 planetes&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El diàmetre equatorial de Júpiter és d&#x27;uns 140.000 km, mentre que el diàmetre mitjà de la Terra és d&#x27;uns 12.742 km. Quantes Terres cabrien en línia recta al llarg del diàmetre de Júpiter (arrodoneix a l&#x27;enter més proper)?&quot;, &quot;expected&quot;: &quot;11&quot;, &quot;steps&quot;: &quot;140.000 / 12.742 ≈ &lt;strong&gt;11 Terres&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;L&#x27;ésser humà va allunar per primera vegada amb la missió Apollo 11 l&#x27;any 1969. Quants anys complets s&#x27;han complit des d&#x27;aquesta fita fins a l&#x27;any 2024?&quot;, &quot;expected&quot;: &quot;55&quot;, &quot;steps&quot;: &quot;2024 - 1969 = &lt;strong&gt;55 anys&lt;/strong&gt;.&quot;}]">
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
      <p class="pdi-instruction">Avalua el cas de telemetria i telecomunicacions industrials:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Temps de Retard en el Sistema GPS&quot;, &quot;context&quot;: &quot;Una constel·lació de satèl·lits de geoposicionament orbita a una altitud de &lt;strong&gt;20.000 km&lt;/strong&gt; respecte a l&#x27;estació receptora. Les ones electromagnètiques de ràdio viatgen a la velocitat de la llum (&lt;strong&gt;300.000 km/s&lt;/strong&gt;) fins a l&#x27;antena d&#x27;un vehicle autònom.&quot;, &quot;question&quot;: &quot;Quin és el temps aproximat de propagació que tarda el senyal a arribar a l&#x27;antena?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aproximadament 0,067 segons (67 ms)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Exacte! 20.000 km / 300.000 km/s ≈ 0,067 s (67 ms). Per aquest retard calen rellotges atòmics d&#x27;alta precisió per a posicionar el vehicle al centímetre.&quot;}, {&quot;text&quot;: &quot;Aproximadament 2 hores senceres&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Les ones viatgen a la velocitat de la llum, no tarden hores!&quot;}, {&quot;text&quot;: &quot;Propagació absolutament instantània (0,000 s)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;La velocitat de la llum és finita, per tant el retard existeix i és mesurable per l&#x27;ordinador de bord.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Ordre de Telemetria d&#x27;Emergència a Mart&quot;, &quot;context&quot;: &quot;Des del centre d&#x27;operacions terrestres s&#x27;ha d&#x27;enviar una ordre crítica d&#x27;aturada a un ròver que opera sobre Mart en un moment en què la distància interplanetària és de &lt;strong&gt;150 milions de quilòmetres&lt;/strong&gt;. El senyal electromagnètic viatja a 300.000 km/s.&quot;, &quot;question&quot;: &quot;Quant de temps tardarà la instrucció des de la Terra en ser executada pel processador del vehicle marcià?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aproximadament 8,3 minuts (500 segons)&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Brillant! 150.000.000 km / 300.000 km/s = 500 segons = 8 minuts i 20 segons. Per aquest retard els robots espacials necessiten IA i visió artificial autònoma per a evitar obstacles.&quot;}, {&quot;text&quot;: &quot;Exactament 1 minut&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;En 1 minut la llum només recorre 18 milions de km, molt lluny de la distància real.&quot;}, {&quot;text&quot;: &quot;Aproximadament 30 segons&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Temps insuficient per a recórrer la distància interplanetària.&quot;}]}]">
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
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Escorça continental i oceànica</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Mantell superior i astenosfera dúctil</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Mantell inferior dens i rígid</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Nucli extern líquid de ferro fos</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Nucli intern sòlid de ferro i níquel</div>
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
      <p class="pdi-instruction">Respon si cada afirmació astronòmica és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les quatre estacions de l&#x27;any es deuen a que la Terra està més a prop del Sol a l&#x27;estiu i més lluny a l&#x27;hivern.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La distància al Sol varia molt poc. Les estacions es deuen a la &lt;strong&gt;inclinació de 23,5° de l&#x27;eix de rotació terrestre&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;En el solstici d&#x27;estiu a l&#x27;hemisferi nord (21 de juny), tenim el dia més llarg de tot l&#x27;any i la nit més curta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els rajos solars incideixen amb la màxima verticalitat sobre el Tròpic de Càncer.&quot;}, {&quot;q&quot;: &quot;El moviment de rotació dura 24 hores i es produeix en sentit d&#x27;oest a est, per això el Sol ix per l&#x27;est.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Aquest gir origina l&#x27;alternança del dia i la nit.&quot;}, {&quot;q&quot;: &quot;En els equinoccis de primavera i tardor, el dia i la nit tenen exactament la mateixa durada de 12 hores a tot el planeta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Els rajos solars incideixen perpendicularment sobre l&#x27;Equador.&quot;}, {&quot;q&quot;: &quot;El camp magnètic protector de la Terra es genera exclusivament per les roques imantades de les muntanyes.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Es genera pel moviment de ferro i níquel líquid al &lt;strong&gt;nucli extern fluid&lt;/strong&gt; per efecte dinamo!&quot;}]">
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
      <p class="pdi-instruction">Descobreix l'element discordant en cada ronda:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Fases del Cicle Lunar&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són fases periòdiques del cicle lunar de 28 dies, però un és un fenomen extraordinari puntual. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Lluna Nova&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase regular.&quot;}, {&quot;text&quot;: &quot;Quart Creixent&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase regular.&quot;}, {&quot;text&quot;: &quot;Eclipsi Total de Sol&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Un eclipsi és una alineació puntual extraordinària, no una fase lunar ordinària!&quot;}, {&quot;text&quot;: &quot;Lluna Plena&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase regular.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Capes Geoquímiques de la Geosfera&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són capes geoquímiques pures de la Terra, però un és una unitat dinàmica-mecànica. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Escorça terrestre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa geoquímica.&quot;}, {&quot;text&quot;: &quot;Mantell terrestre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa geoquímica.&quot;}, {&quot;text&quot;: &quot;Litosfera&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La litosfera és una capa mecànica-dinàmica rígida formada per l&#x27;escorça i el mantell superior rígid!&quot;}, {&quot;text&quot;: &quot;Nucli terrestre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Capa geoquímica.&quot;}]}]">
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
      <p class="pdi-instruction">Calcula el valor requerit i introdueix-lo a la pantalla numèrica:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La translació terrestre dura 365 dies i &lt;strong&gt;6 hores&lt;/strong&gt;. Quantes hores de desfasament s&#x27;acumulen en 4 anys per a afegir el dia 29 de febrer en l&#x27;any de traspàs?&quot;, &quot;expected&quot;: &quot;24&quot;, &quot;steps&quot;: &quot;4 anys × 6 hores/any = &lt;strong&gt;24 hores&lt;/strong&gt; (un dia complet).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El cicle complet de les fases lunars dura aproximadament 28 dies. Quants dies passen des de la Lluna Nova fins a la Lluna Plena?&quot;, &quot;expected&quot;: &quot;14&quot;, &quot;steps&quot;: &quot;Mitja volta a l&#x27;òrbita lunar: 28 / 2 = &lt;strong&gt;14 dies&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Si l&#x27;escorça terrestre té un gruix mitjà d&#x27;uns 35 km i el radi total de la Terra fins al centre és de 6.371 km, quants quilòmetres ocupen el mantell i el nucli junts?&quot;, &quot;expected&quot;: &quot;6336&quot;, &quot;steps&quot;: &quot;6.371 km - 35 km = &lt;strong&gt;6336 km&lt;/strong&gt;.&quot;}]">
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
      <p class="pdi-instruction">Emparella cada procés geològic amb la seua conseqüència física directa:</p>
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Falla&quot;, &quot;left&quot;: &quot;Fricció en falles de transformació&quot;, &quot;badge_right&quot;: &quot;Sismes&quot;, &quot;right&quot;: &quot;Acumulació d&#x27;energia elàstica que allibera sismes forts&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Mantell&quot;, &quot;left&quot;: &quot;Convecció tèrmica a l&#x27;astenosfera&quot;, &quot;badge_right&quot;: &quot;Plaques&quot;, &quot;right&quot;: &quot;Motor intern que arrossega les plaques litosfèriques&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Volcans&quot;, &quot;left&quot;: &quot;Magma viscós ric en sílice i gasos&quot;, &quot;badge_right&quot;: &quot;Explosió&quot;, &quot;right&quot;: &quot;Erupcions volcàniques explosives i piroclastos&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Subducció&quot;, &quot;left&quot;: &quot;Fossa oceànica en límit convergent&quot;, &quot;badge_right&quot;: &quot;Destrucció&quot;, &quot;right&quot;: &quot;Destrucció de litosfera oceànica que s&#x27;enfonsa al mantell&quot;}]">
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
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Lluna Nova</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Lluna Creixent</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Quart Creixent</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Lluna Plena</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Quart Minvant</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Lluna Minvant</div>
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
      <p class="pdi-instruction">Respon VERITAT o FALS a les preguntes de geodinàmica interna:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;Les fosses oceàniques més fondes del planeta es formen en zones de subducció on una placa s&#x27;enfonsa davall d&#x27;una altra.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La fossa de les Marianes (11.000 m) s&#x27;origina per subducció litosfèrica.&quot;}, {&quot;q&quot;: &quot;La falla de San Andrés a Califòrnia és un límit divergent on les plaques se separen per a crear nou fons marí.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; És un límit transformant o passiu on les plaques llisquen lateralment sense crear ni destruir litosfera.&quot;}, {&quot;q&quot;: &quot;L&#x27;epicentre és el punt exacte de l&#x27;interior terrestre on es fractura la roca i s&#x27;inicia el terratrèmol.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El punt intern és l&#x27;&lt;strong&gt;hipocentre&lt;/strong&gt;; l&#x27;epicentre és el punt de la superfície verticalment damunt!&quot;}, {&quot;q&quot;: &quot;L&#x27;escorça oceànica és molt més prima (5-10 km) i densa que l&#x27;escorça continental (30-70 km).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Està formada principalment per roques basàltiques denses.&quot;}, {&quot;q&quot;: &quot;Les ones sísmiques secundàries (S) de cisalla no es propaguen a través de fluids líquids.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La desaparició de les ones S a 2.900 km va demostrar que el nucli extern és líquid.&quot;}]">
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
      <p class="pdi-instruction">Identifica l'element discordant en cada cas:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Límits Convergents (Xoc de Plaques)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes estructures s&#x27;originen pel xoc o subducció de plaques, però una correspon a un límit divergent. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Serralada de l&#x27;Himàlaia&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Límit convergent continental.&quot;}, {&quot;text&quot;: &quot;Fossa de les Marianes&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Límit convergent de subducció.&quot;}, {&quot;text&quot;: &quot;Dorsal Centroatlàntica&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La dorsal és un límit divergent on les plaques se separen per expansió del fons marí!&quot;}, {&quot;text&quot;: &quot;Serralada dels Andes&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Límit convergent de subducció.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Condicions Exclusives de la Terra per a la Vida&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes condicions fan possible la vida a la Terra, però una és hostil o aliena al nostre planeta. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Aigua líquida abundant en superfície&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Condició essencial de vida.&quot;}, {&quot;text&quot;: &quot;Temperatura mitjana de 15 °C&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Efecte hivernacle natural temperat.&quot;}, {&quot;text&quot;: &quot;Rotació de 8 hores amb vents de 600 km/h&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Això és propi d&#x27;un planeta gegant gasós com Júpiter o Neptú, no de la Terra!&quot;}, {&quot;text&quot;: &quot;Capa d&#x27;ozó i camp magnètic protectors&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Escuts contra radiació nociva.&quot;}]}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;La dorsal de l&#x27;oceà Atlàntic s&#x27;obri separant Amèrica i Europa a un ritme mitjà de &lt;strong&gt;2,5 cm per any&lt;/strong&gt;. Quants centímetres s&#x27;hauran separat al cap d&#x27;un segle (100 anys)?&quot;, &quot;expected&quot;: &quot;250&quot;, &quot;steps&quot;: &quot;2,5 cm/any × 100 anys = &lt;strong&gt;250 cm&lt;/strong&gt; (2,5 metres).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;En l&#x27;escala sísmica d&#x27;alliberament d&#x27;energia, cada grau de magnitud allibera unes 32 vegades més energia que l&#x27;anterior. Si un terratrèmol augmenta de magnitud 4 a 6 (dos graus sencers), quantes vegades s&#x27;amplifica l&#x27;energia alliberada?&quot;, &quot;expected&quot;: &quot;1024&quot;, &quot;steps&quot;: &quot;32 × 32 = &lt;strong&gt;1024 vegades&lt;/strong&gt; més energia alliberada.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;La circumferència equatorial de la Terra és d&#x27;uns 40.080 km. Si la superfície gira a una velocitat lineal de 1.670 km/h a l&#x27;Equador, quantes hores tarda a fer un gir complet de 360°?&quot;, &quot;expected&quot;: &quot;24&quot;, &quot;steps&quot;: &quot;40.080 / 1.670 = &lt;strong&gt;24 hores&lt;/strong&gt;.&quot;}]">
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
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Criteris de Construcció Sismorresistent&quot;, &quot;context&quot;: &quot;En un projecte de reforma d&#x27;una nau industrial a la comarca del Baix Segura (zona d&#x27;alta sismicitat històrica), ens demanen revisar les mesures de seguretat estructural per a suportar sismes.&quot;, &quot;question&quot;: &quot;Quin criteri tècnic de construcció sismorresistent és l&#x27;adequat?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Estructures de formigó armat amb juntes flexibles i aïlladors sísmics&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Molt bé! Els aïlladors i juntes dissipen l&#x27;energia sísmica evitant l&#x27;esfondrament de l&#x27;estructura.&quot;}, {&quot;text&quot;: &quot;Paredes rígides de rajola pesant sense cap reforç de ferro&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;La rajola rígida col·lapsa immediatament davant d&#x27;ones de cisalla S.&quot;}, {&quot;text&quot;: &quot;Substituir les bigues d&#x27;acer per bigues de guix sense fixacions&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;El guix no té cap resistència estructural dinàmica.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Orientació i Inclinació de Panells Solars&quot;, &quot;context&quot;: &quot;Un equip de muntadors ha d&#x27;instal·lar panells solars fotovoltaics a la coberta d&#x27;un taller a València per a aprofitar el màxim de radiació solar durant les quatre estacions de l&#x27;any.&quot;, &quot;question&quot;: &quot;Cap a quina orientació i amb quina inclinació s&#x27;han de col·locar els mòduls?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Orientats cap al Sud amb inclinació de 30° a 35° respecte a l&#x27;horitzontal&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Perfecte! A l&#x27;hemisferi nord el Sol descriu el seu arc cap al Sud; 35° optimitza la mitjana anual entre solsticis i equinoccis.&quot;}, {&quot;text&quot;: &quot;Orientats cap al Nord en pla horitzontal (0°)&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Al Nord perdrien gran part de la radiació directa i acumularien brutícia i aigua.&quot;}, {&quot;text&quot;: &quot;Orientats cap a l&#x27;Est a 90° verticals&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;A 90° verticals només captarien radiació breument a l&#x27;alba.&quot;}]}]">
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
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Troposfera</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Estratosfera</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Mesosfera</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Termosfera o Ionosfera</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Exosfera</div>
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
      <p class="pdi-instruction">Respon si cada afirmació sobre l'atmosfera és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El gas més abundant de l&#x27;atmosfera terrestre és l&#x27;oxigen amb un 78% del volum total de l&#x27;aire.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El gas majoritari és el &lt;strong&gt;nitrogen (N2) amb un 78%&lt;/strong&gt;; l&#x27;oxigen representa el 21%!&quot;}, {&quot;q&quot;: &quot;La pressió atmosfèrica normal a nivell del mar equival a 1 atmosfera estàndard o 1.013 hectopascals (hPa).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Valor de referència de la pressió normal.&quot;}, {&quot;q&quot;: &quot;A mesura que pugem a dalt d&#x27;una muntanya alta, la pressió atmosfèrica augmenta perquè l&#x27;aire pesa més.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; La pressió &lt;strong&gt;disminueix amb l&#x27;altitud&lt;/strong&gt; perquè tenim menys columna d&#x27;aire damunt nostre!&quot;}, {&quot;q&quot;: &quot;La capa d&#x27;ozó es troba a l&#x27;estratosfera i absorbeix la radiació ultraviolada d&#x27;alta energia procedent del Sol.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;ozó (O3) actua com un filtre solar indispensable per a la vida terrestre.&quot;}, {&quot;q&quot;: &quot;L&#x27;efecte d&#x27;hivernacle natural és un fenomen beneficiós que manté la Terra a una temperatura mitjana temperada de 15 °C.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Sense aquest efecte natural dels gasos com el CO2 i vapor d&#x27;aigua, la Terra estaria congelada a uns -18 °C.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Gasos Naturals de l&#x27;Aire Net&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests gasos són components naturals de l&#x27;aire net, però un és un contaminant tòxic de combustió. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Nitrogen&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas natural majoritari (78%).&quot;}, {&quot;text&quot;: &quot;Monòxid de carboni&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El monòxid de carboni (CO) és un contaminant verinós de combustions incompletes!&quot;}, {&quot;text&quot;: &quot;Oxigen&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas vital (21%).&quot;}, {&quot;text&quot;: &quot;Argó&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas noble natural (0,93%).&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aparells d&#x27;Estació Meteorològica&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests aparells mesuren variables del clima i l&#x27;atmosfera, però un és d&#x27;un altre àmbit tècnic. Quin és l&#x27;intrús?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Baròmetre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Mesura la pressió en hPa.&quot;}, {&quot;text&quot;: &quot;Anemòmetre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Mesura la velocitat del vent.&quot;}, {&quot;text&quot;: &quot;Calibre o peu de rei&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! El calibre és una eina de mesura de taller mecànic, no d&#x27;una estació meteorològica!&quot;}, {&quot;text&quot;: &quot;Higròmetre&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Mesura la humitat de l&#x27;aire.&quot;}]}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;L&#x27;aire sec conté un 78% de nitrogen i un 21% d&#x27;oxigen en volum. Quin percentatge sumen aquests dos gasos vitals en conjunt?&quot;, &quot;expected&quot;: &quot;99&quot;, &quot;steps&quot;: &quot;78% + 21% = &lt;strong&gt;99%&lt;/strong&gt; del volum total de l&#x27;aire sec.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;La pressió a nivell de mar és de 1.013 hPa. Si a dalt d&#x27;una serralada la pressió descendeix fins a 813 hPa, quants hPa ha caigut la pressió atmosfèrica?&quot;, &quot;expected&quot;: &quot;200&quot;, &quot;steps&quot;: &quot;1.013 hPa - 813 hPa = &lt;strong&gt;200 hPa&lt;/strong&gt; de descens.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;A la troposfera la temperatura disminueix uns 6 °C per cada 1.000 m d&#x27;alçada. Si a nivell del mar fa 24 °C, quants graus farà al cim d&#x27;un pic situat a 2.000 m d&#x27;altitud?&quot;, &quot;expected&quot;: &quot;12&quot;, &quot;steps&quot;: &quot;24 °C - (2 × 6 °C) = 24 - 12 = &lt;strong&gt;12 °C&lt;/strong&gt;.&quot;}]">
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
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Motor&quot;, &quot;left&quot;: &quot;Monòxid de carboni (CO) d&#x27;escapament&quot;, &quot;badge_right&quot;: &quot;Intoxicació&quot;, &quot;right&quot;: &quot;Asfíxia cel·lular greu per bloqueig d&#x27;oxigen a l&#x27;hemoglobina&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Dissolvents&quot;, &quot;left&quot;: &quot;Pintures al dissolvent i vapors COV&quot;, &quot;badge_right&quot;: &quot;EPI Químic&quot;, &quot;right&quot;: &quot;Obligació d&#x27;ús de mascareta amb filtre de carbó actiu A1 o A2&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Partícules&quot;, &quot;left&quot;: &quot;Pols fina de poliment i partícules PM2.5&quot;, &quot;badge_right&quot;: &quot;EPI Pols&quot;, &quot;right&quot;: &quot;Protecció respiratòria amb mascareta autofiltrant FFP2 o FFP3&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Ozó&quot;, &quot;left&quot;: &quot;Ozó estratosfèric natural (capa d&#x27;O3)&quot;, &quot;badge_right&quot;: &quot;Escut&quot;, &quot;right&quot;: &quot;Escut indispensable contra cremades i mutacions per radiació UV&quot;}]">
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
      <p class="pdi-instruction">Arrossega les fases en ordre físic des de la radiació inicial fins a la pluja:</p>
      <div class="pdi-order-wrapper">
        <div class="pdi-source-pool">
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> La radiació solar calfa la superfície terrestre i l'aire en contacte amb el sòl</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> L'aire calent es dilata, es torna menys dens i ascendeix creant una baixa pressió</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> L'aire més fred de l'entorn es desplaça horitzontalment formant el vent</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> En pujar, el vapor d'aigua es refreda i es condensa en gotetes formant núvols</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Les gotetes s'agrupen, augmenten de massa i cauen per gravetat com a precipitació</div>
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
      <p class="pdi-instruction">Respon si cada afirmació d'impacte ambiental és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;El diòxid de carboni (CO2) és l&#x27;únic gas responsable de l&#x27;efecte d&#x27;hivernacle causat per les activitats humanes.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El metà (CH4), l&#x27;òxid nitrós (N2O) i els gasos fluorats també són gasos d&#x27;hivernacle extremadament potents.&quot;}, {&quot;q&quot;: &quot;Les partícules en suspensió PM2.5 són especialment perilloses perquè la seua mida microscòpica els permet entrar directament als alvèols pulmonars.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Travessen els filtres naturals de la via respiratòria i poden passar al torrent sanguini.&quot;}, {&quot;q&quot;: &quot;El forat de la capa d&#x27;ozó és el responsable directe de l&#x27;augment de temperatura global del canvi climàtic.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són problemes ambientals diferents: l&#x27;ozó filtrava radiació UV; l&#x27;escalfament es deu a la retenció de radiació infraroja per gasos d&#x27;hivernacle!&quot;}, {&quot;q&quot;: &quot;El Protocol de Mont-real va ser un tractat internacional reeixit que va prohibir els gasos CFC per a protegir la capa d&#x27;ozó.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Va permetre la recuperació progressiva de la capa d&#x27;ozó estratosfèrica.&quot;}, {&quot;q&quot;: &quot;La boira fotoquímica (smog) a les ciutats es produeix per la reacció d&#x27;òxids de nitrogen i hidrocarburs dels vehicles amb la llum solar intensa.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Genera ozó troposfèric nociu i partícules irritants per als ulls i pulmons.&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Gasos d&#x27;Efecte d&#x27;Hivernacle (GEH)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquestes molècules atrapen radiació infraroja tèrmica provocant efecte d&#x27;hivernacle, però una no. Quina és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Metà&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Potent GEH.&quot;}, {&quot;text&quot;: &quot;Diòxid de carboni&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;GEH majoritari de combustió.&quot;}, {&quot;text&quot;: &quot;Oxigen diatòmic pur&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! L&#x27;oxigen (O2) és un gas diatòmic homonuclear simètric que no absorbeix radiació infraroja tèrmica!&quot;}, {&quot;text&quot;: &quot;Vapor d&#x27;aigua&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Gas natural d&#x27;efecte d&#x27;hivernacle.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Tipus de Precipitació Atmosfèrica&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests elements són precipitacions aquoses que cauen des dels núvols, però un no cau. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Pluja&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Precipitació líquida que cau.&quot;}, {&quot;text&quot;: &quot;Calamarsa&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Precipitació sòlida que cau.&quot;}, {&quot;text&quot;: &quot;Boira arran de terra&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La boira és una condensació de gotetes d&#x27;aigua en suspensió a l&#x27;aire en contacte amb el sòl, no una precipitació que cau!&quot;}, {&quot;text&quot;: &quot;Neu&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Precipitació sòlida que cau.&quot;}]}]">
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
      <p class="pdi-instruction">Calcula el resultat numèric exacte del problema ambiental:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Un vehicle comercial de taller emet 150 grams de CO2 per cada km recorregut. Quants grams de CO2 emetrà en un recorregut d&#x27;intervenció de &lt;strong&gt;20 km&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;3000&quot;, &quot;steps&quot;: &quot;150 g/km × 20 km = &lt;strong&gt;3000 grams&lt;/strong&gt; (3 kg de CO2).&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;L&#x27;OMS fixa el llindar diari recomanat de PM2.5 en 15 µg/m³. Si a l&#x27;avinguda central d&#x27;una ciutat el sensor de qualitat d&#x27;aire registra 45 µg/m³, quantes vegades s&#x27;està multiplicant el valor límit recomanat?&quot;, &quot;expected&quot;: &quot;3&quot;, &quot;steps&quot;: &quot;45 / 15 = &lt;strong&gt;3 vegades&lt;/strong&gt; per damunt del llindar.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Un metre cúbic d&#x27;aire a 23 °C pot admetre un màxim de 20 grams de vapor d&#x27;aigua abans de saturar-se. Si en aquest moment en conté 8 grams, quin és el % d&#x27;humitat relativa de l&#x27;aire?&quot;, &quot;expected&quot;: &quot;40&quot;, &quot;steps&quot;: &quot;(8 / 20) × 100 = 0,40 × 100 = &lt;strong&gt;40%&lt;/strong&gt; d&#x27;humitat relativa.&quot;}]">
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
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Motor Encés en Recinte Tancat&quot;, &quot;context&quot;: &quot;En un taller mecànic es manté un vehicle dièsel encés sobre el banc de potència sense connectar la mànega d&#x27;extracció d&#x27;escapament. Als 15 minuts, dos operaris noten mal de cap sobtat, batecs accelerats i mareig intens.&quot;, &quot;question&quot;: &quot;Quin gas tòxic està actuant i quina és l&#x27;actuació d&#x27;urgència immediata?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Intoxicació per Monòxid de Carboni (CO); apagar motor, ventilar i evacuar&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Actuació perfecta! El CO és inodor i incolor però letal per bloqueig de l&#x27;oxigen en sang. Cal eixir immediatament a respirar aire net.&quot;}, {&quot;text&quot;: &quot;És una baixada de tensió lleu; cal tancar la porta perquè no entre fred&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Perill mortal! Tancar la nau concentraria encara més el CO causant pèrdua de coneixement ràpida.&quot;}, {&quot;text&quot;: &quot;Prendre un analgèsic i continuar la feina&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;L&#x27;analgèsic no resol la manca d&#x27;oxigen en sang i agreujaria l&#x27;asfíxia.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Avaria en la Cabina de Pintura&quot;, &quot;context&quot;: &quot;Mentre un pintor polvoritza una peça amb pintura al dissolvent, el sistema d&#x27;extracció i filtratge de la cabina falla per col·lapse dels filtres saturats de pigments.&quot;, &quot;question&quot;: &quot;Quina és la decisió tècnica correcta del pintor?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Detindre la pistola, desconnectar equips i sortir de la cabina&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Correctíssim! Sense ventilació forçada els vapors inflamables s&#x27;acumulen superant el límit d&#x27;explosivitat i danyant la salut.&quot;}, {&quot;text&quot;: &quot;Llevar-se la mascareta per a veure millor i afanyar-se a acabar&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Imprudència greu! Inhalaria vapors orgànics tòxics directament als pulmons.&quot;}, {&quot;text&quot;: &quot;Obrir la porta de la cabina cap a la zona comuna del taller&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Això ompliria tota la nau industrial de vapors tòxics i pols inflamable per a la resta de companys.&quot;}]}]">
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
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Evaporació de l'aigua superficial per la radiació solar</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Evapotranspiració dels éssers vius i vegetació</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Condensació del vapor d'aigua en refredar-se en altura formant núvols</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Precipitació en forma de pluja, calamarsa o neu sobre el relleu</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Infiltració d'una part de l'aigua en el subsòl alimentant els aqüífers</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Escorrentia superficial per rius i torrents que retornen l'aigua al mar</div>
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
      <p class="pdi-instruction">Respon si cada afirmació sobre la hidrosfera és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;L&#x27;aigua salada dels oceans i mars representa aproximadament el 97% de tota l&#x27;aigua existent a la Terra.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Només el 3% restant és aigua dolça.&quot;}, {&quot;q&quot;: &quot;La major part de l&#x27;aigua dolça del planeta (més del 68%) es troba fàcilment accessible en rius i llacs superficials.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Està congelada en forma de gel a les &lt;strong&gt;glaceres i casquets polars&lt;/strong&gt;!&quot;}, {&quot;q&quot;: &quot;Els aqüífers subterranis concentren quasi el 30% del total de l&#x27;aigua dolça de tot el planeta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; Són la principal reserva d&#x27;aigua dolça líquida del món.&quot;}, {&quot;q&quot;: &quot;La salinitat mitjana dels oceans és d&#x27;uns 35 grams de sals dissoltes per cada litre d&#x27;aigua marina (3,5%).&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; El clorur sòdic n&#x27;és el component majoritari.&quot;}, {&quot;q&quot;: &quot;L&#x27;aigua destil·lada pura al 100% és la més aconsellable per al consum diari de les persones perquè no conté sals.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; L&#x27;aigua potable necessita &lt;strong&gt;sals minerals&lt;/strong&gt; per a no provocar xocs osmòtics a les cèl·lules!&quot;}]">
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
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Característiques del Curs Alt d&#x27;un Riu&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests trets són propis del curs alt d&#x27;un riu de muntanya, però un correspon a una altra zona. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Pendent molt pronunciada i aigües ràpides&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tret típic de muntanya.&quot;}, {&quot;text&quot;: &quot;Gran erosió vertical formant valls en &#x27;V&#x27;&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Erosió forta de curs alt.&quot;}, {&quot;text&quot;: &quot;Meandres sinuosos sobre planes d&#x27;inundació&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Els meandres es formen en el curs mitjà i baix amb terreny pla, no a la capçalera de muntanya!&quot;}, {&quot;text&quot;: &quot;Presència de cascades, congosts i ràpids&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Paisatge típic de curs alt.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Fases d&#x27;una Estació Depuradora (EDAR)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests processos es fan a una depuradora d&#x27;aigües residuals (EDAR), però un és de potabilització (ETAP). Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Desbast amb reixes per a sòlids voluminosos&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament primari físic de l&#x27;EDAR.&quot;}, {&quot;text&quot;: &quot;Captació directa d&#x27;aigua d&#x27;un embassament de pluja&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La captació d&#x27;aigua d&#x27;embassament és l&#x27;origen de la xarxa d&#x27;aigua potable a l&#x27;ETAP, no pas un procés de depuració d&#x27;aigües residuals a l&#x27;EDAR!&quot;}, {&quot;text&quot;: &quot;Decantació primària per a sedimentar fangs pesants&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament físic de l&#x27;EDAR.&quot;}, {&quot;text&quot;: &quot;Digestió biològica amb bacteris aerobis en reactor&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament secundari biològic de l&#x27;EDAR.&quot;}]}]">
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
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;De tota l&#x27;aigua del planeta Terra, el 97% és aigua salada de mars i oceans. Quin percentatge d&#x27;aigua dolça queda per a tot el planeta?&quot;, &quot;expected&quot;: &quot;3&quot;, &quot;steps&quot;: &quot;100% - 97% = &lt;strong&gt;3%&lt;/strong&gt; d&#x27;aigua dolça total.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;Una aixeta que degota al taller perd 5 litres d&#x27;aigua potable cada hora. Quants litres es perden inútilment al llarg d&#x27;un dia sencer (24 hores)?&quot;, &quot;expected&quot;: &quot;120&quot;, &quot;steps&quot;: &quot;5 litres/hora × 24 hores = &lt;strong&gt;120 litres&lt;/strong&gt; malbaratats.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una dutxa ràpida de 5 minuts consumeix 50 litres d&#x27;aigua, mentre que omplir una banyera en gasta 200 litres. Quants litres d&#x27;aigua estalvia una persona en triar la dutxa en lloc de la banyera?&quot;, &quot;expected&quot;: &quot;150&quot;, &quot;steps&quot;: &quot;200 L - 50 L = &lt;strong&gt;150 litres&lt;/strong&gt; d&#x27;estalvi.&quot;}]">
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
      <div class="pdi-connect-container" data-pairs="[{&quot;id&quot;: 1, &quot;badge_left&quot;: &quot;Acidesa&quot;, &quot;left&quot;: &quot;Mesura de pH de l&#x27;aigua (escala 0 a 14)&quot;, &quot;badge_right&quot;: &quot;Neutralitat&quot;, &quot;right&quot;: &quot;pH 7 és neutre; &lt;7 és àcid i &gt;7 és bàsic o alcalí&quot;}, {&quot;id&quot;: 2, &quot;badge_left&quot;: &quot;Potabilització&quot;, &quot;left&quot;: &quot;Cloració de desinfecció a l&#x27;ETAP&quot;, &quot;badge_right&quot;: &quot;Salubritat&quot;, &quot;right&quot;: &quot;Elimina bacteris patògens evitant malalties com el còlera&quot;}, {&quot;id&quot;: 3, &quot;badge_left&quot;: &quot;Depuració&quot;, &quot;left&quot;: &quot;Reactor biològic de llots actius a l&#x27;EDAR&quot;, &quot;badge_right&quot;: &quot;Bacteris&quot;, &quot;right&quot;: &quot;Microorganismes aerobis que digereixen la matèria orgànica&quot;}, {&quot;id&quot;: 4, &quot;badge_left&quot;: &quot;Taller&quot;, &quot;left&quot;: &quot;Arqueta separadora de greixos i hidrocarburs&quot;, &quot;badge_right&quot;: &quot;Contenció&quot;, &quot;right&quot;: &quot;Separació per flotació evitant abocar olis a la xarxa urbana&quot;}]">
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
          <div class="pdi-item" draggable="true" data-order="1"><span class="item-handle">☰</span> Captació d'aigua natural des d'un riu, embassament o pou d'aqüífer</div>
          <div class="pdi-item" draggable="true" data-order="2"><span class="item-handle">☰</span> Tractament de potabilització a l'ETAP (filtració, decantació i cloració)</div>
          <div class="pdi-item" draggable="true" data-order="3"><span class="item-handle">☰</span> Emmagatzematge en dipòsits municipals i distribució per canonades</div>
          <div class="pdi-item" draggable="true" data-order="4"><span class="item-handle">☰</span> Consum humà, domèstic i industrial a vivendes i tallers</div>
          <div class="pdi-item" draggable="true" data-order="5"><span class="item-handle">☰</span> Recollida d'aigües residuals a través de la xarxa de clavegueram</div>
          <div class="pdi-item" draggable="true" data-order="6"><span class="item-handle">☰</span> Depuració a l'EDAR (eliminació de residus físics i biològics)</div>
          <div class="pdi-item" draggable="true" data-order="7"><span class="item-handle">☰</span> Retorn de l'aigua neta al riu o mar, o regeneració per a reg agrícola</div>
        </div>
        <div class="pdi-slots-column">
          <div class="pdi-slot" data-slot="1"><span class="slot-badge">Pas 1</span></div>
          <div class="pdi-slot" data-slot="2"><span class="slot-badge">Pas 2</span></div>
          <div class="pdi-slot" data-slot="3"><span class="slot-badge">Pas 3</span></div>
          <div class="pdi-slot" data-slot="4"><span class="slot-badge">Pas 4</span></div>
          <div class="pdi-slot" data-slot="5"><span class="slot-badge">Pas 5</span></div>
          <div class="pdi-slot" data-slot="6"><span class="slot-badge">Pas 6</span></div>
          <div class="pdi-slot" data-slot="7"><span class="slot-badge">Pas 7</span></div>
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
      <p class="pdi-instruction">Respon si cada afirmació de contaminació aquàtica és VERITAT o FALSA:</p>
      <div class="pdi-speedquiz-container" data-questions="[{&quot;q&quot;: &quot;L&#x27;eutrofització és una contaminació per excés de nutrients (nitrats i fosfats) que provoca una proliferació d&#x27;algues i asfíxia dels peixos.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; La capa d&#x27;algues impedeix l&#x27;entrada de llum i la seua descomposició esgota l&#x27;oxigen dissolt.&quot;}, {&quot;q&quot;: &quot;A l&#x27;ETAP s&#x27;afig clor a l&#x27;aigua perquè aporte sabor fresc i gas carbònic a la beguda.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; El clor s&#x27;afig com a potent &lt;strong&gt;agent desinfectant&lt;/strong&gt; per a eliminar microorganismes patògens!&quot;}, {&quot;q&quot;: &quot;Un sol litre d&#x27;oli mineral o de cuina usat abocat per l&#x27;aigüera pot arribar a contaminar fins a 1.000 litres d&#x27;aigua neta.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; L&#x27;oli crea una pel·lícula impermeable a la superfície que impedeix l&#x27;oxigenació de l&#x27;aigua.&quot;}, {&quot;q&quot;: &quot;Els microplàstics són fragments de plàstic superiors a 10 centímetres que suraven a les platges.&quot;, &quot;is_true&quot;: false, &quot;exp&quot;: &quot;&lt;strong&gt;FALS!&lt;/strong&gt; Són partícules de &lt;strong&gt;menys de 5 mil·límetres&lt;/strong&gt; que s&#x27;acumulen a la xarxa tròfica marina!&quot;}, {&quot;q&quot;: &quot;La dessalinització per osmosi inversa utilitza membranes semipermeables a alta pressió per a separar l&#x27;aigua pura de la salmorra.&quot;, &quot;is_true&quot;: true, &quot;exp&quot;: &quot;&lt;strong&gt;VERITAT!&lt;/strong&gt; És la tecnologia majoritària per a obtindre aigua potable del mar malgrat l&#x27;alt consum elèctric.&quot;}]">
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
        <h3>🕵️ Troba l'Intrús: Fases de Depuració i Masses d'Aigua</h3>
      </div>
      <p class="pdi-instruction">Tria l'element intrús que no pertany a la categoria assenyalada:</p>
      <div class="pdi-intrus-container" data-rounds="[{&quot;round_num&quot;: 1, &quot;title&quot;: &quot;Ronda 1: Processos de l&#x27;EDAR (Depuradora)&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests passos formen part del tractament d&#x27;una EDAR, però un no es fa a la depuradora d&#x27;aigües residuals. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Desarenat i desgreixat per flotació física&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament primari de l&#x27;EDAR.&quot;}, {&quot;text&quot;: &quot;Tractament biològic amb llots actius i airejament&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Tractament secundari clau.&quot;}, {&quot;text&quot;: &quot;Gasificació amb sucre i CO2 per a embotellar&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! Això és un procés d&#x27;una fàbrica de begudes carbòniques, no d&#x27;una depuradora d&#x27;aigües residuals!&quot;}, {&quot;text&quot;: &quot;Decantació secundària per a separar fangs clarificats&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Fase final de clarificació.&quot;}]}, {&quot;round_num&quot;: 2, &quot;title&quot;: &quot;Ronda 2: Aigües Dolces Superficials Continentals&quot;, &quot;question&quot;: &quot;Tres d&#x27;aquests cossos d&#x27;aigua són aigües dolces superficials de terra endins, però un és una massa marina salada. Quin és?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Rius i afluents d&#x27;alta muntanya&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aigua dolça continental.&quot;}, {&quot;text&quot;: &quot;Llacs i llacunes naturals d&#x27;aigua dolça&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aigua dolça continental.&quot;}, {&quot;text&quot;: &quot;Mar Mediterrània&quot;, &quot;is_intrus&quot;: true, &quot;hint&quot;: &quot;INTRÚS TROBAT! La Mar Mediterrània és una conca marina d&#x27;aigua salada amb 38 g/L de salinitat, no és aigua continental dolça!&quot;}, {&quot;text&quot;: &quot;Embassaments artificials de conca fluvial&quot;, &quot;is_intrus&quot;: false, &quot;hint&quot;: &quot;Aigua dolça superficial retinguda.&quot;}]}]">
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
      <p class="pdi-instruction">Calcula el volum d'aigua o el rendiment exacte i introdueix-lo:</p>
      <div class="pdi-keypad-container" data-problems="[{&quot;p_num&quot;: 1, &quot;text&quot;: &quot;Per a fabricar una samarreta de cotó es consumeixen aproximadament 2.500 litres d&#x27;aigua en tota la cadena de producció. Quants litres d&#x27;aigua es requereixen per a un lot de &lt;strong&gt;4 samarretes&lt;/strong&gt;?&quot;, &quot;expected&quot;: &quot;10000&quot;, &quot;steps&quot;: &quot;2.500 L × 4 = &lt;strong&gt;10.000 litres&lt;/strong&gt; d&#x27;aigua.&quot;}, {&quot;p_num&quot;: 2, &quot;text&quot;: &quot;El dipòsit de reserva d&#x27;un refugi de muntanya conté 1.200 litres d&#x27;aigua potable. Si es produeix una fuga de 100 litres per hora, quantes hores tardarà el dipòsit a buidar-se completament?&quot;, &quot;expected&quot;: &quot;12&quot;, &quot;steps&quot;: &quot;1.200 L / 100 L/h = &lt;strong&gt;12 hores&lt;/strong&gt;.&quot;}, {&quot;p_num&quot;: 3, &quot;text&quot;: &quot;Una depuradora rep 200 kg de sòlids en suspensió cada hora i aconsegueix retirar-ne exactament el 90% als decantadors. Quants quilograms de fang sòlid aconsegueix retenir cada hora?&quot;, &quot;expected&quot;: &quot;180&quot;, &quot;steps&quot;: &quot;200 kg × 0,90 = &lt;strong&gt;180 kg&lt;/strong&gt; de sòlids retinguts.&quot;}]">
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
      <p class="pdi-instruction">Resol cada situació ambiental i de gestió d'aigua al taller:</p>
      <div class="pdi-case-container" data-cases="[{&quot;case_num&quot;: 1, &quot;title&quot;: &quot;📋 Cas 1: Vessament Accidental d&#x27;Oli Mineral&quot;, &quot;context&quot;: &quot;En buidar el càrter d&#x27;un vehicle, una garrafa bolca i es vessen &lt;strong&gt;4 litres d&#x27;oli mineral usat&lt;/strong&gt; a terra al costat d&#x27;un embornal de pluvials del pati exterior del taller.&quot;, &quot;question&quot;: &quot;Com a professionals de manteniment, quina és l&#x27;actuació ambiental correcta?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;Escampar sepiolita absorbent, recollir en bidó de residus i no tirar aigua&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Exacte! L&#x27;oli és un residu tòxic perillós. Mai s&#x27;ha de netejar amb mànega d&#x27;aigua cap al clavegueram o pluvials.&quot;}, {&quot;text&quot;: &quot;Agafar la mànega d&#x27;aigua a pressió i enviar l&#x27;oli cap a l&#x27;embornal&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Infracció ambiental greu! Un sol litre d&#x27;oli pot contaminar 1.000 litres d&#x27;aigua en rius o platges.&quot;}, {&quot;text&quot;: &quot;Tirar lleixiu o dissolvent per a dissoldre l&#x27;oli a terra&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Crearia una mescla encara més perillosa i agressiva per als treballadors i el subsòl.&quot;}]}, {&quot;case_num&quot;: 2, &quot;title&quot;: &quot;📋 Cas 2: Estalvi d&#x27;Aigua en Maquinària de Rentat&quot;, &quot;context&quot;: &quot;A la zona de rentat de peces d&#x27;un taller es detecta que la màquina gasta &lt;strong&gt;80 litres d&#x27;aigua per cicle&lt;/strong&gt; per descalibratge. Es canvia per una vàlvula eficient que només gasta &lt;strong&gt;20 litres per cicle&lt;/strong&gt;. Es realitzen &lt;strong&gt;10 cicles de rentat al dia&lt;/strong&gt;.&quot;, &quot;question&quot;: &quot;Quants litres d&#x27;aigua potable s&#x27;estalviaran cada dia gràcies a la reparació?&quot;, &quot;options&quot;: [{&quot;text&quot;: &quot;600 litres d&#x27;aigua estalviats al dia&quot;, &quot;is_correct&quot;: true, &quot;exp&quot;: &quot;Estalvi formidable! (80 - 20) = 60 litres per cicle × 10 cicles = 600 litres al dia (18.000 litres al mes d&#x27;estalvi hídric i econòmic).&quot;}, {&quot;text&quot;: &quot;200 litres d&#x27;aigua al dia&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Aquest és el consum del nou equip eficient (20 × 10), no pas l&#x27;estalvi aconseguit.&quot;}, {&quot;text&quot;: &quot;800 litres d&#x27;aigua al dia&quot;, &quot;is_correct&quot;: false, &quot;exp&quot;: &quot;Aquest era el consum antic malbaratador inicial (80 × 10), no l&#x27;estalvi net.&quot;}]}]">
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
