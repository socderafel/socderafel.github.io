---
layout: default
title: "UD1: Organització d'Arxius i Gestió Documental — Ofimàtica i Arxiu de Documents"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD1"
prev_url: "../index.html"
prev_label: "🏠 Índex del Mòdul"
next_url: "ut0101.html"
next_label: "1.1 Concepte d'Arxiu ➡️"
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

# 📁 UD1: Organització d'Arxius i Gestió Documental

Benvingut/da a la **Unitat Didàctica 1** del mòdul professional d'**Ofimàtica i Arxiu de Documents (OAD)**. En aquesta unitat aprendràs com organitzar la informació digital d'una oficina o empresa amb criteri professional: disseny d'arbres de carpetes, aplicació de pautes de nomenclatura documental, identificació d'extensions, compressió amb 7-Zip i protecció de dades amb la regla 3-2-1 de còpies de seguretat.

---

## 🗺️ Mapa d'Aprenentatge de la Unitat 1

| Apartat | Títol del Tema | Continguts Pràctics i Tècnics | Activitats i Puntuació | Accés Directe |
| :---: | :--- | :--- | :--- | :---: |
| **1.1** | **Concepte d'Arxiu i Arbre de Directoris** | Estructura en arbre, arrel, rutes absolutes vs relatives i dreceres de teclat (`Ctrl+Maj+N`). | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0101.html) |
| **1.2** | **Nomenclatura Homogènia i Codificació** | Norma ISO 8601 (`AAAA-MM-DD`), regles d'or per anomenar fitxers i control de versions. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0102.html) |
| **1.3** | **Tipus de Fitxers, Extensions i Associació** | Formats lliures ODF (`.odt, .ods`), PDF/A, imatges i programari predeterminat. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0103.html) |
| **1.4** | **Compressió d'Arxius i Xifratge Bàsic** | Empaquetament ZIP vs 7-Zip, càlcul de ràtio d'estalvi i protecció amb contrasenya AES-256. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0104.html) |
| **1.5** | **Còpies de Seguretat Locals i al Núvol** | La regla d'or 3-2-1 del backup, tipus de còpia (completa vs incremental) i anti-ransomware. | 3 Reptes (+75 pts) + PDF Aules | [**Entrar ➡️**](./ut0105.html) |

---

## 🎯 Reptes Globals d'Avaluació de la Unitat

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 1: Quin camí descriu la ruta absoluta de la factura Factura01.odt a Windows?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_1" value="a"> C:\Empresa\Factures\2026\Factura01.odt</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_1" value="b"> ..\Factura01.odt</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_1" value="c"> Factura01.odt</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_1" value="d"> /home/alumne</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La ruta absoluta comença amb la lletra de la unitat C:\ i detalla totes les carpetes intermèdies." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 2: Quin nom compleix escrupolosament la norma de nomenclatura professional i ISO 8601?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_2" value="a"> 2026-11-03_Contracte_Transport_v01.pdf</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_2" value="b"> contracte 03/11/2026 final.pdf</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_2" value="c"> CONTRACTE_DEF.odt</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_2" value="d"> nou_doc(1).docx</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! Format AAAA-MM-DD, sense espais, sense caràcters prohibits i amb versió clara." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 3: Quin format assegura que un document conservi el disseny idèntic en qualsevol pantalla o impressora?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_3" value="a"> PDF (.pdf)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_3" value="b"> TXT (.txt)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_3" value="c"> BMP (.bmp)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_3" value="d"> BAT (.bat)</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El format PDF va ser dissenyat específicament per a la portabilitat i la impressió exacta." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0; background:#f8fafc;">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700; color:#1e293b;">Repte Global 4: Per què la regla 3-2-1 exigeix tenir almenys una còpia fora de la seu física de l'empresa?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_4" value="a"> Per protegir la informació en cas de catàstrofe física a l'oficina (incendi, inundació, robatori)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_4" value="b"> Perquè els servidors locals no admeten fitxers de text</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_4" value="c"> Per complir un requisit exclusiu de les xarxes socials</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="cg01_4" value="d"> No té cap utilitat real</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! Una còpia al núvol o externa garanteix la continuïtat del negoci davant de qualsevol desastre físic." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="border:2px dashed #0284c7; border-radius:8px; padding:16px; background:#f0f9ff; margin:24px 0;">
  <h3 style="margin-top:0; color:#0369a1;">📦 Lliurament Global d'Aules (UD1: Organització d'Arxius)</h3>
  <p>En acabar els reptes interactius i pràctiques de la UD1, genera el teu certificat oficial per a la tasca d'Aules:</p>
  <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
    <input type="text" class="aules-student-name" placeholder="Cognoms, Nom de l'Alumne/a" style="padding:8px 12px; border:1px solid #94a3b8; border-radius:4px; flex-grow:1; min-width:240px;">
    <button class="btn-generate-aules-pdf" data-unit="UD01" data-activity="Global" data-module="OAD" style="padding:8px 16px; background:#0284c7; color:#fff; border:none; border-radius:4px; font-weight:600; cursor:pointer;">📄 Descarregar PDF per a Aules</button>
  </div>
</div>
