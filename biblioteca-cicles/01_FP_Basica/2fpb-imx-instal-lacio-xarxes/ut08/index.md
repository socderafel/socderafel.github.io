---
layout: default
title: "UD8: Manteniment, Diagnòstic i Seguretat en Xarxa — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD8"
next_url: "ut0801.html"
next_label: "8.1 ➡️"
---

# UD8: Manteniment, Diagnòstic i Seguretat en Xarxa

Benvingut/da a la **Unitat Didàctica 8** del mòdul d'Instal·lació i Manteniment de Xarxes. En aquesta unitat aprendràs la metodologia professional per a diagnosticar i reparar incidències en xarxa: distingir entre **fallades físiques i lògiques**, aplicar el protocol **Bottom-Up (de baix a dalt)**, configurar la seguretat del **tallafocs (firewall)**, previndre bucles catastròfics amb **STP**, realitzar el **manteniment preventiu** amb etiquetatge normalitzat **TIA-606** i resoldre supòsits reals al taller.

---

## Apartats de la Unitat Didàctica

1. [**8.1 Tipus d'avaries en xarxa: fallades físiques vs lògiques**](ut0801.html)
   - Classificació d'incidències de maquinari vs programari, símptomes i diagnòstic ràpid.
2. [**8.2 Metodologia de resolució d'avaries pas a pas (de baix a dalt)**](ut0802.html)
   - Metodologia ascendent Bottom-Up del model OSI: comprovació física, loopback 127.0.0.1, IP, gateway i DNS.
3. [**8.3 Seguretat bàsica perimetral: el tallafocs (Firewall) i prevenció de bucles**](ut0803.html)
   - Filtratge de ports TCP/UDP i prevenció de tempestes de difusió mitjançant el protocol Spanning Tree (STP).
4. [**8.4 Manteniment preventiu: neteja, etiquetatge TIA-606 i còpies**](ut0804.html)
   - Neteja de racks amb aire comprimit, etiquetatge normalitzat ANSI/TIA-606 i còpies de suport.
5. [**8.5 Pràctica de Taller: Resolució de Supòsits d'Incidències en Xarxa**](ut0805.html)
   - Resolució de 5 casos pràctics reals d'avaries al taller i emissió de l'informe per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u8_idx_q1" data-answer="127.0.0.1|localhost" data-hint="L'adreça de loopback de prova local.">
  <div class="quiz-question">🔍 Quina adreça IP utilitzem en la comanda ping per a verificar que la nostra pròpia targeta de xarxa i la pila TCP/IP estan funcionant?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Ex: 127.0.0.1...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar la resolució d'avaries de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
  <div class="aules-student-field">
    <label for="aules-student-name">Nom i Cognoms de l'alumne/a:</label>
    <input type="text" id="aules-student-name" placeholder="Ex: Pere Martí Soler">
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">Calculant resultats dels reptes...</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-copy">📋 Copiar Resum per a Aules</button>
    <button type="button" class="btn-aules-dl">📄 Descarregar Comprovant (.pdf)</button>
  </div>
  <div class="aules-toast"></div>
</div>
