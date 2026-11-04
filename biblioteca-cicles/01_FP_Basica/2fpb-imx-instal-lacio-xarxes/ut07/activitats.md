---
layout: default
title: "Quadern Complet d'Activitats — UD7 — Instal·lació i Manteniment de Xarxes per a Transmissió de Dades (Networking Essentials)"
course_root: ".."
badge: "2n FPB · Instal·lació i Manteniment de Xarxes (IMX / NE) · UD7"
prev_url: "ficha701.html"
prev_label: "⬅️ 🛠️ Fitxa 7.1 · Interconnexió d'Equips "
next_url: "../index.html"
next_label: "🏠 Tornar a la Portada del Mòdul"
---

# Quadern Pràctic d'Activitats — UD7: Dispositius d'Interconnexió de Xarxes — Switch, Router i Punt d'Accés Wi-Fi

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

En aquesta secció tens accés directe a totes les activitats pràctiques, fitxes de treball i reptes avaluables d'aquesta unitat didàctica. Pots accedir a cada activitat individualment o consultar el recull complet a continuació:

## 🗂️ Índex d'Activitats de la Unitat

- **[🛠️ Fitxa 7.1 · Interconnexió d'Equips amb Switch, Router i Punt d'Accés](ficha701.html)**

---

## Fitxa 7.1 · Interconnexió d'Equips amb Switch, Router i Punt d'Accés

👉 *[Obrir aquesta activitat en pàgina individual](ficha701.html)*

# Fitxa 7.1 · Interconnexió d'Equips amb Switch, Router i Punt d'Accés

## 1 · Diferències entre Hub, Switch, Router i Punt d'Accés (WAP)

Completa la taula comparativa dels dispositius d'interconnexió d'una xarxa local:

| Dispositiu | Capa OSI | Adreça amb què treballa | Funció principal |
| --- | --- | --- | --- |
| **Hub (Concentrador)** | Capa 1 (Física) | Cap (repeteix bits) | Reenvia el senyal elèctric per tots els ports creant un únic domini de col·lisió (obsolet). |
| **Switch (Commutador)** | Capa 2 (Enllaç) | Adreça física **MAC** | Aprèn la MAC de cada port i envia la trama únicament al destinatari. |
| **Router (Encaminador)** | Capa 3 (Xarxa) | Adreça lògica **IP** | Connecta xarxes diferents (LAN amb WAN/Internet) i encamina paquets. |
| **Punt d'Accés (WAP)** | Capa 2 (Enllaç) | Adreça **MAC** / SSID | Connecta els dispositius sense fil Wi-Fi amb la xarxa cablejada del Switch. |

## 2 · Interpretació dels LEDs d'estat d'un Switch i d'una Targeta de Xarxa (NIC)

- **LED Link fixe en verd:** Hi ha connexió elèctrica (enllaç físic correcte) a velocitat màxima (per exemple, 1 Gbps).
- **LED Act (Activity) parpellejant:** S'estan transmetent o rebent trames de dades en eixe port.
- **LED apagat amb cable connectat:** El cable està trencat, mal grimpat (pins 1, 2, 3 o 6 sense continuïtat) o la targeta de xarxa de l'equip està apagada/deshabilitada.


---


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Quadern Complet d'Activitats — UD7** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="El Switch treballa a la Capa 2 (Enllaç de dades) usant una taula d'adreces MAC i separa els dominis de col·lisió.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina diferència fonamental de funcionament hi ha entre un antic concentrador (<code>Hub</code>) i un commutador (<code>Switch</code>) de Capa 2?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El Hub reenvia el senyal per tots els ports provocant col·lisions, mentre que el Switch aprèn les adreces MAC i envia cada trama només al port del destinatari.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) El Switch no té ports RJ-45.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) El Hub funciona per fibra òptica interplanetària i el Switch no.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Són exactament el mateix aparell.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="El Router encamina paquets IP entre xarxes diferents i actua com a porta d'enllaç (Default Gateway).">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin dispositiu d'interconnexió treballa a la Capa 3 (Capa de Xarxa) utilitzant adreces IP per a encaminar paquets entre xarxes diferents (per exemple, entre la LAN i Internet)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) El Router (encaminador).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) El Patch Panel passiu.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) La roseta de paret.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) El tester de continuïtat.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="El Punt d'Accés (AP) es connecta per cable al Switch i crea la cel·la Wi-Fi (WLAN).">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Un Punt d'Accés sense fil (WAP / Access Point) actua com a pont entre la xarxa cablejada Ethernet i els dispositius que es connecten per Wi-Fi.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="switch|commutador" data-hint="És el Switch (commutador).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin dispositiu de xarxa de Capa 2 connecta tots els ordinadors d'una aula o planta en topologia d'estrela i filtra les trames per adreça MAC?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Quadern Complet d'Activitats — UD7**):

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
    <button type="button" class="btn-aules-dl" data-module="IMX" data-unit="UD07" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
