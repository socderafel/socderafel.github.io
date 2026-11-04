---
title: "UT8 — Gestió de Servidors Web HTTP/HTTPS: Apache, Nginx i IIS (RA5)"
unit: "8"
module: "SEX"
layout: "default"
course_root: ".."
badge: "2n SMX · Serveis en Xarxa · UT08"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# 📘 UT8 — Gestió de Servidors Web HTTP/HTTPS: Apache, Nginx i IIS (RA5)

> **📌 Resultat d'Aprenentatge i Objectius:** RA5. Gestiona servidors web identificant requeriments d'utilització i aplicant criteris de configuració (HTTP/HTTPS, VirtualHosts, autenticació d'usuaris, logs i certificats TLS).

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **8.1** | **8.1 El Protocol HTTP/HTTPS: Mètodes, Codis d'Estat, Capçaleres i Arquitectura Web** | [Obrir apartat ➡️](./ut0801.html) |
| **8.2** | **8.2 Servidor Web Apache2 en Linux i IIS en Windows: Estructura, Mòduls i Llocs Virtuals (VirtualHosts)** | [Obrir apartat ➡️](./ut0802.html) |
| **8.3** | **8.3 Servidor Web NGINX: Arquitectura d'Esdeveniments, Server Blocks i Proxy Invers** | [Obrir apartat ➡️](./ut0803.html) |
| **8.4** | **8.4 Autenticació d'Usuaris, Certificats Digital SSL/TLS (HTTPS) i Tasca Avaluable RA5-CE** | [Obrir apartat ➡️](./ut0804.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT8 — Gestió de Servidors Web HTTP/HTTPS: Apache, Nginx i IIS (RA5)** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Com pot un únic servidor web Apache o Nginx amb una sola adreça IP allotjar múltiples llocs web amb dominis diferents sobre el mateix port 80/443?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Mitjançant Servidors Virtuals basats en nom (Name-based Virtual Hosts), inspeccionant la capçalera HTTP 'Host' (i l'extensió TLS SNI en HTTPS).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Assignant la mateixa adreça MAC a diversos encaminadors.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Desactivant el servidor DNS de la xarxa.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin codi d'estat HTTP retorna un servidor web quan el recurs sol·licitat requereix autenticació d'usuari i encara no s'han enviat credencials vàlides?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) 200 OK</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) 503 Service Unavailable</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) 401 Unauthorized</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El protocol HTTPS protegeix la confidencialitat i integritat de les comunicacions web encapsulant el protocol HTTP dins d'un túnel criptogràfic TLS.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="443" data-hint="El port HTTP és el 80 i el port HTTPS és el...">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin número de port TCP utilitza per defecte el protocol web segur HTTPS?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT8 — Gestió de Servidors Web HTTP/HTTPS: Apache, Nginx i IIS (RA5)**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="SEX" data-unit="UD08" data-activity="ut08_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
