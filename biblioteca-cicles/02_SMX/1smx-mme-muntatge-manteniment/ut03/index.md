---
layout: default
title: "UD3: Components del PC: Caixes, Refrigeració i Emmagatzematge — MME"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3"
prev_url: "../ut02/index.html"
prev_label: "⬅️ UD2: Electricitat i Fonts PSU"
next_url: "ut0301.html"
next_label: "3.1 Caixes i Airflow ➡️"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:var(--text-color);">⚡ Progrés global de la Unitat 3</span>
    <span class="tracker-count" style="font-weight:700; color:#2563eb;">0 / 4 reptes globals resolts</span>
  </div>
  <div style="background:#e2e8f0; border-radius:999px; height:8px; overflow:hidden; margin-top:10px;">
    <div class="tracker-fill" style="background:#2563eb; width:0%; height:100%; transition:width 0.3s ease;"></div>
  </div>
</div>

# 📦 UD3: Components del PC: Caixes, Refrigeració i Emmagatzematge

Benvingut/da a la **Unitat Didàctica 3** del mòdul professional de **Muntatge i Manteniment d'Equips (MME)** de **1r de Sistemes Microinformàtics i Xarxes (SMX)**.

En aquesta unitat abordarem el disseny estructural, tèrmic i d'emmagatzematge d'un equip: formats de xassís i control de pressió d'aire (*airflow*), sistemes de refrigeració per aire amb tubs de calor (*heatpipes*), refrigeració líquida AIO, tècniques d'aplicació de pasta tèrmica, discs mecànics HDD de 3.5", SSDs SATA de 2.5" i les ultraràpides unitats SSD M.2 NVMe PCIe 4.0/5.0.

---

## 🗺️ Mapa d'Aprenentatge de la Unitat 3

| Apartat | Títol del Tema | Continguts Pràctics i Tècnics | Activitats i Puntuació | Accés Directe |
| :---: | :--- | :--- | :--- | :---: |
| **3.1** | **Caixes i Gestió del Flux Tèrmic** | Formats de xassís (Full Tower, Mid Tower, SFF), pressió positiva vs negativa i filtres antipols. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0301.html) |
| **3.2** | **Refrigeració per Aire i Heatpipes** | Canvi de fase intern, aletes d'alumini, ventiladors PWM de 4 pins i protecció *thermal throttling*. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0302.html) |
| **3.3** | **Refrigeració Líquida i Pasta Tèrmica** | Kits AIO segellats, mida de radiadors (240/360mm), conductivitat (W/mK) i mètode del gra de pésol. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0303.html) |
| **3.4** | **Discs HDD Mecànics i SSD SATA** | Plats magnètics i sectors, bus SATA III (6 Gbps), protocol AHCI, NCQ i comanda TRIM. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0304.html) |
| **3.5** | **SSDs Ultraràpids M.2 NVMe** | Factor de forma 2280, generacions PCIe 3.0/4.0/5.0 (fins a 14.000 MB/s) i coixinets tèrmics. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0305.html) |

---

## 🎯 Reptes Globals d'Avaluació de la Unitat

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Com s'aconsegueix una pressió positiva a l'interior de la caixa d'un ordinador?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_1" value="a"> Fent que el cabal d'aire dels ventiladors d'entrada (intake) siga superior al dels ventiladors d'eixida (exhaust)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_1" value="b"> Segellant la caixa amb silicona</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_1" value="c"> Apagant tots els ventiladors</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_1" value="d"> Posant la font d'alimentació de cap per avall</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! L'excés d'aire ix disparat per les juntes, evitant l'entrada de pols sense filtrar." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina diferència tècnica hi ha entre un ventilador de 3 pins i un de 4 pins (PWM)?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_2" value="a"> El de 4 pins compta amb un senyal de control digital PWM que permet regular la velocitat de forma molt més suau i precisa</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_2" value="b"> El de 3 pins fa llum RGB i el de 4 pins no</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_2" value="c"> El de 4 pins necessita aigua per funcionar</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_2" value="d"> No hi ha cap diferència</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El quart pin rep el tren de polsos de modulació PWM a tensió constant." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quin protocol és necessari configurar a la UEFI per habilitar NCQ i connexió en calent en discs SATA?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_3" value="a"> AHCI (Advanced Host Controller Interface)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_3" value="b"> IDE / Legacy</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_3" value="c"> RAID 0</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_3" value="d"> FAT32</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! El mode AHCI és indispensable per extreure el màxim rendiment dels dispositius SATA." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Per què un SSD NVMe PCIe 5.0 requereix obligatòriament un dissipador tèrmic robust?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_4" value="a"> Perquè a velocitats de 14.000 MB/s el controlador genera enorme calor i sense dissipador patiria fre tèrmic greu</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_4" value="b"> Perquè la normativa europea ho prohibeix</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_4" value="c"> Perquè pesa massa i es desconnectaria</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g03_4" value="d"> No requereix cap dissipador</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La dissipació activa o passiva massiva és imprescindible a la generació PCIe 5.0." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament Global d'Aules (UD3: Caixes, Refrigeració i SSDs)</h3>
  <p>En acabar els reptes interactius i pràctiques de la UD3, genera el teu certificat oficial per a la tasca d'Aules:</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD03" data-activity="Global" data-module="MME" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
