---
layout: default
title: "UD8: Tractament de Recursos Multimèdia (So, Imatge i Vídeo) — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD8"
---

# 🎨 UD8: Tractament de Recursos Multimèdia (So, Imatge i Vídeo)

Benvingut/da a la **Unitat Didàctica 8** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. Els equips informàtics actuals són centres complets de creació, edició i difusió de continguts digitals. En aquest bloc temàtic aprendràs a treballar amb recursos d'àudio digital (**Audacity**), a distingir i editar imatges de **mapa de bits vs vectorials**, a maquetar cartells i recursos corporatius d'oficina i a processar i subtitular vídeos amb formats estàndard (**MP4, H.264, fitxers .SRT**).

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD8: TRACTAMENT DE RECURSOS MULTIMÈDIA                            │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 🎙️ ÀUDIO DIGITAL   │ 🖼️ IMATGE DIGITAL  │ 🎬 VÍDEO I SUBTÍTOLS         │
│ • Mostreig 44.1 kHz│ • Mapa de bits vs  │ • Contenidor vs Còdec        │
│ • MP3 vs WAV       │   Vectorial (SVG)  │ • H.264 / MP4                │
│ • Audacity         │ • Resolució i DPI  │ • Handbrake / conversió      │
│ • Neteja de soroll │ • Transparència PNG│ • Estructura arxiu .SRT      │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **8.1** | **Formats d'àudio digital, taxa de mostreig i compressió** | Digitalització analògica-digital, mostreig a 44,1 kHz / 16 bits, compressió amb pèrdua (MP3) vs sense pèrdua (WAV/FLAC). | [**Accedir al Tema 8.1 ➡️**](./ut0801.html) |
| **8.2** | **Edició d'àudio amb Audacity: gravació i eliminació de soroll** | Captura de veu per micròfon, perfil de reducció de soroll ambiental estàtic, retall, mescla i exportació. | [**Accedir al Tema 8.2 ➡️**](./ut0802.html) |
| **8.3** | **Imatge de mapa de bits vs vectorial: formats i resolució** | Píxels vs traçats geomètrics, resolució de pantalla (72-96 DPI) vs impressió (300 DPI) i formats JPG, PNG, SVG i WEBP. | [**Accedir al Tema 8.3 ➡️**](./ut0803.html) |
| **8.4** | **Disseny gràfic bàsic i edició vectorial (Draw / Canva)** | Creació de fullets i cartells de taller, ús de capes, tipografies llegibles, alineació i exportació a PDF/PNG. | [**Accedir al Tema 8.4 ➡️**](./ut0804.html) |
| **8.5** | **Tractament de vídeo bàsic i subtitulat (.SRT)** | Diferències entre contenidor (MP4/MKV) i còdec (H.264/H.265), compressió de mida i sintaxi de subtítols `.srt`. | [**Accedir al Tema 8.5 ➡️**](./ut0805.html) |

---

### 🧪 Taller Pràctic de Laboratori: Creació d'una Píndola Multimèdia Informativa

1. **Gravació de veu en off:** Grava amb Audacity una explicació de 30 segons sobre una regla bàsica de neteja d'ordinadors de taller.
2. **Postproducció d'àudio:** Elimina el xiulet de fons del micròfon amb la funció *Reducció de soroll*, afegeix una melodia suau de fons i exporta el resultat a `tutorial.mp3` a 192 kbps.
3. **Disseny d'un cartell informatiu:** Crea a Canva o LibreOffice Draw un cartell en format vertical combinant icones vectorials i text clar sobre l'ús de les aules informàtiques.
4. **Subtitulat d'un vídeo tutorial:** Redacta un fitxer `subtitols.srt` sincronitzant el text amb codis de temps per a la píndola de vídeo.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quina taxa de mostreig i profunditat de bits utilitza l'estàndard d'àudio digital de qualitat CD?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_1" value="a"> 44,1 kHz (44.100 mostres per segon) i 16 bits de resolució</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_1" value="b"> 100 Hz i 4 bits</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_1" value="c"> 1 Megahertz i 1 bit</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_1" value="d"> 1.000 kHz i 64 bits</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! D'acord amb el teorema de Nyquist, cal mostrejar com a mínim al doble de la freqüència màxima audible (20 kHz)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quin és el gran avantatge d'una imatge vectorial (format SVG) sobre una imatge de mapa de bits (JPG o PNG)?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_2" value="a"> Es pot ampliar a qualsevol mida gegant sense perdre mai nitidesa ni pixelar-se, perquè es basa en fórmules matemàtiques</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_2" value="b"> Només admet colors blancs i negres</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_2" value="c"> Ocupa sempre més de 10 Gigabytes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_2" value="d"> No es pot obrir en cap navegador web</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Els vectors defineixen línies, corbes i colors que es recalculen a qualsevol resolució." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Què s'ha de fer a Audacity abans d'aplicar el filtre d'Eliminació de soroll a una gravació de veu?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_3" value="a"> Seleccionar un fragment de silenci on només se senta el soroll de fons per capturar el 'Perfil de soroll'</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_3" value="b"> Cridar fort al micròfon</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_3" value="c"> Apagar els altaveus</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_3" value="d"> Convertir la pista a so mono</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! Audacity necessita aprendre quines freqüències corresponen al soroll estàtic per eliminar-les sense danyar la veu." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Quina diferència hi ha entre un contenidor de vídeo com MP4 i un còdec com H.264?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_4" value="a"> El contenidor és la caixa que agrupa vídeo, àudio i subtítols (MP4); el còdec és l'algoritme que comprimeix el flux de dades (H.264)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_4" value="b"> Són exactament dues paraules per a la mateixa cosa</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_4" value="c"> H.264 és un model de televisió</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co8g_4" value="d"> MP4 només conté text</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! El contenidor empaqueta les pistes mentre que el còdec s'encarrega de la codificació i descodificació." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD08)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD08" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
