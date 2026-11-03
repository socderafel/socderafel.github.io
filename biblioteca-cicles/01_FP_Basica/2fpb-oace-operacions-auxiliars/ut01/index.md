---
layout: default
title: "UD1: Introducció als Sistemes Operatius i la Virtualització — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD1"
---

# 💻 UD1: Introducció als Sistemes Operatius i la Virtualització

Benvingut/da a la **Unitat Didàctica 1** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. En aquest primer bloc temàtic comprendràs com el sistema operatiu administra el maquinari de l'equip (processador, memòria RAM, emmagatzematge i perifèrics) i aprendràs a crear entorns aïllats de prova mitjançant la **virtualització** amb eines com **Oracle VM VirtualBox**.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD1: SISTEMES OPERATIUS I VIRTUALITZACIÓ (FONAMENTS)              │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ ⚙️ EL SISTEMA OPERATIU│ 📜 LLICÈNCIES I ARQUIT│ 🧪 VIRTUALITZACIÓ DE TALLER  │
│ • Nucli i funcions │ • Lliure vs propietari│ • Amfitrió (Host) vs Convidat│
│ • CPU, RAM i discos│ • 32 bits (màx 4 GB) │ • Hipervisors Tipus 1 i 2    │
│ • GUI vs Consola   │ • 64 bits (x86_64)   │ • Instantànies i xarxa NAT   │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Continguts de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **1.1** | **Què és un sistema operatiu? Funcions bàsiques** | Intermediari maquinari-programari, gestió de CPU/RAM, fitxers i interfície (GUI/CLI). | [**Accedir al Tema 1.1 ➡️**](./ut0101.html) |
| **1.2** | **Llicències i tipus de programari: lliure vs propietari** | Codi obert vs tancat, llicència GPL, entorn LliureX, Ubuntu i Windows comercial. | [**Accedir al Tema 1.2 ➡️**](./ut0102.html) |
| **1.3** | **Arquitectures de maquinari: 32 bits vs 64 bits** | Adreçament de memòria, límit matemàtic de 4 GB en 32 bits i comprovació per consola. | [**Accedir al Tema 1.3 ➡️**](./ut0103.html) |
| **1.4** | **Fonaments de la virtualització: què és i per a què serveix** | Sistema amfitrió (*Host*) vs convidat (*Guest*), aïllament segur i instantànies (*snapshots*). | [**Accedir al Tema 1.4 ➡️**](./ut0104.html) |
| **1.5** | **Hipervisors de Tipus 1 i 2 (VirtualBox) i modes de xarxa** | Bare-metal vs Hosted, configuració de VirtualBox, xarxa NAT vs Adaptador Pont. | [**Accedir al Tema 1.5 ➡️**](./ut0105.html) |

---

### 🧪 Taller Pràctic de Laboratori: Màquina Virtual de Taller a VirtualBox

1. **Creació de la màquina virtual:** Obre Oracle VM VirtualBox i crea una màquina virtual anomenada `LAB01_Ubuntu_2FPB` assignant 4 GB de RAM i 30 GB de disc dinàmic VDI.
2. **Assignació de la imatge ISO:** Munta la imatge oficial d'Ubuntu/LliureX a la unitat òptica SATA virtual.
3. **Instantània neta (*Snapshot*):** Crea una instantània anomenada `Estat_Inicial_Net` abans de fer cap canvi al sistema.
4. **Comprovació de xarxa:** Comprova la diferència entre el mode de xarxa **NAT** (IP privada `10.0.2.15` amb eixida a Internet però aïllada de l'aula) i el mode **Adaptador Pont** (rep IP directa del router de l'aula).
5. **Reversió d'avaries:** Simula l'esborrament de fitxers i restaura la màquina a l'estat inicial en segons amb la instantània.

---

## 🏆 Avaluació Global de la Unitat (+100 punts)

<div class="interactive-progress-tracker">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
    <span class="tracker-count">0 de 4 reptes superats (0%)</span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div style="background:rgba(0,0,0,0.1); height:8px; border-radius:4px; overflow:hidden;">
    <div class="tracker-bar" style="background:#2563eb; height:100%; width:0%; transition:width 0.3s ease;"></div>
  </div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quina és la funció fonamental del sistema operatiu en un ordinador?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_1" value="a"> Actuar com a intermediari entre el maquinari físic i els programes d'usuari gestionant els recursos</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_1" value="b"> Netejar la pols de l'interior de la caixa</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_1" value="c"> Subministrar corrent elèctric a la placa base</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_1" value="d"> Fabricar els cables de xarxa</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El SO administra la CPU, la memòria RAM, l'emmagatzematge i els perifèrics." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina quantitat màxima de memòria RAM pot adreçar matemàticament un sistema operatiu de 32 bits?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_2" value="a"> 4 Gigabytes (4 GB)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_2" value="b"> 64 Gigabytes (64 GB)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_2" value="c"> 512 Megabytes (512 MB)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_2" value="d"> 1 Terabyte (1 TB)</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! 2^32 bytes equival exactament a 4.294.967.296 bytes (4 GB). Per aprofitar més memòria cal un SO de 64 bits." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Com s'anomena la funció de VirtualBox que permet fer una 'foto' de l'estat del sistema per poder tornar arrere si s'espatla?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_3" value="a"> Instantània (*Snapshot*)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_3" value="b"> Captura de pantalla JPG</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_3" value="c"> Formatat ràpid</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_3" value="d"> Desfragmentació</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! Les instantànies congelen la memòria i disc de la màquina virtual permetent desfer qualsevol avaria." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Quin tipus d'hipervisor és Oracle VM VirtualBox (s'executa sobre un SO existent com Windows o Linux)?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_4" value="a"> Hipervisor de Tipus 2 (Allotjat / Hosted)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_4" value="b"> Hipervisor de Tipus 1 (Bare-Metal directe sobre el ferro)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_4" value="c"> Processador físic</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="rgo1_4" value="d"> Controlador de teclat</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Els hipervisors Tipus 2 funcionen com una aplicació dins del sistema operatiu amfitrió." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament del Quadern d'Aules (UD01)</h3>
  <p>Genera el document oficial de seguiment de la Unitat Didàctica 1 amb les teues respostes validades.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD01" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
