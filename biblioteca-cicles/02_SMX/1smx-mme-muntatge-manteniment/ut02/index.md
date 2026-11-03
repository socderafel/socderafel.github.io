---
layout: default
title: "UD2: Fonaments d'Electricitat i Fonts d'Alimentació (PSU) — MME"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2"
prev_url: "../ut01/index.html"
prev_label: "⬅️ UD1: Representació Informació"
next_url: "ut0201.html"
next_label: "2.1 Magnituds i Seguretat ➡️"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:var(--text-color);">⚡ Progrés global de la Unitat 2</span>
    <span class="tracker-count" style="font-weight:700; color:#2563eb;">0 / 4 reptes globals resolts</span>
  </div>
  <div style="background:#e2e8f0; border-radius:999px; height:8px; overflow:hidden; margin-top:10px;">
    <div class="tracker-fill" style="background:#2563eb; width:0%; height:100%; transition:width 0.3s ease;"></div>
  </div>
</div>

# ⚡ UD2: Fonaments d'Electricitat i Fonts d'Alimentació (PSU)

Benvingut/da a la **Unitat Didàctica 2** del mòdul professional de **Muntatge i Manteniment d'Equips (MME)** de **1r de Sistemes Microinformàtics i Xarxes (SMX)**.

En aquesta unitat coneixerem a fons el cor energètic de qualsevol ordinador: les magnituds elèctriques fonamentals i la Llei d'Ohm, la conversió de corrent altern en continu mitjançant fonts commutades (SMPS), l'estàndard de connectors ATX i 12VHPWR, la certificació d'eficiència 80 PLUS i el diagnòstic pràctic de taller amb multímetre i el test del clip.

---

## 🗺️ Mapa d'Aprenentatge de la Unitat 2

| Apartat | Títol del Tema | Continguts Pràctics i Tècnics | Activitats i Puntuació | Accés Directe |
| :---: | :--- | :--- | :--- | :---: |
| **2.1** | **Magnituds Elèctriques i Seguretat** | Voltatge, Intensitat, Resistència, Potència en Watts, Llei d'Ohm i descàrrega de condensadors. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0201.html) |
| **2.2** | **AC vs DC i Arquitectura Commutada** | Per què fonts SMPS, etapes internes (filtre EMI, rectificació, commutació MOSFET i transformador). | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0202.html) |
| **2.3** | **Formats, Connectors i Codi de Colors** | Formats ATX/SFX, connectors ATX 24p, CPU 8p, PCIe, 12VHPWR (600W) i taula de colors. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0203.html) |
| **2.4** | **Eficiència 80 PLUS i Dimensionament** | Certificacions Bronze/Gold/Platinum/Titanium, punt òptim de càrrega al 50% i càlcul de Watts. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0204.html) |
| **2.5** | **Taller Pràctic: Test Clip i Polímetre** | El test del clip (*Paperclip test*), mesurament de tensions amb multímetre digital i PSU tester. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0205.html) |

---

## 🎯 Reptes Globals d'Avaluació de la Unitat

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quin voltatge subministra el cable taronja del connector principal ATX de 24 pins?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_1" value="a"> +3,3 V DC</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_1" value="b"> +12 V DC</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_1" value="c"> +5 V DC</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_1" value="d"> -12 V DC</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El cable taronja correspon al rail de +3,3 V per a xips lògics i RAM." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quina font és recomanable per a un PC amb consum màxim estimat de 420 W?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_2" value="a"> Una font de 650 W amb certificació 80 PLUS Gold (operant al 50-60% de càrrega)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_2" value="b"> Una font genèrica de 400 W sense certificar</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_2" value="c"> Una font de 2000 W industrial</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_2" value="d"> Una font de 200 W d'ordinador portàtil</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! 650 W ofereix marge de seguretat (+30%) i treballa en el rang de màxima eficiència." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Què indica la línia gris Power Good (PG) del connector ATX?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_3" value="a"> Informa a la placa base (+5V) que les tensions s'han estabilitzat per permetre l'arrencada segura</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_3" value="b"> És la connexió d'altaveus</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_3" value="c"> Controla el ratolí USB</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_3" value="d"> Apaga el monitor</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Si el senyal PG no arriba entre 100 i 500 ms, el processador no rep l'ordre d'iniciar el POST." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Què ocorre si durant el test del clip el ventilador de la font no gira en absolut?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_4" value="a"> La font d'alimentació està avariada internament o té el fusible d'entrada cremat</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_4" value="b"> Significa que la memòria RAM està desconfigurada</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_4" value="c"> És normal perquè només s'encén amb Windows instal·lat</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="mme_g02_4" value="d"> Cal reiniciar el router</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! Si el circuit d'arrencada amb el pont verd-negre no reacciona, la font s'ha de substituir." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament Global d'Aules (UD2: Electricitat i Fonts PSU)</h3>
  <p>En acabar els reptes interactius i pràctiques de la UD2, genera el teu certificat oficial per a la tasca d'Aules:</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD02" data-activity="Global" data-module="MME" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
