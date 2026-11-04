---
title: "UT1 — Mètodes d'Accés i Administració Remota (RA6)"
unit: "1"
module: "SEX"
layout: "default"
course_root: ".."
badge: "2n SMX · Serveis en Xarxa · UT01"
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

# 📘 UT1 — Mètodes d'Accés i Administració Remota (RA6)

> **📌 Resultat d'Aprenentatge i Objectius:** RA6. Gestiona mètodes d'accés remot descrivint les seues característiques i instal·lant els serveis corresponents (SSH, RDP, Remmina, PuTTY en Windows Server i Ubuntu Server sobre AWS).

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **1.1** | **1.1 - Introducció** | [Obrir apartat ➡️](./ut0101.html) |
| **1.2** | **1.2 - Conceptes i definició** | [Obrir apartat ➡️](./ut0102.html) |
| **1.3** | **1.3 - Riscos i inconvenients associats al control extern** | [Obrir apartat ➡️](./ut0103.html) |
| **1.4** | **1.4 - Bones pràctiques i mesures de seguretat** | [Obrir apartat ➡️](./ut0104.html) |
| **1.5** | **1.5 - Tasca RA6-CEa - Mètodes d'accés i administració remota** | [Obrir apartat ➡️](./ut0105.html) |
| **1.6** | **1.6 Tasca RA6-CEbcd-1 - Instal·lació i connexió remota a Windows Server 2025 en AWS** | [Obrir apartat ➡️](./ut0106.html) |
| **1.7** | **1.7 Tasca RA6-CEbcd-2 - Instal·lació i connexió remota a Ubuntu Server 24.04 LTS en AWS** | [Obrir apartat ➡️](./ut0107.html) |
| **1.8** | **1.8 - Tasca RA6-CEf-1 - Connexió remota des de Ubuntu Server 24.04 LTS a SO Windows** | [Obrir apartat ➡️](./ut0108.html) |
| **1.9** | **1.9 - Administració remota segura amb SSH (Secure Shell)** | [Obrir apartat ➡️](./ut0109.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT1 — Mètodes d'Accés i Administració Remota (RA6)** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="D" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Per a connectar-se des de Windows amb PuTTY a una instància Ubuntu Server en AWS que proporciona una clau privada en format .pem, quina eina s'ha d'utilitzar prèviament?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Wireshark, per a desencriptar la clau .pem en la xarxa.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) FileZilla Server, per a compilar el fitxer .pem.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) PuTTYgen, per a convertir el fitxer .pem al format natiu .ppk de PuTTY.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="C" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> En quin fitxer del directori ~/.ssh/ d'un servidor Linux s'emmagatzemen les claus públiques autoritzades per a l'accés SSH sense contrasenya?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) id_rsa.priv</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) authorized_keys</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) known_hosts</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En acabar una pràctica en AWS Academy Learner Lab, cal aturar (Stop) les instàncies EC2 per a evitar consumir el pressupost de crèdits del laboratori.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="ssh" data-hint="Les 3 lletres de Secure Shell.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina ordre de consola s'utilitza en Linux i Windows PowerShell per a iniciar una connexió segura de terminal remot cap a un servidor?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT1 — Mètodes d'Accés i Administració Remota (RA6)**):

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
    <button type="button" class="btn-aules-dl" data-module="SEX" data-unit="UD01" data-activity="ut01_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
