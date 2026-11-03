---
layout: default
title: "UD7: Programari d'Utilitat, Eines de Suport i Assistència Remota — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD7"
---

# 🛠️ UD7: Programari d'Utilitat, Eines de Suport i Assistència Remota

Benvingut/da a la **Unitat Didàctica 7** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. En aquest mòdul aprendràs a dominar la navalla suïssa d'aplicacions que tot tècnic de manteniment informàtic necessita en el seu dia a dia: eines de **compressió i xifratge** de fitxers (**7-Zip**), gestió de documents digitals estàndard (**PDF**), eines de diagnòstic i telemetria de maquinari (**CPU-Z, HWMonitor, CrystalDiskInfo**) i sistemes d'**assistència i control remot** (**AnyDesk, TeamViewer, RDP**).

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD7: PROGRAMARI D'UTILITAT I ASSISTÈNCIA REMOTA                   │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 📦 COMPRESSIÓ & PDF│ 🩺 TELEMETRIA HW   │ 🌐 ASSISTÈNCIA REMOTA        │
│ • 7-Zip (AES-256)  │ • CPU-Z (RAM/CPU)  │ • AnyDesk / TeamViewer       │
│ • Volums dividits  │ • HWMonitor (Temp) │ • ID de 9 dígits i xifratge  │
│ • Documents PDF    │ • CrystalDiskInfo  │ • Transferència de fitxers   │
│ • Impressió virtual│ • Paràmetres SMART │ • Bones pràctiques de suport │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **7.1** | **Compressió i protecció de fitxers amb 7-Zip** | Algoritmes de compressió sense pèrdua, formats `.7z` vs `.zip`, divisió en volums i xifratge fort AES-256. | [**Accedir al Tema 7.1 ➡️**](./ut0701.html) |
| **7.2** | **Gestió de documents PDF: visors, lectors i impressió virtual** | Estàndard PDF/A, impressora virtual de Microsoft, unió i divisió de fulls i signatura digital bàsica. | [**Accedir al Tema 7.2 ➡️**](./ut0702.html) |
| **7.3** | **Eines d'inventari i informació de maquinari (CPU-Z, HWMonitor, CrystalDiskInfo)** | Auditoria de freqüència de CPU, detecció de temperatura límit i lectura dels atributs de salut S.M.A.R.T. de discs. | [**Accedir al Tema 7.3 ➡️**](./ut0703.html) |
| **7.4** | **Eines d'assistència i control remot: RDP, AnyDesk i TeamViewer** | Arquitectura client-servidor, connexió mitjançant codi d'accés, autorització per l'usuari remot i seguretat de sessió. | [**Accedir al Tema 7.4 ➡️**](./ut0704.html) |
| **7.5** | **Pràctica: Sessió de suport tècnic remot entre equips d'aula** | Connexió entre dos equips de taller, diagnòstic d'avaria a distància, enviament d'eines de reparació i tancament segur. | [**Accedir al Tema 7.5 ➡️**](./ut0705.html) |

---

### 🧪 Taller Pràctic de Laboratori: Simulacre de Servei d'Assistència Tècnica Remota

1. **Diagnòstic de l'equip client:** Descarrega la versió portable de CrystalDiskInfo i HWMonitor per auditar la temperatura de la CPU i l'estat dels discs de l'equip.
2. **Compressió segura per a enviament:** Empaqueta els informes de diagnòstic amb 7-Zip en un arxiu protegit amb contrasenya xifrada amb AES-256.
3. **Sessió de control remot:** Emparella l'equip d'un company/a mitjançant AnyDesk utilitzant l'identificador numèric.
4. **Resolució guiada:** Des de la pantalla remota, accedeix a l'Administrador de Dispositius per habilitar un controlador desactivat i comprova que l'usuari local pot continuar treballant.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quin algoritme de xifratge militar utilitza 7-Zip per protegir els arxius comprimits amb contrasenya segura?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_1" value="a"> AES-256 bits</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_1" value="b"> DES de 56 bits</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_1" value="c"> ROT13</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_1" value="d"> Codi Morse</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! L'estàndard AES-256 és pràcticament inviolable mitjançant atacs de força bruta si la clau és prou llarga." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina eina de diagnòstic gratuïta llegeix els paràmetres S.M.A.R.T. d'un disc per avisar abans que falle definitivament?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_2" value="a"> CrystalDiskInfo</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_2" value="b"> Paint</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_2" value="c"> Calculadora</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_2" value="d"> Windows Media Player</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! CrystalDiskInfo mostra l'estat de salut (Bo, Risc o Dolent) basant-se en sectors reassignats i hores d'ús." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Com es connecta un tècnic informàtic a un equip remot mitjançant AnyDesk o TeamViewer a través d'Internet?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_3" value="a"> Introduint l'identificador numèric únic (ID) de 9 o 10 dígits que proporciona l'usuari remot i rebent la seua autorització</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_3" value="b"> Trucant al router per telèfon</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_3" value="c"> Connectant un cable HDMI entre les dues ciutats</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_3" value="d"> Endevinant la contrasenya del correu de l'usuari</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! L'identificador connecta tots dos equips a través dels servidors d'encaminament de l'aplicació sense haver d'obrir ports al router." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Quina característica fa que el format PDF siga l'estàndard universal per enviar documents i factures?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_4" value="a"> Que es visualitza exactament igual amb els mateixos tipus de lletra i maquetació en qualsevol dispositiu i sistema operatiu</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_4" value="b"> Que només ocupa 1 byte</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_4" value="c"> Que es pot escoltar com una cançó</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co7g_4" value="d"> Que no es pot imprimir mai</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! PDF (Portable Document Format) preserva la integritat visual exacta independentment del maquinari." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD07)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD07" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
