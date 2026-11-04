---
title: "UT2 — Serveis de Configuració Dinàmica: Protocol DHCP (RA1)"
unit: "2"
module: "SEX"
layout: "default"
course_root: ".."
badge: "2n SMX · Serveis en Xarxa · UT02"
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

# 📘 UT2 — Serveis de Configuració Dinàmica: Protocol DHCP (RA1)

> **📌 Resultat d'Aprenentatge i Objectius:** RA1. Instal·la serveis de configuració dinàmica (DHCP), descrivint les seues característiques, procés DORA, àmbits, reserves i desplegament en Windows Server i Ubuntu Server amb KVM/libvirt.

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **2.1** | **2.1 - Introducció** | [Obrir apartat ➡️](./ut0201.html) |
| **2.2** | **2.2 - DHCP (Dynamic Host Configuration Protocol)** | [Obrir apartat ➡️](./ut0202.html) |
| **2.3** | **2.3 - Configuració de DHCP** | [Obrir apartat ➡️](./ut0203.html) |
| **2.4** | **2.4 - Tasca RA1-CEab - Funcionament de DHCP** | [Obrir apartat ➡️](./ut0204.html) |
| **2.5** | **2.5 - Tasca RA1-CEcd-1 - Instal·lació i configuració d'un DHCP amb Windows Server en AWS** | [Obrir apartat ➡️](./ut0205.html) |
| **2.6** | **2.6 - Tasca RA1-CEcd-2 - Instal·lació i configuració d'un DHCP amb Ubuntu Server en AWS** | [Obrir apartat ➡️](./ut0206.html) |
| **2.7** | **2.7 Tasca RA1-CEfgh-2 - Creació de VM amb Virtual Machine Manager (libvirt)** | [Obrir apartat ➡️](./ut0207.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT2 — Serveis de Configuració Dinàmica: Protocol DHCP (RA1)** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="D" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En Ubuntu Server amb KVM/libvirt, quin dispositiu del sistema hem de comprovar que existeix per a verificar que la virtualització imbricada (Nested Virtualization) està activa?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) /etc/fstab</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) /var/log/syslog</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) /dev/kvm</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="C" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Com s'anomena el període de temps durant el qual un servidor DHCP cedeix l'ús d'una adreça IP a un client abans que haja de renovar-la?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Temps de vida útil del paquet (TTL ICMP).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Concessió o lloguer (Lease time).</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Zona d'exclusió permanent.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El missatge inicial DHCPDISCOVER s'envia des del client amb adreça IP d'origen 0.0.0.0 i adreça IP de destinació de broadcast 255.255.255.255.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="dora" data-hint="Discover, Offer, Request, Acknowledge.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin és l'acrònim de 4 lletres que resumeix les quatre fases d'assignació d'adreça IP en DHCP?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT2 — Serveis de Configuració Dinàmica: Protocol DHCP (RA1)**):

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
    <button type="button" class="btn-aules-dl" data-module="SEX" data-unit="UD02" data-activity="ut02_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
