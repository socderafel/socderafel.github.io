---
layout: default
title: "UD1: Representació de la Informació en Sistemes Microinformàtics — MME"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
prev_url: "../index.html"
prev_label: "🏠 Índex del Mòdul"
next_url: "ut0101.html"
next_label: "1.1 Bit, Byte i Sistemes ➡️"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:var(--text-color);">⚡ Progrés global de la Unitat 1</span>
    <span class="tracker-count" style="font-weight:700; color:#2563eb;">0 / 4 reptes globals resolts</span>
  </div>
  <div style="background:#e2e8f0; border-radius:999px; height:8px; overflow:hidden; margin-top:10px;">
    <div class="tracker-fill" style="background:#2563eb; width:0%; height:100%; transition:width 0.3s ease;"></div>
  </div>
</div>

# 🔢 UD1: Representació de la Informació en Sistemes Microinformàtics

Benvingut/da a la **Unitat Didàctica 1** del mòdul professional de **Muntatge i Manteniment d'Equips (MME)** de **1r de Sistemes Microinformàtics i Xarxes (SMX)**.

En aquesta unitat assentarem els fonaments matemàtics i lògics dels equips informàtics: des del bit i els sistemes de numeració (binari, octal, hexadecimal), passant pel càlcul rigorós de capacitats d'emmagatzematge (SI vs IEC), fins a la codificació de dades multimèdia i la protecció amb memòries RAM ECC.

---

## 🗺️ Mapa d'Aprenentatge de la Unitat 1

| Apartat | Títol del Tema | Continguts Pràctics i Tècnics | Activitats i Puntuació | Accés Directe |
| :---: | :--- | :--- | :--- | :---: |
| **1.1** | **El Bit, Byte i Sistemes de Numeració** | Unitats elementals, correspondència entre bases (binari, octal, hex) i taula de quartets. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0101.html) |
| **1.2** | **Conversió entre Bases i Aritmètica** | Divisions successives, pesos exponencials, mètode ràpid de quartets i suma binària. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0102.html) |
| **1.3** | **Unitats de Mesura: SI vs IEC** | Discrepància comercial ($1 \text{ TB} = 931 \text{ GiB}$), prefixos binaris i velocitats de xarxa (MB/s vs Mbps). | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0103.html) |
| **1.4** | **Codificació Alfanumèrica i Multimèdia** | D'ASCII a UTF-8, càlcul de mida de píxels True Color (24/32 bits) i mostreig d'àudio. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0104.html) |
| **1.5** | **Detecció d'Errors i Memòries ECC** | Bit de paritat, suma de comprovació Checksum, CRC de disc i memòries RAM ECC per a servidors. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0105.html) |

---

## 🎯 Reptes Globals d'Avaluació de la Unitat

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quin és el valor hexadecimal equivalent a l'adreça binària 1010 1111_2?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_1" value="a"> AF</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_1" value="b"> FA</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_1" value="c"> 10F</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_1" value="d"> BC</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! 1010 és A (10) i 1111 és F (15)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quants MegaBytes per segon (MB/s) transfereix una targeta de xarxa a 10 Gbps teòrics?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_2" value="a"> 1.250 MB/s (10.000 Mbps / 8)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_2" value="b"> 10.000 MB/s</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_2" value="c"> 80.000 MB/s</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_2" value="d"> 100 MB/s</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! 10 Gbps = 10.000 Mbps. Dividit entre 8 dona 1.250 MB/s (uns 1,25 GB/s)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quants Bytes ocupa una imatge de 800 x 600 píxels amb profunditat True Color de 24 bits sense comprimir?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_3" value="a"> 1.440.000 Bytes (unes 1,37 MiB)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_3" value="b"> 480.000 Bytes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_3" value="c"> 11.520.000 Bytes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_3" value="d"> 800 KB</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! 800 * 600 * (24/8 = 3 Bytes/píxel) = 1.440.000 Bytes." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Què succeeix quan una memòria RAM ECC de servidor detecta un error de 1 bit?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_4" value="a"> El corregeix en calent automàticament sense que el sistema operatiu s'interrompa</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g01_4" value="b"> Apaga immediatament la font d'alimentació</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme01_4" value="c"> Emet 10 xiulets per l'altaveu intern</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme01_4" value="d"> Esborra el disc dur complet</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La tecnologia ECC corregeix errors d'un sol bit de forma totalment transparent." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament Global d'Aules (UD1: Representació de la Informació)</h3>
  <p>En acabar els reptes interactius i pràctiques de la UD1, genera el teu certificat oficial per a la tasca d'Aules:</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD01" data-activity="Global" data-module="MME" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
