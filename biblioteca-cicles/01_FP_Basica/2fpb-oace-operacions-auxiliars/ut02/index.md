---
layout: default
title: "UD2: Instal·lació i Particionament de Sistemes Operatius — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD2"
---

# 💽 UD2: Instal·lació i Particionament de Sistemes Operatius

Benvingut/da a la **Unitat Didàctica 2** del mòdul d'**Operacions Auxiliars per a la Configuració i l'Explotació (OACE)**. En aquest bloc temàtic aprendràs a estructurar unitats d'emmagatzematge físiques (HDD i SSD), crear taules de particions (**MBR** i **GPT**), triar el sistema de fitxers adequat (**NTFS, ext4, FAT32, exFAT**), preparar memòries USB arrencables (**Rufus i Ventoy**) i instal·lar pas a pas **Windows** i **Ubuntu/LliureX**.

---

### 🗺️ Mapa Conceptual de la Unitat
```text
┌────────────────────────────────────────────────────────────────────────┐
│      UD2: PARTICIONAMENT I INSTAL·LACIÓ DE SISTEMES OPERATIUS          │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 📐 ESTRUCTURES DISC│ 📁 SISTEMES FITXERS│ 🚀 EINES I DESPLEGAMENT     │
│ • MBR (BIOS, 2 TB) │ • NTFS (Windows)   │ • Rufus (ISO única)          │
│ • GPT (UEFI, 128 p)│ • ext4 (Linux)     │ • Ventoy (Multiboot)         │
│ • Primària / Estesa│ • FAT32 (màx 4 GB) │ • Instal·lació pas a pas     │
│ • Lògica / EFI Sys │ • exFAT (Pendrives)│ • OOBE i partició d'arrel /  │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### 📑 Apartats de la Unitat Didàctica

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **2.1** | **Estructures de disc i taules de particions: MBR vs GPT** | Sectors de disc LBA, limitació històrica de 2 TB en MBR, 128 particions primàries en GPT i seguretat de capçalera. | [**Accedir al Tema 2.1 ➡️**](./ut0201.html) |
| **2.2** | **Sistemes de fitxers més comuns: NTFS, ext4, FAT32 i exFAT** | Journaling de transaccions, permisos d'accés, limitació de 4 GB per fitxer en FAT32 i compatibilitat entre SOs. | [**Accedir al Tema 2.2 ➡️**](./ut0202.html) |
| **2.3** | **Preparació de memòries USB arrancables amb Rufus i Ventoy** | Creació de LiveUSB de taller, selecció de taula MBR/GPT segons la BIOS, i avantatges del multiboot amb Ventoy. | [**Accedir al Tema 2.3 ➡️**](./ut0203.html) |
| **2.4** | **Pràctica: Instal·lació pas a pas de Windows 10/11** | Ordre d'arrencada a la BIOS/UEFI, particionament inicial de Windows, assistent OOBE i creació de compte local. | [**Accedir al Tema 2.4 ➡️**](./ut0204.html) |
| **2.5** | **Pràctica: Instal·lació d'Ubuntu Desktop / LliureX** | Menú GRUB, particionament avançat separant arrel `/` i `/home`, format ext4 i comprovació de punts de muntatge. | [**Accedir al Tema 2.5 ➡️**](./ut0205.html) |

---

### 🧪 Taller Pràctic de Laboratori: Posada a Punt d'un Equip amb Disc Particionat

1. **Planificació del disc:** Donat un disc SSD de 240 GB, calcula una distribució per albergar sistema operatiu i una partició de dades separada per protegir els fitxers dels usuaris en cas de reinstal·lació.
2. **Creació d'un USB arrencable:** Prepara un pendrive amb Ventoy i copia les imatges ISO de Windows i LliureX.
3. **Instal·lació guiada:** Realitza la instal·lació creant una partició per al sistema (`C:` de 120 GB) i una segona partició de magatzem (`D:` amb la resta d'espai).
4. **Verificació a l'Administrador de Discs:** Obre `diskmgmt.msc` i comprova que la taula de particions és GPT i que les lletres d'unitat estan correctament assignades.

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
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quin és el límit màxim de capacitat gestionable per una taula de particions MBR clàssica?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_1" value="a"> 2 Terabytes (2 TB)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_1" value="b"> 500 Gigabytes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_1" value="c"> 16 Terabytes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_1" value="d"> Il·limitat</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! MBR utilitza adreces de sector LBA de 32 bits, el que limita la mida màxima de disc a 2 TB." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Per quin motiu un fitxer de vídeo de 6 GB no es pot copiar a un pendrive formatat en FAT32?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_2" value="a"> Perquè FAT32 no permet fitxers individuals de més de 4 GB</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_2" value="b"> Perquè els pendrives no accepten vídeos</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_2" value="c"> Perquè cal comprimir-lo abans amb WinRAR</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_2" value="d"> Perquè cal arrencar l'equip en mode segur</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! La limitació matemàtica del camp de mida a FAT32 és de 4 GB - 1 byte. Per copiar fitxers més grans cal emprar exFAT o NTFS." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quin és el principal avantatge d'utilitzar Ventoy per davant de Rufus en un taller de manteniment?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_3" value="a"> Permet copiar múltiples imatges ISO al mateix pendrive sense formatejar-lo cada vegada</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_3" value="b"> Instal·la Windows sense necessitar disc dur</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_3" value="c"> Repara les memòries RAM trencades</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_3" value="d"> Neteja el pols dels ventiladors</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! Amb Ventoy només cal arrossegar els fitxers .iso a la memòria USB i crearà un menú d'arrencada automàtic." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: En una instal·lació avançada de Linux, per què és recomanable crear una partició separada per a `/home`?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_4" value="a"> Perquè permet reinstal·lar el sistema formatant només `/` sense perdre els documents personals</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_4" value="b"> Perquè fa que la pantalla es veja amb més brillantor</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_4" value="c"> Perquè Linux no arrenca si no té 10 particions</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="co2g_4" value="d"> Perquè impedeix l'entrada de virus a la BIOS</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Fantàstic! Separar `/` i `/home` és una regla d'or que protegeix les dades dels usuaris davant de reinstal·lacions del sistema." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament d'Activitats d'Aules (Avaluació Global UD02)</h3>
  <p>Genera el certificat de qualificació d'aquesta unitat amb el teu nom i puntuació obtinguda.</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD02" data-activity="Global" data-module="OACE" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
