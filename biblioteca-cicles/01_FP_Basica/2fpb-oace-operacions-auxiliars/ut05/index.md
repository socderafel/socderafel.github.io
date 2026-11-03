---
layout: default
title: "UD5: Manteniment Preventiu, Rendiment i Actualitzacions — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD5"
---

# 🧹 UD5: Manteniment Preventiu, Rendiment i Actualitzacions

Benvingut/da a la **Unitat Didàctica 5** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. Com a futur tècnic o tècnica auxiliar d'informàtica, una de les teues tasques quotidianes serà mantindre els ordinadors en un estat òptim de salut, rendiment i seguretat. En aquesta unitat aprendràs a alliberar espai en disc, optimitzar unitats **SSD** i **HDD**, monitoritzar el consum de recursos amb eines avançades (**Administrador de tasques** i **htop**), gestionar serveis d'arrencada i administrar les actualitzacions del sistema operatiu (**Windows Update**).

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD5: MANTENIMENT PREVENTIU I OPTIMITZACIÓ DE RENDIMENT            │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 🗑️ NETEJA I DISCS  │ 📊 MONITORITZACIÓ  │ 🔄 ARRENCI I ACTUALITZACIONS │
│ • cleanmgr / %temp%│ • Taskmgr (Win)    │ • Aplicacions d'inici        │
│ • Sensor magatzem  │ • htop (Linux)     │ • Consola services.msc       │
│ • HDD: Desfrag     │ • Coll d'ampolla   │ • Windows Update / KB        │
│ • SSD: Ordre TRIM  │ • CPU, RAM, Disc   │ • Resolució d'errors WinRE   │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **5.1** | **Neteja i alliberament d'espai en disc** | Fonts de residus digitals, eina `cleanmgr`, Sensor d'emmagatzematge, buidat de `%temp%` i eliminació de `Windows.old`. | [**Accedir al Tema 5.1 ➡️**](./ut0501.html) |
| **5.2** | **Manteniment d'unitats SSD (TRIM) vs HDD (Desfragmentació)** | Desfragmentació mecànica en HDD, desgast de cel·les flash en SSD i funcionament de l'ordre d'optimització TRIM. | [**Accedir al Tema 5.2 ➡️**](./ut0502.html) |
| **5.3** | **Monitorització de recursos: Administrador de tasques i htop** | Interpretació de gràfiques de rendiment, colls d'ampolla de CPU/RAM/Disc i finalització de processos congelats. | [**Accedir al Tema 5.3 ➡️**](./ut0503.html) |
| **5.4** | **Gestió d'aplicacions d'inici i serveis del sistema** | Reducció del temps d'arrencada, gestor de serveis `services.msc` i configuració de tipus d'inici segurs. | [**Accedir al Tema 5.4 ➡️**](./ut0504.html) |
| **5.5** | **Gestió d'actualitzacions: Windows Update i pegats de seguretat** | Cicle de pedaços de seguretat de Microsoft, comprovació d'historial d'actualitzacions i desinstal·lació d'actualitzacions defectuoses. | [**Accedir al Tema 5.5 ➡️**](./ut0505.html) |

---

### 🧪 Taller Pràctic de Laboratori: Pla d'Optimització d'un Equip de Taller

1. **Alliberament de fitxers temporals:** Executa `cleanmgr /sageset:1` com a administrador i neteja fitxers temporals d'Internet, informes d'error i restes d'actualitzacions.
2. **Auditoria d'arrencada:** Obre l'Administrador de tasques, revisa la pestanya **Aplicacions d'inici** i deshabilita tots els programes de missatgeria o llançadors que ralentitzen l'inici de l'equip.
3. **Optimització d'unitat SSD:** Obre l'eina `dfrgui` i executa una comanda d'optimització TRIM sobre la unitat `C:`.
4. **Verificació de pegats:** Comprova a Windows Update que l'equip compta amb els últims pedaços de seguretat instal·lats sense errors.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Per quina raó tècnica MAI s'ha de desfragmentar una unitat d'estat sòlid SSD?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_1" value="a"> Perquè no té parts mecàniques mòbils i genera escriptures massives innecessàries que degraden les cel·les NAND flash</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_1" value="b"> Perquè els SSD funcionen amb gasolina</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_1" value="c"> Perquè s'esborraria la contrasenya del Wi-Fi</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_1" value="d"> Perquè Windows no ho permet en absolut</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! En un SSD el temps d'accés és instantani a qualsevol cel·la. Desfragmentar només escurça la vida útil de la unitat." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina ordre executa l'assistent clàssic d'Alliberament d'espai en disc de Windows?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_2" value="a"> cleanmgr.exe</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_2" value="b"> format c:</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_2" value="c"> diskpart</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_2" value="d"> taskmgr</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! 'cleanmgr' permet buidar la paperera, fitxers temporals i instal·lacions antigues de Windows." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Si un ordinador té un disc mecànic HDD al 100% constant d'ús i l'equip respon molt lent, com s'anomena aquest problema?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_3" value="a"> Coll d'ampolla d'E/S (*I/O Bottleneck*)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_3" value="b"> Sobreescalfament de la pantalla</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_3" value="c"> Manca de tinta a la impressora</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_3" value="d"> Fallada de connexió Bluetooth</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! El coll d'ampolla de disc limita la velocitat de tot el sistema; substituir l'HDD per un SSD resol el problema instantàniament." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Quina consola MMC permet canviar el tipus d'inici d'un servei de fons de Windows a Deshabilitat?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_4" value="a"> services.msc</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_4" value="b"> regedit.exe</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_4" value="c"> notepad.exe</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co5g_4" value="d"> mspaint.exe</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! 'services.msc' (Services Manager) és la consola que gestiona tots els serveis en segon pla del sistema operatiu." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD05)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD05" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
